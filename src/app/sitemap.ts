import type { MetadataRoute } from "next";
import { siteConfig } from "./siteConfig";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return [
    {
      url: `${siteConfig.url}${siteConfig.locales.en.path}`,
      lastModified,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${siteConfig.url}${siteConfig.locales.th.path}`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.9,
    },
  ];
}
