import { Cormorant_Garamond, Inter, Noto_Sans_Devanagari, Noto_Serif_Devanagari } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/hooks/useLanguage";
import content from "@/data/siteContent.json";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-serif",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-sans",
  display: "swap",
});

const notoSansDevanagari = Noto_Sans_Devanagari({
  subsets: ["devanagari"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-devanagari",
  display: "swap",
});

const notoSerifDevanagari = Noto_Serif_Devanagari({
  subsets: ["devanagari"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-devanagari-serif",
  display: "swap",
});

const { seo, brand, contact } = content;
const siteUrl = seo.siteUrl?.startsWith("http") ? seo.siteUrl : "https://example.com";

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: seo.hi.title,
    template: `%s | ${brand.name.hi}`,
  },
  description: seo.hi.description,
  keywords: [...seo.hi.keywords, ...seo.en.keywords],
  alternates: {
    canonical: "/",
    languages: {
      hi: "/",
      en: "/",
    },
  },
  openGraph: {
    title: seo.hi.title,
    description: seo.hi.description,
    url: siteUrl,
    siteName: brand.name.hi,
    locale: "hi_IN",
    alternateLocale: "en_IN",
    type: "website",
    images: [
      {
        url: content.images.hero,
        width: 1200,
        height: 630,
        alt: seo.hi.title,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: seo.hi.title,
    description: seo.hi.description,
    images: [content.images.hero],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
    },
  },
  icons: {
    icon: "/favicon.svg",
  },
};

function LocalBusinessJsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: brand.name.en,
    alternateName: brand.name.hi,
    description: seo.en.description,
    url: siteUrl,
    image: `${siteUrl}${content.images.hero}`,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Akbarpur",
      addressRegion: "Kanpur Dehat, Uttar Pradesh",
      addressCountry: "IN",
    },
    areaServed: {
      "@type": "City",
      name: "Kanpur Dehat, Uttar Pradesh",
    },
    priceRange: "TODO: Replace with actual pricing information.",
  };

  // Contact details are only added to structured data once the real
  // values are known — placeholder TODOs would otherwise invalidate
  // the markup for search engines.
  if (!contact.phone.value?.startsWith("TODO")) {
    jsonLd.telephone = contact.phone.value;
  }
  if (!contact.email.value?.startsWith("TODO")) {
    jsonLd.email = contact.email.value;
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

export default function RootLayout({ children }) {
  return (
    <html
      lang="hi"
      className={`${cormorant.variable} ${inter.variable} ${notoSansDevanagari.variable} ${notoSerifDevanagari.variable}`}
    >
      <head>
        <LocalBusinessJsonLd />
      </head>
      <body className="font-sans antialiased">
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
