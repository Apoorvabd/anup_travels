"use client";

import { motion } from "framer-motion";
import { useLanguage, getLocalizedContent } from "@/hooks/useLanguage";
import content from "@/data/siteContent.json";

export default function ContactCta() {
  const { language } = useLanguage();
  const { contactCta, contact } = content;

  return (
    <section className="bg-charcoal py-24 sm:py-28">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="mx-auto flex max-w-3xl flex-col items-center px-5 text-center sm:px-8"
      >
        <h2 className="whitespace-pre-line font-serif text-3xl leading-tight text-ivory sm:text-4xl md:text-5xl">
          {getLocalizedContent(contactCta.title, language)}
        </h2>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <a
            href="#contact"
            className="rounded-full bg-ivory px-8 py-3.5 text-[13px] font-medium uppercase tracking-widest2 text-charcoal transition-transform duration-300 hover:-translate-y-0.5 hover:shadow-lg"
          >
            {getLocalizedContent(contactCta.primaryCta, language)}
          </a>
          <a
            href={contact.whatsapp.value}
            className="rounded-full border border-ivory/50 px-8 py-3.5 text-[13px] font-medium uppercase tracking-widest2 text-ivory transition-colors duration-300 hover:bg-ivory/10"
          >
            {getLocalizedContent(contactCta.secondaryCta, language)}
          </a>
        </div>
      </motion.div>
    </section>
  );
}
