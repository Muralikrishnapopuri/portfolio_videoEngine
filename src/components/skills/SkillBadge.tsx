"use client";

import { useEffect, useState } from "react";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "../ui/tooltip";
import type { Skill } from "@/types";

export function SkillBadge({
  skill,
  angle,
  radius,
}: {
  skill: Skill;
  angle: number;
  radius: number;
}) {
  const [mounted, setMounted] = useState(false);
  const [pos, setPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const rad = (angle * Math.PI) / 180;
    // Round to 2 decimals to avoid floating-point hydration mismatches
    const x = Math.round(Math.cos(rad) * radius * 100) / 100;
    const y = Math.round(Math.sin(rad) * radius * 100) / 100;
    setPos({ x, y });
    setMounted(true);
  }, [angle, radius]);

  return (
    <TooltipProvider delayDuration={100}>
      <Tooltip>
        <TooltipTrigger asChild>
          <div
            className="absolute top-1/2 left-1/2 w-20 h-20 flex items-center justify-center rounded-full bg-surface border border-crimson/30 hover:border-crimson hover:shadow-glow-red transition-all cursor-pointer text-text-primary text-xs font-mono text-center p-2 will-transform"
            style={{
              transform: mounted
                ? `translate3d(calc(-50% + ${pos.x}px), calc(-50% + ${pos.y}px), 0)`
                : "translate3d(-50%, -50%, 0)",
              opacity: mounted ? 1 : 0,
              transition: "opacity 0.5s ease",
            }}
          >
            {skill.name}
          </div>
        </TooltipTrigger>
        <TooltipContent className="bg-surface border-crimson/40 text-text-primary">
          {skill.context}
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}