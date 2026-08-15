import content from "@/data/siteContent.json";

export default function sitemap() {
  const siteUrl = content.seo.siteUrl?.startsWith("http")
    ? content.seo.siteUrl
    : "https://example.com";

  return [
    {
      url: siteUrl,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
  ];
}
