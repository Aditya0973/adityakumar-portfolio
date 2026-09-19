"use client";

import * as React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, Copy, CheckCircle2, Sparkles, Heart } from "lucide-react";
import { playSuccess, playPop, playRockyVoice } from "@/utils/soundEffects";
import { SparkleStar, TapeSticker } from "@/components/SketchDoodles";
import { SquigglyLink } from "@/components/SquigglyLink";

export function Footer() {
  const [copied, setCopied] = React.useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText("adityakumar4727@gmail.com");
    setCopied(true);
    playSuccess();
    setTimeout(() => setCopied(false), 2200);
  };

  return (
    <footer className="w-full pt-10 pb-24 px-4 sm:px-8 max-w-5xl mx-auto space-y-8 select-none">
      {/* Big Playful CTA Banner Wrapper */}
      <div className="relative">
        <TapeSticker className="-top-3 left-10" angle="-4deg" />
        <TapeSticker className="-top-3 right-10" angle="5deg" />

        <Link
          href="/contact"
          onClick={() => playPop()}
          className="block group relative rounded-3xl bg-[#0057FF] text-white border border-transparent hover:border-[#121212] shadow-xs p-8 sm:p-14 text-center hover:bg-[#0044CC] transition-all hover:shadow-[8px_8px_0px_#121212]"
        >
          <div className="relative z-10 space-y-3">
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-white/20 text-[#CCFF00] font-mono text-[11px] font-bold uppercase tracking-wider backdrop-blur-xs border border-white/20">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Ready for what&apos;s next?</span>
            </div>

            <h2 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white font-sans">
              Let&apos;s Build <span className="font-serif italic font-normal text-[#FFF4CC]">Something Bold</span>
            </h2>

            <p className="text-xs sm:text-sm text-blue-100 font-mono max-w-md mx-auto flex items-center justify-center gap-1 pt-1">
              <span>Start a project, discuss roles, or say hello</span>
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </p>
          </div>
        </Link>
      </div>

      {/* Footer Meta Row */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs font-mono text-neutral-600 border-t-2 border-[#121212] pt-6">
        <button
          type="button"
          onClick={copyEmail}
          className="hover:text-black transition-colors flex items-center gap-2 cursor-pointer font-bold bg-white px-3 py-1.5 rounded-xl border border-neutral-300 shadow-2xs group"
          title="Click to copy email"
        >
          <span>adityakumar4727@gmail.com</span>
          {copied ? (
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
          ) : (
            <Copy className="w-3.5 h-3.5 text-neutral-400 group-hover:text-black" />
          )}
        </button>

        <div className="flex flex-wrap items-center gap-6 text-xs font-bold text-neutral-800">
          <SquigglyLink
            href="https://www.behance.net/1c5da35f"
            color="#0057FF"
            className="hover:text-[#0057FF] transition-colors"
          >
            <span>Behance ↗</span>
          </SquigglyLink>
          <SquigglyLink
            href="https://www.linkedin.com/in/adityakumar0973/"
            color="#0057FF"
            className="hover:text-[#0057FF] transition-colors"
          >
            <span>LinkedIn ↗</span>
          </SquigglyLink>
          <SquigglyLink
            href="https://github.com/Aditya0973"
            color="#10B981"
            className="hover:text-[#10B981] transition-colors"
          >
            <span>GitHub ↗</span>
          </SquigglyLink>
        </div>
      </div>

      {/* Project Hail Mary Minimalist Easter Egg */}
      <div className="flex items-center justify-center pt-2">
        <motion.button
          type="button"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => {
            playRockyVoice();
          }}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FAF8F5] border border-neutral-300/80 text-[10px] font-mono text-neutral-600 hover:text-black hover:border-amber-400 transition-all cursor-pointer group shadow-2xs"
          title="Project Hail Mary Easter Egg • Click to Hear Rocky Fist Bump!"
        >
          {/* 5-pointed Minimalist Eridian Pentagonal Star */}
          <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 fill-amber-400 text-amber-600 stroke-[1.5] group-hover:rotate-12 transition-transform">
            <polygon points="12,2 15,9 22,9 17,14 19,21 12,17 5,21 7,14 2,9 9,9" />
          </svg>
          <span className="font-semibold text-neutral-800">Rocky was here</span>
          <span className="text-neutral-400 hidden sm:inline">•</span>
          <span className="text-amber-700 italic hidden sm:inline">&ldquo;Amaze! Amaze! Amaze!&rdquo;</span>
          <span className="text-[9px] bg-amber-100 text-amber-800 font-bold px-1.5 py-0.5 rounded border border-amber-300 group-hover:bg-amber-200">
            FIST BUMP 👊
          </span>
        </motion.button>
      </div>

      <div className="flex flex-wrap items-center justify-between text-[11px] font-mono text-neutral-500 pt-1">
        <span>© {new Date().getFullYear()} Aditya Kumar • All Rights Reserved</span>
        <span className="flex items-center gap-1">
          <span>Crafted with</span>
          <Heart className="w-3 h-3 fill-red-500 text-red-500" />
          <span>& Next.js</span>
        </span>
      </div>
    </footer>
  );
}
