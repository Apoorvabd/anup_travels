"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { useLanguage, getLocalizedContent } from "@/hooks/useLanguage";
import content from "@/data/siteContent.json";

export default function Rituals() {
  const { language } = useLanguage();
  const { rituals } = content;

  return (
    <section id="rituals" className="bg-cream py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-2xl text-center">
          <p className="mb-4 text-[13px] font-medium uppercase tracking-widest2 text-saffron">
            {getLocalizedContent(rituals.eyebrow, language)}
          </p>
          <h2 className="font-serif text-3xl leading-tight text-charcoal sm:text-4xl">
            {getLocalizedContent(rituals.title, language)}
          </h2>
          <p className="mt-5 text-base leading-relaxed text-earth">
            {getLocalizedContent(rituals.description, language)}
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {rituals.items.map((item, i) => {
            const isLarge = i === 0 || i === 3;
            return (
              <motion.a
                key={item.id}
                href="#contact"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.7, ease: "easeOut", delay: (i % 3) * 0.1 }}
                className={`group relative block overflow-hidden rounded-md ${
                  isLarge ? "sm:col-span-2" : ""
                }`}
              >
                <div className={`relative overflow-hidden ${isLarge ? "aspect-[16/10]" : "aspect-[4/5]"}`}>
                  <Image
                    src={item.image}
                    alt={getLocalizedContent(item, language).title}
                    fill
                    sizes={isLarge ? "(min-width: 640px) 66vw, 100vw" : "(min-width: 640px) 33vw, 100vw"}
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/85 via-charcoal/10 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-6 sm:p-7">
                  <h3 className="font-serif text-xl text-ivory sm:text-2xl">
                    {getLocalizedContent(item, language).title}
                  </h3>
                  <p className="mt-2 max-w-md text-sm leading-relaxed text-ivory/80">
                    {getLocalizedContent(item, language).description}
                  </p>
                  <span className="mt-4 inline-flex items-center gap-1.5 text-xs font-medium uppercase tracking-widest2 text-gold">
                    {getLocalizedContent(item.cta, language)}
                    <ArrowUpRight
                      size={14}
                      className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    />
                  </span>
                </div>
              </motion.a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
