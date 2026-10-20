import { z } from "zod";

export const contactFormSchema = z.object({
  name: z
    .string()
    .min(2, "Name must be at least 2 characters")
    .max(50, "Name cannot exceed 50 characters")
    .regex(/^[a-zA-Z\s'-]+$/, "Name can only contain letters, spaces, hyphens, and apostrophes")
    .transform((val) => val.trim()),

  email: z
    .string()
    .email("Please enter a valid email address")
    .max(100, "Email cannot exceed 100 characters")
    .toLowerCase(),

  subject: z
    .string()
    .min(5, "Subject must be at least 5 characters")
    .max(100, "Subject cannot exceed 100 characters")
    .refine(
      (val) => val.trim().split(/\s+/).filter(Boolean).length <= 15,
      "Subject cannot exceed 15 words"
    )
    .transform((val) => val.trim()),

  message: z
    .string()
    .min(10, "Message must be at least 10 characters")
    .max(5000, "Message cannot exceed 5000 characters")
    .refine(
      (val) => val.trim().split(/\s+/).filter(Boolean).length <= 500,
      "Message cannot exceed 500 words"
    )
    .transform((val) => val.trim()),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;

// Helper functions for validation feedback
export function getWordCount(text: string): number {
  return text.trim().split(/\s+/).filter((word) => word.length > 0).length;
}

export function getCharCount(text: string): number {
  return text.length;
}

export const VALIDATION_LIMITS = {
  name: {
    min: 2,
    max: 50,
    label: "Name",
  },
  email: {
    min: 5,
    max: 100,
    label: "Email",
  },
  subject: {
    min: 5,
    max: 100,
    maxWords: 15,
    label: "Subject",
  },
  message: {
    min: 10,
    max: 5000,
    maxWords: 500,
    label: "Message",
  },
};

