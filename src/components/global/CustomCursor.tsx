"use client";

import { useEffect, useRef, useState } from "react";

export function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const [hovering, setHovering] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!window.matchMedia("(pointer: fine)").matches) return;

    setVisible(true);
    document.documentElement.classList.add("has-custom-cursor");

    let mouseX = 0, mouseY = 0;
    let currentX = 0, currentY = 0;
    let rafId: number;

    const onMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    const onOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest("a, button, [role='button'], input, textarea, [data-cursor-hover]")) {
        setHovering(true);
      } else {
        setHovering(false);
      }
    };

    const animate = () => {
      currentX += (mouseX - currentX) * 0.15;
      currentY += (mouseY - currentY) * 0.15;
      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate3d(${currentX}px, ${currentY}px, 0) translate(-50%, -50%)`;
      }
      rafId = requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseover", onOver);
    rafId = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseover", onOver);
      cancelAnimationFrame(rafId);
      document.documentElement.classList.remove("has-custom-cursor");
    };
  }, []);

  // Always render the div so the ref is available on first mount.
  // Control visibility via opacity instead of conditional rendering
  // to avoid a race condition where the ref is null when the effect runs.
  return (
    <div
      ref={cursorRef}
      className="pointer-events-none fixed left-0 top-0 z-[9999] rounded-full transition-[width,height,background,mix-blend-mode,opacity] duration-300 ease-out"
      style={{
        width: hovering ? 48 : 16,
        height: hovering ? 48 : 16,
        backgroundColor: hovering ? "#F5F5F5" : "#C0392B",
        mixBlendMode: hovering ? "difference" : "normal",
        boxShadow: hovering ? "none" : "0 0 20px rgba(192, 57, 43, 0.6)",
        opacity: visible ? 1 : 0,
      }}
    />
  );
}