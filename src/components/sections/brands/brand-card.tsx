import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { type Brand } from "@/config/brands";
import { Reveal } from "@/components/shared/reveal";

export function BrandCard({ brand }: { brand: Brand }) {
  const isLive = brand.status === "live";

  return (
    <Reveal>
      <div className="group relative flex flex-col overflow-hidden rounded-sm border border-charcoal/10 bg-cream">
        {/* Logo area */}
        <div className="flex h-40 items-center justify-center bg-charcoal/5 p-8">
          <div className="relative h-16 w-full">
            <Image
              src={brand.logo}
              alt={`${brand.name} logo`}
              fill
              sizes="200px"
              className="object-contain"
            />
          </div>
        </div>

        {/* Text */}
        <div className="flex flex-1 flex-col p-6">
          <p className="font-display text-xs uppercase tracking-widest text-gold">
            {brand.category}
          </p>
          <h3 className="mt-1 font-heading text-lg text-charcoal">{brand.name}</h3>
          <p className="mt-2 text-sm leading-relaxed text-charcoal/60">
            {brand.description}
          </p>

          <div className="mt-auto pt-5">
            {isLive ? (
              <Link
                href={brand.href}
                className="flex items-center gap-2 font-display text-xs uppercase tracking-widest text-charcoal transition group-hover:text-gold"
              >
                Learn More <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            ) : (
              <span className="font-display text-xs uppercase tracking-widest text-charcoal/40">
                Coming Soon
              </span>
            )}
          </div>
        </div>
      </div>
    </Reveal>
  );
}
