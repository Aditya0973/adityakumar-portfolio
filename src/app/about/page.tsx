"use client";

import * as React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, FileText } from "lucide-react";
import { EXPERIENCES } from "@/data/portfolio";
import { Footer } from "@/components/Footer";
import { TiltCard } from "@/components/TiltCard";
import { MagneticButton } from "@/components/MagneticButton";
import { playPop } from "@/utils/soundEffects";

const STATS_CARDS = [
  { value: "30+", label: "Projects Completed" },
  { value: "10+", label: "Global Clients" },
  { value: "1+", label: "Years of Experience" },
  { value: "18+", label: "Certificates Received" }
];

interface ToolItem {
  name: string;
  iconSrc: string;
  glowColor: string;
}

const TOOL_ITEMS: ToolItem[] = [
  {
    name: "Figma",
    iconSrc: "/icons/figma.svg",
    glowColor: "#0ACF83"
  },
  {
    name: "Blender",
    iconSrc: "/icons/blender.svg",
    glowColor: "#FF7021"
  },
  {
    name: "Affinity",
    iconSrc: "/icons/affinity.svg",
    glowColor: "#A7F175"
  },
  {
    name: "Inkscape",
    iconSrc: "/icons/inkscape.svg",
    glowColor: "#000000"
  },
  {
    name: "DaVinci Resolve",
    iconSrc: "/icons/davinci.svg",
    glowColor: "#E53935"
  },
  {
    name: "Framer",
    iconSrc: "/icons/framer.svg",
    glowColor: "#0055FF"
  }
];

