import { Code2, Cpu, Shield, GraduationCap } from "lucide-react";
import type { AboutHighlight } from "@/types";

export const ABOUT_HIGHLIGHTS: AboutHighlight[] = [
  {
    icon: Code2,
    title: "Full-Stack Excellence",
    description:
      "Expert in React, TypeScript, Next.js, Node.js, and GraphQL — building end-to-end systems that scale.",
    theme: {
      color: "text-emerald-400",
      bg: "bg-emerald-500/10",
      border: "border-emerald-500/20",
    },
  },
  {
    icon: Cpu,
    title: "Systems at Scale",
    description:
      "Designed architectures handling 1M+ API requests at 99.9% uptime and 100K+ daily active users.",
    theme: {
      color: "text-cyan-400",
      bg: "bg-cyan-500/10",
      border: "border-cyan-500/20",
    },
  },
  {
    icon: Shield,
    title: "Security-First",
    description:
      "Specialising in software security and secure coding practices — currently researching AI-assisted development.",
    theme: {
      color: "text-teal-400",
      bg: "bg-teal-500/10",
      border: "border-teal-500/20",
    },
  },
  {
    icon: GraduationCap,
    title: "Continuous Learner",
    description:
      "MSc in Software Engineering at University of Turku (GPA 4.4/5.0), building on 5+ years of industry experience.",
    theme: {
      color: "text-emerald-400",
      bg: "bg-emerald-500/10",
      border: "border-emerald-500/20",
    },
  },
];
