import { cn } from "@/lib/utils";

export function MKMonogram({ className, size = 40 }: { className?: string; size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 40 40"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("inline-block", className)}
      aria-label="MK Monogram"
    >
      <defs>
        <linearGradient id="mk-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#C0392B" />
          <stop offset="100%" stopColor="#FF4444" />
        </linearGradient>
      </defs>
      <rect x="1" y="1" width="38" height="38" rx="6" stroke="url(#mk-gradient)" strokeWidth="1.5" fill="none" />
      <text
        x="50%"
        y="54%"
        textAnchor="middle"
        dominantBaseline="middle"
        fill="url(#mk-gradient)"
        fontFamily="Playfair Display, serif"
        fontSize="18"
        fontWeight="700"
        letterSpacing="-1"
      >
        MK
      </text>
    </svg>
  );
}