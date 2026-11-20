"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import type { KeyboardEvent as ReactKeyboardEvent, MouseEvent } from "react";
import { flushSync } from "react-dom";
import { replaceHash, useLocationHash } from "../_lib/browser";
import { useI18n } from "../_lib/i18n";
import {
  arrangeProjects,
  categoryLabels,
  categoryOrder,
  getQuickLink,
  getStatus,
} from "../_lib/project-meta";
import { getLocalizedProjects } from "../_lib/projects-en";
import { scoreProjects } from "../_lib/search";
import type { Project, ProjectCategory } from "../projects";
import {
  IconArrowUpRight,
  IconClose,
  IconGithub,
  IconGridView,
  IconListView,
  IconSearch,
  IconSpark,
} from "./icons";
import { ProjectCard } from "./ProjectCard";
import { ProjectSheet } from "./ProjectSheet";

export type FilterValue = "all" | ProjectCategory;
type ViewMode = "grid" | "list";
type CollectionId =
  | "trilogy"
  | "webgl3d"
  | "narrative"
  | "aiAndCv"
  | "godotAndHardware"
  | "openSource";

const HASH_PREFIX = "#proje-";

const CURATED_COLLECTIONS: Record<CollectionId, string[]> = {
  trilogy: ["event-horizon", "life-of-a-photon", "simulab"],
  webgl3d: [
    "event-horizon",
    "life-of-a-photon",
    "simulab",
    "battle-ground",
    "strolly",
    "dream-of-the-photo",
    "audioroom",
    "desain",
    "bibish",
    "remember",
  ],
  narrative: ["strolly", "dream-of-the-photo", "audioroom", "remember"],
  aiAndCv: ["beatter", "trai", "mrap", "jump-analysis"],
  godotAndHardware: ["trophe-as-cat", "stresst", "kepce-operatoru"],
  openSource: [
    "event-horizon",
    "life-of-a-photon",
    "simulab",
    "beatter",
    "battle-ground",
    "strolly",
    "dream-of-the-photo",
    "cayan-kuzu-cv",
  ],
};

function isTypingTarget(target: EventTarget | null) {
  return (
    target instanceof HTMLElement &&
    (target.isContentEditable || ["INPUT", "TEXTAREA", "SELECT"].includes(target.tagName))
  );
}

type ProjectGalleryProps = {
  projects: Project[];
  externalFilter?: { value: FilterValue; nonce: number } | null;
};

