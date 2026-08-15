"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { useLanguage, getLocalizedContent } from "@/hooks/useLanguage";
import content from "@/data/siteContent.json";
import LanguageSwitcher from "@/components/LanguageSwitcher";

export default function Navbar() {
  const { language } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const { brand, navigation } = content;
  const isDark = !scrolled && !menuOpen;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled || menuOpen
          ? "bg-ivory/95 backdrop-blur-md shadow-[0_1px_0_0_rgba(28,26,23,0.08)]"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-5 sm:px-8 lg:px-12">
        <a
          href="#home"
          className={`max-w-[55vw] truncate font-serif text-xl tracking-wide transition-colors duration-500 sm:text-2xl ${
            isDark ? "text-ivory" : "text-charcoal"
          }`}
        >
          {getLocalizedContent(brand.name, language)}
        </a>

        <ul className="hidden items-center gap-8 lg:flex">
          {navigation.links.map((link) => (
            <li key={link.id}>
              <a
                href={link.href}
                className={`link-underline text-[13px] font-medium uppercase tracking-widest2 transition-colors duration-500 ${
                  isDark
                    ? "text-ivory/85 hover:text-ivory"
                    : "text-charcoal/75 hover:text-charcoal"
                }`}
              >
                {getLocalizedContent(link, language)}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-6 lg:flex">
          <LanguageSwitcher dark={isDark} />
          <a
            href="#contact"
            className={`rounded-full border px-5 py-2.5 text-[13px] font-medium uppercase tracking-widest2 transition-all duration-300 ${
              isDark
                ? "border-ivory/60 text-ivory hover:bg-ivory hover:text-charcoal"
                : "border-charcoal text-charcoal hover:bg-charcoal hover:text-ivory"
            }`}
          >
            {getLocalizedContent(navigation.cta, language)}
          </a>
        </div>

        <button
          type="button"
          className={`lg:hidden ${isDark ? "text-ivory" : "text-charcoal"}`}
          onClick={() => setMenuOpen((v) => !v)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </nav>

      <div
        className={`grid overflow-hidden transition-all duration-500 ease-in-out lg:hidden ${
          menuOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="min-h-0 border-t border-charcoal/10 bg-ivory px-6 py-8">
          <ul className="flex flex-col gap-5">
            {navigation.links.map((link) => (
              <li key={link.id}>
                <a
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="block text-lg font-medium text-charcoal/85 hover:text-charcoal"
                >
                  {getLocalizedContent(link, language)}
                </a>
              </li>
            ))}
          </ul>
          <div className="mt-8 flex items-center justify-between border-t border-charcoal/10 pt-6">
            <LanguageSwitcher />
          </div>
          <a
            href="#contact"
            onClick={() => setMenuOpen(false)}
            className="mt-6 block rounded-full bg-charcoal px-5 py-3 text-center text-[13px] font-medium uppercase tracking-widest2 text-ivory"
          >
            {getLocalizedContent(navigation.cta, language)}
          </a>
        </div>
      </div>
    </header>
  );
}
