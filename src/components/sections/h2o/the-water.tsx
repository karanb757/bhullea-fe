import Image from "next/image";
import { CTAButton } from "@/components/shared/cta-button";
import { Reveal } from "@/components/shared/reveal";
import { Container } from "@/components/shared/container";
import { Section } from "@/components/shared/section";

export function TheWater() {
  return (
    <>
      {/* Main Water Section */}
      <Section id="the-water" className="bg-charcoal text-cream overflow-hidden">
        <Container>
          <div className="grid gap-8 sm:gap-12 md:gap-16 lg:grid-cols-2 lg:items-center">
            <Reveal>
              <div className="relative">
                <div className="absolute -inset-6 sm:-inset-8 bg-gradient-to-br from-gold/20 to-transparent rounded-lg blur-3xl opacity-60"></div>
                <div className="relative aspect-4/5 overflow-hidden rounded-lg border border-gold/20">
                  <Image
                    src="/images/h2o/waterfall.jpg"
                    alt="Crystal clear Himalayan waterfall &mdash; the source of BHULLEA H₂O"
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 50vw"
                    className="object-cover hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-charcoal/40 via-transparent to-transparent"></div>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.2}>
              <div className="space-y-4 sm:space-y-6">
                <div>
                  <p className="font-display text-xs uppercase tracking-widest text-gold mb-2">
                    Naturally Sourced
                  </p>
                  <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl leading-tight">
                    THE WATER
                  </h2>
                </div>

                <p className="text-base sm:text-lg leading-relaxed text-cream/80">
                  Naturally sourced. Carefully purified. Thoughtfully bottled. BHULLEA H₂O is more than water &mdash; it is a promise of purity, crafted with modern technology and a deep respect for nature.
                </p>

                <div className="space-y-3 sm:space-y-4 pt-4">
                  <div className="flex gap-3 sm:gap-4">
                    <div className="shrink-0 pt-0.5">
                      <div className="flex h-5 w-5 sm:h-6 sm:w-6 items-center justify-center rounded-full bg-gold/20 border border-gold/40">
                        <span className="text-gold text-xs sm:text-sm">✓</span>
                      </div>
                    </div>
                    <div className="min-w-0">
                      <h4 className="font-heading text-xs sm:text-sm uppercase tracking-widest text-cream mb-0.5">100% Natural Source</h4>
                      <p className="text-xs sm:text-sm text-cream/60">From protected Himalayan springs untouched by modern industry</p>
                    </div>
                  </div>

                  <div className="flex gap-3 sm:gap-4">
                    <div className="shrink-0 pt-0.5">
                      <div className="flex h-5 w-5 sm:h-6 sm:w-6 items-center justify-center rounded-full bg-gold/20 border border-gold/40">
                        <span className="text-gold text-xs sm:text-sm">✓</span>
                      </div>
                    </div>
                    <div className="min-w-0">
                      <h4 className="font-heading text-xs sm:text-sm uppercase tracking-widest text-cream mb-0.5">Mineral Rich</h4>
                      <p className="text-xs sm:text-sm text-cream/60">Essential minerals naturally present for optimal hydration and wellness</p>
                    </div>
                  </div>

                  <div className="flex gap-3 sm:gap-4">
                    <div className="shrink-0 pt-0.5">
                      <div className="flex h-5 w-5 sm:h-6 sm:w-6 items-center justify-center rounded-full bg-gold/20 border border-gold/40">
                        <span className="text-gold text-xs sm:text-sm">✓</span>
                      </div>
                    </div>
                    <div className="min-w-0">
                      <h4 className="font-heading text-xs sm:text-sm uppercase tracking-widest text-cream mb-0.5">Artisanal Purification</h4>
                      <p className="text-xs sm:text-sm text-cream/60">Heritage methods combined with modern excellence standards</p>
                    </div>
                  </div>
                </div>

                <CTAButton href="#" className="mt-6 sm:mt-8 w-full sm:w-auto bg-gold hover:bg-gold/90 text-charcoal">
                  Explore Our Story
                </CTAButton>
              </div>
            </Reveal>
          </div>
        </Container>
      </Section>

      {/* Source Excellence Section */}
      <Section className="bg-cream text-charcoal">
        <Container>
          <Reveal>
            <div className="text-center mb-12 md:mb-16">
              <p className="font-display text-xs uppercase tracking-widest text-gold mb-2 md:mb-3">
                Sacred Origins
              </p>
              <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl mb-3 md:mb-4">
                From Pristine Himalayan Springs
              </h2>
              <p className="text-charcoal/60 max-w-2xl mx-auto text-sm sm:text-base">
                Water blessed by altitude, time, and nature&apos;s perfection
              </p>
            </div>
          </Reveal>

          <div className="grid gap-6 md:gap-8 md:grid-cols-3">
            <Reveal delay={0.1}>
              <div className="p-6 sm:p-8 rounded-lg border border-charcoal/10 hover:border-gold/40 hover:bg-gold/5 transition-all">
                <div className="text-3xl sm:text-4xl font-heading text-gold mb-3 md:mb-4">3000m+</div>
                <h3 className="font-heading text-base sm:text-lg mb-2">Altitude Filtered</h3>
                <p className="text-charcoal/60 text-xs sm:text-sm leading-relaxed">
                  Located at over 3000 meters, where natural filtration is perfected
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.15}>
              <div className="p-6 sm:p-8 rounded-lg border border-charcoal/10 hover:border-gold/40 hover:bg-gold/5 transition-all">
                <div className="text-3xl sm:text-4xl font-heading text-gold mb-3 md:mb-4">∞</div>
                <h3 className="font-heading text-base sm:text-lg mb-2">Timeless Purity</h3>
                <p className="text-charcoal/60 text-xs sm:text-sm leading-relaxed">
                  Ancient springs protected for generations, maintained forever
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.2}>
              <div className="p-6 sm:p-8 rounded-lg border border-charcoal/10 hover:border-gold/40 hover:bg-gold/5 transition-all">
                <div className="text-3xl sm:text-4xl font-heading text-gold mb-3 md:mb-4">0%</div>
                <h3 className="font-heading text-base sm:text-lg mb-2">Zero Contamination</h3>
                <p className="text-charcoal/60 text-xs sm:text-sm leading-relaxed">
                  Pristine conditions protected by strict conservation protocols
                </p>
              </div>
            </Reveal>
          </div>
        </Container>
      </Section>

      {/* Process Excellence Section */}
      <Section className="bg-charcoal text-cream">
        <Container>
          <Reveal>
            <div className="max-w-3xl mx-auto text-center mb-12 md:mb-16">
              <p className="font-display text-xs uppercase tracking-widest text-gold mb-2 md:mb-3">
                Artisanal Excellence
              </p>
              <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl mb-4 md:mb-6">
                Our Purification Process
              </h2>
              <p className="text-cream/70 text-sm sm:text-base md:text-lg">
                Every drop undergoes meticulous purification honoring ancient Indian wisdom while meeting modern quality standards
              </p>
            </div>
          </Reveal>

          <div className="grid gap-4 sm:gap-5 md:gap-6 grid-cols-2 md:grid-cols-4">
            {[
              {
                step: "01",
                title: "Source",
                description: "Pristine Himalayan springs"
              },
              {
                step: "02",
                title: "Filtration",
                description: "Multi-stage natural filtration"
              },
              {
                step: "03",
                title: "Purification",
                description: "Heritage-inspired purification"
              },
              {
                step: "04",
                title: "Bottling",
                description: "Sustainable, premium packaging"
              },
            ].map((item, idx) => (
              <Reveal key={item.step} delay={0.1 * (idx + 1)}>
                <div className="relative group">
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-gold/20 to-transparent rounded-lg opacity-0 group-hover:opacity-100 transition duration-300 blur"></div>
                  <div className="relative p-4 sm:p-5 md:p-6 bg-charcoal border border-cream/10 rounded-lg text-center">
                    <div className="text-2xl sm:text-3xl md:text-4xl font-heading text-gold mb-2 md:mb-3">{item.step}</div>
                    <h3 className="font-heading text-sm md:text-lg mb-1 md:mb-2">{item.title}</h3>
                    <p className="text-xs sm:text-sm text-cream/60">{item.description}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>
    </>
  );
}
