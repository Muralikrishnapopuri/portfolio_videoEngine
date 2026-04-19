"use client";

import Link from "next/link";
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";
import { Button } from "../ui/button";
import { Menu, Download } from "lucide-react";
import { NAV_LINKS, LINKS } from "@/lib/constants";

export function MobileNav() {
  return (
    <div className="md:hidden">
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="ghost" size="icon" aria-label="Open menu">
            <Menu className="h-6 w-6 text-text-primary" />
          </Button>
        </SheetTrigger>
        <SheetContent side="right" className="bg-dark border-l border-crimson/20 w-full sm:w-80">
          <div className="flex flex-col gap-8 pt-16">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.id}
                href={link.href}
                className="text-2xl font-display text-text-primary hover:text-crimson transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <Button asChild className="bg-crimson hover:bg-crimson-glow mt-4">
              <a href={LINKS.cv} download>
                <Download className="mr-2 h-4 w-4" /> Download CV
              </a>
            </Button>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
}