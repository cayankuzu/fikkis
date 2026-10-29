"use client";

import { useI18n, type Locale } from "../_lib/i18n";

export function LanguageToggle() {
  const { locale, setLocale } = useI18n();

  return (
    <div
      className="langToggle"
      role="group"
      aria-label="Dil seçimi / Language selector"
    >
      <button
        type="button"
        className={`langBtn${locale === "tr" ? " is-active" : ""}`}
        aria-pressed={locale === "tr"}
        onClick={() => setLocale("tr")}
        title="Türkçe"
      >
        TR
      </button>
      <button
        type="button"
        className={`langBtn${locale === "en" ? " is-active" : ""}`}
        aria-pressed={locale === "en"}
        onClick={() => setLocale("en")}
        title="English"
      >
        EN
      </button>
    </div>
  );
}
