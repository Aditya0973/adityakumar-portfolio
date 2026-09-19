"use client";

import React, { useRef } from "react";
import { Sparkles, Film, Play, Pause } from "lucide-react";
import { playPop } from "@/utils/soundEffects";

export function DonutShowcase() {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isPlaying, setIsPlaying] = React.useState(true);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play();
      setIsPlaying(true);
    }
    playPop();
  };

  return (
    <div className="relative w-full rounded-3xl border-2 border-[#121212] bg-white p-3.5 sm:p-4 overflow-hidden shadow-[5px_5px_0px_#121212] group">
      {/* Header bar */}
      <div className="flex items-center justify-between text-xs font-mono text-neutral-600 pb-2 border-b border-neutral-200">
        <span className="font-bold uppercase flex items-center gap-1.5 text-black">
          <Sparkles className="w-3.5 h-3.5 text-[#0057FF]" />
          <span>Blender 3D Donut Simulation</span>
        </span>
        <span className="flex items-center gap-1 text-[10px] bg-[#CCFF00] text-black font-bold px-2 py-0.5 rounded-full border border-black/10">
          <Film className="w-3 h-3" />
          Cycles 4K
        </span>
      </div>

      {/* Embedded Donut Video with Play/Pause button overlay */}
      <div
        onClick={togglePlay}
        className="relative aspect-video w-full rounded-2xl overflow-hidden mt-3 bg-neutral-900 shadow-inner cursor-pointer group/vid"
      >
        <video
          ref={videoRef}
          src="/media/donut-video.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover rounded-2xl"
        />

        {/* Hover play/pause overlay */}
        <div className="absolute inset-0 bg-black/20 opacity-0 group-hover/vid:opacity-100 transition-opacity flex items-center justify-center">
          <div className="w-12 h-12 rounded-full bg-white/90 backdrop-blur-md flex items-center justify-center text-black shadow-lg">
            {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5 ml-0.5" />}
          </div>
        </div>
      </div>

      {/* Footer bar */}
      <div className="flex items-center justify-between pt-2.5 mt-2 text-[11px] font-mono text-neutral-600 border-t border-neutral-200">
        <span>Geometry Nodes & Sprinkles</span>
        <span className="text-black font-bold">250 Frames • 60 FPS</span>
      </div>
    </div>
  );
}
