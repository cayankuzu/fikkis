import Image from "next/image";
import packageJson from "../../package.json";
import { ContactLinks, contactEmail } from "./_components/ContactLinks";
import { CopyButton } from "./_components/CopyButton";
import {
  IconArrowDown,
  IconArrowUp,
  IconArrowUpRight,
} from "./_components/icons";
import { ProjectGallery } from "./_components/ProjectGallery";
import { getArchiveStats } from "./_lib/project-meta";
import { projects } from "./projects";

const shopierUrl = "https://www.shopier.com/atkafasifanzin";
const gumroadUrl = "https://atkafasifanzin.gumroad.com/";
const cvUrl = "https://cayankuzucv.vercel.app/";

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
            <a href="#fanzin">Fanzin</a>
            <a href="#iletisim">İletişim</a>
          </nav>
          <a
            className="button button-secondary button-small headerCV"
            href={cvUrl}
            target="_blank"
            rel="noreferrer"
          >
            <span>Özgeçmiş (CV)</span>
            <IconArrowUpRight size={14} />
          </a>
        </div>
      </header>

      <main id="top">
        <section className="hero container" aria-labelledby="hero-title">
          <p className="eyebrow">
            <span className="liveDot" aria-hidden="true" />
            Çayan Kuzu · Ürün Tasarımı & Yaratıcı Geliştirme
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
                Aklıma düşen bir fikri sadece hayal etmekle yetinmiyorum;
                araştırıyor, arayüzünü çiziyor ve çalışan gerçek deneyimlere
                dönüştürüyorum. App Store ve Google Play&apos;deki mobil
                uygulamalardan biyomekanik yapay zekâya, 3B web dünyalarından
                bağımsız yayına uzanan canlı bir üretim arşivi.
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
              <dt>Proje & Deneyim</dt>
              <dd>{stats.total}</dd>
            </div>
            <div>
              <dt>Mobil Ürün</dt>
              <dd>{stats.categoryCounts.mobile}</dd>
            </div>
            <div>
              <dt>3B & WebGL Oyun</dt>
              <dd>{stats.categoryCounts.game}</dd>
            </div>
          </dl>
        </section>

        <section
          id="projeler"
          className="section container"
          aria-labelledby="projects-title"
        >
          <div className="sectionHead">
            <p className="sectionIndex">01 — Projeler & Deneyimler</p>
            <h2 id="projects-title" className="sectionTitle">
              Fikirler, ekranlar ve yaşayan ürünler.
            </h2>
            <p className="sectionLead">
              Her çalışmanın arkasında çözülen bir problem, bir merak ve çalışan
              bir prototip var. Detaylara, canlı demoya ve süreçlere kartlardan
              göz atabilirsin.
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
              Fizikten ürüne, meraktan gerçeğe.
            </h2>
          </div>

          <div className="about">
            <div className="aboutText">
              <p className="aboutLead">
                Ben Çayan Kuzu. Marmara Üniversitesi Fizik Bölümü&apos;nde
                okuyorum; fiziğin analitik modelleme ve sistem düşüncesini dijital
                ürün tasarımı ve modern web teknolojileriyle buluşturuyorum.
              </p>
              <p>
                Benim için bir şeyleri denemek; boşta duran fikirleri çalışan
                prototiplere, kullanıcıların telefonunda yaşayan uygulamalara veya
                tarayıcıda akıp giden üç boyutlu dünyalara dönüştürmek demek.
                Fikrin ilk karalamasından UI/UX tasarımına, teknik mimarisinden
                mağaza onayına kadar olan süreci uçtan uca yürütmeyi seviyorum.
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
                  href="https://github.com/cayankuzu"
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub profilim
                  <IconArrowUpRight size={16} />
                </a>
              </div>
            </div>
          </div>
        </section>

        <section
          id="fanzin"
          className="section container"
          aria-labelledby="fanzin-title"
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
              <p className="sectionIndex">03 — Bağımsız Yayın</p>
              <h2 id="fanzin-title" className="sectionTitle">
                Ekranların ötesinde: AtKafası Fanzin.
              </h2>
              <p className="supportText">
                Sadece dijital ürünler değil; kağıdın, tipografinin ve bağımsız
                sözün gücünü de önemsiyorum. AtKafası; yazısından görsel diline,
                18 parçalık sticker serisinden sayfa mizanpajına kadar bağımsız
                hazırladığım bir kültür fanzini. İki sayısı da yayında.
              </p>
              <div className="actions">
                <a
                  className="button button-primary"
                  href={shopierUrl}
                  target="_blank"
                  rel="noreferrer"
                >
                  Shopier&apos;den edin
                  <IconArrowUpRight size={16} />
                </a>
                <a
                  className="button button-secondary"
                  href={gumroadUrl}
                  target="_blank"
                  rel="noreferrer"
                >
                  Gumroad&apos;dan incele
                  <IconArrowUpRight size={16} />
                </a>
              </div>
              <p className="supportNote">
                Fiziksel basılı kopyalar veya anında indirilebilir dijital PDF
                formatında inceleyebilirsin.
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
              Birlikte bir şeyler deneyelim.
            </h2>
            <p className="footerLead">
              Bir ürün fikrin mi var, portfolyodaki bir işle ilgili mi konuşmak
              istersin, yoksa ekibine dinamik bir Product Designer / UI-UX
              zihniyeti mi katmak istiyorsun? Çekinmeden yaz, konuşalım.
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
