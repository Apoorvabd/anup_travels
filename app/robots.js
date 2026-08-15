import content from "@/data/siteContent.json";

export default function robots() {
  const siteUrl = content.seo.siteUrl?.startsWith("http")
    ? content.seo.siteUrl
    : "https://example.com";

  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${siteUrl}/sitemap.xml`,
  };
}
