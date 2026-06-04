"use client";

import { useEffect, useRef, useState } from "react";
import { useProgressStore } from "@/store/useProgressStore";
import { cn } from "@/lib/utils";

interface VideoPlayerProps {
  src: string;
  meetingNo: string;
  className?: string;
  onVideoEnd?: () => void;
}

export function VideoPlayer({ src, meetingNo, className, onVideoEnd }: VideoPlayerProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const { maxWatchedSeconds, updateVideoProgress } = useProgressStore();
  const [isPlaying, setIsPlaying] = useState(false);

  // Sync state dari store
  useEffect(() => {
    // Memastikan video tidak melompat melebihi batas saat seeking
    const video = videoRef.current;
    if (!video) return;

    const handleSeeking = () => {
      // Jika mencoba skip ke waktu yang belum pernah ditonton
      if (video.currentTime > maxWatchedSeconds + 1) {
        video.currentTime = maxWatchedSeconds;
      }
    };

    const handleTimeUpdate = () => {
      if (!video.paused) {
        updateVideoProgress(meetingNo, video.currentTime);
      }
    };

    const handleEnded = () => {
      if (onVideoEnd) onVideoEnd();
    };

    video.addEventListener("seeking", handleSeeking);
    video.addEventListener("timeupdate", handleTimeUpdate);
    video.addEventListener("ended", handleEnded);
    video.addEventListener("play", () => setIsPlaying(true));
    video.addEventListener("pause", () => setIsPlaying(false));

    return () => {
      video.removeEventListener("seeking", handleSeeking);
      video.removeEventListener("timeupdate", handleTimeUpdate);
      video.removeEventListener("ended", handleEnded);
    };
  }, [maxWatchedSeconds, meetingNo, updateVideoProgress, onVideoEnd]);

  return (
    <div className={cn("relative rounded-2xl overflow-hidden bg-black border border-white/10 group shadow-2xl", className)}>
      <video
        ref={videoRef}
        src={src}
        controls
        controlsList="nodownload noplaybackrate" // Mencegah download & speed 2x
        disablePictureInPicture
        className="w-full aspect-video outline-none"
      >
        Browser Anda tidak mendukung elemen video HTML5.
      </video>
      
      {/* Indikator Anti-Skip aktif */}
      <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/10 flex items-center gap-2 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity">
        <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
        <span className="text-xs font-medium text-white">Anti-seeking Active</span>
      </div>
    </div>
  );
}
