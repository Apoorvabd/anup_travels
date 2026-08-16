"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, MessageCircle, Send, ArrowUpRight } from "lucide-react";
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";
import { useLanguage, getLocalizedContent } from "@/hooks/useLanguage";
import content from "@/data/siteContent.json";

const SOCIAL_ICONS = {
  facebook: FaFacebookF,
  instagram: FaInstagram,
  youtube: FaYoutube,
};

export default function ContactFooter() {
  const { language } = useLanguage();
  const { contact, footer, navigation, services, brand } = content;
  const [submitted, setSubmitted] = useState(false);

  // NOTE: Wire this up to the client's own EmailJS / backend service before
  // going live. Intentionally left as a no-op so private business
  // credentials are never hardcoded into a reusable template component.
  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    e.target.reset();
  };

  return (
    <>
      <section id="contact" className="bg-ivory py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
          <div className="mx-auto max-w-2xl text-center">
            <p className="mb-4 text-[13px] font-medium uppercase tracking-widest2 text-saffron">
              {getLocalizedContent(contact.eyebrow, language)}
            </p>
            <h2 className="font-serif text-3xl leading-tight text-charcoal sm:text-4xl">
              {getLocalizedContent(contact.title, language)}
            </h2>
            <p className="mt-5 text-base leading-relaxed text-earth">
              {getLocalizedContent(contact.description, language)}
            </p>
          </div>

          <div className="mt-16 grid grid-cols-1 gap-14 lg:grid-cols-2 lg:gap-20">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="flex flex-col gap-8"
            >
              <ContactRow icon={MapPin} label={getLocalizedContent(contact.address.label, language)}>
                {contact.mapUrl ? (
                  <a
                    href={contact.mapUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link-underline hover:text-saffron"
                  >
                    {getLocalizedContent(contact.address.value, language)}
                  </a>
                ) : (
                  getLocalizedContent(contact.address.value, language)
                )}
              </ContactRow>
              <ContactRow icon={Phone} label={getLocalizedContent(contact.phone.label, language)}>
                {contact.phone.value}
              </ContactRow>
              <ContactRow icon={Mail} label={getLocalizedContent(contact.email.label, language)}>
                {contact.email.value}
              </ContactRow>
              <ContactRow icon={MessageCircle} label={getLocalizedContent(contact.whatsapp.label, language)}>
                {contact.whatsapp.value}
              </ContactRow>

              {contact.mapEmbedUrl ? (
                <div className="mt-2 overflow-hidden rounded-sm border border-earth/20">
                  <div className="relative aspect-[4/3] w-full">
                    <iframe
                      src={contact.mapEmbedUrl}
                      title={getLocalizedContent(contact.mapNote, language)}
                      className="absolute inset-0 h-full w-full border-0"
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      allowFullScreen
                    />
                  </div>
                  {contact.mapUrl && (
                    <a
                      href={contact.mapUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center justify-between bg-cream px-4 py-3 text-xs font-medium uppercase tracking-widest2 text-saffron transition-colors duration-300 hover:bg-cream/70"
                    >
                      {language === "hi" ? "Google Maps में खोलें" : "Open in Google Maps"}
                      <ArrowUpRight
                        size={14}
                        className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                      />
                    </a>
                  )}
                </div>
              ) : (
                <div className="mt-2 flex aspect-[4/3] w-full items-center justify-center rounded-sm border border-earth/20 bg-cream">
                  <div className="flex flex-col items-center gap-2 text-center">
                    <MapPin className="h-6 w-6 text-saffron" strokeWidth={1.5} />
                    <p className="text-sm font-medium text-earth">
                      {getLocalizedContent(contact.mapNote, language)}
                    </p>
                  </div>
                </div>
              )}
            </motion.div>

            <motion.form
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              onSubmit={handleSubmit}
              className="flex flex-col gap-5 rounded-sm border border-earth/15 bg-cream p-7 sm:p-9"
            >
              <Field name="name" label={getLocalizedContent(contact.form.name, language)} required />
              <Field name="phone" type="tel" label={getLocalizedContent(contact.form.phone, language)} required />

              <label className="flex flex-col gap-1.5">
                <span className="text-xs font-medium uppercase tracking-widest2 text-earth">
                  {getLocalizedContent(contact.form.service, language)}
                </span>
                <select
                  name="service"
                  className="rounded-sm border border-earth/25 bg-ivory px-4 py-3 text-sm text-charcoal outline-none transition-colors focus:border-saffron"
                >
                  {services.items.map((item) => (
                    <option key={item.id} value={item.id}>
                      {getLocalizedContent(item, language)}
                    </option>
                  ))}
                </select>
              </label>

              <Field name="date" type="date" label={getLocalizedContent(contact.form.date, language)} />

              <label className="flex flex-col gap-1.5">
                <span className="text-xs font-medium uppercase tracking-widest2 text-earth">
                  {getLocalizedContent(contact.form.message, language)}
                </span>
                <textarea
                  name="message"
                  rows={4}
                  className="resize-none rounded-sm border border-earth/25 bg-ivory px-4 py-3 text-sm text-charcoal outline-none transition-colors focus:border-saffron"
                />
              </label>

              <button
                type="submit"
                className="mt-2 flex items-center justify-center gap-2 rounded-full bg-charcoal px-6 py-3.5 text-[13px] font-medium uppercase tracking-widest2 text-ivory transition-colors duration-300 hover:bg-saffron"
              >
                {getLocalizedContent(contact.form.submit, language)}
                <Send size={15} />
              </button>

              {submitted && (
                <p className="text-sm text-saffron" role="status">
                  {language === "hi"
                    ? "धन्यवाद, हम शीघ्र संपर्क करेंगे।"
                    : "Thank you, we will get back to you shortly."}
                </p>
              )}
            </motion.form>
          </div>
        </div>
      </section>

      <footer className="bg-neutral-950 pt-20 text-ivory/70">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4">
            <div>
              <h3 className="font-serif text-2xl text-ivory">
                {getLocalizedContent(brand.name, language)}
              </h3>
              <p className="mt-4 max-w-xs text-sm leading-relaxed text-ivory/55">
                {getLocalizedContent(footer.about, language)}
              </p>
            </div>

            <div>
              <h4 className="mb-5 text-xs font-medium uppercase tracking-widest2 text-ivory/50">
                {getLocalizedContent(footer.quickLinksTitle, language)}
              </h4>
              <ul className="flex flex-col gap-3">
                {navigation.links.map((link) => (
                  <li key={link.id}>
                    <a href={link.href} className="link-underline text-sm text-ivory/70 hover:text-ivory">
                      {getLocalizedContent(link, language)}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="mb-5 text-xs font-medium uppercase tracking-widest2 text-ivory/50">
                {getLocalizedContent(footer.servicesTitle, language)}
              </h4>
              <ul className="flex flex-col gap-3">
                {services.items.slice(0, 6).map((item) => (
                  <li key={item.id} className="text-sm text-ivory/70">
                    {getLocalizedContent(item, language)}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="mb-5 text-xs font-medium uppercase tracking-widest2 text-ivory/50">
                {getLocalizedContent(footer.contactTitle, language)}
              </h4>
              <ul className="flex flex-col gap-3 text-sm text-ivory/70">
                <li>{getLocalizedContent(brand.location, language)}</li>
                <li>{contact.phone.value}</li>
                <li>{contact.email.value}</li>
              </ul>

              <h4 className="mb-4 mt-7 text-xs font-medium uppercase tracking-widest2 text-ivory/50">
                {getLocalizedContent(footer.socialTitle, language)}
              </h4>
              <div className="flex gap-3">
                {footer.social.map((s) => {
                  const Icon = SOCIAL_ICONS[s.id];
                  return (
                    <a
                      key={s.id}
                      href={s.href}
                      aria-label={s.label}
                      className="flex h-9 w-9 items-center justify-center rounded-full border border-ivory/15 text-ivory/70 transition-colors duration-300 hover:border-gold hover:text-gold"
                    >
                      {Icon && <Icon size={14} />}
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          <div className="mt-16 flex flex-col items-center justify-between gap-3 border-t border-ivory/10 py-8 text-xs text-ivory/40 sm:flex-row">
            <p>
              © {new Date().getFullYear()} {getLocalizedContent(brand.name, language)} —{" "}
              {getLocalizedContent(footer.copyright, language)}
            </p>
            <p>{getLocalizedContent(brand.location, language)}</p>
          </div>
        </div>
      </footer>
    </>
  );
}

function ContactRow({ icon: Icon, label, children }) {
  return (
    <div className="flex items-start gap-4">
      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-saffron/30 text-saffron">
        <Icon size={17} strokeWidth={1.5} />
      </span>
      <div>
        <p className="text-xs font-medium uppercase tracking-widest2 text-earth">{label}</p>
        <p className="mt-1 text-[15px] text-charcoal/85">{children}</p>
      </div>
    </div>
  );
}

function Field({ name, label, type = "text", required = false }) {
  return (
    <label className="flex flex-col gap-1.5">
      <span className="text-xs font-medium uppercase tracking-widest2 text-earth">{label}</span>
      <input
        type={type}
        name={name}
        required={required}
        className="rounded-sm border border-earth/25 bg-ivory px-4 py-3 text-sm text-charcoal outline-none transition-colors focus:border-saffron"
      />
    </label>
  );
}
