"use client";

import { motion } from "framer-motion";
import { RestoSoftFlagship } from "./RestoSoftFlagship";
import { SecondaryJob } from "./SecondaryJob";
import { EXPERIENCE } from "@/data/experience";
import { fadeInUp, viewportOnce } from "@/lib/motion";

export function ExperienceSection() {
  return (
    <section id="experience" className="container-cinematic section-padding">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        variants={fadeInUp}
        className="mb-16"
      >
        <span className="mono-caps text-crimson">03 — Experience</span>
        <h2 className="mt-4 text-section font-display">
          Shipped in production. <br />
          <span className="text-crimson-gradient">Used daily in restaurants.</span>
        </h2>
      </motion.div>

      <div className="relative">
        <div className="absolute left-[7px] md:left-[7px] top-0 bottom-0 w-[2px] crimson-rule" />

        <RestoSoftFlagship />

        {EXPERIENCE.slice(1).map((job) => (
          <SecondaryJob key={job.id} job={job} />
        ))}
      </div>
    </section>
  );
}