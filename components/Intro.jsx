"use client";

import { motion } from "framer-motion";
import { useLanguage, getLocalizedContent } from "@/hooks/useLanguage";
import content from "@/data/siteContent.json";

export default function Intro() {
  const { language } = useLanguage();
  const { intro } = content;

  return (
    <section className="bg-ivory py-24 sm:py-32">
      <div className="mx-auto max-w-4xl px-5 text-center sm:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="whitespace-pre-line font-serif text-3xl leading-tight text-charcoal sm:text-4xl md:text-5xl"
        >
          {getLocalizedContent(intro.statement, language)}
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.15 }}
          className="mx-auto mt-8 max-w-2xl text-base leading-relaxed text-earth sm:text-lg"
        >
          {getLocalizedContent(intro.body, language)}
        </motion.p>
      </div>
    </section>
  );
}
