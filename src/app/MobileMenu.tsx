"use client";

import { useState } from "react";
import LanguageSwitcher from "./LanguageSwitcher";

const menuLinks = [
  { label: "Product", href: "#product" },
  { label: "Hospitality", href: "#hospitality" },
  { label: "Wings", href: "#wings" },
  { label: "Partners", href: "#partners" },
  { label: "Pricing", href: "#pricing" },
  { label: "Contact", href: "#contact" },
];

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="xl:hidden">
      <button
        type="button"
        className="inline-flex h-11 items-center gap-3 rounded-full border border-[#dfe6dc] bg-white/82 px-4 text-[#0b3c1b] shadow-sm backdrop-blur transition hover:bg-white"
        aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
        aria-expanded={isOpen}
        onClick={() => setIsOpen((value) => !value)}
      >
        <span className="sr-only">{isOpen ? "Close menu" : "Open menu"}</span>
        <span className="text-sm font-bold uppercase tracking-[0.12em]">Menu</span>
        <span className="grid gap-1.5">
          <span className={`block h-0.5 w-5 rounded-full bg-current transition ${isOpen ? "translate-y-2 rotate-45" : ""}`} />
          <span className={`block h-0.5 w-5 rounded-full bg-current transition ${isOpen ? "opacity-0" : ""}`} />
          <span className={`block h-0.5 w-5 rounded-full bg-current transition ${isOpen ? "-translate-y-2 -rotate-45" : ""}`} />
        </span>
      </button>

      {isOpen ? (
        <div className="absolute inset-x-5 top-[4.75rem] overflow-hidden rounded-2xl border border-[#dfe6dc] bg-[#fbfaf7] p-3 shadow-[0_20px_60px_rgba(7,55,22,0.18)]">
          <nav aria-label="Mobile navigation" className="grid gap-1">
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
              Language
            </span>
            <LanguageSwitcher />
          </div>
          <a
            className="mt-3 inline-flex min-h-12 w-full items-center justify-center rounded-full bg-[#0b3c1b] px-5 text-sm font-bold text-white"
            href="#contact"
            onClick={() => setIsOpen(false)}
          >
            Request Product Sample
          </a>
        </div>
      ) : null}
    </div>
  );
}
