"use client";

import Image from "next/image";
import type { CSSProperties, PointerEvent as ReactPointerEvent } from "react";
import { useEffect, useRef, useState } from "react";

type Position = { x: number; y: number };

type FloatingPortalProps = {
  href: string;
  destination: string;
  eyebrow: string;
  previewSrc: string;
  storageKey: string;
};

const EDGE = 12;

function clamp(value: number, min: number, max: number) {
  return Math.min(Math.max(value, min), Math.max(min, max));
}

export function FloatingPortal({ href, destination, eyebrow, previewSrc, storageKey }: FloatingPortalProps) {
  const portalRef = useRef<HTMLAnchorElement>(null);
  const positionRef = useRef<Position | null>(null);
  const dragRef = useRef<{ pointerId: number; startX: number; startY: number; originX: number; originY: number } | null>(null);
  const movedRef = useRef(false);
  const [position, setPositionState] = useState<Position | null>(null);
  const [dragging, setDragging] = useState(false);

  const setPosition = (next: Position) => {
    positionRef.current = next;
    setPositionState(next);
  };

  useEffect(() => {
    const element = portalRef.current;
    if (!element) return;

    const rect = element.getBoundingClientRect();
    let saved: Position | null = null;

    try {
      const raw = window.localStorage.getItem(storageKey);
      if (raw) saved = JSON.parse(raw) as Position;
    } catch {
      saved = null;
    }

    setPosition({
      x: clamp(saved?.x ?? rect.left, EDGE, window.innerWidth - rect.width - EDGE),
      y: clamp(saved?.y ?? rect.top, EDGE, window.innerHeight - rect.height - EDGE),
    });

    const keepInsideViewport = () => {
      const current = positionRef.current;
      const currentRect = element.getBoundingClientRect();
      if (!current) return;
      setPosition({
        x: clamp(current.x, EDGE, window.innerWidth - currentRect.width - EDGE),
        y: clamp(current.y, EDGE, window.innerHeight - currentRect.height - EDGE),
      });
    };

    window.addEventListener("resize", keepInsideViewport);
    return () => window.removeEventListener("resize", keepInsideViewport);
  }, [storageKey]);

  const handlePointerDown = (event: ReactPointerEvent<HTMLAnchorElement>) => {
    if (event.button !== 0) return;
    const element = portalRef.current;
    if (!element) return;
    const rect = element.getBoundingClientRect();
    movedRef.current = false;
    dragRef.current = {
      pointerId: event.pointerId,
      startX: event.clientX,
      startY: event.clientY,
      originX: positionRef.current?.x ?? rect.left,
      originY: positionRef.current?.y ?? rect.top,
    };
    element.setPointerCapture(event.pointerId);
    setDragging(true);
  };

  const handlePointerMove = (event: ReactPointerEvent<HTMLAnchorElement>) => {
    const drag = dragRef.current;
    const element = portalRef.current;
    if (!drag || !element || drag.pointerId !== event.pointerId) return;

    const dx = event.clientX - drag.startX;
    const dy = event.clientY - drag.startY;
    if (Math.hypot(dx, dy) > 5) movedRef.current = true;
    if (!movedRef.current) return;

    event.preventDefault();
    const rect = element.getBoundingClientRect();
    setPosition({
      x: clamp(drag.originX + dx, EDGE, window.innerWidth - rect.width - EDGE),
      y: clamp(drag.originY + dy, EDGE, window.innerHeight - rect.height - EDGE),
    });
  };

  const finishDrag = (event: ReactPointerEvent<HTMLAnchorElement>) => {
    const element = portalRef.current;
    if (dragRef.current?.pointerId !== event.pointerId || !element) return;
    if (element.hasPointerCapture(event.pointerId)) element.releasePointerCapture(event.pointerId);
    dragRef.current = null;
    setDragging(false);
    const current = positionRef.current;
    if (current) {
      try { window.localStorage.setItem(storageKey, JSON.stringify(current)); } catch { /* storage may be disabled */ }
    }
  };

  const style = position ? ({ left: position.x, top: position.y } satisfies CSSProperties) : undefined;

  return (
    <a
      ref={portalRef}
      className={`floatingPortal${dragging ? " isDragging" : ""}`}
      href={href}
      style={style}
      aria-label={`${destination} sitesine açılan portal. Taşımak için sürükleyin.`}
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={finishDrag}
      onPointerCancel={finishDrag}
      onClick={(event) => {
        if (movedRef.current) {
          event.preventDefault();
          movedRef.current = false;
        }
      }}
    >
      <span className="portalChrome" aria-hidden="true">
        <span className="portalAura" />
        <span className="portalCurrent" />
        <span className="portalWindow">
          <Image className="portalPreview" src={previewSrc} alt="" fill priority sizes="258px" />
          <span className="portalGlass" />
        </span>
        <i className="portalSpark sparkOne" />
        <i className="portalSpark sparkTwo" />
        <i className="portalSpark sparkThree" />
      </span>
      <span className="portalLabel">
        <small>{eyebrow}</small>
        <strong>{destination}</strong>
        <span>Sürükle · aç ↗</span>
      </span>
    </a>
  );
}
