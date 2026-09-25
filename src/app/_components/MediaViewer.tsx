"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { usePrefersReducedMotion } from "../_lib/browser";
import type { Project } from "../projects";
import { IconChevronLeft, IconChevronRight, IconPlay } from "./icons";

type MediaItem =
  | { kind: "image"; src: string; caption: string }
  | {
      kind: "video";
      src: string;
      caption: string;
      poster: string;
      withSound: boolean;
    };

function videoCaption(project: Project) {
  if (project.category === "game") return "Oynanış videosu";
  if (project.category === "science") return "Çalışma videosu";
  return "Deneyim videosu";
}

function buildItems(project: Project): MediaItem[] {
  const items: MediaItem[] = [];
  const poster = project.images[0]?.src ?? "";

  if (project.fullVideo) {
    items.push({
      kind: "video",
      src: project.fullVideo,
      caption: "Tam video · sesli",
      poster,
      withSound: true,
    });
  } else if (project.video) {
    items.push({
      kind: "video",
      src: project.video,
      caption: videoCaption(project),
      poster,
      withSound: false,
    });
  }

  for (const image of project.images) {
    items.push({ kind: "image", ...image });
  }

  return items;
}

export function MediaViewer({ project }: { project: Project }) {
  const reducedMotion = usePrefersReducedMotion();
  const items = buildItems(project);
  const [index, setIndex] = useState(0);
  const figureRef = useRef<HTMLElement>(null);
  const item = items[index] ?? items[0];
  const hasMany = items.length > 1;

  const go = (step: number) => {
    setIndex((current) => (current + step + items.length) % items.length);
  };

  useEffect(() => {
    if (items.length < 2) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.defaultPrevented || event.altKey || event.metaKey) return;
      if (event.target instanceof HTMLVideoElement) return;
      // Panel kapanış animasyonundayken ya da kapalıyken tuşları yok say.
      if (!figureRef.current?.closest("dialog")?.open) return;

      if (event.key === "ArrowRight") {
        setIndex((current) => (current + 1) % items.length);
      } else if (event.key === "ArrowLeft") {
        setIndex((current) => (current - 1 + items.length) % items.length);
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [items.length]);

  if (!item) return null;

  return (
    <figure ref={figureRef} className={`viewer tone-${project.tone}`}>
      <div className="viewerStage">
        {item.kind === "video" ? (
          <video
            key={item.src}
            className="viewerMedia"
            src={item.src}
            poster={item.poster}
            controls
            playsInline
            preload="metadata"
            muted={!item.withSound}
            loop={!item.withSound}
            autoPlay={!item.withSound && !reducedMotion}
          />
        ) : (
          <Image
            key={item.src}
            className="viewerMedia"
            src={item.src}
            alt={`${project.title}: ${item.caption}`}
            fill
            sizes="(max-width: 900px) 100vw, 860px"
            loading="eager"
          />
        )}

        {hasMany ? (
          <>
            <button
              type="button"
              className="viewerArrow viewerArrow-prev"
              aria-label="Önceki görsel"
              onClick={() => go(-1)}
            >
              <IconChevronLeft size={20} />
            </button>
            <button
              type="button"
              className="viewerArrow viewerArrow-next"
              aria-label="Sonraki görsel"
              onClick={() => go(1)}
            >
              <IconChevronRight size={20} />
            </button>
          </>
        ) : null}
      </div>

      <figcaption className="viewerCaption">
        <span>{item.caption}</span>
        {hasMany ? (
          <span className="viewerCount" aria-hidden="true">
            {String(index + 1).padStart(2, "0")} / {String(items.length).padStart(2, "0")}
          </span>
        ) : null}
      </figcaption>

      {hasMany ? (
        <div className="viewerThumbs" aria-label="Görseller">
          {items.map((thumb, thumbIndex) => (
            <button
              key={thumb.src}
              type="button"
              className="viewerThumb"
              aria-label={`${thumbIndex + 1}. görsel: ${thumb.caption}`}
              aria-current={thumbIndex === index ? "true" : undefined}
              onClick={() => setIndex(thumbIndex)}
            >
              <Image
                src={thumb.kind === "video" ? thumb.poster : thumb.src}
                alt=""
                fill
                sizes="96px"
              />
              {thumb.kind === "video" ? (
                <span className="viewerThumbPlay">
                  <IconPlay size={12} />
                </span>
              ) : null}
            </button>
          ))}
        </div>
      ) : null}
    </figure>
  );
}
