import Link from "next/link";
import { Send, Briefcase, Video } from "lucide-react";
import { Logo } from "@/components/shared/logo";
import { navLinks } from "@/config/navigation";

export function Footer() {
  return (
    <footer className="bg-charcoal text-cream/70">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-10">
        <div className="grid gap-12 md:grid-cols-3">
          {/* Brand */}
          <div className="space-y-4">
            <Logo className="text-cream" />
            <p className="font-display text-sm leading-relaxed text-cream/60">
              Crafted with Purity.
              <br />
              Rooted in Legacy.
            </p>
            <p className="text-xs text-cream/40">
              A House of Brands, Built for Generations.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <p className="mb-4 font-display text-xs uppercase tracking-widest text-gold">
              Navigate
            </p>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm transition hover:text-cream"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Social */}
          <div>
            <p className="mb-4 font-display text-xs uppercase tracking-widest text-gold">
              Get in Touch
            </p>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="mailto:info@bhullea.com"
                  className="transition hover:text-cream"
                >
                  info@bhullea.com
                </a>
              </li>
              <li>
                <a
                  href="mailto:business@bhullea.com"
                  className="transition hover:text-cream"
                >
                  business@bhullea.com
                </a>
              </li>
            </ul>
            <div className="mt-6 flex gap-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="transition hover:text-cream"
              >
                <Send className="h-5 w-5" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="transition hover:text-cream"
              >
                <Briefcase className="h-5 w-5" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                className="transition hover:text-cream"
              >
                <Video className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-cream/10 pt-8 text-center text-xs text-cream/30">
          © {new Date().getFullYear()} BHULLEA Group Private Limited. All rights
          reserved.
        </div>
      </div>
    </footer>
  );
}
