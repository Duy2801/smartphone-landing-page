"use client";

import { useCallback, useEffect, useState } from "react";

export type Theme = "light" | "dark";

const STORAGE_KEY = "astra-theme";

function getPreferredTheme(): Theme {
  const savedTheme = window.localStorage.getItem(STORAGE_KEY);

  if (savedTheme === "light" || savedTheme === "dark") return savedTheme;

  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
}

export function useTheme() {
  const [theme, setThemeState] = useState<Theme | null>(null);

  useEffect(() => {
    const frame = window.requestAnimationFrame(() => {
      setThemeState(getPreferredTheme());
    });

    return () => window.cancelAnimationFrame(frame);
  }, []);

  const setTheme = useCallback((nextTheme: Theme) => {
    document.documentElement.dataset.theme = nextTheme;
    document.documentElement.style.colorScheme = nextTheme;
    window.localStorage.setItem(STORAGE_KEY, nextTheme);
    setThemeState(nextTheme);
  }, []);

  const toggleTheme = useCallback(() => {
    const currentTheme =
      theme ??
      (document.documentElement.dataset.theme === "dark" ? "dark" : "light");
    setTheme(currentTheme === "dark" ? "light" : "dark");
  }, [setTheme, theme]);

  return { theme, toggleTheme };
}
