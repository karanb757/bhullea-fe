export type BrandStatus = "live" | "coming-soon";

export interface Brand {
  name: string;
  tagline: string;
  description: string;
  category: string;
  href: string;
  logo: string;      // path in /public/images/brands/
  status: BrandStatus;
}

export const brands: Brand[] = [
  {
    name: "BHULLEA H₂O",
    tagline: "Premium water.",
    description: "Naturally sourced. Carefully purified. Thoughtfully bottled.",
    category: "Premium water.",
    href: "/h2o",
    logo: "/images/brands/h2o-logo.png",
    status: "live",
  },
  {
    name: "BHULLEA Harvest",
    tagline: "Food & agriculture.",
    description: "From the earth, for the earth.",
    category: "Food & agriculture.",
    href: "#",
    logo: "/images/brands/harvest-logo.png",
    status: "coming-soon",
  },
  {
    name: "BHULLEA Life",
    tagline: "Wellness & nutrition.",
    description: "A healthier way to live.",
    category: "Wellness & nutrition.",
    href: "#",
    logo: "/images/brands/life-logo.png",
    status: "coming-soon",
  },
  {
    name: "BHULLEA Living",
    tagline: "Lifestyle & experiences.",
    description: "Curated living for the modern Indian.",
    category: "Lifestyle & experiences.",
    href: "#",
    logo: "/images/brands/living-logo.png",
    status: "coming-soon",
  },
  {
    name: "BHULLEA Labs",
    tagline: "Technology & innovation.",
    description: "Building the tools for tomorrow.",
    category: "Technology & innovation.",
    href: "#",
    logo: "/images/brands/labs-logo.png",
    status: "coming-soon",
  },
];
