"use client";

import Image from "next/image";
import { Play } from "lucide-react";
import { CTAButton } from "@/components/shared/cta-button";
import { Reveal } from "@/components/shared/reveal";

const features = [
  { label: "The Water" },
  { label: "The Source" },
  { label: "Our Process" },
  { label: "Quality" },
  { label: "The Bottle" },
  { label: "Where to Buy" },
];

export function ProductHero() {
  return (
    <section className="relative min-h-svh overflow-hidden bg-charcoal text-cream">
      <Image
        src="/images/hero/h2o-stream.png"
        alt="Pristine mountain stream — the source of BHULLEA H₂O"
        fill
        priority
        sizes="100vw"
        className="object-cover object-center"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-black/70" />

      <div className="relative z-10 mx-auto flex min-h-svh max-w-7xl flex-col px-6 pb-20 pt-32 lg:px-10">
        <Reveal>
          <p className="font-display text-4xl font-light tracking-widest md:text-6xl lg:text-7xl">
            BHULLEA H₂O
          </p>
          <p className="mt-3 font-display text-xl leading-snug md:text-3xl">
            Crafted with Purity.
            <br />
            Rooted in Legacy.
          </p>
          <p className="mt-4 max-w-sm text-sm text-cream/70 md:text-base">
            Pure water. Thoughtful design.
            <br />A healthier tomorrow.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <CTAButton href="#the-water">Explore the Water</CTAButton>
            <button className="flex items-center gap-2 font-display text-sm text-cream/80 transition hover:text-cream">
              <span className="flex h-10 w-10 items-center justify-center rounded-full border border-cream/40">
                <Play className="h-4 w-4 fill-current" />
              </span>
              Watch Our Story
            </button>
          </div>
        </Reveal>

        {/* Feature anchors */}
        <Reveal delay={0.3} className="mt-auto">
          <div className="flex flex-wrap gap-x-6 gap-y-2 border-t border-cream/20 pt-6">
            {features.map((f) => (
              <span key={f.label} className="font-display text-xs uppercase tracking-widest text-cream/60">
                {f.label}
              </span>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
