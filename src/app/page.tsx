import Image from "next/image";
import type { Project } from "./projects";
import { projects } from "./projects";

const instagramUrl =
  "https://www.instagram.com/memode333?igsh=aWZkZDM3dXR1azBk";
const fanzineUrl = "https://atkafasifanzin.gumroad.com/";
const contactEmail = "memodee333@gmail.com";

function ProjectCover({ project }: { project: Project }) {
  return (
    <span className="projectCover">
      <Image
        src={project.preview}
        alt={`${project.title} proje görüntüsü`}
        fill
        priority={project.id === "remember" || project.id === "desain" || project.id === "audioroom"}
        sizes="(max-width: 680px) calc(100vw - 34px), (max-width: 980px) 47vw, 400px"
        style={{ objectPosition: project.previewPosition ?? "center" }}
      />
    </span>
  );
}

export default function Home() {
  return (
    <main className="fikkisPage" id="top">
      <header className="fikkisHeader">
        <a className="fikkisMark" href="#top" aria-label="Fikkis ana sayfa">
          fikkis<span>●</span>
        </a>
        <p>bir şeyler deniyorum</p>
      </header>

      <section className="projectGallery" aria-labelledby="gallery-title">
        <h1 id="gallery-title" className="srOnly">
          Fikkis projeleri
        </h1>

        {projects.map((project) => (
          <article className={`projectCard tone-${project.tone}`} key={project.id}>
            {project.href ? (
              <a
                className="projectLink"
                href={project.href}
                target="_blank"
                rel="noreferrer"
                aria-label={`${project.title} projesini aç`}
              >
                <ProjectCover project={project} />
              </a>
            ) : (
              <ProjectCover project={project} />
            )}

            <div className="projectCaption">
              <h2>{project.title}</h2>
              <p className="projectHook">{project.hook}</p>
              <p className="projectDescription">{project.description}</p>
            </div>
          </article>
        ))}
      </section>

      <footer className="fikkisFooter">
        <div className="footerSignature">
          <strong>Powered by MeMoDe</strong>
          <p>© 2026 Çayan Kuzu — Tüm hakları saklıdır.</p>
        </div>

        <nav aria-label="Bağlantılar ve iletişim">
          <a href={instagramUrl} target="_blank" rel="noreferrer">
            <span>Instagram</span>
            <small>@memode333</small>
          </a>
          <a href={fanzineUrl} target="_blank" rel="noreferrer">
            <span>AtKafası Fanzin</span>
            <small>1. ve 2. sayı</small>
          </a>
          <a href={`mailto:${contactEmail}`}>
            <span>İletişim</span>
            <small>{contactEmail}</small>
          </a>
        </nav>
      </footer>
    </main>
  );
}
