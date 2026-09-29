import type { ReactNode } from "react";

type IconProps = { size?: number; className?: string };

function Stroke({
  size = 16,
  className,
  children,
}: IconProps & { children: ReactNode }) {
  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
    >
      {children}
    </svg>
  );
}

export function IconHeart(props: IconProps) {
  return (
    <Stroke {...props}>
      <path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.6l-1-1a5.5 5.5 0 0 0-7.8 7.8l1 1L12 21l7.8-7.8 1-1a5.5 5.5 0 0 0 0-7.8z" />
    </Stroke>
  );
}

export function IconInstagram(props: IconProps) {
  return (
    <Stroke {...props}>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.3" cy="6.7" r=".6" fill="currentColor" />
    </Stroke>
  );
}

export function IconLinkedIn(props: IconProps) {
  return (
    <Stroke {...props}>
      <rect x="3" y="3" width="18" height="18" rx="3" />
      <path d="M8 11v5M8 8v.01M12 16v-5M12 13.5a2.5 2.5 0 0 1 5 0V16" />
    </Stroke>
  );
}

export function IconGithub({ size = 16, className }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      className={className}
      aria-hidden="true"
      focusable="false"
    >
      <path
        fill="currentColor"
        d="M12 .5C5.73.5.98 5.24.98 11.52c0 5.02 3.26 9.28 7.77 10.78.57.1.78-.25.78-.55 0-.27-.01-1.16-.02-2.1-3.16.69-3.83-1.34-3.83-1.34-.52-1.31-1.26-1.66-1.26-1.66-1.03-.7.08-.69.08-.69 1.14.08 1.74 1.17 1.74 1.17 1.01 1.73 2.65 1.23 3.3.94.1-.73.4-1.23.72-1.51-2.52-.29-5.17-1.26-5.17-5.6 0-1.24.44-2.25 1.17-3.04-.12-.29-.51-1.45.11-3.02 0 0 .96-.31 3.15 1.16a10.9 10.9 0 0 1 5.74 0c2.19-1.47 3.15-1.16 3.15-1.16.62 1.57.23 2.73.11 3.02.73.79 1.17 1.8 1.17 3.04 0 4.35-2.65 5.31-5.18 5.59.41.35.77 1.04.77 2.1 0 1.52-.01 2.74-.01 3.11 0 .3.2.65.79.54A11.03 11.03 0 0 0 23 11.52C23 5.24 18.27.5 12 .5z"
      />
    </svg>
  );
}

export function IconKaggle(props: IconProps) {
  return (
    <Stroke {...props}>
      <path d="M5 20v-8M12 20V6M19 20v-6" />
    </Stroke>
  );
}

export function IconMail(props: IconProps) {
  return (
    <Stroke {...props}>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3 7 9 6 9-6" />
    </Stroke>
  );
}

export function IconArrowUpRight(props: IconProps) {
  return (
    <Stroke {...props}>
      <path d="M7 17 17 7M8 7h9v9" />
    </Stroke>
  );
}

export function IconArrowRight(props: IconProps) {
  return (
    <Stroke {...props}>
      <path d="M5 12h14M13 6l6 6-6 6" />
    </Stroke>
  );
}

export function IconArrowLeft(props: IconProps) {
  return (
    <Stroke {...props}>
      <path d="M19 12H5M11 6l-6 6 6 6" />
    </Stroke>
  );
}

export function IconArrowDown(props: IconProps) {
  return (
    <Stroke {...props}>
      <path d="M12 5v14M6 13l6 6 6-6" />
    </Stroke>
  );
}

export function IconArrowUp(props: IconProps) {
  return (
    <Stroke {...props}>
      <path d="M12 19V5M6 11l6-6 6 6" />
    </Stroke>
  );
}

export function IconChevronLeft(props: IconProps) {
  return (
    <Stroke {...props}>
      <path d="m15 6-6 6 6 6" />
    </Stroke>
  );
}

export function IconChevronRight(props: IconProps) {
  return (
    <Stroke {...props}>
      <path d="m9 6 6 6-6 6" />
    </Stroke>
  );
}

export function IconClose(props: IconProps) {
  return (
    <Stroke {...props}>
      <path d="M6 6l12 12M18 6 6 18" />
    </Stroke>
  );
}

