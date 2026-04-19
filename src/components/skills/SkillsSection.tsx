"use client";

import { motion } from "framer-motion";
import { OrbitRing } from "./OrbitRing";
import { MKMonogram } from "../global/MKMonogram";
import { SKILLS_INNER, SKILLS_OUTER } from "@/data/skills";
import { fadeInUp, viewportOnce } from "@/lib/motion";

export function SkillsSection() {
  return (
    <section id="skills" className="container-cinematic section-padding">
      <motion.div initial="hidden" whileInView="visible" viewport={viewportOnce} variants={fadeInUp} className="mb-16 text-center">
        <span className="mono-caps text-crimson">02 — Skills</span>
        <h2 className="mt-4 text-section font-display">
          Technologies <span className="text-crimson-gradient">in orbit</span>
        </h2>
        <p className="mt-4 text-text-body max-w-xl mx-auto">
          Hover over a badge to see where I&apos;ve used it in production.
        </p>
      </motion.div>

      <div className="relative w-full h-[600px] md:h-[700px] hidden md:block">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
          <MKMonogram size={80} />
        </div>
        <OrbitRing skills={SKILLS_INNER} radius={180} direction="cw" />
        <OrbitRing skills={SKILLS_OUTER} radius={300} direction="ccw" />
      </div>

      {/* Mobile fallback: simple grid */}
      <div className="md:hidden grid grid-cols-2 gap-4">
        {[...SKILLS_INNER, ...SKILLS_OUTER].map((s) => (
          <div key={s.name} className="bg-surface border border-crimson/20 rounded p-4">
            <div className="font-mono text-sm text-text-primary">{s.name}</div>
            <div className="text-xs text-text-dim mt-1">{s.context}</div>
          </div>
        ))}
      </div>
    </section>
  );
}