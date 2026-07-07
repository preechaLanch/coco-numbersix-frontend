"use client";

import { useState } from "react";
import LanguageSwitcher from "./LanguageSwitcher";

type Locale = "en" | "th";

const menuLinksByLocale = {
  en: [
    { label: "Product", href: "#product" },
    { label: "Hospitality", href: "#hospitality" },
    { label: "Wings", href: "#wings" },
    { label: "Partners", href: "#partners" },
    { label: "Pricing", href: "#pricing" },
    { label: "Contact", href: "#contact" },
  ],
  th: [
    { label: "สินค้า", href: "#product" },
    { label: "งานบริการ", href: "#hospitality" },
    { label: "สู่สากล", href: "#wings" },
    { label: "พาร์ทเนอร์", href: "#partners" },
    { label: "ราคา", href: "#pricing" },
    { label: "ติดต่อ", href: "#contact" },
  ],
};

export default function MobileMenu({ locale }: { locale: Locale }) {
  const [isOpen, setIsOpen] = useState(false);
  const menuLinks = menuLinksByLocale[locale];
  const copy = locale === "th"
    ? {
        open: "เปิดเมนู",
        close: "ปิดเมนู",
        navigation: "เมนูมือถือ",
        language: "ภาษา",
        cta: "สอบถามสินค้า",
      }
    : {
        open: "Open navigation menu",
        close: "Close navigation menu",
        navigation: "Mobile navigation",
        language: "Language",
        cta: "Request Product Sample",
      };

  return (
    <div className="xl:hidden">
      <button
        type="button"
        className="inline-grid h-10 w-10 place-items-center text-[#0b3c1b] transition hover:text-[#15552a]"
        aria-label={isOpen ? copy.close : copy.open}
        aria-expanded={isOpen}
        onClick={() => setIsOpen((value) => !value)}
      >
        <span className="sr-only">{isOpen ? copy.close : copy.open}</span>
        <span className="grid gap-1.5">
          <span className={`block h-0.5 w-7 rounded-full bg-current transition ${isOpen ? "translate-y-2 rotate-45" : ""}`} />
          <span className={`block h-0.5 w-7 rounded-full bg-current transition ${isOpen ? "opacity-0" : ""}`} />
          <span className={`block h-0.5 w-7 rounded-full bg-current transition ${isOpen ? "-translate-y-2 -rotate-45" : ""}`} />
        </span>
      </button>

      {isOpen ? (
        <div className="absolute inset-x-5 top-[4rem] overflow-hidden rounded-2xl border border-[#dfe6dc] bg-[#fbfaf7] p-3 shadow-[0_20px_60px_rgba(7,55,22,0.18)] md:top-[4.4rem]">
          <nav aria-label={copy.navigation} className="grid gap-1">
            {menuLinks.map((link) => (
              <a
                key={link.href}
                className="rounded-xl px-4 py-3 text-base font-bold text-[#153321] transition hover:bg-[#eef8ef]"
                href={link.href}
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </a>
            ))}
          </nav>
          <div className="mt-3 flex items-center justify-between gap-3 rounded-2xl bg-white px-3 py-3">
            <span className="text-xs font-bold uppercase tracking-[0.16em] text-[#58675b]">
              {copy.language}
            </span>
            <LanguageSwitcher />
          </div>
          <a
            className="mt-3 inline-flex min-h-12 w-full items-center justify-center rounded-full bg-[#0b3c1b] px-5 text-sm font-bold text-white"
            href="#contact"
            onClick={() => setIsOpen(false)}
          >
            {copy.cta}
          </a>
        </div>
      ) : null}
    </div>
  );
}
