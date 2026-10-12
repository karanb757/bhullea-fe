"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { Reveal } from "@/components/shared/reveal";

interface FormValues {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<FormValues>();

  async function onSubmit(data: FormValues) {
    // TODO: wire to /api/contact
    await new Promise((r) => setTimeout(r, 800));
    console.log(data);
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <Reveal>
        <div className="rounded-sm border border-gold/30 bg-gold/5 p-10 text-center">
          <p className="font-heading text-2xl text-charcoal">Thank you.</p>
          <p className="mt-3 text-sm text-charcoal/60">
            We&apos;ve received your message and will be in touch shortly.
          </p>
        </div>
      </Reveal>
    );
  }

  return (
    <Reveal>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
        {[
          { id: "name", label: "Name", type: "text", placeholder: "Your name" },
          { id: "email", label: "Email", type: "email", placeholder: "your@email.com" },
          { id: "subject", label: "Subject", type: "text", placeholder: "How can we help?" },
        ].map(({ id, label, type, placeholder }) => (
          <div key={id}>
            <label htmlFor={id} className="mb-1 block font-display text-xs uppercase tracking-widest text-charcoal/60">
              {label}
            </label>
            <input
              id={id}
              type={type}
              placeholder={placeholder}
              {...register(id as keyof FormValues, { required: true })}
              className="w-full rounded-sm border border-charcoal/20 bg-transparent px-4 py-3 text-sm text-charcoal placeholder:text-charcoal/30 focus:border-gold focus:outline-none transition"
            />
            {errors[id as keyof FormValues] && (
              <p className="mt-1 text-xs text-red-500">This field is required.</p>
            )}
          </div>
        ))}

        <div>
          <label htmlFor="message" className="mb-1 block font-display text-xs uppercase tracking-widest text-charcoal/60">
            Message
          </label>
          <textarea
            id="message"
            rows={4}
            placeholder="Tell us more…"
            {...register("message", { required: true })}
            className="w-full rounded-sm border border-charcoal/20 bg-transparent px-4 py-3 text-sm text-charcoal placeholder:text-charcoal/30 focus:border-gold focus:outline-none transition resize-none"
          />
          {errors.message && (
            <p className="mt-1 text-xs text-red-500">This field is required.</p>
          )}
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full rounded-sm bg-charcoal px-6 py-3 font-display text-sm uppercase tracking-widest text-cream transition hover:bg-charcoal/80 disabled:opacity-50"
        >
          {isSubmitting ? "Sending…" : "Submit"}
        </button>
      </form>
    </Reveal>
  );
}
