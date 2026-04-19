import type { Job, RestoSoftModule } from "@/types";

export const EXPERIENCE: Job[] = [
  {
    id: "youngminds",
    company: "YoungMinds Technology Solutions Pvt Ltd",
    role: "Full-Stack Developer",
    duration: "Mar 2025 – Present · 13+ Months",
    location: "Tirupati, Andhra Pradesh",
    type: "full-time",
    isPrimary: true,
    project: "RestoSoft — Product-Based",
    stack: ["Node.js", "Express", "PHP", "TypeScript", "JavaScript", "SQL", "HBS", "HTML5", "CSS3"],
    achievements: [
      "Built a multi-application ERP ecosystem (Admin, Cashier, Waiter, Digital Menu) serving Restaurants, Bakeries, Bars, and Food Courts with real-time sync.",
      "Developed backend controllers in PHP and Node.js for daily sales tracking, inventory management, and business-intelligence reports.",
      "Engineered a high-performance billing engine with Express and implemented Long Polling for real-time data sync across multiple cashier terminals.",
      "Designed and built the Waiter Application in TypeScript, reducing KOT latency and enabling instant invoice generation.",
      "Built a customer-facing digital menu web app and integrated Razorpay Sub-accounts for automated multi-vendor payment routing.",
      "Managed complex SQL data relationships, optimised historical queries, maintained responsiveness under high load.",
      "Enhanced Expenses, QSR modes, and Printer settings via SSR HBS templates.",
    ],
  },
  {
    id: "codtech",
    company: "Codtech IT Solutions Pvt Ltd",
    role: "Full-Stack Developer Intern",
    duration: "Sep 2024 – Oct 2024",
    type: "internship",
    highlights: "Built a full-stack Beverage Application (React.js, Node.js, MongoDB). Collaborated on cross-functional team deployments.",
    certificateUrl: "https://interrn.netlify.app",
  },
  {
    id: "chegg",
    company: "Chegg India Pvt Ltd",
    role: "Subject Matter Expert — CS & Web Dev",
    duration: "Oct 2022 – Jan 2023",
    type: "freelance",
    highlights: "CS and web development Subject Matter Expert for US-based students. Night-shift delivery, high-quality results.",
    certificateUrl: "https://chegg-certificates--teal.vercel.app",
  },
];

export const RESTOSOFT_MODULES: RestoSoftModule[] = [
  {
    id: "admin",
    name: "Admin",
    tagline: "Command centre for restaurant owners",
    description: "Daily sales dashboards, inventory management, BI reports, and multi-outlet administration.",
    features: ["Real-time sales analytics", "Inventory tracking", "Multi-outlet support", "BI reports"],
    image: "/assets/images/restosoft/admin.jpg",
  },
  {
    id: "cashier",
    name: "Cashier",
    tagline: "High-performance billing engine",
    description: "Express-powered billing with Long Polling for real-time sync across terminals.",
    features: ["Sub-second bill generation", "Long Polling sync", "Split payments", "Printer integration"],
    image: "/assets/images/restosoft/cashier.jpg",
  },
  {
    id: "waiter",
    name: "Waiter",
    tagline: "Instant KOT on every table",
    description: "TypeScript-powered waiter app with reduced KOT latency and instant invoice generation.",
    features: ["Low-latency KOT dispatch", "Table management", "Instant invoices", "Offline resilience"],
    image: "/assets/images/restosoft/waiter.jpg",
  },
  {
    id: "menu",
    name: "Digital Menu",
    tagline: "Customer-facing ordering",
    description: "Public web app with Razorpay Sub-accounts for automated multi-vendor payment routing.",
    features: ["QR-code ordering", "Razorpay Sub-accounts", "Multi-vendor routing", "Mobile-first UX"],
    image: "/assets/images/restosoft/digital-menu.jpg",
  },
];