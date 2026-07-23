import { ProjectSlideshow } from "./_components/ProjectSlideshow";
import { projects } from "./projects";

const instagramUrl =
  "https://www.instagram.com/memode333?igsh=aWZkZDM3dXR1azBk";
const contactEmail = "memodee333@gmail.com";

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

        {projects.map((project, index) => (
          <article className={`projectCard tone-${project.tone}`} key={project.id}>
            {project.href ? (
              <a
                className="projectLink"
                href={project.href}
                target="_blank"
                rel="noreferrer"
                aria-label={`${project.title} projesini aç`}
              >
                <ProjectSlideshow project={project} priority={index < 3} />
              </a>
            ) : (
              <ProjectSlideshow project={project} priority={index < 3} />
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
          <a href={`mailto:${contactEmail}`}>
            <span>İletişim</span>
            <small>{contactEmail}</small>
          </a>
        </nav>
      </footer>
    </main>
  );
}
