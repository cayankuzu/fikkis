"use client";

import Image from "next/image";
import { useEffect, useState, useSyncExternalStore } from "react";
import type { Project } from "../projects";

type ProjectSlideshowProps = {
  project: Project;
  priority?: boolean;
};

const categoryLabels: Record<Project["category"], string> = {
  web: "Web ürünü",
  game: "Oyun",
  mobile: "Mobil ürün",
  content: "Bağımsız yayın",
  design: "Tasarım",
  science: "Bilim çalışması",
};

function subscribeToReducedMotion(onStoreChange: () => void) {
  const query = window.matchMedia("(prefers-reduced-motion: reduce)");
  query.addEventListener("change", onStoreChange);

  return () => query.removeEventListener("change", onStoreChange);
}

function getReducedMotionSnapshot() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

function getServerReducedMotionSnapshot() {
  return false;
}

export function ProjectSlideshow({
  project,
  priority = false,
}: ProjectSlideshowProps) {
  const sources = project.previews ?? [project.preview];
  const [activeIndex, setActiveIndex] = useState(0);
  const [isInteractionPaused, setIsInteractionPaused] = useState(false);
  const [isUserPaused, setIsUserPaused] = useState(false);
  const prefersReducedMotion = useSyncExternalStore(
    subscribeToReducedMotion,
    getReducedMotionSnapshot,
    getServerReducedMotionSnapshot,
  );
  const activeSource = sources[activeIndex] ?? sources[0];

  useEffect(() => {
    if (
      sources.length < 2 ||
      isInteractionPaused ||
      isUserPaused ||
      prefersReducedMotion
    ) {
      return;
    }

    const interval = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % sources.length);
    }, 3000);

    return () => window.clearInterval(interval);
  }, [isInteractionPaused, isUserPaused, prefersReducedMotion, sources.length]);

  return (
    <span
      className={`projectCover projectCover-${project.previewFit ?? "cover"}`}
      onMouseEnter={() => setIsInteractionPaused(true)}
      onMouseLeave={() => setIsInteractionPaused(false)}
      onFocusCapture={() => setIsInteractionPaused(true)}
      onBlurCapture={() => setIsInteractionPaused(false)}
    >
      <span className="projectBadge">{categoryLabels[project.category]}</span>
      {project.tags?.map((tag) => (
        <span className="projectBadge projectBadgeSecondary" key={tag}>
          {tag}
        </span>
      ))}
      {project.previewFit === "contain" ? (
        <span
          className="projectCoverBackdrop"
          style={{ backgroundImage: `url("${activeSource}")` }}
          aria-hidden="true"
        />
      ) : null}
      <Image
        key={activeSource}
        className="projectCoverImage"
        src={activeSource}
        alt={`${project.title} proje önizlemesi`}
        fill
        priority={priority}
        sizes="(max-width: 680px) calc(100vw - 34px), (max-width: 980px) 47vw, 400px"
        style={{ objectPosition: project.previewPosition ?? "center" }}
      />
      {sources.length > 1 ? (
        <>
          {!prefersReducedMotion ? (
            <button
              className="slideshowToggle"
              type="button"
              aria-pressed={isUserPaused}
              aria-label={
                isUserPaused
                  ? `${project.title} slayt gösterisini sürdür`
                  : `${project.title} slayt gösterisini duraklat`
              }
              onClick={() => setIsUserPaused((current) => !current)}
            >
              {isUserPaused ? "Oynat" : "Durdur"}
            </button>
          ) : null}
          <span className="slideshowProgress" aria-hidden="true">
            {sources.map((source, index) => (
              <span
                className={index === activeIndex ? "is-active" : ""}
                key={source}
              />
            ))}
          </span>
        </>
      ) : null}
    </span>
  );
}
