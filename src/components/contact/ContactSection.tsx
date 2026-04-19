"use client";

import { motion } from "framer-motion";
import { ContactForm } from "./ContactForm";
import { SocialLinks } from "./SocialLinks";
import { fadeInUp, viewportOnce } from "@/lib/motion";

export function ContactSection() {
  return (
    <section id="contact" className="container-cinematic section-padding relative overflow-hidden">
      <div className="absolute inset-0 bg-crimson-radial opacity-40 pointer-events-none" />

      <motion.div initial="hidden" whileInView="visible" viewport={viewportOnce} variants={fadeInUp} className="mb-16 relative">
        <span className="mono-caps text-crimson">05 — Contact</span>
        <h2 className="mt-4 text-section font-display">
          Let&apos;s build <br />
          <span className="text-crimson-gradient">something real.</span>
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 relative">
        <ContactForm />
        <SocialLinks />
      </div>
    </section>
  );
}