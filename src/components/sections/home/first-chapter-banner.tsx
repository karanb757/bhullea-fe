import Image from "next/image";
import { CTAButton } from "@/components/shared/cta-button";

export function FirstChapterBanner() {
  return (
    <div className="grid overflow-hidden rounded-sm bg-charcoal text-cream md:grid-cols-2">
      <div className="relative min-h-80 md:min-h-[400px]">
        <Image
          src="/images/hero/h2o-stream.png"
          alt="Clear mountain waterfall"
          fill
          sizes="(min-width: 768px) 50vw, 100vw"
          className="object-cover"
        />
      </div>

      <div className="flex flex-col justify-center gap-3 p-8 md:p-12">
        <p className="text-xs font-medium uppercase tracking-[0.25em] text-cream/80">
          Our First Chapter
        </p>
        <h3 className="font-display text-3xl tracking-wide md:text-4xl">
          BHULLEA H₂O
        </h3>
        <p className="font-display text-lg text-cream/90">
          Premium water, for a better tomorrow.
        </p>
        <CTAButton href="/h2o" variant="outline" className="mt-3 w-fit">
          Discover H₂O
        </CTAButton>
      </div>
    </div>
  );
}