"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { MKMonogram } from "../global/MKMonogram";
import { MobileNav } from "./MobileNav";
import { NAV_LINKS, LINKS } from "@/lib/constants";
import { Button } from "../ui/button";
import { Download } from "lucide-react";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeId, setActiveId] = useState("");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 80);

      const sections = NAV_LINKS.map((l) => document.getElementById(l.id)).filter(Boolean);
      const current = sections.find((s) => {
        if (!s) return false;
        const rect = s.getBoundingClientRect();
        return rect.top <= 120 && rect.bottom > 120;
      });
      if (current) setActiveId(current.id);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, delay: 1.2, ease: [0.22, 1, 0.36, 1] }}
      className={cn(
        "fixed left-0 right-0 top-0 z-50 transition-all duration-500",
        scrolled ? "bg-dark/70 backdrop-blur-xl border-b border-crimson/10" : "bg-transparent"
      )}
    >
      <nav className="container-cinematic flex h-20 items-center justify-between">
        <Link href="#" className="flex items-center gap-3 group" aria-label="Home">
          <MKMonogram size={40} className="transition-transform group-hover:scale-110" />
        </Link>

        <div className="hidden md:flex items-center gap-10">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.id}
              href={link.href}
              className="relative text-sm text-text-body hover:text-text-primary transition-colors font-mono uppercase tracking-widest"
            >
              {link.label}
              {activeId === link.id && (
                <motion.span
                  layoutId="nav-active"
                  className="absolute -bottom-1 left-0 right-0 h-[2px] bg-crimson"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
            </Link>
          ))}
        </div>

        <div className="hidden md:block">
          <Button asChild size="sm" className="bg-crimson hover:bg-crimson-glow text-white border-0">
            <a href={LINKS.cv} download>
              <Download className="mr-2 h-4 w-4" /> Download CV
            </a>
          </Button>
        </div>

        <MobileNav />
      </nav>
    </motion.header>
  );
}