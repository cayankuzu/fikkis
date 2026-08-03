"use client";

import Image from "next/image";
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

function openRedirectTab(projectTitle: string, destinationUrl: string) {
  const redirectTab = window.open("", "_blank");

  if (!redirectTab) return null;

  const coverUrl = new URL("/atkafasi-cover.webp", window.location.origin).href;

  try {
    redirectTab.opener = null;
    redirectTab.document.open();
    redirectTab.document.write(`<!doctype html>
<html lang="tr">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>Fikkis · Bağımsız üretime destek</title>
    <style>
      :root {
        color-scheme: light;
        --ink: #17140f;
        --paper: #fff8e9;
        --orange: #ff5c22;
        --pink: #ff3f82;
        --blue: #245dff;
        --lime: #dfff45;
      }
      * { box-sizing: border-box; }
      body {
        min-height: 100vh;
        margin: 0;
        display: grid;
        place-items: center;
        overflow-x: hidden;
        padding: clamp(18px, 4vw, 44px);
        color: var(--ink);
        background:
          radial-gradient(circle at 9% 12%, rgba(223, 255, 69, .9) 0 8%, transparent 23%),
          radial-gradient(circle at 91% 9%, rgba(255, 63, 130, .72) 0 9%, transparent 27%),
          radial-gradient(circle at 87% 91%, rgba(36, 93, 255, .65) 0 8%, transparent 29%),
          #ff7849;
        font-family: Arial, Helvetica, sans-serif;
      }
      body::before {
        content: "";
        position: fixed;
        inset: 0;
        pointer-events: none;
        opacity: .14;
        background-image: radial-gradient(#17140f 1px, transparent 1px);
        background-size: 18px 18px;
      }
      main {
        position: relative;
        isolation: isolate;
        width: min(100%, 690px);
        overflow: hidden;
        padding: clamp(24px, 5vw, 44px);
        border: 3px solid var(--ink);
        border-radius: clamp(24px, 5vw, 38px);
        background: var(--paper);
        box-shadow: 14px 14px 0 var(--ink), 0 30px 90px rgba(66, 19, 3, .28);
      }
      main::after {
        content: "YENİ FİKİRLER • YENİ DÜNYALAR •";
        position: absolute;
        z-index: -1;
        right: -72px;
        top: 92px;
        padding: 8px 90px;
        color: #fff;
        background: var(--blue);
        font-size: 10px;
        font-weight: 900;
        letter-spacing: .14em;
        transform: rotate(37deg);
      }
      header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 20px;
        padding-bottom: 20px;
        border-bottom: 2px solid var(--ink);
      }
      .brand {
        font-size: clamp(25px, 6vw, 38px);
        font-weight: 950;
        letter-spacing: -.07em;
      }
      .brand small {
        display: block;
        margin-top: 2px;
        font-size: 9px;
        letter-spacing: .18em;
        text-transform: uppercase;
      }
      .issue {
        padding: 8px 12px;
        border: 2px solid var(--ink);
        border-radius: 999px;
        background: var(--lime);
        font-size: 10px;
        font-weight: 900;
        letter-spacing: .11em;
        text-align: center;
        transform: rotate(3deg);
      }
      .hero {
        display: grid;
        grid-template-columns: minmax(128px, .68fr) 1.5fr;
        align-items: center;
        gap: clamp(22px, 5vw, 42px);
        padding: clamp(28px, 6vw, 48px) 0 28px;
      }
      .cover {
        position: relative;
        aspect-ratio: .72;
        border: 3px solid var(--ink);
        border-radius: 8px 18px 8px 8px;
        background: var(--pink);
        box-shadow: 8px 8px 0 var(--ink);
        transform: rotate(-5deg);
        animation: float 3.4s ease-in-out infinite;
      }
      .cover::before {
        content: "AT\\A KAFASI";
        position: absolute;
        inset: 13px;
        display: grid;
        place-items: center;
        white-space: pre;
        border: 2px solid var(--ink);
        color: var(--paper);
        background:
          radial-gradient(circle at 50% 46%, var(--orange) 0 13%, transparent 14%),
          repeating-radial-gradient(circle at 50% 46%, transparent 0 12px, var(--ink) 13px 15px),
          var(--blue);
        font-size: clamp(19px, 4vw, 30px);
        font-weight: 950;
        line-height: .82;
        letter-spacing: -.06em;
        text-align: center;
      }
      .cover::after {
        content: "BAĞIMSIZ FANZİN";
        position: absolute;
        right: -18px;
        bottom: 20px;
        padding: 6px 9px;
        border: 2px solid var(--ink);
        background: var(--lime);
        font-size: 8px;
        font-weight: 950;
        letter-spacing: .09em;
        transform: rotate(-7deg);
      }
      .eyebrow {
        margin: 0 0 10px;
        color: var(--orange);
        font-size: 11px;
        font-weight: 950;
        letter-spacing: .16em;
        text-transform: uppercase;
      }
      h1 {
        max-width: 480px;
        margin: 0;
        font-size: clamp(32px, 7vw, 57px);
        line-height: .9;
        letter-spacing: -.065em;
      }
      h1 em {
        display: inline;
        color: var(--blue);
        font-style: normal;
      }
      #destination {
        display: inline-flex;
        margin-top: 17px;
        padding: 8px 12px;
        border: 2px solid var(--ink);
        border-radius: 999px;
        background: #fff;
        font-size: 12px;
        letter-spacing: .04em;
      }
      .copy {
        margin: 16px 0 0;
        color: #52493d;
        font-size: 14px;
        line-height: 1.55;
      }
      .impact {
        display: flex;
        flex-wrap: wrap;
        gap: 7px;
        margin-top: 18px;
      }
      .impact span {
        padding: 7px 9px;
        border: 1.5px solid var(--ink);
        border-radius: 999px;
        background: #fff;
        font-size: 9px;
        font-weight: 900;
        letter-spacing: .08em;
        text-transform: uppercase;
      }
      .impact span:nth-child(2) { background: var(--lime); }
      .impact span:nth-child(3) { color: #fff; background: var(--pink); }
      .support-note {
        margin: 0;
        padding: 15px 18px;
        border: 2px solid var(--ink);
        border-radius: 16px;
        background: #fff;
        font-size: 13px;
        line-height: 1.5;
        text-align: center;
      }
      nav {
        display: grid;
        grid-template-columns: 1.25fr 1fr;
        gap: 10px;
        margin-top: 14px;
      }
      a, #continue {
        display: flex;
        min-height: 52px;
        align-items: center;
        justify-content: center;
        border: 2px solid var(--ink);
        border-radius: 15px;
        color: inherit;
        font-size: 13px;
        font-weight: 900;
        text-decoration: none;
        transition: transform .18s ease, box-shadow .18s ease;
      }
      nav a:first-child { background: var(--lime); box-shadow: 4px 4px 0 var(--ink); }
      nav a:last-child { color: #fff; background: var(--blue); }
      a:hover, a:focus-visible, #continue:not(:disabled):hover, #continue:not(:disabled):focus-visible {
        outline: none;
        transform: translate(-2px, -2px);
        box-shadow: 5px 5px 0 var(--ink);
      }
      #continue {
        width: 100%;
        margin-top: 12px;
        color: #fff;
        background: var(--ink);
        font-family: inherit;
        cursor: pointer;
      }
      #continue:disabled { color: #6d655c; background: #ddd4c7; cursor: wait; }
      .progress {
        display: grid;
        grid-template-columns: auto 1fr;
        align-items: center;
        gap: 12px;
        margin-top: 14px;
        color: #756b60;
        font-size: 9px;
        font-weight: 900;
        letter-spacing: .1em;
        text-transform: uppercase;
      }
      .progress i {
        height: 5px;
        overflow: hidden;
        border-radius: 999px;
        background: #ded5c8;
      }
      .progress i::after {
        content: "";
        display: block;
        width: 100%;
        height: 100%;
        background: linear-gradient(90deg, var(--orange), var(--pink), var(--blue));
        transform-origin: left;
        animation: progress 3s linear forwards;
      }
      @keyframes float { 50% { transform: rotate(-2deg) translateY(-7px); } }
      @keyframes progress { from { transform: scaleX(0); } to { transform: scaleX(1); } }
      @media (max-width: 580px) {
        main { padding: 22px; box-shadow: 8px 8px 0 var(--ink); }
        main::after { display: none; }
        .hero { display: block; padding: 25px 0 22px; }
        .hero::after { content: ""; display: table; clear: both; }
        .cover { float: left; width: 88px; margin: 0 20px 14px 0; }
        .cover::after { display: none; }
        .copy { clear: both; padding-top: 17px; }
        .impact { clear: both; }
        nav { grid-template-columns: 1fr; }
      }
      @media (prefers-reduced-motion: reduce) {
        *, *::before, *::after { animation-duration: .01ms !important; animation-iteration-count: 1 !important; }
      }

      /* Sade destek ekranı */
      :root {
        --ink: #171512;
        --paper: #fbf8f2;
        --accent: #d85b36;
        --muted: #6f675e;
        --line: #d8d1c7;
      }
      body {
        padding: clamp(14px, 4vw, 36px);
        background: radial-gradient(circle at 50% 0, #f2d8cb 0, #e9e4dc 44%, #ddd8d0 100%);
      }
      body::before, main::after { display: none; }
      main {
        width: min(100%, 620px);
        padding: clamp(22px, 5vw, 38px);
        border: 1px solid rgba(23, 21, 18, .18);
        border-radius: 28px;
        background: var(--paper);
        box-shadow: 0 24px 70px rgba(23, 21, 18, .17);
      }
      header { padding-bottom: 16px; border-bottom: 1px solid var(--line); }
      .brand { font-size: clamp(25px, 5vw, 33px); letter-spacing: -.055em; }
      .brand small { display: none; }
      .issue {
        padding: 7px 10px;
        border: 1px solid var(--line);
        color: var(--muted);
        background: transparent;
        font-size: 9px;
        letter-spacing: .12em;
        transform: none;
      }
      .hero {
        grid-template-columns: minmax(118px, 148px) 1fr;
        gap: clamp(20px, 5vw, 34px);
        padding: clamp(24px, 5vw, 36px) 0 26px;
      }
      .cover {
        display: block;
        width: 100%;
        height: auto;
        aspect-ratio: 725 / 1011;
        object-fit: cover;
        border: 1px solid rgba(23, 21, 18, .35);
        border-radius: 12px;
        background: #d3d1d0;
        box-shadow: 7px 8px 0 rgba(23, 21, 18, .92);
        transform: rotate(-2deg);
        animation: none;
      }
      .eyebrow { margin-bottom: 9px; color: var(--accent); font-size: 10px; }
      h1 {
        font-size: clamp(34px, 7vw, 51px);
        line-height: .96;
        letter-spacing: -.055em;
      }
      h1 em { color: inherit; }
      .copy { margin-top: 14px; color: var(--muted); font-size: 14px; line-height: 1.5; }
      nav { margin-top: 0; }
      a, #continue {
        min-height: 49px;
        border: 1px solid var(--ink);
        border-radius: 12px;
        font-size: 12px;
        box-shadow: none;
      }
      nav a:first-child { color: #fff; background: var(--accent); box-shadow: none; }
      nav a:last-child { color: var(--ink); background: transparent; }
      a:hover, a:focus-visible, #continue:not(:disabled):hover, #continue:not(:disabled):focus-visible {
        color: #fff;
        background: var(--ink);
        box-shadow: none;
        transform: translateY(-2px);
      }
      #continue { margin-top: 10px; background: var(--ink); }
      #continue:disabled { color: #746e66; background: #ded9d1; }
      .progress { display: block; margin-top: 13px; }
      .progress i { display: block; height: 3px; background: var(--line); }
      .progress i::after { background: var(--accent); }
      @media (max-width: 480px) {
        main { padding: 20px; border-radius: 22px; box-shadow: 0 18px 50px rgba(23, 21, 18, .16); }
        .hero {
          display: grid;
          grid-template-columns: 92px 1fr;
          gap: 18px;
          padding: 22px 0;
        }
        .cover { float: none; width: 100%; margin: 0; box-shadow: 5px 6px 0 var(--ink); }
        .copy { clear: none; padding-top: 0; }
        nav { grid-template-columns: 1fr 1fr; }
      }
    </style>
  </head>
  <body>
    <main>
      <header>
        <div class="brand">fikkis</div>
        <div class="issue">ATKAFASI FANZİN</div>
      </header>
      <section class="hero">
        <img class="cover" src="${coverUrl}" alt="AtKafası Fanzin kapak görseli" width="725" height="1011" />
        <div>
          <p class="eyebrow">Bağımsız üretime destek</p>
          <h1>Bir sayı,<br /><em>yeni bir proje.</em></h1>
          <p class="copy">AtKafası’nı alarak yeni işlerin devamına katkı sağla.</p>
        </div>
      </section>
      <nav aria-label="Destek bağlantıları">
        <a href="https://www.shopier.com/atkafasifanzin" target="_blank" rel="noreferrer">Shopier’den al</a>
        <a href="https://atkafasifanzin.gumroad.com/" target="_blank" rel="noreferrer">Gumroad</a>
      </nav>
      <button id="continue" type="button" disabled>3 saniye · sonra devam</button>
      <div class="progress" aria-hidden="true"><i></i></div>
    </main>
    <script>
      (() => {
        const continueButton = document.getElementById("continue");

        window.setTimeout(() => {
          continueButton.disabled = false;
          const projectTitle = continueButton.dataset.projectTitle || "Projeye";
          continueButton.textContent = projectTitle + " projesine devam et";
        }, 3000);

        continueButton.addEventListener("click", () => {
          const destination = continueButton.dataset.destination;
          if (destination) window.location.replace(destination);
        });
      })();
    </script>
  </body>
</html>`);
    redirectTab.document.close();

    const continueButton = redirectTab.document.getElementById("continue");
    if (continueButton) {
      continueButton.dataset.destination = destinationUrl;
      continueButton.dataset.projectTitle = projectTitle;
    }
  } catch {
    // Sekme ayrılmıştır; tarayıcı yine de kullanıcıya boş sekmeyi gösterebilir.
  }

  return redirectTab;
}

