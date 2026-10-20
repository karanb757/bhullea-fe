import { Droplet, Mountain, Beaker, ShieldCheck, Package, Leaf } from "lucide-react";
import { Reveal } from "@/components/shared/reveal";
import { Container } from "@/components/shared/container";
import { Section } from "@/components/shared/section";

const features = [
  {
    icon: Droplet,
    label: "The Water",
    description: "Pure crystalline hydration"
  },
  {
    icon: Mountain,
    label: "The Source",
    description: "Himalayan springs"
  },
  {
    icon: Beaker,
    label: "Our Process",
    description: "Artisanal purification"
  },
  {
    icon: ShieldCheck,
    label: "Quality",
    description: "Premium standards"
  },
  {
    icon: Package,
    label: "The Bottle",
    description: "Sustainable design"
  },
  {
    icon: Leaf,
    label: "Responsibility",
    description: "Planet first"
  },
];

export function FeatureIcons() {
  return (
    <Section className="bg-cream text-charcoal">
      <Container>
        <Reveal>
          <div className="text-center mb-12 md:mb-16">
            <p className="font-display text-xs uppercase tracking-widest text-gold mb-2 md:mb-3">
              Why BHULLEA H₂O
            </p>
            <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl mb-3 md:mb-4">
              Excellence in Every Drop
            </h2>
            <p className="text-charcoal/60 max-w-2xl mx-auto text-sm sm:text-base">
              Six pillars of premium quality that define our commitment to you
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.2}>
          <div className="grid grid-cols-2 gap-4 sm:gap-5 md:gap-6 md:grid-cols-3 lg:grid-cols-6">
            {features.map(({ icon: Icon, label, description }) => (
              <div
                key={label}
                className="group p-4 sm:p-5 md:p-6 rounded-lg border border-charcoal/10 hover:border-gold/40 hover:bg-gold/5 transition-all duration-300 text-center"
              >
                <Icon className="h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8 text-gold mx-auto mb-2 md:mb-3 group-hover:scale-110 transition-transform" strokeWidth={1.5} />
                <h3 className="font-heading text-xs sm:text-sm md:text-base uppercase tracking-widest text-charcoal mb-1">
                  {label}
                </h3>
                <p className="text-xs text-charcoal/50 leading-snug">
                  {description}
                </p>
              </div>
            ))}
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}
