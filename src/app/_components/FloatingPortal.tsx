"use client";

import Image from "next/image";
import type { PointerEvent as ReactPointerEvent } from "react";
import { useEffect, useRef, useState } from "react";

type Position = { x: number; y: number };
type Velocity = { x: number; y: number };

type FloatingPortalProps = {
  href: string;
  destination: string;
  eyebrow: string;
  previewSrc: string;
  storageKey: string;
};

type DragState = {
  pointerId: number;
  lastPointerX: number;
  lastPointerY: number;
  lastTime: number;
  startPointerX: number;
  startPointerY: number;
};

const EDGE = 10;
const DEFAULT_SPEED = 86;
const MAX_THROW_SPEED = 720;

function clamp(value: number, min: number, max: number) {
  return Math.min(Math.max(value, min), Math.max(min, max));
}

function capVelocity(value: number) {
  return clamp(value, -MAX_THROW_SPEED, MAX_THROW_SPEED);
}

export function FloatingPortal({
  href,
  destination,
  eyebrow,
  previewSrc,
  storageKey,
}: FloatingPortalProps) {
  const portalRef = useRef<HTMLAnchorElement>(null);
  const positionRef = useRef<Position>({ x: EDGE, y: EDGE });
  const velocityRef = useRef<Velocity>({ x: DEFAULT_SPEED, y: DEFAULT_SPEED * 0.74 });
  const dragRef = useRef<DragState | null>(null);
  const movedRef = useRef(false);
  const [dragging, setDragging] = useState(false);

  const paintPosition = (position: Position) => {
    positionRef.current = position;
    const element = portalRef.current;
    if (element) {
      element.style.transform = `translate3d(${position.x}px, ${position.y}px, 0)`;
    }
  };

  useEffect(() => {
    const element = portalRef.current;
    if (!element) return;

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const rect = element.getBoundingClientRect();
    let saved: Position | null = null;

    try {
      const raw = window.localStorage.getItem(storageKey);
      if (raw) saved = JSON.parse(raw) as Position;
    } catch {
      saved = null;
    }

    paintPosition({
      x: clamp(saved?.x ?? window.innerWidth - rect.width - 30, EDGE, window.innerWidth - rect.width - EDGE),
      y: clamp(saved?.y ?? 78, EDGE, window.innerHeight - rect.height - EDGE),
    });

    const initialDirection = Math.random() > 0.5 ? 1 : -1;
    velocityRef.current = {
      x: DEFAULT_SPEED * initialDirection,
      y: DEFAULT_SPEED * (0.55 + Math.random() * 0.4) * (Math.random() > 0.5 ? 1 : -1),
    };

    let animationFrame = 0;
    let previousTime = performance.now();

    const tick = (time: number) => {
      const delta = Math.min((time - previousTime) / 1000, 0.04);
      previousTime = time;

      if (!dragRef.current && !reducedMotion) {
        const bounds = element.getBoundingClientRect();
        const maxX = Math.max(EDGE, window.innerWidth - bounds.width - EDGE);
        const maxY = Math.max(EDGE, window.innerHeight - bounds.height - EDGE);
        const next = {
          x: positionRef.current.x + velocityRef.current.x * delta,
          y: positionRef.current.y + velocityRef.current.y * delta,
        };

        if (next.x <= EDGE || next.x >= maxX) {
          next.x = clamp(next.x, EDGE, maxX);
          velocityRef.current.x = next.x <= EDGE
            ? Math.abs(velocityRef.current.x)
            : -Math.abs(velocityRef.current.x);
        }
        if (next.y <= EDGE || next.y >= maxY) {
          next.y = clamp(next.y, EDGE, maxY);
          velocityRef.current.y = next.y <= EDGE
            ? Math.abs(velocityRef.current.y)
            : -Math.abs(velocityRef.current.y);
        }

        paintPosition(next);
      }

      animationFrame = window.requestAnimationFrame(tick);
    };

    animationFrame = window.requestAnimationFrame(tick);

    const keepInsideViewport = () => {
      const bounds = element.getBoundingClientRect();
      paintPosition({
        x: clamp(positionRef.current.x, EDGE, window.innerWidth - bounds.width - EDGE),
        y: clamp(positionRef.current.y, EDGE, window.innerHeight - bounds.height - EDGE),
      });
    };

    window.addEventListener("resize", keepInsideViewport);
    return () => {
      window.cancelAnimationFrame(animationFrame);
      window.removeEventListener("resize", keepInsideViewport);
    };
  }, [storageKey]);

  const handlePointerDown = (event: ReactPointerEvent<HTMLAnchorElement>) => {
    if (event.button !== 0) return;
    const element = portalRef.current;
    if (!element) return;

    movedRef.current = false;
    dragRef.current = {
      pointerId: event.pointerId,
      lastPointerX: event.clientX,
      lastPointerY: event.clientY,
      lastTime: event.timeStamp,
      startPointerX: event.clientX,
      startPointerY: event.clientY,
    };
    element.setPointerCapture(event.pointerId);
    setDragging(true);
  };

  const handlePointerMove = (event: ReactPointerEvent<HTMLAnchorElement>) => {
    const drag = dragRef.current;
    const element = portalRef.current;
    if (!drag || !element || drag.pointerId !== event.pointerId) return;

    const totalDistance = Math.hypot(
      event.clientX - drag.startPointerX,
      event.clientY - drag.startPointerY,
    );
    if (totalDistance > 5) movedRef.current = true;
    if (!movedRef.current) return;

    event.preventDefault();
    const deltaX = event.clientX - drag.lastPointerX;
    const deltaY = event.clientY - drag.lastPointerY;
    const deltaTime = Math.max(event.timeStamp - drag.lastTime, 8) / 1000;
    const bounds = element.getBoundingClientRect();
    const next = {
      x: clamp(positionRef.current.x + deltaX, EDGE, window.innerWidth - bounds.width - EDGE),
      y: clamp(positionRef.current.y + deltaY, EDGE, window.innerHeight - bounds.height - EDGE),
    };

    velocityRef.current = {
      x: capVelocity(velocityRef.current.x * 0.3 + (deltaX / deltaTime) * 0.7),
      y: capVelocity(velocityRef.current.y * 0.3 + (deltaY / deltaTime) * 0.7),
    };
    drag.lastPointerX = event.clientX;
    drag.lastPointerY = event.clientY;
    drag.lastTime = event.timeStamp;
    paintPosition(next);
  };

  const finishDrag = (event: ReactPointerEvent<HTMLAnchorElement>) => {
    const element = portalRef.current;
    if (!element || dragRef.current?.pointerId !== event.pointerId) return;

    if (element.hasPointerCapture(event.pointerId)) {
      element.releasePointerCapture(event.pointerId);
    }
    dragRef.current = null;
    setDragging(false);

    if (Math.hypot(velocityRef.current.x, velocityRef.current.y) < 38) {
      velocityRef.current = { x: DEFAULT_SPEED, y: DEFAULT_SPEED * 0.72 };
    }

    try {
      window.localStorage.setItem(storageKey, JSON.stringify(positionRef.current));
    } catch {
      // Storage can be unavailable in private browsing.
    }
  };

  return (
    <a
      ref={portalRef}
      className={`floatingPortal${dragging ? " isDragging" : ""}`}
      href={href}
      target="_blank"
      rel="noreferrer"
      draggable={false}
      aria-label={`${destination} Instagram profiline açılan portal. Taşımak için basılı tutup sürükleyin.`}
      onDragStart={(event) => event.preventDefault()}
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
          <Image
            className="portalPreview"
            src={previewSrc}
            alt=""
            fill
            priority
            draggable={false}
            sizes="300px"
          />
          <span className="portalGlass" />
          <span className="instagramPlaque">
            <i />
            <span>
              <small>Instagram</small>
              <strong>{destination}</strong>
            </span>
          </span>
        </span>
        <i className="portalSpark sparkOne" />
        <i className="portalSpark sparkTwo" />
        <i className="portalSpark sparkThree" />
      </span>
      <span className="portalLabel">
        <small>{eyebrow}</small>
        <strong>{destination}</strong>
        <span>basılı tut · sürükle · aç ↗</span>
      </span>
    </a>
  );
}
