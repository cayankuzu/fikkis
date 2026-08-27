import packageJson from "../../package.json";
import { ProjectGallery } from "./_components/ProjectGallery";
import { projects } from "./projects";

const instagramUrl =
  "https://www.instagram.com/memode333?igsh=aWZkZDM3dXR1azBk";
const contactEmail = "memodee333@gmail.com";
const shopierUrl = "https://www.shopier.com/atkafasifanzin";
const gumroadUrl = "https://atkafasifanzin.gumroad.com/";
const archiveStats = [
  { label: "mobil ürün", value: projects.filter((project) => project.category === "mobile").length },
  { label: "oyun", value: projects.filter((project) => project.category === "game").length },
  { label: "web ürünü", value: projects.filter((project) => project.category === "web").length },
  { label: "bağımsız yayın", value: projects.filter((project) => project.category === "content").length },
];

export default function Home() {
  return (
    <main className="fikkisPage" id="top">
      <header className="fikkisHeader">
        <a className="fikkisMark" href="#top" aria-label="Fikkis ana sayfa">
          fikkis<span>●</span>
        </a>
        <p className="fikkisTagline">bir şeyler deniyorum</p>
        <p className="fikkisIntro">
          Mobil ürünleri, oyunları, web deneyimlerini ve bağımsız yayınları;
          doğrulanmış bağlantılar ve kısa üretim notlarıyla bir araya getiren
          kişisel proje arşivi.
        </p>
        <ul className="archiveStats" aria-label={`${projects.length} projelik arşiv özeti`}>
          {archiveStats.map((item) => (
            <li key={item.label}>
              <strong>{item.value}</strong>
              <span>{item.label}</span>
            </li>
          ))}
        </ul>
      </header>

      <ProjectGallery projects={projects} />

      <footer className="fikkisFooter">
        <div className="footerSignature">
          <strong>MeMoDe tarafından</strong>
          <p className="footerContactLead">
            Soru ve önerileriniz için e-posta veya Instagram&apos;dan
            ulaşabilirsiniz.
          </p>
          <div className="footerLegal">
            <p>© 2026 Çayan Kuzu — Tüm hakları saklıdır.</p>
            <p className="footerVersion">Versiyon {packageJson.version}</p>
          </div>
        </div>

        <div className="footerDetails">
          <section className="footerSupport" aria-labelledby="support-title">
            <p id="support-title">Bana destek ol</p>
            <strong>
              AtKafası fanzinini istediğin platformdan satın alabilirsin.
            </strong>
            <span>
              Shopier daha az komisyon keser; Gumroad alternatif satın alma ve
              yorum alanıdır. Aldıktan sonra yorumunu bırakmayı unutma.
            </span>
            <div>
              <a href={shopierUrl} target="_blank" rel="noreferrer">
                Shopier&apos;den al
              </a>
              <a href={gumroadUrl} target="_blank" rel="noreferrer">
                Gumroad
              </a>
            </div>
          </section>

          <nav aria-label="Bağlantılar ve iletişim">
            <a href={instagramUrl} target="_blank" rel="noreferrer">
              <span>Instagram</span>
              <small>@memode333</small>
            </a>
            <a href={`mailto:${contactEmail}`}>
              <span>E-posta</span>
              <small>{contactEmail}</small>
            </a>
          </nav>
        </div>
      </footer>
    </main>
  );
}
