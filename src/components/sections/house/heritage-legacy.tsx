import Image from "next/image";
import { Reveal } from "@/components/shared/reveal";
import { Container } from "@/components/shared/container";
import { Section } from "@/components/shared/section";

export function HeritageLegacy() {
  return (
    <Section className="bg-charcoal text-cream">
      <Container>
        <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
          <Reveal>
            <div className="relative">
              <div className="absolute -inset-8 bg-gradient-to-br from-gold/20 to-transparent rounded-lg blur-3xl"></div>
              <div className="relative aspect-square overflow-hidden rounded-lg border border-gold/20">
                <Image
                  src="/images/house/story1.png"
                  alt="Founder's heritage and vision"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="space-y-6">
              <div>
                <p className="font-display text-xs uppercase tracking-widest text-gold mb-2">
                  The Founder's Vision
                </p>
                <h2 className="font-heading text-4xl md:text-5xl leading-tight">
                  Rooted in Heritage
                </h2>
              </div>

              <p className="text-cream/80 leading-relaxed text-lg">
                BHULLEA's journey began with a profound respect for nature and a commitment to revive ancient Indian wisdom about water purity. What started as a personal mission to deliver untouched, premium water has evolved into a modern heritage brand.
              </p>

              <div className="space-y-6 pt-4">
                <div className="flex gap-4">
                  <div className="shrink-0 pt-1">
                    <div className="flex h-6 w-6 items-center justify-center rounded-full bg-gold/20 border border-gold/40">
                      <span className="text-gold text-sm">✓</span>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-heading text-lg mb-1">Sacred Springs</h4>
                    <p className="text-cream/60 text-sm">
                      Sourced from protected natural springs blessed by millennia of pristine conditions
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="shrink-0 pt-1">
                    <div className="flex h-6 w-6 items-center justify-center rounded-full bg-gold/20 border border-gold/40">
                      <span className="text-gold text-sm">✓</span>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-heading text-lg mb-1">Artisanal Excellence</h4>
                    <p className="text-cream/60 text-sm">
                      Handcrafted process inspired by traditional Indian purification methods
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="shrink-0 pt-1">
                    <div className="flex h-6 w-6 items-center justify-center rounded-full bg-gold/20 border border-gold/40">
                      <span className="text-gold text-sm">✓</span>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-heading text-lg mb-1">Eternal Stewardship</h4>
                    <p className="text-cream/60 text-sm">
                      Dedicated to preserving water sources for future generations
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-8 border-t border-cream/10">
                <p className="text-sm text-gold font-display tracking-widest uppercase">
                  "Pure water, pure purpose, eternal legacy"
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </Container>
    </Section>
  );
}
