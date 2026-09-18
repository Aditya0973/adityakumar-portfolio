"use client";

import * as React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, Star, Sparkles, Layers, Box } from "lucide-react";
import { SERVICES, TESTIMONIALS } from "@/data/portfolio";
import { Footer } from "@/components/Footer";
import { playPop, playFigmaClick } from "@/utils/soundEffects";

export default function HomePage() {
  return (
    <div className="pt-20 lg:pt-12 pb-16 px-4 sm:px-8 max-w-4xl mx-auto space-y-24">
      {/* ========================================================================= */}
      {/* 1. TOP STATUS PILL (Available for work) */}
      {/* ========================================================================= */}
      <div className="flex items-center justify-between text-xs font-mono">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          <span className="font-semibold text-black">Available for work</span>
        </div>
        <div className="text-[#757575] flex items-center gap-1">
          <span>📍 Based in UP, India</span>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* 2. HERO SECTION (Matching exact Framer screenshot with floating badges) */}
      {/* ========================================================================= */}
      <section className="space-y-6 text-center max-w-2xl mx-auto pt-2">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#f5f2f0] border border-[#e5e2de] text-xs font-mono text-[#757575]">
          <span>Welcome here ✦</span>
        </div>

        {/* Hero headline with floating 3D/emoji badges */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-black leading-[1.08]">
          Hey, Aditya here{" "}
          <span className="inline-flex items-center gap-1.5 align-middle px-2 py-0.5 rounded-xl bg-[#edeae7] border border-[#e5e2de] mx-1">
            <span className="text-base sm:text-xl">🎮</span>
            <span className="text-base sm:text-xl">🍩</span>
            <span className="text-base sm:text-xl">📦</span>
          </span>{" "}
          I design <span className="italic font-serif font-normal">Interfaces</span>, experiences, & brands.
        </h1>

        <p className="text-xs sm:text-sm text-[#757575] max-w-md mx-auto leading-relaxed">
          I&apos;m a UI/UX Designer crafting intuitive digital products with a focus on simplicity, usability, and engaging user experiences.
        </p>

        {/* CTA Button + 4.9/5 Rating */}
        <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
          <Link
            href="/contact"
            onClick={() => playFigmaClick()}
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-black text-white text-xs font-semibold hover:bg-black/85 transition-all shadow-md active:scale-[0.98]"
          >
            <span>Get In Touch</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </Link>

          <div className="flex items-center gap-2 text-xs font-mono text-black">
            <div className="flex items-center text-amber-500">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3.5 h-3.5 fill-amber-500" />
              ))}
            </div>
            <span className="font-bold">4.9 / 5</span>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 3. SERVICES: "Turning ideas into digital experiences" */}
      {/* ========================================================================= */}
      <section className="space-y-6">
        <div className="text-center space-y-1">
          <span className="text-[10px] font-mono uppercase tracking-widest text-[#4a5d4e] font-bold">
            What I Do
          </span>
          <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-black">
            Turning ideas into digital experiences
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 pt-2">
          {SERVICES.map((srv, idx) => (
            <motion.div
              key={srv.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: idx * 0.05 }}
              className="p-5 rounded-2xl bg-[#f5f2f0] border border-[#e5e2de] hover:border-black/30 transition-all space-y-2 group"
            >
              <h3 className="text-sm font-bold text-black group-hover:text-[#4a5d4e] transition-colors">
                {srv.title}
              </h3>
              <p className="text-xs text-[#757575] leading-relaxed">
                {srv.description}
              </p>
            </motion.div>
          ))}

          {/* 6th Card: Contact Me prompt */}
          <div className="p-5 rounded-2xl bg-[#4a5d4e] text-white border border-[#3d4f41] space-y-2 flex flex-col justify-between">
            <div>
              <h3 className="text-sm font-bold">Contact Me</h3>
              <p className="text-xs text-white/80 leading-relaxed mt-1">
                Let&apos;s connect to discuss your design needs, explore creative ideas, and plan your project.
              </p>
            </div>
            <Link
              href="/contact"
              className="w-full py-2 rounded-xl bg-white text-black text-xs font-semibold text-center hover:bg-neutral-100 transition-colors"
            >
              Let&apos;s Connect
            </Link>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 4. ABOUT ME PREVIEW: Text on Left + Photo on Right (Matches Screenshot) */}
      {/* ========================================================================= */}
      <section className="p-6 sm:p-8 rounded-3xl bg-[#f5f2f0] border border-[#e5e2de] flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="space-y-3 flex-1">
          <span className="text-[10px] font-mono uppercase tracking-wider text-[#4a5d4e] font-bold">
            About me
          </span>
          <p className="text-xs sm:text-sm text-[#000000]/80 leading-relaxed">
            I&apos;m Aditya Kumar, a UI/UX designer focused on crafting thoughtful digital experiences that feel intuitive and purposeful. With a strong emphasis on usability, clarity, and visual balance, I design products that not only look good but solve real user problems.
          </p>
          <p className="text-xs sm:text-sm text-[#757575] leading-relaxed">
            Outside work, I explore design systems and experiment with 3D modeling in Blender to push visual boundaries.
          </p>
          <div className="pt-2">
            <Link
              href="/about"
              className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-black hover:text-[#4a5d4e] transition-colors"
            >
              <span>Read Full Story</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>

        <div className="relative w-full sm:w-64 h-52 rounded-2xl overflow-hidden border border-[#e5e2de] shrink-0 shadow-md">
          <img
            src="https://framerusercontent.com/images/hfW6u0FkOwOgWiJlYCnH8JkNIE.png"
            alt="Aditya Kumar Photo"
            className="w-full h-full object-cover"
          />
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 5. CASE STUDIES TEASER -> Points to /work */}
      {/* ========================================================================= */}
      <section className="space-y-6">
        <div className="text-center space-y-1">
          <span className="text-[10px] font-mono uppercase tracking-widest text-[#4a5d4e] font-bold">
            My Portfolio
          </span>
          <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-black">
            Every project built to inspire users
          </h2>
        </div>

        {/* 2x2 Showcase Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Link
            href="/work/bali"
            className="group relative rounded-3xl overflow-hidden border border-[#e5e2de] bg-[#edeae7] aspect-[16/10] shadow-sm hover:border-black/30 transition-all"
          >
            <img
              src="https://framerusercontent.com/images/oiS2T2smvbRU93s1qkoP4ZdofiQ.png"
              alt="Explore Bali"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent p-4 flex items-center justify-between text-white">
              <span className="text-sm font-bold">Explore Bali</span>
              <span className="text-[10px] font-mono opacity-80">Web Design / 2025</span>
            </div>
          </Link>

          <Link
            href="/work/dashboard"
            className="group relative rounded-3xl overflow-hidden border border-[#e5e2de] bg-[#edeae7] aspect-[16/10] shadow-sm hover:border-black/30 transition-all"
          >
            <img
              src="https://framerusercontent.com/images/bMBkpiAn3iPRXWJQwpQ0MEjIw.png"
              alt="Admin Dashboard"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent p-4 flex items-center justify-between text-white">
              <span className="text-sm font-bold">Admin Dashboard</span>
              <span className="text-[10px] font-mono opacity-80">Web Design / 2025</span>
            </div>
          </Link>

          <Link
            href="/work/commit"
            className="group relative rounded-3xl overflow-hidden border border-[#e5e2de] bg-[#edeae7] aspect-[16/10] shadow-sm hover:border-black/30 transition-all"
          >
            <img
              src="https://framerusercontent.com/images/zduUa5fbRRrmvRrtw5gH9KmeYqY.png"
              alt="Commit"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent p-4 flex items-center justify-between text-white">
              <span className="text-sm font-bold">Commit</span>
              <span className="text-[10px] font-mono opacity-80">Mobile App / 2025</span>
            </div>
          </Link>

          <Link
            href="/work/wip"
            className="group relative rounded-3xl overflow-hidden border border-[#e5e2de] bg-[#edeae7] aspect-[16/10] shadow-sm hover:border-black/30 transition-all"
          >
            <img
              src="https://framerusercontent.com/images/v4bQkJBh8sNXywf7aX619SGDS68.png"
              alt="WIP Showcase"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent p-4 flex items-center justify-between text-white">
              <span className="text-sm font-bold">Work In Progress</span>
              <span className="text-[10px] font-mono opacity-80">Behance / 2025</span>
            </div>
          </Link>
        </div>

        {/* Centered Explore All Pill */}
        <div className="text-center pt-2">
          <Link
            href="/work"
            className="inline-flex items-center gap-1.5 px-6 py-2.5 rounded-full bg-[#4a5d4e] text-white text-xs font-semibold hover:bg-[#3d4f41] transition-colors shadow-sm"
          >
            <span>Explore All Case Studies</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 6. DESIGN PROCESS */}
      {/* ========================================================================= */}
      <section className="space-y-6">
        <div className="space-y-1">
          <span className="text-[10px] font-mono uppercase tracking-widest text-[#4a5d4e] font-bold">
            Methodology
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-black">
            From ideas to impactful creative results.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          <div className="p-6 rounded-3xl bg-[#f5f2f0] border border-[#e5e2de] space-y-2">
            <span className="text-xs font-mono text-[#4a5d4e] font-bold">Creative Discovery /01</span>
            <h3 className="text-sm font-bold text-black">Research & Empathy</h3>
            <p className="text-xs text-[#757575] leading-relaxed">
              Through research and collaboration, I uncover goals, audience needs, and brand vision to build a solid creative foundation.
            </p>
          </div>

          <div className="p-6 rounded-3xl bg-[#f5f2f0] border border-[#e5e2de] space-y-2">
            <span className="text-xs font-mono text-[#4a5d4e] font-bold">Design Blueprint /02</span>
            <h3 className="text-sm font-bold text-black">Wireframes & Flows</h3>
            <p className="text-xs text-[#757575] leading-relaxed">
              Transforming insights into structured wireframes and prototypes that guide visuals, user experience, and brand alignment seamlessly.
            </p>
          </div>

          <div className="p-6 rounded-3xl bg-[#f5f2f0] border border-[#e5e2de] space-y-2">
            <span className="text-xs font-mono text-[#4a5d4e] font-bold">Flawless Execution /03</span>
            <h3 className="text-sm font-bold text-black">High-Fidelity UI</h3>
            <p className="text-xs text-[#757575] leading-relaxed">
              Final designs are crafted, developed, and refined to ensure polished, user-centered results with measurable client satisfaction.
            </p>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 7. REVIEWS: "What collaborators say" */}
      {/* ========================================================================= */}
      <section className="space-y-6">
        <div className="space-y-1">
          <span className="text-[10px] font-mono uppercase tracking-widest text-[#4a5d4e] font-bold">
            Reviews
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-black">
            What collaborators say
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          {TESTIMONIALS.map((t, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: idx * 0.08 }}
              className="p-5 rounded-2xl bg-[#f5f2f0] border border-[#e5e2de] flex flex-col justify-between gap-4"
            >
              <p className="text-xs text-[#000000]/80 italic leading-relaxed">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div>
                <div className="text-xs font-bold text-black">{t.author}</div>
                <div className="text-[10px] text-[#757575] font-mono">{t.role}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Giant Connect Banner & Bottom Footer */}
      <Footer />
    </div>
  );
}
