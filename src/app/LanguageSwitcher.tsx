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
      className={`inline-flex items-center rounded-full border border-[#dfe6dc] bg-white/82 p-0.5 text-[10px] font-black uppercase tracking-[0.06em] shadow-sm backdrop-blur transition-all duration-300 ${className}`}
      aria-label="Switch language"
    >
      {languages.map((language) => {
        const isActive = language.code === activeLocale;
        const href = getLocalizedPath(pathname, language.code);

        return (
          <a
            key={language.code}
            className={`inline-flex min-h-7 items-center gap-1 rounded-full px-2.5 transition ${
              isActive
                ? "bg-[#073716] text-white shadow-[0_6px_14px_rgba(7,55,22,0.16)]"
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
            <span className="text-sm leading-none" aria-hidden="true">
              {language.flag}
            </span>
            {language.label}
          </a>
        );
      })}
    </div>
  );
}
