"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { navLinks, shopLink } from "@/config/navigation";

export function MobileNav() {
  const [open, setOpen] = useState(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger className="text-cream lg:hidden" aria-label="Open menu">
        <Menu className="h-6 w-6" />
      </SheetTrigger>
      <SheetContent side="right" className="border-gold/20 bg-charcoal text-cream">
        <SheetTitle className="sr-only">Menu</SheetTitle>
        <nav className="mt-16 flex flex-col gap-6 px-6">
          {[...navLinks, shopLink].map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="font-display text-2xl text-cream/90 hover:text-gold"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </SheetContent>
    </Sheet>
  );
}