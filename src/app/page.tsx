import packageJson from "../../package.json";
import { ContactLinks } from "./_components/ContactLinks";
import { ProjectGallery } from "./_components/ProjectGallery";
import { TopUtilityBar } from "./_components/TopUtilityBar";
import { projects } from "./projects";

const shopierUrl = "https://www.shopier.com/atkafasifanzin";
const gumroadUrl = "https://atkafasifanzin.gumroad.com/";

export default function Home() {
  return (
    <main className="fikkisPage" id="top">
      <header className="fikkisHeader">
        <a className="fikkisMark" href="#top" aria-label="Fikkis ana sayfa">
          fikkis<span>●</span>
        </a>
        <div className="taglineRow">
          <TopUtilityBar />
          <p className="fikkisTagline">bir şeyler deniyorum</p>
        </div>
        <p className="fikkisIntro">
          Mobil ürünleri, oyunları, web deneyimlerini ve bağımsız yayınları;
          doğrulanmış bağlantılar ve kısa üretim notlarıyla bir araya getiren
          kişisel proje arşivi.
        </p>
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

          <section
            className="footerContactCard"
            aria-labelledby="footer-contact-title"
          >
            <p id="footer-contact-title">İletişim</p>
            <ContactLinks className="footerContactList" />
          </section>
        </div>
      </footer>
    </main>
  );
}
