"use client";

import { FaWhatsapp } from "react-icons/fa";
import { useLanguage } from "@/hooks/useLanguage";
import content from "@/data/siteContent.json";

// Falls back to a wa.me link built from the phone number when a dedicated
// WhatsApp link hasn't been supplied yet in siteContent.json.
function resolveWhatsAppHref(contact) {
  const { whatsapp, phone } = contact;
  if (whatsapp.value && !whatsapp.value.startsWith("TODO")) {
    return whatsapp.value;
  }
  const digits = phone.value?.replace(/\D/g, "");
  if (digits) {
    const withCountryCode = digits.length === 10 ? `91${digits}` : digits;
    return `https://wa.me/${withCountryCode}`;
  }
  return null;
}

export default function WhatsAppButton() {
  const { language } = useLanguage();
  const href = resolveWhatsAppHref(content.contact);

  if (!href) return null;

  const label = language === "hi" ? "व्हाट्सएप पर बात करें" : "Chat on WhatsApp";

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      title={label}
      className="group fixed bottom-6 right-5 z-[60] flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-charcoal/20 transition-transform duration-300 hover:scale-105 focus-visible:scale-105 sm:bottom-8 sm:right-8"
    >
      <span className="absolute inset-0 animate-ping rounded-full bg-[#25D366]/50 opacity-75 group-hover:opacity-0" />
      <FaWhatsapp size={28} className="relative" />
    </a>
  );
}
