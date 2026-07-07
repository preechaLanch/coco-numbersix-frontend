"use client";

import { useEffect, useState } from "react";

type Locale = "en" | "th";

const navLinksByLocale = {
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

export default function ActiveNav({ locale }: { locale: Locale }) {
  const navLinks = navLinksByLocale[locale];
  const [activeHref, setActiveHref] = useState(navLinks[0].href);

  useEffect(() => {
    const sections = navLinks
      .map((link) => document.querySelector(link.href))
      .filter((section): section is Element => Boolean(section));

    if (!sections.length) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSection = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visibleSection?.target.id) {
          setActiveHref(`#${visibleSection.target.id}`);
        }
      },
      {
        rootMargin: "-28% 0px -55% 0px",
        threshold: [0.12, 0.3, 0.55],
      },
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, [navLinks]);

  return (
    <nav aria-label={locale === "th" ? "เมนูหลัก" : "Main navigation"} className="hidden items-center gap-5 text-sm font-semibold xl:flex">
      {navLinks.map((link) => (
        <a
          key={link.href}
          className="nav-link"
          data-active={activeHref === link.href ? "true" : undefined}
          href={link.href}
          onClick={() => setActiveHref(link.href)}
        >
          {link.label}
        </a>
      ))}
    </nav>
  );
}
