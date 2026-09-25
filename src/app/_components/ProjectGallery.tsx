"use client";

import { useEffect, useRef, useState } from "react";
import type { MouseEvent } from "react";
import { replaceHash, useLocationHash } from "../_lib/browser";
import { categoryLabels, categoryOrder } from "../_lib/project-meta";
import type { Project, ProjectCategory } from "../projects";
import { ProjectCard } from "./ProjectCard";
import { ProjectSheet } from "./ProjectSheet";

type FilterValue = "all" | ProjectCategory;

const HASH_PREFIX = "#proje-";

export function ProjectGallery({ projects }: { projects: Project[] }) {
  const [filter, setFilter] = useState<FilterValue>("all");
  const sectionRef = useRef<HTMLDivElement>(null);
  const openedInApp = useRef(false);
  const pendingScroll = useRef<string | null>(null);

  const hash = useLocationHash();
  const activeId = hash.startsWith(HASH_PREFIX)
    ? decodeURIComponent(hash.slice(HASH_PREFIX.length))
    : null;
  const activeProject = projects.find((project) => project.id === activeId) ?? null;

  const counts = projects.reduce<Record<FilterValue, number>>(
    (result, project) => {
      result.all += 1;
      result[project.category] += 1;
      return result;
    },
    { all: 0, web: 0, mobile: 0, game: 0, science: 0, design: 0, content: 0 },
  );

  const filters: { value: FilterValue; label: string }[] = [
    { value: "all", label: "Tümü" },
    ...categoryOrder.map((value) => ({ value, label: categoryLabels[value] })),
  ];

  const visibleProjects =
    filter === "all"
      ? projects
      : projects.filter((project) => project.category === filter);

  const navigationList =
    activeProject && visibleProjects.includes(activeProject)
      ? visibleProjects
      : projects;

  useEffect(() => {
    if (activeProject || !pendingScroll.current) return;

    const target = pendingScroll.current;
    pendingScroll.current = null;
    window.requestAnimationFrame(() => {
      document.getElementById(target)?.scrollIntoView({ behavior: "smooth" });
    });
  }, [activeProject]);

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

    const section = sectionRef.current;
    if (section && section.getBoundingClientRect().top < 0) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

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
          </div>
          <p className="srOnly" aria-live="polite">
            {visibleProjects.length} proje gösteriliyor
          </p>
        </div>

        <div className="grid">
          {visibleProjects.map((project) => (
            <ProjectCard key={project.id} project={project} onOpen={handleOpen} />
          ))}
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
