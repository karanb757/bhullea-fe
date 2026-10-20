"use client";

import Image from "next/image";
import { Play, Droplet } from "lucide-react";
import { CTAButton } from "@/components/shared/cta-button";
import { Reveal } from "@/components/shared/reveal";

export function ProductHero() {
  return (
    <section className="relative min-h-svh overflow-hidden bg-charcoal text-cream">
      {/* Background image with premium overlay */}
      <Image
        src="/images/hero/h2o-stream.png"
        alt="Pristine mountain stream — the source of BHULLEA H₂O"
        fill
        priority
        sizes="100vw"
        className="object-cover object-center"
      />

      {/* Multi-layered gradient overlay for premium feel */}
      <div className="absolute inset-0 bg-linear-to-b from-black/70 via-black/40 to-charcoal/80" />
      <div className="absolute inset-0 bg-linear-to-r from-charcoal/20 to-transparent" />

      <div className="relative z-10 mx-auto flex min-h-svh max-w-7xl flex-col px-4 pb-16 pt-20 sm:px-6 md:pb-20 md:pt-32 lg:px-10">
        <Reveal>
          <div className="inline-flex items-center gap-2 w-fit mb-4 md:mb-6 px-3 py-1.5 md:px-4 md:py-2 rounded-full bg-gold/10 backdrop-blur-sm border border-gold/30 text-xs md:text-sm">
            <Droplet className="h-3 w-3 md:h-4 md:w-4 text-gold shrink-0" />
            <span className="font-display uppercase tracking-widest text-gold">
              Premium Heritage Water
            </span>
          </div>

          <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-light tracking-tight leading-tight">
            BHULLEA<br className="hidden sm:block" /> H₂O
          </h1>

          <p className="mt-4 md:mt-6 font-display text-lg sm:text-xl md:text-2xl leading-snug text-cream/90 max-w-3xl">
            Naturally Sourced.
            <br />
            <span className="text-gold">Carefully Purified.</span>
            <br />
            Thoughtfully Cherished.
          </p>

          <p className="mt-4 md:mt-6 max-w-2xl text-sm sm:text-base md:text-lg text-cream/70 leading-relaxed">
            Pure water from pristine Himalayan springs, honoring centuries of Indian heritage while delivering the excellence your wellness deserves. Every drop is a commitment to purity, sustainability, and timeless quality.
          </p>

          <div className="mt-6 md:mt-10 flex flex-col sm:flex-row sm:flex-wrap items-start sm:items-center gap-3 sm:gap-4">
            <CTAButton href="#the-water" className="w-full sm:w-auto bg-gold hover:bg-gold/90 text-charcoal">
              Explore the Water
            </CTAButton>
            <button className="group w-full sm:w-auto flex items-center justify-center sm:justify-start gap-2 sm:gap-3 px-4 sm:px-6 py-3 rounded-lg border border-cream/30 hover:border-gold/60 transition-all duration-300 hover:bg-gold/5">
              <span className="flex h-8 w-8 sm:h-10 sm:w-10 items-center justify-center rounded-full border border-cream/40 group-hover:border-gold/60 group-hover:bg-gold/10 transition-all shrink-0">
                <Play className="h-3 w-3 sm:h-4 sm:w-4 fill-current text-gold group-hover:text-gold" />
              </span>
              <span className="font-display text-xs sm:text-sm uppercase tracking-widest">Watch Our Story</span>
            </button>
          </div>
        </Reveal>

        {/* Premium feature navigation */}
        <Reveal delay={0.3} className="mt-auto pt-8 md:pt-auto">
          <div className="space-y-4 md:space-y-6">
            <div className="h-px bg-linear-to-r from-cream/30 via-gold/40 to-transparent"></div>
            <div className="grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3 lg:grid-cols-6">
              {[
                { label: "The Water", icon: "💧" },
                { label: "The Source", icon: "⛰" },
                { label: "Our Process", icon: "🔬" },
                { label: "Quality", icon: "✓" },
                { label: "The Bottle", icon: "🫙" },
                { label: "Where to Buy", icon: "🌍" },
              ].map((item) => (
                <div key={item.label} className="flex flex-col items-center gap-1.5 md:gap-2">
                  <span className="text-lg sm:text-2xl">{item.icon}</span>
                  <span className="font-display text-xs uppercase tracking-widest text-cream/60 hover:text-gold transition-colors cursor-pointer text-center leading-tight">
                    {item.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>

      {/* Scroll indicator */}
      <Reveal delay={0.5} className="absolute bottom-4 md:bottom-8 left-1/2 -translate-x-1/2 z-20">
        <div className="flex flex-col items-center gap-2 text-cream/50 animate-bounce">
          <span className="font-display text-xs uppercase tracking-widest">Scroll</span>
          <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </Reveal>
    </section>
  );
}