export function ProjectGallery({ projects }: { projects: Project[] }) {
  const [activeFilter, setActiveFilter] = useState<FilterValue>("all");
  const [blockedProject, setBlockedProject] = useState<Project | null>(null);
  const [redirectProject, setRedirectProject] = useState<Project | null>(null);
  const [redirectReady, setRedirectReady] = useState(false);
  const [noticeVisible, setNoticeVisible] = useState(true);
  const [noticeRestart, setNoticeRestart] = useState(0);
  const isLimitedDevice = useSyncExternalStore(
    subscribeToDeviceChanges,
    getLimitedDeviceSnapshot,
    getServerDeviceSnapshot,
  );
  const filterCounts = projects.reduce<Record<FilterValue, number>>(
    (counts, project) => {
      counts.all += 1;
      counts[project.category] += 1;
      return counts;
    },
    { all: 0, web: 0, game: 0, mobile: 0, content: 0 },
  );

  const visibleProjects =
    activeFilter === "all"
      ? projects
      : projects.filter((project) => project.category === activeFilter);

  const cancelRedirect = () => {
    setRedirectReady(false);
    setRedirectProject(null);
  };

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
        setRedirectReady(false);
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
      setRedirectReady(true);
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

    const redirectTab = openRedirectTab(project.title, destination);
    if (!redirectTab) {
      setRedirectReady(false);
      setRedirectProject({ ...project, href: destination });
    }
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
              aria-label={`${filter.label}, ${filterCounts[filter.value]} içerik`}
              onClick={() => setActiveFilter(filter.value)}
            >
              {filter.label}
              <span className="filterCount" aria-hidden="true">
                {filterCounts[filter.value]}
              </span>
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
              Mobil uygulamalar, AtKafası Fanzin ve AudioRoom içindeki Mükemmel
              Boşluk telefonda açılır. Oyunlar ve diğer web deneyimleri klavye,
              fare ve geniş ekran gerektirir.
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
            <div className="redirectTopline">
              <strong>fikkis</strong>
              <span>AtKafası Fanzin</span>
            </div>
            <div className="redirectHero">
              <Image
                className="redirectCover"
                src="/atkafasi-cover.webp"
                alt="AtKafası Fanzin kapak görseli"
                width={725}
                height={1011}
                sizes="(max-width: 520px) 92px, 148px"
              />
              <div>
                <p className="redirectEyebrow">Bağımsız üretime destek</p>
                <h2 id="content-redirect-title">
                  Bir sayı,<br /><em>yeni bir proje.</em>
                </h2>
                <p className="redirectCopy">
                  AtKafası’nı alarak yeni işlerin devamına katkı sağla.
                </p>
              </div>
            </div>
            <div className="redirectChoices">
              <a
                href="https://www.shopier.com/atkafasifanzin"
                target="_blank"
                rel="noreferrer"
              >
                Shopier&apos;den al
              </a>
              <a
                href="https://atkafasifanzin.gumroad.com/"
                target="_blank"
                rel="noreferrer"
              >
                Gumroad
              </a>
            </div>
            {redirectProject.href ? (
              <button
                className="redirectContinue"
                type="button"
                disabled={!redirectReady}
                onClick={() => {
                  window.open(
                    redirectProject.href,
                    "_blank",
                    "noopener,noreferrer",
                  );
                  cancelRedirect();
                }}
              >
                {redirectReady
                  ? `${redirectProject.title} projesine devam et`
                  : "3 saniye · sonra devam"}
              </button>
            ) : null}
            <button className="redirectStay" type="button" onClick={cancelRedirect}>
              Fikkis&apos;te kal
            </button>
            <span className="redirectProgress" aria-hidden="true" />
          </section>
        </div>
      ) : null}
    </>
  );
}
