/**
 * ═══════════════════════════════════════════════════════════════
 *  SITE CONSTANTS — Single source of truth
 *  All personal info, URLs, SEO, and config live here.
 *  Update one line → entire site updates.
 * ═══════════════════════════════════════════════════════════════
 */

/* ─────────────────────────────────────────────
   PERSONAL IDENTITY
   ───────────────────────────────────────────── */
export const PERSONAL = {
  name: "Murali Krishna Popuri",
  firstName: "Murali",
  lastName: "Krishna",
  alias: "Krish",
  initials: "MK",
  role: "Full-Stack Developer",
  roleShort: "Full-Stack Dev",
  tagline: "Building scalable, real-time web applications for the  industry.",
  location: "Hyderabad, Telangana, India",
  locationShort: "Hyderabad, India",
  email: "popurimurali16@gmail.com",
  phone: "+91 9347796811",
  phoneClean: "+919347796811", // for tel: links

  summary:
    "Results-driven Full-Stack Developer with 1+ year of professional experience building scalable, real-time web applications for the F&B industry. Proficient in Node.js, Express, PHP, TypeScript, SQL, React.js, and Next.js. Engineered high-performance billing engines, Razorpay payment routing, and real-time KOT systems used daily in live restaurant environments.",

  summaryShort:
    "Full-Stack Developer with 1+ year building RestoSoft. React · Node.js · PHP · TypeScript · SQL.",
} as const;

/* ─────────────────────────────────────────────
   SOCIAL & EXTERNAL LINKS
   ───────────────────────────────────────────── */
export const LINKS = {
  portfolio: "https://krish-portfolio.vercel.app",
  github: "https://github.com/Muralikrishnapopuri",
  linkedin: "https://www.linkedin.com/in/murali-krishna-popuri",
  email: "mailto:popurimurali16@gmail.com",
  phone: "tel:+919347796811",
  cv: "/assets/cv/MURALI-KRISHNA.pdf",

  // Certificates
  codtechCertificate: "https://interrn.netlify.app",
  cheggCertificate: "https://chegg-certificates--teal.vercel.app",
} as const;

/* ─────────────────────────────────────────────
   NAVIGATION
   ───────────────────────────────────────────── */
export const NAV_LINKS = [
  { label: "About", href: "#about", id: "about" },
  { label: "Experience", href: "#experience", id: "experience" },
  { label: "Projects", href: "#projects", id: "projects" },
  { label: "Contact", href: "#contact", id: "contact" },
] as const;

/* ─────────────────────────────────────────────
   STATS — Animated counters in About section
   ───────────────────────────────────────────── */
export const STATS = [
  {
    value: 13,
    suffix: "+",
    label: "Months Professional Experience",
    description: "At YoungMinds Technology Solutions",
  },
  {
    value: 4,
    suffix: "",
    label: "Applications Built",
    description: "The RestoSoft ERP ecosystem",
  },
  {
    value: 6,
    suffix: "",
    label: "Personal Projects Shipped",
    description: "Live and production-ready",
  },
  {
    value: 8,
    suffix: "+",
    label: "Technologies Mastered",
    description: "Full-stack + backend tooling",
  },
] as const;

/* ─────────────────────────────────────────────
   EMAIL JS CONFIGURATION
   Set these in .env.local:
     NEXT_PUBLIC_EMAILJS_SERVICE_ID=...
     NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=...
     NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=...
   ───────────────────────────────────────────── */
export const EMAILJS_CONFIG = {
  serviceId: process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "",
  templateId: process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "",
  publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || "",
  toEmail: PERSONAL.email,
} as const;

export const isEmailJSConfigured = (): boolean => {
  return !!(
    EMAILJS_CONFIG.serviceId &&
    EMAILJS_CONFIG.templateId &&
    EMAILJS_CONFIG.publicKey
  );
};

/* ─────────────────────────────────────────────
   SEO METADATA
   ───────────────────────────────────────────── */
