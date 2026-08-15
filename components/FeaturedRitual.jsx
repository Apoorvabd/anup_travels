"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useLanguage, getLocalizedContent } from "@/hooks/useLanguage";
import content from "@/data/siteContent.json";

export default function FeaturedRitual() {
  const { language } = useLanguage();
  const { featured } = content;

  return (
    <section className="bg-charcoal">
      <div className="mx-auto grid max-w-7xl grid-cols-1 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1 }}
          className="relative aspect-[4/3] w-full overflow-hidden lg:aspect-auto"
        >
          <Image
            src={featured.image}
            alt={getLocalizedContent(featured.title, language)}
            fill
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="flex flex-col justify-center px-6 py-16 sm:px-12 lg:px-16 lg:py-0"
        >
          <p className="mb-4 text-[13px] font-medium uppercase tracking-widest2 text-gold">
            {getLocalizedContent(featured.eyebrow, language)}
          </p>
          <h2 className="whitespace-pre-line font-serif text-3xl leading-tight text-ivory sm:text-4xl">
            {getLocalizedContent(featured.title, language)}
          </h2>
          <p className="mt-6 max-w-md text-base leading-relaxed text-ivory/75">
            {getLocalizedContent(featured.body, language)}
          </p>
          <a
            href="#rituals"
            className="group mt-8 inline-flex w-fit items-center gap-2 text-sm font-medium uppercase tracking-widest2 text-ivory"
          >
            <span className="link-underline">{getLocalizedContent(featured.cta, language)}</span>
            <ArrowRight
              size={16}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
