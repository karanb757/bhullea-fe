import Link from "next/link";
import { cn } from "@/lib/utils";

const variants = {
  gold: "bg-gradient-to-b from-[#e6c386] to-gold-dark text-charcoal shadow-md hover:brightness-110",
  outline: "border border-cream/60 text-cream hover:bg-cream/10",
};

export function CTAButton({
  href,
  children,
  variant = "gold",
  className,
}: {
  href: string;
  children: React.ReactNode;
  variant?: keyof typeof variants;
  className?: string;
}) {
  return (
    <Link
      href={href}
      className={cn(
        "inline-flex items-center justify-center rounded-md px-7 py-3 font-display text-lg font-semibold transition",
        variants[variant],
        className
      )}
    >
      {children}
    </Link>
  );
}