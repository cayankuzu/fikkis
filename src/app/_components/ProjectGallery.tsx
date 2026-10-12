"use client";

import { useEffect, useRef, useState } from "react";
import type { KeyboardEvent as ReactKeyboardEvent, MouseEvent } from "react";
import { flushSync } from "react-dom";
import { replaceHash, useLocationHash } from "../_lib/browser";
import { arrangeProjects, categoryLabels, categoryOrder } from "../_lib/project-meta";
import { scoreProjects } from "../_lib/search";
import type { Project, ProjectCategory } from "../projects";
import { IconClose, IconSearch } from "./icons";
import { ProjectCard } from "./ProjectCard";
import { ProjectSheet } from "./ProjectSheet";

type FilterValue = "all" | ProjectCategory;

const HASH_PREFIX = "#proje-";

function isTypingTarget(target: EventTarget | null) {
  return (
    target instanceof HTMLElement &&
    (target.isContentEditable || ["INPUT", "TEXTAREA", "SELECT"].includes(target.tagName))
  );
}

export function ProjectGallery({ projects }: { projects: Project[] }) {
  const [filter, setFilter] = useState<FilterValue>("all");
  const [query, setQuery] = useState("");
  const [searchOpen, setSearchOpen] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const openedInApp = useRef(false);
  const pendingScroll = useRef<string | null>(null);

  const hash = useLocationHash();
  const activeId = hash.startsWith(HASH_PREFIX)
    ? decodeURIComponent(hash.slice(HASH_PREFIX.length))
    : null;
  const activeProject = projects.find((project) => project.id === activeId) ?? null;

  const filters: { value: FilterValue; label: string }[] = [
    { value: "all", label: "Tümü" },
    ...categoryOrder.map((value) => ({ value, label: categoryLabels[value] })),
  ];

  const { featured, archive } = arrangeProjects(projects);
  const ordered = [...featured, ...archive];

  // Arama varken sonuçlar puana göre, eşitlikte arşiv sırasına göre dizilir.
  const searchText = query.trim();
  const isSearching = searchText.length > 0;
  const scores = isSearching ? scoreProjects(projects, searchText) : null;
  const pool = scores
    ? ordered
        .filter((project) => scores.has(project.id))
        .sort((a, b) => (scores.get(b.id) ?? 0) - (scores.get(a.id) ?? 0))
    : ordered;

  // Filtre sayıları o anki aramaya göre güncellenir.
  const counts = pool.reduce<Record<FilterValue, number>>(
    (result, project) => {
      result.all += 1;
      result[project.category] += 1;
      return result;
    },
    { all: 0, web: 0, mobile: 0, game: 0, science: 0, design: 0, content: 0 },
  );

  const visibleProjects =
    filter === "all" ? pool : pool.filter((project) => project.category === filter);
  const showGroups = filter === "all" && !isSearching;

  const navigationList =
    activeProject && visibleProjects.includes(activeProject)
      ? visibleProjects
      : ordered;

  // Ekran okuyucu her tuşta değil, yazma durunca sonucu duyar.
  const liveText = isSearching
    ? `“${searchText}” için ${visibleProjects.length} proje bulundu`
    : `${visibleProjects.length} proje gösteriliyor`;
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

  // "/" tuşu aramayı açar; yazı alanındayken ya da proje paneli açıkken devre dışıdır.
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
    // Yeni sekmede açma gibi değiştirici tuşlu tıklamalara dokunma.
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
    setFilter(value);
    scrollToGalleryTop("smooth");
  };

  const handleQuery = (value: string) => {
    setQuery(value);
    // Sonuçlar listenin başından görünsün; html'deki yumuşak kaydırma her tuşta yeniden başlamasın.
    scrollToGalleryTop("instant");
  };

  // Dar ekranda arama kutusu gizlenince odak "Ara" düğmesine döner, sayfanın başına düşmez.
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
    // iOS klavyeyi yalnızca dokunuşun içinde çağrılan focus() ile açar; kutu önce görünür olmalı.
    flushSync(() => setSearchOpen(true));
    inputRef.current?.focus();
  };

  const showAllCategories = () => {
    setFilter("all");
    inputRef.current?.focus();
  };

  const searchActive = searchOpen || isSearching;

  const otherCategoryMatches = filter !== "all" && isSearching ? counts.all : 0;

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
                aria-pressed={filter === item.value}
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
              Ara
            </button>
          </div>

          <div
            className={`search${searchActive ? " is-open" : ""}`}
            role="search"
          >
            <label className="srOnly" htmlFor="project-search">
              Projelerde ara
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
              placeholder="Proje, araç ya da alan ara"
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
                aria-label="Aramayı temizle"
              >
                <IconClose size={14} />
              </button>
            ) : (
              <kbd className="searchKey" aria-hidden="true">
                /
              </kbd>
            )}
          </div>

          <p className="srOnly" aria-live="polite">
            {announcement}
          </p>
        </div>

        <div id="project-results">
          {isSearching ? (
            <p className="searchSummary">
              <span>
                “{searchText}” için <strong>{visibleProjects.length}</strong> proje
                {filter !== "all" ? ` · ${categoryLabels[filter]}` : ""}
              </span>
              <button type="button" className="textButton" onClick={() => clearSearch(false)}>
                Aramayı temizle
              </button>
            </p>
          ) : null}

          {showGroups ? (
            <>
              <section className="galleryGroup" aria-labelledby="group-featured">
                <h3 className="galleryGroupTitle" id="group-featured">
                  Öne çıkan çalışmalar
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
                  Arşiv: oyunlar, deneyler, bilim ve tasarım
                  <span className="filterCount">{archive.length}</span>
                </h3>
                <div className="grid">
                  {archive.map((project) => (
                    <ProjectCard key={project.id} project={project} onOpen={handleOpen} titleAs="h4" />
                  ))}
                </div>
              </section>
            </>
          ) : visibleProjects.length ? (
            <div className="grid">
              {visibleProjects.map((project) => (
                <ProjectCard key={project.id} project={project} onOpen={handleOpen} />
              ))}
            </div>
          ) : (
            <div className="searchEmpty">
              <strong>Sonuç bulunamadı</strong>
              <p>
                {otherCategoryMatches
                  ? `Bu alanda “${searchText}” ile eşleşen proje yok, ama diğer alanlarda ${otherCategoryMatches} sonuç var.`
                  : `“${searchText}” ile eşleşen proje yok. Başka bir kelime dene: oyun, Figma, harita…`}
              </p>
              <div className="actions">
                {otherCategoryMatches ? (
                  <button
                    type="button"
                    className="button button-primary"
                    onClick={showAllCategories}
                  >
                    Tüm alanlarda göster
                  </button>
                ) : null}
                <button
                  type="button"
                  className="button button-secondary"
                  onClick={() => clearSearch(true)}
                >
                  Aramayı temizle
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
