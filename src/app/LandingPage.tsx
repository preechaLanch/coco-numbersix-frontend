import Image from "next/image";
import ActiveNav from "./ActiveNav";
import LanguageSwitcher from "./LanguageSwitcher";
import MobileMenu from "./MobileMenu";
import ScrollReveal from "./ScrollReveal";
import ScrollToHeroOnRefresh from "./ScrollToHeroOnRefresh";
import ShrinkingHeader from "./ShrinkingHeader";
import { siteConfig } from "./siteConfig";

type Locale = "en" | "th";

const partnerProofGroups = [
  {
    label: "Aviation & Airline Catering",
    gridClassName: "sm:grid-cols-2",
    logos: [
      {
        name: "Thai Airways",
        src: "/images/partners/thai-airways.jpg",
        className: "max-w-[240px]",
      },
      {
        name: "Thai Catering",
        src: "/images/partners/thai-catering.png",
        className: "max-w-[190px]",
      },
    ],
  },
  {
    label: "Hotels & Resorts",
    gridClassName: "sm:grid-cols-2 lg:grid-cols-5",
    logos: [
      {
        name: "Aman",
        src: "/images/partners/aman.png",
        className: "max-w-[160px]",
      },
      {
        name: "Four Seasons",
        src: "/images/partners/four-seasons.png",
        className: "max-w-[155px]",
      },
      {
        name: "Marriott Resort Pattaya",
        src: "/images/partners/marriott-resort-pattaya.jpg",
        className: "max-w-[150px]",
      },
      {
        name: "Veranda Resort Pattaya Na Jomtien",
        src: "/images/partners/veranda-resort.jpg",
        className: "max-w-[150px]",
      },
      {
        name: "Movenpick",
        src: "/images/partners/movenpick.jpg",
        className: "max-w-[220px]",
      },
    ],
  },
];

const galleryByLocale = {
  en: [
    {
      src: "/images/product-table-946ml.jpg",
      alt: "Coco Number Six 946 ml bottle styled with natural ingredients",
      title: "Table Service",
      copy: "A polished large-format presentation for hosted moments.",
    },
    {
      src: "/images/partner-presence-event.webp",
      alt: "PYP World Green team presenting Coco Number SiX at a hospitality event booth",
      title: "Partner Presence",
      copy: "Brand-ready for hospitality venues, travel activations, and premium events.",
    },
    {
      src: "/images/service-chilled-wide.jpg",
      alt: "Coco Number Six bottle served chilled from an ice chest",
      title: "Served Chilled",
      copy: "A simple refreshment ritual that feels immediate, generous, and useful.",
    },
  ],
  th: [
    {
      src: "/images/product-table-946ml.jpg",
      alt: "ขวด Coco Number SiX ขนาด 946 มล. จัดวางกับวัตถุดิบธรรมชาติ",
      title: "บริการบนโต๊ะ",
      copy: "ภาพลักษณ์ขวดขนาดใหญ่ที่เหมาะกับโต๊ะอาหาร งานรับรอง และช่วงเวลาพิเศษ",
    },
    {
      src: "/images/partner-presence-event.webp",
      alt: "ทีม PYP World Green นำเสนอ Coco Number SiX ในงานพาร์ทเนอร์",
      title: "พร้อมออกงานพาร์ทเนอร์",
      copy: "พร้อมสำหรับโรงแรม งานอีเวนต์ และกิจกรรมแบรนด์ระดับพรีเมียม",
    },
    {
      src: "/images/service-chilled-wide.jpg",
      alt: "ขวด Coco Number SiX เสิร์ฟเย็นจากถังน้ำแข็ง",
      title: "เสิร์ฟเย็นพร้อมดื่ม",
      copy: "ช่วงเวลาสดชื่นที่เรียบง่าย ดูดี และใช้งานได้จริงในงานบริการ",
    },
  ],
};

const productSizesByLocale = {
  en: [
    {
      size: "473 ml",
      title: "Single-serve refreshment",
      copy: "A refined bottle for travel, hotel rooms, meeting breaks, and premium daily wellness.",
    },
    {
      size: "946 ml",
      title: "Sharing and service size",
      copy: "A larger presentation for hospitality tables, hosted moments, and product storytelling.",
    },
  ],
  th: [
    {
      size: "473 ml",
      title: "ขนาดพร้อมเสิร์ฟรายบุคคล",
      copy: "ขวดพรีเมียมสำหรับการเดินทาง ห้องพักโรงแรม ช่วงพักประชุม และการดื่มเพื่อสุขภาพในทุกวัน",
    },
    {
      size: "946 ml",
      title: "ขนาดสำหรับแบ่งปันและงานบริการ",
      copy: "ขวดขนาดใหญ่สำหรับโต๊ะอาหาร งานรับรอง และการเล่าเรื่องแบรนด์ผ่านสินค้า",
    },
  ],
};

const partnerChannelsByLocale = {
  en: [
    {
      label: "Airlines",
      title: "A Thai welcome above the world",
      copy: "A refreshing beverage story for inflight service, lounge hospitality, and travelers discovering Thailand through taste.",
    },
    {
      label: "Hotels & Resorts",
      title: "A considered arrival moment",
      copy: "Serve Coco Number SiX as a minibar selection, welcome drink, spa refreshment, or poolside wellness option.",
    },
    {
      label: "Premium Retail & Wellness",
      title: "Clean hydration with shelf appeal",
      copy: "A product-led brand story for specialty retail, wellness spaces, gifting, and everyday premium refreshment.",
    },
  ],
  th: [
    {
      label: "สายการบิน",
      title: "การต้อนรับแบบไทยเหนือท้องฟ้า",
      copy: "เครื่องดื่มสดชื่นสำหรับบริการบนเครื่อง ห้องรับรอง และนักเดินทางที่สัมผัสประเทศไทยผ่านรสชาติ",
    },
    {
      label: "โรงแรมและรีสอร์ท",
      title: "ช่วงเวลาต้อนรับที่ใส่ใจ",
      copy: "เหมาะกับมินิบาร์ welcome drink สปา เครื่องดื่มริมสระ และบริการที่ต้องการความพรีเมียม",
    },
    {
      label: "รีเทลพรีเมียมและเวลเนส",
      title: "ความสดชื่นสะอาดที่วางขายได้อย่างโดดเด่น",
      copy: "เรื่องราวของสินค้าที่เหมาะกับรีเทลพิเศษ พื้นที่สุขภาพ ของฝาก และการดื่มสดชื่นในชีวิตประจำวัน",
    },
  ],
};

const productionProofsByLocale = {
  en: [
    { icon: "leaf", label: "100% Organic" },
    { icon: "snow", label: "Cold Chain Managed" },
    { icon: "shield", label: "Quality Controlled" },
    { icon: "heart", label: "Made for Hospitality" },
  ],
  th: [
    { icon: "leaf", label: "ออร์แกนิก 100%" },
    { icon: "snow", label: "ควบคุมระบบความเย็น" },
    { icon: "shield", label: "ควบคุมคุณภาพ" },
    { icon: "heart", label: "เหมาะกับงานบริการ" },
  ],
};

const catalogProductsByLocale = {
  en: [
    {
      badge: "Premium",
      image: "/images/product-946ml.jpg",
      volume: "946",
      pack: "12 bottles / case",
      price: "225",
      title: "Organic aromatic coconut water",
      subtitle: "Large-format hospitality selection",
      details: [
        "Frozen storage at -18°C · 18-month shelf life",
        "Ideal for premium lounges and VIP service",
        "Restaurant / Pool Bar / Event",
        "5-language label: TH / EN / AR / ZH / JA",
      ],
      bestFor: "Hotels · Airlines · Export",
    },
    {
      badge: "Best Seller",
      image: "/images/service-chilled-wide.jpg",
      volume: "473",
      pack: "24 bottles / case",
      price: "115",
      title: "Organic aromatic coconut water",
      subtitle: "Single-serve guest refreshment",
      details: [
        "Single-serve format · easy to chill and carry",
        "Ideal for events, meetings, and guest rooms",
        "Retail · Convenience Store",
        "5-language label: TH / EN / AR / ZH / JA",
      ],
      bestFor: "Retail · Event · Hotels",
    },
    {
      badge: "New Size",
      image: "/images/product-246ml.jpg",
      volume: "246",
      pack: "24 bottles / case",
      price: "69",
      title: "Organic aromatic coconut water",
      subtitle: "Compact service-ready bottle",
      details: [
        "Small single-serve size with less waste",
        "Ideal for mini bars and in-flight service",
        "Breakfast Buffet / Welcome Drink",
        "Lightweight format supports lower footprint",
      ],
      bestFor: "Airlines · Mini Bar · Breakfast",
    },
  ],
  th: [
    {
      badge: "พรีเมียม",
      image: "/images/product-946ml.jpg",
      volume: "946",
      pack: "12 ขวด / ลัง",
      price: "225",
      title: "น้ำมะพร้าวน้ำหอมออร์แกนิก",
      subtitle: "ขนาดใหญ่สำหรับงานบริการ",
      details: [
        "เก็บแช่แข็ง -18°C · อายุสินค้า 18 เดือน",
        "เหมาะสำหรับเลานจ์พรีเมียมและบริการ VIP",
        "ร้านอาหาร / พูลบาร์ / งานอีเวนต์",
        "ฉลาก 5 ภาษา: TH / EN / AR / ZH / JA",
      ],
      bestFor: "โรงแรม · สายการบิน · ส่งออก",
    },
    {
      badge: "ขายดี",
      image: "/images/service-chilled-wide.jpg",
      volume: "473",
      pack: "24 ขวด / ลัง",
      price: "115",
      title: "น้ำมะพร้าวน้ำหอมออร์แกนิก",
      subtitle: "ขนาดพร้อมเสิร์ฟสำหรับแขก",
      details: [
        "ขนาดดื่มคนเดียว · แช่เย็นง่าย พกพาสะดวก",
        "เหมาะสำหรับงานอีเวนต์ ห้องประชุม และห้องพัก",
        "รีเทล · ร้านสะดวกซื้อ",
        "ฉลาก 5 ภาษา: TH / EN / AR / ZH / JA",
      ],
      bestFor: "รีเทล · อีเวนต์ · โรงแรม",
    },
    {
      badge: "ขนาดใหม่",
      image: "/images/product-246ml.jpg",
      volume: "246",
      pack: "24 ขวด / ลัง",
      price: "69",
      title: "น้ำมะพร้าวน้ำหอมออร์แกนิก",
      subtitle: "ขนาดเล็กพร้อมใช้ในงานบริการ",
      details: [
        "ขนาดเล็กดื่มพอดี ลดการเหลือทิ้ง",
        "เหมาะสำหรับมินิบาร์และบริการบนเครื่อง",
        "บุฟเฟต์อาหารเช้า / Welcome Drink",
        "ขนาดเบา ช่วยลดภาระการขนส่ง",
      ],
      bestFor: "สายการบิน · มินิบาร์ · อาหารเช้า",
    },
  ],
};

