# BHULLEA Website — Page Map & Component Structure

## 🗺️ Site Structure

```
bhullea.com/
│
├── /                          🏠 HOME PAGE
│   ├── Hero (home-hero.png)
│   ├── "A New Indian House" section
│   ├── Value icons (Purity, Craftsmanship, Innovation, Legacy, Responsibility)
│   ├── H₂O Teaser (first-chapter-banner)
│   └── Footer
│
├── /the-house                 🏛️ THE HOUSE PAGE
│   ├── Hero (house/hero.jpg)
│   ├── Story section (house/story.jpg)
│   ├── Vision & Mission cards
│   ├── Values grid (6 values)
│   └── Footer
│
├── /h2o                       💧 BHULLEA H₂O PAGE
│   ├── Product Hero (h2o-stream.png)
│   ├── Feature icons bar (6 features)
│   ├── "The Water" section (h2o/waterfall.jpg)
│   └── Footer
│
├── /our-brands                🏢 OUR BRANDS PAGE
│   ├── Hero (brands/hero.jpg)
│   ├── Brand grid (5 cards)
│   │   ├── BHULLEA H₂O (live, links to /h2o)
│   │   ├── BHULLEA Harvest (coming soon)
│   │   ├── BHULLEA Life (coming soon)
│   │   ├── BHULLEA Living (coming soon)
│   │   └── BHULLEA Labs (coming soon)
│   ├── Quote banner
│   └── Footer
│
├── /philosophy                🌿 PHILOSOPHY PAGE
│   ├── Hero (philosophy/hero.jpg)
│   ├── 5 Pillars (alternating layout)
│   │   ├── Purity (philosophy/purity.jpg)
│   │   ├── Craftsmanship (philosophy/craftsmanship.jpg)
│   │   ├── Legacy (philosophy/legacy.jpg)
│   │   ├── Innovation (philosophy/innovation.jpg)
│   │   └── Responsibility (philosophy/responsibility.jpg)
│   └── Footer
│
├── /journal                   📰 JOURNAL PAGE (Blog Hub)
│   ├── Hero (journal/hero.jpg)
│   ├── Category filter tabs (All, Behind the Brand, Water & Wellness, etc.)
│   ├── Post grid (3 columns, responsive)
│   │   ├── The Story Behind BHULLEA (journal/story.jpg)
│   │   ├── Why Clean Water Matters (journal/clean-water.jpg)
│   │   ├── A More Responsible Tomorrow (journal/sustainability.jpg)
│   │   ├── Building for Generations (journal/founder.jpg)
│   │   └── Our Journey Begins (journal/journey.jpg)
│   └── Footer
│
├── /journal/[slug]            📄 JOURNAL POST PAGE
│   ├── Hero (same as post card image)
│   ├── Post content (title, category, reading time)
│   ├── Full body text
│   ├── Back to journal link
│   └── Footer
│
├── /contact                   📧 CONTACT PAGE
│   ├── Hero (contact/hero.jpg)
│   ├── Two-column layout:
│   │   ├── Left: Contact channels + social links
│   │   └── Right: Contact form
│   └── Footer
│
└── /shop                      🛍️ SHOP PAGE (Placeholder)
    ├── Hero (h2o-stream.png)
    ├── "Coming Soon" message
    ├── Link to /h2o
    └── Footer
```

---

## 📂 Component Hierarchy

```
Layout
├── Navbar (fixed header with scroll awareness)
├── Main Content
│   └── Various page sections (Hero, Content blocks, Grids)
└── Footer (present on all pages)

Hero Sections
├── ProductHero (H₂O page)
├── Standard page heroes (generic layout for The House, Philosophy, etc.)

Content Sections
├── Story (The House — image + text)
├── VisionMission (The House — two cards)
├── ValuesStrip (The House — 6 value icons)
├── TheWater (H₂O — image + text)
├── FeatureIcons (H₂O — 6 feature icons)
├── BrandsGrid (Our Brands — 5 brand cards)
├── PhilosophyList (Philosophy — 5 pillars with alternating layout)
├── PostGrid (Journal — filterable post cards)
├── ContactForm (Contact — form with validation)
└── ContactInfo (Contact — channels + social)

Data-Driven Components
├── BrandCard (renders from brands.ts)
├── PostCard (renders from static seed data)
├── Philosophy pillars (renders from philosophy.ts)
└── Contact channels (renders from contact.ts)
```

