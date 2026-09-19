"use client";

import * as React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Star,
  Sparkles,
  MapPin,
  CheckCircle2,
  Paperclip,
  Heart
} from "lucide-react";
import { PROJECTS, EXPERIENCES } from "@/data/portfolio";
import { Footer } from "@/components/Footer";
import { playPop, playFigmaClick } from "@/utils/soundEffects";
import { MagneticButton } from "@/components/MagneticButton";
import { HeroSketchCard } from "@/components/HeroSketchCard";
import { InteractiveStickerDeck } from "@/components/InteractiveStickerDeck";
import { DonutShowcase } from "@/components/DonutShowcase";
import { InfiniteReviewCarousel } from "@/components/InfiniteReviewCarousel";
import {
  SparkleStar,
  StarburstBadge,
  WavyUnderline,
  SketchArrow,
  AutonomousSpiral,
  AutonomousSpring,
  AutonomousAsterisk,
  PostageCancellationStamp,
  RealisticPaperClip,
  WashiTape,
  PushPin,
  DoodleCrown,
  DoodleSmile,
  SquigglyRibbon,
  CinematicColorPrism
} from "@/components/SketchDoodles";
import { SquigglyLink, SquigglyText } from "@/components/SquigglyLink";

export default function HomePage() {
  const [copiedEmail, setCopiedEmail] = React.useState(false);

  const handleCopy = (e: React.MouseEvent) => {
    e.stopPropagation();
    navigator.clipboard.writeText("adityakumar4727@gmail.com");
    setCopiedEmail(true);
    playPop();
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  return (
    <div className="relative pt-10 sm:pt-14 pb-28 px-4 sm:px-8 max-w-5xl mx-auto space-y-24 overflow-x-hidden">
      {/* Background Scrapbook Ambient Doodles */}
      <div className="absolute top-28 right-8 pointer-events-none hidden lg:block opacity-75">
        <AutonomousSpiral color="#E65100" size={54} speed={12} />
      </div>
      <div className="absolute top-[520px] left-2 pointer-events-none hidden xl:block opacity-65">
        <AutonomousSpring color="#10B981" width={70} height={32} />
      </div>
      <div className="absolute top-[1100px] right-4 pointer-events-none hidden lg:block opacity-60">
        <SquigglyRibbon color="#0057FF" />
      </div>

      {/* ========================================================================= */}
      {/* 1. TOP EDITORIAL STATUS & QUICK NAVIGATION BAR */}
      {/* ========================================================================= */}
      <div className="flex flex-wrap items-center justify-between gap-3 text-xs font-mono border-b border-neutral-300 pb-3 select-none">
        <div className="flex items-center gap-2.5">
          <span className="w-2.5 h-2.5 rounded-full bg-[#10B981] animate-pulse" />
          <span className="font-bold text-black tracking-tight uppercase">
            READY TO WORK
          </span>
          <span className="hidden sm:inline text-neutral-400">/</span>
          <span className="hidden sm:inline text-neutral-600">
            PRODUCT DESIGNER ✦ UI/UX &amp; 3D
          </span>
        </div>

        <div className="flex items-center gap-3">
          <StarburstBadge text="2026 Edition" bgColor="#CCFF00" />
          <div className="hidden md:flex items-center gap-1.5 text-neutral-600">
            <MapPin className="w-3.5 h-3.5 text-[#E65100]" />
            <span>UP, India</span>
          </div>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* 2. HERO SECTION: Mixed Editorial Typography + Scrapbook Badges */}
      {/* ========================================================================= */}
      <section className="space-y-8 relative">
        {/* Floating Crown & Asterisk */}
        <div className="absolute -top-6 left-28 pointer-events-none hidden sm:block">
          <DoodleCrown color="#CCFF00" size={32} />
        </div>
        <div className="absolute -top-4 right-1/4 pointer-events-none hidden sm:block">
          <AutonomousAsterisk color="#6864F6" size={30} />
        </div>

        <div className="relative space-y-4 max-w-3xl">
          {/* Greeting Tag + Hand-drawn Arrow */}
          <div className="flex flex-wrap items-center gap-3 relative">
            <div className="inline-flex items-center gap-2 relative">
              <motion.div
                whileHover={{ scale: 1.06, rotate: -2 }}
                onClick={() => playPop()}
                className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-[#FFF4CC] border border-amber-300 text-xs font-mono font-bold text-black shadow-2xs cursor-pointer"
              >
                <span>Hello World!</span>
                <Heart className="w-3.5 h-3.5 text-red-500 fill-red-500" />
              </motion.div>

              <div className="hidden sm:block absolute -right-16 -top-4 pointer-events-none">
                <SketchArrow color="#FF5500" flip={true} />
              </div>
            </div>

            <span className="text-xs font-mono text-neutral-500 tracking-wider">
              ✦ Human-Centered Digital Experiences
            </span>
          </div>

          {/* Main Mixed Typography Headline */}
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-[#121212] leading-[1.15] font-sans">
            I&apos;m{" "}
            <span className="font-serif italic font-normal text-[#0057FF] underline decoration-[#CCFF00] decoration-wavy decoration-2">
              Aditya Kumar
            </span>{" "}
            — <br className="hidden sm:inline" />
            <span>I make things </span>
            <span className="relative inline-block font-serif italic font-normal text-[#E65100]">
              pretty
              <span className="absolute -bottom-1 left-0 w-full hidden sm:block">
                <WavyUnderline color="#FF3B30" />
              </span>
            </span>{" "}
            <span className="text-neutral-400 font-serif italic font-light">&amp;</span>{" "}
            <span className="inline-flex items-center gap-2">
              <span>make them work.</span>
              <SparkleStar color="#0057FF" size={26} className="hidden sm:inline-block" />
            </span>
          </h1>

          <p className="text-sm sm:text-base text-neutral-600 max-w-xl leading-relaxed font-sans pt-2">
            I design intuitive digital products, responsive web experiences, and 3D visual systems with a playful, human-centered heart.
          </p>

          {/* Primary Action Buttons + Rating */}
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <MagneticButton pullStrength={0.35}>
              <Link
                href="/contact"
                onClick={() => playFigmaClick()}
                className="inline-flex items-center gap-2 px-7 py-3 rounded-full bg-[#E65100] text-white text-xs font-bold font-mono tracking-wide transition-all shadow-sm hover:bg-[#D97706] hover:shadow-md active:translate-y-0.5 group"
              >
                <span>LET&apos;S TALK</span>
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </Link>
            </MagneticButton>

            <motion.button
              whileTap={{ scale: 0.96 }}
              onClick={handleCopy}
              className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-white text-black text-xs font-mono font-bold transition-all border border-neutral-300 shadow-2xs hover:bg-neutral-50 active:translate-y-0.5"
            >
              <span>{copiedEmail ? "EMAIL COPIED!" : "COPY EMAIL"}</span>
              {copiedEmail ? (
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
              ) : (
                <span className="text-[10px] text-neutral-400">adityakumar4727@gmail.com</span>
              )}
            </motion.button>

            <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#FFFDF9] border border-amber-300 text-xs font-mono text-black select-none shadow-2xs relative">
              <div className="flex items-center text-amber-600">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-amber-500 text-amber-500" />
                ))}
              </div>
              <span className="font-bold">4.9 / 5</span>
              <span className="text-[10px] text-neutral-600">(8+ Clients)</span>
              <DoodleSmile size={18} className="absolute -top-3 -right-2 text-neutral-400 hidden sm:block" />
            </div>
          </div>
        </div>

        {/* Hero Asymmetrical Dual Showcase: Polaroid ID Card + Interactive Draggable Sticker Deck */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start pt-4">
          <div className="lg:col-span-5 flex justify-center">
            <HeroSketchCard />
          </div>
          <div className="lg:col-span-7">
            <InteractiveStickerDeck />
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 3. PART. 01 // SELECTED WORKS (Tactile Paper Curl & 3D Tilt Hover) */}
      {/* ========================================================================= */}
      <section className="space-y-8 relative">
        <div className="absolute -top-10 right-4 pointer-events-none hidden md:block">
          <AutonomousSpiral color="#6864F6" size={40} speed={14} />
        </div>

        {/* Editorial Section Header */}
        <div className="flex flex-wrap items-end justify-between gap-4 border-b border-neutral-300 pb-4">
          <div className="relative">
            <RealisticPaperClip color="#E65100" size={28} className="absolute -left-7 -top-2 hidden sm:block" />
            <div className="flex items-center gap-2">
              <span className="text-xs font-mono font-bold text-[#E65100] bg-orange-100 px-2.5 py-0.5 rounded-md border border-orange-200">
                PART. 01
              </span>
              <span className="text-xs font-mono text-neutral-500 uppercase tracking-wider">
                ORIGINALITY &amp; CASE STUDIES
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#121212] tracking-tight font-sans mt-1">
              Selected Works <span className="font-serif italic font-normal text-neutral-500">(01 - 04)</span>
            </h2>
          </div>

          <SquigglyLink
            href="/work"
            color="#E65100"
            onClick={() => playFigmaClick()}
            className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-black hover:text-[#E65100] transition-colors group pb-1"
          >
            <span className="flex items-center gap-1">
              <span>VIEW ALL ARCHIVES</span>
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </span>
          </SquigglyLink>
        </div>

        {/* Asymmetrical Project Grid with Diagonal Orange Variety & Paper Curl */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {PROJECTS.map((project, idx) => {
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
                key={project.id}
                href={project.link}
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
                      : "bg-white border border-neutral-300/90 shadow-2xs hover:shadow-[0_20px_35px_-12px_rgba(0,0,0,0.12)] text-black"
                  }`}
                >
                  {/* Subtle Pushpin or Washi Tape on Alternate Cards */}
                  {idx === 0 && <PushPin color="#CCFF00" className="absolute -top-3 right-6 z-20" />}
                  {idx === 1 && <PushPin color="#0057FF" className="absolute -top-3 right-6 z-20" />}
                  {idx === 2 && <WashiTape color="#EFF6FF" angle="2deg" className="-top-3 left-6 z-20" />}
                  {idx === 3 && <WashiTape color="#FFF4CC" angle="-2deg" className="-top-3 right-6 z-20" />}

                  {/* Top Card Info Bar */}
                  <div className={`flex items-center justify-between pb-3 border-b ${
                    isOrangeCard ? "border-white/20" : "border-neutral-100"
                  }`}>
                    <div className="flex items-center gap-2">
                      <span className={`text-xs font-mono font-bold transition-colors ${
                        isOrangeCard ? "text-orange-200" : "text-neutral-400 group-hover:text-black"
                      }`}>
                        {indexNumber} //
                      </span>
                      <span className={`text-[10px] font-mono font-bold uppercase px-2.5 py-0.5 rounded-full border ${tagBg} shadow-2xs`}>
                        {project.tag}
                      </span>
                    </div>

                    <span className={`text-xs font-mono ${
                      isOrangeCard ? "text-orange-200" : "text-neutral-400"
                    }`}>
                      {project.year}
                    </span>
                  </div>

                  {/* Project Image Preview */}
                  <div className={`relative aspect-[16/10] w-full rounded-2xl overflow-hidden my-4 bg-neutral-900 border transition-colors ${
                    isOrangeCard ? "border-white/30 group-hover:border-white" : "border-neutral-200 group-hover:border-neutral-400"
                  }`}>
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black/25 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-[2px]">
                      <span className={`px-4 py-2 rounded-full text-xs font-mono font-bold shadow-md border flex items-center gap-1.5 transform group-hover:scale-105 transition-transform ${
                        isOrangeCard
                          ? "bg-white text-[#E65100] border-neutral-200"
                          : "bg-white text-black border-neutral-300"
                      }`}>
                        <span>Explore Project</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </span>
                    </div>
                  </div>

                  {/* Bottom Details */}
                  <div className="space-y-2 pt-1">
                    <div className="flex items-start justify-between gap-4">
                      <h3 className={`text-xl font-bold font-sans transition-colors ${
                        isOrangeCard ? "text-white group-hover:text-[#93C5FD]" : "text-black group-hover:text-[#E65100]"
                      }`}>
                        <SquigglyText color={isOrangeCard ? "#93C5FD" : "#E65100"}>
                          {project.title}
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
                      {project.description}
                    </p>
                  </div>
                </motion.div>
              </Link>
            );
          })}
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 4. PART. 02 // 3D LAB & EXPERIMENTAL PROTOTYPES (Postage Stamp & Scrapbook) */}
      {/* ========================================================================= */}
      <section className="space-y-8 relative">
        <div className="flex flex-wrap items-end justify-between gap-4 border-b border-neutral-300 pb-4">
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xs font-mono font-bold text-[#10B981] bg-emerald-100 px-2.5 py-0.5 rounded-md border border-emerald-300">
                PART. 02
              </span>
              <span className="text-xs font-mono text-neutral-500 uppercase tracking-wider">
                BLENDER 3D &amp; MOTION
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#121212] tracking-tight font-sans mt-1">
              3D &amp; Creative Engineering Lab
            </h2>
          </div>
          <PostageCancellationStamp text="STUDIO AIRMAIL" date="2026" color="#059669" className="hidden sm:inline-flex" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          {/* Donut Video Simulation Showcase */}
          <div className="lg:col-span-7">
            <DonutShowcase />
          </div>

          {/* 3D Interactive Badges Collection */}
          <div className="lg:col-span-5 space-y-4">
            <div className="p-6 rounded-3xl bg-white border border-neutral-300/90 shadow-2xs hover:shadow-xs transition-all space-y-4 relative">
              <PushPin color="#10B981" className="absolute -top-3 right-8" />

              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#10B981]">
                  3D Explorations
                </span>
                <span className="text-[10px] font-mono bg-[#FFF4CC] px-2 py-0.5 rounded-md border border-amber-200">
                  BLENDER 4.2
                </span>
              </div>

              <p className="text-xs text-neutral-600 leading-relaxed">
                Visualizing tactile assets, low-poly isometric scenes, and brand animations to bring digital products to life with depth.
              </p>

              {/* 3 Interactive Badges with Stamp Ink Bloom */}
              <div className="grid grid-cols-3 gap-3 pt-2">
                <motion.div
                  whileHover={{ scale: 1.08, rotate: -4 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 500, damping: 25 }}
                  onClick={() => playPop()}
                  className="aspect-square rounded-2xl overflow-hidden bg-neutral-900 border border-neutral-300 shadow-2xs hover:shadow-md cursor-pointer group"
                  title="Blender Donut"
                >
                  <img
                    src="/media/donut-badge.png"
                    alt="Donut"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform"
                  />
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.08, rotate: 4 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 500, damping: 25 }}
                  onClick={() => playPop()}
                  className="aspect-square rounded-2xl overflow-hidden bg-neutral-900 border border-neutral-300 shadow-2xs hover:shadow-md cursor-pointer group"
                  title="Isometric Coffee Shop"
                >
                  <img
                    src="/media/coffee-shop.png"
                    alt="Coffee Shop"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform"
                  />
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.08, rotate: -3 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 500, damping: 25 }}
                  onClick={() => playPop()}
                  className="aspect-square rounded-2xl overflow-hidden bg-neutral-900 border border-neutral-300 shadow-2xs hover:shadow-md cursor-pointer group"
                  title="Low Poly Planet"
                >
                  <img
                    src="/media/planet-badge.png"
                    alt="Planet"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform"
                  />
                </motion.div>
              </div>

              <div className="pt-2 text-[11px] font-mono text-neutral-500 flex items-center justify-between border-t border-neutral-100">
                <span>Visual Design &amp; 3D Lab</span>
                <span className="text-[#10B981] font-bold">INTERACTIVE ✦</span>
              </div>
            </div>

            {/* Quick Link to Behance Room */}
            <Link
              href="/behance"
              onClick={() => playFigmaClick()}
              className="flex items-center justify-between p-4 rounded-2xl bg-[#0057FF] text-white border border-transparent hover:shadow-md transition-all group"
            >
              <div className="flex items-center gap-2.5">
                <Sparkles className="w-4 h-4 text-[#CCFF00]" />
                <span className="text-xs font-mono font-bold">
                  EXPLORE VISUAL DESIGN &amp; 3D IN BEHANCE SPACE
                </span>
              </div>
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 5. CINEMATIC COLOR THEORY & SPACE PRISM */}
      {/* ========================================================================= */}
      <CinematicColorPrism />

      {/* ========================================================================= */}
      {/* 6. PART. 03 // CAPABILITIES & CRAFT STYLES (Multi-Movement Architecture) */}
      {/* ========================================================================= */}
      <section className="space-y-6 relative">
        <div className="flex flex-wrap items-end justify-between gap-4 border-b border-neutral-300 pb-4">
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xs font-mono font-bold text-[#E65100] bg-[#FFF7ED] px-2.5 py-0.5 rounded-md border border-[#E65100]/20 shadow-2xs">
                PART. 03
              </span>
              <span className="text-xs font-mono text-neutral-500 uppercase tracking-wider">
                CAPABILITIES &amp; DESIGN MOVEMENTS
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#121212] tracking-tight font-sans mt-1">
              Multidisciplinary Capabilities
            </h2>
          </div>
          <span className="text-xs font-mono text-neutral-500 hidden sm:inline">
            Each discipline crafted in a distinct movement
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
          {/* 1. SKEUOMORPHIC CARD: Web & UI/UX */}
          <motion.div
            whileHover={{ y: -5, scale: 1.015 }}
            onClick={() => playPop()}
            className="p-6 rounded-3xl border-2 border-[#8C827A]/80 shadow-[0_8px_20px_rgba(0,0,0,0.12),inset_0_1px_1px_rgba(255,255,255,0.9),inset_0_-2px_4px_rgba(0,0,0,0.15)] space-y-4 group cursor-pointer h-full flex flex-col justify-between transition-all"
            style={{
              background: "linear-gradient(180deg, #F4F0EC 0%, #E6DFD6 100%)"
            }}
          >
            <div>
              {/* Metallic Plate Header */}
              <div className="flex items-center justify-between pb-3 border-b border-[#A89F95]/50">
                <div className="flex items-center gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#9E958C] border border-[#6B6259] shadow-inner flex items-center justify-center">
                    <div className="w-1.5 h-0.5 bg-[#4A423B]" />
                  </div>
                  <span className="text-[10px] font-mono font-extrabold text-[#594F47] uppercase tracking-wider">
                    SKEUOMORPHIC RIG
                  </span>
                </div>
                <span className="text-[9px] font-mono px-2 py-0.5 rounded bg-[#2B2622] text-[#E6A040] font-bold">
                  01 // UI/UX
                </span>
              </div>

              <h3 className="text-lg font-extrabold text-[#2B2622] font-sans pt-3 group-hover:text-[#E65100] transition-colors">
                Product &amp; Web Design
              </h3>
              <p className="text-xs text-[#594F47] leading-relaxed mt-2 font-sans">
                Tactile micro-interactions, responsive architectures, and user journeys engineered with physical depth and clarity.
              </p>
            </div>

            <div className="pt-3 border-t border-[#A89F95]/40 flex items-center justify-between text-[10px] font-mono text-[#6B6259]">
              <span>Next.js • Tailwind • Figma</span>
              <span className="text-[#E65100] font-bold">TACTILE ✦</span>
            </div>
          </motion.div>

          {/* 2. NEUMORPHIC CARD: Mobile App Design */}
          <motion.div
            whileHover={{ y: -5, scale: 1.015 }}
            onClick={() => playPop()}
            className="p-6 rounded-3xl bg-[#E8EDF2] border border-white/70 shadow-[8px_8px_18px_rgba(163,177,198,0.5),-8px_-8px_18px_rgba(255,255,255,0.9)] hover:shadow-[12px_12px_24px_rgba(163,177,198,0.65),-12px_-12px_24px_rgba(255,255,255,0.95)] space-y-4 group cursor-pointer h-full flex flex-col justify-between transition-all"
          >
            <div>
              <div className="flex items-center justify-between pb-2">
                <span className="text-[10px] font-mono font-bold text-[#0057FF] bg-blue-100/70 px-2 py-0.5 rounded-full border border-blue-200">
                  NEUMORPHIC UI
                </span>
                <span className="text-[10px] font-mono text-neutral-500 font-bold">
                  02 // MOBILE
                </span>
              </div>

              <h3 className="text-lg font-extrabold text-neutral-800 font-sans pt-2 group-hover:text-[#0057FF] transition-colors">
                Mobile App Interfaces
              </h3>
              <p className="text-xs text-neutral-600 leading-relaxed mt-2 font-sans">
                Soft-extruded plasticity, fluid thumb navigation, and native iOS &amp; Android haptics designed for effortless mobile engagement.
              </p>
            </div>

            <div className="p-2 rounded-xl bg-[#E8EDF2] shadow-[inset_2px_2px_5px_rgba(163,177,198,0.5),inset_-2px_-2px_5px_rgba(255,255,255,0.9)] flex items-center justify-between text-[10px] font-mono text-neutral-600">
              <span>iOS • Android • Haptics</span>
              <span className="text-[#0057FF] font-bold">SOFT UI ✦</span>
            </div>
          </motion.div>

          {/* 3. GLASSMORPHIC CARD: Design Systems */}
          <motion.div
            whileHover={{ y: -5, scale: 1.015 }}
            onClick={() => playPop()}
            className="relative p-6 rounded-3xl bg-white/40 backdrop-blur-xl border border-white/80 shadow-[0_10px_30px_rgba(0,0,0,0.06)] hover:shadow-[0_16px_40px_rgba(0,0,0,0.12)] space-y-4 group cursor-pointer h-full flex flex-col justify-between overflow-hidden transition-all"
          >
            {/* Background glowing caustics */}
            <div className="absolute -top-10 -right-10 w-28 h-28 rounded-full bg-[#10B981]/25 blur-xl pointer-events-none" />
            <div className="absolute -bottom-10 -left-10 w-28 h-28 rounded-full bg-[#6864F6]/25 blur-xl pointer-events-none" />

            <div className="relative z-10">
              <div className="flex items-center justify-between pb-2">
                <span className="text-[10px] font-mono font-bold text-[#10B981] bg-emerald-100/80 px-2 py-0.5 rounded-full border border-emerald-300">
                  GLASSMORPHISM
                </span>
                <span className="text-[10px] font-mono text-neutral-500 font-bold">
                  03 // SYSTEMS
                </span>
              </div>

              <h3 className="text-lg font-extrabold text-black font-sans pt-2 group-hover:text-[#10B981] transition-colors">
                Design Systems &amp; Tokens
              </h3>
              <p className="text-xs text-neutral-700 leading-relaxed mt-2 font-sans">
                Modular token architectures, multi-theme variables, and living component documentation that scales across engineering stacks.
              </p>
            </div>

            <div className="relative z-10 pt-3 border-t border-white/60 flex items-center justify-between text-[10px] font-mono text-neutral-600">
              <span>Variables • Tokens • Figma</span>
              <span className="text-[#10B981] font-bold">OPTICAL ✦</span>
            </div>
          </motion.div>

          {/* 4. NEU-BRUTALIST CARD: 3D Blender Assets */}
          <motion.div
            whileHover={{ y: -5, rotate: 1 }}
            onClick={() => playPop()}
            className="p-6 rounded-3xl bg-[#CCFF00] border-3 border-[#121212] shadow-[5px_5px_0px_#121212] hover:shadow-[8px_8px_0px_#121212] space-y-4 group cursor-pointer h-full flex flex-col justify-between transition-all"
          >
            <div>
              <div className="flex items-center justify-between pb-2">
                <span className="text-[10px] font-mono font-extrabold text-black bg-white px-2 py-0.5 rounded-md border-2 border-black">
                  POP NEU-BRUTAL
                </span>
                <span className="text-[10px] font-mono font-extrabold text-black">
                  04 // 3D
                </span>
              </div>

              <h3 className="text-lg font-extrabold text-black font-sans pt-2">
                3D Visuals &amp; Motion
              </h3>
              <p className="text-xs text-neutral-900 leading-relaxed mt-2 font-sans font-medium">
                High-impact Blender isometric worlds, procedural shaders, and interactive web-ready 3D renders that command attention.
              </p>
            </div>

            <div className="p-2 rounded-xl bg-white border-2 border-black flex items-center justify-between text-[10px] font-mono font-bold text-black">
              <span>Blender • Cycles • Shaders</span>
              <span className="text-[#E65100]">HIGH IMPACT ✦</span>
            </div>
          </motion.div>

          {/* 5. SCRAPBOOK AIRMAIL CARD: Brand Identity */}
          <motion.div
            whileHover={{ y: -5, rotate: -1 }}
            onClick={() => playPop()}
            className="relative p-6 rounded-3xl bg-white border border-neutral-300 shadow-xs hover:shadow-md space-y-4 group cursor-pointer h-full flex flex-col justify-between transition-all"
          >
            <WashiTape color="#EADDFE" angle="-3deg" className="-top-3 right-6" />

            <div>
              <div className="flex items-center justify-between pb-2 border-b border-dashed border-neutral-200">
                <span className="text-[10px] font-mono font-bold text-[#6864F6] bg-purple-100 px-2 py-0.5 rounded-md border border-purple-200">
                  SCRAPBOOK POSTAL
                </span>
                <span className="text-[10px] font-mono text-neutral-400 font-bold">
                  05 // BRAND
                </span>
              </div>

              <h3 className="text-lg font-extrabold text-black font-sans pt-3 group-hover:text-[#6864F6] transition-colors">
                Brand Identity &amp; Voice
              </h3>
              <p className="text-xs text-neutral-600 leading-relaxed mt-2 font-sans">
                Distinctive logotypes, curated editorial typography pairings, and tactile brand guidelines that express unique creative identity.
              </p>
            </div>

            <div className="pt-3 border-t border-neutral-200 flex items-center justify-between text-[10px] font-mono text-neutral-500">
              <span>Logos • Editorial • Guidelines</span>
              <span className="text-[#6864F6] font-bold">EDITORIAL ✦</span>
            </div>
          </motion.div>

          {/* 6. RAW BRUTALIST WIREFRAME: Vibecoding & Systems */}
          <motion.div
            whileHover={{ y: -5 }}
            onClick={() => playPop()}
            className="p-6 rounded-3xl bg-black text-white border-3 border-black shadow-[5px_5px_0px_#E65100] space-y-4 group cursor-pointer h-full flex flex-col justify-between transition-all font-mono"
          >
            <div>
              <div className="flex items-center justify-between pb-2 border-b border-neutral-800">
                <span className="text-[10px] font-extrabold text-black bg-[#CCFF00] px-2 py-0.5 rounded uppercase">
                  RAW BRUTALISM
                </span>
                <span className="text-[10px] text-neutral-400">
                  06 // VIBECODE
                </span>
              </div>

              <h3 className="text-lg font-extrabold text-white font-sans pt-3 group-hover:text-[#CCFF00] transition-colors">
                Vibecoding &amp; AI Systems
              </h3>
              <p className="text-xs text-neutral-300 leading-relaxed mt-2 font-sans">
                Next.js 16, TypeScript, prompt-driven engineering, and high-performance WebGL animations built with precision logic.
              </p>
            </div>

            <div className="pt-2 border-t border-neutral-800 flex items-center justify-between text-[10px] text-neutral-400">
              <span>React • Next.js • Turbopack</span>
              <span className="text-[#CCFF00] font-bold">VIBECODED ✦</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 7. PART. 04 // EXPERIENCE TIMELINE (Neumorphic Soft Embossed Relief) */}
      {/* ========================================================================= */}
      <section className="space-y-8">
        <div className="flex flex-wrap items-end justify-between gap-4 border-b border-neutral-300 pb-4">
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xs font-mono font-bold text-neutral-800 bg-neutral-100 px-2.5 py-0.5 rounded-md border border-neutral-300">
                PART. 04
              </span>
              <span className="text-xs font-mono text-neutral-500 uppercase tracking-wider">
                TRACK RECORD &amp; ROLES
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#121212] tracking-tight font-sans mt-1">
              Experience &amp; Journey
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {EXPERIENCES.map((exp, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -3, scale: 1.01 }}
              transition={{ type: "spring", stiffness: 450, damping: 25 }}
              onClick={() => playPop()}
              className="p-5 rounded-3xl bg-[#FAF8F5] border border-neutral-200/80 shadow-[inset_1px_1px_2px_rgba(255,255,255,0.8),2px_2px_6px_rgba(0,0,0,0.04)] hover:shadow-[inset_2px_2px_4px_rgba(0,0,0,0.04),inset_-2px_-2px_4px_rgba(255,255,255,0.9)] hover:bg-white space-y-2 cursor-pointer group transition-all duration-200"
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono text-neutral-500">
                  {exp.period}
                </span>
                <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded-md bg-white text-neutral-600 border border-neutral-200 shadow-2xs">
                  {exp.type}
                </span>
              </div>

              <div className="pt-1">
                <h3 className="text-base font-bold text-black font-sans group-hover:text-[#E65100] transition-colors">
                  {exp.role}
                </h3>
                <p className="text-xs font-mono font-medium text-neutral-600 mt-0.5">
                  @ {exp.company}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 8. PART. 05 // KIND WORDS (Scrapbook Review Carousel) */}
      {/* ========================================================================= */}
      <section className="space-y-6 relative">
        <div className="flex flex-wrap items-end justify-between gap-4 border-b border-neutral-300 pb-4">
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xs font-mono font-bold text-emerald-700 bg-emerald-100 px-2.5 py-0.5 rounded-md border border-emerald-300">
                PART. 05
              </span>
              <span className="text-xs font-mono text-neutral-500 uppercase tracking-wider">
                COMMUNITY &amp; REVIEWS
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#121212] tracking-tight font-sans mt-1">
              What Collaborators Say
            </h2>
          </div>
          <span className="text-xs font-mono text-neutral-500">
            100% Authentic Client Feedback
          </span>
        </div>

        <InfiniteReviewCarousel />
      </section>

      {/* ========================================================================= */}
      {/* 9. FOOTER */}
      {/* ========================================================================= */}
      <Footer />
    </div>
  );
}
