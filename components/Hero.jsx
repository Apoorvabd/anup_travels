"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Phone, Mail } from "lucide-react";
import { useLanguage, getLocalizedContent } from "@/hooks/useLanguage";
import content from "@/data/siteContent.json";

export default function Hero() {
  const { language } = useLanguage();
  const { hero, images, contact } = content;
  const title = getLocalizedContent(hero.title, language);
  const phone = contact.phone.value?.trim();
  const email = contact.email.value?.trim();
  const showPhone = phone && !phone.startsWith("TODO");
  const showEmail = email && !email.startsWith("TODO");

  return (
    <section
      id="home"
      className="relative flex min-h-[100svh] items-end overflow-hidden bg-charcoal sm:min-h-screen"
    >
      <div className="absolute inset-0">
        <Image
          src={images.hero}
          alt={getLocalizedContent(hero.eyebrow, language)}
          fill
          priority
          sizes="100vw"
          className="object-cover object-[80%_18%] sm:object-[70%_28%] lg:object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/50 to-charcoal/20" />
        <div className="absolute inset-0 bg-charcoal/10" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-7xl px-5 pb-14 pt-32 sm:px-8 sm:pb-28 sm:pt-40 lg:px-12 lg:pb-32">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-6 text-[15px] font-bold uppercase tracking-widest2 text-red-200 sm:text-[13px] sm:tracking-widest"
        >
          {getLocalizedContent(hero.eyebrow, language)}
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut", delay: 0.1 }}
          className="max-w-3xl whitespace-pre-line font-serif text-4xl leading-[1.15] text-ivory sm:text-5xl md:text-6xl lg:text-[4rem]"
        >
          {title}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut", delay: 0.25 }}
          className="mt-6 max-w-xl text-base leading-relaxed text-ivory/80 sm:text-lg"
        >
          {getLocalizedContent(hero.description, language)}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut", delay: 0.4 }}
          className="mt-10 flex flex-wrap items-center gap-4"
        >
          <a
            href="#contact"
            className="rounded-full bg-ivory px-7 py-3.5 text-[13px] font-medium uppercase tracking-widest2 text-charcoal transition-transform duration-300 hover:-translate-y-0.5 hover:shadow-lg"
          >
            {getLocalizedContent(hero.primaryCta, language)}
          </a>
          <a
            href="#services"
            className="rounded-full border border-ivory/50 px-7 py-3.5 text-[13px] font-medium uppercase tracking-widest2 text-ivory transition-colors duration-300 hover:bg-ivory/10"
          >
            {getLocalizedContent(hero.secondaryCta, language)}
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="mt-10 flex flex-col gap-4 border-t border-ivory/15 pt-6 sm:mt-14 sm:flex-row sm:items-center sm:gap-8"
        >
          <p className="text-xs font-medium uppercase tracking-widest2 text-ivory/50">
            {getLocalizedContent(hero.trustLine, language)}
          </p>

          {(showPhone || showEmail) && (
            <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
              {showPhone && (
                <a
                  href={`tel:${phone.replace(/\s+/g, "")}`}
                  className="flex items-center gap-2 text-sm text-ivory/80 transition-colors duration-300 hover:text-ivory"
                >
                  <Phone size={14} strokeWidth={1.5} className="text-gold" />
                  {phone}
                </a>
              )}
              {showEmail && (
                <a
                  href={`mailto:${email}`}
                  className="flex items-center gap-2 text-sm text-ivory/80 transition-colors duration-300 hover:text-ivory"
                >
                  <Mail size={14} strokeWidth={1.5} className="text-gold" />
                  {email}
                </a>
              )}
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
}
