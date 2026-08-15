"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { useLanguage, getLocalizedContent } from "@/hooks/useLanguage";
import content from "@/data/siteContent.json";

export default function Services() {
  const { language } = useLanguage();
  const { services } = content;

  return (
    <section id="services" className="bg-ivory py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-2xl text-center">
          <p className="mb-4 text-[13px] font-medium uppercase tracking-widest2 text-saffron">
            {getLocalizedContent(services.eyebrow, language)}
          </p>
          <h2 className="font-serif text-3xl leading-tight text-charcoal sm:text-4xl">
            {getLocalizedContent(services.title, language)}
          </h2>
          <p className="mt-5 text-base leading-relaxed text-earth">
            {getLocalizedContent(services.description, language)}
          </p>
        </div>

        <div className="mx-auto mt-16 grid max-w-5xl grid-cols-1 border-t border-earth/15 sm:grid-cols-2">
          {services.items.map((item, i) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, ease: "easeOut", delay: (i % 6) * 0.05 }}
              className="group flex items-baseline justify-between gap-4 border-b border-earth/15 py-5 px-1 transition-colors duration-300 hover:bg-cream sm:odd:border-r sm:odd:pr-6 sm:even:pl-6"
            >
              <span className="flex items-baseline gap-3">
                <span className="font-devanagari-serif text-xs text-saffron/70">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="font-serif text-lg text-charcoal sm:text-xl">
                  {getLocalizedContent(item, language)}
                </h3>
              </span>

              {item.available ? (
                <ArrowUpRight
                  size={16}
                  strokeWidth={1.5}
                  className="shrink-0 text-saffron/60 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              ) : (
                <span className="shrink-0 text-[11px] uppercase tracking-widest2 text-earth/50">
                  {language === "hi" ? "संपर्क करें" : "Contact"}
                </span>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
