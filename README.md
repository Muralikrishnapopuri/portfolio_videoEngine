<![CDATA[# 🎬 Scroll Video Engine Portfolio

A **cinematic dark-editorial** portfolio built with a scroll-linked video scrubbing engine, glassmorphic UI, and orchestrated micro-animations. Every pixel is intentional.

![Next.js](https://img.shields.io/badge/Next.js-16-black?style=flat-square&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=flat-square&logo=typescript)
![Tailwind](https://img.shields.io/badge/Tailwind-3.4-06B6D4?style=flat-square&logo=tailwindcss)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-12-FF0055?style=flat-square&logo=framer)
![GSAP](https://img.shields.io/badge/GSAP-3.15-88CE02?style=flat-square&logo=greensock)

---

## ✨ Design Philosophy

> **Cinematic. Editorial. Dark-first.**

The design language follows a luxury editorial direction — think film title sequences meets high-end fashion lookbooks. Every section transition, every hover state, every gradient is crafted for emotion over decoration.

---

## 🎨 Color System

A curated **crimson + void** palette — no generic colors allowed.

| Token | Hex | Usage |
|---|---|---|
| `void` | `#000000` | True black backgrounds |
| `dark` | `#0A0A0A` | Primary page background |
| `surface` | `#111111` | Card / elevated surfaces |
| `crimson` | `#C0392B` | Primary accent, glows, CTAs |
| `crimson-glow` | `#FF4444` | Hover states, active highlights |
| `crimson-deep` | `#8B2820` | Gradient endpoints, shadows |
| `cobalt` | `#1A3A6B` | Secondary accent, depth layers |
| `text-primary` | `#F5F5F5` | Headings, primary content |
| `text-body` | `#AAAAAA` | Body copy |
| `text-dim` | `#555555` | Metadata, mono captions |

> All colors are also mapped as **shadcn CSS variable tokens** (`--primary`, `--accent`, etc.) for component-level theming.

---

## 🔤 Typography

Three-font editorial stack built for hierarchy and contrast:

| Role | Font | Usage |
|---|---|---|
| **Display** | `Playfair Display` (serif) | Headings, hero text |
| **Sans** | `Inter` (system-ui fallback) | Body, UI elements |
| **Mono** | `JetBrains Mono` | Code blocks, metadata labels |

### Cinematic Type Scale

```
hero     → clamp(3rem, 8vw, 6rem)     line-height: 1
section  → clamp(2.5rem, 5vw, 4.5rem) line-height: 1.05
sub      → clamp(1.75rem, 3vw, 3rem)  line-height: 1.1
body-lg  → 1.125rem                   line-height: 1.7
meta     → 0.8125rem                  letter-spacing: 0.05em
```

All headings use negative letter-spacing (`-0.015em`) and `font-feature-settings` for ligature control.

---

## 🌀 Animation System

### Custom Keyframes

| Animation | Duration | Purpose |
|---|---|---|
| `crimson-pulse` | 3s infinite | Glowing CTA buttons, hero accents |
| `orbit-cw` / `orbit-ccw` | 40s / 60s | Skills radar — counter-rotating rings |
| `shimmer` | 2s infinite | Video skeleton loading state |
| `cursor-blink` | 1s step-end | Terminal demo blinking cursor |
| `draw-vertical` | 1.2s ease-out | Hero spine crimson rule reveal |
| `blur-in` | 0.8s ease-out | Page loader text entrance |
| `float` | 6s infinite | Ambient floating elements |
| `spotlight` | 2s ease | Aceternity-inspired spotlight reveal |
| `meteor` | 5s linear | Background meteor streaks |
| `border-spin` | 7s linear | Moving border card effect |
| `gradient-x` | 6s infinite | Animated gradient text shimmer |

### Cinematic Easing Curves

```css
--cinematic:  cubic-bezier(0.65, 0, 0.35, 1)   /* Smooth symmetrical */
--smooth-out: cubic-bezier(0.22, 1, 0.36, 1)    /* Quick start, gentle land */
--smooth-in:  cubic-bezier(0.64, 0, 0.78, 0)    /* Dramatic accelerate */
```

### Framer Motion Presets

Shared variants for `fadeInUp`, `staggerChildren`, and `viewportOnce` keep scroll-triggered animations consistent across every section.

---

## 🎥 Scroll Video Engine

The hero uses a **scroll-linked video scrubbing** system:

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

- **`useVideoScrub`** hook maps `scrollY` → `video.currentTime` via `requestAnimationFrame`
- Separate mobile/desktop video sources for bandwidth optimization
- Shimmer skeleton shown until video is ready (`onCanPlayThrough`)
- **`VideoOverlays`** layer content fades tied to scroll progress

---

## 🪟 Glassmorphism

The `.glass-surface` utility creates frosted-glass panels:

```css
background: rgba(17, 17, 17, 0.6);
backdrop-filter: blur(16px) saturate(1.4);
border: 1px solid rgba(192, 57, 43, 0.1);
```

Firefox fallback uses opaque `rgba(17, 17, 17, 0.92)` since `backdrop-filter` support varies.

---

## 🖱️ Custom Cursor

A physics-based custom cursor with `requestAnimationFrame` interpolation:

| State | Size | Color | Effect |
|---|---|---|---|
| Default | 16px | `#C0392B` | Crimson glow shadow |
| Hover (links/buttons) | 48px | `#F5F5F5` | `mix-blend-mode: difference` |

- Smoothing factor: `0.15` (lerp towards mouse position)
- Auto-disabled on touch devices (`pointer: coarse` media query)
- Only sets `cursor: none` after JavaScript loads (prevents flash)

---

## 📐 Layout Utilities

| Class | Purpose |
|---|---|
| `.container-cinematic` | Max-width 1400px, responsive padding |
| `.section-padding` | `py-24 md:py-32 lg:py-40` |
| `.text-crimson-gradient` | 135° gradient text with `background-clip` |
| `.crimson-rule` | Vertical gradient line with edge fade |
| `.grid-overlay` | Subtle crimson grid background pattern |
| `.mono-caps` | Monospace · uppercase · `0.2em` tracking |
| `.mask-fade-bottom` | CSS mask gradient for bottom fade |
| `.will-transform` | GPU-accelerated layer promotion |

---

## 🧊 Glow & Shadow System

```
glow-crimson     → 0 0 60px  rgba(192, 57, 43, 0.35)
glow-crimson-lg  → 0 0 100px rgba(192, 57, 43, 0.45)
glow-cobalt      → 0 0 40px  rgba(26, 58, 107, 0.4)
glow-red         → 0 0 30px  rgba(255, 68, 68, 0.5)
inset-glow       → inset 0 0 20px rgba(192, 57, 43, 0.15)
```

---

## 🌊 Smooth Scroll

[Lenis](https://lenis.studiofreight.com/) provides butter-smooth inertia scrolling:

- Native scroll behavior overridden with `scroll-behavior: auto`
- `data-lenis-prevent` attribute for sections needing native scroll
- Automatically stops scroll during modal/sheet interactions

---

## 📱 Responsive Strategy

- **Mobile-first** Tailwind breakpoints (`md:`, `lg:`, `xl:`)
- Skills section: orbit visualization on desktop → grid fallback on mobile
- Video engine: separate mobile video source for performance
- Custom cursor: disabled on touch devices
- Typography: fluid `clamp()` sizing — no breakpoint jumps

---

## ♿ Accessibility

- `prefers-reduced-motion` kills all animations (`duration: 0.01ms`)
- Focus-visible rings: `2px crimson + 4px dark` double-ring
- Semantic HTML structure (`section`, `nav`, `main`)
- Print stylesheet: white background, black text, `.no-print` hide

---

## 🗂️ Architecture

```
src/
├── app/                    # Next.js App Router
│   ├── globals.css         # Design system tokens + utilities
│   ├── layout.tsx          # Root layout + font loading
│   └── page.tsx            # Single-page composition
├── components/
│   ├── hero/               # ScrollVideoEngine + overlays
│   ├── about/              # ProfileRing, StatCounter
│   ├── skills/             # OrbitRing system
│   ├── experience/         # Terminal demo, module showcase
│   ├── projects/           # ProjectCard grid
│   ├── contact/            # ContactForm + SocialLinks
│   ├── layout/             # Navbar + Footer + MobileNav
│   ├── global/             # CustomCursor, PageLoader, MKMonogram
│   ├── providers/          # LenisProvider, ThemeProvider
│   └── ui/                 # shadcn primitives
├── hooks/                  # useVideoScrub, useIsMobile, useReducedMotion
├── data/                   # Skills, projects, experience data
├── lib/                    # Constants, GSAP config, motion presets
└── types/                  # TypeScript definitions
```

---

## 🚀 Getting Started

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Production build
npm run build && npm start
```

---

## 🛠️ Tech Stack

| Layer | Technology |
|---|---|
| **Framework** | Next.js 16 (App Router) |
| **Language** | TypeScript 5 |
| **Styling** | Tailwind CSS 3.4 + CSS Variables |
| **Components** | shadcn/ui + Radix primitives |
| **Animation** | Framer Motion 12 + GSAP 3.15 |
| **Scroll** | Lenis (smooth scroll) |
| **Forms** | React Hook Form + Zod |
| **Email** | EmailJS |
| **Icons** | Lucide React + React Icons |

---

<p align="center">
  <sub>Built with obsessive attention to design. Every animation has a reason.</sub>
</p>
]]>