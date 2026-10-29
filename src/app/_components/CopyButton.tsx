"use client";

import { useEffect, useState } from "react";
import { copyText } from "../_lib/browser";
import { IconCheck, IconCopy } from "./icons";

export function CopyButton({
  text,
  label,
  copiedLabel = "Kopyalandı",
}: {
  text: string;
  label: string;
  copiedLabel?: string;
}) {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (!copied) return;
    const timer = window.setTimeout(() => setCopied(false), 1800);
    return () => window.clearTimeout(timer);
  }, [copied]);

  return (
    <button
      type="button"
      className="button button-secondary button-small"
      onClick={async () => setCopied(await copyText(text))}
    >
      {copied ? <IconCheck size={15} /> : <IconCopy size={15} />}
      <span aria-live="polite">{copied ? copiedLabel : label}</span>
    </button>
  );
}
