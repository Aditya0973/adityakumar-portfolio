"use client";

import * as React from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { MapPin, Mail, ArrowUpRight, Sparkles, CheckCircle2 } from "lucide-react";
import { TapeSticker, SparkleStar, AutonomousSpiral, AutonomousAsterisk } from "@/components/SketchDoodles";
import { playPop, playFigmaClick } from "@/utils/soundEffects";
import { SquigglyText } from "@/components/SquigglyLink";

export function HeroSketchCard() {
  const router = useRouter();
  const [copied, setCopied] = React.useState(false);

  const handleCardClick = () => {
    playFigmaClick();
    router.push("/about");
  };

  const handleCopyEmail = (e: React.MouseEvent) => {
    e.stopPropagation();
    navigator.clipboard.writeText("adityakumar4727@gmail.com");
    setCopied(true);
    playPop();
    setTimeout(() => setCopied(false), 2200);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 15, rotate: -1.5 }}
      animate={{
        opacity: 1,
        y: [-3, 3, -3],
        rotate: [-1.8, -0.8, -1.8]
      }}
      transition={{
        y: { duration: 5, repeat: Infinity, ease: "easeInOut" },
        rotate: { duration: 6, repeat: Infinity, ease: "easeInOut" }
      }}
      whileHover={{ scale: 1.03, rotate: 0, y: -6 }}
      onClick={handleCardClick}
      title="Click to learn more about Aditya"
      className="relative w-full max-w-[340px] sm:max-w-[360px] mx-auto bg-white p-4 pb-5 rounded-3xl border border-neutral-300 shadow-xs hover:shadow-md group select-none cursor-pointer transition-all duration-300"
    >
      {/* Top Tape Sticker Accent */}
      <TapeSticker className="-top-3 left-1/2 -translate-x-1/2" angle="-2deg" />

      {/* Autonomous Floating Vector Shapes */}
      <div className="absolute -top-5 -right-5 pointer-events-none">
        <AutonomousSpiral color="#E65100" size={34} speed={9} />
      </div>
      <div className="absolute -bottom-4 -left-4 pointer-events-none">
        <AutonomousAsterisk color="#CCFF00" size={26} />
      </div>

      {/* Photo Frame Container with squiggly/wavy border & new portrait */}
      <div className="relative w-full aspect-[4/4.4] rounded-2xl overflow-hidden bg-neutral-900 border border-neutral-200 group-hover:border-[#0057FF] transition-colors">
        <img
          src="/media/me.jpeg"
          alt="Aditya Kumar"
          className="w-full h-full object-cover object-top transition-transform duration-300 group-hover:scale-105"
        />

        {/* Live Status Badge Overlay */}
        <div className="absolute top-3 left-3 flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/75 backdrop-blur-md border border-white/20 text-white text-[10px] font-mono tracking-wide shadow-md">
          <span className="w-2 h-2 rounded-full bg-[#10B981] animate-pulse" />
          <span>BUILDING & DESIGNING</span>
        </div>

        {/* Playful Floating Tag */}
        <div className="absolute bottom-3 right-3 px-2.5 py-1 rounded-xl bg-[#CCFF00] text-black text-[10px] font-mono font-bold tracking-wider uppercase shadow-md -rotate-3 border border-black/10">
          UI / UX ✦ 3D
        </div>
      </div>

      {/* ID Card Metadata Info */}
      <div className="mt-4 space-y-3">
        <div className="flex items-start justify-between">
          <div>
            <div className="flex items-center gap-1.5">
              <h3 className="text-lg font-bold text-black tracking-tight font-sans group-hover:text-[#E65100] transition-colors">
                <SquigglyText color="#E65100">Aditya Kumar</SquigglyText>
              </h3>
              <span className="text-[11px] font-mono text-neutral-500">He/Him</span>
            </div>
            <p className="text-xs text-neutral-600 font-medium flex items-center gap-1">
              <span>Product Designer &amp; UI/UX Specialist</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-neutral-400 group-hover:text-[#E65100] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
            </p>
          </div>

          <div className="w-8 h-8 rounded-full bg-[#FFF7ED] flex items-center justify-center text-[#E65100] font-bold text-xs shrink-0 border border-[#E65100]/20 shadow-2xs">
            AK
          </div>
        </div>

        {/* Location & Quick Contact Pills */}
        <div className="pt-1 flex flex-col gap-2 border-t border-neutral-100 text-xs font-mono text-neutral-600">
          <div className="flex items-center justify-between">
            <span className="flex items-center gap-1.5 text-[11px]">
              <MapPin className="w-3.5 h-3.5 text-[#E65100]" />
              <span>UP, India (UTC+5:30)</span>
            </span>
            <span className="text-[11px] font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-md border border-emerald-200">
              Ready to Work
            </span>
          </div>

          {/* Email button with copy interaction */}
          <motion.button
            whileTap={{ scale: 0.97 }}
            onClick={handleCopyEmail}
            title="Click to copy official email"
            className="w-full flex items-center justify-between px-3 py-2 rounded-xl bg-[#FAF8F5] hover:bg-[#FFF7ED] border border-neutral-200 hover:border-[#E65100]/30 transition-colors text-[11px] group/btn cursor-pointer"
          >
            <span className="flex items-center gap-1.5 truncate">
              <Mail className="w-3.5 h-3.5 text-neutral-500 group-hover/btn:text-[#E65100]" />
              <span className="truncate">adityakumar4727@gmail.com</span>
            </span>
            <span className="text-[10px] font-bold text-[#E65100] uppercase shrink-0 flex items-center gap-0.5">
              {copied ? (
                <>
                  <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                  <span className="text-emerald-600">Copied!</span>
                </>
              ) : (
                <>
                  <span>Copy</span>
                  <ArrowUpRight className="w-3 h-3" />
                </>
              )}
            </span>
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
}
