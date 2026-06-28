import type { Metadata } from "next";
import LandingPage from "../LandingPage";
import { siteConfig } from "../siteConfig";

const localeConfig = siteConfig.locales.en;

export const metadata: Metadata = {
  title: localeConfig.title,
  description: localeConfig.description,
  alternates: {
    canonical: localeConfig.path,
    languages: {
      en: siteConfig.locales.en.path,
      th: siteConfig.locales.th.path,
      "x-default": siteConfig.locales.en.path,
    },
  },
  openGraph: {
    title: localeConfig.title,
    description: localeConfig.description,
    url: localeConfig.path,
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.image,
        width: 1106,
        height: 1383,
        alt: "Coco Number SiX premium Thai organic aromatic coconut water bottle",
      },
    ],
    locale: localeConfig.locale,
    alternateLocale: [siteConfig.locales.th.locale],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: localeConfig.title,
    description: localeConfig.description,
    images: [siteConfig.image],
  },
};

export default function EnglishPage() {
  return <LandingPage locale="en" />;
}
