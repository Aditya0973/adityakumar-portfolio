"use client";

import * as React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { PROJECTS } from "@/data/portfolio";
import { Footer } from "@/components/Footer";
import { playPop, playFigmaClick } from "@/utils/soundEffects";
import {
  StarburstBadge,
  SparkleStar,
  WashiTape,
  PushPin,
  RealisticPaperClip,
  PostageCancellationStamp,
  AutonomousSpiral,
  AutonomousSpring
} from "@/components/SketchDoodles";
import { SquigglyText } from "@/components/SquigglyLink";

export default function WorkPage() {
  return (
    <div className="relative pt-12 sm:pt-16 pb-28 px-4 sm:px-8 max-w-5xl mx-auto space-y-20 overflow-x-hidden">
      {/* Background Doodles */}
      <div className="absolute top-20 right-6 pointer-events-none hidden lg:block opacity-75">
        <AutonomousSpiral color="#E65100" size={48} speed={12} />
      </div>
      <div className="absolute top-[500px] left-2 pointer-events-none hidden xl:block opacity-65">
        <AutonomousSpring color="#10B981" width={65} height={30} />
      </div>

      {/* HEADER */}
      <section className="space-y-4 pt-4 relative">
        <RealisticPaperClip color="#E65100" size={32} className="absolute -left-8 -top-3 hidden sm:block" />

        <div className="flex items-center gap-2">
          <span className="text-xs font-mono font-bold text-[#E65100] bg-orange-100 px-2.5 py-0.5 rounded-md border border-orange-200">
            CASE STUDY ARCHIVES
          </span>
          <span className="text-xs font-mono text-neutral-500 uppercase">
            SELECTED PROJECTS
          </span>
        </div>

        <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-[#121212] leading-[1.1] font-sans">
          Crafting Digital Products <br />
          <span className="font-serif italic font-normal text-[#E65100]">That Users Love.</span>
        </h1>

        <p className="text-sm sm:text-base text-neutral-600 max-w-xl leading-relaxed font-sans">
          A collection of web applications, mobile user interfaces, design systems, and 3D visual experiences designed with purpose and craft.
        </p>
      </section>

      {/* 2x2 PROJECT GRID WITH DIAGONAL ORANGE PAPER ARCHIVE CARDS */}
      <section className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {PROJECTS.map((proj, idx) => {
          const indexNumber = `0${idx + 1}`;
          const isOrangeCard = idx === 0 || idx === 3;
          const isEven = idx % 2 === 0;

          const tagBg = isOrangeCard
            ? "bg-[#CCFF00] text-black border-black/20"
            : idx === 1
            ? "bg-[#EFF6FF] text-[#0057FF] border-blue-200"
            : "bg-[#FFF4CC] text-[#B45309] border-amber-200";

          return (
            <Link
              key={proj.id}
              href={proj.link}
              onClick={() => playPop()}
              className="block group"
            >
              <motion.div
                whileHover={{
                  y: -6,
                  rotate: isEven ? -1.2 : 1.2,
                  scale: 1.015
                }}
                transition={{ type: "spring", stiffness: 450, damping: 26 }}
                className={`relative flex flex-col justify-between rounded-3xl p-5 sm:p-6 transition-all duration-300 ${
                  isOrangeCard
                    ? "bg-gradient-to-br from-[#E65100] to-[#C84100] text-white border-2 border-[#E65100] shadow-[0_12px_32px_rgba(230,81,0,0.25)] hover:shadow-[0_20px_42px_rgba(230,81,0,0.35)]"
                    : "bg-gradient-to-b from-white to-[#FDFBF7] border border-neutral-300 shadow-[0_4px_20px_rgba(0,0,0,0.04),inset_0_1px_1px_rgba(255,255,255,0.9)] hover:shadow-[0_20px_40px_-12px_rgba(0,0,0,0.12)] text-black"
                }`}
              >
                {/* Washi / Pushpin Accents */}
                {idx === 0 && <PushPin color="#CCFF00" className="absolute -top-3 right-8 z-20" />}
                {idx === 1 && <WashiTape color="#EFF6FF" angle="3deg" className="-top-3 left-8 z-20" />}
                {idx === 2 && <WashiTape color="#FFF4CC" angle="-2deg" className="-top-3 right-8 z-20" />}
                {idx === 3 && <PushPin color="#CCFF00" className="absolute -top-3 right-8 z-20" />}

                <div className={`flex items-center justify-between pb-3 border-b ${
                  isOrangeCard ? "border-white/20" : "border-neutral-200/80"
                }`}>
                  <div className="flex items-center gap-2">
                    <span className={`text-xs font-mono font-bold transition-colors ${
                      isOrangeCard ? "text-orange-200" : "text-neutral-400 group-hover:text-black"
                    }`}>
                      {indexNumber} //
                    </span>
                    <span className={`text-[10px] font-mono font-bold uppercase px-2.5 py-0.5 rounded-full border ${tagBg} shadow-2xs`}>
                      {proj.tag}
                    </span>
                  </div>
                  <span className={`text-[11px] font-mono font-semibold px-2 py-0.5 rounded-md ${
                    isOrangeCard ? "bg-black/20 text-orange-200" : "bg-neutral-100 text-neutral-400"
                  }`}>
                    ARCHIVE {proj.year}
                  </span>
                </div>

                <div className={`relative aspect-[16/10] w-full rounded-2xl overflow-hidden my-4 bg-neutral-900 border transition-colors ${
                  isOrangeCard ? "border-white/30 group-hover:border-white" : "border-neutral-300/80 shadow-inner group-hover:border-neutral-400"
                }`}>
                  <img
                    src={proj.image}
                    alt={proj.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-black/25 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-[2px]">
                    <span className={`px-4 py-2 rounded-full text-xs font-mono font-bold shadow-md border flex items-center gap-1.5 transform group-hover:scale-105 transition-transform ${
                      isOrangeCard
                        ? "bg-white text-[#E65100] border-neutral-200"
                        : "bg-white text-black border-neutral-300"
                    }`}>
                      <span>Explore Case Study</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </div>

                <div className="space-y-2 pt-1">
                  <div className="flex items-start justify-between gap-4">
                    <h3 className={`text-xl font-bold font-sans transition-colors ${
                      isOrangeCard ? "text-white group-hover:text-[#93C5FD]" : "text-black group-hover:text-[#E65100]"
                    }`}>
                      <SquigglyText color={isOrangeCard ? "#93C5FD" : "#E65100"}>
                        {proj.title}
                      </SquigglyText>
                    </h3>
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-colors border shadow-2xs ${
                      isOrangeCard
                        ? "bg-white text-[#E65100] group-hover:bg-neutral-100 border-white/60"
                        : "bg-neutral-100 group-hover:bg-[#E65100] group-hover:text-white border-neutral-200"
                    }`}>
                      <ArrowUpRight className="w-4 h-4" />
                    </div>
                  </div>
                  <p className={`text-xs leading-relaxed line-clamp-2 ${
                    isOrangeCard ? "text-orange-100" : "text-neutral-600"
                  }`}>
                    {proj.description}
                  </p>
                </div>
              </motion.div>
            </Link>
          );
        })}
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
