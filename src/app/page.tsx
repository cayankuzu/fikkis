"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import packageJson from "../../package.json";
import { CommandPalette } from "./_components/CommandPalette";
import { ContactLinks, contactEmail } from "./_components/ContactLinks";
import { CopyButton } from "./_components/CopyButton";
import {
  IconArrowDown,
  IconArrowUp,
  IconArrowUpRight,
  IconCommand,
} from "./_components/icons";
import { LanguageToggle } from "./_components/LanguageToggle";
import { ProjectGallery, type FilterValue } from "./_components/ProjectGallery";
import { ScrollProgress } from "./_components/ScrollProgress";
import { I18nProvider, useI18n } from "./_lib/i18n";
import { getArchiveStats } from "./_lib/project-meta";
import { projects } from "./projects";

const shopierUrl = "https://www.shopier.com/atkafasifanzin";
const gumroadUrl = "https://atkafasifanzin.gumroad.com/";
const cvUrl = "https://cayankuzucv.vercel.app/";

function HomeInner() {
  const { t } = useI18n();
  const stats = getArchiveStats(projects);

  const [paletteOpen, setPaletteOpen] = useState(false);
  const [externalFilter, setExternalFilter] = useState<{
    value: FilterValue;
    nonce: number;
  } | null>(null);

  // Global ⌘K / Ctrl+K Komut Paleti kısayolu
  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") {
        event.preventDefault();
        setPaletteOpen((open) => !open);
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  const jumpToCategory = (value: FilterValue) => {
    setExternalFilter((prev) => ({ value, nonce: (prev?.nonce ?? 0) + 1 }));
    document.getElementById("projeler")?.scrollIntoView({ behavior: "smooth" });
  };

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
          <div className="headerRight">
            <button
              type="button"
              className="cmdTrigger"
              onClick={() => setPaletteOpen(true)}
              aria-label={t.projectsSection.palette.trigger}
              title={`${t.projectsSection.palette.trigger} (⌘K)`}
            >
              <IconCommand size={13} />
              <span className="cmdTriggerText">{t.projectsSection.palette.trigger}</span>
              <kbd>⌘K</kbd>
            </button>
            <LanguageToggle />
          </div>
        </div>
        <ScrollProgress />
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

          <div className="stats" role="group" aria-label={t.projectsSection.index}>
            <button
              type="button"
              className="statBtn"
              onClick={() => jumpToCategory("all")}
            >
              <span className="statValue">{stats.total}</span>
              <span className="statMeta">
                <span>{t.hero.stats.total}</span>
                <IconArrowUpRight size={14} className="statArrow" />
              </span>
            </button>
            <button
              type="button"
              className="statBtn"
              onClick={() => jumpToCategory("mobile")}
            >
              <span className="statValue">{stats.categoryCounts.mobile}</span>
              <span className="statMeta">
                <span>{t.hero.stats.mobile}</span>
                <IconArrowUpRight size={14} className="statArrow" />
              </span>
            </button>
            <button
              type="button"
              className="statBtn"
              onClick={() => jumpToCategory("science")}
            >
              <span className="statValue">{stats.categoryCounts.science}</span>
              <span className="statMeta">
                <span>{t.hero.stats.science}</span>
                <IconArrowUpRight size={14} className="statArrow" />
              </span>
            </button>
            <button
              type="button"
              className="statBtn"
              onClick={() => jumpToCategory("game")}
            >
              <span className="statValue">{stats.categoryCounts.game}</span>
              <span className="statMeta">
                <span>{t.hero.stats.game}</span>
                <IconArrowUpRight size={14} className="statArrow" />
              </span>
            </button>
          </div>
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

          <ProjectGallery projects={projects} externalFilter={externalFilter} />
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

            <div className="aboutPillars">
              {t.aboutSection.pillars.map((pillar) => (
                <div className="aboutPillar" key={pillar.index}>
                  <span className="aboutPillarIndex">{pillar.index}</span>
                  <h3 className="aboutPillarTitle">{pillar.title}</h3>
                  <p className="aboutPillarDetail">{pillar.detail}</p>
                </div>
              ))}
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

      <CommandPalette
        open={paletteOpen}
        onClose={() => setPaletteOpen(false)}
        projects={projects}
      />
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
