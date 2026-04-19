"use client";

import { motion } from "framer-motion";
import { ProjectCard } from "./ProjectCard";
import { PROJECTS } from "@/data/projects";
import { fadeInUp, viewportOnce } from "@/lib/motion";

export function ProjectsSection() {
  return (
    <section id="projects" className="container-cinematic section-padding">
      <motion.div initial="hidden" whileInView="visible" viewport={viewportOnce} variants={fadeInUp} className="mb-16">
        <span className="mono-caps text-crimson">04 — Projects</span>
        <h2 className="mt-4 text-section font-display">
          Personal builds. <br />
          <span className="text-crimson-gradient">Live and shipped.</span>
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {PROJECTS.map((p) => (
          <ProjectCard key={p.id} project={p} />
        ))}
      </div>
    </section>
  );
}