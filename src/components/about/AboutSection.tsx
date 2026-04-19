"use client";

import { motion } from "framer-motion";
import { ProfileRing } from "./ProfileRing";
import { StatCounter } from "./StatCounter";
import { Button } from "../ui/button";
import { PERSONAL, STATS, LINKS } from "@/lib/constants";
import { ArrowRight } from "lucide-react";
import { GithubIcon } from "../icons/GithubIcon";
import { fadeInUp, viewportOnce } from "@/lib/motion";

export function AboutSection() {
  return (
    <section id="about" className="container-cinematic section-padding">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        variants={fadeInUp}
        className="mb-16"
      >
        <span className="mono-caps text-crimson">01 — About</span>
        <h2 className="mt-4 text-section font-display">
          Full-stack engineer. <br />
          <span className="text-crimson-gradient"> industry specialist.</span>
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <ProfileRing />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={fadeInUp}
          className="space-y-8"
        >
          <p className="text-body-lg text-text-body leading-relaxed">{PERSONAL.summary}</p>

          <div className="flex flex-wrap gap-4">
            <Button asChild className="bg-crimson hover:bg-crimson-glow text-white border-0">
              <a href="#projects">
                View Projects <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
            <Button asChild variant="outline" className="border-cobalt text-cobalt-light hover:bg-cobalt/10">
              <a href={LINKS.github} target="_blank" rel="noopener noreferrer">
                <GithubIcon className="mr-2 h-4 w-4" /> GitHub
              </a>
            </Button>
          </div>
        </motion.div>
      </div>

      <div className="mt-20 grid grid-cols-2 lg:grid-cols-4 gap-8">
        {STATS.map((s) => (
          <StatCounter key={s.label} {...s} />
        ))}
      </div>
    </section>
  );
}