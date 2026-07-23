import Image from "next/image";
import { FloatingPortal } from "./_components/FloatingPortal";
import { projects } from "./projects";

const instagramUrl =
  "https://www.instagram.com/memode333?igsh=aWZkZDM3dXR1azBk";

export default function Home() {
  return (
    <>
      <main className="fikkisPage" id="top">
        <header className="fikkisHeader">
          <a className="fikkisMark" href="#top" aria-label="Fikkis ana sayfa">
            fikkis<span>●</span>
          </a>
          <p>
            web deneyleri ve başka şeyler
            <br />
            Çayan tarafından yapıldı
          </p>
        </header>

        <section className="projectGallery" aria-labelledby="gallery-title">
          <h1 id="gallery-title" className="srOnly">
            Fikkis projeleri
          </h1>
          {projects.map((project) => (
            <article
              className={`projectCard tone-${project.tone}`}
              data-kind={project.kind}
              key={project.id}
            >
              <div className={`liveWindow liveWindow-${project.kind}`}>
                <div className="windowBar">
                  <span className="windowDots" aria-hidden="true">
                    <i />
                    <i />
                    <i />
                  </span>
                  <strong>{project.title}</strong>
                  <a
                    href={project.openUrl}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`${project.title} projesini tam ekranda aç`}
                  >
                    tam ekran ↗
                  </a>
                </div>
                <div className="liveStage">
                  <Image
                    className="projectPoster"
                    src={project.preview}
                    alt={`${project.title} gerçek proje ekranı`}
                    fill
                    priority={project.kind === "web"}
                    sizes={
                      project.kind === "web"
                        ? "(max-width: 900px) calc(100vw - 34px), 590px"
                        : "(max-width: 700px) 360px, 28vw"
                    }
                    style={{ objectPosition: project.previewPosition ?? "center" }}
                  />
                  {project.liveUrl ? (
                    <iframe
                      src={project.liveUrl}
                      title={`${project.title} canlı proje penceresi`}
                      loading="lazy"
                      allow="accelerometer; autoplay; clipboard-read; clipboard-write; fullscreen; gyroscope; pointer-lock"
                      allowFullScreen
                      referrerPolicy="strict-origin-when-cross-origin"
                    />
                  ) : (
                    <a
                      className="prototypeLauncher"
                      href={project.openUrl}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`${project.title} mobil prototipini Figma'da aç`}
                    >
                      <span>mobil prototipi aç ↗</span>
                    </a>
                  )}
                  <span className="liveBadge">
                    {project.kind === "web" ? "canlı · burada dene" : "Figma · tam ekranda dene"}
                  </span>
                </div>
              </div>

              <div className="projectCaption">
                <span>
                  <strong>{project.title}</strong>
                  <small>{project.category}</small>
                </span>
                <p>{project.description}</p>
              </div>
            </article>
          ))}
        </section>

        <footer className="fikkisFooter">
          <p>İnternette çalışan, oynanan ve keşfedilen küçük dünyalar.</p>
          <small>fikkis / 2026</small>
        </footer>
      </main>

      <FloatingPortal
        href={instagramUrl}
        destination="@memode333"
        eyebrow="Instagram"
        previewSrc="/portal-instagram.png"
        storageKey="fikkis-instagram-portal-v1"
      />
    </>
  );
}
