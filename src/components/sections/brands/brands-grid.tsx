import { brands } from "@/config/brands";
import { BrandCard } from "./brand-card";

export function BrandsGrid() {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {brands.map((brand) => (
        <BrandCard key={brand.name} brand={brand} />
      ))}
    </div>
  );
}
