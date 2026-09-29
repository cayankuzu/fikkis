"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import type { MouseEvent } from "react";
import { useCanHover, usePrefersReducedMotion } from "../_lib/browser";
import { categoryLabels, getQuickLink, getStatus } from "../_lib/project-meta";
import type { Project } from "../projects";
import { IconArrowUpRight, IconMonitor, IconPlay } from "./icons";

type ProjectCardProps = {
  project: Project;
  onOpen: (event: MouseEvent<HTMLAnchorElement>, project: Project) => void;
  /** Kartlar bir grup başlığının altındaysa bir seviye aşağı iner. */
  titleAs?: "h3" | "h4";
};

const CYCLE_INTERVAL = 1100;

export function ProjectCard({ project, onOpen, titleAs: Title = "h3" }: ProjectCardProps) {
  const canHover = useCanHover();
  const reducedMotion = usePrefersReducedMotion();
  const [isActive, setIsActive] = useState(false);
  const [hasActivated, setHasActivated] = useState(false);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const [frame, setFrame] = useState(0);
  const mediaRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  const layout =
    project.cardLayout ?? (project.category === "mobile" ? "stack" : "cover");
  const status = getStatus(project);
  const quickLink = getQuickLink(project);
  const canCycle =
    layout !== "stack" && !project.video && project.images.length > 1;
  const cover = project.images[canCycle ? frame : 0] ?? project.images[0];

  const activate = () => {
    if (reducedMotion) return;
    setIsActive(true);
    setHasActivated(true);
  };

  const deactivate = () => {
    setIsActive(false);
    setFrame(0);
  };

  // Dokunmatik cihazlarda video, kart ekranın büyük kısmına girince oynar.
  useEffect(() => {
    if (canHover || reducedMotion || !project.video) return;
    const node = mediaRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        const visible = entry.intersectionRatio >= 0.7;
        setIsActive(visible);
        if (visible) setHasActivated(true);
      },
      { threshold: [0, 0.7] },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [canHover, reducedMotion, project.video]);

  useEffect(() => {
    if (!isActive || !canCycle) return;

    const interval = window.setInterval(() => {
      setFrame((current) => (current + 1) % project.images.length);
    }, CYCLE_INTERVAL);

    return () => window.clearInterval(interval);
  }, [isActive, canCycle, project.images.length]);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    if (isActive) video.play().catch(() => undefined);
    else video.pause();
  }, [isActive, hasActivated]);

  const stackImages = project.images.slice(
    0,
    project.category === "mobile" ? 3 : 2,
  );

  return (
    <article
      className={`card tone-${project.tone} card-${project.category}${isActive ? " is-active" : ""}`}
      onMouseEnter={canHover ? activate : undefined}
      onMouseLeave={canHover ? deactivate : undefined}
      onFocus={activate}
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) deactivate();
      }}
    >
      <div ref={mediaRef} className={`cardMedia cardMedia-${layout}`}>
        {layout === "stack" ? (
          <div className="stack" data-count={stackImages.length}>
            {stackImages.map((image, index) => (
              <div className="stackItem" key={image.src} data-index={index}>
                <Image
                  src={image.src}
                  alt=""
                  fill
                  sizes="(max-width: 640px) 34vw, 150px"
                />
              </div>
            ))}
          </div>
        ) : (
          <Image
            key={cover.src}
            className="cardImage"
            src={cover.src}
            alt=""
            fill
            sizes="(max-width: 640px) calc(100vw - 32px), (max-width: 1024px) 50vw, 400px"
            style={{ objectPosition: project.coverPosition ?? "center" }}
          />
        )}

        {project.video && hasActivated ? (
          <video
            ref={videoRef}
            className={`cardVideo${isActive && isVideoPlaying ? " is-visible" : ""}`}
            src={project.video}
            muted
            loop
            playsInline
            autoPlay
            preload="auto"
            aria-hidden="true"
            tabIndex={-1}
            onPlaying={() => setIsVideoPlaying(true)}
            onPause={() => setIsVideoPlaying(false)}
          />
        ) : null}

        <div className="cardBadges">
          {project.video ? (
            <span className="badge">
              <IconPlay size={11} />
              Video
            </span>
          ) : null}
          {project.desktopOnly ? (
            <span className="badge">
              <IconMonitor size={12} />
              Masaüstü
            </span>
          ) : null}
        </div>

        {canCycle ? (
          <div className="cardDots" aria-hidden="true">
            {project.images.map((image, index) => (
              <span
                key={image.src}
                className={index === frame ? "is-current" : undefined}
              />
            ))}
          </div>
        ) : null}
      </div>

      <div className="cardBody">
        <p className="cardMeta">
          <span>
            {categoryLabels[project.category]}
            {project.tags?.[0] ? ` · ${project.tags[0]}` : ""}
          </span>
          <span className={`status status-${status.tone}`}>{status.label}</span>
        </p>
        <Title className="cardTitle">
          <a
            className="cardLink"
            href={`#proje-${project.id}`}
            aria-haspopup="dialog"
            onClick={(event) => onOpen(event, project)}
          >
            {project.title}
          </a>
          <IconArrowUpRight size={18} className="cardTitleIcon" />
        </Title>
        <p className="cardHook">{project.hook}</p>
        <p className="cardPlatform">{project.platform}</p>
      </div>

      {quickLink ? (
        <a
          className="cardQuick"
          href={quickLink.href}
          target="_blank"
          rel="noreferrer"
          aria-label={`${project.title}: ${quickLink.label} (yeni sekmede açılır)`}
          title={quickLink.label}
        >
          <IconArrowUpRight size={16} />
        </a>
      ) : null}
    </article>
  );
}
