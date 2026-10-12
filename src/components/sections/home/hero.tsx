import Image from "next/image";
import { ChevronDown } from "lucide-react";
import { Crest } from "@/components/shared/logo";
import { CTAButton } from "@/components/shared/cta-button";
import { Reveal } from "@/components/shared/reveal";

export function Hero() {
  return (
    <section className="relative min-h-svh overflow-hidden bg-charcoal text-cream">
      <Image
        src="/images/hero/home-hero.png"
        alt="Mountain stream at dusk with a BHULLEA H2O bottle"
        fill
        priority
        sizes="100vw"
        className="object-cover object-center"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/10 to-black/60" />

      <div className="relative z-10 mx-auto flex min-h-svh max-w-7xl flex-col px-6 pb-20 pt-28 lg:px-10">
        <Reveal className="flex flex-col items-center text-center">
          <Crest className="h-16 w-16 text-gold md:h-20 md:w-20" />
          <h1 className="mt-4 font-display text-5xl tracking-[0.08em] md:text-7xl lg:text-8xl">BHULLEA</h1>
          <p className="mt-4 font-display text-2xl leading-snug md:text-4xl">
            Crafted with Purity.
            <br />
            Rooted in Legacy.
          </p>
        </Reveal>

        <Reveal delay={0.2} className="mt-auto max-w-xs md:ml-[8%]">
          <p className="font-display text-xl leading-snug md:text-2xl">
            A House of Brands,
            <br />
            Built for Generations.
          </p>
          <CTAButton href="/the-house" className="mt-6">
            Explore Our Story
          </CTAButton>
        </Reveal>
      </div>

      <ChevronDown className="absolute bottom-6 left-1/2 z-10 h-6 w-6 -translate-x-1/2 animate-bounce text-gold" aria-hidden />
    </section>
  );
}