const b2bCardsByLocale = {
  en: [
    {
      icon: "🏨",
      title: "Hotels / Resorts",
      copy: "Welcome Drink · Pool Bar · Restaurant · Spa Amenity · Mini Bar · Laser Brand Coconut",
      tag: "Volume-based discount",
    },
    {
      icon: "✈️",
      title: "Airlines",
      copy: "In-flight beverage · halal-friendly passenger service · co-branded airline labels available · 246 ml format fits well",
      tag: "Special contract pricing",
    },
    {
      icon: "🌍",
      title: "Export / International",
      copy: "English, Japanese, and Chinese labels ready · Halal + Organic Export Ready · FOB Bangkok",
      tag: "Negotiable FOB pricing",
    },
  ],
  th: [
    {
      icon: "🏨",
      title: "โรงแรม / รีสอร์ท",
      copy: "Welcome Drink · พูลบาร์ · ร้านอาหาร · สปา · มินิบาร์ · มะพร้าวเลเซอร์แบรนด์",
      tag: "ส่วนลดตามจำนวนสั่งซื้อ",
    },
    {
      icon: "✈️",
      title: "สายการบิน",
      copy: "เครื่องดื่มบนเครื่อง · รองรับผู้โดยสาร Halal · ทำฉลากร่วมกับสายการบินได้ · ขนาด 246 ml เหมาะกับงานบริการ",
      tag: "ราคาสัญญาพิเศษ",
    },
    {
      icon: "🌍",
      title: "ส่งออก / ต่างประเทศ",
      copy: "ฉลากอังกฤษ ญี่ปุ่น จีนพร้อมใช้งาน · มาตรฐาน Halal + Organic · พร้อมส่งออกแบบ FOB Bangkok",
      tag: "ราคา FOB ต่อรองได้",
    },
  ],
};

const b2bTiersByLocale = {
  en: [
    {
      package: "Starter",
      volume: "5-19 cases",
      discount: "Standard",
      service: "Free Bangkok delivery for 10+ cases",
    },
    {
      package: "Business",
      volume: "20-49 cases",
      discount: "8% off",
      service: "Account Manager",
    },
    {
      package: "Premium Partner",
      volume: "50+ cases",
      discount: "15% off",
      service: "Custom Label + Priority Delivery",
    },
  ],
  th: [
    {
      package: "เริ่มต้น",
      volume: "5-19 ลัง",
      discount: "ปกติ",
      service: "ส่งฟรี กทม. 10+ ลัง",
    },
    {
      package: "ธุรกิจ",
      volume: "20-49 ลัง",
      discount: "ลด 8%",
      service: "มี Account Manager ดูแล",
    },
    {
      package: "พาร์ทเนอร์พรีเมียม",
      volume: "50+ ลัง",
      discount: "ลด 15%",
      service: "ฉลากพิเศษ + จัดส่งแบบ Priority",
    },
  ],
};

const pricingCopy = {
  en: {
    productsTitle: "Our products",
    productsIntro:
      "Choose the format that fits each service moment: retail, events, hotels, airlines, and export-ready supply.",
    priceLabel: "Price / bottle",
    b2bTitle: "B2B packages for business",
    b2bIntro: "Special pricing for corporate customers · case orders · delivery support · account manager service",
    volumeLabel: "Volume / month",
    discountLabel: "Discount",
    serviceLabel: "Special service",
    customTitle: "Flexible purchase terms for your business",
    customCopy:
      "Our team can help calculate pricing by case quantity, channel, destination, custom labels, and delivery cycle.",
  },
  th: {
    productsTitle: "สินค้าของเรา",
    productsIntro: "เลือกขนาดให้เหมาะกับช่วงเวลา: retail, event, hotel, airline และ export-ready supply",
    priceLabel: "ราคา / ขวด",
    b2bTitle: "แพ็กเกจ B2B สำหรับธุรกิจ",
    b2bIntro: "ราคาพิเศษสำหรับลูกค้าองค์กร · สั่งลัง · ส่งถึงที่ · มี Account Manager ดูแล",
    volumeLabel: "ปริมาณ / เดือน",
    discountLabel: "ส่วนลด",
    serviceLabel: "บริการพิเศษ",
    customTitle: "เงื่อนไขการสั่งซื้อยืดหยุ่นตามธุรกิจของคุณ",
    customCopy: "ทีมงานสามารถช่วยคำนวณราคาตามจำนวนลัง ช่องทางจำหน่าย ปลายทาง ฉลากพิเศษ และรอบการจัดส่ง",
  },
};

const wingsLocalCopy = {
  en: {
    eyebrow: "From Thai coconut farms",
    title: "To journeys in the sky, and to guests around the world",
    copy:
      "Coco Number SiX was created to carry the authentic taste of Thai aromatic coconut through quality standards we trust. Every drop reflects Thai farmers, Thai craftsmanship, and the pride of Thai hospitality.",
    closing: "Organic in Every Drop. Proudly from Thailand.",
  },
  th: {
    eyebrow: "จากสวนมะพร้าวไทย",
    title: "สู่การเดินทางบนท้องฟ้า และสู่ผู้คนทั่วโลก",
    copy:
      "Coco Number SiX เกิดขึ้นจากความตั้งใจที่จะส่งต่อรสชาติของมะพร้าวน้ำหอมไทยแท้ ผ่านมาตรฐานคุณภาพที่เราเชื่อมั่น ทุกหยดคือความตั้งใจของเกษตรกรไทย ทุกขวดคือความภาคภูมิใจของคนไทย",
    closing: "Organic in Every Drop. ภาคภูมิใจในความเป็นไทย.",
  },
};

