# 🎨 BHULLEA Website — Visual Overview & Component Map

## 📄 Page Layouts

### Home Page `/`
```
┌─────────────────────────────────────┐
│         NAVBAR (Fixed)              │
├─────────────────────────────────────┤
│                                     │
│         HERO SECTION                │
│    (home-hero.png background)       │
│    - BHULLEA wordmark               │
│    - Tagline                        │
│    - CTA button → /the-house        │
│                                     │
├─────────────────────────────────────┤
│   A NEW INDIAN HOUSE SECTION        │
│   (Cream background)                │
│    - Heading                        │
│    - Description                    │
│    - 5 Value icons (grid)           │
│                                     │
├─────────────────────────────────────┤
│   FIRST CHAPTER BANNER              │
│   (H₂O teaser - 2 column)           │
│    - Image left                     │
│    - Text right                     │
│    - CTA → /h2o                     │
│                                     │
├─────────────────────────────────────┤
│         FOOTER                      │
└─────────────────────────────────────┘
```

### The House Page `/the-house`
```
┌─────────────────────────────────────┐
│         NAVBAR (Fixed)              │
├─────────────────────────────────────┤
│                                     │
│   HERO (house/hero.jpg)             │
│   - THE HOUSE OF BHULLEA title      │
│   - Tagline                         │
│                                     │
├─────────────────────────────────────┤
│   STORY SECTION (Cream bg)          │
│   ┌──────────────┬──────────────┐   │
│   │ TEXT + STORY │  IMAGE       │   │
│   │              │  (4:5 ratio) │   │
│   └──────────────┴──────────────┘   │
│                                     │
├─────────────────────────────────────┤
│   VISION & MISSION (Cream bg)       │
│   ┌──────────────┬──────────────┐   │
│   │ Vision Card  │ Mission Card │   │
│   └──────────────┴──────────────┘   │
│                                     │
├─────────────────────────────────────┤
│   VALUES STRIP (Charcoal bg)        │
│   [Integrity] [Quality] [Purity]    │
│   [Innovation] [Legacy] [Respon...]  │
│                                     │
├─────────────────────────────────────┤
│         FOOTER                      │
└─────────────────────────────────────┘
```

### H₂O Product Page `/h2o`
```
┌─────────────────────────────────────┐
│         NAVBAR (Fixed)              │
├─────────────────────────────────────┤
│                                     │
│   PRODUCT HERO (h2o-stream.png)     │
│   - BHULLEA H₂O title               │
│   - Tagline                         │
│   - CTA buttons                     │
│   - Feature anchors at bottom       │
│                                     │
├─────────────────────────────────────┤
│   FEATURE ICONS BAR (Charcoal)      │
│   [Water] [Source] [Process]        │
│   [Quality] [Bottle] [Where to Buy] │
│                                     │
├─────────────────────────────────────┤
│   THE WATER SECTION (Cream bg)      │
│   ┌──────────────┬──────────────┐   │
│   │  IMAGE       │ TEXT + CTA   │   │
│   │  (4:3 ratio) │              │   │
│   └──────────────┴──────────────┘   │
│                                     │
├─────────────────────────────────────┤
│         FOOTER                      │
└─────────────────────────────────────┘
```

### Our Brands Page `/our-brands`
```
┌─────────────────────────────────────┐
│         NAVBAR (Fixed)              │
├─────────────────────────────────────┤
│                                     │
│   HERO (brands/hero.jpg)            │
│   - OUR BRANDS title                │
│   - Tagline                         │
│                                     │
├─────────────────────────────────────┤
│   BRANDS GRID (Cream bg)            │
│   ┌─────────┬─────────┬─────────┐   │
│   │ BHULLEA │ Harvest │ Life    │   │
│   │  H₂O    │ (C.Soon)│ (C.Soon)│   │
│   ├─────────┼─────────┼─────────┤   │
│   │ Living  │  Labs   │         │   │
│   │(C.Soon) │(C.Soon) │         │   │
│   └─────────┴─────────┴─────────┘   │
│                                     │
├─────────────────────────────────────┤
│   QUOTE BANNER (Charcoal)           │
│   "Different brands. A shared       │
│    purpose. A brighter tomorrow."   │
│                                     │
├─────────────────────────────────────┤
│         FOOTER                      │
└─────────────────────────────────────┘
```

