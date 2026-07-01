"use client";

import { useEffect, useRef } from "react";
import { useScrollProgress } from "@/hooks/useScrollProgress";
import { trackEvent } from "@/lib/analytics";

export function BehaviorTracker() {
  const progress = useScrollProgress();
  const trackedHalf = useRef(false);

  useEffect(() => {
    if (progress >= 0.5 && !trackedHalf.current) {
      trackedHalf.current = true;
      trackEvent("scroll_50", { progress: 50 });
    }
  }, [progress]);

  useEffect(() => {
    const specifications = document.querySelector("#specifications");
    if (!specifications) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          trackEvent("spec_view");
          observer.disconnect();
        }
      },
      { threshold: 0.35 },
    );

    observer.observe(specifications);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      const target = (event.target as HTMLElement).closest<HTMLElement>(
        "[data-analytics]",
      );
      if (target?.dataset.analytics === "hero_cta_click") {
        trackEvent("hero_cta_click", {
          label: target.dataset.analyticsLabel ?? "unknown",
        });
      }
    };

    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, []);

  return null;
}
