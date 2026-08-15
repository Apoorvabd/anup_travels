"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { MoonStar } from "lucide-react";
import { useLanguage, getLocalizedContent } from "@/hooks/useLanguage";
import content from "@/data/siteContent.json";

export default function Jyotish() {
  const { language } = useLanguage();
  const { jyotish, images } = content;

  return (
    <section id="jyotish" className="relative overflow-hidden bg-charcoal py-24 sm:py-32">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-14 px-5 sm:px-8 lg:grid-cols-2 lg:gap-20 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="flex flex-col justify-center"
        >
          <p className="mb-4 flex items-center gap-2 text-[13px] font-medium uppercase tracking-widest2 text-gold">
            <MoonStar size={16} strokeWidth={1.5} />
            {getLocalizedContent(jyotish.eyebrow, language)}
          </p>
          <h2 className="whitespace-pre-line font-serif text-3xl leading-tight text-ivory sm:text-4xl">
            {getLocalizedContent(jyotish.title, language)}
          </h2>
          <p className="mt-6 text-base leading-relaxed text-ivory/75">
            {getLocalizedContent(jyotish.body, language)}
          </p>

          <ul className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2">
            {jyotish.items.map((item, i) => (
              <li
                key={i}
                className="rounded-sm border border-ivory/12 px-4 py-3 text-sm text-ivory/85 transition-colors duration-300 hover:border-gold/40 hover:bg-ivory/5"
              >
                {getLocalizedContent(item, language)}
              </li>
            ))}
          </ul>

          <p className="mt-8 max-w-xl border-l-2 border-gold/40 pl-4 text-xs leading-relaxed text-ivory/55">
            {getLocalizedContent(jyotish.disclaimer, language)}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="relative aspect-[4/5] w-full overflow-hidden rounded-sm lg:aspect-auto"
        >
          <Image
            src={images.jyotish}
            alt={getLocalizedContent(jyotish.title, language)}
            fill
            sizes="(min-width: 1024px) 45vw, 100vw"
            className="object-cover"
          />
        </motion.div>
      </div>
    </section>
  );
}