export function IconMonitor(props: IconProps) {
  return (
    <Stroke {...props}>
      <rect x="3" y="4" width="18" height="12" rx="2" />
      <path d="M8 20h8M12 16v4" />
    </Stroke>
  );
}

export function IconPlay(props: IconProps) {
  return (
    <Stroke {...props}>
      <path d="M7 5.5v13a1 1 0 0 0 1.5.86l10.5-6.5a1 1 0 0 0 0-1.72L8.5 4.64A1 1 0 0 0 7 5.5z" />
    </Stroke>
  );
}

export function IconApple({ size = 16, className }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      className={className}
      aria-hidden="true"
      focusable="false"
    >
      <path
        fill="currentColor"
        d="M16.37 12.6c-.02-2.2 1.8-3.26 1.88-3.31-1.03-1.5-2.62-1.7-3.18-1.73-1.35-.14-2.64.8-3.33.8-.69 0-1.74-.78-2.87-.76-1.47.02-2.83.86-3.59 2.18-1.53 2.66-.39 6.6 1.1 8.76.73 1.06 1.6 2.24 2.73 2.2 1.1-.05 1.51-.71 2.84-.71 1.32 0 1.7.71 2.86.69 1.18-.02 1.93-1.07 2.65-2.13.84-1.22 1.18-2.41 1.2-2.47-.03-.01-2.3-.88-2.3-3.5zM14.2 6.1c.6-.73 1.01-1.75.9-2.76-.87.04-1.92.58-2.54 1.3-.56.65-1.05 1.68-.92 2.68.97.07 1.96-.49 2.56-1.22z"
      />
    </svg>
  );
}

export function IconGooglePlay(props: IconProps) {
  return (
    <Stroke {...props}>
      <path d="M5 3.8v16.4a.8.8 0 0 0 1.2.7l14.2-8.2a.8.8 0 0 0 0-1.4L6.2 3.1A.8.8 0 0 0 5 3.8zM5.3 3.3 14 12l-8.7 8.7M16.9 9.2 14 12l2.9 2.8" />
    </Stroke>
  );
}

export function IconFigma(props: IconProps) {
  return (
    <Stroke {...props}>
      <path d="M12 3H9a3 3 0 0 0 0 6h3V3zM12 9H9a3 3 0 0 0 0 6h3V9zM12 15H9a3 3 0 1 0 3 3v-3zM12 3h3a3 3 0 0 1 0 6h-3V3z" />
      <circle cx="15" cy="12" r="3" />
    </Stroke>
  );
}

export function IconGlobe(props: IconProps) {
  return (
    <Stroke {...props}>
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18M12 3c2.5 2.5 3.8 5.5 3.8 9s-1.3 6.5-3.8 9c-2.5-2.5-3.8-5.5-3.8-9S9.5 5.5 12 3z" />
    </Stroke>
  );
}

export function IconDoc(props: IconProps) {
  return (
    <Stroke {...props}>
      <path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8l-5-5z" />
      <path d="M14 3v5h5M9 13h6M9 17h6" />
    </Stroke>
  );
}

export function IconDownload(props: IconProps) {
  return (
    <Stroke {...props}>
      <path d="M12 4v11M7 10l5 5 5-5M5 20h14" />
    </Stroke>
  );
}

export function IconVideo(props: IconProps) {
  return (
    <Stroke {...props}>
      <rect x="3" y="6" width="13" height="12" rx="2" />
      <path d="m16 10.5 5-3v9l-5-3" />
    </Stroke>
  );
}

export function IconLink(props: IconProps) {
  return (
    <Stroke {...props}>
      <path d="M10 14a4.5 4.5 0 0 0 6.4 0l3-3a4.5 4.5 0 0 0-6.4-6.4l-1 1" />
      <path d="M14 10a4.5 4.5 0 0 0-6.4 0l-3 3a4.5 4.5 0 0 0 6.4 6.4l1-1" />
    </Stroke>
  );
}

export function IconCheck(props: IconProps) {
  return (
    <Stroke {...props}>
      <path d="m5 12.5 4.5 4.5L19 7.5" />
    </Stroke>
  );
}

export function IconCopy(props: IconProps) {
  return (
    <Stroke {...props}>
      <rect x="9" y="9" width="11" height="11" rx="2" />
      <path d="M5 15V6a2 2 0 0 1 2-2h8" />
    </Stroke>
  );
}
