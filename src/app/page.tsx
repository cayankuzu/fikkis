import Image from "next/image";
import { FloatingPortal } from "./_components/FloatingPortal";
import { projects } from "./projects";

const officialSiteUrl = process.env.NEXT_PUBLIC_MEMODE_URL ?? "http://localhost:3001";

export default function Home() {
  return (
    <>
      <main className="fikkisPage" id="top">
        <header className="fikkisHeader">
          <a className="fikkisMark" href="#top" aria-label="Fikkis ana sayfa">
            fikkis<span>●</span>
          </a>
          <p>web deneyleri ve başka şeyler<br />Çayan tarafından yapıldı</p>
        </header>

        <section className="projectGallery" aria-labelledby="gallery-title">
          <h1 id="gallery-title" className="srOnly">Fikkis projeleri</h1>
          {projects.map((project) => (
            <article className={`projectCard tone-${project.tone}`} key={project.id}>
              <a href={project.href} target="_blank" rel="noreferrer" aria-label={`${project.title} projesini aç`}>
                <span className="projectPreview">
                  <Image
                    src={project.preview}
                    alt={`${project.title} gerçek proje önizlemesi`}
                    fill
                    priority={project.id === "remember" || project.id === "desain" || project.id === "audioroom"}
                    sizes="(max-width: 680px) calc(100vw - 34px), (max-width: 980px) 46vw, 360px"
                    style={{ objectPosition: project.previewPosition ?? "center" }}
                  />
                  <span className="projectOpen" aria-hidden="true">aç ↗</span>
                </span>
                <span className="projectCaption">
                  <span>
                    <strong>{project.title}</strong>
                    <small>{project.category}</small>
                  </span>
                  <p>{project.description}</p>
                </span>
              </a>
              <a className="repoLink" href={project.github} target="_blank" rel="noreferrer">
                kod deposu ↗
              </a>
            </article>
          ))}
        </section>

        <footer className="fikkisFooter">
          <p>Merhaba, ben Çayan. İnternette çalışan, oynanan ve keşfedilen şeyler yapıyorum.</p>
          <div>
            <a href="https://github.com/cayankuzu" target="_blank" rel="noreferrer">GitHub ↗</a>
            <a href="mailto:memodee333@gmail.com">E-posta ↗</a>
            <a href={officialSiteUrl}>MeMoDe portföy ↗</a>
          </div>
          <small>fikkis / 2026</small>
        </footer>
      </main>

      <FloatingPortal
        href={officialSiteUrl}
        destination="MeMoDe"
        eyebrow="CV / portföy"
        previewSrc="/portal-memode.png"
        storageKey="fikkis-portal-v2"
      />
    </>
  );
}
