"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { TESTIMONIALS } from "@/data/portfolio";
import { playPop, playHoverTick } from "@/utils/soundEffects";
import { WashiTape, PushPin, RealisticPaperClip } from "@/components/SketchDoodles";

export function InfiniteReviewCarousel() {
  const [isPaused, setIsPaused] = useState(false);
  // Repeat the 3 authentic testimonials for seamless infinite carousel loop
  const displayItems = [...TESTIMONIALS, ...TESTIMONIALS, ...TESTIMONIALS, ...TESTIMONIALS];

  return (
    <div
      className="relative w-full overflow-hidden py-10 select-none"
      style={{
        maskImage: "linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)",
        WebkitMaskImage: "linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)"
      }}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >

      <motion.div
        className="flex gap-6 w-max px-8"
        animate={isPaused ? {} : { x: ["0%", "-50%"] }}
        transition={{
          repeat: Infinity,
          ease: "linear",
          duration: 32
        }}
      >
        {displayItems.map((t, idx) => {
          const styleIdx = idx % 3;
          const rotations = [-1.5, 1.2, -0.8];
          const rotation = rotations[styleIdx];

          // 1. Scrapbook Polaroid Style Card
          if (styleIdx === 0) {
            return (
              <motion.div
                key={idx}
                whileHover={{ y: -8, scale: 1.02, rotate: 0 }}
                onMouseEnter={() => playHoverTick()}
                transition={{ type: "spring", stiffness: 350, damping: 25 }}
                onClick={() => playPop()}
                style={{ transform: `rotate(${rotation}deg)` }}
                className="relative w-[320px] sm:w-[370px] p-6 rounded-3xl bg-white border border-neutral-300 shadow-xs hover:shadow-md transition-all flex flex-col justify-between gap-4 cursor-pointer shrink-0 group"
              >
                <WashiTape color="#FFF4CC" angle="-3deg" className="-top-3 right-6" />

                <div className="space-y-3 pt-1">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1 text-[#E65100]">
                      {"★★★★★"}
                    </div>
                    <span className="text-[10px] font-mono font-bold bg-[#FFF7ED] text-[#E65100] px-2.5 py-0.5 rounded-full border border-[#E65100]/20">
                      SCRAPBOOK • VERIFIED
                    </span>
                  </div>

                  <p className="text-xs sm:text-sm text-neutral-800 font-serif italic leading-relaxed">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                </div>

                <div className="pt-3 border-t border-neutral-200 flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-full bg-[#E65100] text-white font-bold text-xs flex items-center justify-center shadow-2xs">
                      {t.author.charAt(0)}
                    </div>
                    <div>
                      <div className="text-xs font-bold text-black font-sans group-hover:text-[#E65100] transition-colors">
                        {t.author}
                      </div>
                      <div className="text-[10px] text-neutral-500 font-mono">{t.role}</div>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          }

          // 2. Neumorphic Soft UI Card
          if (styleIdx === 1) {
            return (
              <motion.div
                key={idx}
                whileHover={{ y: -8, scale: 1.02, rotate: 0 }}
                onMouseEnter={() => playHoverTick()}
                transition={{ type: "spring", stiffness: 350, damping: 25 }}
                onClick={() => playPop()}
                style={{ transform: `rotate(${rotation}deg)` }}
                className="relative w-[320px] sm:w-[370px] p-6 rounded-3xl bg-[#E8EDF2] border border-white/60 shadow-[8px_8px_18px_rgba(163,177,198,0.5),-8px_-8px_18px_rgba(255,255,255,0.9)] hover:shadow-[12px_12px_24px_rgba(163,177,198,0.6),-12px_-12px_24px_rgba(255,255,255,0.95)] transition-all flex flex-col justify-between gap-4 cursor-pointer shrink-0 group"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1 text-[#0057FF]">
                      {"★★★★★"}
                    </div>
                    <span className="text-[10px] font-mono font-bold text-[#0057FF] bg-blue-100/70 px-2.5 py-0.5 rounded-full border border-blue-200">
                      NEUMORPHIC • SOFT UI
                    </span>
                  </div>

                  <p className="text-xs sm:text-sm text-neutral-800 font-serif italic leading-relaxed">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                </div>

                <div className="pt-3 border-t border-neutral-300/60 flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-full bg-[#0057FF] text-white font-bold text-xs flex items-center justify-center shadow-2xs">
                      {t.author.charAt(0)}
                    </div>
                    <div>
                      <div className="text-xs font-bold text-black font-sans group-hover:text-[#0057FF] transition-colors">
                        {t.author}
                      </div>
                      <div className="text-[10px] text-neutral-600 font-mono">{t.role}</div>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          }

          // 3. Glassmorphic Frosted Card
          return (
            <motion.div
              key={idx}
              whileHover={{ y: -8, scale: 1.02, rotate: 0 }}
              onMouseEnter={() => playHoverTick()}
              transition={{ type: "spring", stiffness: 350, damping: 25 }}
              onClick={() => playPop()}
              style={{ transform: `rotate(${rotation}deg)` }}
              className="relative w-[320px] sm:w-[370px] p-6 rounded-3xl bg-white/70 backdrop-blur-xl border border-white/80 shadow-[0_10px_30px_rgba(0,0,0,0.06)] hover:shadow-[0_16px_40px_rgba(0,0,0,0.1)] transition-all flex flex-col justify-between gap-4 cursor-pointer shrink-0 group"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1 text-[#10B981]">
                    {"★★★★★"}
                  </div>
                  <span className="text-[10px] font-mono font-bold bg-emerald-100 text-[#10B981] px-2.5 py-0.5 rounded-full border border-emerald-300">
                    GLASS • OPTICAL
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-neutral-800 font-serif italic leading-relaxed">
                  &ldquo;{t.quote}&rdquo;
                </p>
              </div>

              <div className="pt-3 border-t border-neutral-200/80 flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-full bg-[#10B981] text-white font-bold text-xs flex items-center justify-center shadow-2xs">
                    {t.author.charAt(0)}
                  </div>
                  <div>
                    <div className="text-xs font-bold text-black font-sans group-hover:text-[#10B981] transition-colors">
                      {t.author}
                    </div>
                    <div className="text-[10px] text-neutral-500 font-mono">{t.role}</div>
                  </div>
                </div>
              </div>
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  );
}
