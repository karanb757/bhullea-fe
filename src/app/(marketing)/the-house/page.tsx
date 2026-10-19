import Image from "next/image";
import { Story } from "@/components/sections/house/story";
import { VisionMission } from "@/components/sections/house/vision-mission";
import { ValuesStrip } from "@/components/sections/house/values-strip";
import { Reveal } from "@/components/shared/reveal";

export const metadata = {
  title: "The House of BHULLEA",
  description:
    "A timeless vision. A brighter tomorrow. The story, vision, mission and values behind the House of BHULLEA.",
};

export default function TheHousePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative flex min-h-[110vh] items-center overflow-hidden bg-charcoal text-cream">
        <Image
          src="/images/house/story.png"
          alt="Grand Indian palace at golden hour"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pb-20 lg:px-10">
          <Reveal>
            <span className="font-medium text-xs bg-black uppercase tracking-widest text-gold">
              A timeless vision. A brighter tomorrow.
            </span>
            <h1 className="mt-3 font-heading text-5xl leading-tight md:text-7xl lg:text-8xl">
              THE HOUSE
              <br />
              OF BHULLEA
            </h1>
          </Reveal>
        </div>
      </section>

      <Story />
      <VisionMission />
      
      <ValuesStrip />
    </>
  );
}
