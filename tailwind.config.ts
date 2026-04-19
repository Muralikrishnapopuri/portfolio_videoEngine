import type { Config } from "tailwindcss";

const config: Config = {
    darkMode: "class",
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        container: {
            center: true,
            padding: "2rem",
            screens: {
                "2xl": "1400px",
            },
        },
        extend: {
            /* ─────────────────────────────────────────────
               COLOUR SYSTEM — Cinematic Dark Editorial
               ───────────────────────────────────────────── */
            colors: {
                // Brand palette (from design_system spec)
                void: "#000000",
                dark: "#0A0A0A",
                surface: "#111111",
                crimson: {
                    DEFAULT: "#C0392B",
                    glow: "#FF4444",
                    deep: "#8B2820",
                },
                cobalt: {
                    DEFAULT: "#1A3A6B",
                    light: "#2A5A9B",
                },
                text: {
                    primary: "#F5F5F5",
                    body: "#AAAAAA",
                    dim: "#555555",
                },

                // shadcn tokens — mapped to our cinematic palette
                border: "hsl(var(--border))",
                input: "hsl(var(--input))",
                ring: "hsl(var(--ring))",
                background: "hsl(var(--background))",
                foreground: "hsl(var(--foreground))",
                primary: {
                    DEFAULT: "hsl(var(--primary))",
                    foreground: "hsl(var(--primary-foreground))",
                },
                secondary: {
                    DEFAULT: "hsl(var(--secondary))",
                    foreground: "hsl(var(--secondary-foreground))",
                },
                destructive: {
                    DEFAULT: "hsl(var(--destructive))",
                    foreground: "hsl(var(--destructive-foreground))",
                },
                muted: {
                    DEFAULT: "hsl(var(--muted))",
                    foreground: "hsl(var(--muted-foreground))",
                },
                accent: {
                    DEFAULT: "hsl(var(--accent))",
                    foreground: "hsl(var(--accent-foreground))",
                },
                popover: {
                    DEFAULT: "hsl(var(--popover))",
                    foreground: "hsl(var(--popover-foreground))",
                },
                card: {
                    DEFAULT: "hsl(var(--card))",
                    foreground: "hsl(var(--card-foreground))",
                },
            },

            /* ─────────────────────────────────────────────
               TYPOGRAPHY — Editorial luxury
               ───────────────────────────────────────────── */
            fontFamily: {
                display: ["var(--font-playfair)", "serif"],
                sans: ["var(--font-inter)", "system-ui", "sans-serif"],
                mono: ["var(--font-jetbrains)", "ui-monospace", "monospace"],
            },

            fontSize: {
                // Cinematic scale per spec
                "hero": ["clamp(3rem, 8vw, 6rem)", { lineHeight: "1", letterSpacing: "-0.02em" }],
                "section": ["clamp(2.5rem, 5vw, 4.5rem)", { lineHeight: "1.05", letterSpacing: "-0.015em" }],
                "sub": ["clamp(1.75rem, 3vw, 3rem)", { lineHeight: "1.1", letterSpacing: "-0.01em" }],
                "body-lg": ["1.125rem", { lineHeight: "1.7" }],
                "meta": ["0.8125rem", { lineHeight: "1.4", letterSpacing: "0.05em" }],
            },

            /* ─────────────────────────────────────────────
               BORDER RADIUS — shadcn tokens
               ───────────────────────────────────────────── */
            borderRadius: {
                lg: "var(--radius)",
                md: "calc(var(--radius) - 2px)",
                sm: "calc(var(--radius) - 4px)",
            },

            /* ─────────────────────────────────────────────
               BOX SHADOWS — Crimson glow signature
               ───────────────────────────────────────────── */
            boxShadow: {
                "glow-crimson": "0 0 60px rgba(192, 57, 43, 0.35)",
                "glow-crimson-lg": "0 0 100px rgba(192, 57, 43, 0.45)",
                "glow-cobalt": "0 0 40px rgba(26, 58, 107, 0.4)",
                "glow-red": "0 0 30px rgba(255, 68, 68, 0.5)",
                "inset-glow": "inset 0 0 20px rgba(192, 57, 43, 0.15)",
            },

            /* ─────────────────────────────────────────────
               KEYFRAMES — Custom animations
               ───────────────────────────────────────────── */
            keyframes: {
                // shadcn accordion
                "accordion-down": {
                    from: { height: "0" },
                    to: { height: "var(--radix-accordion-content-height)" },
                },
                "accordion-up": {
                    from: { height: "var(--radix-accordion-content-height)" },
                    to: { height: "0" },
                },

                // Skeleton shimmer — shown while hero video buffers
                shimmer: {
                    "0%": { backgroundPosition: "-200% 0" },
                    "100%": { backgroundPosition: "200% 0" },
                },

                // Skill orbit rotations
                "orbit-cw": {
                    from: { transform: "rotate(0deg)" },
                    to: { transform: "rotate(360deg)" },
                },
                "orbit-ccw": {
                    from: { transform: "rotate(360deg)" },
                    to: { transform: "rotate(0deg)" },
                },

                // Crimson pulse — hero overlays, CTA glows
                "crimson-pulse": {
                    "0%, 100%": { boxShadow: "0 0 30px rgba(192, 57, 43, 0.3)" },
                    "50%": { boxShadow: "0 0 60px rgba(255, 68, 68, 0.6)" },
                },

                // Blinking terminal cursor for RestoSoft terminal demo
                "cursor-blink": {
                    "0%, 50%": { opacity: "1" },
                    "51%, 100%": { opacity: "0" },
                },

                // Meteor background (Magic UI)
                meteor: {
                    "0%": { transform: "rotate(215deg) translateX(0)", opacity: "1" },
                    "70%": { opacity: "1" },
                    "100%": {
                        transform: "rotate(215deg) translateX(-500px)",
                        opacity: "0",
                    },
                },

                // Spotlight (Aceternity)
                spotlight: {
                    "0%": { opacity: "0", transform: "translate(-72%, -62%) scale(0.5)" },
                    "100%": { opacity: "1", transform: "translate(-50%, -40%) scale(1)" },
                },

                // Vertical rule draw-in (hero crimson spine)
                "draw-vertical": {
                    "0%": { transform: "scaleY(0)" },
                    "100%": { transform: "scaleY(1)" },
                },

                // Gentle floating motion for ambient elements
                float: {
                    "0%, 100%": { transform: "translateY(0px)" },
                    "50%": { transform: "translateY(-10px)" },
                },

                // Text fade-in with blur (page loader, overlays)
                "blur-in": {
                    "0%": { opacity: "0", filter: "blur(12px)", transform: "translateY(10px)" },
                    "100%": { opacity: "1", filter: "blur(0)", transform: "translateY(0)" },
                },

                // Moving border (Aceternity MovingBorderCard)
                "border-spin": {
                    "100%": { transform: "rotate(-360deg)" },
                },

                // Animated gradient text (Magic UI)
                "gradient-x": {
                    "0%, 100%": { backgroundPosition: "0% 50%" },
                    "50%": { backgroundPosition: "100% 50%" },
                },
            },

            /* ─────────────────────────────────────────────
               ANIMATIONS — Keyframe usage
               ───────────────────────────────────────────── */
            animation: {
                "accordion-down": "accordion-down 0.2s ease-out",
                "accordion-up": "accordion-up 0.2s ease-out",
                shimmer: "shimmer 2s linear infinite",
                "orbit-cw": "orbit-cw 40s linear infinite",
                "orbit-ccw": "orbit-ccw 60s linear infinite",
                "crimson-pulse": "crimson-pulse 3s ease-in-out infinite",
                "cursor-blink": "cursor-blink 1s step-end infinite",
                meteor: "meteor 5s linear infinite",
                spotlight: "spotlight 2s ease 0.75s 1 forwards",
                "draw-vertical": "draw-vertical 1.2s ease-out forwards",
                float: "float 6s ease-in-out infinite",
                "blur-in": "blur-in 0.8s ease-out forwards",
                "border-spin": "border-spin 7s linear infinite",
                "gradient-x": "gradient-x 6s ease infinite",
            },

            /* ─────────────────────────────────────────────
               BACKGROUND IMAGES — Reusable gradients
               ───────────────────────────────────────────── */
            backgroundImage: {
                "shimmer-gradient":
                    "linear-gradient(90deg, transparent 0%, rgba(192, 57, 43, 0.08) 50%, transparent 100%)",
                "crimson-radial":
                    "radial-gradient(ellipse at center, rgba(192, 57, 43, 0.15) 0%, transparent 60%)",
                "cobalt-radial":
                    "radial-gradient(ellipse at center, rgba(26, 58, 107, 0.2) 0%, transparent 60%)",
                "grid-pattern":
                    "linear-gradient(rgba(192, 57, 43, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(192, 57, 43, 0.05) 1px, transparent 1px)",
                "gradient-crimson":
                    "linear-gradient(135deg, #C0392B 0%, #FF4444 50%, #C0392B 100%)",
            },

            backgroundSize: {
                "200%": "200% 200%",
                "grid": "40px 40px",
            },

            /* ─────────────────────────────────────────────
               TRANSITION TIMING — Cinematic easing curves
               ───────────────────────────────────────────── */
            transitionTimingFunction: {
                "cinematic": "cubic-bezier(0.65, 0, 0.35, 1)",
                "smooth-out": "cubic-bezier(0.22, 1, 0.36, 1)",
                "smooth-in": "cubic-bezier(0.64, 0, 0.78, 0)",
            },

            transitionDuration: {
                "400": "400ms",
                "600": "600ms",
                "800": "800ms",
            },

            /* ─────────────────────────────────────────────
               SPACING — Extra cinematic paddings
               ───────────────────────────────────────────── */
            spacing: {
                "section": "8rem",
                "section-lg": "12rem",
            },

            /* ─────────────────────────────────────────────
               Z-INDEX — Layering discipline
               ───────────────────────────────────────────── */
            zIndex: {
                "base": "0",
                "content": "10",
                "overlay": "20",
                "navbar": "50",
                "modal": "100",
                "cursor": "9999",
                "loader": "10000",
            },
        },
    },
    plugins: [require("tailwindcss-animate")],
};

export default config;