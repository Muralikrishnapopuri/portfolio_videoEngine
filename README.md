<div align="center">

```
╔═══════════════════════════════════════════════════════════╗
║                                                           ║
║        ░░░░░ ░░░░  ░░░░  ░░░░░░  ░░░░░  ░░░░  ░░░░░     ║
║        ░░    ░░    ░░  ░  ░░  ░░  ░░  ░  ░░  ░   ░░      ║
║        ░░░░  ░░░░  ░░░░░  ░░░░░   ░░░░░  ░░  ░   ░░      ║
║        ░░    ░░    ░░ ░░  ░░      ░░  ░  ░░  ░   ░░      ║
║        ░░░░░ ░░░░  ░░  ░  ░░      ░░  ░  ░░░░    ░░      ║
║                                                           ║
╚═══════════════════════════════════════════════════════════╝
```

### 🎬 Scroll Video Engine Portfolio
*Cinematic. Editorial. Dark-first.*

[![Next.js](https://img.shields.io/badge/Next.js-16-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind](https://img.shields.io/badge/Tailwind-3.4-06B6D4?style=for-the-badge&logo=tailwindcss)](https://tailwindcss.com/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-12-FF0055?style=for-the-badge&logo=framer)](https://www.framer.com/motion/)
[![GSAP](https://img.shields.io/badge/GSAP-3.15-88CE02?style=for-the-badge&logo=greensock)](https://gsap.com/)

</div>

---

## 🧠 Philosophy

> Luxury editorial direction — film title sequences meets high-end fashion lookbooks.  
> Every transition, hover state, and gradient is crafted **for emotion, not decoration.**

---

## ⚡ Features at a Glance

| Feature | Description |
|---|---|
| 🎥 **Scroll Video Scrubbing** | `scrollY` → `video.currentTime` via `requestAnimationFrame` |
| 🪟 **Glassmorphism UI** | `backdrop-filter: blur(16px)` frosted panels with crimson borders |
| 🖱️ **Physics Cursor** | Lerp-interpolated cursor with blend-mode difference on hover |
| 🌀 **11 Custom Keyframes** | Crimson pulse · orbit rings · meteor streaks · shimmer skeletons |
| 🔤 **Editorial Typography** | Playfair Display + Inter + JetBrains Mono — fluid `clamp()` sizing |
| 🌊 **Lenis Smooth Scroll** | Butter-smooth inertia with `data-lenis-prevent` escape hatch |
| ♿ **Accessible** | `prefers-reduced-motion` · focus-visible rings · semantic HTML |

---

## 🎨 Color System — Crimson × Void

```
  VOID ████  #000000   True black backgrounds
  DARK ████  #0A0A0A   Primary page background
  SURF ████  #111111   Cards / elevated surfaces
──────────────────────────────────────────────
  CRIM ████  #C0392B   Primary accent · glows · CTAs
  GLOW ████  #FF4444   Hover states · active highlights
  DEEP ████  #8B2820   Gradient endpoints · shadows
  COBA ████  #1A3A6B   Secondary accent · depth layers
──────────────────────────────────────────────
  TXT1 ████  #F5F5F5   Headings · primary content
  TXT2 ████  #AAAAAA   Body copy
  TXT3 ████  #555555   Metadata · mono captions
```

> All tokens are mapped as shadcn CSS variables (`--primary`, `--accent`, etc.)

---

## 🔤 Typography

```
DISPLAY  →  Playfair Display (serif)   Headings, hero text
SANS     →  Inter                      Body, UI elements
MONO     →  JetBrains Mono             Code, metadata labels
```

**Fluid Scale**
```
hero    → clamp(3rem,   8vw, 6rem)     lh: 1
section → clamp(2.5rem, 5vw, 4.5rem)  lh: 1.05
sub     → clamp(1.75rem,3vw, 3rem)    lh: 1.1
body-lg → 1.125rem                    lh: 1.7
meta    → 0.8125rem                   ls: 0.05em
```

---

## 🎥 Scroll Video Engine

```
┌─────────────────────────────────────┐
│  sticky viewport (100vh)            │
│  ┌──────────────────────────────┐   │
│  │  <video> (object-cover)      │   │
│  │  scrubbed via scrollY        │   │
│  │  → currentTime = progress    │   │
│  └──────────────────────────────┘   │
│  overlay layers fade in/out         │
│  based on scroll progress           │
└─────────────────────────────────────┘
         ↕ scroll height: 500vh
```

- **`useVideoScrub`** — maps `scrollY → video.currentTime` with RAF
- Separate mobile/desktop sources for bandwidth efficiency
- Shimmer skeleton until `onCanPlayThrough` fires
- `VideoOverlays` — content fades driven by scroll progress

---

## 🌀 Animation System

**Keyframes**

| Animation | Duration | Purpose |
|---|---|---|
| `crimson-pulse` | 3s ∞ | Glowing CTAs · hero accents |
| `orbit-cw` / `ccw` | 40s / 60s | Skills radar counter-rotating rings |
| `shimmer` | 2s ∞ | Video skeleton loader |
| `cursor-blink` | 1s step-end | Terminal blinking cursor |
| `draw-vertical` | 1.2s ease-out | Hero spine crimson rule reveal |
| `blur-in` | 0.8s ease-out | Page loader entrance |
| `meteor` | 5s linear | Background streak effects |
| `border-spin` | 7s linear | Moving border card effect |
| `gradient-x` | 6s ∞ | Animated gradient text shimmer |

**Cinematic Easing**
```css
--cinematic:  cubic-bezier(0.65, 0, 0.35, 1)  /* Smooth symmetrical   */
--smooth-out: cubic-bezier(0.22, 1, 0.36, 1)  /* Quick start, soft land */
--smooth-in:  cubic-bezier(0.64, 0, 0.78, 0)  /* Dramatic accelerate  */
```

---

## 🖱️ Custom Cursor

| State | Size | Effect |
|---|---|---|
| Default | `16px` crimson | Glow shadow |
| Hover | `48px` white | `mix-blend-mode: difference` |

Lerp factor `0.15` · auto-disabled on touch (`pointer: coarse`) · cursor hidden only after JS loads

---

## 🗂️ Project Structure

```
src/
├── app/
│   ├── globals.css          ← Design system tokens
│   ├── layout.tsx           ← Root layout + fonts
│   └── page.tsx             ← Single-page composition
│
├── components/
│   ├── hero/                ← ScrollVideoEngine + overlays
│   ├── about/               ← ProfileRing · StatCounter
│   ├── skills/              ← OrbitRing system
│   ├── experience/          ← Terminal demo · modules
│   ├── projects/            ← ProjectCard grid
│   ├── contact/             ← ContactForm · SocialLinks
│   ├── layout/              ← Navbar · Footer · MobileNav
│   ├── global/              ← CustomCursor · PageLoader
│   ├── providers/           ← LenisProvider · ThemeProvider
│   └── ui/                  ← shadcn primitives
│
├── hooks/                   ← useVideoScrub · useIsMobile
├── data/                    ← Skills · projects · experience
├── lib/                     ← Constants · GSAP · motion presets
└── types/                   ← TypeScript definitions
```

---

## 🚀 Getting Started

```bash
# Clone & install
git clone https://github.com/your-username/portfolio
cd portfolio && npm install

# Dev server
npm run dev

# Production
npm run build && npm start
```

---

## 🛠️ Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 16 (App Router) |
| Language | TypeScript 5 |
| Styling | Tailwind CSS 3.4 + CSS Variables |
| Components | shadcn/ui + Radix primitives |
| Animation | Framer Motion 12 + GSAP 3.15 |
| Scroll | Lenis |
| Forms | React Hook Form + Zod |
| Email | EmailJS |
| Icons | Lucide React + React Icons |

---

<div align="center">
  <sub>Built with obsessive attention to design. Every animation has a reason.</sub>
</div>
