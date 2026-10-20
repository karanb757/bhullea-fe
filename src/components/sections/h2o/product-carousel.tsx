import { Reveal } from "@/components/shared/reveal";
import { Container } from "@/components/shared/container";
import { Section } from "@/components/shared/section";
import { AppleCardsCarousel } from "@/components/ui/apple-cards-carousel";

const productCards = [
  {
    category: "PREMIUM WATER",
    title: "Himalayan Springs",
    src: "/images/h2o/waterfall.jpg",
    content: (
      <div>
        <p className="mb-4">
          Our water originates from pristine Himalayan springs protected for centuries. Every drop carries the essence of mountain purity, filtered through ancient rock formations.
        </p>
        <ul className="list-disc list-inside space-y-2 text-sm">
          <li>3000m+ altitude filtration</li>
          <li>Natural mineral composition</li>
          <li>Zero contamination guarantee</li>
          <li>Certified pure springs</li>
        </ul>
      </div>
    ),
    ctaText: "Learn More",
  },
  {
    category: "CRAFTSMANSHIP",
    title: "Artisanal Process",
    src: "/images/h2o/waterfall.jpg",
    content: (
      <div>
        <p className="mb-4">
          Heritage purification methods combined with modern excellence. Each batch undergoes rigorous testing to ensure the highest quality standards.
        </p>
        <ul className="list-disc list-inside space-y-2 text-sm">
          <li>Multi-stage filtration system</li>
          <li>Heritage purification techniques</li>
          <li>Modern quality control</li>
          <li>ISO certified facility</li>
        </ul>
      </div>
    ),
    ctaText: "Explore Process",
  },
  {
    category: "SUSTAINABILITY",
    title: "Eco-Conscious",
    src: "/images/h2o/waterfall.jpg",
    content: (
      <div>
        <p className="mb-4">
          Protecting water sources and preserving nature for future generations. 100% recyclable premium glass bottles with minimal environmental impact.
        </p>
        <ul className="list-disc list-inside space-y-2 text-sm">
          <li>100% recyclable packaging</li>
          <li>Renewable energy powered</li>
          <li>Water conservation protocols</li>
          <li>Carbon-neutral by 2030</li>
        </ul>
      </div>
    ),
    ctaText: "Our Impact",
  },
  {
    category: "HERITAGE",
    title: "500+ Years Legacy",
    src: "/images/h2o/waterfall.jpg",
    content: (
      <div>
        <p className="mb-4">
          Rooted in centuries of Indian purity traditions. BHULLEA honors ancestral knowledge while delivering contemporary premium quality.
        </p>
        <ul className="list-disc list-inside space-y-2 text-sm">
          <li>Ancient purity traditions</li>
          <li>Modern Indian craftsmanship</li>
          <li>Family heritage values</li>
          <li>Timeless quality promise</li>
        </ul>
      </div>
    ),
    ctaText: "Our Story",
  },
];

export function ProductCarousel() {
  return (
    <Section className="bg-charcoal text-cream py-16 md:py-20">
      <Container>
        <Reveal>
          <div className="text-center mb-12 md:mb-16">
            <p className="font-display text-xs uppercase tracking-widest text-gold mb-3">
              Discover BHULLEA H₂O
            </p>
            <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl mb-4">
              Premium Water Collection
            </h2>
            <p className="text-cream/70 max-w-2xl mx-auto">
              Explore the story behind every drop. From pristine springs to your glass.
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.2}>
          <AppleCardsCarousel
            cards={productCards}
            containerClassName="w-full"
          />
        </Reveal>
      </Container>
    </Section>
  );
}
