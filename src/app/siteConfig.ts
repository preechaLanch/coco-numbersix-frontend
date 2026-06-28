export const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL ?? "https://coconumbersix.com").replace(/\/$/, "");

export const siteConfig = {
  name: "Coco Number SiX",
  companyName: "PYP World Green Co., Ltd.",
  url: siteUrl,
  title: "Coco Number SiX | Premium Thai Organic Aromatic Coconut Water",
  description:
    "Coco Number SiX is premium Thai organic aromatic coconut water made from selected Nam Hom coconuts for hospitality, retail, airlines, and export partners.",
  keywords: [
    "Coco Number SiX",
    "Thai organic coconut water",
    "aromatic coconut water",
    "Nam Hom coconut water",
    "premium coconut water Thailand",
    "organic coconut water export",
    "coconut water for hotels",
    "coconut water for airlines",
  ],
  image: "/images/product-full-water.jpg",
  locales: {
    en: {
      path: "/en",
      title: "Coco Number SiX | Premium Thai Organic Aromatic Coconut Water",
      description:
        "Premium Thai organic aromatic coconut water made from selected Nam Hom coconuts for hospitality, retail, airlines, and export partners.",
      locale: "en_US",
    },
    th: {
      path: "/th",
      title: "Coco Number SiX | น้ำมะพร้าวน้ำหอมออร์แกนิกพรีเมียมจากไทย",
      description:
        "Coco Number SiX น้ำมะพร้าวน้ำหอมออร์แกนิกพรีเมียมจากไทย สำหรับโรงแรม สายการบิน รีเทล งานอีเวนต์ และพาร์ทเนอร์ส่งออก",
      locale: "th_TH",
    },
  },
};
