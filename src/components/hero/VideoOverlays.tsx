"use client";

import { motion } from "framer-motion";
import { PERSONAL, HERO_VIDEO, HERO_TECH_BADGES } from "@/lib/constants";

function inRange(p: number, start: number, end: number) {
  return p >= start && p <= end;
}

function fadeOpacity(p: number, start: number, end: number) {
  if (p < start) return 0;
  if (p > end) return 0;
  const fadeIn = 0.1;
  if (p < start + fadeIn) return (p - start) / fadeIn;
  const fadeOut = 0.05;
  if (p > end - fadeOut) return (end - p) / fadeOut;
  return 1;
}

export function VideoOverlays({ progress }: { progress: number }) {
  const t = HERO_VIDEO.overlays;

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {/* Vertical crimson rule */}
      <div
        className="absolute left-[8%] top-[10%] bottom-[10%] w-[2px] crimson-rule origin-top"
        style={{
          transform: `scaleY(${Math.min(1, Math.max(0, (progress - t.crimsonRule.start) / 0.3))})`,
          opacity: fadeOpacity(progress, t.crimsonRule.start, t.crimsonRule.end),
        }}
      />

      {/* Name */}
      <motion.div
        className="absolute left-[12%] top-[38%]"
        style={{
          opacity: fadeOpacity(progress, t.name.start, t.name.end),
          maxWidth: "80vw",
        }}
      >
        <h1 className="font-display text-text-primary leading-[1.05] whitespace-nowrap" style={{ fontSize: "clamp(1.8rem, 4.5vw, 4.2rem)" }}>
          {PERSONAL.firstName}
          <br />
          <span className="text-crimson-gradient">{PERSONAL.lastName}</span>
        </h1>
      </motion.div>

      {/* Role */}
      <div
        className="absolute left-[12%] top-[55%] mono-caps text-text-body"
        style={{
          opacity: fadeOpacity(progress, t.role.start, t.role.end),
          fontSize: "clamp(0.7rem, 1.1vw, 0.85rem)",
          letterSpacing: "0.2em",
        }}
      >
        {PERSONAL.role}
      </div>

      {/* Location */}
      <div
        className="absolute left-[12%] top-[60%] mono-caps text-text-dim"
        style={{
          opacity: fadeOpacity(progress, t.location.start, t.location.end),
          fontSize: "clamp(0.6rem, 0.9vw, 0.7rem)",
          letterSpacing: "0.15em",
        }}
      >
        {PERSONAL.locationShort}
      </div>

      {/* RestoSoft badge */}
      <div
        className="absolute right-[10%] top-[30%]"
        style={{ opacity: fadeOpacity(progress, t.restoSoftBadge.start, t.restoSoftBadge.end) }}
      >
        <div className="flex flex-col items-end gap-2">
          <span className="mono-caps text-cobalt-light text-[10px]">FLAGSHIP PROJECT</span>
          <div className="px-4 py-2 bg-cobalt/20 border border-cobalt/40 backdrop-blur-sm rounded">
            <span className="font-display text-lg text-text-primary">RestoSoft</span>
            <span className="ml-2 mono-caps text-[10px] text-cobalt-light">ERP · F&B</span>
          </div>
        </div>
      </div>

      {/* Tech stack */}
      <div
        className="absolute left-[12%] bottom-[18%] flex flex-wrap gap-2"
        style={{
          opacity: fadeOpacity(progress, t.techStack.start, t.techStack.end),
          maxWidth: "min(60vw, 500px)",
        }}
      >
        {HERO_TECH_BADGES.map((tech, i) => (
          <span
            key={tech}
            className="px-3 py-1 text-[11px] font-mono bg-surface/60 backdrop-blur-sm border border-crimson/20 rounded text-text-body"
            style={{
              transitionDelay: `${i * 60}ms`,
            }}
          >
            {tech}
          </span>
        ))}
      </div>

      {/* CTA */}
      <div className="absolute left-1/2 -translate-x-1/2 bottom-[6%] text-center">
        <div
          className="mono-caps text-text-dim"
          style={{
            opacity: fadeOpacity(progress, t.ctaScroll.start, t.ctaScroll.end),
            fontSize: "0.75rem",
          }}
        >
          Scroll to explore ↓
        </div>
        <div
          className="mono-caps text-crimson absolute inset-0"
          style={{
            opacity: inRange(progress, t.ctaBuild.start, t.ctaBuild.end) ? 1 : 0,
            fontSize: "0.75rem",
          }}
        >
          Let&apos;s build together ↓
        </div>
      </div>
    </div>
  );
}