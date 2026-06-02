"use client";
import { useSyncExternalStore, useEffect } from "react";

type Theme = "dark" | "light";

// Module-level store — lives outside React, so updating it is never "setState inside effect"
let _theme: Theme = "dark";
const _listeners = new Set<() => void>();

function notify() {
  _listeners.forEach((cb) => cb());
}

export function setTheme(t: Theme) {
  _theme = t;
  if (typeof document !== "undefined") {
    document.documentElement.dataset.theme = t;
    try { localStorage.setItem("aq-theme", t); } catch { /* ignore */ }
  }
  notify();
}

function subscribe(cb: () => void) {
  _listeners.add(cb);
  return () => _listeners.delete(cb);
}

export function useTheme(): [Theme, (t: Theme) => void] {
  const theme = useSyncExternalStore(
    subscribe,
    () => _theme,
    () => "dark" as Theme,
  );

  // Read localStorage once on mount. setTheme() updates the module store and notifies
  // useSyncExternalStore — no React setState is called inside this effect.
  useEffect(() => {
    try {
      const stored = localStorage.getItem("aq-theme") as Theme | null;
      if (stored === "light" || stored === "dark") setTheme(stored);
    } catch { /* ignore */ }

    const onStorage = (e: StorageEvent) => {
      if (e.key === "aq-theme" && (e.newValue === "dark" || e.newValue === "light")) {
        setTheme(e.newValue);
      }
    };
    window.addEventListener("storage", onStorage);
    return () => window.removeEventListener("storage", onStorage);
  }, []);

  return [theme, setTheme];
}
