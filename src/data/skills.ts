import type { Skill } from "@/types";

export const SKILLS_INNER: Skill[] = [
  { name: "React", context: "Core UI library for all personal projects", category: "frontend" },
  { name: "Next.js", context: "This portfolio + future SSR projects", category: "frontend" },
  { name: "TypeScript", context: "Waiter App in RestoSoft", category: "frontend" },
  { name: "JavaScript", context: "All RestoSoft frontends", category: "frontend" },
  { name: "Tailwind", context: "Utility-first styling", category: "frontend" },
  { name: "HBS", context: "SSR templates in RestoSoft Admin", category: "frontend" },
];

export const SKILLS_OUTER: Skill[] = [
  { name: "Node.js", context: "RestoSoft backend services", category: "backend" },
  { name: "Express", context: "High-performance billing engine", category: "backend" },
  { name: "PHP", context: "RestoSoft Admin controllers", category: "backend" },
  { name: "SQL", context: "Complex data relationships & queries", category: "backend" },
  { name: "MongoDB", context: "Personal projects — social, EMS", category: "backend" },
  { name: "Razorpay", context: "Sub-account payment routing", category: "tools" },
  { name: "Git", context: "Version control on every project", category: "tools" },
];