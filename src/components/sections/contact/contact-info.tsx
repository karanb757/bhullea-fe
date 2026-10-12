import { contactChannels } from "@/data/contact";
import { MapPin } from "lucide-react";
import { Reveal } from "@/components/shared/reveal";

export function ContactInfo() {
  return (
    <Reveal>
      <div className="space-y-8">
        {contactChannels.map(({ label, email, icon: Icon }) => (
          <div key={label} className="flex items-start gap-4">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-gold/30 text-gold">
              <Icon className="h-4 w-4" />
            </div>
            <div>
              <p className="font-display text-xs uppercase tracking-widest text-charcoal/50">
                {label}
              </p>
              <a
                href={`mailto:${email}`}
                className="mt-1 text-sm text-charcoal transition hover:text-gold"
              >
                {email}
              </a>
            </div>
          </div>
        ))}

        {/* Office */}
        <div className="flex items-start gap-4 pt-4 border-t border-charcoal/10">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-gold/30 text-gold">
            <MapPin className="h-4 w-4" />
          </div>
          <div>
            <p className="font-display text-xs uppercase tracking-widest text-charcoal/50">
              Our Office
            </p>
            <p className="mt-1 text-sm text-charcoal/70 leading-relaxed">
              BHULLEA Group Private Limited
              <br />
              [Registered / Corporate Address]
              <br />
              India
            </p>
          </div>
        </div>
      </div>
    </Reveal>
  );
}
