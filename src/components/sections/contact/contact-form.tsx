"use client";

import { useState, useMemo } from "react";
import { useForm, Controller } from "react-hook-form";
import { Reveal } from "@/components/shared/reveal";
import { getWordCount, getCharCount, VALIDATION_LIMITS } from "@/lib/validations/contact";

interface FormValues {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const { register, handleSubmit, formState: { errors, isSubmitting }, reset, watch } = useForm<FormValues>({
    mode: "onChange",
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  // Watch all fields for real-time validation feedback
  const watchedValues = watch();

  // Calculate character and word counts
  const charCounts = useMemo(() => ({
    name: getCharCount(watchedValues.name),
    email: getCharCount(watchedValues.email),
    subject: getCharCount(watchedValues.subject),
    message: getCharCount(watchedValues.message),
  }), [watchedValues]);

  const wordCounts = useMemo(() => ({
    subject: getWordCount(watchedValues.subject),
    message: getWordCount(watchedValues.message),
  }), [watchedValues]);

  async function onSubmit(data: FormValues) {
    setError(null);
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message || "Failed to send message");
      }

      setSubmitted(true);
      reset();
    } catch (err) {
      setError(err instanceof Error ? err.message : "An error occurred. Please try again.");
      console.error("Form submission error:", err);
    }
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

  const fieldsConfig = [
    {
      id: "name",
      label: "Name",
      type: "text",
      placeholder: "Your name",
      hint: `Max 50 characters (${charCounts.name}/50)`,
    },
    {
      id: "email",
      label: "Email",
      type: "email",
      placeholder: "your@email.com",
      hint: `Max 100 characters (${charCounts.email}/100)`,
    },
    {
      id: "subject",
      label: "Subject",
      type: "text",
      placeholder: "How can we help?",
      hint: `Max 15 words, 100 characters (${wordCounts.subject}/15 words, ${charCounts.subject}/100 chars)`,
    },
  ];

  return (
    <Reveal>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
        {error && (
          <div className="rounded-sm border border-red-300 bg-red-50 p-4 text-sm text-red-700">
            ❌ {error}
          </div>
        )}

        {fieldsConfig.map(({ id, label, type, placeholder, hint }) => (
          <div key={id}>
            <div className="flex items-center justify-between mb-1">
              <label htmlFor={id} className="block font-display text-xs uppercase tracking-widest text-charcoal/60">
                {label}
              </label>
              <span className="text-xs text-charcoal/40">{hint}</span>
            </div>
            <input
              id={id}
              type={type}
              placeholder={placeholder}
              {...register(id as keyof FormValues, {
                required: `${label} is required`,
                minLength: {
                  value: VALIDATION_LIMITS[id as keyof typeof VALIDATION_LIMITS]?.min || 1,
                  message: `${label} must be at least ${VALIDATION_LIMITS[id as keyof typeof VALIDATION_LIMITS]?.min} characters`,
                },
                maxLength: {
                  value: VALIDATION_LIMITS[id as keyof typeof VALIDATION_LIMITS]?.max || 1000,
                  message: `${label} cannot exceed ${VALIDATION_LIMITS[id as keyof typeof VALIDATION_LIMITS]?.max} characters`,
                },
                validate: {
                  noSpecialChars: (value) => {
                    if (id === "name") {
                      return /^[a-zA-Z\s'-]+$/.test(value) || "Name can only contain letters, spaces, hyphens, and apostrophes";
                    }
                    return true;
                  },
                  validEmail: (value) => {
                    if (id === "email") {
                      return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) || "Please enter a valid email address";
                    }
                    return true;
                  },
                  maxWords: (value) => {
                    if (id === "subject" && getWordCount(value) > 15) {
                      return "Subject cannot exceed 15 words";
                    }
                    return true;
                  },
                },
              })}
              className={`w-full rounded-sm border bg-transparent px-4 py-3 text-sm text-charcoal placeholder:text-charcoal/30 focus:outline-none transition ${
                errors[id as keyof FormValues]
                  ? "border-red-400 focus:border-red-500"
                  : "border-charcoal/20 focus:border-gold"
              }`}
            />
            {errors[id as keyof FormValues] && (
              <p className="mt-1 text-xs text-red-500">⚠️ {errors[id as keyof FormValues]?.message}</p>
            )}
          </div>
        ))}

        <div>
          <div className="flex items-center justify-between mb-1">
            <label htmlFor="message" className="block font-display text-xs uppercase tracking-widest text-charcoal/60">
              Message
            </label>
            <span className="text-xs text-charcoal/40">
              Max 500 words, 5000 chars ({wordCounts.message}/500 words, {charCounts.message}/5000 chars)
            </span>
          </div>
          <textarea
            id="message"
            rows={4}
            placeholder="Tell us more…"
            {...register("message", {
              required: "Message is required",
              minLength: {
                value: 10,
                message: "Message must be at least 10 characters",
              },
              maxLength: {
                value: 5000,
                message: "Message cannot exceed 5000 characters",
              },
              validate: (value) => {
                const words = getWordCount(value);
                if (words > 500) {
                  return `Message cannot exceed 500 words (you have ${words} words)`;
                }
                return true;
              },
            })}
            className={`w-full rounded-sm border bg-transparent px-4 py-3 text-sm text-charcoal placeholder:text-charcoal/30 focus:outline-none transition resize-none ${
              errors.message
                ? "border-red-400 focus:border-red-500"
                : "border-charcoal/20 focus:border-gold"
            }`}
          />
          {errors.message && (
            <p className="mt-1 text-xs text-red-500">⚠️ {errors.message.message}</p>
          )}

          {/* Character limit indicator */}
          <div className="mt-2 h-1 bg-charcoal/10 rounded-full overflow-hidden">
            <div
              className={`h-full transition-all ${
                charCounts.message > 4500 ? "bg-red-500" : charCounts.message > 4000 ? "bg-orange-500" : "bg-gold"
              }`}
              style={{ width: `${Math.min((charCounts.message / 5000) * 100, 100)}%` }}
            ></div>
          </div>
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full rounded-sm bg-charcoal px-6 py-3 font-display text-sm uppercase tracking-widest text-cream transition hover:bg-charcoal/80 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSubmitting ? "Sending…" : "Submit"}
        </button>
      </form>
    </Reveal>
  );
}
