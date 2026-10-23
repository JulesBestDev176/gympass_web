"use client";

import { useEffect } from "react";

/** Start the scan demonstrations when visible; pause outside the viewport. */
export function MotionLifecycle() {
  useEffect(() => {
    const regions = Array.from(document.querySelectorAll<HTMLElement>("[data-motion-region]"));
    const visible = new Set<Element>();
    const update = () => regions.forEach(region => {
      const active = visible.has(region) && !document.hidden;
      if (active) region.dataset.motionSeen = "true";
      region.dataset.motionActive = String(active);
    });
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) visible.add(entry.target);
        else visible.delete(entry.target);
      });
      update();
    }, { threshold: 0.15 });
    regions.forEach(region => observer.observe(region));
    document.addEventListener("visibilitychange", update);
    return () => {
      observer.disconnect();
      document.removeEventListener("visibilitychange", update);
      regions.forEach(region => {
        delete region.dataset.motionActive;
        delete region.dataset.motionSeen;
      });
    };
  }, []);
  return null;
}
