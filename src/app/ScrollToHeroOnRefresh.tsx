"use client";

import { useEffect } from "react";

const languageScrollStorageKey = "coco-number-six-language-scroll";

export default function ScrollToHeroOnRefresh() {
  useEffect(() => {
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }

    const languageSwitchScroll = sessionStorage.getItem(languageScrollStorageKey);

    if (languageSwitchScroll) {
      return;
    }

    const navigationEntry = performance.getEntriesByType("navigation")[0] as
      | PerformanceNavigationTiming
      | undefined;

    if (navigationEntry?.type !== "reload") {
      return;
    }

    const scrollToTop = () => window.scrollTo({ top: 0, left: 0, behavior: "auto" });

    scrollToTop();
    requestAnimationFrame(scrollToTop);
    window.setTimeout(scrollToTop, 180);
  }, []);

  return null;
}
