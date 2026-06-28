"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

const languages = [
  { code: "en", label: "EN", flag: "🇬🇧" },
  { code: "th", label: "TH", flag: "🇹🇭" },
] as const;

type LanguageCode = (typeof languages)[number]["code"];

const scrollStorageKey = "coco-number-six-language-scroll";

function getLocaleFromPath(pathname: string): LanguageCode {
  return pathname.startsWith("/th") ? "th" : "en";
}

function getLocalizedPath(pathname: string, locale: LanguageCode) {
  const pathWithoutLocale = pathname.replace(/^\/(en|th)(?=\/|$)/, "") || "";
  return `/${locale}${pathWithoutLocale === "/" ? "" : pathWithoutLocale}`;
}

export default function LanguageSwitcher({ className = "" }: { className?: string }) {
  const pathname = usePathname() || "/en";
  const activeLocale = getLocaleFromPath(pathname);

  useEffect(() => {
    const savedScroll = sessionStorage.getItem(scrollStorageKey);

    if (!savedScroll) {
      return;
    }

    sessionStorage.removeItem(scrollStorageKey);

    const scrollY = Number(savedScroll);

    if (!Number.isFinite(scrollY)) {
      return;
    }

    const restoreScroll = () => window.scrollTo({ top: scrollY, behavior: "auto" });

    requestAnimationFrame(() => {
      restoreScroll();
      window.setTimeout(restoreScroll, 180);
    });
  }, [pathname]);

  return (
    <div
      className={`inline-flex items-center rounded-full border border-[#dfe6dc] bg-white/82 p-1 text-xs font-black uppercase tracking-[0.08em] shadow-sm backdrop-blur ${className}`}
      aria-label="Switch language"
    >
      {languages.map((language) => {
        const isActive = language.code === activeLocale;
        const href = getLocalizedPath(pathname, language.code);

        return (
          <a
            key={language.code}
            className={`inline-flex min-h-9 items-center gap-1.5 rounded-full px-3 transition ${
              isActive
                ? "bg-[#073716] text-white shadow-[0_8px_18px_rgba(7,55,22,0.18)]"
                : "text-[#46584b] hover:bg-[#eef8ef] hover:text-[#073716]"
            }`}
            href={href}
            hrefLang={language.code}
            aria-current={isActive ? "page" : undefined}
            onClick={(event) => {
              if (isActive) {
                event.preventDefault();
                return;
              }

              sessionStorage.setItem(scrollStorageKey, String(window.scrollY));
            }}
          >
            <span className="text-base leading-none" aria-hidden="true">
              {language.flag}
            </span>
            {language.label}
          </a>
        );
      })}
    </div>
  );
}
