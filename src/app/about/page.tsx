"use client";

import * as React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, FileText } from "lucide-react";
import { EXPERIENCES } from "@/data/portfolio";
import { Footer } from "@/components/Footer";

const STATS_CARDS = [
  { value: "30+", label: "Projects Completed" },
  { value: "10+", label: "Global Clients" },
  { value: "1+", label: "Years of Experience" },
  { value: "18+", label: "Certificates Received" }
];

interface ToolItem {
  name: string;
  icon: React.ReactNode;
}

const TOOL_ITEMS: ToolItem[] = [
  {
    name: "Figma",
    icon: (
      <svg viewBox="0 0 38 57" className="w-4 h-4" fill="none">
        <path d="M19 28.5C19 23.2533 23.2533 19 28.5 19C33.7467 19 38 23.2533 38 28.5C38 33.7467 33.7467 38 28.5 38C23.2533 38 19 33.7467 19 28.5Z" fill="#1ABCFE"/>
        <path d="M0 47.5C0 42.2533 4.25329 38 9.5 38H19V47.5C19 52.7467 14.7467 57 9.5 57C4.25329 57 0 52.7467 0 47.5Z" fill="#0ACF83"/>
        <path d="M19 0V19H28.5C33.7467 19 38 14.7467 38 9.5C38 4.25329 33.7467 0 28.5 0H19Z" fill="#FF7262"/>
        <path d="M0 9.5C0 14.7467 4.25329 19 9.5 19H19V0H9.5C4.25329 0 0 4.25329 0 9.5Z" fill="#F24E1E"/>
        <path d="M0 28.5C0 33.7467 4.25329 38 9.5 38H19V19H9.5C4.25329 19 0 23.2533 0 28.5Z" fill="#A259FF"/>
      </svg>
    )
  },
  {
    name: "Blender",
    icon: (
      <svg viewBox="0 0 24 24" className="w-4 h-4" fill="#E87D0D">
        <path d="M12.516 14.88c-.144 1.83-1.636 3.27-3.484 3.27a3.504 3.504 0 0 1-3.504-3.504 3.505 3.505 0 0 1 3.504-3.504c.82 0 1.576.284 2.176.76l5.77-5.77a.64.64 0 0 1 .906 0l1.44 1.44a.64.64 0 0 1 0 .906l-4.14 4.14c.54.67.868 1.52.868 2.45a4.87 4.87 0 0 1-.36 1.84l4.24 4.24a.64.64 0 0 1 0 .906l-1.44 1.44a.64.64 0 0 1-.906 0l-4.63-4.63c-.15.02-.31.03-.46.03a4.91 4.91 0 0 1-.58-.03z"/>
        <circle cx="9.03" cy="14.65" r="1.5" fill="#005A9C"/>
      </svg>
    )
  },
  {
    name: "Affinity",
    icon: (
      <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none">
        <path d="M14.7 2.4 22 15l-3.2 5.6-3.8-6.6-2.5 4.4L10 14.1l4.7-11.7zm-5.4 0L2 15l3.2 5.6 5.8-10.1-1.7-8.1z" fill="#00C4CC"/>
        <path d="M14.7 2.4 10 14.1l2.5 4.3L15 14l3.8 6.6H5.2L2 15 9.3 2.4h5.4z" fill="#2185D0" opacity="0.3"/>
      </svg>
    )
  },
  {
    name: "Inkscape",
    icon: (
      <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="currentColor">
        <path d="M3.5 17.5 12 4l8.5 13.5-3.5 2.5-5-2-5 2z" fill="#1C1C1C" stroke="#1C1C1C" strokeWidth="1.5" strokeLinejoin="round"/>
        <path d="M12 4v12l-4 2 4-7 4 7-4-2" stroke="#ffffff" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M8 12.5 12 8l4 4.5" fill="#ffffff" opacity="0.9"/>
      </svg>
    )
  },
  {
    name: "DaVinci Resolve",
    icon: (
      <svg viewBox="0 0 24 24" className="w-4 h-4">
        <path d="M12 2a4 4 0 0 0-4 4v4h8V6a4 4 0 0 0-4-4z" fill="#E53935"/>
        <path d="M3.34 17a4 4 0 0 0 5.46 1.46L12.27 16 8.8 10 5.34 16A3.99 3.99 0 0 0 3.34 17z" fill="#43A047"/>
        <path d="M20.66 17a4 4 0 0 1-5.46 1.46L11.73 16 15.2 10l3.46 6a3.99 3.99 0 0 1 2 1z" fill="#1E88E5"/>
        <circle cx="12" cy="13" r="2" fill="#FB8C00"/>
      </svg>
    )
  },
  {
    name: "Framer",
    icon: (
      <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor">
        <path d="M4 2h16v7h-8zM4 9h8v7H4zM4 16h8l8 8v-8z" />
      </svg>
    )
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
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-black text-white text-xs font-medium hover:bg-black/80 transition-all shadow-sm"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>View Full Resume (PDF)</span>
            </a>
          </div>
        </div>

        {/* Right Photo Card + Infinite Tool Marquee (Right to Left) */}
        <div className="w-full md:w-80 shrink-0 space-y-3">
          <div className="relative aspect-[4/3] rounded-3xl overflow-hidden border border-[#e5e2de] shadow-md bg-[#edeae7]">
            <img
              src="/media/me.jpg"
              alt="Aditya Kumar"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Smooth Right-to-Left Infinite Tool Marquee */}
          <div className="overflow-hidden rounded-2xl bg-[#f5f2f0] border border-[#e5e2de] p-2 relative">
            <motion.div
              className="flex items-center gap-2 w-max"
              animate={{ x: ["0%", "-50%"] }}
              transition={{
                ease: "linear",
                duration: 14,
                repeat: Infinity
              }}
            >
              {[...TOOL_ITEMS, ...TOOL_ITEMS].map((tool, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white border border-[#e5e2de] shadow-2xs shrink-0 select-none hover:border-black/30 transition-colors"
                  title={tool.name}
                >
                  <div className="w-4 h-4 flex items-center justify-center shrink-0">
                    {tool.icon}
                  </div>
                  <span className="text-[11px] font-medium text-black font-sans">
                    {tool.name}
                  </span>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 2. STATS GRID: 30+, 10+, 1+, 18+ */}
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
            <div className="text-3xl sm:text-4xl font-semibold text-black font-sans">
              {stat.value}
            </div>
            <div className="text-[11px] text-[#757575] font-mono leading-tight">
              {stat.label}
            </div>
          </motion.div>
        ))}
      </section>

      {/* ========================================================================= */}
      {/* 3. EXPERIENCE TIMELINE */}
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
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.2, delay: idx * 0.04 }}
              className="p-4 sm:p-5 rounded-2xl bg-[#f5f2f0] border border-[#e5e2de] flex flex-col sm:flex-row sm:items-center justify-between gap-1 text-xs hover:border-black/20 transition-colors"
            >
              <div className="flex items-center gap-2">
                <span className="font-semibold text-black">{exp.company}</span>
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
      {/* 4. 3D VISUAL SHOWCASE TILES (Airplane, Coffee Shop, iPhone) */}
      {/* ========================================================================= */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Left Stack: Airplane & Coffee Shop */}
        <div className="space-y-4 flex flex-col justify-between">
          <div className="rounded-3xl overflow-hidden border border-[#e5e2de] bg-[#edeae7] aspect-[16/9] shadow-sm group">
            <img
              src="/media/airplane.png"
              alt="Low Poly Airplane 3D Render"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
          </div>

          <div className="rounded-3xl overflow-hidden border border-[#e5e2de] bg-[#edeae7] aspect-[16/9] shadow-sm group">
            <img
              src="/media/coffee-shop.png"
              alt="Coffee Shop Modeling 3D Render"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>

        {/* Right Tall Tile: iPhone 3D Render */}
        <div className="rounded-3xl overflow-hidden border border-[#e5e2de] bg-[#edeae7] shadow-sm flex items-center justify-center p-2 group">
          <img
            src="/media/iphone.png"
            alt="iPhone 3D Render"
            className="w-full h-full object-cover rounded-2xl group-hover:scale-105 transition-transform duration-500"
          />
        </div>
      </section>

      {/* Bottom Footer */}
      <Footer />
    </div>
  );
}
