"use client";

import * as React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, FileText, Sparkles } from "lucide-react";
import { EXPERIENCES } from "@/data/portfolio";
import { Footer } from "@/components/Footer";

const STATS_CARDS = [
  { value: "30+", label: "Projects Completed" },
  { value: "10+", label: "Global Clients" },
  { value: "1+", label: "Years of Experience" },
  { value: "18+", label: "Certificates Received" }
];

const TOOL_ICONS = [
  { name: "Figma", url: "https://framerusercontent.com/images/aBuJTLCu0OO7K9LWJ06cAMaQEm0.png" },
  { name: "Blender", url: "https://framerusercontent.com/images/ziHnGwIpT6hr22QhxWewohBWgg.png" },
  { name: "After Effects", url: "https://framerusercontent.com/images/64jgSOAfcXBuxY543rOTrmFMDs.png" },
  { name: "Illustrator", url: "https://framerusercontent.com/images/DOMOu5zW5fQT0ki6J45MNjHOhQ.svg" },
  { name: "Photoshop", url: "https://framerusercontent.com/images/0jQNOkuUzELUQoKQpRdJrgJ1A.svg" }
];

export default function AboutPage() {
  return (
    <div className="pt-20 lg:pt-12 pb-16 px-4 sm:px-8 max-w-4xl mx-auto space-y-20">
      {/* ========================================================================= */}
      {/* 1. HERO BIO + PHOTO CARD + TOOL MARQUEE (Matching exact Screenshot 2) */}
      {/* ========================================================================= */}
      <section className="flex flex-col md:flex-row items-start justify-between gap-8 pt-4">
        <div className="space-y-4 flex-1">
          <span className="text-[10px] font-mono uppercase tracking-widest text-[#4a5d4e] font-bold">
            Who Am I
          </span>
          <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-black leading-tight">
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
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-black text-white text-xs font-semibold hover:bg-black/80 transition-all shadow-sm"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>View Full Resume (PDF)</span>
            </a>
          </div>
        </div>

        {/* Right Photo Card + Infinite Tool Marquee */}
        <div className="w-full md:w-80 shrink-0 space-y-3">
          <div className="relative aspect-[4/3] rounded-3xl overflow-hidden border border-[#e5e2de] shadow-md bg-[#edeae7]">
            <img
              src="https://framerusercontent.com/images/hfW6u0FkOwOgWiJlYCnH8JkNIE.png"
              alt="Aditya Kumar"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Tool Stack Badges Row */}
          <div className="p-2.5 rounded-2xl bg-[#f5f2f0] border border-[#e5e2de] flex items-center justify-between gap-1 overflow-x-auto">
            {TOOL_ICONS.map((tool, idx) => (
              <div
                key={idx}
                className="w-9 h-9 rounded-xl bg-white border border-[#e5e2de] p-1.5 flex items-center justify-center shadow-xs shrink-0"
                title={tool.name}
              >
                <img src={tool.url} alt={tool.name} className="w-full h-full object-contain" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 2. STATS GRID: 30+, 10+, 1+, 18+ (Exact numbers from user screenshot) */}
      {/* ========================================================================= */}
      <section className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        {STATS_CARDS.map((stat, idx) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: idx * 0.05 }}
            className="p-6 rounded-3xl bg-[#f5f2f0] border border-[#e5e2de] text-center space-y-1"
          >
            <div className="text-3xl sm:text-4xl font-extrabold text-black font-sans">
              {stat.value}
            </div>
            <div className="text-[11px] text-[#757575] font-mono leading-tight">
              {stat.label}
            </div>
          </motion.div>
        ))}
      </section>

      {/* ========================================================================= */}
      {/* 3. EXPERIENCE TIMELINE: "Designing Real World Products for Real Users" */}
      {/* ========================================================================= */}
      <section className="space-y-6">
        <div className="text-center space-y-1">
          <span className="text-[10px] font-mono uppercase tracking-widest text-[#4a5d4e] font-bold">
            My Experience
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-black">
            Designing Real World Products for Real Users
          </h2>
        </div>

        <div className="space-y-2.5">
          {EXPERIENCES.map((exp, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.2, delay: idx * 0.04 }}
              className="p-4 sm:p-5 rounded-2xl bg-[#f5f2f0] border border-[#e5e2de] flex flex-col sm:flex-row sm:items-center justify-between gap-1 text-xs hover:border-black/20 transition-colors"
            >
              <div className="flex items-center gap-2">
                <span className="font-bold text-black">{exp.company}</span>
                <span className="text-[#757575] font-mono">({exp.role})</span>
              </div>
              <div className="text-[#757575] font-mono text-[11px]">
                {exp.period}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 4. 3D VISUAL SHOWCASE TILES (Airport, Earth, iPhone 3D - Exact screenshot) */}
      {/* ========================================================================= */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Left Stack: Airport & Earth */}
        <div className="space-y-4 flex flex-col justify-between">
          <div className="rounded-3xl overflow-hidden border border-[#e5e2de] bg-[#edeae7] aspect-[16/9] shadow-sm">
            <img
              src="https://framerusercontent.com/images/oiS2T2smvbRU93s1qkoP4ZdofiQ.png"
              alt="3D Airport Render"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="rounded-3xl overflow-hidden border border-[#e5e2de] bg-[#edeae7] aspect-[16/9] shadow-sm">
            <img
              src="https://framerusercontent.com/images/bMBkpiAn3iPRXWJQwpQ0MEjIw.png"
              alt="3D Space Earth"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Right Tall Tile: 3D Titanium iPhone Render */}
        <div className="rounded-3xl overflow-hidden border border-[#e5e2de] bg-black shadow-sm flex items-center justify-center p-6">
          <img
            src="https://framerusercontent.com/images/v4bQkJBh8sNXywf7aX619SGDS68.png"
            alt="3D Titanium iPhone"
            className="w-full h-full object-cover rounded-2xl"
          />
        </div>
      </section>

      {/* Giant Connect Banner & Bottom Footer */}
      <Footer />
    </div>
  );
}
