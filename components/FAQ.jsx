"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";
import { useLanguage, getLocalizedContent } from "@/hooks/useLanguage";
import content from "@/data/siteContent.json";

export default function FAQ() {
  const { language } = useLanguage();
  const { faq } = content;
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id="faq" className="bg-ivory py-24 sm:py-32">
      <div className="mx-auto max-w-3xl px-5 sm:px-8">
        <div className="text-center">
          <p className="mb-4 text-[13px] font-medium uppercase tracking-widest2 text-saffron">
            {getLocalizedContent(faq.eyebrow, language)}
          </p>
          <h2 className="font-serif text-3xl leading-tight text-charcoal sm:text-4xl">
            {getLocalizedContent(faq.title, language)}
          </h2>
        </div>

        <div className="mt-14 divide-y divide-earth/15 border-y border-earth/15">
          {faq.items.map((item, i) => {
            const qa = getLocalizedContent(item, language);
            const isOpen = openIndex === i;
            return (
              <div key={i}>
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? -1 : i)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-6 py-6 text-left"
                >
                  <span className="text-base font-medium text-charcoal sm:text-lg">
                    {qa.q}
                  </span>
                  <Plus
                    size={20}
                    className={`shrink-0 text-saffron transition-transform duration-300 ${
                      isOpen ? "rotate-45" : ""
                    }`}
                  />
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <p className="pb-6 pr-10 text-[15px] leading-relaxed text-earth">
                        {qa.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
