import { Trophy, Star, Users, Rocket, BookOpen } from "lucide-react";
import type { Achievement } from "@/types";

export const ACHIEVEMENTS: Achievement[] = [
  {
    icon: Trophy,
    title: "SinceAI Hackathon — Top 3 & ElevenLabs AI Challenge Winner",
    org: "Business Turku",
    year: "2025",
    description:
      "Placed top 3 out of 50+ competing teams, winning the ElevenLabs AI challenge by building an AI-powered investor–startup matching platform using Supabase, Voyage AI, ElevenLabs, OpenAI, and Vercel.",
    highlight: "Top 3 / 50+ Teams",
    theme: {
      color: "text-amber-400",
      bg: "bg-amber-500/10",
      border: "border-amber-500/20",
    },
  },
  {
    icon: Rocket,
    title: "Co-founder — Rexia Technology",
    org: "Rexia Technology",
    year: "2019 – 2021",
    description:
      "Co-founded an EdTech startup delivering a gamified online learning platform. Led product development end-to-end — from architecture and UI to deployment — gaining deep experience in building 0-to-1 products.",
    highlight: "Co-founder",
    theme: {
      color: "text-emerald-400",
      bg: "bg-emerald-500/10",
      border: "border-emerald-500/20",
    },
  },
  {
    icon: Star,
    title: "Microsoft Student Ambassador",
    org: "Microsoft",
    year: "07/2019 – 06/2022",
    description:
      "Selected as the first Student Ambassador from my university, leading initiatives in cloud computing, blockchain, and AI. Conducted technical workshops and leadership seminars across campus.",
    highlight: "First in University",
    theme: {
      color: "text-cyan-400",
      bg: "bg-cyan-500/10",
      border: "border-cyan-500/20",
    },
  },
  {
    icon: BookOpen,
    title: "PIAIC Presidential Initiative — AI & Cloud",
    org: "Government of Pakistan",
    year: "2019 – 2020",
    description:
      "Completed the Presidential Initiative for Artificial Intelligence & Computing (PIAIC) programme — an intensive government-backed course covering AI, machine learning, and cloud computing.",
    highlight: "Presidential Award",
    theme: {
      color: "text-teal-400",
      bg: "bg-teal-500/10",
      border: "border-teal-500/20",
    },
  },
  {
    icon: Users,
    title: "Engineering Leadership",
    org: "Devsinc",
    year: "2023 – 2025",
    description:
      "Onboarded and mentored 10+ engineers, establishing engineering best practices and scaling team capacity. Drove $500K+ in business revenue through technical leadership and client partnerships.",
    highlight: "10+ Engineers Mentored",
    theme: {
      color: "text-emerald-400",
      bg: "bg-emerald-500/10",
      border: "border-emerald-500/20",
    },
  },
];
