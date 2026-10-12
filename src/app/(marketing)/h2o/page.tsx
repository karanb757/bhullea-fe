import { ProductHero } from "@/components/sections/h2o/product-hero";
import { FeatureIcons } from "@/components/sections/h2o/feature-icons";
import { TheWater } from "@/components/sections/h2o/the-water";

export const metadata = {
  title: "BHULLEA H₂O — Premium Water",
  description:
    "Naturally sourced. Carefully purified. Thoughtfully bottled. BHULLEA H₂O is more than water — it is a promise of purity.",
};

export default function H2OPage() {
  return (
    <>
      <ProductHero />
      <FeatureIcons />
      <TheWater />
    </>
  );
}
