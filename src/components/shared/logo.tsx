import Link from "next/link";
import { cn } from "@/lib/utils";

export function Crest({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 64 64"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      className={className}
      aria-hidden
    >
      <path d="M22 14l5 5 5-8 5 8 5-5-2 9H24l-2-9z" />
      <path d="M20 26h24v12c0 8-6 14-12 16-6-2-12-8-12-16V26z" />
      <path d="M32 30v18M25 36h14" />
    </svg>
  );
}

export function Logo({ className }: { className?: string }) {
  return (
    <Link
      href="/"
      aria-label="BHULLEA home"
      className={cn(
        "font-heading mb-2 text-2xl sm:text-3xl md:text-4xl font-medium tracking-[0.02em] text-white",
        className,
      )}
    >
      BHULLEA
    </Link>
  );
}