const pageCopy = {
  en: {
    navCta: "Enquire now",
    brandSubtitle: "100% Organic Aromatic Coconut Water",
    heroEyebrow: "Our story",
    heroTitle: "That First Coconut Sip.",
    heroKicker: "The beginning of Coco Number SiX",
    heroCopy:
      "Every memorable hospitality experience begins with a simple moment. For us, it was the first sip of a perfectly fresh Thai aromatic coconut.",
    requestCatalogue: "Request Catalogue",
    contactUs: "Contact Us",
    distributor: "Become a Distributor",
    signature: "Pure hydration, naturally.",
    introTitle: ["Naturally sweet.", "Refreshingly pure.", "Unmistakably Thai."],
    introCopy:
      "Thailand produces some of the world's finest aromatic coconuts. Coco Number SiX was created to carry their authentic taste, quality, and quiet elegance into modern hospitality.",
    introClosing: "That belief became the foundation of Coco Number SiX.",
    productEyebrow: "Product excellence",
    productTitle: "From Thailand's finest coconuts, crafted with care.",
    productCopy:
      "We work with trusted Thai partners to select aromatic coconuts and transform them into a product designed for modern hospitality, aviation, wellness, and premium retail.",
    certification: "Certification standards",
    wholeEyebrow: "Whole coconut formats",
    wholeTitle: "Branded coconut service for hotels, events, and premium retail.",
    wholeCopy:
      "Beyond bottled coconut water, Coco Number SiX can support whole coconut presentation formats for welcome drinks, buffet moments, resort service, activations, and distributor inquiries.",
    wholeItems: ["Custom branded coconuts", "Hospitality-ready formats", "Event and activation supply", "Made for quotation"],
    wholeCta: "Request Whole Coconut Options",
    partnerInquiry: "Partner Inquiry",
    wholeNote: "Pricing by format, volume, and service requirement.",
    launchEyebrow: "Visibility for launch moments",
    launchCopy: "Branded coconuts for welcome drinks, resort service, events, and distributor sampling.",
    formats: "Formats",
    cutStyles: "Cut styles",
    series: "Series",
    serviceRange: "Service range",
    motion: "Real service motion",
    aviationTitle: "Trusted by premium aviation catering operations in Thailand.",
    aviationCopy:
      "Chosen for its purity, consistency, and exceptional quality to elevate the experience of discerning guests, both on the ground and in the skies.",
    partnerProof: "Partner proof",
    partnerProofTitle: "Trusted by aviation and hospitality partners.",
    partnerProofCopy:
      "A focused view of service-led partners aligned with the Coco Number SiX hospitality story.",
    hospitalityEyebrow: "Crafted for service",
    hospitalityTitle: "Service moments that feel refined, useful, and unmistakably Thai.",
    serviceStandard: "Service standard",
    serviceCopy:
      "Coco Number SiX should look ready for a guest before they read a single claim: chilled, clear, premium, and easy to place in airlines, hotels, resorts, and hosted events.",
    tableService: "Table service",
    tableTitle: "Ready for premium tables",
    tableCopy: "A product-led image that feels calm, tactile, and serviceable.",
    hospitalityCue: "Hospitality cue",
    chilledTitle: "Chilled, visible, and ready to serve.",
    chilledCopy: "A clear service story: one premium table moment, one real hospitality setting, and one chilled product detail.",
    coldDetail: "Cold detail",
    inMotion: "In Motion",
    wingsEyebrow: "Wings of Thailand",
    wingsTitle: "From Thailand's coconut farms to the skies of the world.",
    wingsParagraphs: [
      "There is a special pride in seeing a product from Thailand travel beyond our borders.",
      "Every day, millions of travelers discover our country through its people, culture, hospitality, and flavors. At Coco Number SiX, we are honored to be part of that journey.",
      "Inspired by Thailand's world-renowned service standards, every bottle represents the dedication of Thai farmers, Thai craftsmanship, and the spirit of Thai hospitality.",
    ],
    organicDrop: "Organic in Every Drop",
    proudlyThai: "Proudly from Thailand",
    serviceExpression: "946 ml service expression",
    serviceExpressionCopy: "A larger bottle story for sharing, hosting, and premium table moments.",
    videoCaptionOne: "Product in motion for travel and service storytelling",
    videoCaptionTwo: "A refreshing taste of Thailand beyond our borders",
    partnersEyebrow: "Designed for premium partners",
    partnersTitle: "A beverage story for service-led brands.",
    partnersCopy:
      "Coco Number SiX is built for environments where every small detail communicates care: travel, stays, wellness, retail, and hosted moments.",
    productsEyebrow: "Our Products",
    mostRequested: "Most requested size",
    miniSize: "Mini size",
    millilitres: "millilitres",
    bestFor: "Best for",
    bestValue: "Best Value",
    b2bPackage: "B2B Package",
    customQuote: "Custom quote available",
    quoteItems: ["Volume", "Channel", "Destination", "Custom Label", "Delivery Cycle", "Export Terms"],
    organicTitle: "Organic in every drop.",
    organicCopy:
      "Coco Number Six is positioned around quality without compromise, Thai hospitality, and a product experience that respects both people and place.",
    values: ["Purpose first", "Quality standards", "Planet matters"],
    promiseQuote: "A clean coconut water moment should feel effortless, generous, and unmistakably Thai.",
    promiseLabel: "The Coco Promise",
    contactEyebrow: "Partner with Coco Number SiX",
    contactTitle: "Bring the refreshing taste of Thailand to your guests.",
    contactCopy:
      "For airlines, hotels, resorts, wellness destinations, and premium distributors, Coco Number SiX offers a product story guests can see, taste, and remember.",
    addLine: "Add friend on Line",
    footerCopy:
      "Coco Number SiX · Pure Organic Aromatic Coconut Water. Crafted for premium hospitality, export-ready supply, and refreshing Thai service moments.",
    footerTagline: "Strong · Green · Clean",
    contactLabel: "Contact",
    talkTeam: "Talk to our team",
    requestSample: "Request Product Sample",
    copyright: "© PYP World Green Co., Ltd. Organic in Every Drop.",
  },
  th: {
    navCta: "สอบถามสินค้า",
    brandSubtitle: "น้ำมะพร้าวน้ำหอมออร์แกนิก 100%",
    heroEyebrow: "เรื่องราวของเรา",
    heroTitle: "จิบแรกของมะพร้าวน้ำหอม",
    heroKicker: "จุดเริ่มต้นของ Coco Number SiX",
    heroCopy:
      "ประสบการณ์บริการที่น่าจดจำมักเริ่มจากช่วงเวลาง่าย ๆ สำหรับเรา คือจิบแรกของมะพร้าวน้ำหอมไทยที่สดและสมบูรณ์แบบ",
    requestCatalogue: "ขอแคตตาล็อก",
    contactUs: "ติดต่อเรา",
    distributor: "สมัครเป็นตัวแทนจำหน่าย",
    signature: "เติมความสดชื่นอย่างเป็นธรรมชาติ",
    introTitle: ["หวานธรรมชาติ", "สดชื่นบริสุทธิ์", "เอกลักษณ์แบบไทย"],
    introCopy:
      "ประเทศไทยมีมะพร้าวน้ำหอมคุณภาพระดับโลก Coco Number SiX จึงถูกสร้างขึ้นเพื่อส่งต่อรสชาติแท้ คุณภาพ และความประณีตสู่ประสบการณ์บริการสมัยใหม่",
    introClosing: "ความเชื่อนี้คือรากฐานของ Coco Number SiX",
    productEyebrow: "คุณภาพสินค้า",
    productTitle: "คัดสรรมะพร้าวไทยคุณภาพดี ผลิตด้วยความใส่ใจ",
    productCopy:
      "เราทำงานร่วมกับพาร์ทเนอร์ไทยที่ไว้วางใจได้ เพื่อคัดเลือกมะพร้าวน้ำหอม และพัฒนาเป็นสินค้าที่เหมาะกับโรงแรม สายการบิน เวลเนส และรีเทลพรีเมียม",
    certification: "มาตรฐานการรับรอง",
    wholeEyebrow: "รูปแบบมะพร้าวลูก",
    wholeTitle: "บริการมะพร้าวติดแบรนด์สำหรับโรงแรม อีเวนต์ และรีเทลพรีเมียม",
    wholeCopy:
      "นอกจากน้ำมะพร้าวแบบขวด Coco Number SiX ยังรองรับมะพร้าวลูกสำหรับ welcome drink, buffet, resort service, activation และตัวแทนจำหน่าย",
    wholeItems: ["มะพร้าวติดแบรนด์", "รูปแบบพร้อมใช้ในงานบริการ", "รองรับอีเวนต์และกิจกรรมแบรนด์", "เสนอราคาตามรูปแบบงาน"],
    wholeCta: "สอบถามมะพร้าวลูก",
    partnerInquiry: "สอบถามพาร์ทเนอร์",
    wholeNote: "ราคาเสนอแยกตามรูปแบบ จำนวน และความต้องการของงานบริการ",
    launchEyebrow: "เหมาะกับช่วงเปิดตัวและงานแบรนด์",
    launchCopy: "มะพร้าวติดแบรนด์สำหรับ welcome drink, resort service, event และ distributor sampling",
    formats: "รูปแบบ",
    cutStyles: "ทรงตัด",
    series: "ซีรีส์",
    serviceRange: "ตัวเลือกงานบริการ",
    motion: "ภาพใช้งานจริง",
    aviationTitle: "ได้รับความไว้วางใจจากงานบริการการบินระดับพรีเมียมในไทย",
    aviationCopy:
      "คัดเลือกจากความบริสุทธิ์ ความสม่ำเสมอ และคุณภาพ เพื่อยกระดับประสบการณ์ของลูกค้า ทั้งบนพื้นดินและบนท้องฟ้า",
    partnerProof: "ความไว้วางใจจากพาร์ทเนอร์",
    partnerProofTitle: "ได้รับความไว้วางใจจากพาร์ทเนอร์ด้านการบินและโรงแรม",
    partnerProofCopy: "ภาพรวมพาร์ทเนอร์งานบริการระดับพรีเมียมที่สอดคล้องกับเรื่องราวของ Coco Number SiX",
    hospitalityEyebrow: "ออกแบบเพื่อการบริการ",
    hospitalityTitle: "ช่วงเวลาบริการที่ดูพรีเมียม ใช้งานได้จริง และมีเอกลักษณ์แบบไทย",
    serviceStandard: "มาตรฐานการเสิร์ฟ",
    serviceCopy:
      "Coco Number SiX ควรดูพร้อมสำหรับแขกตั้งแต่ก่อนอ่านคำอธิบาย: เย็นสดชื่น ใสสะอาด พรีเมียม และวางในบริบทโรงแรม สายการบิน รีสอร์ท หรืออีเวนต์ได้ง่าย",
    tableService: "บริการบนโต๊ะ",
    tableTitle: "พร้อมสำหรับโต๊ะบริการพรีเมียม",
    tableCopy: "ภาพสินค้าที่ดูนิ่ง ประณีต และพร้อมเสิร์ฟในงานบริการจริง",
    hospitalityCue: "สัญญาณของงานบริการ",
    chilledTitle: "เย็นสดชื่น มองเห็นสินค้า พร้อมเสิร์ฟ",
    chilledCopy: "เล่าเรื่องงานบริการให้ชัดเจน: โต๊ะพรีเมียมหนึ่งช่วงเวลา บริบทงานบริการจริง และรายละเอียดสินค้าที่แช่เย็นพร้อมดื่ม",
    coldDetail: "รายละเอียดความเย็น",
    inMotion: "ภาพเคลื่อนไหว",
    wingsEyebrow: "ปีกแห่งความเป็นไทย",
    wingsTitle: "จากสวนมะพร้าวไทย สู่ท้องฟ้าและผู้คนทั่วโลก",
    wingsParagraphs: [
      "เราภูมิใจที่ได้เห็นสินค้าไทยเดินทางออกไปไกลกว่าพรมแดน",
      "ทุกวัน นักเดินทางจำนวนมากรู้จักประเทศไทยผ่านผู้คน วัฒนธรรม งานบริการ และรสชาติ Coco Number SiX ภูมิใจที่ได้เป็นส่วนหนึ่งของการเดินทางนั้น",
      "ด้วยแรงบันดาลใจจากมาตรฐานงานบริการไทย ทุกขวดสะท้อนความตั้งใจของเกษตรกร งานฝีมือ และจิตวิญญาณการต้อนรับแบบไทย",
    ],
    organicDrop: "Organic in Every Drop",
    proudlyThai: "ภูมิใจจากประเทศไทย",
    serviceExpression: "ขนาด 946 ml สำหรับงานบริการ",
    serviceExpressionCopy: "ขวดขนาดใหญ่สำหรับการแบ่งปัน งานรับรอง และโต๊ะบริการพรีเมียม",
    videoCaptionOne: "ภาพเคลื่อนไหวของสินค้าเพื่อการเดินทางและงานบริการ",
    videoCaptionTwo: "รสชาติสดชื่นจากประเทศไทยสู่ผู้คนทั่วโลก",
    partnersEyebrow: "ออกแบบเพื่อพาร์ทเนอร์พรีเมียม",
    partnersTitle: "เรื่องราวเครื่องดื่มสำหรับแบรนด์ที่ให้ความสำคัญกับงานบริการ",
    partnersCopy:
      "Coco Number SiX เหมาะกับพื้นที่ที่ทุกรายละเอียดสื่อถึงความใส่ใจ ทั้งการเดินทาง โรงแรม เวลเนส รีเทล และงานรับรอง",
    productsEyebrow: "สินค้าของเรา",
    mostRequested: "ขนาดยอดนิยม",
    miniSize: "ขนาด Mini",
    millilitres: "มิลลิลิตร",
    bestFor: "เหมาะสำหรับ",
    bestValue: "คุ้มค่าที่สุด",
    b2bPackage: "แพ็กเกจ B2B",
    customQuote: "ขอใบเสนอราคาเฉพาะได้",
    quoteItems: ["จำนวน", "ช่องทาง", "ปลายทาง", "ฉลากพิเศษ", "รอบจัดส่ง", "เงื่อนไขส่งออก"],
    organicTitle: "ออร์แกนิกในทุกหยด",
    organicCopy:
      "Coco Number SiX วางตำแหน่งแบรนด์บนคุณภาพที่ไม่ประนีประนอม งานบริการแบบไทย และประสบการณ์สินค้าที่เคารพทั้งผู้คนและแหล่งที่มา",
    values: ["เริ่มจากจุดประสงค์", "มาตรฐานคุณภาพ", "ใส่ใจโลก"],
    promiseQuote: "ช่วงเวลาดื่มน้ำมะพร้าวที่ดีควรรู้สึกง่าย สดชื่น และมีเอกลักษณ์แบบไทย",
    promiseLabel: "คำมั่นของ Coco",
    contactEyebrow: "ร่วมเป็นพาร์ทเนอร์กับ Coco Number SiX",
    contactTitle: "ส่งต่อรสชาติสดชื่นจากไทยให้แขกและลูกค้าของคุณ",
    contactCopy:
      "สำหรับสายการบิน โรงแรม รีสอร์ท เวลเนส และตัวแทนจำหน่ายพรีเมียม Coco Number SiX มีเรื่องราวสินค้าที่ลูกค้ามองเห็น ลิ้มรส และจดจำได้",
    addLine: "เพิ่มเพื่อนใน LINE",
    footerCopy:
      "Coco Number SiX · น้ำมะพร้าวน้ำหอมออร์แกนิกแท้ สำหรับงานบริการพรีเมียม การส่งออก และช่วงเวลาสดชื่นแบบไทย",
    footerTagline: "แข็งแรง · เป็นมิตรต่อโลก · สะอาด",
    contactLabel: "ติดต่อ",
    talkTeam: "คุยกับทีมงาน",
    requestSample: "สอบถามสินค้า",
    copyright: "© PYP World Green Co., Ltd. ออร์แกนิกในทุกหยด",
  },
};

const supportedLanguages = [
  { code: "TH", flag: "🇹🇭" },
  { code: "EN", flag: "🇬🇧" },
  { code: "AR", flag: "🇦🇪" },
  { code: "JA", flag: "🇯🇵" },
  { code: "ZH", flag: "🇨🇳" },
];

const salesContact = {
  phone: "+66 82 978 2666",
  phoneHref: "tel:+66829782666",
  lineId: "0819451666",
  lineHref: "line://ti/p/~0819451666",
  email: "PYP.worldgreen@gmail.com",
  emailHref:
    "mailto:PYP.worldgreen@gmail.com?subject=Coco%20Number%20SiX%20B2B%20Inquiry",
};

