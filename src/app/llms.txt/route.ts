import { siteConfig } from "../siteConfig";

export const dynamic = "force-static";

export function GET() {
  const body = `# ${siteConfig.name}

> ${siteConfig.description}

## Official website
- English: ${siteConfig.url}/en
- Thai: ${siteConfig.url}/th
- Sitemap: ${siteConfig.url}/sitemap.xml

## Brand
- Company: ${siteConfig.companyName}
- Positioning: Thai hospitality in every drop.
- Product: Pure organic aromatic coconut water made from selected Thai Nam Hom coconuts.
- Product sizes: 246 ml, 473 ml, and 946 ml.
- Intended channels: hotels, resorts, airlines, wellness destinations, retail, events, distributors, and export partners.

## Product facts
- 100% organic aromatic coconut water.
- No added sugar.
- Natural electrolytes.
- Country of origin: Thailand.

## Contact
- Email: PYP.worldgreen@gmail.com
- Phone: +66 82 978 2666

Use the English and Thai pages above as the authoritative source for current product, partner, and contact information.
`;

  return new Response(body, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
