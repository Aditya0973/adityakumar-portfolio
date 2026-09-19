"use client";

import * as React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, FileText, Sparkles, MapPin, GraduationCap, Award, Eye, Download } from "lucide-react";
import { EXPERIENCES, EDUCATION, CERTIFICATIONS, ACHIEVEMENTS } from "@/data/portfolio";
import { Footer } from "@/components/Footer";
import { MagneticButton } from "@/components/MagneticButton";
import { playPop, playFigmaClick, playSuccess } from "@/utils/soundEffects";
import {
  SparkleStar,
  StarburstBadge,
  WashiTape,
  RealisticPaperClip,
  PushPin,
  PostageCancellationStamp,
  AutonomousSpiral,
  AutonomousSpring,
  AutonomousAsterisk,
  DoodleCrown
} from "@/components/SketchDoodles";
import { SquigglyLink } from "@/components/SquigglyLink";

const STATS_CARDS = [
  { value: "15+", label: "Projects Completed", tag: "SHIPPED" },
  { value: "8+", label: "Global Clients", tag: "WORLDWIDE" },
  { value: "2+", label: "Years Experience", tag: "UI/UX & SAAS" },
  { value: "5+", label: "Certificates", tag: "GOOGLE & IBM" }
];

interface ToolItem {
  name: string;
  iconSrc: string;
  color: string;
}

const TOOL_ITEMS: ToolItem[] = [
  { name: "Figma", iconSrc: "/icons/figma.svg", color: "#0ACF83" },
  { name: "Blender 3D", iconSrc: "/icons/blender.svg", color: "#FF7021" },
  { name: "Adobe Photoshop", iconSrc: "/icons/affinity.svg", color: "#31A8FF" },
  { name: "Adobe Illustrator", iconSrc: "/icons/inkscape.svg", color: "#FF9A00" },
  { name: "Inkscape", iconSrc: "/icons/inkscape.svg", color: "#000000" },
  { name: "Framer", iconSrc: "/icons/framer.svg", color: "#0055FF" }
];