export function ProjectGallery({ projects: rawProjects, externalFilter }: ProjectGalleryProps) {
  const { locale, t } = useI18n();
  const projects = getLocalizedProjects(rawProjects, locale);

  const [filter, setFilter] = useState<FilterValue>("all");
  const [collection, setCollection] = useState<CollectionId | null>(null);
  const [viewMode, setViewMode] = useState<ViewMode>("grid");
  const [query, setQuery] = useState("");
  const [searchOpen, setSearchOpen] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const openedInApp = useRef(false);
  const pendingScroll = useRef<string | null>(null);
  const [prevExternalNonce, setPrevExternalNonce] = useState(0);

  // Hero istatistik kartlarından gelen kategori filtresi tetiklemesini yakala
  if (externalFilter && externalFilter.nonce !== prevExternalNonce) {
    setPrevExternalNonce(externalFilter.nonce);
    if (filter !== externalFilter.value) setFilter(externalFilter.value);
    if (collection !== null) setCollection(null);
  }

  const hash = useLocationHash();
  const activeId = hash.startsWith(HASH_PREFIX)
    ? decodeURIComponent(hash.slice(HASH_PREFIX.length))
    : null;
  const activeProject = projects.find((project) => project.id === activeId) ?? null;

  const filters: { value: FilterValue; label: string }[] = [
    { value: "all", label: t.projectsSection.allFilter },
    ...categoryOrder.map((value) => ({
      value,
      label: t.projectsSection.categories[value] ?? categoryLabels[value],
    })),
  ];

  const { featured, archive } = arrangeProjects(projects);
  const ordered = [...featured, ...archive];

  const searchText = query.trim();
  const isSearching = searchText.length > 0;
  const scores = isSearching ? scoreProjects(projects, searchText) : null;
  const pool = scores
    ? ordered
        .filter((project) => scores.has(project.id))
        .sort((a, b) => (scores.get(b.id) ?? 0) - (scores.get(a.id) ?? 0))
    : ordered;

  const counts = pool.reduce<Record<FilterValue, number>>(
    (result, project) => {
      result.all += 1;
      result[project.category] += 1;
      return result;
    },
    { all: 0, web: 0, mobile: 0, game: 0, science: 0, design: 0, content: 0 },
  );

  const visibleProjects = (() => {
    if (collection) {
      const ids = CURATED_COLLECTIONS[collection];
      const byId = new Map(pool.map((p) => [p.id, p]));
      return ids.map((id) => byId.get(id)).filter((p): p is Project => Boolean(p));
    }
    return filter === "all" ? pool : pool.filter((project) => project.category === filter);
  })();

  const showGroups = filter === "all" && !collection && !isSearching;

  const navigationList =
    activeProject && visibleProjects.includes(activeProject)
      ? visibleProjects
      : ordered;

  const liveText = t.projectsSection.search.announcement(searchText, visibleProjects.length);
  const [announcement, setAnnouncement] = useState(liveText);

  useEffect(() => {
    const timer = window.setTimeout(() => setAnnouncement(liveText), 400);
    return () => window.clearTimeout(timer);
  }, [liveText]);

  useEffect(() => {
    if (activeProject || !pendingScroll.current) return;

    const target = pendingScroll.current;
    pendingScroll.current = null;
    window.requestAnimationFrame(() => {
      document.getElementById(target)?.scrollIntoView({ behavior: "smooth" });
    });
  }, [activeProject]);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key !== "/" || event.metaKey || event.ctrlKey || event.altKey) return;
      if (isTypingTarget(event.target) || document.querySelector("dialog[open]")) return;
      event.preventDefault();
      setSearchOpen(true);
      window.requestAnimationFrame(() => inputRef.current?.focus());
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  const scrollToGalleryTop = (behavior: ScrollBehavior) => {
    const section = sectionRef.current;
    if (section && section.getBoundingClientRect().top < 0) {
      section.scrollIntoView({ behavior });
    }
  };

  const handleOpen = (event: MouseEvent<HTMLAnchorElement>) => {
    if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
    openedInApp.current = true;
  };

  const handleClose = (scrollTarget?: string) => {
    pendingScroll.current = scrollTarget ?? null;

    if (openedInApp.current) {
      openedInApp.current = false;
      window.history.back();
    } else {
      replaceHash("");
    }
  };

  const handleFilter = (value: FilterValue) => {
    setCollection(null);
    setFilter(value);
    scrollToGalleryTop("smooth");
  };

  const handleCollection = (id: CollectionId) => {
    setFilter("all");
    setCollection((current) => (current === id ? null : id));
    scrollToGalleryTop("smooth");
  };

  const handleQuery = (value: string) => {
    setQuery(value);
    if (value.trim()) setCollection(null);
    scrollToGalleryTop("instant");
  };

  const closeSearch = () => {
    const toggle = toggleRef.current;
    if (toggle && toggle.offsetParent !== null) {
      setSearchOpen(false);
      toggle.focus();
    } else {
      inputRef.current?.focus();
    }
  };

  const clearSearch = (keepOpen: boolean) => {
    setQuery("");
    if (keepOpen) inputRef.current?.focus();
    else closeSearch();
  };

  const handleSearchKey = (event: ReactKeyboardEvent<HTMLInputElement>) => {
    if (event.key !== "Escape") return;
    event.preventDefault();
    clearSearch(isSearching);
  };

  const toggleSearch = () => {
    if (searchOpen && !isSearching) {
      setQuery("");
      setSearchOpen(false);
      return;
    }
    flushSync(() => setSearchOpen(true));
    inputRef.current?.focus();
  };

  const showAllCategories = () => {
    setCollection(null);
    setFilter("all");
    inputRef.current?.focus();
  };

  const searchActive = searchOpen || isSearching;
  const otherCategoryMatches = filter !== "all" && isSearching ? counts.all : 0;

  const renderListRows = (items: Project[]) => (
    <div className="projectList">
      {items.map((project) => {
        const status = getStatus(project, locale);
        const quick = getQuickLink(project, locale);
        return (
          <article key={project.id} className={`listRow tone-${project.tone}`}>
            <a
              className="listRowMain"
              href={`#proje-${project.id}`}
              aria-haspopup="dialog"
              onClick={handleOpen}
            >
              <span className="listRowThumb">
                <Image src={project.images[0].src} alt="" fill sizes="88px" />
              </span>
              <span className="listRowInfo">
                <span className="listRowHead">
                  <strong>{project.title}</strong>
                  <span className="listRowCat">
                    {t.projectsSection.categories[project.category] ?? categoryLabels[project.category]}
                  </span>
                  <span className={`status status-${status.tone}`}>{status.label}</span>
                </span>
                <span className="listRowHook">{project.hook}</span>
              </span>
              <ul className="listRowTools" aria-hidden="true">
                {project.tools.slice(0, 3).map((tool) => (
                  <li key={tool}>{tool}</li>
                ))}
              </ul>
            </a>
            <div className="listRowActions">
              {quick ? (
                <a
                  className="listActionBtn listActionBtn-primary"
                  href={quick.href}
                  target="_blank"
                  rel="noreferrer"
                  title={quick.label}
                >
                  <span>{t.projectsSection.palette.quickOpen}</span>
                  <IconArrowUpRight size={14} />
                </a>
              ) : null}
              {project.sourceUrl ? (
                <a
                  className="listActionBtn"
                  href={project.sourceUrl}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`${project.title} GitHub`}
                  title="GitHub"
                >
                  <IconGithub size={14} />
                </a>
              ) : null}
            </div>
          </article>
        );
      })}
    </div>
  );

  const collectionItems: { id: CollectionId; title: string; note: string; count: number }[] = [
    {
      id: "trilogy",
      title: t.projectsSection.collections.trilogy.title,
      note: t.projectsSection.collections.trilogy.note,
      count: CURATED_COLLECTIONS.trilogy.length,
    },
    {
      id: "webgl3d",
      title: t.projectsSection.collections.webgl3d.title,
      note: t.projectsSection.collections.webgl3d.note,
      count: CURATED_COLLECTIONS.webgl3d.length,
    },
    {
      id: "narrative",
      title: t.projectsSection.collections.narrative.title,
      note: t.projectsSection.collections.narrative.note,
      count: CURATED_COLLECTIONS.narrative.length,
    },
    {
      id: "aiAndCv",
      title: t.projectsSection.collections.aiAndCv.title,
      note: t.projectsSection.collections.aiAndCv.note,
      count: CURATED_COLLECTIONS.aiAndCv.length,
    },
    {
      id: "godotAndHardware",
      title: t.projectsSection.collections.godotAndHardware.title,
      note: t.projectsSection.collections.godotAndHardware.note,
      count: CURATED_COLLECTIONS.godotAndHardware.length,
    },
    {
      id: "openSource",
      title: t.projectsSection.collections.openSource.title,
      note: t.projectsSection.collections.openSource.note,
      count: CURATED_COLLECTIONS.openSource.length,
    },
  ];

  const activeCollectionMeta = collection
    ? collectionItems.find((item) => item.id === collection) ?? null
    : null;

  return (
    <>
      <div className="gallery" ref={sectionRef}>
        <div className="filterBar">
          <div
            className="filters"
            role="group"
            aria-label="Projeleri alana göre filtrele"
          >
            {filters.map((item) => (
              <button
                key={item.value}
                type="button"
                className="filter"
                aria-pressed={!collection && filter === item.value}
                onClick={() => handleFilter(item.value)}
              >
                {item.label}
                <span className="filterCount">{counts[item.value]}</span>
              </button>
            ))}
            <button
              ref={toggleRef}
              type="button"
              className={`filter searchToggle${searchActive ? " is-active" : ""}`}
              aria-expanded={searchActive}
              aria-controls="project-search"
              onClick={toggleSearch}
            >
              <IconSearch size={15} />
              {t.projectsSection.search.btn}
            </button>
          </div>

          <div className="filterBarRight">
            <div
              className={`search${searchActive ? " is-open" : ""}`}
              role="search"
            >
              <label className="srOnly" htmlFor="project-search">
                {t.projectsSection.search.label}
              </label>
              <IconSearch size={17} className="searchIcon" />
              <input
                ref={inputRef}
                id="project-search"
                className="searchInput"
                type="search"
                value={query}
                onChange={(event) => handleQuery(event.target.value)}
                onKeyDown={handleSearchKey}
                placeholder={t.projectsSection.search.placeholder}
                autoComplete="off"
                spellCheck={false}
                enterKeyHint="search"
                aria-controls="project-results"
              />
              {isSearching ? (
                <button
                  type="button"
                  className="searchClear"
                  onClick={() => clearSearch(true)}
                  aria-label={t.projectsSection.search.clear}
                >
                  <IconClose size={14} />
                </button>
              ) : (
                <kbd className="searchKey" aria-hidden="true">
                  /
                </kbd>
              )}
            </div>

            <div
              className="viewSwitch"
              role="group"
              aria-label={t.projectsSection.viewMode.ariaLabel}
            >
              <button
                type="button"
                className="viewSwitchBtn"
                aria-pressed={viewMode === "grid"}
                onClick={() => setViewMode("grid")}
                title={t.projectsSection.viewMode.grid}
              >
                <IconGridView size={15} />
                <span>{t.projectsSection.viewMode.grid}</span>
              </button>
              <button
                type="button"
                className="viewSwitchBtn"
                aria-pressed={viewMode === "list"}
                onClick={() => setViewMode("list")}
                title={t.projectsSection.viewMode.list}
              >
                <IconListView size={15} />
                <span>{t.projectsSection.viewMode.list}</span>
              </button>
            </div>
          </div>

          <p className="srOnly" aria-live="polite">
            {announcement}
          </p>
        </div>

        {/* Küratörlü Koleksiyon Şeridi */}
        <div className="collectionsBar" role="group" aria-label={t.projectsSection.collections.label}>
          <span className="collectionsLabel">
            <IconSpark size={13} />
            {t.projectsSection.collections.label}
          </span>
          <div className="collectionsPills">
            {collectionItems.map((col) => (
              <button
                key={col.id}
                type="button"
                className="collectionPill"
                aria-pressed={collection === col.id}
                onClick={() => handleCollection(col.id)}
              >
                <span className="collectionDot" aria-hidden="true" />
                <span>{col.title}</span>
                <span className="filterCount">{col.count}</span>
              </button>
            ))}
          </div>
        </div>

        {activeCollectionMeta ? (
          <div className="collectionBanner">
            <p>{activeCollectionMeta.note}</p>
            <button type="button" className="textButton" onClick={() => setCollection(null)}>
              {t.projectsSection.allFilter} ({counts.all})
            </button>
          </div>
        ) : null}

        <div id="project-results">
          {isSearching ? (
            <p className="searchSummary">
              <span>
                {t.projectsSection.search.summary(
                  searchText,
                  visibleProjects.length,
                  filter !== "all"
                    ? t.projectsSection.categories[filter] ?? categoryLabels[filter]
                    : undefined,
                )}
              </span>
              <button type="button" className="textButton" onClick={() => clearSearch(false)}>
                {t.projectsSection.search.clear}
              </button>
            </p>
          ) : null}

          {showGroups ? (
            viewMode === "list" ? (
              <>
                <section className="galleryGroup" aria-labelledby="group-featured">
                  <h3 className="galleryGroupTitle" id="group-featured">
                    {t.projectsSection.groups.featured}
                    <span className="filterCount">{featured.length}</span>
                  </h3>
                  {renderListRows(featured)}
                </section>
                <section className="galleryGroup" aria-labelledby="group-archive">
                  <h3 className="galleryGroupTitle" id="group-archive">
                    {t.projectsSection.groups.archive}
                    <span className="filterCount">{archive.length}</span>
                  </h3>
                  {renderListRows(archive)}
                </section>
              </>
            ) : (
              <>
                <section className="galleryGroup" aria-labelledby="group-featured">
                  <h3 className="galleryGroupTitle" id="group-featured">
                    {t.projectsSection.groups.featured}
                    <span className="filterCount">{featured.length}</span>
                  </h3>
                  <div className="grid">
                    {featured.map((project) => (
                      <ProjectCard key={project.id} project={project} onOpen={handleOpen} titleAs="h4" />
                    ))}
                  </div>
                </section>

                <section className="galleryGroup" aria-labelledby="group-archive">
                  <h3 className="galleryGroupTitle" id="group-archive">
                    {t.projectsSection.groups.archive}
                    <span className="filterCount">{archive.length}</span>
                  </h3>
                  <div className="grid">
                    {archive.map((project) => (
                      <ProjectCard key={project.id} project={project} onOpen={handleOpen} titleAs="h4" />
                    ))}
                  </div>
                </section>
              </>
            )
          ) : visibleProjects.length ? (
            viewMode === "list" ? (
              renderListRows(visibleProjects)
            ) : (
              <div className="grid">
                {visibleProjects.map((project) => (
                  <ProjectCard key={project.id} project={project} onOpen={handleOpen} />
                ))}
              </div>
            )
          ) : (
            <div className="searchEmpty">
              <strong>{t.projectsSection.search.emptyTitle}</strong>
              <p>
                {otherCategoryMatches
                  ? t.projectsSection.search.emptyOther(searchText, otherCategoryMatches)
                  : t.projectsSection.search.emptyNone(searchText)}
              </p>
              <div className="actions">
                {otherCategoryMatches ? (
                  <button
                    type="button"
                    className="button button-primary"
                    onClick={showAllCategories}
                  >
                    {t.projectsSection.search.showAllBtn}
                  </button>
                ) : null}
                <button
                  type="button"
                  className="button button-secondary"
                  onClick={() => clearSearch(true)}
                >
                  {t.projectsSection.search.clear}
                </button>
              </div>
            </div>
          )}
        </div>
      </div>

      <ProjectSheet
        project={activeProject}
        list={navigationList}
        onClose={handleClose}
        onNavigate={(project) => replaceHash(`${HASH_PREFIX}${project.id}`)}
      />
    </>
  );
}
