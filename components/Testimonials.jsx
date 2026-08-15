"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { useLanguage, getLocalizedContent } from "@/hooks/useLanguage";
import content from "@/data/siteContent.json";

export default function Testimonials() {
  const { language } = useLanguage();
  const { testimonials } = content;

  return (
    <section className="bg-cream py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-2xl text-center">
          <p className="mb-4 text-[13px] font-medium uppercase tracking-widest2 text-saffron">
            {getLocalizedContent(testimonials.eyebrow, language)}
          </p>
          <h2 className="font-serif text-3xl leading-tight text-charcoal sm:text-4xl">
            {getLocalizedContent(testimonials.title, language)}
          </h2>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {testimonials.items.map((item, i) => (
            <motion.figure
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: (i % 4) * 0.1 }}
              className="flex flex-col justify-between rounded-sm border border-earth/15 bg-ivory p-7 transition-shadow duration-300 hover:shadow-lg"
            >
              <Quote className="mb-4 h-6 w-6 text-saffron/50" strokeWidth={1.5} />
              <blockquote className="grow text-[15px] italic leading-relaxed text-charcoal/85">
                “{getLocalizedContent(item.review, language)}”
              </blockquote>
              <figcaption className="mt-6 border-t border-earth/10 pt-4">
                <p className="text-sm font-medium text-charcoal">
                  {getLocalizedContent(item.name, language)}
                </p>
                <div className="mt-1.5 flex gap-0.5">
                  {Array.from({ length: item.rating }).map((_, idx) => (
                    <Star key={idx} size={13} className="fill-gold text-gold" />
                  ))}
                </div>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
