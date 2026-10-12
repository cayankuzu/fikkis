"use client";

import Image from "next/image";
import { useEffect, useId, useRef, useState } from "react";
import type { FocusEvent, MouseEvent } from "react";
import { useCanHover, usePrefersReducedMotion } from "../_lib/browser";
import {
  categoryLabels,
  getCardChoices,
  getQuickLink,
  getStatus,
} from "../_lib/project-meta";
import type { CardChoice } from "../_lib/project-meta";
import type { Project } from "../projects";
import {
  IconArrowUpRight,
  IconBag,
  IconClose,
  IconMonitor,
  IconPlay,
} from "./icons";

type ProjectCardProps = {
  project: Project;
  onOpen: (event: MouseEvent<HTMLAnchorElement>, project: Project) => void;
  /** Kartlar bir grup başlığının altındaysa bir seviye aşağı iner. */
  titleAs?: "h3" | "h4";
};

const CYCLE_INTERVAL = 1100;

function ChoiceIcon({
  choice,
  project,
  size,
}: {
  choice: CardChoice;
  project: Project;
  size: number;
}) {
  if (choice.kind === "purchase") return <IconBag size={size} />;
  if (project.category === "game") return <IconPlay size={size} />;
  return <IconArrowUpRight size={size} />;
}

function stopFocusEvent(event: FocusEvent) {
  event.stopPropagation();
}

export function ProjectCard({ project, onOpen, titleAs: Title = "h3" }: ProjectCardProps) {
  const canHover = useCanHover();
  const reducedMotion = usePrefersReducedMotion();
  const [isActive, setIsActive] = useState(false);
  const [hasActivated, setHasActivated] = useState(false);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const [frame, setFrame] = useState(0);
  const [isChoicesOpen, setIsChoicesOpen] = useState(false);
  const mediaRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const frameRef = useRef<HTMLDivElement>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const choicesId = useId();

  // Platformdan, kartta zaten görünen alan adını ve "Masaüstü" rozetini ayıkla.
  const platform = project.platform
    .split(" · ")
    .filter(
      (part) =>
        part.toLocaleLowerCase("tr") !==
          categoryLabels[project.category].toLocaleLowerCase("tr") &&
        !(project.desktopOnly && /^masaüstü$/i.test(part)),
    )
    .join(" · ");

  const layout =
    project.cardLayout ?? (project.category === "mobile" ? "stack" : "cover");
  const status = getStatus(project);
  const quickLink = getQuickLink(project);
  const canCycle =
    layout !== "stack" && !project.video && project.images.length > 1;
  const cover = project.images[canCycle ? frame : 0] ?? project.images[0];

  // Satın alınabilen projelerde kapak "oyna / satın al" seçeneklerini açar:
  // fareyle üzerine gelince ya da klavyeyle odaklanınca, dokunmatikte ilk dokunuşta.
  const choices = getCardChoices(project);
  const hasChoices = choices.length > 0;
  const choiceMode = canHover ? "hover" : "tap";
  const hasChoicesToggle = hasChoices && choiceMode === "tap";
  const choicesOpen = hasChoicesToggle && isChoicesOpen;

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

  // Açık seçenekler, kapağın dışına dokunulunca ya da Esc ile kapanır.
  useEffect(() => {
    if (!choicesOpen) return;

    const handlePointerDown = (event: PointerEvent) => {
      if (!frameRef.current?.contains(event.target as Node)) {
        setIsChoicesOpen(false);
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key !== "Escape") return;
      const hadFocus = frameRef.current?.contains(document.activeElement);
      setIsChoicesOpen(false);
      if (hadFocus) toggleRef.current?.focus({ preventScroll: true });
    };

    document.addEventListener("pointerdown", handlePointerDown);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("pointerdown", handlePointerDown);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [choicesOpen]);

  const stackImages = project.images.slice(
    0,
    project.category === "mobile" ? 3 : 2,
  );

  const media = (
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
      {hasChoices ? (
        <div
          ref={frameRef}
          className="cardFrame"
          // Dokunmatikte videoyu görünürlük yönetir; seçeneklerin odağı onu durdurmasın.
          onFocus={hasChoicesToggle ? stopFocusEvent : undefined}
          onBlur={hasChoicesToggle ? stopFocusEvent : undefined}
        >
          {media}

          {hasChoicesToggle ? (
            <button
              ref={toggleRef}
              type="button"
              className="cardChoicesToggle"
              aria-expanded={choicesOpen}
              aria-controls={choicesId}
              aria-label={`${project.title} seçenekleri: ${choices
                .map((choice) => choice.label)
                .join(", ")}`}
              onClick={() => setIsChoicesOpen((open) => !open)}
            >
              <span className="cardChoicesHint" aria-hidden="true">
                <ChoiceIcon choice={choices[0]} project={project} size={12} />
                {choices.map((choice) => choice.shortLabel).join(" · ")}
              </span>
            </button>
          ) : null}

          <div
            id={choicesId}
            className="cardChoices"
            role="group"
            aria-label={`${project.title} seçenekleri`}
            data-mode={choiceMode}
            data-open={choicesOpen ? "true" : undefined}
          >
            <div className="cardChoicesList">
              {choices.map((choice) => (
                <a
                  key={choice.kind}
                  className={`cardChoice cardChoice-${choice.kind}`}
                  href={choice.href}
                  target={choice.external ? "_blank" : undefined}
                  rel={choice.external ? "noreferrer" : undefined}
                  aria-label={`${project.title}: ${choice.label}${
                    choice.note ? ` · ${choice.note}` : ""
                  }${choice.external ? " (yeni sekmede açılır)" : ""}`}
                  onClick={() => setIsChoicesOpen(false)}
                >
                  <ChoiceIcon choice={choice} project={project} size={16} />
                  <span>{choice.label}</span>
                  {choice.note ? (
                    <span className="cardChoiceNote">{choice.note}</span>
                  ) : null}
                </a>
              ))}
            </div>

            {hasChoicesToggle ? (
              <button
                type="button"
                className="cardChoicesClose"
                aria-label="Seçenekleri kapat"
                onClick={() => {
                  setIsChoicesOpen(false);
                  toggleRef.current?.focus({ preventScroll: true });
                }}
              >
                <IconClose size={16} />
              </button>
            ) : null}
          </div>
        </div>
      ) : (
        media
      )}

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
        {platform ? <p className="cardPlatform">{platform}</p> : null}
      </div>

      {quickLink && !hasChoices ? (
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
