import type { LucideIcon } from "lucide-react";

export interface NavLink {
  label: string;
  href: string;
}

export interface Stat {
  label: string;
  value: string;
}

export interface ExperienceRole {
  title: string;
  company: string;
  location: string;
  period: string;
  current: boolean;
  highlights: string[];
  tech: string[];
}

export interface Education {
  degree: string;
  institution: string;
  location: string;
  period: string;
  gpa: string;
  specialisation: string;
}

export type MasteryLevel = "Expert" | "Proficient" | "Familiar";

export interface MasteryGroup {
  level: MasteryLevel;
  description: string;
  skills: string[];
}

export interface Project {
  title: string;
  period: string;
  description: string;
  highlights: string[];
  tech: string[];
  badge: string;
}

export interface Achievement {
  icon: LucideIcon;
  title: string;
  org: string;
  year: string;
  description: string;
  highlight: string;
  theme: ColorTheme;
}

export interface ContactLink {
  icon: LucideIcon;
  label: string;
  value: string;
  href: string;
  theme: ColorTheme;
}

export interface SocialLink {
  icon: LucideIcon;
  label: string;
  href: string;
  user: string;
  hoverClass: string;
}

export interface ColorTheme {
  color: string;
  bg: string;
  border: string;
  bar?: string;
}

export interface AboutHighlight {
  icon: LucideIcon;
  title: string;
  description: string;
  theme: ColorTheme;
}
