"use client";

import Image from "next/image";
import { useEffect, useMemo, useRef, useState } from "react";
import type { KeyboardEvent as ReactKeyboardEvent } from "react";
import { replaceHash } from "../_lib/browser";
import { useI18n } from "../_lib/i18n";
import {
  arrangeProjects,
  categoryLabels,
  getQuickLink,
  getStatus,
} from "../_lib/project-meta";
import { getLocalizedProjects } from "../_lib/projects-en";
import { scoreProjects } from "../_lib/search";
import type { Project } from "../projects";
import { IconArrowUpRight, IconClose, IconSearch } from "./icons";

type CommandPaletteProps = {
  open: boolean;
  onClose: () => void;
  projects: Project[];
};

export function CommandPalette({ open, onClose, projects: rawProjects }: CommandPaletteProps) {
  const { locale, t } = useI18n();
  const dialogRef = useRef<HTMLDialogElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const [query, setQuery] = useState("");
  const [selectedIndex, setSelectedIndex] = useState(0);

  const projects = useMemo(
    () => getLocalizedProjects(rawProjects, locale),
    [rawProjects, locale],
  );

  const ordered = useMemo(() => {
    const { featured, archive } = arrangeProjects(projects);
    return [...featured, ...archive];
  }, [projects]);

  const results = useMemo(() => {
    const trimmed = query.trim();
    if (!trimmed) return ordered.slice(0, 12);
    const scores = scoreProjects(projects, trimmed);
    return ordered
      .filter((p) => scores.has(p.id))
      .sort((a, b) => (scores.get(b.id) ?? 0) - (scores.get(a.id) ?? 0))
      .slice(0, 14);
  }, [ordered, projects, query]);

  const clampedIndex = results.length ? Math.min(selectedIndex, results.length - 1) : 0;

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    if (open && !dialog.open) {
      dialog.showModal();
      window.requestAnimationFrame(() => inputRef.current?.focus());
    }
    if (!open && dialog.open) {
      dialog.close();
    }
  }, [open]);

  const openProject = (project: Project) => {
    onClose();
    setQuery("");
    setSelectedIndex(0);
    window.requestAnimationFrame(() => {
      replaceHash(`#proje-${project.id}`);
    });
  };

  const handleKeyDown = (event: ReactKeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Escape") {
      event.preventDefault();
      onClose();
    } else if (event.key === "ArrowDown") {
      event.preventDefault();
      if (results.length) setSelectedIndex((clampedIndex + 1) % results.length);
    } else if (event.key === "ArrowUp") {
      event.preventDefault();
      if (results.length) {
        setSelectedIndex((clampedIndex - 1 + results.length) % results.length);
      }
    } else if (event.key === "Enter" && results[clampedIndex]) {
      event.preventDefault();
      openProject(results[clampedIndex]);
    }
  };

  return (
    <dialog
      ref={dialogRef}
      className="cmdDialog"
      aria-label={t.projectsSection.palette.trigger}
      onCancel={(e) => {
        e.preventDefault();
        onClose();
      }}
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="cmdPanel">
        <div className="cmdHead">
          <IconSearch size={18} className="cmdSearchIcon" />
          <input
            ref={inputRef}
            className="cmdInput"
            type="search"
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setSelectedIndex(0);
            }}
            onKeyDown={handleKeyDown}
            placeholder={t.projectsSection.palette.placeholder}
            autoComplete="off"
            spellCheck={false}
          />
          <button
            type="button"
            className="cmdCloseBtn"
            onClick={onClose}
            aria-label={t.sheet.close}
          >
            <IconClose size={16} />
          </button>
        </div>

        <div className="cmdBody" role="listbox">
          <p className="cmdSectionLabel">
            {t.projectsSection.palette.projectsHeading} ({results.length})
          </p>

          {results.length === 0 ? (
            <p className="cmdEmpty">{t.projectsSection.palette.empty}</p>
          ) : (
            <ul className="cmdList">
              {results.map((project, idx) => {
                const status = getStatus(project, locale);
                const quick = getQuickLink(project, locale);
                const active = idx === clampedIndex;
                return (
                  <li
                    key={project.id}
                    className={`cmdItem tone-${project.tone}${active ? " is-selected" : ""}`}
                    onMouseEnter={() => setSelectedIndex(idx)}
                  >
                    <button
                      type="button"
                      className="cmdItemMain"
                      role="option"
                      aria-selected={active}
                      onClick={() => openProject(project)}
                    >
                      <span className="cmdThumb">
                        <Image
                          src={project.images[0].src}
                          alt=""
                          fill
                          sizes="56px"
                        />
                      </span>
                      <span className="cmdText">
                        <span className="cmdTitleRow">
                          <strong>{project.title}</strong>
                          <span className={`status status-${status.tone}`}>{status.label}</span>
                        </span>
                        <span className="cmdSub">
                          {t.projectsSection.categories[project.category] ?? categoryLabels[project.category]}
                          {" · "}
                          {project.tools.slice(0, 3).join(", ")}
                        </span>
                      </span>
                    </button>

                    {quick ? (
                      <a
                        className="cmdQuickLink"
                        href={quick.href}
                        target="_blank"
                        rel="noreferrer"
                        title={quick.label}
                        onClick={onClose}
                      >
                        {t.projectsSection.palette.quickOpen}
                        <IconArrowUpRight size={13} />
                      </a>
                    ) : null}
                  </li>
                );
              })}
            </ul>
          )}
        </div>

        <div className="cmdFoot">
          <span>
            <kbd>↑</kbd> <kbd>↓</kbd> {t.projectsSection.palette.hintNav}
          </span>
          <span>
            <kbd>↵</kbd> {t.projectsSection.palette.hintOpen}
          </span>
          <span>
            <kbd>Esc</kbd> {t.projectsSection.palette.hintEsc}
          </span>
        </div>
      </div>
    </dialog>
  );
}