### Philosophy Page `/philosophy`
```
┌─────────────────────────────────────┐
│         NAVBAR (Fixed)              │
├─────────────────────────────────────┤
│                                     │
│   HERO (philosophy/hero.jpg)        │
│   - OUR PHILOSOPHY title            │
│   - Tagline                         │
│                                     │
├─────────────────────────────────────┤
│   PILLARS (Cream bg, alternating)   │
│                                     │
│   01 PURITY                         │
│   ┌──────────────┬──────────────┐   │
│   │ Icon + Text  │  IMAGE       │   │
│   └──────────────┴──────────────┘   │
│                                     │
│   02 CRAFTSMANSHIP                  │
│   ┌──────────────┬──────────────┐   │
│   │  IMAGE       │ Icon + Text  │   │ (reversed)
│   └──────────────┴──────────────┘   │
│                                     │
│   [... 03-05 continue ...]          │
│                                     │
├─────────────────────────────────────┤
│         FOOTER                      │
└─────────────────────────────────────┘
```

### Journal Page `/journal`
```
┌─────────────────────────────────────┐
│         NAVBAR (Fixed)              │
├─────────────────────────────────────┤
│                                     │
│   HERO (journal/hero.jpg)           │
│   - JOURNAL title                   │
│   - Tagline                         │
│                                     │
├─────────────────────────────────────┤
│   CATEGORY FILTER TABS (Cream bg)   │
│   [All] [Behind the Brand] [Water]  │
│   [Wellness] [Sustainability] [...]  │
│                                     │
├─────────────────────────────────────┤
│   POST GRID (Responsive)            │
│   ┌────────┬────────┬────────┐      │
│   │ Post 1 │ Post 2 │ Post 3 │      │
│   │ Card   │ Card   │ Card   │      │
│   ├────────┼────────┼────────┤      │
│   │ Post 4 │ Post 5 │ Space  │      │
│   │ Card   │ Card   │        │      │
│   └────────┴────────┴────────┘      │
│                                     │
├─────────────────────────────────────┤
│         FOOTER                      │
└─────────────────────────────────────┘
```

### Journal Post Page `/journal/[slug]`
```
┌─────────────────────────────────────┐
│         NAVBAR (Fixed)              │
├─────────────────────────────────────┤
│                                     │
│   HERO (Post image)                 │
│   - Category, Reading time          │
│   - Post title                      │
│                                     │
├─────────────────────────────────────┤
│   BODY CONTENT (Cream bg)           │
│    ← Back to Journal link            │
│                                     │
│   [Post Title]                      │
│                                     │
│   [Full post text paragraphs...]    │
│                                     │
│                                     │
├─────────────────────────────────────┤
│         FOOTER                      │
└─────────────────────────────────────┘
```

### Contact Page `/contact`
```
┌─────────────────────────────────────┐
│         NAVBAR (Fixed)              │
├─────────────────────────────────────┤
│                                     │
│   HERO (contact/hero.jpg)           │
│   - GET IN TOUCH title              │
│   - Tagline                         │
│                                     │
├─────────────────────────────────────┤
│   CONTENT (Cream bg, 2 cols)        │
│   ┌──────────────┬──────────────┐   │
│   │              │              │   │
│   │ CONTACT INFO │ CONTACT FORM │   │
│   │              │              │   │
│   │ • General    │  [Input]     │   │
│   │ • Business   │  [Input]     │   │
│   │ • Press      │  [Input]     │   │
│   │ • Careers    │  [Input]     │   │
│   │              │  [Textarea]  │   │
│   │ Social Links │  [Button]    │   │
│   │              │              │   │
│   └──────────────┴──────────────┘   │
│                                     │
├─────────────────────────────────────┤
│         FOOTER                      │
└─────────────────────────────────────┘
```

