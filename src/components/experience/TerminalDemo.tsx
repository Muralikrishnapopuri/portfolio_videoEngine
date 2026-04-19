"use client";

import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const LINES = [
  { text: "> Table 7: 2× Butter Chicken, 1× Naan", color: "text-text-primary" },
  { text: "  KOT sent to kitchen... ✓ (18ms)", color: "text-crimson" },
  { text: "> Payment split: Vendor A ₹480 / Vendor B ₹120", color: "text-text-body" },
  { text: "  Razorpay Sub-account routing... ✓", color: "text-cobalt-light" },
  { text: "> Invoice #INV-2847 generated", color: "text-crimson-glow" },
];

export function TerminalDemo() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: false, amount: 0.4 });
  const [visibleLines, setVisibleLines] = useState(0);

  useEffect(() => {
    if (!inView) return;
    setVisibleLines(0);
    const interval = setInterval(() => {
      setVisibleLines((v) => (v >= LINES.length ? v : v + 1));
    }, 600);
    const reset = setTimeout(() => setVisibleLines(0), 8000);
    return () => {
      clearInterval(interval);
      clearTimeout(reset);
    };
  }, [inView, visibleLines === LINES.length]);

  return (
    <div ref={ref} className="bg-void border border-crimson/20 rounded-lg overflow-hidden shadow-glow-crimson">
      <div className="flex items-center gap-2 px-4 py-2 bg-surface border-b border-crimson/20">
        <span className="w-3 h-3 rounded-full bg-crimson" />
        <span className="w-3 h-3 rounded-full bg-text-dim" />
        <span className="w-3 h-3 rounded-full bg-cobalt" />
        <span className="ml-4 font-mono text-xs text-text-dim">restosoft-live-feed</span>
      </div>
      <div className="p-6 font-mono text-sm min-h-[240px]">
        {LINES.slice(0, visibleLines).map((line, i) => (
          <motion.div key={i} initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} className={line.color}>
            {line.text}
          </motion.div>
        ))}
        <span className="inline-block w-2 h-4 bg-crimson animate-cursor-blink ml-1 align-middle" />
      </div>
    </div>
  );
}