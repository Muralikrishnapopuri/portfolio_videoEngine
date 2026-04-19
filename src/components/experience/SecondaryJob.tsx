"use client";

import { motion } from "framer-motion";
import type { Job } from "@/types";
import { Badge } from "../ui/badge";
import { ExternalLink } from "lucide-react";
import { fadeInUp, viewportOnce } from "@/lib/motion";

export function SecondaryJob({ job }: { job: Job }) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      variants={fadeInUp}
      className="relative pl-8 md:pl-16 pb-16"
    >
      <div className="absolute left-[2px] top-2 w-3 h-3 rounded-full bg-crimson/60 border border-crimson" />

      <div className="mono-caps text-text-dim mb-1">{job.duration}</div>
      <h3 className="font-display text-2xl text-text-primary">{job.company}</h3>
      <div className="text-sm text-text-body mt-1">{job.role}</div>

      {job.type && (
        <Badge className="mt-2 bg-cobalt/30 text-cobalt-light border-cobalt/40 font-mono text-[10px]">
          {job.type.toUpperCase()}
        </Badge>
      )}

      <p className="mt-4 text-text-body">{job.highlights}</p>

      {job.certificateUrl && (
        <a
          href={job.certificateUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 mt-4 text-sm text-crimson hover:text-crimson-glow transition-colors font-mono"
        >
          View Certificate <ExternalLink className="h-3 w-3" />
        </a>
      )}
    </motion.div>
  );
}