import Image from "next/image";
import packageJson from "../../package.json";
import { ContactLinks, contactEmail, linkedInUrl } from "./_components/ContactLinks";
import { CopyButton } from "./_components/CopyButton";
import {
  IconArrowDown,
  IconArrowUp,
  IconArrowUpRight,
  IconHeart,
} from "./_components/icons";
import { ProjectGallery } from "./_components/ProjectGallery";
import {
  categoryOrder,
  categoryPluralLabels,
  getArchiveStats,
} from "./_lib/project-meta";
import { projects } from "./projects";

const shopierUrl = "https://www.shopier.com/atkafasifanzin";
const gumroadUrl = "https://atkafasifanzin.gumroad.com/";
const cvUrl = "https://cayankuzucv.vercel.app/";
const githubUrl = "https://github.com/cayankuzu";

const pad = (value: number) => String(value).padStart(2, "0");

export default function Home() {
  const stats = getArchiveStats(projects);

  return (
    <>
      <a className="skipLink" href="#projeler">
        Projelere geç
      </a>

      <header className="siteHeader">
        <div className="container siteHeaderInner">
          <a className="brand" href="#top" aria-label="fikkis, başa dön">
            fikkis<span className="brandDot" aria-hidden="true" />
          </a>
          <nav className="siteNav" aria-label="Sayfa bölümleri">
            <a href="#projeler">Projeler</a>
            <a href="#hakkinda">Hakkında</a>
            <a href="#iletisim">İletişim</a>
          </nav>
          <a className="button button-secondary button-small" href="#destek">
            <IconHeart size={15} />
            Destek ol
          </a>
        </div>
      </header>

      <main id="top">
        <section className="hero container" aria-labelledby="hero-title">
          <p className="eyebrow">
            <span className="liveDot" aria-hidden="true" />
            Çayan Kuzu · Proje ve üretim arşivi
          </p>

          <div className="heroGrid">
            <h1 id="hero-title" className="heroTitle">
              Bir şeyler{" "}
              <span className="heroTitleLine">
                deniyorum
                <span className="heroDot" aria-hidden="true" />
              </span>
            </h1>

            <div className="heroSide">
              <p className="heroLead">
                Mobil uygulamalar, oyunlar, web deneyimleri, bilim çalışmaları
                ve bağımsız yayınlar. Ürettiğim farklı işler tek bir arşivde.
              </p>
              <div className="actions">
                <a className="button button-primary" href="#projeler">
                  Projeleri keşfet
                  <IconArrowDown size={16} />
                </a>
                <a className="button button-secondary" href="#iletisim">
                  İletişime geç
                </a>
              </div>
            </div>
          </div>

          <dl className="stats">
            <div>
              <dt>Proje</dt>
              <dd>{stats.total}</dd>
            </div>
            <div>
              <dt>Oyun</dt>
              <dd>{stats.categoryCounts.game}</dd>
            </div>
            <div>
              <dt>Mağaza uygulaması</dt>
              <dd>{stats.storeApps}</dd>
            </div>
            <div>
              <dt>Üretim alanı</dt>
              <dd>{stats.areas}</dd>
            </div>
          </dl>
        </section>

        <section
          id="projeler"
          className="section container"
          aria-labelledby="projects-title"
        >
          <div className="sectionHead">
            <p className="sectionIndex">01 — Projeler</p>
            <h2 id="projects-title" className="sectionTitle">
              Denediğim her şey, tek yerde.
            </h2>
            <p className="sectionLead">
              Önce öne çıkan ürünler, ardından oyunlar, deneyler, bilim ve
              tasarım işleri. Bir karta tıkla; açıklama, görseller ve
              bağlantılar tek panelde açılır.
            </p>
          </div>

          <ProjectGallery projects={projects} />
        </section>

        <section
          id="hakkinda"
          className="section container"
          aria-labelledby="about-title"
        >
          <div className="sectionHead">
            <p className="sectionIndex">02 — Hakkında</p>
            <h2 id="about-title" className="sectionTitle">
              Fizikten ürüne, fikirden prototipe.
            </h2>
          </div>

          <div className="about">
            <div className="aboutText">
              <p className="aboutLead">
                Ben Çayan Kuzu. Marmara Üniversitesi Fizik Bölümü&apos;nde
                okuyorum; dijital ürünler, kullanıcı deneyimi ve oyun tasarımı
                üzerine çalışıyorum.
              </p>
              <p>
                Fikirleri araştırma, tasarım ve hızlı prototipleme yoluyla
                çalışan deneyimlere dönüştürmeye odaklanıyorum. fikkis bu
                üretimlerin arşivi: bazıları App Store ve Google Play&apos;de,
                bazıları tarayıcıda oynanabiliyor, bazıları bir araştırma
                dokümanının içinde.
              </p>
              <div className="actions">
                <a
                  className="button button-primary"
                  href={cvUrl}
                  target="_blank"
                  rel="noreferrer"
                >
                  CV&apos;yi görüntüle
                  <IconArrowUpRight size={16} />
                </a>
                <a
                  className="button button-secondary"
                  href={linkedInUrl}
                  target="_blank"
                  rel="noreferrer"
                >
                  LinkedIn
                  <IconArrowUpRight size={16} />
                </a>
                <a
                  className="button button-secondary"
                  href={githubUrl}
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub
                  <IconArrowUpRight size={16} />
                </a>
              </div>
            </div>

            <div className="aboutAside">
              <div>
                <h3 className="asideTitle">Alanlar</h3>
                <ul className="areaList">
                  {categoryOrder.map((category) => (
                    <li key={category}>
                      <span>{categoryPluralLabels[category]}</span>
                      <span className="areaCount">
                        {pad(stats.categoryCounts[category])}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section
          id="destek"
          className="section container"
          aria-labelledby="support-title"
        >
          <div className="support">
            <div className="supportCovers" aria-hidden="true">
              <Image
                className="supportCover"
                src="/atkafasi-sayi-1.webp"
                alt=""
                width={725}
                height={1011}
                sizes="(max-width: 720px) 38vw, 200px"
              />
              <Image
                className="supportCover"
                src="/atkafasi-sayi-2.png"
                alt=""
                width={515}
                height={726}
                sizes="(max-width: 720px) 38vw, 200px"
              />
            </div>

            <div className="supportBody">
              <p className="sectionIndex">03 — Destek</p>
              <h2 id="support-title" className="sectionTitle">
                Bu arşivin büyümesine destek ol.
              </h2>
              <p className="supportText">
                Buradaki her şeyi bağımsız olarak üretiyorum. Desteklemenin en
                güzel yolu, iki sayısı yayımlanan AtKafası Fanzin&apos;i
                satın almak.
              </p>
              <div className="actions">
                <a
                  className="button button-primary"
                  href={shopierUrl}
                  target="_blank"
                  rel="noreferrer"
                >
                  Shopier&apos;den al
                  <IconArrowUpRight size={16} />
                </a>
                <a
                  className="button button-secondary"
                  href={gumroadUrl}
                  target="_blank"
                  rel="noreferrer"
                >
                  Gumroad&apos;dan al
                  <IconArrowUpRight size={16} />
                </a>
              </div>
              <p className="supportNote">
                Shopier daha az komisyon keser; Gumroad ise alternatif satın
                alma ve yorum alanı. Aldıktan sonra yorumunu bırakmayı unutma.
              </p>
            </div>
          </div>
        </section>
      </main>

      <footer id="iletisim" className="footer" aria-labelledby="contact-title">
        <div className="container footerTop">
          <div className="footerIntro">
            <p className="sectionIndex">04 — İletişim</p>
            <h2 id="contact-title" className="footerTitle">
              Bir fikrin mi var? Yaz, konuşalım.
            </h2>
            <p className="footerLead">
              Bir proje, fikir ya da iş birliği için e-posta, LinkedIn veya
              Instagram&apos;dan ulaşabilirsin.
            </p>
            <div className="emailRow">
              <a className="emailLink" href={`mailto:${contactEmail}`}>
                {contactEmail}
              </a>
              <CopyButton text={contactEmail} label="Kopyala" />
            </div>
          </div>

          <ContactLinks className="contactList" />
        </div>

        <div className="container">
          <p className="footerMark" aria-hidden="true">
            fikkis<span className="brandDot" />
          </p>
        </div>

        <div className="container footerBottom">
          <p>© 2026 Çayan Kuzu · MeMoDe tarafından</p>
          <p className="footerVersion">Versiyon {packageJson.version}</p>
          <a href="#top" className="footerTop-link">
            Başa dön
            <IconArrowUp size={14} />
          </a>
        </div>
      </footer>
    </>
  );
}
