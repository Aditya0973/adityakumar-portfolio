"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, BookOpen, PenTool, Layers } from "lucide-react";
import {
  WashiTape,
  PushPin,
  RealisticPaperClip,
  PostageCancellationStamp,
  DoodleCrown,
  SparkleStar,
  AutonomousSpiral
} from "@/components/SketchDoodles";

export function Preloader() {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const startTime = Date.now();
    const duration = 1800;

    const interval = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const pct = Math.min(100, Math.floor((elapsed / duration) * 100));

      setProgress(pct);

      if (pct >= 100) {
        clearInterval(interval);
        setTimeout(() => {
          setLoading(false);
        }, 200);
      }
    }, 20);

    return () => clearInterval(interval);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{
            y: "-100%",
            rotateX: 10,
            transition: { duration: 0.75, ease: [0.76, 0, 0.24, 1] }
          }}
          className="fixed inset-0 z-50 flex flex-col items-center justify-between p-6 sm:p-12 bg-[#FAF8F5] text-[#121212] select-none overflow-hidden origin-top"
          style={{
            backgroundImage:
              "radial-gradient(#00000008 1px, transparent 1px), linear-gradient(to bottom, #FAF8F5, #F2EFE9)",
            backgroundSize: "24px 24px, 100% 100%"
          }}
        >
          {/* Heavy Art Book Outer Frame / Paper Margin */}
          <div className="absolute inset-4 sm:inset-8 border-2 border-dashed border-neutral-300 pointer-events-none rounded-3xl" />

          {/* Top Art Book Metadata Bar */}
          <div className="w-full max-w-5xl flex items-center justify-between text-xs font-mono z-20 pt-2 px-2">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-[#E65100] animate-pulse" />
              <span className="font-extrabold tracking-widest text-black text-[11px] sm:text-xs uppercase">
                VOL. 26 // ART BOOK &amp; COMPENDIUM
              </span>
            </div>

            <div className="flex items-center gap-2">
              <span className="px-3 py-1 rounded-md bg-[#CCFF00] text-black font-extrabold text-[10px] tracking-wider uppercase border border-black/20 shadow-2xs">
                FIRST PRINT • 2026
              </span>
            </div>
          </div>

          {/* Center Art Book Monograph Title Block */}
          <div className="relative z-20 flex flex-col items-center justify-center text-center space-y-6 max-w-3xl my-auto px-4">
            {/* Washi Tape & Crown Ephemera */}
            <div className="relative inline-block">
              <WashiTape color="#FFF4CC" angle="-3deg" className="-top-5 left-1/2 -translate-x-1/2" />
              <div className="absolute -top-10 -right-8 pointer-events-none">
                <DoodleCrown color="#CCFF00" size={38} />
              </div>
            </div>

            {/* Massive Bold Art Book Typography */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="space-y-3"
            >
              <div className="text-[11px] sm:text-xs font-mono font-bold tracking-widest text-[#E65100] uppercase bg-[#FFF7ED] inline-block px-3 py-1 rounded-full border border-[#E65100]/20">
                A Visual Monograph of Digital Craft
              </div>

              <h1 className="text-5xl sm:text-8xl md:text-9xl font-extrabold tracking-tighter text-[#121212] font-sans leading-[0.9] uppercase">
                Aditya <br />
                <span className="font-serif italic font-normal text-[#E65100] lowercase tracking-normal">
                  Kumar.
                </span>
              </h1>

              <p className="text-xs sm:text-sm font-mono text-neutral-600 max-w-lg mx-auto tracking-wide pt-2">
                UI/UX Design • 3D Turnarounds • Creative Systems Engineering
              </p>
            </motion.div>

            {/* Art-Book Stamp & Progress Meter */}
            <div className="w-full max-w-md space-y-3 pt-4">
              <div className="w-full h-3 rounded-full bg-neutral-200/80 overflow-hidden border border-neutral-300 p-0.5 shadow-inner">
                <motion.div
                  className="h-full rounded-full bg-[#E65100]"
                  style={{ width: `${progress}%` }}
                />
              </div>

              <div className="flex items-center justify-between text-[11px] font-mono font-extrabold text-neutral-600">
                <span className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
                  <span>OPENING FOLIO</span>
                </span>
                <span className="text-black font-mono text-sm">{progress}%</span>
              </div>
            </div>
          </div>

          {/* Bottom Art Book Imprint Stamp */}
          <div className="w-full max-w-5xl text-[11px] font-mono text-neutral-500 flex items-center justify-between border-t border-neutral-300 pt-3 z-20 px-2">
            <span>PRINTED IN INDIA • 2026 EDITION</span>
            <PostageCancellationStamp
              text="STUDIO IMPRINT"
              date="2026"
              color="#E65100"
              className="scale-75 origin-right hidden sm:inline-flex"
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}