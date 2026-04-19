"use client";

import { motion, useInView, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect, useRef } from "react";

export function StatCounter({ value, suffix = "", label, description }: {
  value: number; suffix?: string; label: string; description: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.5 });
  const mv = useMotionValue(0);
  const rounded = useTransform(mv, (v) => Math.round(v));

  useEffect(() => {
    if (inView) {
      const controls = animate(mv, value, { duration: 2, ease: [0.22, 1, 0.36, 1] });
      return controls.stop;
    }
  }, [inView, mv, value]);

  return (
    <div ref={ref} className="border-l-2 border-crimson/30 pl-6 py-2">
      <div className="flex items-baseline gap-1">
        <motion.span className="font-display text-5xl md:text-6xl text-crimson-gradient">{rounded}</motion.span>
        <span className="font-display text-3xl text-crimson">{suffix}</span>
      </div>
      <div className="mt-2 text-sm font-medium text-text-primary">{label}</div>
      <div className="text-xs text-text-dim mt-1">{description}</div>
    </div>
  );
}