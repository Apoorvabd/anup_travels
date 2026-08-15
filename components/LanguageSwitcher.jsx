"use client";

import { useLanguage } from "@/hooks/useLanguage";

export default function LanguageSwitcher({ className = "", dark = false }) {
  const { language, setLanguage } = useLanguage();

  const base = "transition-colors duration-300";
  const activeColor = dark ? "text-ivory" : "text-charcoal";
  const inactiveColor = dark
    ? "text-ivory/50 hover:text-ivory/80"
    : "text-charcoal/40 hover:text-charcoal/70";

  return (
    <div
      className={`flex items-center gap-2 text-sm font-medium ${className}`}
      role="group"
      aria-label="Language switcher"
    >
      <button
        type="button"
        onClick={() => setLanguage("hi")}
        aria-pressed={language === "hi"}
        className={`${base} font-devanagari ${
          language === "hi" ? activeColor : inactiveColor
        }`}
      >
        हिन्दी
      </button>
      <span className={dark ? "text-ivory/30" : "text-charcoal/25"}>|</span>
      <button
        type="button"
        onClick={() => setLanguage("en")}
        aria-pressed={language === "en"}
        className={`${base} ${language === "en" ? activeColor : inactiveColor}`}
      >
        English
      </button>
    </div>
  );
}