### Shop Page `/shop` (Coming Soon)
```
┌─────────────────────────────────────┐
│         NAVBAR (Fixed)              │
├─────────────────────────────────────┤
│                                     │
│   HERO (h2o-stream.png)             │
│   - SHOP title                      │
│   - BHULLEA H₂O tagline             │
│                                     │
├─────────────────────────────────────┤
│   COMING SOON MESSAGE (Cream)       │
│   "Our store is on its way."        │
│                                     │
│   [Explore H₂O] → /h2o              │
│                                     │
├─────────────────────────────────────┤
│         FOOTER                      │
└─────────────────────────────────────┘
```

---

## 🧩 Component Tree

```
App Root
├── Fonts (Cinzel, EB Garamond, Inter)
├── Global Styles (Tailwind + shadcn)
└── Marketing Layout
    ├── Navbar (fixed header)
    │   ├── Logo
    │   ├── Nav Links (desktop)
    │   ├── Mobile Nav
    │   │   └── Sheet (drawer)
    │   │       └── Nav Links
    │   └── Shop Link
    │
    ├── Main Content
    │   ├── Hero Sections (various)
    │   │   ├── Full viewport background
    │   │   ├── Gradient overlay
    │   │   ├── Text + CTA
    │   │   └── Reveal animation
    │   │
    │   ├── Content Sections
    │   │   ├── Story (image + text)
    │   │   ├── VisionMission (2 cards)
    │   │   ├── ValuesStrip (6 icons)
    │   │   ├── TheWater (image + text)
    │   │   ├── FeatureIcons (6 icons)
    │   │   ├── BrandsGrid (5 cards)
    │   │   ├── PhilosophyList (5 pillars)
    │   │   ├── PostGrid (filterable posts)
    │   │   ├── ContactForm (with validation)
    │   │   └── ContactInfo (channels)
    │   │
    │   └── Utility Sections
    │       ├── Section (wrapper)
    │       ├── Container (max-width)
    │       ├── Reveal (scroll animation)
    │       ├── CTAButton (styled link)
    │       ├── Logo (brand wordmark)
    │       └── ValueIconRow (icon grid)
    │
    └── Footer
        ├── Brand info
        ├── Navigation links
        ├── Contact info
        ├── Social links
        └── Copyright
```

---

## 🎯 Brand Colors Applied

| Element | Color | Usage |
|---------|-------|-------|
| Background | Cream #f6f2ea | Main sections |
| Text | Charcoal #14110f | All text |
| Dark BG | Charcoal #14110f | Dark sections, hero overlays |
| Light Text | Cream #f6f2ea | Text on dark backgrounds |
| Accent | Gold #d4a964 | CTAs, icons, highlights |
| Hover | Gold Dark #b98a45 | Button hover, link hover |
| Borders | Charcoal/10% | Subtle dividers |

---

## 📐 Responsive Breakpoints

```
Mobile           Tablet          Desktop
< 640px          768px           1024px+

Single column    2 columns       3 columns
14-16px fonts    16-18px         18-24px
Full padding     Medium padding  Large padding
Drawer nav       Drawer nav      Horizontal nav
Stack vertically Flex wrap       Grid layout
```

---

## 🎬 Animations

| Element | Animation | Trigger |
|---------|-----------|---------|
| Reveal sections | Fade up + opacity | On scroll (once) |
| Navbar | Color + blur change | On scroll > 40px |
| Chevron | Bounce | Always (hero) |
| Hover links | Color change | Mouse over |
| Hover buttons | Brightness increase | Mouse over |
| Form submit | Loading state | On click |

---

## ✅ All Ready to Go!

Every page is styled, responsive, and animated. Just add your 25 images and launch! 🚀
