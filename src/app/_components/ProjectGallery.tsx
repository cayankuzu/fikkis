"use client";

import {
  useCallback,
  useEffect,
  useRef,
  useState,
  useSyncExternalStore,
} from "react";
import type { MouseEvent } from "react";
import type { Project } from "../projects";
import { ProjectSlideshow } from "./ProjectSlideshow";

type FilterValue = "all" | Project["category"];

const filters: { value: FilterValue; label: string }[] = [
  { value: "all", label: "Hepsi" },
  { value: "web", label: "Web sitesi" },
  { value: "game", label: "Oyun" },
  { value: "mobile", label: "Mobil uygulama" },
  { value: "content", label: "İçerik" },
];

function getLimitedDeviceSnapshot() {
  const hasMouseLikePointer = window.matchMedia(
    "(any-pointer: fine) and (any-hover: hover)",
  ).matches;

  return window.innerWidth < 960 || !hasMouseLikePointer;
}

function subscribeToDeviceChanges(onStoreChange: () => void) {
  const pointerQuery = window.matchMedia(
    "(any-pointer: fine) and (any-hover: hover)",
  );

  window.addEventListener("resize", onStoreChange);
  pointerQuery.addEventListener("change", onStoreChange);

  return () => {
    window.removeEventListener("resize", onStoreChange);
    pointerQuery.removeEventListener("change", onStoreChange);
  };
}

function getServerDeviceSnapshot() {
  return false;
}

function openRedirectTab(projectTitle: string) {
  const redirectTab = window.open("", "_blank");

  if (!redirectTab) return null;

  try {
    redirectTab.opener = null;
    redirectTab.document.open();
    redirectTab.document.write(`<!doctype html>
<html lang="tr">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>Fikkis · Yönlendiriliyor</title>
    <style>
      * { box-sizing: border-box; }
      body {
        min-height: 100vh;
        margin: 0;
        display: grid;
        place-items: center;
        padding: 24px;
        color: #181818;
        background: #f7f6f2;
        font-family: Arial, Helvetica, sans-serif;
      }
      main {
        width: min(100%, 520px);
        padding: 36px;
        border: 2px solid #181818;
        border-radius: 24px;
        background: #fff;
        box-shadow: 10px 10px 0 #181818;
        text-align: center;
      }
      .spinner {
        width: 42px;
        height: 42px;
        margin: 0 auto 22px;
        border: 4px solid #d8d8d8;
        border-top-color: #181818;
        border-radius: 50%;
        animation: spin .8s linear infinite;
      }
      .eyebrow {
        margin: 0 0 8px;
        color: #707070;
        font-size: 12px;
        font-weight: 800;
        letter-spacing: .14em;
        text-transform: uppercase;
      }
      h1 { margin: 0; font-size: clamp(25px, 6vw, 38px); }
      #destination {
        display: block;
        margin-top: 10px;
        font-size: 18px;
      }
      .copy {
        margin: 22px auto 0;
        color: #565656;
        font-size: 14px;
        line-height: 1.55;
      }
      nav {
        display: flex;
        justify-content: center;
        gap: 10px;
        margin-top: 20px;
      }
      a {
        padding: 10px 15px;
        border: 1px solid #181818;
        border-radius: 999px;
        color: inherit;
        font-size: 13px;
        font-weight: 700;
        text-decoration: none;
      }
      .progress {
        display: block;
        width: 100%;
        height: 4px;
        margin-top: 26px;
        overflow: hidden;
        border-radius: 999px;
        background: #e7e7e7;
      }
      .progress::after {
        content: "";
        display: block;
        width: 100%;
        height: 100%;
        background: #181818;
        transform-origin: left;
        animation: progress 3s linear forwards;
      }
      @keyframes spin { to { transform: rotate(360deg); } }
      @keyframes progress { from { transform: scaleX(0); } to { transform: scaleX(1); } }
    </style>
  </head>
  <body>
    <main>
      <div class="spinner" aria-hidden="true"></div>
      <p class="eyebrow">Bana destek ol</p>
      <h1>Siteye yönlendiriliyorsunuz</h1>
      <strong id="destination"></strong>
      <p class="copy">
        AtKafası fanzinini istediğin platformdan alabilirsin. Shopier daha az
        komisyon keser; Gumroad alternatif satın alma ve yorum alanıdır.
      </p>
      <nav aria-label="Destek bağlantıları">
        <a href="https://www.shopier.com/atkafasifanzin" target="_blank" rel="noreferrer">Shopier</a>
        <a href="https://atkafasifanzin.gumroad.com/" target="_blank" rel="noreferrer">Gumroad</a>
      </nav>
      <span class="progress" aria-hidden="true"></span>
    </main>
  </body>
</html>`);
    redirectTab.document.close();

    const destination = redirectTab.document.getElementById("destination");
    if (destination) destination.textContent = projectTitle;
  } catch {
    // Sekme yine ayrılmıştır; yönlendirme zamanlayıcısı çalışmaya devam eder.
  }

  return redirectTab;
}