export const SEO = {
  title: "Murali Krishna | Full-Stack Developer — Hyderabad",
  titleTemplate: "%s | Murali Krishna",
  description:
    "Full-Stack Developer with 1+ year building RestoSoft Product. React, Node.js, PHP, TypeScript, SQL. Hyderabad, India.",
  keywords: [
    "Full Stack Developer",
    "React Developer",
    "Node.js Developer",
    "PHP Developer",
    "TypeScript",
    "SQL",
    "ERP Developer",
    " Industry",
    "RestoSoft",
    "Hyderabad Developer",
    "Portfolio",
    "Murali Krishna",
    "Murali Krishna Popuri",
    "Next.js Developer",
    "Razorpay Integration",
  ],
  ogImage: "/og-image.jpg",
  ogImageAlt: "Murali Krishna — Full-Stack Developer Portfolio",
  siteUrl: LINKS.portfolio,
  twitterHandle: "@murali_krishna",
  author: PERSONAL.name,
  language: "en",
  locale: "en_IN",
} as const;

/* ─────────────────────────────────────────────
   HERO VIDEO CONFIG
   ───────────────────────────────────────────── */
export const HERO_VIDEO = {
  src: "/assets/video/hero-scroll.mp4",
  srcMobile: "/assets/video/hero-scroll-mobile.mp4", // optional — falls back to desktop
  poster: "/assets/video/hero-poster.jpg", // optional first-frame poster

  // Scroll zone config
  scrollHeight: "300vh", // 3× viewport height for scrub range
  scrubSmoothing: 0.5, // GSAP scrub value — smooths jitter

  // Overlay timing ratios (0 → 1 of video duration)
  overlays: {
    crimsonRule:    { start: 0.10, end: 0.95 },
    name:           { start: 0.15, end: 0.95 },
    role:           { start: 0.25, end: 0.95 },
    location:       { start: 0.30, end: 0.95 },
    restoSoftBadge: { start: 0.45, end: 0.95 },
    techStack:      { start: 0.55, end: 0.95 },
    ctaScroll:      { start: 0.00, end: 0.85 },
    ctaBuild:       { start: 0.85, end: 1.00 },
  },
} as const;

/* ─────────────────────────────────────────────
   COPYRIGHT
   ───────────────────────────────────────────── */
export const COPYRIGHT = {
  year: new Date().getFullYear(),
  owner: PERSONAL.name,
  text: `© ${new Date().getFullYear()} ${PERSONAL.name}. All rights reserved.`,
  builtWith: "Built with Next.js · Deployed on Vercel",
} as const;

/* ─────────────────────────────────────────────
   TECH STACK BADGES (shown in hero overlay)
   ───────────────────────────────────────────── */
export const HERO_TECH_BADGES = [
  "Node.js",
  "React",
  "PHP",
  "TypeScript",
  "SQL",
] as const;

/* ─────────────────────────────────────────────
   ANIMATION CONSTANTS
   ───────────────────────────────────────────── */
export const ANIMATION = {
  // Standard section entrance
  section: {
    duration: 0.6,
    ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
    yOffset: 30,
  },
  // Staggered list reveal
  stagger: {
    childDelay: 0.08,
    containerDelay: 0.1,
  },
  // Page loader
  loader: {
    phase1: 300,  // black screen
    phase2: 600,  // monogram fade-in
    phase3: 900,  // monogram settles to navbar
    total: 1200,  // total loader time before page visible
  },
  // Custom cursor
  cursor: {
    lerp: 0.15,           // interpolation factor (0-1)
    baseSize: 16,
    hoverSize: 48,
  },
} as const;

/* ─────────────────────────────────────────────
   BREAKPOINTS — match Tailwind defaults
   ───────────────────────────────────────────── */
export const BREAKPOINTS = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  "2xl": 1536,
} as const;

/* ─────────────────────────────────────────────
   TYPE EXPORTS — for consumers
   ───────────────────────────────────────────── */
export type NavLink = (typeof NAV_LINKS)[number];
export type Stat = (typeof STATS)[number];
export type HeroTechBadge = (typeof HERO_TECH_BADGES)[number];