export default function AboutPage() {
  return (
    <div className="relative pt-12 sm:pt-16 pb-28 px-4 sm:px-8 max-w-5xl mx-auto space-y-24 overflow-x-hidden">
      {/* Background Scrapbook Doodles */}
      <div className="absolute top-20 right-6 pointer-events-none hidden lg:block opacity-75">
        <AutonomousSpiral color="#E65100" size={48} speed={11} />
      </div>
      <div className="absolute top-[600px] left-2 pointer-events-none hidden xl:block opacity-65">
        <AutonomousSpring color="#6864F6" width={65} height={30} />
      </div>

      {/* 1. HERO BIO + POLAROID PORTRAIT */}
      <section className="flex flex-col md:flex-row items-start justify-between gap-10 pt-4 relative">
        <div className="space-y-6 flex-1 relative">
          <RealisticPaperClip color="#E65100" size={32} className="absolute -left-8 -top-3 hidden sm:block" />

          <div className="flex items-center gap-2">
            <span className="text-xs font-mono font-bold text-[#E65100] bg-orange-100 px-2.5 py-0.5 rounded-md border border-orange-200">
              SCRAPBOOK BIO
            </span>
            <span className="text-xs font-mono text-neutral-500 uppercase">
              ABOUT ADITYA KUMAR
            </span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-[#121212] leading-[1.1] font-sans">
            Designing with <br />
            <span className="font-serif italic font-normal text-[#E65100]">Curiosity, Empathy,</span> &amp; Craft.
          </h1>

          <div className="space-y-4 text-sm text-neutral-700 leading-relaxed font-sans pt-1">
            <p>
              I&apos;m Aditya Kumar — a Product Designer &amp; UI/UX specialist based in India. I love transforming complex product requirements into clean, delightful, and human-friendly interfaces.
            </p>
            <p>
              My work spans SaaS platforms, responsive web design, mobile apps (iOS &amp; Android), and 3D visual storytelling in Blender. I focus on tactile micro-interactions and rigorous design systems that bridge the gap between design and engineering.
            </p>
            <p className="text-neutral-500">
              When I&apos;m not in Figma, I explore Blender procedural shaders, prototype web interactions in Next.js, and experiment with new design tokens.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 pt-2">
            {/* View Resume in new tab */}
            <MagneticButton pullStrength={0.35}>
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => playPop()}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#E65100] text-white text-xs font-mono font-bold hover:bg-[#D97706] transition-all shadow-sm active:translate-y-0.5 group"
              >
                <Eye className="w-4 h-4 group-hover:scale-110 transition-transform" />
                <span>VIEW RESUME</span>
                <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            </MagneticButton>

            {/* Direct Download Circle Button */}
            <MagneticButton pullStrength={0.35}>
              <a
                href="/resume.pdf"
                download="Resume_Aditya_Kumar_2026.pdf"
                onClick={() => playSuccess()}
                title="Download Resume (PDF)"
                aria-label="Download Resume PDF"
                className="w-11 h-11 rounded-full bg-[#FFF4CC] border-2 border-amber-300 text-black hover:bg-[#FFE899] hover:border-amber-400 flex items-center justify-center transition-all shadow-2xs hover:scale-105 active:scale-95 group/dl cursor-pointer"
              >
                <Download className="w-4 h-4 text-neutral-800 group-hover/dl:text-black group-hover/dl:translate-y-0.5 transition-all" />
              </a>
            </MagneticButton>

            {/* Contact Link */}
            <SquigglyLink
              href="/contact"
              color="#E65100"
              onClick={() => playFigmaClick()}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-black text-xs font-mono font-bold hover:bg-neutral-50 transition-all border border-neutral-300 shadow-2xs"
            >
              <span className="flex items-center gap-1.5">
                <span>SAY HELLO</span>
                <ArrowUpRight className="w-4 h-4" />
              </span>
            </SquigglyLink>
          </div>
        </div>

        {/* Right Polaroid Photo Card with Washi Tape */}
        <div className="w-full md:w-80 shrink-0 space-y-4">
          <motion.div
            whileHover={{ scale: 1.02, rotate: 1 }}
            className="relative rounded-3xl bg-white p-3.5 border border-neutral-300/90 shadow-xs group select-none"
          >
            <WashiTape color="#FFF4CC" angle="-3deg" className="-top-3 right-6" />
            <PushPin color="#E65100" className="absolute -top-2 left-6 z-30" />

            <div className="relative aspect-[4/4.8] rounded-2xl overflow-hidden bg-neutral-900 border border-neutral-200">
              <img
                src="/media/me.jpeg"
                alt="Aditya Kumar"
                className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute bottom-3 left-3 px-2.5 py-1 rounded-full bg-black/80 backdrop-blur-md text-white text-[10px] font-mono border border-white/20">
                Aditya Kumar • He/Him
              </div>
            </div>

            <div className="pt-3 px-1 flex items-center justify-between text-xs font-mono text-neutral-600">
              <span className="flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-[#E65100]" />
                UP, India
              </span>
              <span className="font-bold text-[#E65100]">READY TO WORK</span>
            </div>
          </motion.div>

          {/* Tool Marquee */}
          <div className="overflow-hidden rounded-2xl bg-white border border-neutral-300/80 shadow-2xs p-2.5 relative group/marquee">
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
                <div
                  key={idx}
                  onClick={() => playPop()}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#FAF8F5] border border-neutral-200 shadow-2xs shrink-0 select-none cursor-pointer hover:border-[#E65100] transition-all"
                  title={tool.name}
                >
                  <span className="text-[11px] font-bold text-black font-sans">
                    {tool.name}
                  </span>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* 2. STATS GRID (Glossy Glassmorphic Crystal Badges) */}
      <section className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        {STATS_CARDS.map((stat, idx) => {
          const accentGradients = [
            "from-orange-500/10 to-amber-500/10 text-[#E65100]",
            "from-blue-500/10 to-indigo-500/10 text-[#0057FF]",
            "from-emerald-500/10 to-teal-500/10 text-[#10B981]",
            "from-purple-500/10 to-pink-500/10 text-[#6864F6]"
          ];
          const accentColor = accentGradients[idx % 4];

          return (
            <motion.div
              key={stat.label}
              whileHover={{ y: -4, scale: 1.02 }}
              onClick={() => playPop()}
              className="relative p-6 rounded-3xl bg-white/50 backdrop-blur-xl border border-white/80 shadow-[0_8px_30px_rgba(0,0,0,0.04)] hover:shadow-[0_14px_35px_rgba(0,0,0,0.08)] text-center space-y-2 cursor-pointer transition-all overflow-hidden group"
            >
              {/* Specular Ambient Glow */}
              <div className="absolute -top-6 -right-6 w-16 h-16 rounded-full bg-gradient-to-br from-white/80 to-transparent blur-md pointer-events-none" />

              <span className="inline-block text-[9px] font-mono font-bold bg-white/90 text-neutral-800 px-2.5 py-0.5 rounded-full border border-neutral-200/80 shadow-2xs">
                {stat.tag}
              </span>
              <div className="text-3xl sm:text-4xl font-extrabold text-black font-sans tracking-tight pt-0.5 group-hover:scale-105 transition-transform">
                {stat.value}
              </div>
              <div className="text-[11px] text-neutral-600 font-mono leading-tight">
                {stat.label}
              </div>
            </motion.div>
          );
        })}
      </section>

      {/* 3. EXPERIENCE & TRACK RECORD (Retro Beige Tactile Skeuomorphism) */}
      <section className="space-y-6">
        <div className="flex items-end justify-between border-b border-neutral-300 pb-4">
          <div>
            <span className="text-xs font-mono font-bold text-[#5A4B38] bg-[#EBE4D8] px-2.5 py-0.5 rounded-md border border-[#D0C4B2]">
              CAREER TRACK
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-black font-sans mt-1">
              Experience &amp; Milestone Highlights
            </h2>
          </div>
          <PostageCancellationStamp text="TRACK RECORD" date="2026" color="#5A4B38" className="hidden sm:inline-flex" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {EXPERIENCES.map((exp, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -3, scale: 1.01 }}
              onClick={() => playPop()}
              className="p-6 rounded-3xl bg-gradient-to-b from-[#FAF6F0] to-[#EFE8DC] border-2 border-[#D8CEBE] shadow-[0_6px_16px_rgba(90,70,50,0.06),inset_0_1px_1px_rgba(255,255,255,0.9),inset_0_-1px_2px_rgba(0,0,0,0.05)] hover:shadow-md space-y-3 cursor-pointer group transition-all"
            >
              <div className="flex items-center justify-between">
                <span className="font-extrabold text-base text-[#2B231B] font-sans group-hover:text-[#E65100] transition-colors">
                  {exp.company}
                </span>
                <span className="text-[10px] font-mono font-bold px-2.5 py-0.5 rounded-full bg-[#E5DEC9] border border-[#C5BBA4] text-[#5A4B38] shadow-inner">
                  {exp.type}
                </span>
              </div>
              <div>
                <p className="text-xs font-mono text-[#4F4234] font-bold">{exp.role}</p>
                <p className="text-[11px] font-mono text-[#7A6B5A] pt-0.5">{exp.period}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 4. EDUCATION & CERTIFICATIONS (Pure Black & White Brutalism) */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Education (White Background Brutalist Card) */}
        <div className="p-6 rounded-3xl bg-white text-black border-3 border-black shadow-[6px_6px_0px_#000000] space-y-5 relative font-mono">
          <div className="flex items-center justify-between pb-3 border-b-2 border-black">
            <div className="flex items-center gap-2">
              <GraduationCap className="w-5 h-5 text-black" />
              <h3 className="text-base font-black text-black uppercase tracking-wider">
                [01] EDUCATION
              </h3>
            </div>
            <span className="text-[10px] font-black bg-black text-white px-2 py-0.5 uppercase tracking-wider">
              VERIFIED
            </span>
          </div>
          {EDUCATION.map((edu, idx) => (
            <div key={idx} className="space-y-1.5 p-3.5 rounded-xl bg-neutral-50 border-2 border-black">
              <div className="text-sm font-black text-black font-sans">{edu.institution}</div>
              <div className="text-xs text-neutral-800 font-sans font-medium">{edu.degree}</div>
              <div className="flex items-center justify-between text-xs text-neutral-600 pt-1.5 border-t border-black/20">
                <span className="text-[11px] font-mono">{edu.period}</span>
                <span className="text-black font-black bg-white px-2 py-0.5 border border-black text-[11px]">{edu.grade}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Certifications & Achievements (Black Background Brutalist Card) */}
        <div className="p-6 rounded-3xl bg-black text-white border-3 border-neutral-900 shadow-[6px_6px_0px_#222222] space-y-5 relative font-mono">
          <div className="flex items-center justify-between pb-3 border-b-2 border-neutral-800">
            <div className="flex items-center gap-2">
              <Award className="w-5 h-5 text-white" />
              <h3 className="text-base font-black text-white uppercase tracking-wider">
                [02] CERTIFICATIONS &amp; HONORS
              </h3>
            </div>
            <span className="text-[10px] font-black bg-white text-black px-2 py-0.5 uppercase tracking-wider">
              REGISTRY
            </span>
          </div>
          <div className="space-y-2 text-xs">
            {CERTIFICATIONS.map((cert, idx) => (
              <a
                key={idx}
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-2.5 rounded-xl bg-neutral-900 hover:bg-neutral-800 border border-neutral-800 hover:border-neutral-700 text-neutral-200 hover:text-white transition-all group/cert"
              >
                <div className="flex items-center gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shrink-0" />
                  <span className="font-sans font-medium">{cert.name}</span>
                </div>
                <div className="flex items-center gap-1 text-[11px] font-mono text-neutral-400 group-hover/cert:text-emerald-400 shrink-0">
                  <span>Verify</span>
                  <ArrowUpRight className="w-3.5 h-3.5 group-hover/cert:translate-x-0.5 group-hover/cert:-translate-y-0.5 transition-transform" />
                </div>
              </a>
            ))}
            {ACHIEVEMENTS.map((ach, idx) => (
              <div key={idx} className="flex items-center gap-2.5 p-2.5 rounded-xl bg-neutral-900 border border-neutral-700 text-white">
                <span className="w-1.5 h-1.5 rounded-full bg-neutral-400 shrink-0" />
                <span className="font-sans font-bold">{ach}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. 3D VISUAL SHOWCASE (Skeuomorphic Studio Physical Frames) */}
      <section className="space-y-6">
        <div className="border-b border-neutral-300 pb-4">
          <span className="text-xs font-mono font-bold text-[#E65100] bg-orange-100 px-2.5 py-0.5 rounded-md border border-orange-200">
            LAB GALLERY
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-black font-sans mt-1">
            Visual Craft &amp; 3D Explorations
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-6">
            <motion.div
              whileHover={{ y: -4, rotate: -0.8 }}
              className="rounded-3xl overflow-hidden border-2 border-[#D4C9BC] bg-gradient-to-b from-[#FAF8F5] to-[#F0EBE1] p-3.5 shadow-[0_10px_25px_rgba(0,0,0,0.06),inset_0_1px_1px_rgba(255,255,255,0.9)] hover:shadow-md transition-all"
            >
              <div className="aspect-[16/10] rounded-2xl overflow-hidden bg-neutral-900 border border-neutral-300/80 shadow-inner">
                <img
                  src="/media/airplane.png"
                  alt="Low Poly Airplane 3D Render"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="pt-2.5 px-1 text-xs font-mono text-neutral-700 flex justify-between items-center font-bold">
                <span>Isometric Jet Low-Poly</span>
                <span className="text-[10px] px-2 py-0.5 rounded bg-[#2B2622] text-[#E6A040]">BLENDER 4K</span>
              </div>
            </motion.div>

            <motion.div
              whileHover={{ y: -4, rotate: 0.8 }}
              className="rounded-3xl overflow-hidden border-2 border-[#D4C9BC] bg-gradient-to-b from-[#FAF8F5] to-[#F0EBE1] p-3.5 shadow-[0_10px_25px_rgba(0,0,0,0.06),inset_0_1px_1px_rgba(255,255,255,0.9)] hover:shadow-md transition-all"
            >
              <div className="aspect-[16/10] rounded-2xl overflow-hidden bg-neutral-900 border border-neutral-300/80 shadow-inner">
                <img
                  src="/media/coffee-shop.png"
                  alt="Coffee Shop Modeling 3D Render"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="pt-2.5 px-1 text-xs font-mono text-neutral-700 flex justify-between items-center font-bold">
                <span>Coffee Shop Diorama</span>
                <span className="text-[10px] px-2 py-0.5 rounded bg-[#2B2622] text-[#E6A040]">BLENDER 4K</span>
              </div>
            </motion.div>
          </div>

          <motion.div
            whileHover={{ y: -4, rotate: 0.8 }}
            className="rounded-3xl overflow-hidden border-2 border-[#D4C9BC] bg-gradient-to-b from-[#FAF8F5] to-[#F0EBE1] p-3.5 shadow-[0_10px_25px_rgba(0,0,0,0.06),inset_0_1px_1px_rgba(255,255,255,0.9)] hover:shadow-md flex flex-col justify-between transition-all"
          >
            <div className="h-full rounded-2xl overflow-hidden bg-neutral-900 min-h-[320px] border border-neutral-300/80 shadow-inner">
              <img
                src="/media/iphone.png"
                alt="iPhone 3D Render"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="pt-3 px-1 text-xs font-mono text-neutral-700 flex justify-between items-center font-bold">
              <span>Mobile Glassmorphism Prototype</span>
              <span className="text-[10px] px-2 py-0.5 rounded bg-[#0057FF] text-white">CYCLES 4K</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