export default function AboutPage() {
  return (
    <div className="pt-20 lg:pt-12 pb-24 px-4 sm:px-8 max-w-4xl mx-auto space-y-20">
      {/* ========================================================================= */}
      {/* 1. HERO BIO + USER PHOTO + TOOL MARQUEE */}
      {/* ========================================================================= */}
      <section className="flex flex-col md:flex-row items-start justify-between gap-8 pt-4">
        <div className="space-y-4 flex-1">
          <span className="text-[10px] font-mono uppercase tracking-widest text-[#4a5d4e] font-bold">
            Who Am I
          </span>
          <h1 className="text-3xl sm:text-5xl font-medium tracking-tight text-black leading-tight">
            Hey I&apos;m Aditya Kumar
          </h1>
          <div className="space-y-3 text-xs sm:text-sm text-[#000000]/80 leading-relaxed pt-2">
            <p>
              I&apos;m a UI/UX designer with a strong focus on creating intuitive, user-centered digital experiences. I enjoy breaking down complex problems and shaping them into clear, functional interfaces that feel effortless to use.
            </p>
            <p>
              My work spans web and mobile products, where I combine research, design thinking, and visual clarity to build experiences that balance usability with aesthetics. I care deeply about how users interact with products — from first impression to the smallest interaction.
            </p>
            <p className="text-[#757575]">
              I believe good design is thoughtful, purposeful, and constantly evolving. With every project, I aim to learn, refine my approach, and create digital solutions that are not just visually appealing, but genuinely useful and meaningful.
            </p>
          </div>

          <div className="pt-2">
            <MagneticButton pullStrength={0.35}>
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-black text-white text-xs font-medium hover:bg-black/80 transition-all shadow-md group"
              >
                <FileText className="w-3.5 h-3.5 group-hover:scale-110 transition-transform" />
                <span>View Full Resume (PDF)</span>
              </a>
            </MagneticButton>
          </div>
        </div>

        {/* Right Photo Card + Infinite Tool Marquee (Right to Left) */}
        <div className="w-full md:w-80 shrink-0 space-y-3">
          <TiltCard tiltStrength={10} className="rounded-3xl">
            <div className="relative aspect-[4/3] rounded-3xl overflow-hidden border border-[#e5e2de] shadow-md bg-[#edeae7] group">
              <img
                src="/media/me.jpg"
                alt="Aditya Kumar"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
          </TiltCard>

          {/* Smooth Right-to-Left Infinite Tool Marquee with pause-on-hover */}
          <div className="overflow-hidden rounded-2xl bg-[#f5f2f0] border border-[#e5e2de] p-2 relative group/marquee">
            <motion.div
              className="flex items-center gap-2 w-max group-hover/marquee:[animation-play-state:paused]"
              animate={{ x: ["0%", "-50%"] }}
              transition={{
                ease: "linear",
                duration: 14,
                repeat: Infinity
              }}
            >
              {[...TOOL_ITEMS, ...TOOL_ITEMS].map((tool, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{ scale: 1.15, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => playPop()}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white border border-[#e5e2de] shadow-2xs shrink-0 select-none cursor-pointer hover:border-black/30 transition-all hover:shadow-md"
                  style={{
                    borderColor: undefined
                  }}
                  title={tool.name}
                >
                  <div className="w-4 h-4 flex items-center justify-center shrink-0">
                    <img
                      src={tool.iconSrc}
                      alt={tool.name}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <span className="text-[11px] font-medium text-black font-sans">
                    {tool.name}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 2. STATS GRID: 3D TiltCards */}
      {/* ========================================================================= */}
      <section className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        {STATS_CARDS.map((stat, idx) => (
          <TiltCard key={stat.label} tiltStrength={15} className="rounded-3xl">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: idx * 0.05 }}
              className="p-6 h-full rounded-3xl bg-[#f5f2f0] border border-[#e5e2de] text-center space-y-1 hover:border-black/20 transition-colors"
            >
              <div className="text-3xl sm:text-4xl font-semibold text-black font-sans">
                {stat.value}
              </div>
              <div className="text-[11px] text-[#757575] font-mono leading-tight">
                {stat.label}
              </div>
            </motion.div>
          </TiltCard>
        ))}
      </section>

      {/* ========================================================================= */}
      {/* 3. EXPERIENCE TIMELINE: TiltCards */}
      {/* ========================================================================= */}
      <section className="space-y-6">
        <div className="text-center space-y-1">
          <span className="text-[10px] font-mono uppercase tracking-widest text-[#4a5d4e] font-bold">
            My Experience
          </span>
          <h2 className="text-2xl sm:text-3xl font-medium tracking-tight text-black">
            Designing Real World Products for Real Users
          </h2>
        </div>

        <div className="space-y-2.5">
          {EXPERIENCES.map((exp, idx) => (
            <TiltCard key={idx} tiltStrength={6} className="rounded-2xl">
              <div className="p-4 sm:p-5 rounded-2xl bg-[#f5f2f0] border border-[#e5e2de] flex flex-col sm:flex-row sm:items-center justify-between gap-1 text-xs hover:border-black/20 transition-colors">
                <div className="flex items-center gap-2">
                  <span className="font-semibold text-black">{exp.company}</span>
                  <span className="text-[#757575] font-mono">({exp.role})</span>
                </div>
                <div className="text-[#757575] font-mono text-[11px]">
                  {exp.period}
                </div>
              </div>
            </TiltCard>
          ))}
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 4. 3D VISUAL SHOWCASE TILES: Interactive 3D TiltCards */}
      {/* ========================================================================= */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Left Stack: Airplane & Coffee Shop */}
        <div className="space-y-4 flex flex-col justify-between">
          <TiltCard tiltStrength={10} className="rounded-3xl">
            <div className="rounded-3xl overflow-hidden border border-[#e5e2de] bg-[#edeae7] aspect-[16/9] shadow-sm group">
              <img
                src="/media/airplane.png"
                alt="Low Poly Airplane 3D Render"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
          </TiltCard>

          <TiltCard tiltStrength={10} className="rounded-3xl">
            <div className="rounded-3xl overflow-hidden border border-[#e5e2de] bg-[#edeae7] aspect-[16/9] shadow-sm group">
              <img
                src="/media/coffee-shop.png"
                alt="Coffee Shop Modeling 3D Render"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
          </TiltCard>
        </div>

        {/* Right Tall Tile: iPhone 3D Render */}
        <TiltCard tiltStrength={12} className="rounded-3xl">
          <div className="h-full rounded-3xl overflow-hidden border border-[#e5e2de] bg-[#edeae7] shadow-sm flex items-center justify-center p-2 group">
            <img
              src="/media/iphone.png"
              alt="iPhone 3D Render"
              className="w-full h-full object-cover rounded-2xl group-hover:scale-105 transition-transform duration-500"
            />
          </div>
        </TiltCard>
      </section>

      {/* Bottom Footer */}
      <Footer />
    </div>
  );
}
