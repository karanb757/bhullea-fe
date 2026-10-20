import { ProductHero } from "@/components/sections/h2o/product-hero";
import { FeatureIcons } from "@/components/sections/h2o/feature-icons";
import { ProductCarousel } from "@/components/sections/h2o/product-carousel";
import { TheWater } from "@/components/sections/h2o/the-water";
import { BottleDesign } from "@/components/sections/h2o/bottle-design";
import { Sustainability } from "@/components/sections/h2o/sustainability";
import { Certifications } from "@/components/sections/h2o/certifications";

export const metadata = {
  title: "BHULLEA H₂O — Premium Heritage Water",
  description:
    "Naturally sourced from pristine Himalayan springs. Carefully purified. Thoughtfully bottled. BHULLEA H₂O is a promise of purity, heritage, and excellence.",
};

export default function H2OPage() {
  return (
    <>
      <ProductHero />
      <FeatureIcons />
      <ProductCarousel />
      <TheWater />
      <BottleDesign />
      <Sustainability />
      <Certifications />
    </>
  );
}
