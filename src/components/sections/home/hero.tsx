import Image from "next/image";
import { ChevronDown } from "lucide-react";
import { CTAButton } from "@/components/shared/cta-button";
import { Reveal } from "@/components/shared/reveal";

export function Hero() {
  return (
    <section className="relative h-svh bg-charcoal text-cream overflow-hidden">
      <Image
        src="/images/hero/home-hero1.png"
        alt="Mountain stream at dusk with a BHULLEA H2O bottle"
        fill
        priority
        sizes="100vw"
        className="object-cover object-center"
      />
      <div className="absolute inset-0 bg-linear-to-b from-black/50 via-black/10 to-black/60" />

      {/* Bottle Image - Right Side, Half Above Half Below Fold */}
      <div className="absolute right-[5%] top-[55%] z-20 w-[30%] -translate-y-1/2 hidden lg:block">
        <Image
          src="/images/hero/bottle3.png"
          alt="BHULLEA H₂O Bottle"
          width={200}
          height={400}
          className="w-full h-auto object-contain drop-shadow-2xl"
          priority
        />
      </div>

      <div className="relative z-10 mx-auto flex min-h-svh max-w-7xl flex-col px-6 pb-20 pt-34 lg:px-10">
        <Reveal className="flex flex-col items-center text-center">
          <Image
            src="/icons/logo1.png"
            alt="BHULLEA crest"
            width={200}
            height={160}
            className="text-gold"
          />
          <h1 className="mt-4 font-display text-5xl font-medium tracking-[0.04em] md:text-7xl lg:text-8xl">
            BHULLEA
          </h1>
          <p className="mt-4 font-display text-2xl leading-snug md:text-4xl">
            Crafted with Purity.
            <br />
            Rooted in Legacy.
          </p>
        </Reveal>

        <Reveal delay={0.2} className="mt-auto max-w-xs pt-100 ">
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

      <ChevronDown
        className="absolute bottom-6 left-1/2 z-10 h-6 w-6 -translate-x-1/2 animate-bounce text-gold"
        aria-hidden
      />
    </section>
  );
}
