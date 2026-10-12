import { Droplet, Mountain, Beaker, ShieldCheck, Package, MapPin } from "lucide-react";
import { Reveal } from "@/components/shared/reveal";
import { Container } from "@/components/shared/container";
import { Section } from "@/components/shared/section";

const features = [
  { icon: Droplet, label: "The Water" },
  { icon: Mountain, label: "The Source" },
  { icon: Beaker, label: "Our Process" },
  { icon: ShieldCheck, label: "Quality" },
  { icon: Package, label: "The Bottle" },
  { icon: MapPin, label: "Where to Buy" },
];

export function FeatureIcons() {
  return (
    <Section className="bg-charcoal text-cream">
      <Container>
        <Reveal>
          <div className="grid grid-cols-3 gap-8 md:grid-cols-6">
            {features.map(({ icon: Icon, label }) => (
              <div key={label} className="flex flex-col items-center gap-3 text-center">
                <Icon className="h-7 w-7 text-gold" strokeWidth={1.5} />
                <span className="font-display text-xs uppercase tracking-widest text-cream/70">
                  {label}
                </span>
              </div>
            ))}
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}
