"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import type { Project } from "../projects";

type ProjectSlideshowProps = {
  project: Project;
  priority?: boolean;
};

const categoryLabels: Record<Project["category"], string> = {
  web: "Web sitesi",
  game: "Oyun",
  mobile: "Mobil uygulama",
  content: "İçerik",
};

export function ProjectSlideshow({
  project,
  priority = false,
}: ProjectSlideshowProps) {
  const sources = project.previews ?? [project.preview];
  const [activeIndex, setActiveIndex] = useState(0);
  const activeSource = sources[activeIndex] ?? sources[0];

  useEffect(() => {
    if (sources.length < 2) return;

    const interval = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % sources.length);
    }, 3000);

    return () => window.clearInterval(interval);
  }, [sources.length]);

  return (
    <span
      className={`projectCover projectCover-${project.previewFit ?? "cover"}`}
      aria-label={`${project.title} proje görüntüsü`}
    >
      <span className="projectBadge">{categoryLabels[project.category]}</span>
      {project.category === "mobile" ? (
        <span className="projectBadge projectBadgeSecondary">
          Mobil app mockup
        </span>
      ) : null}
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
        alt=""
        fill
        priority={priority}
        sizes="(max-width: 680px) calc(100vw - 34px), (max-width: 980px) 47vw, 400px"
        style={{ objectPosition: project.previewPosition ?? "center" }}
      />
      {sources.length > 1 ? (
        <span className="slideshowProgress" aria-hidden="true">
          {sources.map((source, index) => (
            <span
              className={index === activeIndex ? "is-active" : ""}
              key={source}
            />
          ))}
        </span>
      ) : null}
    </span>
  );
}
