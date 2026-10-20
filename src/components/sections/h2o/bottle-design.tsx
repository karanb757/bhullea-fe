import Image from "next/image";
import { CTAButton } from "@/components/shared/cta-button";
import { Reveal } from "@/components/shared/reveal";
import { Container } from "@/components/shared/container";
import { Section } from "@/components/shared/section";

export function BottleDesign() {
  return (
    <Section className="bg-charcoal text-cream overflow-hidden">
      <Container>
        <div className="grid gap-8 sm:gap-12 md:gap-16 lg:grid-cols-2 lg:items-center">
          <Reveal>
            <div className="relative">
              {/* Bottle image placeholder - will be replaced with actual product image */}
              <div className="relative aspect-3/4 overflow-hidden rounded-lg">
                <div className="absolute inset-0 bg-linear-to-br from-gold/20 via-cream/5 to-transparent flex items-center justify-center">
                  <div className="text-5xl sm:text-6xl md:text-7xl">🫙</div>
                </div>
                <div className="absolute inset-0 border border-gold/30 rounded-lg"></div>
              </div>
              <div className="absolute -bottom-4 sm:-bottom-6 md:-bottom-8 -right-4 sm:-right-6 md:-right-8 w-24 sm:w-32 h-24 sm:h-32 bg-gold/10 rounded-full blur-3xl"></div>
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="space-y-4 sm:space-y-6">
              <div>
                <p className="font-display text-xs uppercase tracking-widest text-gold mb-2">
                  Thoughtfully Designed
                </p>
                <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl leading-tight">
                  The Bottle
                </h2>
              </div>

              <p className="text-base sm:text-lg leading-relaxed text-cream/80">
                Premium crystalline glass meets sustainable design. Every bottle is a work of art—carefully crafted to preserve purity while reflecting our commitment to environmental responsibility.
              </p>

              <div className="space-y-3 sm:space-y-4 pt-4">
                <div className="flex gap-3 sm:gap-4">
                  <div className="shrink-0 pt-1">
                    <div className="w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-gold/30 border border-gold/60 flex items-center justify-center flex-shrink-0">
                      <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-gold"></div>
                    </div>
                  </div>
                  <div className="min-w-0">
                    <h4 className="font-heading text-sm md:text-base mb-0.5">Premium Glass</h4>
                    <p className="text-xs sm:text-sm text-cream/60">Crystal clarity preserves water taste and purity</p>
                  </div>
                </div>

                <div className="flex gap-3 sm:gap-4">
                  <div className="shrink-0 pt-1">
                    <div className="w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-gold/30 border border-gold/60 flex items-center justify-center flex-shrink-0">
                      <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-gold"></div>
                    </div>
                  </div>
                  <div className="min-w-0">
                    <h4 className="font-heading text-sm md:text-base mb-0.5">Sustainable Sourcing</h4>
                    <p className="text-xs sm:text-sm text-cream/60">100% recyclable materials, minimal environmental impact</p>
                  </div>
                </div>

                <div className="flex gap-3 sm:gap-4">
                  <div className="shrink-0 pt-1">
                    <div className="w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-gold/30 border border-gold/60 flex items-center justify-center flex-shrink-0">
                      <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-gold"></div>
                    </div>
                  </div>
                  <div className="min-w-0">
                    <h4 className="font-heading text-sm md:text-base mb-0.5">Ergonomic Design</h4>
                    <p className="text-xs sm:text-sm text-cream/60">Comfortable grip, elegant proportions for daily rituals</p>
                  </div>
                </div>

                <div className="flex gap-3 sm:gap-4">
                  <div className="shrink-0 pt-1">
                    <div className="w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-gold/30 border border-gold/60 flex items-center justify-center flex-shrink-0">
                      <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-gold"></div>
                    </div>
                  </div>
                  <div className="min-w-0">
                    <h4 className="font-heading text-sm md:text-base mb-0.5">Heritage Branding</h4>
                    <p className="text-xs sm:text-sm text-cream/60">Minimalist aesthetic with traditional Indian motifs</p>
                  </div>
                </div>
              </div>

              <CTAButton href="#" className="mt-6 sm:mt-8 w-full sm:w-auto bg-gold hover:bg-gold/90 text-charcoal">
                View Bottle Details
              </CTAButton>
            </div>
          </Reveal>
        </div>
      </Container>
    </Section>
  );
}
