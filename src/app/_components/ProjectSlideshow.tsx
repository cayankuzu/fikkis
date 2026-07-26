"use client";

import Image from "next/image";
import { useEffect, useRef, useState, useSyncExternalStore } from "react";
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

function getMousePreviewSnapshot() {
  return window.matchMedia(
    "(any-pointer: fine) and (any-hover: hover)",
  ).matches;
}

function subscribeToMousePreviewChanges(onStoreChange: () => void) {
  const query = window.matchMedia(
    "(any-pointer: fine) and (any-hover: hover)",
  );
  query.addEventListener("change", onStoreChange);

  return () => query.removeEventListener("change", onStoreChange);
}

function getServerMousePreviewSnapshot() {
  return false;
}

export function ProjectSlideshow({
  project,
  priority = false,
}: ProjectSlideshowProps) {
  const sources = project.previews ?? [project.preview];
  const [activeIndex, setActiveIndex] = useState(0);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const hoverTimerRef = useRef<number | null>(null);
  const wantsVideoRef = useRef(false);
  const supportsMousePreview = useSyncExternalStore(
    subscribeToMousePreviewChanges,
    getMousePreviewSnapshot,
    getServerMousePreviewSnapshot,
  );
  const activeSource = sources[activeIndex] ?? sources[0];
  const hasVideoPreview =
    supportsMousePreview &&
    project.category !== "mobile" &&
    Boolean(project.videoPreview);

  useEffect(() => {
    if (sources.length < 2) return;

    const interval = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % sources.length);
    }, 3000);

    return () => window.clearInterval(interval);
  }, [sources.length]);

  useEffect(
    () => () => {
      if (hoverTimerRef.current !== null) {
        window.clearTimeout(hoverTimerRef.current);
      }
    },
    [],
  );

  const playVideo = () => {
    const video = videoRef.current;
    if (!video || !wantsVideoRef.current) return;

    const startPlayback = () => {
      if (!wantsVideoRef.current) return;

      video.currentTime = 0;

      void video.play().catch(() => {
        setIsVideoPlaying(false);
      });
    };

    if (video.readyState >= HTMLMediaElement.HAVE_METADATA) {
      startPlayback();
      return;
    }

    video.addEventListener("loadedmetadata", startPlayback, { once: true });
    video.load();
  };

  const requestVideo = () => {
    if (!hasVideoPreview) return;

    wantsVideoRef.current = true;
    if (hoverTimerRef.current !== null) {
      window.clearTimeout(hoverTimerRef.current);
    }
    hoverTimerRef.current = window.setTimeout(playVideo, 180);
  };

  const stopVideo = () => {
    wantsVideoRef.current = false;
    if (hoverTimerRef.current !== null) {
      window.clearTimeout(hoverTimerRef.current);
      hoverTimerRef.current = null;
    }

    const video = videoRef.current;
    if (video) {
      video.pause();
      video.currentTime = 0;
    }
    setIsVideoPlaying(false);
  };

  return (
    <span
      className={`projectCover projectCover-${project.previewFit ?? "cover"}${hasVideoPreview && isVideoPlaying ? " is-video-playing" : ""}`}
      aria-label={`${project.title} proje görüntüsü`}
      onMouseEnter={requestVideo}
      onMouseLeave={stopVideo}
      onFocus={requestVideo}
      onBlur={stopVideo}
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
      {hasVideoPreview ? (
        <video
          ref={videoRef}
          className="projectCoverVideo"
          src={project.videoPreview}
          poster={project.preview}
          muted
          loop
          playsInline
          preload="none"
          aria-hidden="true"
          tabIndex={-1}
          onPlaying={() => {
            if (wantsVideoRef.current) setIsVideoPlaying(true);
          }}
          onError={() => setIsVideoPlaying(false)}
          style={{ objectPosition: project.previewPosition ?? "center" }}
        />
      ) : null}
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
