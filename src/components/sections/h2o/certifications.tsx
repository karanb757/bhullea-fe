import { Reveal } from "@/components/shared/reveal";
import { Container } from "@/components/shared/container";
import { Section } from "@/components/shared/section";

export function Certifications() {
  return (
    <Section className="bg-cream text-charcoal">
      <Container>
        <Reveal>
          <div className="text-center mb-12 md:mb-16">
            <p className="font-display text-xs uppercase tracking-widest text-gold mb-2 md:mb-3">
              Standards & Certifications
            </p>
            <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl mb-4">
              Verified Excellence
            </h2>
            <p className="text-charcoal/60 max-w-2xl mx-auto text-sm sm:text-base">
              Every batch meets rigorous international quality standards and certifications
            </p>
          </div>
        </Reveal>

        <div className="grid gap-6 md:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {[
            {
              cert: "ISO 9001:2015",
              title: "Quality Management",
              description: "International standards for consistent excellence"
            },
            {
              cert: "ISO 14001:2015",
              title: "Environmental Care",
              description: "Sustainable practices and eco-responsibility"
            },
            {
              cert: "FSSC 22000",
              title: "Food Safety",
              description: "Rigorous testing and pure water standards"
            },
            {
              cert: "Organic Certified",
              title: "Natural Source",
              description: "100% naturally sourced, chemical-free"
            },
          ].map((item, idx) => (
            <Reveal key={item.cert} delay={0.1 * (idx + 1)}>
              <div className="p-6 sm:p-8 rounded-lg border border-charcoal/10 hover:border-gold/40 hover:bg-gold/5 transition-all text-center group">
                <div className="text-3xl sm:text-4xl font-heading text-gold mb-4 group-hover:scale-110 transition-transform">
                  ✓
                </div>
                <h3 className="font-heading text-base sm:text-lg mb-2">{item.cert}</h3>
                <h4 className="font-heading text-xs sm:text-sm uppercase tracking-widest text-gold mb-3">
                  {item.title}
                </h4>
                <p className="text-xs sm:text-sm text-charcoal/60 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  );
}
