"use client";

import { useRef, useState } from "react";
import { ProjectArtwork } from "./ProjectArtwork";
import { projects, type ProjectKind } from "../projects";

type Filter = ProjectKind | "all";

const filters: { id: Filter; label: string; note: string; count: string }[] = [
  { id: "web", label: "Web deneyimleri", note: "Gir, kurcala, kaybol", count: "03" },
  { id: "mobile", label: "Mobil ürünler", note: "Topluluklar ve bağlar", count: "03" },
  { id: "all", label: "Hepsini göster", note: "Bütün küçük evrenler", count: "06" },
];

export function ExploreHub() {
  const [activeFilter, setActiveFilter] = useState<Filter | null>(null);
  const listRef = useRef<HTMLElement>(null);
  const visibleProjects = activeFilter === "all"
    ? projects
    : projects.filter((project) => project.kind === activeFilter);

  function openList(filter: Filter) {
    setActiveFilter(filter);
    window.requestAnimationFrame(() => {
      listRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  }

  return (
    <>
      <section className="categorySection" aria-labelledby="choose-title">
        <div className="sectionIntro">
          <span className="sectionIndex">01</span>
          <div>
            <p className="eyebrow">Bir kapı seç</p>
            <h2 id="choose-title">Bugün neye bakıyoruz?</h2>
          </div>
        </div>

        <div className="categoryButtons">
          {filters.map((filter) => (
            <button
              className={`categoryButton categoryButton-${filter.id}`}
              type="button"
              key={filter.id}
              aria-controls="project-list"
              aria-expanded={activeFilter === filter.id}
              onClick={() => openList(filter.id)}
            >
              <span className="categoryCount">{filter.count}</span>
              <span className="categoryText">
                <strong>{filter.label}</strong>
                <small>{filter.note}</small>
              </span>
              <span className="categoryIcon" aria-hidden="true">
                {activeFilter === filter.id ? "↓" : "↘"}
              </span>
            </button>
          ))}
        </div>
      </section>

      <section
        className={`projectShelf${activeFilter ? " projectShelfOpen" : ""}`}
        id="project-list"
        ref={listRef}
        aria-live="polite"
        aria-labelledby="list-title"
      >
        {activeFilter ? (
          <>
            <div className="shelfHeader">
              <div>
                <p className="eyebrow">Liste açık</p>
                <h2 id="list-title">
                  {filters.find((filter) => filter.id === activeFilter)?.label}
                </h2>
              </div>
              <button type="button" className="shelfClose" onClick={() => setActiveFilter(null)}>
                Listeyi kapat <span aria-hidden="true">×</span>
              </button>
            </div>

            <div className="projectGrid">
              {visibleProjects.map((project, index) => (
                <article className="projectCard" key={project.id}>
                  <a
                    className="projectMainLink"
                    href={project.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`${project.title}: ${project.hrefLabel}`}
                  >
                    <ProjectArtwork id={project.id} />
                    <span className="projectNumber">0{index + 1}</span>
                    <span className="projectKicker">{project.kicker}</span>
                    <h3>{project.title}</h3>
                    <p>{project.description}</p>
                  </a>
                  <div className="projectActions">
                    <a href={project.href} target="_blank" rel="noreferrer">
                      {project.hrefLabel} <span aria-hidden="true">↗</span>
                    </a>
                    <a href={project.github} target="_blank" rel="noreferrer">
                      GitHub <span aria-hidden="true">↗</span>
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </>
        ) : (
          <div className="shelfEmpty" id="list-title">
            <span className="emptyDoodle" aria-hidden="true">↳</span>
            <p>Yukarıdaki düğmelerden birine dokun.<br />İlgili proje listesi burada açılacak.</p>
          </div>
        )}
      </section>
    </>
  );
}
