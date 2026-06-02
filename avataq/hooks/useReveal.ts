"use client";
import { useEffect } from "react";

export function useReveal(enabled: boolean, dep?: unknown) {
  useEffect(() => {
    const els = Array.from(document.querySelectorAll<HTMLElement>(".reveal"));
    if (!enabled) {
      els.forEach((e) => e.classList.add("in"));
      return;
    }
    const check = () => {
      const vh = window.innerHeight;
      els.forEach((e) => {
        if (e.classList.contains("in")) return;
        const r = e.getBoundingClientRect();
        if (r.top < vh * 0.92 && r.bottom > 0) e.classList.add("in");
      });
    };
    const raf = requestAnimationFrame(check);
    window.addEventListener("scroll", check, { passive: true });
    window.addEventListener("resize", check);
    const ft = setTimeout(() => els.forEach((e) => e.classList.add("in")), 1500);
    return () => {
      cancelAnimationFrame(raf);
      clearTimeout(ft);
      window.removeEventListener("scroll", check);
      window.removeEventListener("resize", check);
    };
  }, [enabled, dep]);
}
