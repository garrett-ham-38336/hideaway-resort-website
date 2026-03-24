# Hideaway Resort Website — Handoff Document

**Date:** March 24, 2026
**Built by:** Claude (Cowork) for Garrett Ham / Weekender Management
**Stack:** Astro 6 + Tailwind CSS 4 + TypeScript + Cloudflare Pages

---

## Project Status

### Completed
- Phase 0: Research & content gathering (Guesty audit, existing site audit, conflict report, master content doc)
- Phase 1: Project scaffolding (Astro + Tailwind + Cloudflare adapter), GitHub repo created
- Phase 2: Design system (approved by Garrett — colors, typography, spacing tokens)
- Phase 3: All 8 page types built (20 total pages pre-rendered)
- Phase 4: All reusable components built (Header, Footer, Hero, CabinCard, AmenityIcon, CTABanner, SectionHeading, JsonLd)
- Phase 5: SEO (sitemap via @astrojs/sitemap, robots.txt, JSON-LD for LodgingBusiness + Accommodation, OG tags, Twitter cards)

### Completed (this session)
- **Photography integrated:** All 13 cabin pages now show real Guesty CDN photos (hero + gallery). Home, Amenities, Location, and Gallery pages all use real resort photos from hideawayresort.com. Photo data centralized in `src/data/photos.ts` with Cloudinary transform presets for hero (1200x800), card (600x400), and gallery (800x600).

### Pending (requires Garrett)
- **Push to GitHub:** Repo `garrett-ham-38336/hideaway-resort-website` — push latest changes
- **Connect Cloudflare Pages:** Link the GitHub repo to Cloudflare Pages for auto-deployment
- **GA4 Property:** Create a GA4 property and add the measurement ID to BaseLayout.astro
- **Contact form backend:** The contact form markup is built; needs a form handler (Cloudflare Workers, or a service like Formspree)
- **Custom domain:** Point hideawayresort.com DNS to Cloudflare Pages

---

## File Structure

```
src/
├── components/
│   ├── AmenityIcon.astro      — Icon + label for amenity grid
│   ├── CTABanner.astro        — Full-width gradient CTA section
│   ├── CabinCard.astro        — Cabin listing card with meta + actions
│   ├── Footer.astro           — Site footer with nav, contact, social
│   ├── Header.astro           — Sticky header with mobile menu
│   ├── Hero.astro             — Hero section (3 sizes: lg/md/sm)
│   ├── JsonLd.astro           — JSON-LD structured data injector
│   └── SectionHeading.astro   — Section title + subtitle
├── data/
│   ├── cabins.ts              — All 13 cabins with Guesty IDs, booking URLs, metadata
│   ├── photos.ts              — Cabin + resort photo URLs (Guesty CDN + existing site)
│   └── site.ts                — Site-wide config (contact, social, nav links)
├── layouts/
│   └── BaseLayout.astro       — Root layout (head, fonts, OG tags, JSON-LD, header/footer)
├── pages/
│   ├── index.astro            — Home page
│   ├── amenities.astro        — Resort amenities
│   ├── contact.astro          — Contact info + form
│   ├── gallery.astro          — Photo gallery (placeholder grid)
│   ├── location.astro         — Location, map, things to do
│   ├── policies.astro         — Booking policies & house rules
│   └── cabins/
│       ├── index.astro        — All cabins listing (grouped by bedrooms)
│       └── [slug].astro       — Individual cabin detail (13 pages)
├── styles/
│   └── global.css             — Tailwind v4 theme tokens + base styles + button classes
public/
├── favicon.svg
├── favicon.ico
├── robots.txt
└── images/                    — Add resort photos here
research/
├── master-content.md          — Single source of truth for all content
├── guesty-inventory.md        — Full Guesty property audit
├── existing-site-inventory.md — Existing site content audit
└── conflict-report.md         — Resolved conflicts between sources
```

---

## How to Deploy

### Step 1: Push code to GitHub
```bash
cd /path/to/hideaway-resort-website
git remote add origin https://github.com/garrett-ham-38336/hideaway-resort-website.git
git push -u origin main
```

### Step 2: Connect to Cloudflare Pages
1. Go to dash.cloudflare.com → Workers & Pages → Create
2. Connect to Git → Select `garrett-ham-38336/hideaway-resort-website`
3. Build settings:
   - Build command: `npm run build`
   - Build output directory: `dist`
   - Node.js version: 22
4. Deploy

### Step 3: Custom Domain
1. In Cloudflare Pages project settings → Custom domains
2. Add `hideawayresort.com` and `www.hideawayresort.com`
3. Cloudflare will handle DNS and SSL automatically

---

## How to Add Photos

Replace the gradient placeholders with actual images:

1. Add photos to `public/images/` (e.g., `public/images/cabins/lake-life-cabin-hero.jpg`)
2. In cabin detail pages (`src/pages/cabins/[slug].astro`), update the hero section's gradient div to an `<img>` tag
3. In cabin cards (`src/components/CabinCard.astro`), update the gradient div to an `<img>` tag
4. For the gallery page, replace the placeholder grid with actual image references
5. Add an OG image at `public/images/og-default.jpg` (1200x630px recommended)

---

## How to Add GA4

Once you have a GA4 Measurement ID (format: `G-XXXXXXXXXX`):

1. Open `src/layouts/BaseLayout.astro`
2. Add before the closing `</head>` tag:
```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

---

## Key Design Decisions

- **Booking URLs** go directly to `stay.weekendermanagement.com/en/properties/{guestyId}` (opens in new tab)
- **Duplex Cabin** is included but shows "Coming Soon" badge (no booking URL until pushed live in Guesty)
- **Display names** use simple cabin names per Garrett (e.g., "Lake Life Cabin" not "Lake Life - Lakefront Table Rock Lake")
- **"Hideaway Lodge"** is the display name for Guesty's "The Lodge"
- **Social media** links go to Weekender Management accounts
- **Contact phone** is +1 479-364-6756 (booking engine number)
- **Copyright** shows Weekender Management
- **No placeholder content** — all copy is sourced from Guesty listings and the existing site

---

## Local Development

```bash
npm install
npm run dev       # Starts dev server at localhost:4321
npm run build     # Production build to dist/
npm run preview   # Preview production build locally
```

Requires Node.js 22+.