function getContactMethods(locale: Locale) {
  return locale === "th"
    ? [
        {
          label: "โทร",
          title: "คุยกับฝ่ายขาย",
          value: salesContact.phone,
          href: salesContact.phoneHref,
          copy: "สำหรับออเดอร์เร่งด่วน โรงแรม และตัวแทนจำหน่าย",
        },
        {
          label: "LINE",
          title: "เพิ่มเพื่อนใน LINE",
          value: `Line ID: ${salesContact.lineId}`,
          href: salesContact.lineHref,
          copy: "เปิดแอป LINE เพื่อเพิ่มเพื่อนและคุยกับทีมงานได้ทันที",
        },
        {
          label: "อีเมล",
          title: "ส่งคำถาม / ขอใบเสนอราคา",
          value: salesContact.email,
          href: salesContact.emailHref,
          copy: "เหมาะสำหรับใบเสนอราคา รายละเอียดส่งออก และเอกสารจัดซื้อ",
        },
      ]
    : [
        {
          label: "Call",
          title: "Talk to sales",
          value: salesContact.phone,
          href: salesContact.phoneHref,
          copy: "For urgent orders, hotel supply, and distributor conversations.",
        },
        {
          label: "Line",
          title: "Add friend on Line",
          value: `Line ID: ${salesContact.lineId}`,
          href: salesContact.lineHref,
          copy: "Open the Line app and add this account directly.",
        },
        {
          label: "Email",
          title: "Send inquiry",
          value: salesContact.email,
          href: salesContact.emailHref,
          copy: "Best for quotations, export details, and formal purchasing requests.",
        },
      ];
}

function getJsonLd(locale: Locale) {
  const pageUrl = `${siteConfig.url}/${locale}`;

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${siteConfig.url}/#organization`,
        name: siteConfig.companyName,
        url: siteConfig.url,
        logo: `${siteConfig.url}/icon.png`,
        brand: {
          "@type": "Brand",
          name: siteConfig.name,
        },
        contactPoint: [
          {
            "@type": "ContactPoint",
            telephone: "+66-82-978-2666",
            email: salesContact.email,
            contactType: "sales",
            areaServed: "Worldwide",
            availableLanguage: ["Thai", "English", "Arabic", "Japanese", "Chinese"],
          },
        ],
      },
      {
        "@type": "WebSite",
        "@id": `${siteConfig.url}/#website`,
        name: siteConfig.name,
        url: siteConfig.url,
        publisher: {
          "@id": `${siteConfig.url}/#organization`,
        },
        inLanguage: locale,
      },
      {
        "@type": "Product",
        "@id": `${pageUrl}/#product`,
        name: "Coco Number SiX Premium Thai Organic Aromatic Coconut Water",
        brand: {
          "@type": "Brand",
          name: siteConfig.name,
        },
        manufacturer: {
          "@id": `${siteConfig.url}/#organization`,
        },
        image: `${siteConfig.url}${siteConfig.image}`,
        description: siteConfig.description,
        category: "Organic Coconut Water",
        inLanguage: locale,
        countryOfOrigin: {
          "@type": "Country",
          name: "Thailand",
        },
        offers: {
          "@type": "AggregateOffer",
          priceCurrency: "THB",
          lowPrice: "69",
          highPrice: "225",
          offerCount: "3",
          availability: "https://schema.org/InStock",
          url: `${pageUrl}/#pricing`,
        },
        additionalProperty: [
          {
            "@type": "PropertyValue",
            name: "Ingredients",
            value: "100% Organic Aromatic Coconut Water",
          },
          {
            "@type": "PropertyValue",
            name: "Added Sugar",
            value: "No Added Sugar",
          },
          {
            "@type": "PropertyValue",
            name: "Available sizes",
            value: "246 ml, 473 ml, 946 ml",
          },
        ],
      },
    ],
  };
}

