"use client";

import type { MouseEvent } from "react";

type NavbarProps = {
  lang: "si" | "en";
  setLang: (l: "si" | "en") => void;
  t: Function;
};

function safeText(t: Function, key: string, fallback: string): string {
  try {
    const value = t?.(key);
    return typeof value === "string" && value.trim().length > 0 ? value : fallback;
  } catch {
    return fallback;
  }
}

export function Navbar({ lang, setLang, t }: NavbarProps) {
  const homeLabel = safeText(t, "nav.home", lang === "si" ? "මුල් පිටුව" : "Home");
  const howToUseLabel = safeText(
    t,
    "nav.howToUse",
    lang === "si" ? "භාවිතා කරන ආකාරය" : "How to Use",
  );
  const pricingLabel = safeText(
    t,
    "nav.pricing",
    lang === "si" ? "මිල ගණන්" : "Pricing",
  );

  const handleAnchorClick = (
    event: MouseEvent<HTMLAnchorElement>,
    targetId: "howToUse" | "pricing",
  ) => {
    event.preventDefault();
    const target = document.getElementById(targetId);
    if (!target) {
      return;
    }

    target.scrollIntoView({ behavior: "smooth", block: "start" });
    window.history.replaceState(null, "", `#${targetId}`);
  };

  const handleHomeClick = (event: MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
    window.history.replaceState(null, "", "#");
  };

  return (
    <header className="sticky top-0 z-50 border-b border-emerald-100/70 bg-white/70 backdrop-blur-md supports-backdrop-filter:bg-white/55">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-3 px-4 py-3 sm:px-6 lg:px-8">
        <a
          href="#"
          onClick={handleHomeClick}
          className="group inline-flex items-center gap-2 rounded-full px-2 py-1 transition-colors hover:bg-emerald-50"
          aria-label="WA Print Manager home"
        >
          <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-emerald-500 shadow-sm shadow-emerald-600/30">
            <svg
              viewBox="0 0 48 48"
              className="h-6 w-6"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path
                d="M24 6c-9.94 0-18 7.54-18 16.85 0 3.49 1.14 6.73 3.08 9.4L6 42l10.03-2.9A19.06 19.06 0 0 0 24 40.7c9.94 0 18-7.54 18-16.85C42 13.54 33.94 6 24 6Z"
                fill="white"
                fillOpacity="0.18"
              />
              <rect x="13" y="16" width="22" height="7" rx="2" fill="white" />
              <rect x="11" y="22" width="26" height="13" rx="3" fill="white" />
              <rect x="16" y="27" width="16" height="6" rx="1.5" fill="#22C55E" />
              <circle cx="31" cy="26" r="1.4" fill="#22C55E" />
            </svg>
          </span>
          <span className="hidden text-sm font-semibold tracking-wide text-emerald-950 sm:inline">
            WA Print Manager
          </span>
        </a>

        <nav className="flex items-center justify-center gap-2 sm:gap-3" aria-label="Primary">
          <a
            href="#"
            onClick={handleHomeClick}
            className="rounded-full px-3 py-1.5 text-sm font-medium text-slate-700 transition-colors hover:bg-emerald-50 hover:text-emerald-700"
          >
            {homeLabel}
          </a>
          <a
            href="#howToUse"
            onClick={(event) => handleAnchorClick(event, "howToUse")}
            className="rounded-full px-3 py-1.5 text-sm font-medium text-slate-700 transition-colors hover:bg-emerald-50 hover:text-emerald-700"
          >
            {howToUseLabel}
          </a>
          <a
            href="#pricing"
            onClick={(event) => handleAnchorClick(event, "pricing")}
            className="rounded-full px-3 py-1.5 text-sm font-medium text-slate-700 transition-colors hover:bg-emerald-50 hover:text-emerald-700"
          >
            {pricingLabel}
          </a>
        </nav>

        <button
          type="button"
          onClick={() => setLang(lang === "si" ? "en" : "si")}
          className="inline-flex min-w-24 items-center justify-center gap-2 rounded-full border border-emerald-200 bg-white/85 px-3 py-1.5 text-sm text-slate-700 shadow-sm transition hover:border-emerald-300 hover:bg-white"
          aria-label="Toggle language"
        >
          <span className={lang === "si" ? "font-bold text-emerald-700" : "font-medium"}>සිං</span>
          <span className="text-slate-400">|</span>
          <span className={lang === "en" ? "font-bold text-emerald-700" : "font-medium"}>EN</span>
        </button>
      </div>
    </header>
  );
}
