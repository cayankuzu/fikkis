"use client";

import { useI18n } from "../_lib/i18n";
import { IconGithub } from "./icons";

/** Projenin herkese açık GitHub deposuna giden ikincil buton; depo yoksa hiçbir şey çizmez. */
export function SourceLink({ href }: { href?: string }) {
  const { t } = useI18n();
  if (!href) return null;

  return (
    <a className="button button-secondary" href={href} target="_blank" rel="noreferrer">
      <IconGithub size={16} />
      {t.sheet.sourceCode} · GitHub
    </a>
  );
}
