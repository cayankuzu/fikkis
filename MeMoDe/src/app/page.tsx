import { PortalLink } from "./_components/PortalLink";
import { portfolioProjects } from "./projects";

const fikkisUrl = process.env.NEXT_PUBLIC_FIKKIS_URL ?? "http://localhost:3000";

export default function Home() {
  return (
    <main>
      <header className="topbar">
        <a className="brand" href="#top" aria-label="MeMoDe ana sayfa">
          MeMoDe<span>®</span>
        </a>
        <nav aria-label="Ana menü">
          <a href="#projeler">Projeler</a>
          <a href="#yaklasim">Yaklaşım</a>
          <a href="#iletisim">İletişim</a>
        </nav>
        <PortalLink href={fikkisUrl} />
      </header>

      <section className="officialHero" id="top">
        <p className="heroLabel"><span /> Bağımsız dijital ürün stüdyosu</p>
        <h1>Fikirleri çalışan ürünlere ve <em>hissedilen deneyimlere</em> dönüştürüyoruz.</h1>
        <div className="officialHeroFoot">
          <p>Web deneyimleri, yaratıcı araçlar ve insanları ortak bir amaç etrafında buluşturan mobil ürünler.</p>
          <a href="#projeler">Seçili projeler <span aria-hidden="true">↓</span></a>
        </div>
      </section>

      <section className="statement" aria-label="MeMoDe özeti">
        <p>MeMoDe; fikir, tasarım ve yazılımı aynı masada buluşturan bağımsız bir üretim alanıdır.</p>
        <dl>
          <div><dt>06</dt><dd>Seçili proje</dd></div>
          <div><dt>03</dt><dd>Canlı web deneyimi</dd></div>
          <div><dt>03</dt><dd>Mobil ürün</dd></div>
        </dl>
      </section>

      <section className="portfolio" id="projeler">
        <div className="sectionHeading">
          <p className="microLabel">01 / Projeler</p>
          <h2>Seçili işler</h2>
          <p>Her proje gerçek bir ihtiyaçtan veya anlatılmaya değer bir fikirden doğar.</p>
        </div>

        <div className="projectList">
          {portfolioProjects.map((project) => (
            <article className={`portfolioProject accent-${project.accent}`} key={project.id}>
              <div className="projectMeta">
                <span>{project.number}</span>
                <p>{project.type}</p>
                <small>{project.status}</small>
              </div>
              <div className="projectBody">
                <h3>{project.name}</h3>
                <p className="projectPurpose">{project.purpose}</p>
                <p className="projectSummary">{project.summary}</p>
                <ul aria-label={`${project.name} teknolojileri ve nitelikleri`}>
                  {project.tags.map((tag) => <li key={tag}>{tag}</li>)}
                </ul>
              </div>
              <div className="projectLinks">
                <a href={project.primaryUrl} target="_blank" rel="noreferrer">
                  {project.primaryLabel}<span aria-hidden="true">↗</span>
                </a>
                <a href={project.githubUrl} target="_blank" rel="noreferrer" title="Yalnızca yetkili hesapların erişebildiği private depo">
                  Private GitHub<span aria-hidden="true">↗</span>
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="approach" id="yaklasim">
        <div className="sectionHeading sectionHeadingLight">
          <p className="microLabel">02 / Yaklaşım</p>
          <h2>Az gürültü.<br />Net bir amaç.</h2>
        </div>
        <div className="principles">
          <article>
            <span>01</span>
            <h3>Fikirden önce problem</h3>
            <p>Ne yapılacağını değil, neden yapılması gerektiğini netleştirerek başlarız.</p>
          </article>
          <article>
            <span>02</span>
            <h3>Tasarım ve kod birlikte</h3>
            <p>Ekranı ve davranışı ayrı teslimatlar değil, tek bir ürün deneyimi olarak ele alırız.</p>
          </article>
          <article>
            <span>03</span>
            <h3>Çalışan sonuç</h3>
            <p>Fikirleri sunumda bırakmaz; test edilebilir, paylaşılabilir ve geliştirilebilir hâle getiririz.</p>
          </article>
        </div>
      </section>

      <section className="contact" id="iletisim">
        <p className="microLabel">03 / İletişim</p>
        <div>
          <h2>Bir fikrin mi var?</h2>
          <a href="mailto:memodee333@gmail.com">memodee333@gmail.com <span aria-hidden="true">↗</span></a>
        </div>
      </section>

      <footer className="officialFooter">
        <p>MeMoDe® / 2026</p>
        <p>Fikir · Tasarım · Yazılım</p>
        <a href={fikkisUrl}>fikkis’e geç ↗</a>
      </footer>
    </main>
  );
}
