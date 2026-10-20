import { Reveal } from "@/components/shared/reveal";
import { Container } from "@/components/shared/container";
import { Section } from "@/components/shared/section";

export function VisionMission() {
  return (
    <Section className="bg-cream text-charcoal">
      <Container>
        <Reveal>
          <div className="text-center mb-16">
            <p className="font-display text-xs uppercase tracking-widest text-gold">
              Our Purpose
            </p>
            <h2 className="mt-3 font-heading text-4xl md:text-5xl">
              Vision & Mission
            </h2>
          </div>
        </Reveal>

        <div className="grid gap-12 md:grid-cols-2 lg:gap-20">
          <Reveal>
            <div className="space-y-4">
              <div className="inline-block px-3 py-1 bg-gold/10 rounded-full">
                <p className="font-display text-xs uppercase tracking-widest text-gold">
                  Vision
                </p>
              </div>
              <h3 className="font-heading text-3xl md:text-4xl leading-tight">OUR VISION</h3>
              <p className="leading-relaxed text-charcoal/70 text-lg">
                To create a family of world-class brands that enrich lives and
                protect what matters most—delivering pure, premium water that
                honors our heritage while securing a sustainable future.
              </p>
              <div className="pt-6 border-t border-charcoal/10">
                <p className="text-sm text-charcoal/60 font-display tracking-wide">
                  Excellence through tradition and innovation
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="space-y-4">
              <div className="inline-block px-3 py-1 bg-gold/10 rounded-full">
                <p className="font-display text-xs uppercase tracking-widest text-gold">
                  Mission
                </p>
              </div>
              <h3 className="font-heading text-3xl md:text-4xl leading-tight">OUR MISSION</h3>
              <p className="leading-relaxed text-charcoal/70 text-lg">
                To build with integrity, deliver exceptional quality, and create
                long-term value for people, communities and the planet. Every
                product embodies our commitment to purity and responsible stewardship.
              </p>
              <div className="pt-6 border-t border-charcoal/10">
                <p className="text-sm text-charcoal/60 font-display tracking-wide">
                  Purity, purpose, and responsibility in every drop
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </Container>
    </Section>
  );
}
