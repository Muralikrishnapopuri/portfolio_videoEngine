"use client";

import { motion } from "framer-motion";
import { ModuleShowcase } from "./ModuleShowcase";
import { TerminalDemo } from "./TerminalDemo";
import { EXPERIENCE } from "@/data/experience";
import { Check } from "lucide-react";
import { fadeInUp, viewportOnce } from "@/lib/motion";

export function RestoSoftFlagship() {
  const job = EXPERIENCE[0];

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      variants={fadeInUp}
      className="relative pl-8 md:pl-16 pb-20"
    >
      <div className="absolute left-0 top-2 w-4 h-4 rounded-full bg-crimson shadow-glow-red" />

      <div className="mono-caps text-text-dim mb-2">{job.duration}</div>
      <div className="text-text-body text-sm mb-1">{job.company} · {job.location}</div>

      <h3 className="font-display text-hero text-text-primary mt-4">
        Resto<span className="text-crimson-gradient">Soft</span>
      </h3>

      <div className="mt-4 inline-flex items-center gap-2 px-4 py-2 bg-cobalt/20 border border-cobalt/40 rounded">
        <span className="w-2 h-2 rounded-full bg-cobalt-light" />
        <span className="mono-caps text-cobalt-light text-xs">INDUSTRY</span>
      </div>

      <div className="mt-6 flex flex-wrap gap-2">
        {job.stack?.map((s) => (
          <span key={s} className="px-3 py-1 text-xs font-mono bg-surface border border-crimson/20 rounded text-text-body">
            {s}
          </span>
        ))}
      </div>

      <div className="mt-12 grid grid-cols-1 gap-12">
        <div>
          <h4 className="mono-caps text-crimson mb-4">Act I — Module Showcase</h4>
          <ModuleShowcase />
        </div>
        <div>
          <h4 className="mono-caps text-crimson mb-4">Act II — Live System</h4>
          <TerminalDemo />
        </div>
      </div>

      <div className="mt-12">
        <h4 className="mono-caps text-crimson mb-4">Achievements</h4>
        <ul className="space-y-3">
          {job.achievements?.map((a, i) => (
            <motion.li
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="flex items-start gap-3"
            >
              <Check className="h-5 w-5 text-crimson mt-0.5 flex-shrink-0" />
              <span className="text-text-body">{a}</span>
            </motion.li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
}