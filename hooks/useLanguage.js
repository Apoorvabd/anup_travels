"use client";

import { createContext, useContext, useEffect, useMemo, useState } from "react";

const LanguageContext = createContext(null);

const STORAGE_KEY = "site-language";

export function LanguageProvider({ children }) {
  // Hindi is always the language used for the very first server-rendered
  // HTML (see app/layout.jsx `lang="hi"`); this only ever changes after
  // hydration, from a real user click or a previously stored preference.
  const [language, setLanguage] = useState("hi");

  useEffect(() => {
    // localStorage isn't available during SSR, so the stored preference can
    // only be read post-mount — this one-time sync is the standard pattern
    // for restoring a client-only value after hydration.
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (stored === "en" || stored === "hi") {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setLanguage(stored);
    }
  }, []);

  useEffect(() => {
    window.localStorage.setItem(STORAGE_KEY, language);
    document.documentElement.setAttribute("lang", language);
  }, [language]);

  const toggleLanguage = () =>
    setLanguage((prev) => (prev === "hi" ? "en" : "hi"));

  const value = useMemo(
    () => ({ language, setLanguage, toggleLanguage }),
    [language]
  );

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return ctx;
}

/**
 * Resolve a bilingual field like { hi: "...", en: "..." } to the
 * current language's string. Falls back gracefully if a language
 * key is missing.
 */
export function getLocalizedContent(field, language) {
  if (field == null) return "";
  if (typeof field === "string") return field;
  return field[language] ?? field.hi ?? field.en ?? "";
}
