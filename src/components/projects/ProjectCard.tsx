"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { GithubIcon } from "../icons/GithubIcon";
import { useRef, useState } from "react";
import type { Project } from "@/types";
import { Button } from "../ui/button";

export function ProjectCard({ project }: { project: Project }) {
  const ref = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const onMove = (e: React.MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 10;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * -10;
    setTilt({ x: y, y: x });
  };

  const onLeave = () => setTilt({ x: 0, y: 0 });

  return (
    <motion.div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      style={{
        transform: `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
        transition: "transform 0.2s ease-out",
      }}
      className="group relative bg-surface border border-crimson/20 rounded-lg overflow-hidden hover:border-crimson hover:shadow-glow-crimson transition-all"
    >
      <div className="aspect-video bg-gradient-to-br from-crimson/20 via-surface to-cobalt/20 flex items-center justify-center">
        <span className="font-display text-4xl text-crimson-gradient opacity-50">{project.title}</span>
      </div>

      <div className="p-6">
        <div className="mono-caps text-text-dim mb-2">{project.date}</div>
        <h3 className="font-display text-xl text-text-primary mb-2">{project.title}</h3>
        <p className="text-sm text-text-body mb-4 line-clamp-2">{project.description}</p>

        <div className="flex flex-wrap gap-1.5 mb-6">
          {project.stack.slice(0, 4).map((t) => (
            <span key={t} className="px-2 py-0.5 text-[10px] font-mono bg-void border border-crimson/20 rounded text-text-body">
              {t}
            </span>
          ))}
        </div>

        <div className="flex gap-2">
          <Button asChild size="sm" className="bg-crimson hover:bg-crimson-glow text-white border-0 flex-1">
            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
              Live <ExternalLink className="ml-2 h-3 w-3" />
            </a>
          </Button>
          {project.sourceUrl && (
            <Button asChild size="sm" variant="outline" className="border-cobalt text-cobalt-light">
              <a href={project.sourceUrl} target="_blank" rel="noopener noreferrer">
                <GithubIcon className="h-3 w-3" />
              </a>
            </Button>
          )}
        </div>
      </div>
    </motion.div>
  );
}