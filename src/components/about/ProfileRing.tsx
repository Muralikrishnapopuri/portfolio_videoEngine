"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export function ProfileRing() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className="relative mx-auto w-72 h-72 md:w-96 md:h-96"
    >
      <div className="absolute inset-0 rounded-full bg-gradient-to-br from-crimson via-crimson-deep to-cobalt blur-2xl opacity-30 animate-crimson-pulse" />
      <div className="relative w-full h-full rounded-full overflow-hidden border-2 border-crimson/40 shadow-glow-crimson-lg bg-surface">
        <div className="absolute inset-0 bg-gradient-to-br from-crimson/20 via-transparent to-cobalt/20" />
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="font-display text-8xl text-crimson-gradient">MK</span>
        </div>
            <Image src="/assets/images/profile.png" alt="Murali Krishna" sizes="" fill className="object-cover" />

        {/* Replace above with real photo when ready:
            <Image src="/assets/images/profile.jpg" alt="Murali Krishna" fill className="object-cover" />
         */}
      </div>
    </motion.div>
  );
}