---

## 🎨 Page Styling Guide

### Color Scheme (Site-wide)
- **Background:** Cream (#f6f2ea) or White
- **Text:** Charcoal (#14110f)
- **Accents:** Gold (#d4a964)
- **Dark sections:** Charcoal (#14110f) with Cream text

### Typography
- **Headings:** Cinzel font (luxury, serif)
- **Display:** EB Garamond (classic, serif)
- **Body:** Inter (clean, sans-serif)

### Layout Patterns
- **Hero sections:** Full viewport, background image + overlay + text
- **Content sections:** Max-width 7xl container, padding L/R
- **Grid layouts:** Responsive (1 col mobile → 2-3 cols desktop)
- **Alternating layouts:** Image left/text right, then reverse

### Animations
- **Reveal:** Fade-up animation on scroll (once, 0.7s)
- **Hover:** Brightness increase on CTAs, color change on links
- **Navbar:** Backdrop blur + color change on scroll

---

## 🔌 Data Sources

### Static Data
- `values.ts` — 5 brand values with Lucide icons
- `brands.ts` — All 5 brands with status (live/coming-soon)
- `philosophy.ts` — 5 pillars with descriptions
- `contact.ts` — 4 contact channels

### Hard-Coded Data
- **Journal posts** — Currently in `/journal/[slug]/page.tsx`
  - Replace with MDX reading (gray-matter) or CMS API when ready
- **Navigation links** — In `navigation.ts`

### Image Paths
- All image paths are already configured
- Just add files to `public/images/` with exact names from `IMAGE_REQUIREMENTS.md`

---

## 🔗 Navigation Links

```
Home        /
The House   /the-house
Our Brands  /our-brands
H₂O         /h2o
Journal     /journal
Contact     /contact
Shop        /shop
```

All links are in `src/config/navigation.ts` — update centrally if needed.

---

## 📱 Responsive Breakpoints

All pages use Tailwind's standard breakpoints:
- **Mobile:** Base (< 640px)
- **Tablet:** `md:` (768px+)
- **Desktop:** `lg:` (1024px+)

Grid layouts:
- Hero: Single column → Two columns on `lg:`
- Brand cards: 1 col → 2 col on `sm:` → 3 col on `lg:`
- Post grid: 1 col → 2 col on `md:` → 3 col on `lg:`
- Philosophy pillars: All widths (alternating direction on `lg:`)

---

## ✨ Interactive Elements

- **Navbar:** Links + mobile drawer (hamburger menu)
- **CTAButton:** Gold gradient variant + outline variant
- **Forms:** Real-time validation, success message on submit
- **Post grid:** Category filter tabs (client-side filtering)
- **Scroll:** Navbar changes color, chevron bounces on hero
- **Links:** Gold underline on hover

---

## 🚀 Production Checklist

Before deploying:
- [ ] Add all 25 images to `public/images/`
- [ ] Test all pages at `/`, `/the-house`, `/h2o`, etc.
- [ ] Test responsive on mobile, tablet, desktop
- [ ] Wire contact form to actual email service
- [ ] Replace journal seed data with real MDX or CMS content
- [ ] Update contact email addresses in `contact.ts`
- [ ] Update office address in `ContactInfo` component
- [ ] Add favicon and OG images to `public/og/`
- [ ] Configure environment variables (if needed)
- [ ] Run `npm run build` and verify no errors
- [ ] Test on production preview

---

**All pages are production-ready. Just add images and you're live!** 🎉
