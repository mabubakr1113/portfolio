import { Mail, Phone, MapPin, Github, Linkedin } from "lucide-react";
import { PERSONAL } from "./personal";
import type { ContactLink, SocialLink } from "@/types";

export const CONTACT_LINKS: ContactLink[] = [
  {
    icon: Mail,
    label: "Email",
    value: PERSONAL.email,
    href: `mailto:${PERSONAL.email}`,
    theme: {
      color: "text-emerald-400",
      bg: "bg-emerald-500/10",
      border: "border-emerald-500/20",
    },
  },
  {
    icon: Phone,
    label: "Phone",
    value: PERSONAL.phone,
    href: `tel:${PERSONAL.phone.replace(/\s/g, "")}`,
    theme: {
      color: "text-cyan-400",
      bg: "bg-cyan-500/10",
      border: "border-cyan-500/20",
    },
  },
  {
    icon: MapPin,
    label: "Location",
    value: PERSONAL.location,
    href: `https://maps.google.com/?q=${encodeURIComponent(PERSONAL.location)}`,
    theme: {
      color: "text-teal-400",
      bg: "bg-teal-500/10",
      border: "border-teal-500/20",
    },
  },
];

export const SOCIAL_LINKS: SocialLink[] = [
  {
    icon: Github,
    label: "GitHub",
    href: PERSONAL.github,
    user: PERSONAL.githubUser,
    hoverClass: "hover:border-gray-500/50 hover:text-white",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    href: PERSONAL.linkedin,
    user: PERSONAL.linkedinUser,
    hoverClass: "hover:border-blue-500/50 hover:text-blue-400",
  },
];
