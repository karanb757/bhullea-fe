import Image from "next/image";
import { ContactInfo } from "@/components/sections/contact/contact-info";
import { ContactForm } from "@/components/sections/contact/contact-form";
import { Reveal } from "@/components/shared/reveal";
import { Container } from "@/components/shared/container";
import { Section } from "@/components/shared/section";
import { Send, Briefcase, Video } from "lucide-react";

export const metadata = {
  title: "Contact — BHULLEA",
  description: "Get in touch with the House of BHULLEA. We'd love to hear from you.",
};

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative flex min-h-[55vh] items-end overflow-hidden bg-charcoal text-cream">
        <Image
          src="/images/contact/hero.jpg"
          alt="Golden sunset over Himalayan mountains"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/10 to-black/75" />
        <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pb-20 pt-40 lg:px-10">
          <Reveal>
            <h1 className="font-heading text-5xl leading-tight md:text-7xl">
              GET IN TOUCH
            </h1>
            <p className="mt-3 font-display text-lg text-cream/70">
              We&apos;d love to hear from you.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Content */}
      <Section className="bg-cream text-charcoal">
        <Container>
          <div className="grid gap-16 lg:grid-cols-2 lg:gap-24">
            {/* Left — contact channels */}
            <div>
              <ContactInfo />

              {/* Social */}
              <div className="mt-10 pt-8 border-t border-charcoal/10">
                <p className="font-display text-xs uppercase tracking-widest text-charcoal/50 mb-4">
                  Follow Us
                </p>
                <div className="flex gap-4">
                  {[
                    { Icon: Send, href: "https://instagram.com", label: "Instagram" },
                    { Icon: Briefcase, href: "https://linkedin.com", label: "LinkedIn" },
                    { Icon: Video, href: "https://youtube.com", label: "YouTube" },
                  ].map(({ Icon, href, label }) => (
                    <a
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={label}
                      className="flex h-9 w-9 items-center justify-center rounded-full border border-charcoal/20 text-charcoal/60 transition hover:border-gold hover:text-gold"
                    >
                      <Icon className="h-4 w-4" />
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Right — form */}
            <div>
              <Reveal>
                <p className="font-display text-xs uppercase tracking-widest text-gold mb-6">
                  Send Us a Message
                </p>
              </Reveal>
              <ContactForm />
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
