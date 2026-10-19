"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { navLinks, shopLink } from "@/config/navigation";
import { useScrollPosition } from "@/hooks/use-scroll-position";
import { Logo } from "@/components/shared/logo";
import { MobileNav } from "./mobile-nav";

export function Navbar() {
  const pathname = usePathname();
  const scrolled = useScrollPosition() > 40;

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-charcoal/80 py-3 shadow-lg backdrop-blur-md"
          : "bg-linear-to-b from-black/40 to-transparent py-3 md:py-5 lg:py-5 xl:py-5",
      )}
    >
      <div className="flex items-center justify-between px-4 sm:px-6 md:px-10 lg:px-20">
        <Logo />

        <nav className="hidden items-center gap-6 lg:flex" aria-label="Main">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "font-display text-base font-medium tracking-wide text-cream/85 transition hover:text-cream",
                isActive(link.href) &&
                  "text-cream underline decoration-gold decoration-1 underline-offset-8",
              )}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href={shopLink.href}
            className="rounded-sm border border-cream/70 px-6 py-1.5 font-display text-[15px] font-semibold text-cream transition hover:bg-cream hover:text-charcoal"
          >
            {shopLink.label}
          </Link>
        </nav>

        <MobileNav />
      </div>
    </header>
  );
}
