"use client";

import Image from "next/image";
import packageJson from "../../package.json";
import { ContactLinks, contactEmail } from "./_components/ContactLinks";
import { CopyButton } from "./_components/CopyButton";
import {
  IconArrowDown,
  IconArrowUp,
  IconArrowUpRight,
} from "./_components/icons";
import { LanguageToggle } from "./_components/LanguageToggle";
import { ProjectGallery } from "./_components/ProjectGallery";
import { I18nProvider, useI18n } from "./_lib/i18n";
import { getArchiveStats } from "./_lib/project-meta";
import { projects } from "./projects";

const shopierUrl = "https://www.shopier.com/atkafasifanzin";
const gumroadUrl = "https://atkafasifanzin.gumroad.com/";
const cvUrl = "https://cayankuzucv.vercel.app/";

function HomeInner() {
  const { t } = useI18n();
  const stats = getArchiveStats(projects);

  return (
    <>
      <a className="skipLink" href="#projeler">
        {t.nav.skip}
      </a>

      <header className="siteHeader">
        <div className="container siteHeaderInner">
          <a className="brand" href="#top" aria-label="fikkis, başa dön">
            fikkis<span className="brandDot" aria-hidden="true" />
          </a>
          <nav className="siteNav" aria-label="Sayfa bölümleri">
            <a href="#projeler">{t.nav.projects}</a>
            <a href="#hakkinda">{t.nav.about}</a>
            <a href="#fanzin">{t.nav.fanzin}</a>
            <a href="#iletisim">{t.nav.contact}</a>
          </nav>
          <LanguageToggle />
        </div>
      </header>

      <main id="top">
        <section className="hero container" aria-labelledby="hero-title">
          <p className="eyebrow">
            <span className="liveDot" aria-hidden="true" />
            {t.hero.eyebrow}
          </p>

          <div className="heroGrid">
            <h1 id="hero-title" className="heroTitle">
              {t.hero.motto1}{" "}
              <span className="heroTitleLine">
                {t.hero.motto2}
                <span className="heroDot" aria-hidden="true" />
              </span>
            </h1>

            <div className="heroSide">
              {t.hero.mottoSubtitle ? (
                <p className="heroMottoBadge" aria-hidden="true">
                  <span className="heroMottoDot" />
                  {t.hero.mottoSubtitle}
                </p>
              ) : null}
              <p className="heroLead">{t.hero.lead}</p>
              <div className="actions">
                <a className="button button-primary" href="#projeler">
                  {t.hero.exploreBtn}
                  <IconArrowDown size={16} />
                </a>
                <a className="button button-secondary" href="#iletisim">
                  {t.hero.contactBtn}
                </a>
              </div>
            </div>
          </div>

          <dl className="stats">
            <div>
              <dt>{t.hero.stats.total}</dt>
              <dd>{stats.total}</dd>
            </div>
            <div>
              <dt>{t.hero.stats.mobile}</dt>
              <dd>{stats.categoryCounts.mobile}</dd>
            </div>
            <div>
              <dt>{t.hero.stats.game}</dt>
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
            <p className="sectionIndex">{t.projectsSection.index}</p>
            <h2 id="projects-title" className="sectionTitle">
              {t.projectsSection.title}
            </h2>
            <p className="sectionLead">{t.projectsSection.lead}</p>
          </div>

          <ProjectGallery projects={projects} />
        </section>

        <section
          id="hakkinda"
          className="section container"
          aria-labelledby="about-title"
        >
          <div className="sectionHead">
            <p className="sectionIndex">{t.aboutSection.index}</p>
            <h2 id="about-title" className="sectionTitle">
              {t.aboutSection.title}
            </h2>
          </div>

          <div className="about">
            <div className="aboutText">
              <p className="aboutLead">{t.aboutSection.lead}</p>
              <p>{t.aboutSection.body}</p>
              <div className="actions">
                <a
                  className="button button-primary"
                  href={cvUrl}
                  target="_blank"
                  rel="noreferrer"
                >
                  {t.aboutSection.viewCv}
                  <IconArrowUpRight size={16} />
                </a>
                <a
                  className="button button-secondary"
                  href="https://github.com/cayankuzu"
                  target="_blank"
                  rel="noreferrer"
                >
                  {t.aboutSection.github}
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
              <p className="sectionIndex">{t.zineSection.index}</p>
              <h2 id="fanzin-title" className="sectionTitle">
                {t.zineSection.title}
              </h2>
              <p className="supportText">{t.zineSection.body}</p>
              <div className="actions">
                <a
                  className="button button-primary"
                  href={shopierUrl}
                  target="_blank"
                  rel="noreferrer"
                >
                  {t.zineSection.shopier}
                  <IconArrowUpRight size={16} />
                </a>
                <a
                  className="button button-secondary"
                  href={gumroadUrl}
                  target="_blank"
                  rel="noreferrer"
                >
                  {t.zineSection.gumroad}
                  <IconArrowUpRight size={16} />
                </a>
              </div>
              <p className="supportNote">{t.zineSection.note}</p>
            </div>
          </div>
        </section>
      </main>

      <footer id="iletisim" className="footer" aria-labelledby="contact-title">
        <div className="container footerTop">
          <div className="footerIntro">
            <p className="sectionIndex">{t.footerSection.index}</p>
            <h2 id="contact-title" className="footerTitle">
              {t.footerSection.title}
            </h2>
            <p className="footerLead">{t.footerSection.lead}</p>
            <div className="emailRow">
              <a className="emailLink" href={`mailto:${contactEmail}`}>
                {contactEmail}
              </a>
              <CopyButton
                text={contactEmail}
                label={t.footerSection.copyBtn}
                copiedLabel={t.footerSection.copied}
              />
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
          <p>{t.footerSection.byMeMoDe}</p>
          <p className="footerVersion">
            {t.footerSection.version} {packageJson.version}
          </p>
          <a href="#top" className="footerTop-link">
            {t.footerSection.backToTop}
            <IconArrowUp size={14} />
          </a>
        </div>
      </footer>
    </>
  );
}

export default function Home() {
  return (
    <I18nProvider>
      <HomeInner />
    </I18nProvider>
  );
}
