"use client";

import React, { useRef } from "react";
import { Sparkles, Film } from "lucide-react";

export function DonutShowcase() {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  return (
    <div className="relative w-full rounded-2xl border border-[#e5e2de] bg-[#f5f2f0] p-2.5 overflow-hidden shadow-sm group">
      {/* Header bar */}
      <div className="flex items-center justify-between text-[10px] font-mono text-[#757575] pb-1 border-b border-[#e5e2de]/60">
        <span className="font-semibold uppercase flex items-center gap-1 text-black">
          <Sparkles className="w-3 h-3 text-[#4a5d4e]" />
          3D Donut Render
        </span>
        <span className="flex items-center gap-1 text-[9px] text-[#757575]">
          <Film className="w-2.5 h-2.5" />
          Blender 4.2
        </span>
      </div>

      {/* Embedded Donut Video */}
      <div className="relative aspect-video w-full rounded-xl overflow-hidden mt-2 bg-black/5 shadow-inner">
        <video
          ref={videoRef}
          src="/media/donut-video.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover rounded-xl"
        />
      </div>

      {/* Footer bar */}
      <div className="flex items-center justify-between pt-1.5 mt-1 text-[9px] font-mono text-[#757575] border-t border-[#e5e2de]/60">
        <span>Cycles 250 Frames</span>
        <span className="text-black font-semibold">1080p</span>
      </div>
    </div>
  );
}
