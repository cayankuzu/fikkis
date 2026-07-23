import { ProjectGallery } from "./_components/ProjectGallery";
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

      <ProjectGallery projects={projects} />

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
