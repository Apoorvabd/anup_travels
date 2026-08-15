"use client";

import { motion } from "framer-motion";
import { useLanguage, getLocalizedContent } from "@/hooks/useLanguage";
import content from "@/data/siteContent.json";

export default function Process() {
  const { language } = useLanguage();
  const { process } = content;

  return (
    <section id="process" className="bg-ivory py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-2xl text-center">
          <p className="mb-4 text-[13px] font-medium uppercase tracking-widest2 text-saffron">
            {getLocalizedContent(process.eyebrow, language)}
          </p>
          <h2 className="font-serif text-3xl leading-tight text-charcoal sm:text-4xl">
            {getLocalizedContent(process.title, language)}
          </h2>
        </div>

        <div className="relative mt-16 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          <div className="pointer-events-none absolute left-0 right-0 top-6 hidden h-px bg-earth/20 lg:block" />
          {process.steps.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: i * 0.12 }}
              className="relative flex flex-col items-start"
            >
              <span className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full border border-saffron/40 bg-ivory font-devanagari-serif text-lg text-saffron">
                {step.number}
              </span>
              <p className="mt-5 max-w-[16rem] text-base font-medium leading-snug text-charcoal">
                {getLocalizedContent(step, language)}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
