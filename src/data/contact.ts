import { Mail, Briefcase, Newspaper, Users, type LucideIcon } from "lucide-react";

export const contactChannels: { label: string; email: string; icon: LucideIcon }[] = [
  { label: "General Enquiries", email: "info@bhullea.com", icon: Mail },
  { label: "Business & Partnerships", email: "business@bhullea.com", icon: Briefcase },
  { label: "Media & Press", email: "press@bhullea.com", icon: Newspaper },
  { label: "Careers", email: "careers@bhullea.com", icon: Users },
];
