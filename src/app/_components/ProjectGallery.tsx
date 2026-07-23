"use client";

import { useEffect, useState, useSyncExternalStore } from "react";
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

export function ProjectGallery({ projects }: { projects: Project[] }) {
  const [activeFilter, setActiveFilter] = useState<FilterValue>("all");
  const [blockedProject, setBlockedProject] = useState<Project | null>(null);
  const [redirectProject, setRedirectProject] = useState<Project | null>(null);
  const [noticeVisible, setNoticeVisible] = useState(true);
  const [noticeRestart, setNoticeRestart] = useState(0);
  const isLimitedDevice = useSyncExternalStore(
    subscribeToDeviceChanges,
    getLimitedDeviceSnapshot,
    getServerDeviceSnapshot,
  );

  const visibleProjects =
    activeFilter === "all"
      ? projects
      : projects.filter((project) => project.category === activeFilter);

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
        setRedirectProject(null);
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", closeOnEscape);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", closeOnEscape);
    };
  }, [blockedProject, redirectProject]);

  useEffect(() => {
    if (!redirectProject?.href) return;

    const timer = window.setTimeout(() => {
      window.location.assign(redirectProject.href!);
    }, 3000);

    return () => window.clearTimeout(timer);
  }, [redirectProject]);

  const handleProjectClick = (
    event: MouseEvent<HTMLAnchorElement>,
    project: Project,
  ) => {
    if (project.category === "content") {
      event.preventDefault();
      setRedirectProject(project);
      return;
    }

    if (!project.desktopOnly || !isLimitedDevice) return;
    event.preventDefault();
    setBlockedProject(project);
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
                      >
                        Uygulamayı indir ve dene
                      </a>
                    ) : (
                      <span>{project.downloadStatus}</span>
                    )}
                    {project.href ? (
                      <a href={project.href} target="_blank" rel="noreferrer">
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

      {isLimitedDevice && noticeVisible && !blockedProject ? (
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
            <p className="redirectEyebrow">AtKafası Fanzin</p>
            <h2 id="content-redirect-title">Sayfaya yönlendiriliyorsunuz</h2>
            <p>
              Daha az komisyon için Shopier&apos;i tercih edebilir; dilersen
              Gumroad&apos;dan da satın alıp yorum bırakabilirsin.
            </p>
            <div className="redirectChoices">
              <a href={redirectProject.href}>Shopier</a>
              {redirectProject.secondaryHref ? (
                <a href={redirectProject.secondaryHref}>Gumroad</a>
              ) : null}
            </div>
            <button type="button" onClick={() => setRedirectProject(null)}>
              Fikkis&apos;te kal
            </button>
            <span className="redirectProgress" aria-hidden="true" />
          </section>
        </div>
      ) : null}
    </>
  );
}