function BenefitIcon({ name }: { name: string }) {
  const iconClass = "h-8 w-8";

  if (name === "drop") {
    return (
      <svg className={iconClass} viewBox="0 0 32 32" fill="none" aria-hidden="true">
        <path
          d="M16 4.5C16 4.5 7.5 13.5 7.5 20.5C7.5 25.2 11.3 29 16 29C20.7 29 24.5 25.2 24.5 20.5C24.5 13.5 16 4.5 16 4.5Z"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinejoin="round"
        />
        <path d="M12.5 21C13.1 23.1 14.5 24.2 16.5 24.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>
    );
  }

  if (name === "plane") {
    return (
      <svg className={iconClass} viewBox="0 0 32 32" fill="none" aria-hidden="true">
        <path
          d="M4 18.5L28 10.5L29 13.5L19 20L21 27L18 28L13.5 22.5L7 24.5L4 18.5Z"
          fill="currentColor"
        />
        <path d="M6 28H24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>
    );
  }

  if (name === "snow") {
    return (
      <svg className={iconClass} viewBox="0 0 32 32" fill="none" aria-hidden="true">
        <path d="M16 4V28M7.5 8.5L24.5 23.5M24.5 8.5L7.5 23.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        <path d="M12 6.5L16 10.5L20 6.5M12 25.5L16 21.5L20 25.5M5.5 14L11 15.5L9.5 21M26.5 14L21 15.5L22.5 21" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }

  if (name === "shield") {
    return (
      <svg className={iconClass} viewBox="0 0 32 32" fill="none" aria-hidden="true">
        <path
          d="M16 4.5L25 8V15.5C25 21.5 21.5 25.8 16 28C10.5 25.8 7 21.5 7 15.5V8L16 4.5Z"
          stroke="currentColor"
          strokeWidth="1.9"
          strokeLinejoin="round"
        />
        <path d="M12.5 16.3L15 18.8L20.5 13.2" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }

  if (name === "heart") {
    return (
      <svg className={iconClass} viewBox="0 0 32 32" fill="none" aria-hidden="true">
        <path
          d="M16 27C14.8 25.9 6.5 19.9 6.5 12.7C6.5 9.5 8.8 7 12 7C14 7 15.2 8.1 16 9.4C16.8 8.1 18 7 20 7C23.2 7 25.5 9.5 25.5 12.7C25.5 19.9 17.2 25.9 16 27Z"
          stroke="currentColor"
          strokeWidth="1.9"
          strokeLinejoin="round"
        />
        <path d="M8 24.5C11.8 24 15.4 22.8 19 20.8" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" />
      </svg>
    );
  }

  return (
    <svg className={iconClass} viewBox="0 0 32 32" fill="none" aria-hidden="true">
      <path
        d="M25.5 6.5C15 6.7 7.5 12.7 7.5 21C7.5 24.6 10.4 27.5 14 27.5C22.3 27.5 28.3 20 28.5 9.5C28.5 7.8 27.2 6.5 25.5 6.5Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path d="M14 22C16.5 17.7 19.7 14.6 24 12.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

export default function LandingPage({ locale }: { locale: Locale }) {
  const jsonLd = getJsonLd(locale);
  const catalogProducts = catalogProductsByLocale[locale];
  const b2bCards = b2bCardsByLocale[locale];
  const b2bTiers = b2bTiersByLocale[locale];
  const copy = pageCopy[locale];
  const gallery = galleryByLocale[locale];
  const productSizes = productSizesByLocale[locale];
  const partnerChannels = partnerChannelsByLocale[locale];
  const productionProofs = productionProofsByLocale[locale];
  const contactMethods = getContactMethods(locale);
  const footerLinks = locale === "th"
    ? [
        { label: "สินค้า", href: "#product" },
        { label: "งานบริการ", href: "#hospitality" },
        { label: "สู่สากล", href: "#wings" },
        { label: "พาร์ทเนอร์", href: "#partners" },
        { label: "ราคา", href: "#pricing" },
        { label: "ติดต่อ", href: "#contact" },
      ]
    : [
        { label: "Product", href: "#product" },
        { label: "Hospitality", href: "#hospitality" },
        { label: "Wings", href: "#wings" },
        { label: "Partners", href: "#partners" },
        { label: "Pricing", href: "#pricing" },
        { label: "Contact", href: "#contact" },
      ];
  const pricing = pricingCopy[locale];
  const wingsLocal = wingsLocalCopy[locale];

  return (
    <main lang={locale} className="min-h-screen overflow-x-hidden bg-[#fbfaf7] text-[#153321]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ScrollToHeroOnRefresh />
      <ScrollReveal />
      <ShrinkingHeader>
        <div className="mx-auto grid max-w-[1480px] grid-cols-[minmax(0,1fr)_auto] items-center gap-3 px-4 py-2 transition-all duration-300 sm:px-5 md:px-8 md:py-2.5 xl:grid-cols-[auto_minmax(0,1fr)_auto_auto] xl:gap-4 xl:px-10 [.group[data-scrolled=true]_&]:py-1.5">
          <a className="flex min-w-0 items-center gap-2.5 sm:gap-3" href="#top" aria-label="Coco Number Six home">
            <Image
              src="/images/coco-logo.jpg"
              alt=""
              width={58}
              height={58}
              className="h-9 w-9 shrink-0 rounded-full object-cover transition-all duration-300 sm:h-10 sm:w-10 md:h-11 md:w-11 [.group[data-scrolled=true]_&]:h-9 [.group[data-scrolled=true]_&]:w-9"
              priority
            />
            <span className="min-w-0">
              <span className="block truncate font-serif text-[1.02rem] font-semibold uppercase leading-tight text-[#0a3b20] sm:text-lg">
                Coco Number Six
              </span>
              <span className="hidden text-[9px] font-semibold uppercase tracking-[0.14em] text-[#5d665d] transition-all duration-300 sm:block [.group[data-scrolled=true]_&]:opacity-0 [.group[data-scrolled=true]_&]:sm:hidden">
                {copy.brandSubtitle}
              </span>
            </span>
          </a>
          <ActiveNav locale={locale} />
          <div className="hidden shrink-0 xl:block">
            <LanguageSwitcher />
          </div>
          <a
            className="hidden min-h-9 shrink-0 items-center bg-[#073716] px-5 text-[11px] font-bold uppercase tracking-[0.1em] text-white transition hover:bg-[#15552a] xl:inline-flex"
            href="#contact"
          >
            {copy.navCta}
          </a>
          <MobileMenu locale={locale} />
        </div>
      </ShrinkingHeader>

      <section id="top" className="bg-[#f5f0e5] pt-[57px] md:pt-[65px]">
        <div className="relative mx-auto min-h-[calc(100svh-57px)] max-w-[1480px] overflow-hidden bg-[radial-gradient(circle_at_80%_78%,rgba(213,190,112,0.3),transparent_28%),linear-gradient(180deg,#f8f3e8_0%,#f0e8d8_100%)] md:min-h-[calc(100svh-65px)] md:bg-transparent">
          <Image
            src="/images/hero-coconut-bottle.webp"
            alt="Coco Number SiX organic aromatic coconut water in warm natural light"
            fill
            priority
            sizes="100vw"
            className="hidden object-cover object-[72%_center] md:block xl:object-[70%_center]"
          />
          <div className="absolute inset-0 hidden md:block md:bg-[linear-gradient(90deg,#f5f0e5_0%,rgba(245,240,229,0.98)_26%,rgba(245,240,229,0.82)_40%,rgba(245,240,229,0.28)_54%,rgba(245,240,229,0.04)_66%,transparent_78%)]" />
          <div className="pointer-events-none absolute inset-x-0 bottom-0 hidden h-56 bg-[linear-gradient(180deg,transparent_0%,rgba(245,240,229,0.58)_58%,#f5f0e5_100%)] md:block md:h-64" />
          <div className="relative z-10 flex min-h-[calc(100svh-57px)] flex-col px-6 pb-14 pt-0 sm:px-10 md:min-h-[calc(100svh-65px)] md:flex-row md:items-center md:px-16 md:pb-32 md:pt-12 xl:px-20">
            <div className="relative -mx-6 min-h-[68svh] overflow-hidden bg-[#efe7d6] sm:-mx-10 sm:min-h-[72svh] md:hidden" data-reveal>
              <Image
                src="/images/product-hero.png"
                alt="Coco Number SiX bottle with fresh coconut styling"
                fill
                priority
                sizes="(max-width: 767px) 100vw, 0px"
                className="object-cover object-[50%_30%]"
              />
              <div className="mobile-hero-fade" data-reveal style={{ transitionDelay: "360ms" }} />
            </div>
            <div className="relative z-10 -mt-[18svh] max-w-xl md:mt-0 md:max-w-xl">
              <p className="text-xs font-bold uppercase tracking-[0.24em] text-[#7c681f]" data-reveal style={{ transitionDelay: "520ms" }}>
                {copy.heroEyebrow}
              </p>
              <div className="mt-4 h-px w-24 bg-[#9e8734]" />
              <h1 className="mt-6 font-serif text-[2.65rem] font-semibold leading-[0.98] text-[#073716] sm:text-6xl xl:text-7xl" data-reveal style={{ transitionDelay: "680ms" }}>
                {copy.heroTitle}
              </h1>
              <p className="mt-5 text-[11px] font-bold uppercase tracking-[0.2em] text-[#8a7116] sm:text-xs" data-reveal style={{ transitionDelay: "820ms" }}>
                {copy.heroKicker}
              </p>
              <p className="mt-5 max-w-md text-[0.95rem] leading-7 text-[#354b3b] sm:text-base sm:leading-8" data-reveal style={{ transitionDelay: "960ms" }}>
                {copy.heroCopy}
              </p>
              <div className="mt-7 grid grid-cols-2 gap-3 sm:flex sm:flex-wrap" data-reveal style={{ transitionDelay: "1120ms" }}>
                <a
                  className="inline-flex min-h-11 items-center justify-center bg-[#073716] px-4 text-center text-[11px] font-bold uppercase tracking-[0.1em] text-white transition hover:bg-[#15552a] sm:px-5 sm:text-xs sm:tracking-[0.12em]"
                  href="#pricing"
                >
                  {copy.requestCatalogue}
                </a>
                <a
                  className="inline-flex min-h-11 items-center justify-center border border-[#073716] bg-[#fbf8f0]/72 px-4 text-center text-[11px] font-bold uppercase tracking-[0.1em] text-[#073716] backdrop-blur transition hover:bg-white sm:px-5 sm:text-xs sm:tracking-[0.12em]"
                  href="#contact"
                >
                  {copy.contactUs}
                </a>
                <a
                  className="col-span-2 inline-flex min-h-11 items-center justify-center border border-[#b3993d] bg-[#e8d284]/70 px-4 text-center text-[11px] font-bold uppercase tracking-[0.1em] text-[#073716] backdrop-blur transition hover:bg-[#f1dfa0] sm:col-span-1 sm:px-5 sm:text-xs sm:tracking-[0.12em]"
                  href="#partners"
                >
                  {copy.distributor}
                </a>
              </div>
              <div className="mt-8 md:mt-10" data-reveal style={{ transitionDelay: "1280ms" }}>
                <p className="signature-line text-[#124425]">{copy.signature}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative z-20 -mt-12 bg-[linear-gradient(to_bottom,transparent_0,transparent_3rem,#fbf8f0_3rem)] px-5 pb-0 md:-mt-20 md:bg-[linear-gradient(to_bottom,transparent_0,transparent_5rem,#fbf8f0_5rem)] md:px-10 md:pb-0">
        <div className="mx-auto grid w-full max-w-[1500px] overflow-hidden border border-white/90 bg-[#f8f4ea] shadow-[0_20px_60px_rgba(36,46,35,0.12)] lg:grid-cols-[0.8fr_1.2fr]">
          <div className="flex items-center p-8 md:p-10 lg:p-12" data-reveal>
            <div>
              <h2 className="font-serif text-3xl font-semibold leading-tight text-[#073716] md:text-4xl">
                {copy.introTitle.map((line) => (
                  <span key={line} className="block">{line}</span>
                ))}
              </h2>
              <div className="mt-5 h-px w-12 bg-[#a78b2c]" />
              <p className="mt-5 text-sm leading-6 text-[#425247]">
                {copy.introCopy}
              </p>
              <p className="mt-4 font-serif text-lg text-[#8a7116]">
                {copy.introClosing}
              </p>
            </div>
          </div>
          <div className="relative min-h-[320px] md:min-h-[420px]" data-reveal style={{ transitionDelay: "120ms" }}>
            <Image
              src="/images/coconut-farm-story.webp"
              alt="Coco Number SiX coconut farm story with a farmer carrying fresh coconuts"
              fill
              sizes="(min-width: 1024px) 60vw, 100vw"
              className="object-cover object-[62%_center]"
            />
          </div>
        </div>
      </section>

      <section id="product" className="scroll-mt-24 bg-[#fbf8f0] px-5 pb-0 pt-0 md:px-10">
        <div className="mx-auto grid max-w-[1500px] overflow-hidden border-x border-b border-[#d9d3c4] bg-[#fbf8f0] lg:grid-cols-[1.08fr_0.92fr]">
          <div className="grid gap-[3px] bg-white p-[3px] md:min-h-[560px] md:grid-cols-[1.82fr_1fr] md:grid-rows-3 lg:min-h-[620px]" data-reveal>
            <div className="relative min-h-[420px] overflow-hidden bg-[#efe8d7] md:row-span-3 md:min-h-0">
              <Image
                src="/images/production-main.webp"
                alt="Coco Number SiX production team packing organic aromatic coconut water"
                fill
                sizes="(min-width: 1024px) 38vw, 64vw"
                className="object-cover object-center"
              />
            </div>
            <div className="relative min-h-[180px] overflow-hidden bg-[#efe8d7] md:min-h-0">
              <Image
                src="/images/production-coconuts.webp"
                alt="Fresh Thai aromatic coconuts selected from farm"
                fill
                sizes="(min-width: 1024px) 20vw, 36vw"
                className="object-cover object-center"
              />
            </div>
            <div className="relative min-h-[180px] overflow-hidden bg-[#efe8d7] md:min-h-0">
              <Image
                src="/images/production-bottle-check.webp"
                alt="Coco Number SiX bottle checked by gloved production hands"
                fill
                sizes="(min-width: 1024px) 20vw, 36vw"
                className="object-cover object-center"
              />
            </div>
            <div className="relative min-h-[180px] overflow-hidden bg-[#efe8d7] md:min-h-0">
              <Image
                src="/images/production-cartons-real.jpg"
                alt="Export cartons prepared for Coco Number SiX distribution"
                fill
                sizes="(min-width: 1024px) 20vw, 36vw"
                className="object-cover object-center"
              />
            </div>
          </div>

          <div className="flex items-center border-t border-[#d9d3c4] px-8 py-12 md:px-12 md:py-16 lg:border-l lg:border-t-0 lg:px-14 xl:px-16" data-reveal style={{ transitionDelay: "120ms" }}>
            <div className="w-full">
              <p className="text-xs font-bold uppercase tracking-[0.32em] text-[#8a7116]">{copy.productEyebrow}</p>
              <h2 className="mt-5 max-w-3xl font-serif text-[2.5rem] font-semibold leading-[1.08] text-[#073716] md:text-5xl lg:text-[3.45rem]">
                {copy.productTitle}
              </h2>
              <div className="mt-6 h-px w-20 bg-[#a78b2c]" />
              <p className="mt-6 max-w-2xl text-base leading-8 text-[#4f6254]">
                {copy.productCopy}
              </p>

              <div className="mt-8 grid grid-cols-2 gap-x-5 gap-y-7 border-t border-[#d9d3c4] pt-8 sm:grid-cols-4">
                {productionProofs.map((proof) => (
                  <div key={proof.label} className="text-center text-[#8a7116]">
                    <div className="mx-auto flex h-10 w-10 items-center justify-center">
                      <BenefitIcon name={proof.icon} />
                    </div>
                    <p className="mt-4 text-[10px] font-extrabold uppercase leading-4 tracking-[0.14em] text-[#153321]">
                      {proof.label}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-8 border-t border-[#d9d3c4] pt-7">
                <p className="text-[10px] font-extrabold uppercase tracking-[0.18em] text-[#8a7116]">
                  {copy.certification}
                </p>
                <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-4">
                  <div className="flex min-h-24 items-center justify-center border border-[#e5dcc7] bg-white px-4 py-3 shadow-[0_10px_28px_rgba(36,46,35,0.06)]">
                    <Image
                      src="/images/cert-halal-thailand.jpg"
                      alt="Halal certification by The Islamic Committee Office of Thailand"
                      width={360}
                      height={240}
                      className="max-h-16 w-auto object-contain"
                    />
                  </div>
                  <div className="flex min-h-24 items-center justify-center border border-[#e5dcc7] bg-white px-4 py-3 shadow-[0_10px_28px_rgba(36,46,35,0.06)]">
                    <Image
                      src="/images/cert-organic-thailand.jpg"
                      alt="Organic Thailand certification mark"
                      width={360}
                      height={360}
                      className="max-h-16 w-auto object-contain"
                    />
                  </div>
                  <div className="flex min-h-24 items-center justify-center border border-[#e5dcc7] bg-white px-4 py-3 shadow-[0_10px_28px_rgba(36,46,35,0.06)]">
                    <Image
                      src="/images/cert-intertek-ghp-haccp.png"
                      alt="Intertek GHPs and HACCP certification marks"
                      width={560}
                      height={312}
                      className="max-h-16 w-full object-contain"
                    />
                  </div>
                  <div className="flex min-h-24 items-center justify-center border border-[#e5dcc7] bg-white px-4 py-3 shadow-[0_10px_28px_rgba(36,46,35,0.06)]">
                    <Image
                      src="/images/cert-iso.jpg"
                      alt="International Organization for Standardization ISO certification mark"
                      width={360}
                      height={300}
                      className="max-h-16 w-auto object-contain"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section aria-label="Whole coconut service options" className="bg-[#fbf8f0] px-5 py-16 md:px-10 md:py-24">
        <div className="mx-auto grid max-w-[1500px] overflow-hidden border border-[#d9d3c4] bg-[#f5f0e5] lg:grid-cols-[0.9fr_1.1fr]">
          <div className="flex items-center px-8 py-12 md:px-12 lg:px-14 xl:px-16" data-reveal>
            <div className="max-w-xl">
              <p className="text-xs font-bold uppercase tracking-[0.28em] text-[#8a7116]">
                {copy.wholeEyebrow}
              </p>
              <h2 className="mt-5 font-serif text-[2.45rem] font-semibold leading-[1.04] text-[#073716] md:text-5xl">
                {copy.wholeTitle}
              </h2>
              <div className="mt-6 h-px w-20 bg-[#a78b2c]" />
              <p className="mt-6 text-base leading-8 text-[#4f6254]">
                {copy.wholeCopy}
              </p>
              <div className="mt-7 grid gap-3 sm:grid-cols-2">
                {copy.wholeItems.map((item) => (
                  <div key={item} className="border border-[#e1d6b9] bg-white/62 px-4 py-3 text-sm font-bold text-[#153321]">
                    {item}
                  </div>
                ))}
              </div>
              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  className="inline-flex min-h-12 items-center justify-center bg-[#073716] px-6 text-xs font-bold uppercase tracking-[0.12em] text-white transition hover:bg-[#15552a]"
                  href="#contact"
                >
                  {copy.wholeCta}
                </a>
                <a
                  className="inline-flex min-h-12 items-center justify-center border border-[#a78b2c] px-6 text-xs font-bold uppercase tracking-[0.12em] text-[#735c00] transition hover:bg-white"
                  href="#partners"
                >
                  {copy.partnerInquiry}
                </a>
              </div>
              <p className="mt-4 text-xs font-semibold uppercase tracking-[0.16em] text-[#8a7116]">
                {copy.wholeNote}
              </p>
            </div>
          </div>

          <div
            className="relative min-h-[640px] overflow-hidden bg-[#092f17] p-4 md:p-6 lg:min-h-[760px]"
            data-reveal
            style={{ transitionDelay: "120ms" }}
          >
            <figure className="absolute inset-0">
              <Image
                src="/images/whole-coconut-city-activation.png"
                alt="Coco Number SiX whole coconut activation visual in a city setting"
                fill
                sizes="(min-width: 1024px) 56vw, 100vw"
                className="object-cover object-center"
              />
            </figure>
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(7,55,22,0.08),rgba(7,55,22,0.26)_38%,rgba(7,55,22,0.86))]" />
            <div className="absolute inset-x-0 top-0 h-32 bg-[linear-gradient(180deg,rgba(7,55,22,0.8),rgba(7,55,22,0))]" />

            <div className="relative z-10 flex min-h-[608px] flex-col justify-between md:min-h-[708px]">
              <div className="max-w-sm border border-white/15 bg-[#073716]/72 px-5 py-4 text-white backdrop-blur-sm">
                <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#e1c766]">
                  {copy.launchEyebrow}
                </p>
                <p className="mt-2 text-sm leading-6 text-[#e8f1e8]">
                  {copy.launchCopy}
                </p>
              </div>

              <div className="grid gap-3 md:grid-cols-[1fr_0.9fr_0.82fr] md:items-end">
                <figure className="group overflow-hidden border border-white/20 bg-[#fbf8f0] p-3 shadow-[0_20px_50px_rgba(0,0,0,0.22)]">
                  <div className="relative aspect-[4/3] overflow-hidden bg-white">
                    <Image
                      src="/images/whole-coconut-formats.jpg"
                      alt="Coco Number SiX whole coconut presentation formats"
                      fill
                      sizes="(min-width: 1024px) 20vw, 90vw"
                      className="object-contain object-center transition duration-500 group-hover:scale-[1.03]"
                    />
                  </div>
                  <figcaption className="mt-3 flex items-center justify-between gap-3 text-[#153321]">
                    <span className="text-xs font-bold uppercase tracking-[0.16em] text-[#8a7116]">{copy.formats}</span>
                    <span className="text-sm font-bold">{copy.cutStyles}</span>
                  </figcaption>
                </figure>

                <figure className="group overflow-hidden border border-white/20 bg-[#fbf8f0] p-3 shadow-[0_20px_50px_rgba(0,0,0,0.22)]">
                  <div className="relative aspect-[4/3] overflow-hidden bg-white">
                    <Image
                      src="/images/whole-coconut-series.jpg"
                      alt="Coco Number SiX whole coconut series options"
                      fill
                      sizes="(min-width: 1024px) 18vw, 90vw"
                      className="object-contain object-center transition duration-500 group-hover:scale-[1.03]"
                    />
                  </div>
                  <figcaption className="mt-3 flex items-center justify-between gap-3 text-[#153321]">
                    <span className="text-xs font-bold uppercase tracking-[0.16em] text-[#8a7116]">{copy.series}</span>
                    <span className="text-sm font-bold">{copy.serviceRange}</span>
                  </figcaption>
                </figure>

                <figure className="overflow-hidden border border-white/20 bg-[#073716] p-3 shadow-[0_20px_50px_rgba(0,0,0,0.22)]">
                  <video
                    className="aspect-[4/3] w-full object-cover"
                    src="/media/whole-coconut-service.mp4"
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="metadata"
                    aria-label="Coco Number SiX whole coconut service video"
                  />
                  <figcaption className="mt-3 text-sm font-bold text-[#f4eddc]">
                    {copy.motion}
                  </figcaption>
                </figure>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section aria-label="Premium aviation catering trust" className="bg-[#fbf8f0] px-5 pb-10 md:px-10 md:pb-14">
        <div className="mx-auto overflow-hidden border-x border-b border-[#d9d3c4] bg-[#fbf8f0] max-w-[1500px]">
          <div className="grid min-h-[250px] lg:grid-cols-[0.38fr_0.62fr]">
            <div className="flex items-center bg-[#fbf8f0] px-8 py-10 md:px-12 lg:px-14" data-reveal>
              <div className="max-w-md">
                <h2 className="font-serif text-2xl font-semibold leading-tight text-[#073716] md:text-3xl">
                  {copy.aviationTitle}
                </h2>
                <div className="mt-5 h-px w-12 bg-[#a78b2c]" />
                <p className="mt-5 text-sm leading-6 text-[#354b3b]">
                  {copy.aviationCopy}
                </p>
              </div>
            </div>

            <div className="relative min-h-[250px] overflow-hidden bg-[#e9dfc9]" data-reveal style={{ transitionDelay: "120ms" }}>
              <Image
                src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=1600&q=85"
                alt="Passenger aircraft flying above soft clouds at golden hour"
                fill
                sizes="(min-width: 1024px) 62vw, 100vw"
                className="object-cover object-center"
              />
              <div className="absolute inset-y-0 -left-px w-[62%] bg-[linear-gradient(90deg,#fbf8f0_0%,rgba(251,248,240,0.96)_14%,rgba(251,248,240,0.72)_34%,rgba(251,248,240,0.28)_58%,rgba(251,248,240,0)_100%)]" />
              <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(251,248,240,0.18)_0%,rgba(251,248,240,0.04)_45%,rgba(7,55,22,0.08)_100%)]" />
            </div>
          </div>
        </div>
      </section>

      <section aria-label="Trusted by premium partners" className="bg-[#fbf8f0] px-5 pb-16 md:px-10 md:pb-24">
        <div className="mx-auto max-w-[1500px]" data-reveal>
          <div className="mb-5 flex flex-col gap-3 border-t border-[#d9d3c4] pt-7 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.26em] text-[#8a7116]">{copy.partnerProof}</p>
              <h2 className="mt-3 font-serif text-3xl font-semibold leading-tight text-[#073716] md:text-4xl">
                {copy.partnerProofTitle}
              </h2>
            </div>
            <p className="max-w-md text-sm leading-6 text-[#4f6254]">
              {copy.partnerProofCopy}
            </p>
          </div>

          <div className="overflow-hidden border border-[#ded4bf] bg-white shadow-[0_20px_52px_rgba(36,46,35,0.09)]">
            {partnerProofGroups.map((group) => (
              <div key={group.label} className="grid border-t border-[#e4dac7] first:border-t-0 lg:grid-cols-[220px_1fr]">
                <div className="flex items-center justify-center bg-[#073716] px-5 py-4 text-center text-xs font-bold uppercase tracking-[0.22em] text-[#f8f0d2] lg:justify-start lg:text-left">
                  <span>{group.label}</span>
                </div>
                <div className={`grid gap-px bg-[#eee6d7] ${group.gridClassName}`}>
                  {group.logos.map((partner) => (
                    <div key={partner.name} className="flex min-h-32 items-center justify-center bg-white px-6 py-7 transition-colors duration-300 hover:bg-[#fffdf7]">
                      <Image
                        src={partner.src}
                        alt={`${partner.name} logo`}
                        width={520}
                        height={260}
                        sizes="(min-width: 1024px) 18vw, (min-width: 640px) 50vw, 100vw"
                        className={`h-auto w-full object-contain ${partner.className}`}
                      />
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="hospitality" className="scroll-mt-24 bg-[#fbf8f0] px-5 py-16 md:px-10 md:py-24">
        <div className="mx-auto max-w-[1500px]">
          <div className="mb-10 grid gap-8 border-y border-[#d9d3c4] py-8 lg:grid-cols-[0.72fr_0.58fr] lg:items-start lg:justify-between" data-reveal>
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.26em] text-[#8a7116]">{copy.hospitalityEyebrow}</p>
              <h2 className="mt-4 max-w-2xl font-serif text-4xl font-semibold leading-[1.04] text-[#073716] md:text-6xl">
                {copy.hospitalityTitle}
              </h2>
            </div>
            <div className="max-w-xl border-l border-[#a78b2c] pl-6 lg:mt-11">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#8a7116]">{copy.serviceStandard}</p>
              <p className="mt-4 text-base leading-8 text-[#4f6254]">
                {copy.serviceCopy}
              </p>
            </div>
          </div>

          <div className="grid gap-px overflow-hidden border border-[#d9d3c4] bg-[#d9d3c4] lg:grid-cols-[1.08fr_0.92fr]">
            <figure className="relative min-h-[460px] overflow-hidden bg-[#123f25] md:min-h-[620px]" data-reveal>
              <Image
                src="/images/product-table-946ml.jpg"
                alt="Coco Number Six 946 ml bottle styled with natural ingredients"
                fill
                sizes="(min-width: 1024px) 54vw, 100vw"
                className="object-cover object-center transition duration-700 hover:scale-[1.03]"
              />
              <figcaption className="absolute inset-x-0 bottom-0 bg-[linear-gradient(0deg,rgba(7,55,22,0.88),rgba(7,55,22,0.42)_52%,rgba(7,55,22,0))] px-6 pb-7 pt-36 text-white md:px-8 md:pb-8">
                <p className="text-xs font-bold uppercase tracking-[0.24em] text-[#e1c766]">{copy.tableService}</p>
                <p className="mt-3 max-w-xl font-serif text-3xl font-semibold leading-tight md:text-4xl">{copy.tableTitle}</p>
                <p className="mt-3 max-w-lg text-sm leading-7 text-[#dfece1]">
                  {copy.tableCopy}
                </p>
              </figcaption>
            </figure>

            <div className="grid gap-px bg-[#d9d3c4]">
              <article className="bg-[#073716] p-8 text-white md:p-10" data-reveal style={{ transitionDelay: "90ms" }}>
                <p className="text-xs font-bold uppercase tracking-[0.24em] text-[#e1c766]">{copy.hospitalityCue}</p>
                <h3 className="mt-4 max-w-md font-serif text-3xl font-semibold leading-tight md:text-4xl">
                  {copy.chilledTitle}
                </h3>
                <div className="mt-5 h-px w-14 bg-[#e1c766]" />
                <p className="mt-5 max-w-lg text-sm leading-7 text-[#cfe1d2]">
                  {copy.chilledCopy}
                </p>
              </article>

              <figure className="relative min-h-[260px] overflow-hidden bg-black" data-reveal style={{ transitionDelay: "160ms" }}>
                <video
                  className="h-full min-h-[260px] w-full object-cover"
                  src="/media/wings-service-01.mp4"
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="metadata"
                  aria-label="Coco Number Six service motion clip"
                />
                <figcaption className="absolute inset-x-0 bottom-0 bg-[linear-gradient(0deg,rgba(0,0,0,0.76),rgba(0,0,0,0))] px-5 pb-5 pt-24 text-white">
                  <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#e1c766]">{copy.coldDetail}</p>
                  <p className="mt-1 font-serif text-2xl font-semibold">{copy.inMotion}</p>
                </figcaption>
              </figure>

              <div className="grid gap-px bg-[#d9d3c4] sm:grid-cols-2">
                {gallery.slice(1).map((item, index) => (
                  <figure
                    key={item.title}
                    className="group overflow-hidden bg-white"
                    data-reveal
                    style={{ transitionDelay: `${220 + index * 90}ms` }}
                  >
                    <div className="relative h-52 overflow-hidden bg-[#d9e9e8]">
                      <Image
                        src={item.src}
                        alt={item.alt}
                        fill
                        sizes="(min-width: 1024px) 22vw, 50vw"
                        className="object-cover object-center transition duration-700 group-hover:scale-105"
                      />
                    </div>
                    <figcaption className="min-h-32 p-5">
                      <p className="font-serif text-2xl font-semibold text-[#073716]">{item.title}</p>
                      <p className="mt-2 text-sm leading-6 text-[#58675b]">{item.copy}</p>
                    </figcaption>
                  </figure>
                ))}
              </div>
            </div>
          </div>

          <div className="grid border-x border-b border-[#d9d3c4] md:grid-cols-3">
            {gallery.map((item, index) => (
              <div
                key={`service-proof-${item.title}`}
                className="border-b border-[#d9d3c4] bg-[#f8f4ea] px-6 py-5 text-sm font-bold text-[#0b3c1b] last:border-b-0 md:border-b-0 md:border-r md:last:border-r-0"
                data-reveal
                style={{ transitionDelay: `${index * 70}ms` }}
              >
                {item.title}
                <span className="mt-1 block font-normal leading-6 text-[#58675b]">{item.copy}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="wings" className="scroll-mt-24 overflow-hidden bg-[#f5f0e5] px-5 py-16 md:px-10 md:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div data-reveal>
              <p className="text-sm font-bold uppercase text-[#8a7116]">{copy.wingsEyebrow}</p>
              <h2 className="mt-3 font-serif text-4xl font-semibold leading-tight text-[#073716] md:text-6xl">
                {copy.wingsTitle}
              </h2>
              <div className="mt-7 space-y-5 text-lg leading-8 text-[#4f6254]">
                {copy.wingsParagraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
              <div className="mt-8 flex flex-wrap gap-3 text-sm font-bold">
                <span className="border border-[#8da18f] px-4 py-2 text-[#0b3c1b]">
                  {copy.organicDrop}
                </span>
                <span className="border border-[#b49b43] px-4 py-2 text-[#735c00]">
                  {copy.proudlyThai}
                </span>
              </div>
            </div>
            <div className="grid gap-5 md:grid-cols-2" data-reveal style={{ transitionDelay: "120ms" }}>
              <div className="relative min-h-[420px] overflow-hidden border border-[#d9d3c4] bg-[#dde9de] md:col-span-2 md:min-h-[520px]">
                <Image
                  src="/images/product-946ml.jpg"
                  alt="Coco Number Six 946 ml bottles floating in a clean premium product composition"
                  fill
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="object-cover object-center"
                />
                <div className="absolute inset-x-0 bottom-0 bg-[linear-gradient(0deg,rgba(7,55,22,0.78),rgba(7,55,22,0))] px-6 pb-6 pt-24 text-white">
                  <p className="font-serif text-3xl font-semibold">{copy.serviceExpression}</p>
                  <p className="mt-2 max-w-lg text-sm leading-6 text-[#dfece1]">
                    {copy.serviceExpressionCopy}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-14 grid gap-5 lg:grid-cols-[0.8fr_1.2fr]">
            <div className="bg-[#073716] p-8 text-white md:p-10" data-reveal>
              <p className="text-sm font-bold uppercase text-[#e1c766]">{wingsLocal.eyebrow}</p>
              <h3 className="mt-3 font-serif text-3xl font-semibold">
                {wingsLocal.title}
              </h3>
              <p className="mt-5 leading-8 text-[#d6e6d8]">
                {wingsLocal.copy}
              </p>
              <p className="mt-6 font-semibold text-[#e1c766]">
                {wingsLocal.closing}
              </p>
            </div>

            <div className="grid gap-5 md:grid-cols-2">
              <figure className="overflow-hidden border border-[#d9d3c4] bg-black" data-reveal style={{ transitionDelay: "90ms" }}>
                <video
                  className="aspect-[4/5] h-full w-full object-cover"
                  src="/media/wings-service-01.mp4"
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="metadata"
                  aria-label="Coco Number Six service video"
                />
                <figcaption className="bg-white px-5 py-4 text-sm font-semibold text-[#153321]">
                  {copy.videoCaptionOne}
                </figcaption>
              </figure>
              <figure className="overflow-hidden border border-[#d9d3c4] bg-black" data-reveal style={{ transitionDelay: "180ms" }}>
                <video
                  className="aspect-[4/5] h-full w-full object-cover"
                  src="/media/wings-service-02.mp4"
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="metadata"
                  aria-label="Coco Number Six hospitality video"
                />
                <figcaption className="bg-white px-5 py-4 text-sm font-semibold text-[#153321]">
                  {copy.videoCaptionTwo}
                </figcaption>
              </figure>
            </div>
          </div>

          <div className="mt-14 grid gap-5 md:grid-cols-2">
            {productSizes.map((product, index) => (
              <article
                key={product.size}
                className="border border-[#d9d3c4] bg-[#fbf8f0] p-7"
                data-reveal
                style={{ transitionDelay: `${index * 90}ms` }}
              >
                <p className="font-serif text-5xl font-semibold text-[#0b3c1b]">{product.size}</p>
                <h3 className="mt-4 text-xl font-bold text-[#153321]">{product.title}</h3>
                <p className="mt-3 leading-7 text-[#58675b]">{product.copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="partners" className="scroll-mt-24 bg-[#f5f0e5] px-5 py-16 md:px-10 md:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 grid gap-6 lg:grid-cols-[0.8fr_1.2fr] lg:items-end" data-reveal>
            <div>
              <p className="text-sm font-bold uppercase text-[#8a7116]">{copy.partnersEyebrow}</p>
              <h2 className="mt-3 font-serif text-4xl font-semibold text-[#073716] md:text-5xl">
                {copy.partnersTitle}
              </h2>
            </div>
            <p className="max-w-2xl text-lg leading-8 text-[#4f6254]">
              {copy.partnersCopy}
            </p>
          </div>
          <div className="grid border-y border-[#d9d3c4] lg:grid-cols-3">
            {partnerChannels.map((channel, index) => (
              <article
                key={channel.label}
                className="border-b border-[#d9d3c4] bg-[#fbf8f0] p-8 last:border-b-0 lg:border-b-0 lg:border-r lg:last:border-r-0"
                data-reveal
                style={{ transitionDelay: `${index * 90}ms` }}
              >
                <p className="text-sm font-bold uppercase text-[#8a7116]">{channel.label}</p>
                <h3 className="mt-4 font-serif text-3xl font-semibold text-[#0b3c1b]">
                  {channel.title}
                </h3>
                <p className="mt-4 leading-7 text-[#58675b]">{channel.copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="pricing" className="relative scroll-mt-24 overflow-hidden bg-[#fbf8f0] px-5 py-16 md:px-10 md:py-24">
        <div className="absolute inset-x-0 top-0 h-72 bg-[linear-gradient(180deg,#e5f3e5_0%,rgba(229,243,229,0)_100%)]" aria-hidden="true" />
        <div className="absolute right-[-8rem] top-16 h-72 w-72 rounded-full bg-[#d0b45c]/16 blur-3xl" aria-hidden="true" />
        <div className="mx-auto max-w-7xl">
          <div className="relative mb-10 flex flex-col justify-between gap-4 md:flex-row md:items-end" data-reveal>
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#8a7116]">{copy.productsEyebrow}</p>
              <h2 className="mt-2 font-serif text-4xl font-semibold text-[#073716] md:text-5xl">
                {pricing.productsTitle}
              </h2>
            </div>
            <div className="h-px flex-1 bg-[#cbd9ca] md:mb-4" />
            <p className="max-w-md text-sm leading-6 text-[#58675b]">
              {pricing.productsIntro}
            </p>
          </div>

          <div className="relative grid gap-6 lg:grid-cols-3 lg:items-stretch">
            {catalogProducts.map((product, index) => (
              <article
                key={product.volume}
                className={`group relative overflow-hidden rounded-[1.35rem] bg-white shadow-[0_18px_45px_rgba(7,55,22,0.08)] ring-1 ring-[#dfe6dc] transition duration-500 hover:-translate-y-1 hover:shadow-[0_26px_70px_rgba(7,55,22,0.14)] ${
                  index === 1 ? "lg:-mt-5 lg:mb-5 ring-2 ring-[#d0b45c]/60" : ""
                }`}
                data-reveal
                style={{ transitionDelay: `${index * 90}ms` }}
              >
                {index === 1 ? (
                  <div className="absolute left-0 right-0 top-0 z-10 bg-[#d0b45c] py-2 text-center text-xs font-black uppercase tracking-[0.22em] text-[#073716]">
                    {copy.mostRequested}
                  </div>
                ) : null}
                <div className={`relative flex h-72 items-center justify-center overflow-hidden bg-[radial-gradient(circle_at_center,#ffffff_0%,#eef8ef_48%,#dbeedd_100%)] p-6 sm:h-80 ${
                  index === 1 ? "pt-12" : "border-t-4 border-[#d0b45c]"
                }`}>
                  <div className="absolute inset-x-10 bottom-8 h-16 rounded-full bg-[#0b3c1b]/12 blur-2xl transition duration-500 group-hover:bg-[#0b3c1b]/18" aria-hidden="true" />
                  <span className="absolute right-4 top-4 z-10 rounded-full bg-[#0b3c1b] px-4 py-1 text-xs font-bold uppercase tracking-[0.16em] text-white shadow-sm">
                    {product.badge}
                  </span>
                  {product.volume === "246" ? (
                    <span className="absolute bottom-5 left-5 z-10 rounded-full border border-[#d0b45c]/70 bg-[#fbf8f0]/92 px-4 py-2 text-[11px] font-black uppercase tracking-[0.14em] text-[#735c00] shadow-[0_10px_24px_rgba(7,55,22,0.12)] backdrop-blur">
                      {copy.miniSize}
                    </span>
                  ) : null}
                  <Image
                    src={product.image}
                    alt={`${product.volume} ml Coco Number SiX bottle`}
                    width={420}
                    height={560}
                    sizes="(min-width: 1024px) 28vw, 88vw"
                    className="relative h-full w-auto max-w-full object-contain drop-shadow-[0_18px_24px_rgba(7,55,22,0.18)] transition duration-500 group-hover:scale-[1.035]"
                  />
                </div>

                <div className="p-7">
                  <div className="flex items-end justify-between gap-3">
                    <div className="flex items-end gap-3">
                    <p className="font-serif text-5xl font-semibold leading-none text-[#073716]">
                      {product.volume}
                    </p>
                    <p className="pb-1 text-sm font-bold uppercase tracking-[0.12em] text-[#58675b]">
                      {copy.millilitres}
                    </p>
                    </div>
                    <div className="flex flex-wrap justify-end gap-2">
                      {product.volume === "246" ? (
                        <p className="rounded-full bg-[#0b3c1b] px-3 py-1 text-xs font-black uppercase tracking-[0.1em] text-white">
                          {copy.miniSize}
                        </p>
                      ) : null}
                      <p className="rounded-full bg-[#f3edcf] px-3 py-1 text-xs font-bold text-[#735c00]">
                        {product.pack}
                      </p>
                    </div>
                  </div>
                  <h3 className="mt-5 text-base font-bold text-[#153321]">{product.title}</h3>
                  <p className="mt-1 text-sm font-medium tracking-wide text-[#58675b]">{product.subtitle}</p>

                  <ul className="mt-5 space-y-2">
                    {product.details.map((detail) => (
                      <li key={detail} className="flex gap-2 text-sm leading-6 text-[#58675b]">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#3faa68]" />
                        {detail}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-6 rounded-xl bg-[#d3f0d7] p-4">
                    <p className="text-xs font-bold uppercase tracking-[0.12em] text-[#0b3c1b]">{copy.bestFor}</p>
                    <p className="mt-1 text-sm font-bold text-[#153321]">{product.bestFor}</p>
                  </div>

                  <div className="mt-6 flex items-end justify-between rounded-2xl bg-[#f8faf4] px-5 py-4">
                    <p className="text-sm font-bold text-[#58675b]">{pricing.priceLabel}</p>
                    <p className="font-serif text-4xl font-semibold text-[#073716]">
                      <span className="mr-2 text-lg text-[#a38300]">฿</span>
                      {product.price}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-16" data-reveal>
            <div className="text-center">
              <h2 className="font-serif text-4xl font-semibold text-[#073716] md:text-5xl">
                {pricing.b2bTitle}
              </h2>
              <p className="mt-3 text-[#58675b]">
                {pricing.b2bIntro}
              </p>
            </div>

            <div className="mt-8 grid gap-5 lg:grid-cols-3">
              {b2bCards.map((card, index) => (
                <article
                  key={card.title}
                  className="rounded-2xl border border-[#d4e2d4] bg-white p-7 shadow-sm"
                  data-reveal
                  style={{ transitionDelay: `${index * 90}ms` }}
                >
                  <p className="text-3xl" aria-hidden="true">{card.icon}</p>
                  <h3 className="mt-6 font-serif text-2xl font-semibold text-[#073716]">{card.title}</h3>
                  <p className="mt-3 leading-7 text-[#58675b] md:min-h-24">{card.copy}</p>
                  <div className="mt-4 rounded-full bg-[#d3f0d7] px-4 py-2 text-sm font-bold text-[#0b3c1b]">
                    {card.tag}
                  </div>
                </article>
              ))}
            </div>

            <div className="mt-8 grid gap-5 lg:grid-cols-3">
              {b2bTiers.map((tier, index) => (
                <article
                  key={tier.package}
                  className={`relative overflow-hidden rounded-2xl border bg-white p-7 shadow-sm transition duration-500 hover:-translate-y-1 hover:shadow-[0_22px_55px_rgba(7,55,22,0.12)] ${
                    index === 2 ? "border-[#d0b45c] ring-2 ring-[#d0b45c]/30" : "border-[#d4e2d4]"
                  }`}
                  data-reveal
                  style={{ transitionDelay: `${index * 90}ms` }}
                >
                  {index === 2 ? (
                    <div className="absolute right-0 top-0 rounded-bl-2xl bg-[#d0b45c] px-4 py-2 text-xs font-black uppercase tracking-[0.14em] text-[#073716]">
                      {copy.bestValue}
                    </div>
                  ) : null}
                  <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#8a7116]">
                    {copy.b2bPackage}
                  </p>
                  <h3 className="mt-3 font-serif text-3xl font-semibold text-[#073716]">
                    {tier.package}
                  </h3>
                  <div className="mt-6 rounded-2xl bg-[#f4f6f0] p-5">
                    <p className="text-xs font-bold uppercase tracking-[0.14em] text-[#58675b]">
                      {pricing.volumeLabel}
                    </p>
                    <p className="mt-1 text-2xl font-bold text-[#153321]">{tier.volume}</p>
                  </div>
                  <div className="mt-5 grid gap-4">
                    <div className="flex items-center justify-between border-b border-[#dfe6dc] pb-4">
                      <p className="text-sm font-bold text-[#58675b]">{pricing.discountLabel}</p>
                      <p className="font-serif text-2xl font-semibold text-[#a38300]">{tier.discount}</p>
                    </div>
                    <div>
                      <p className="text-sm font-bold text-[#58675b]">{pricing.serviceLabel}</p>
                      <p className="mt-2 leading-7 text-[#153321] md:min-h-12">{tier.service}</p>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            <div className="mt-8 overflow-hidden rounded-2xl bg-[#073716] shadow-[0_18px_45px_rgba(7,55,22,0.12)]">
              <div className="grid gap-6 p-7 text-white lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
                <div>
                  <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#e1c766]">
                    {copy.customQuote}
                  </p>
                  <h3 className="mt-3 font-serif text-3xl font-semibold">
                    {pricing.customTitle}
                  </h3>
                  <p className="mt-4 leading-7 text-[#d6e6d8]">
                    {pricing.customCopy}
                  </p>
                </div>
                <div className="grid gap-3 sm:grid-cols-2">
                  {copy.quoteItems.map((item) => (
                    <div key={item} className="rounded-full border border-white/14 bg-white/10 px-4 py-3 text-sm font-bold text-[#f4f6f0]">
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#fbf8f0] px-5 py-16 md:px-10 md:py-24">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1fr_0.8fr] lg:items-center">
          <div data-reveal>
            <p className="text-sm font-bold uppercase text-[#8a7116]">PYP WorldGreen</p>
            <h2 className="mt-3 font-serif text-4xl font-semibold text-[#073716] md:text-5xl">
              {copy.organicTitle}
            </h2>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-[#4f6254]">
              {copy.organicCopy}
            </p>
            <div className="mt-10 grid gap-5 md:grid-cols-3">
              {copy.values.map((value, index) => (
                <div key={value} className="border-t border-[#d9dfd6] pt-5">
                  <p className="font-serif text-4xl font-semibold text-[#d0b45c]">0{index + 1}</p>
                  <p className="mt-3 text-lg font-bold text-[#103b1d]">{value}</p>
                </div>
              ))}
            </div>
          </div>
          <blockquote className="border-l border-[#a78b2c] bg-[#f5f0e5] p-8 md:p-10" data-reveal style={{ transitionDelay: "120ms" }}>
            <p className="font-serif text-3xl leading-snug text-[#0b3c1b]">
              &ldquo;{copy.promiseQuote}&rdquo;
            </p>
            <footer className="mt-6 text-sm font-bold uppercase text-[#8a7116]">{copy.promiseLabel}</footer>
          </blockquote>
        </div>
      </section>

      <section id="contact" className="scroll-mt-24 bg-[#f5f0e5] px-5 py-16 md:px-10 md:py-24">
        <div className="mx-auto grid max-w-7xl overflow-hidden border border-[#d9d3c4] bg-[#fbf8f0] lg:grid-cols-[0.9fr_1.1fr]">
          <div className="p-8 md:p-12 lg:p-16" data-reveal>
            <p className="text-sm font-bold uppercase text-[#8a7116]">{copy.contactEyebrow}</p>
            <h2 className="mt-3 font-serif text-4xl font-semibold text-[#073716] md:text-5xl">
              {copy.contactTitle}
            </h2>
            <p className="mt-6 text-lg leading-8 text-[#4f6254]">
              {copy.contactCopy}
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                className="inline-flex min-h-12 items-center justify-center rounded-full bg-[#0b3c1b] px-7 text-sm font-bold text-white transition hover:bg-[#15552a]"
                href={salesContact.lineHref}
                target="_blank"
                rel="noreferrer"
              >
                {copy.addLine}
              </a>
              <a
                className="inline-flex min-h-12 items-center justify-center rounded-full border border-[#a78b2c] px-7 text-sm font-bold text-[#735c00] transition hover:bg-[#fbfaf7]"
                href={salesContact.emailHref}
              >
                {copy.requestCatalogue}
              </a>
            </div>
            <div className="mt-8 grid gap-3">
              {contactMethods.map((method) => (
                <a
                  key={method.label}
                  className="group grid gap-3 border border-[#dfd5bd] bg-white/72 p-4 transition hover:border-[#a78b2c] hover:bg-white sm:grid-cols-[5.5rem_minmax(0,1fr)_auto] sm:items-center"
                  href={method.href}
                  target={method.href.startsWith("line:") ? "_blank" : undefined}
                  rel={method.href.startsWith("line:") ? "noreferrer" : undefined}
                >
                  <span className="text-xs font-bold uppercase tracking-[0.22em] text-[#8a7116]">
                    {method.label}
                  </span>
                  <span>
                    <span className="block text-base font-bold text-[#073716]">{method.title}</span>
                    <span className="mt-1 block text-sm leading-6 text-[#5a6c5e]">{method.copy}</span>
                  </span>
                  <span className="text-sm font-bold text-[#0b3c1b] transition group-hover:text-[#8a7116]">
                    {method.value}
                  </span>
                </a>
              ))}
            </div>
          </div>
          <div className="flex items-center justify-center bg-[#ecf6df] p-4 sm:p-6 md:p-10" data-reveal style={{ transitionDelay: "120ms" }}>
            <Image
              src="/images/pyp-contact-card.png"
              alt="PYP World Green contact card with phone numbers and QR codes for Coco Number SiX and NumberSiX Official"
              width={1762}
              height={2500}
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="h-auto w-full max-w-[640px] shadow-2xl shadow-[#0b3c1b]/12"
            />
          </div>
        </div>
      </section>

      <footer className="bg-[#073716] px-5 py-10 text-white md:px-10 md:py-12">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 md:grid-cols-[minmax(0,1fr)_auto] md:items-end">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.28em] text-[#58c78d]">
                {copy.footerTagline}
              </p>
              <h2 className="mt-4 max-w-3xl font-serif text-3xl font-semibold leading-tight md:text-4xl">
                PYP World Green Co., Ltd.
              </h2>
              <p className="mt-4 max-w-2xl text-base leading-7 text-[#c9d9cc]">
                {copy.footerCopy}
              </p>
            </div>
            <div className="flex flex-wrap gap-2 md:max-w-[28rem] md:justify-end">
              {supportedLanguages.map((language) => (
                <span key={language.code} className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/8 px-3.5 py-2 text-sm font-bold text-[#e1c766]">
                  <span aria-hidden="true">{language.flag}</span>
                  {language.code}
                </span>
              ))}
            </div>
          </div>

          <div className="mt-9 flex flex-col items-start justify-between gap-4 border-t border-white/12 pt-5 text-sm text-[#c9d9cc] md:flex-row md:items-center">
            <p>{copy.copyright}</p>
            <div className="flex flex-wrap gap-x-5 gap-y-2 font-semibold text-[#e1c766] md:justify-end">
              {footerLinks.map((link) => (
                <a key={link.href} href={link.href}>{link.label}</a>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