export function ProjectGallery({ projects }: { projects: Project[] }) {
  const [activeFilter, setActiveFilter] = useState<FilterValue>("all");
  const [blockedProject, setBlockedProject] = useState<Project | null>(null);
  const [redirectProject, setRedirectProject] = useState<Project | null>(null);
  const [hasRedirectTab, setHasRedirectTab] = useState(false);
  const [noticeVisible, setNoticeVisible] = useState(true);
  const [noticeRestart, setNoticeRestart] = useState(0);
  const redirectTabRef = useRef<Window | null>(null);
  const isLimitedDevice = useSyncExternalStore(
    subscribeToDeviceChanges,
    getLimitedDeviceSnapshot,
    getServerDeviceSnapshot,
  );

  const visibleProjects =
    activeFilter === "all"
      ? projects
      : projects.filter((project) => project.category === activeFilter);

  const cancelRedirect = useCallback(() => {
    const redirectTab = redirectTabRef.current;

    if (redirectTab && !redirectTab.closed) redirectTab.close();

    redirectTabRef.current = null;
    setHasRedirectTab(false);
    setRedirectProject(null);
  }, []);

  useEffect(() => {
    if (!isLimitedDevice) return;

    let timer: number;

    const hidePhase = () => {
      setNoticeVisible(false);
      timer = window.setTimeout(showPhase, 3000);
    };

    const showPhase = () => {
      setNoticeVisible(true);
      timer = window.setTimeout(hidePhase, 23000);
    };

    timer =
      noticeRestart > 0
        ? window.setTimeout(showPhase, 3000)
        : window.setTimeout(hidePhase, 23000);

    return () => window.clearTimeout(timer);
  }, [isLimitedDevice, noticeRestart]);

  useEffect(() => {
    if (!blockedProject && !redirectProject) return;

    const previousOverflow = document.body.style.overflow;
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setBlockedProject(null);
        cancelRedirect();
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", closeOnEscape);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", closeOnEscape);
    };
  }, [blockedProject, redirectProject, cancelRedirect]);

  useEffect(() => {
    if (!redirectProject?.href) return;

    const timer = window.setTimeout(() => {
      const redirectTab = redirectTabRef.current;

      if (!redirectTab || redirectTab.closed) {
        setHasRedirectTab(false);
        return;
      }

      redirectTab.location.replace(redirectProject.href!);
      redirectTabRef.current = null;
      setHasRedirectTab(false);
      setRedirectProject(null);
    }, 3000);

    return () => window.clearTimeout(timer);
  }, [redirectProject]);

  const handleProjectClick = (
    event: MouseEvent<HTMLAnchorElement>,
    project: Project,
    destination = project.href,
  ) => {
    if (project.desktopOnly && isLimitedDevice) {
      event.preventDefault();
      setBlockedProject(project);
      return;
    }

    if (!destination) return;
    event.preventDefault();

    const previousRedirectTab = redirectTabRef.current;
    if (previousRedirectTab && !previousRedirectTab.closed) {
      previousRedirectTab.close();
    }

    const redirectTab = openRedirectTab(project.title);
    redirectTabRef.current = redirectTab;
    setHasRedirectTab(Boolean(redirectTab));
    setRedirectProject({ ...project, href: destination });
  };

  const dismissNotice = () => {
    setNoticeVisible(false);
    setNoticeRestart((current) => current + 1);
  };

  return (
    <>
      <section className="projectSection" aria-labelledby="gallery-title">
        <h1 id="gallery-title" className="srOnly">
          Fikkis projeleri
        </h1>

        <div className="filterBar" aria-label="Projeleri kategoriye göre filtrele">
          {filters.map((filter) => (
            <button
              className={activeFilter === filter.value ? "is-active" : ""}
              key={filter.value}
              type="button"
              aria-pressed={activeFilter === filter.value}
              onClick={() => setActiveFilter(filter.value)}
            >
              {filter.label}
            </button>
          ))}
        </div>

        <p className="srOnly" aria-live="polite">
          {visibleProjects.length} proje gösteriliyor.
        </p>

        <div className="projectGallery">
          {visibleProjects.map((project, index) => (
            <article
              className={`projectCard tone-${project.tone}`}
              key={project.id}
            >
              <div className="projectMedia">
                {project.href ? (
                  <a
                    className="projectLink"
                    href={project.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`${project.title} projesini aç`}
                    onClick={(event) => handleProjectClick(event, project)}
                  >
                    <ProjectSlideshow project={project} priority={index < 3} />
                  </a>
                ) : (
                  <ProjectSlideshow project={project} priority={index < 3} />
                )}

                {project.category === "mobile" ? (
                  <div className="mobileProjectActions">
                    {project.downloadUrl ? (
                      <a
                        href={project.downloadUrl}
                        target="_blank"
                        rel="noreferrer"
                        onClick={(event) =>
                          handleProjectClick(event, project, project.downloadUrl)
                        }
                      >
                        Uygulamayı indir ve dene
                      </a>
                    ) : (
                      <span>{project.downloadStatus}</span>
                    )}
                    {project.href ? (
                      <a
                        href={project.href}
                        target="_blank"
                        rel="noreferrer"
                        onClick={(event) =>
                          handleProjectClick(event, project, project.href)
                        }
                      >
                        Etkileşimli mockup&apos;ı aç
                      </a>
                    ) : null}
                  </div>
                ) : null}
              </div>

              <div className="projectCaption">
                <h2>{project.title}</h2>
                <p className="projectHook">{project.hook}</p>
                <p className="projectDescription">{project.description}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {isLimitedDevice &&
      noticeVisible &&
      !blockedProject &&
      !redirectProject ? (
        <aside className="mobileExperienceNotice" role="status">
          <div>
            <strong>Daha iyi bir deneyim için bilgisayar kullan</strong>
            <p>
              Oyunlar ve mobil uygulamalar burada çalışır. Üç boyutlu web
              deneyimleri klavye, fare ve geniş ekran gerektirir.
            </p>
          </div>
          <button type="button" onClick={dismissNotice}>
            Mobilde devam et
          </button>
          <span className="noticeTimer" aria-hidden="true" />
        </aside>
      ) : null}

      {blockedProject ? (
        <div
          className="desktopGateBackdrop"
          role="presentation"
          onMouseDown={(event) => {
            if (event.currentTarget === event.target) setBlockedProject(null);
          }}
        >
          <section
            className="desktopGate"
            role="dialog"
            aria-modal="true"
            aria-labelledby="desktop-gate-title"
            aria-describedby="desktop-gate-description"
          >
            <span>Masaüstü deneyimi</span>
            <h2 id="desktop-gate-title">{blockedProject.title}</h2>
            <p id="desktop-gate-description">
              Bu proje klavye, fare ve geniş bir ekran için tasarlandı. Sorunsuz
              kullanmak için en az 960 piksel genişliğinde bir bilgisayardan aç.
            </p>
            <button
              type="button"
              autoFocus
              onClick={() => setBlockedProject(null)}
            >
              Fikkis&apos;te kal
            </button>
          </section>
        </div>
      ) : null}

      {redirectProject ? (
        <div className="contentRedirectBackdrop" role="presentation">
          <section
            className="contentRedirect"
            role="dialog"
            aria-modal="true"
            aria-labelledby="content-redirect-title"
          >
            <span className="redirectSpinner" aria-hidden="true" />
            <p className="redirectEyebrow">Bana destek ol</p>
            <h2 id="content-redirect-title">Siteye yönlendiriliyorsunuz</h2>
            <strong className="redirectDestination">
              {redirectProject.title}
            </strong>
            <p>
              AtKafası fanzinini istediğin platformdan alabilirsin. Shopier daha
              az komisyon keser; Gumroad ise alternatif satın alma ve yorum
              alanıdır. Aldıktan sonra yorumunu bırakmayı unutma.
            </p>
            <div className="redirectChoices">
              <a
                href="https://www.shopier.com/atkafasifanzin"
                target="_blank"
                rel="noreferrer"
              >
                Shopier
              </a>
              <a
                href="https://atkafasifanzin.gumroad.com/"
                target="_blank"
                rel="noreferrer"
              >
                Gumroad
              </a>
            </div>
            {!hasRedirectTab && redirectProject.href ? (
              <a
                className="redirectManualOpen"
                href={redirectProject.href}
                target="_blank"
                rel="noreferrer"
                onClick={() => setRedirectProject(null)}
              >
                Yeni sekmede aç
              </a>
            ) : null}
            <button type="button" onClick={cancelRedirect}>
              Fikkis&apos;te kal
            </button>
            <span className="redirectProgress" aria-hidden="true" />
          </section>
        </div>
      ) : null}
    </>
  );
}
