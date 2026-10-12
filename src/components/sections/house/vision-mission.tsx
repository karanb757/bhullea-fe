import { Reveal } from "@/components/shared/reveal";
import { Container } from "@/components/shared/container";
import { Section } from "@/components/shared/section";

export function VisionMission() {
  return (
    <Section className="bg-cream text-charcoal">
      <Container>
        <div className="grid gap-12 md:grid-cols-2 lg:gap-20">
          <Reveal>
            <div className="rounded-sm border border-charcoal/10 p-8">
              <p className="font-display text-xs uppercase tracking-widest text-gold">
                Vision
              </p>
              <h3 className="mt-3 font-heading text-2xl">OUR VISION</h3>
              <p className="mt-4 leading-relaxed text-charcoal/70">
                To create a family of world-class brands that enrich lives and
                protect what matters most.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="rounded-sm border border-charcoal/10 p-8">
              <p className="font-display text-xs uppercase tracking-widest text-gold">
                Mission
              </p>
              <h3 className="mt-3 font-heading text-2xl">OUR MISSION</h3>
              <p className="mt-4 leading-relaxed text-charcoal/70">
                To build with integrity, deliver exceptional quality, and create
                long-term value for people, communities and the planet.
              </p>
            </div>
          </Reveal>
        </div>
      </Container>
    </Section>
  );
}
