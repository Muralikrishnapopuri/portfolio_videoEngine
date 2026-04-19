"use client";

import { useVideoScrub } from "@/hooks/useVideoScrub";
import { VideoSkeleton } from "./VideoSkeleton";
import { VideoOverlays } from "./VideoOverlays";
import { HERO_VIDEO } from "@/lib/constants";
import { useIsMobile } from "@/hooks/useIsMobile";

export function ScrollVideoEngine() {
  const { videoRef, containerRef, isReady, progress } = useVideoScrub();
  const isMobile = useIsMobile(768);

  return (
    <section
      ref={containerRef}
      id="hero"
      data-lenis-prevent
      className="relative w-full"
      style={{ height: HERO_VIDEO.scrollHeight }}
    >
      <div className="sticky top-0 h-screen w-full overflow-hidden bg-void">
        {!isReady && <VideoSkeleton />}

        <video
          ref={videoRef}
          className="absolute inset-0 h-full w-full object-cover will-transform"
          muted
          playsInline
          preload="auto"
          disablePictureInPicture
          disableRemotePlayback
          style={{
            opacity: isReady ? 1 : 0,
            transition: "opacity 0.8s ease",
          }}
        >
          <source
            src={isMobile ? HERO_VIDEO.srcMobile : HERO_VIDEO.src}
            type="video/mp4"
          />
        </video>

        {isReady && <VideoOverlays progress={progress} />}
      </div>
    </section>
  );
}