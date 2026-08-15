"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useLanguage, getLocalizedContent } from "@/hooks/useLanguage";
import content from "@/data/siteContent.json";

export default function About() {
  const { language } = useLanguage();
  const { about, images } = content;

  return (
    <section id="about" className="bg-cream py-24 sm:py-32">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-14 px-5 sm:px-8 lg:grid-cols-2 lg:gap-20 lg:px-12">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="relative order-2 lg:order-1"
        >
          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-sm">
            <Image
              src={images.about}
              alt={getLocalizedContent(about.title, language)}
              fill
              sizes="(min-width: 1024px) 45vw, 100vw"
              className="object-cover transition-transform duration-700 hover:scale-105"
            />
          </div>
          <div className="absolute -bottom-8 -right-4 hidden w-48 rounded-sm border border-earth/15 bg-ivory px-6 py-5 shadow-xl sm:right-8 sm:block">
            <p className="font-devanagari-serif text-3xl text-saffron">
              {about.stats[0].value}
            </p>
            <p className="mt-1 text-xs uppercase tracking-widest2 text-earth">
              {getLocalizedContent(about.stats[0], language)}
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.9, ease: "easeOut", delay: 0.1 }}
          className="order-1 flex flex-col justify-center lg:order-2"
        >
          <p className="mb-4 text-[13px] font-medium uppercase tracking-widest2 text-saffron">
            {getLocalizedContent(about.eyebrow, language)}
          </p>
          <h2 className="whitespace-pre-line font-serif text-3xl leading-tight text-charcoal sm:text-4xl">
            {getLocalizedContent(about.title, language)}
          </h2>
          <p className="mt-6 text-base leading-relaxed text-earth">
            {getLocalizedContent(about.body, language)}
          </p>

          <ul className="mt-8 flex flex-col gap-4">
            {about.points.map((point, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-saffron" />
                <span className="text-[15px] leading-relaxed text-charcoal/85">
                  {getLocalizedContent(point, language)}
                </span>
              </li>
            ))}
          </ul>

          <p className="mt-8 border-l-2 border-saffron/40 pl-4 text-sm italic leading-relaxed text-earth/80">
            {getLocalizedContent(about.credentialsNote, language)}
          </p>

          <div className="mt-10 grid grid-cols-3 gap-6 border-t border-earth/15 pt-8">
            {about.stats.map((stat, i) => (
              <div key={i}>
                <p className="font-devanagari-serif text-2xl text-charcoal sm:text-3xl">
                  {stat.value}
                </p>
                <p className="mt-1 text-[11px] uppercase leading-snug tracking-widest2 text-earth sm:text-xs">
                  {getLocalizedContent(stat, language)}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
