"use client";

import { cn } from "@/lib/utils";
import type { Skill } from "@/types";
import { SkillBadge } from "./SkillBadge";

export function OrbitRing({
  skills,
  radius,
  direction = "cw",
}: {
  skills: Skill[];
  radius: number;
  direction?: "cw" | "ccw";
}) {
  return (
    <div
      className={cn(
        "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-crimson/10 will-transform",
        direction === "cw" ? "animate-orbit-cw" : "animate-orbit-ccw"
      )}
      style={{
        width: radius * 2,
        height: radius * 2,
      }}
    >
      {skills.map((skill, i) => (
        <SkillBadge
          key={skill.name}
          skill={skill}
          angle={(360 / skills.length) * i}
          radius={radius}
        />
      ))}
    </div>
  );
}