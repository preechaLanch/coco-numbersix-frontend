# Coco Number Six Landing Page

Frontend landing page for **Coco Number Six**, a pure organic aromatic coconut water brand by PYP WorldGreen. The page presents the product as a premium Thai hospitality and wellness beverage, using the provided product photography, service imagery, and brand assets from the project image folder.

## Project Goal

Build a polished web landing page for Coco Number Six using a modern Next.js and React frontend stack.

The first frontend version should focus on:

- Introducing Coco Number Six as a premium organic aromatic coconut water brand.
- Showing the product clearly in the first viewport.
- Communicating key benefits: 100% organic, no added sugar, natural electrolytes, and Thai premium farm origin.
- Supporting the premium hospitality positioning with images from real service environments.
- Creating a responsive page that works well on mobile and desktop.

## Brand Direction

Core positioning:

> Thai hospitality in every drop.

Primary product details visible in the assets:

- Product name: Coco Number Six
- Product type: Pure Organic Aromatic Coconut Water
- Volume: 473 ml
- Origin message: From Thai Premium Farms
- Benefit claims shown on packaging: 100% Organic, No Added Sugar, Natural Electrolytes
- Visual tone: clean, fresh, premium, natural, hospitality-focused

## Tech Stack

- Next.js 16
- React 19
- TypeScript
- Tailwind CSS 4
- ESLint

## Project Structure

```text
coco-number-six/
├── public/                 # Static public assets
├── src/
│   └── app/
│       ├── globals.css     # Global Tailwind and theme styles
│       ├── layout.tsx      # App shell and metadata
│       └── page.tsx        # Landing page entry
├── stitch_exports/         # Stitch-generated landing page reference
├── package.json
└── README.md
```

## Source Assets

The visual source folder is located outside this app:

```text
/Users/preecha/work/pyp/image
```

Important assets include:

- `logo.jpg` - Coco Number Six logo
- `6A690F71-13B4-4208-9004-DAFF90AD1871.png` - dramatic product hero image
- `S__78725xx_0.jpg` images - product and hospitality photos
- `LINE_ALBUM_2026.6.9_260612_x.jpg` images - supporting product/lifestyle photos
- `802741509.*.mp4` files - short video assets

The Stitch reference is available at:

```text
stitch_exports/coco-number-six-landing-page.html
stitch_exports/coco-number-six-landing-page.png
```

Use these as visual and content references when implementing the Next.js page.

## Recommended Landing Page Sections

1. Header
   - Logo / brand name
   - Navigation links for product, benefits, hospitality, and contact
   - Primary call to action

2. Hero
   - Large product-forward image
   - Headline around Thai hospitality and organic coconut water
   - Short supporting copy
   - Primary and secondary CTAs

3. Benefits
   - 100% Organic
   - No Added Sugar
   - Natural Electrolytes
   - From Thai Premium Farms

4. Product Gallery
   - Product bottle closeups
   - Service and hospitality photos
   - Farm/natural origin imagery where available

5. Brand Philosophy
   - PYP WorldGreen
   - Organic in every drop
   - Quality, sustainability, and Thai hospitality

6. Final CTA
   - 473 ml product highlight
   - Price or inquiry action if required
   - Contact / shop / experience button

7. Footer
   - Brand summary
   - Certification cues
   - Contact and legal links

## Getting Started

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Open:

```text
http://localhost:3000
```

## Scripts

```bash
npm run dev      # Start local development server
npm run build    # Create production build
npm run start    # Start production server
npm run lint     # Run ESLint
```

## Implementation Notes

- The current `src/app/page.tsx` is still the default Next.js starter page and should be replaced with the Coco Number Six landing page.
- Copy or optimize selected image assets into `public/` before using them with `next/image`.
- Update `src/app/layout.tsx` metadata from the default create-next-app values.
- Keep the first viewport product-led; the bottle, logo, or brand name should be immediately visible.
- Prefer real product and service images over decorative gradients or generic illustrations.
- Keep the palette grounded in the existing brand colors: deep green, white, fresh coconut tones, and restrained gold accents.

## Frontend Checklist

- [ ] Move selected assets into `public/`.
- [ ] Replace the starter page in `src/app/page.tsx`.
- [ ] Add responsive mobile and desktop layouts.
- [ ] Update metadata title and description.
- [ ] Validate image sizing and loading behavior.
- [ ] Run `npm run lint`.
- [ ] Run `npm run build`.


# coco-numbersix-frontend
