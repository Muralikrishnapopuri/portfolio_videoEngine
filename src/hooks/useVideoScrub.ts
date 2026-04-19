"use client";

import { useEffect, useRef, useState } from "react";
import { gsap, ScrollTrigger } from "@/lib/gsap";
import { HERO_VIDEO } from "@/lib/constants";

export function useVideoScrub() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isReady, setIsReady] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const video = videoRef.current;
    const container = containerRef.current;
    if (!video || !container) return;

    // Force decode-ready state for smoother scrubbing
    video.pause();
    video.preload = "auto";

    const setupScrub = () => {
      if (!video.duration || isNaN(video.duration)) return;
      setIsReady(true);

      // State for requestAnimationFrame-based scrubbing
      const state = { targetTime: 0, currentTime: 0 };
      let rafId: number;

      const tick = () => {
        // Lerp the video time for buttery interpolation
        const diff = state.targetTime - state.currentTime;
        if (Math.abs(diff) > 0.001) {
          state.currentTime += diff * 0.15; // 15% per frame = smooth
          try {
            video.currentTime = state.currentTime;
          } catch (e) {
            // Ignore seek errors during rapid scroll
          }
        }
        rafId = requestAnimationFrame(tick);
      };
      rafId = requestAnimationFrame(tick);

      const ctx = gsap.context(() => {
        ScrollTrigger.create({
          trigger: container,
          start: "top top",
          end: "bottom bottom",
          scrub: true,
          anticipatePin: 1,
          invalidateOnRefresh: true,
          onUpdate: (self) => {
            state.targetTime = self.progress * video.duration;
            setProgress(self.progress);
          },
        });
      }, container);

      return () => {
        cancelAnimationFrame(rafId);
        ctx.revert();
      };
    };

    let cleanup: (() => void) | undefined;

    const onCanPlay = () => {
      cleanup = setupScrub();
    };

    if (video.readyState >= 2) {
      cleanup = setupScrub();
    } else {
      video.addEventListener("loadeddata", onCanPlay, { once: true });
    }

    // Force load
    video.load();

    return () => {
      video.removeEventListener("loadeddata", onCanPlay);
      cleanup?.();
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return { videoRef, containerRef, isReady, progress };
}