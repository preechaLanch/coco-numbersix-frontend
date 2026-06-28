"use client";

import { useEffect, useState } from "react";

const navLinks = [
  { label: "Product", href: "#product" },
  { label: "Hospitality", href: "#hospitality" },
  { label: "Wings", href: "#wings" },
  { label: "Partners", href: "#partners" },
  { label: "Pricing", href: "#pricing" },
  { label: "Contact", href: "#contact" },
];

export default function ActiveNav() {
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
  }, []);

  return (
    <nav aria-label="Main navigation" className="hidden items-center gap-5 text-sm font-semibold xl:flex">
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
