"use client";

import { useEffect, useState } from "react";

export default function ShrinkingHeader({ children }: { children: React.ReactNode }) {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const updateScrolled = () => setIsScrolled(window.scrollY > 24);

    updateScrolled();
    window.addEventListener("scroll", updateScrolled, { passive: true });

    return () => window.removeEventListener("scroll", updateScrolled);
  }, []);

  return (
    <header
      className="group fixed inset-x-0 top-0 z-50 border-b border-[#d9d3c4] bg-[#fbf8f0]/94 shadow-[0_10px_30px_rgba(7,55,22,0.05)] backdrop-blur-xl transition-all duration-300 data-[scrolled=true]:bg-[#fbf8f0]/98 data-[scrolled=true]:shadow-[0_12px_36px_rgba(7,55,22,0.1)]"
      data-scrolled={isScrolled}
    >
      {children}
    </header>
  );
}
