import { Reveal } from "@/components/shared/reveal";
import { Container } from "@/components/shared/container";
import { Section } from "@/components/shared/section";
import { CTAButton } from "@/components/shared/cta-button";

export function Sustainability() {
  return (
    <Section className="bg-charcoal text-cream overflow-hidden">
      <Container>
        <Reveal>
          <div className="text-center mb-12 md:mb-16">
            <p className="font-display text-xs uppercase tracking-widest text-gold mb-2 md:mb-3">
              Our Commitment
            </p>

            <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl mb-4 md:mb-6">
              Protecting Our Planet
            </h2>

            <p className="text-cream/70 max-w-3xl mx-auto text-sm sm:text-base md:text-lg leading-relaxed">
              BHULLEA H₂O is built on the principle that premium water must also be environmentally responsible. We protect water sources, minimize waste, and invest in renewable energy.
            </p>
          </div>
        </Reveal>

        <div className="grid gap-6 md:gap-8 grid-cols-1 md:grid-cols-3 mt-8 md:mt-12">
          <Reveal delay={0.1}>
            <div className="relative group">
              <div className="absolute -inset-0.5 bg-linear-to-br from-gold/30 to-transparent rounded-lg opacity-0 group-hover:opacity-100 transition duration-300 blur"></div>
              <div className="relative p-6 sm:p-8 bg-charcoal border border-cream/10 rounded-lg">
                <div className="text-4xl sm:text-5xl mb-4">🌱</div>

                <h3 className="font-heading text-lg sm:text-xl mb-3">
                  Water Conservation
                </h3>

                <p className="text-cream/70 text-sm leading-relaxed mb-4">
                  We maintain strict protocols to ensure spring sources regenerate naturally. Every drop extracted is replaced through sustainable practices.
                </p>

                <div className="h-1 w-12 bg-gold rounded-full"></div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="relative group">
              <div className="absolute -inset-0.5 bg-linear-to-br from-gold/30 to-transparent rounded-lg opacity-0 group-hover:opacity-100 transition duration-300 blur"></div>

              <div className="relative p-6 sm:p-8 bg-charcoal border border-cream/10 rounded-lg">
                <div className="text-4xl sm:text-5xl mb-4">♻️</div>

                <h3 className="font-heading text-lg sm:text-xl mb-3">
                  100% Recyclable
                </h3>

                <p className="text-cream/70 text-sm leading-relaxed mb-4">
                  Our premium glass bottles are infinitely recyclable. We partner with facilities ensuring proper recycling and minimal waste.
                </p>

                <div className="h-1 w-12 bg-gold rounded-full"></div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="relative group">
              <div className="absolute -inset-0.5 bg-linear-to-br from-gold/30 to-transparent rounded-lg opacity-0 group-hover:opacity-100 transition duration-300 blur"></div>

              <div className="relative p-6 sm:p-8 bg-charcoal border border-cream/10 rounded-lg">
                <div className="text-4xl sm:text-5xl mb-4">⚡</div>

                <h3 className="font-heading text-lg sm:text-xl mb-3">
                  Renewable Energy
                </h3>

                <p className="text-cream/70 text-sm leading-relaxed mb-4">
                  Our production facilities operate on 100% renewable energy. We&apos;re committed to carbon-neutral operations by 2030.
                </p>

                <div className="h-1 w-12 bg-gold rounded-full"></div>
              </div>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.3} className="mt-12 md:mt-16">
          <div className="bg-linear-to-r from-gold/10 to-transparent p-6 sm:p-8 md:p-12 rounded-lg border border-gold/20">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 md:gap-6">
              <div>
                <h3 className="font-heading text-xl sm:text-2xl mb-2">
                  Join Our Sustainability Journey
                </h3>

                <p className="text-cream/70 text-sm sm:text-base">
                  Every purchase supports conservation efforts and environmental protection.
                </p>
              </div>

              <CTAButton
                href="#"
                className="shrink-0 w-full sm:w-auto bg-gold hover:bg-gold/90 text-charcoal"
              >
                Learn More
              </CTAButton>
            </div>
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}
