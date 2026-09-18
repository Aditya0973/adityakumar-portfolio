"use client";

import * as React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, Star, Sparkles, Layers } from "lucide-react";
import { SERVICES, TESTIMONIALS } from "@/data/portfolio";
import { Footer } from "@/components/Footer";
import { playPop, playFigmaClick } from "@/utils/soundEffects";
import { usePortfolioTheme } from "@/context/ThemeContext";
import { TiltCard } from "@/components/TiltCard";
import { MagneticButton } from "@/components/MagneticButton";

export default function HomePage() {
  const { colors } = usePortfolioTheme();

  return (
    <div className="pt-16 lg:pt-10 pb-24 px-4 sm:px-8 max-w-4xl mx-auto space-y-20">
      {/* ========================================================================= */}
      {/* 1. TOP STATUS PILL (Available for work) */}
      {/* ========================================================================= */}
      <div className="flex items-center justify-between text-xs font-mono">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          <span className="font-medium text-black">Available for work</span>
        </div>
        <div className="text-[#757575] flex items-center gap-1">
          <span>Based in UP, India</span>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* 2. HERO SECTION: Welcome here ❤️ + 3 Floating Tilted Badges + Interfaces */}
      {/* ========================================================================= */}
      <section className="space-y-6 text-center max-w-2xl mx-auto pt-2">
        {/* Welcome Pill with pulsing heart */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#f5f2f0] border border-[#e5e2de] text-xs font-mono text-[#000000] shadow-2xs cursor-default"
        >
          <span>Welcome here</span>
          <span className="text-red-500 animate-pulse text-xs">❤️</span>
        </motion.div>

        {/* Hero headline with exact 3 floating tilted badges (Donut, Coffee Shop, Planet) */}
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-medium tracking-tight text-black leading-[1.14]">
          Hey, Aditya here{" "}
          <span className="inline-flex items-center align-middle mx-1 sm:mx-1.5 relative group/cards -space-x-2 sm:-space-x-2.5">
            {/* 1. Donut Badge: Tilted Left (-8deg) */}
            <motion.span
              whileHover={{ scale: 1.25, rotate: -12, zIndex: 40, y: -4 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 450, damping: 20 }}
              className="relative inline-block w-9 h-9 sm:w-11 sm:h-11 rounded-xl sm:rounded-2xl overflow-hidden shadow-md border-2 border-white cursor-pointer -rotate-6 z-10 hover:shadow-xl shrink-0 transition-shadow bg-neutral-900"
              title="3D Blender Donut"
              onClick={() => playPop()}
            >
              <img
                src="/media/donut-badge.png"
                alt="Donuts"
                className="w-full h-full object-cover"
              />
            </motion.span>

            {/* 2. Coffee Shop Badge: Center (1deg) */}
            <motion.span
              whileHover={{ scale: 1.25, rotate: 0, zIndex: 40, y: -6 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 450, damping: 20 }}
              className="relative inline-block w-9 h-9 sm:w-11 sm:h-11 rounded-xl sm:rounded-2xl overflow-hidden shadow-md border-2 border-white cursor-pointer rotate-1 z-20 hover:shadow-xl shrink-0 transition-shadow bg-neutral-900"
              title="Isometric Coffee Shop 3D"
              onClick={() => playPop()}
            >
              <img
                src="/media/coffee-shop.png"
                alt="Coffee Shop"
                className="w-full h-full object-cover"
              />
            </motion.span>

            {/* 3. Planet Badge: Tilted Right (8deg) */}
            <motion.span
              whileHover={{ scale: 1.25, rotate: 12, zIndex: 40, y: -4 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 450, damping: 20 }}
              className="relative inline-block w-9 h-9 sm:w-11 sm:h-11 rounded-xl sm:rounded-2xl overflow-hidden shadow-md border-2 border-white cursor-pointer rotate-6 z-10 hover:shadow-xl shrink-0 transition-shadow bg-neutral-900"
              title="Low Poly Planet 3D"
              onClick={() => playPop()}
            >
              <img
                src="/media/planet-badge.png"
                alt="Planet"
                className="w-full h-full object-cover"
              />
            </motion.span>
          </span>{" "}
          I design <br className="hidden sm:inline" />
          <span className="italic font-serif font-normal">Interfaces,</span> experiences, & brands.
        </h1>

        <p className="text-xs sm:text-sm text-[#757575] max-w-md mx-auto leading-relaxed">
          I&apos;m a UI/UX Designer crafting intuitive digital products with a focus on simplicity, usability, and engaging user experiences.
        </p>

        {/* CTA Magnetic Button + 4.9/5 Rating */}
        <div className="flex flex-wrap items-center justify-center gap-5 pt-1">
          <MagneticButton pullStrength={0.4}>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full text-white text-xs font-medium transition-all shadow-md active:scale-[0.98] group"
              style={{ backgroundColor: colors.accent }}
            >
              <span>Get In Touch</span>
              <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>
          </MagneticButton>

          <div className="flex items-center gap-2 text-xs font-mono text-black select-none">
            <div className="flex items-center text-black">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3.5 h-3.5 fill-black text-black" />
              ))}
            </div>
            <span className="font-semibold">4.9 / 5</span>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 3. SERVICES: Unique, Vivid, 2x Strength Animations (No Dull Overlays) */}
      {/* ========================================================================= */}
      <section className="space-y-6">
        <div className="text-center space-y-1">
          <span className="text-[10px] font-mono uppercase tracking-widest font-semibold" style={{ color: colors.accent }}>
            What I Do
          </span>
          <h2 className="text-2xl sm:text-3xl font-medium tracking-tight text-black">
            Turning ideas into digital experiences
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 pt-2">
          {/* Card 1: Web Design (Browser Header Dots Animation) */}
          <motion.div
            whileHover={{ y: -10, scale: 1.03, borderColor: colors.accent }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: "spring", stiffness: 350, damping: 20 }}
            onClick={() => playPop()}
            className="p-5 rounded-2xl bg-[#f5f2f0] border border-[#e5e2de] shadow-xs hover:shadow-xl transition-all space-y-3 group cursor-pointer relative overflow-hidden"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-1.5 opacity-40 group-hover:opacity-100 transition-opacity">
                <span className="w-2.5 h-2.5 rounded-full bg-red-400" />
                <span className="w-2.5 h-2.5 rounded-full bg-amber-400" />
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
              </div>
              <span className="text-[10px] font-mono text-[#757575] group-hover:text-black transition-colors">01</span>
            </div>
            <div>
              <h3 className="text-sm font-bold text-black group-hover:text-[#4a5d4e] transition-colors">
                Web Design
              </h3>
              <p className="text-xs text-[#555] leading-relaxed mt-1">
                Responsive websites crafted with clear structure, smooth user flows, and visuals that support real user goals.
              </p>
            </div>
          </motion.div>

          {/* Card 2: Mobile App Design (Dynamic Island / Notch Bounce) */}
          <motion.div
            whileHover={{ y: -10, rotate: 1.5, scale: 1.03, borderColor: "#0057FF" }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: "spring", stiffness: 350, damping: 20 }}
            onClick={() => playPop()}
            className="p-5 rounded-2xl bg-[#f5f2f0] border border-[#e5e2de] shadow-xs hover:shadow-xl transition-all space-y-3 group cursor-pointer relative overflow-hidden"
          >
            <div className="flex items-center justify-between">
              <div className="w-10 h-3 rounded-full bg-neutral-300 group-hover:bg-neutral-800 transition-colors mx-auto" />
              <span className="text-[10px] font-mono text-[#757575] group-hover:text-black transition-colors">02</span>
            </div>
            <div>
              <h3 className="text-sm font-bold text-black group-hover:text-[#0057FF] transition-colors">
                Mobile App Design
              </h3>
              <p className="text-xs text-[#555] leading-relaxed mt-1">
                Intuitive mobile app experiences focused on usability, clean functionality, and engaging visual systems.
              </p>
            </div>
          </motion.div>

          {/* Card 3: Design Systems (Color Token Swatches Fan-Out) */}
          <motion.div
            whileHover={{ y: -10, scale: 1.03, borderColor: "#10B981" }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: "spring", stiffness: 350, damping: 20 }}
            onClick={() => playPop()}
            className="p-5 rounded-2xl bg-[#f5f2f0] border border-[#e5e2de] shadow-xs hover:shadow-xl transition-all space-y-3 group cursor-pointer relative overflow-hidden"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center -space-x-1 group-hover:space-x-1 transition-all">
                <span className="w-3 h-3 rounded-full bg-[#0057FF] shadow-xs" />
                <span className="w-3 h-3 rounded-full bg-[#10B981] shadow-xs" />
                <span className="w-3 h-3 rounded-full bg-[#6864F6] shadow-xs" />
              </div>
              <span className="text-[10px] font-mono text-[#757575] group-hover:text-black transition-colors">03</span>
            </div>
            <div>
              <h3 className="text-sm font-bold text-black group-hover:text-[#10B981] transition-colors">
                Design Systems
              </h3>
              <p className="text-xs text-[#555] leading-relaxed mt-1">
                Scalable component libraries, style guides, and design tokens to keep digital products consistent and cohesive.
              </p>
            </div>
          </motion.div>

          {/* Card 4: 3D Modeling (Isometric Wireframe Rotate) */}
          <motion.div
            whileHover={{ y: -10, rotate: -1.5, scale: 1.03, borderColor: "#FF7021" }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: "spring", stiffness: 350, damping: 20 }}
            onClick={() => playPop()}
            className="p-5 rounded-2xl bg-[#f5f2f0] border border-[#e5e2de] shadow-xs hover:shadow-xl transition-all space-y-3 group cursor-pointer relative overflow-hidden"
          >
            <div className="flex items-center justify-between">
              <div className="w-4 h-4 border-2 border-neutral-400 rounded group-hover:rotate-45 group-hover:border-[#FF7021] transition-transform duration-300" />
              <span className="text-[10px] font-mono text-[#757575] group-hover:text-black transition-colors">04</span>
            </div>
            <div>
              <h3 className="text-sm font-bold text-black group-hover:text-[#FF7021] transition-colors">
                3D Modeling
              </h3>
              <p className="text-xs text-[#555] leading-relaxed mt-1">
                Crafting visual 3D elements in Blender to elevate landing pages, hero headers, and brand showcases.
              </p>
            </div>
          </motion.div>

          {/* Card 5: Brand Identity (Typography Kerning Expand) */}
          <motion.div
            whileHover={{ y: -10, scale: 1.03, borderColor: "#A259FF" }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: "spring", stiffness: 350, damping: 20 }}
            onClick={() => playPop()}
            className="p-5 rounded-2xl bg-[#f5f2f0] border border-[#e5e2de] shadow-xs hover:shadow-xl transition-all space-y-3 group cursor-pointer relative overflow-hidden"
          >
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-neutral-400 group-hover:text-[#A259FF] group-hover:rotate-180 transition-all duration-300">
                ✦
              </span>
              <span className="text-[10px] font-mono text-[#757575] group-hover:text-black transition-colors">05</span>
            </div>
            <div>
              <h3 className="text-sm font-bold text-black group-hover:tracking-wider group-hover:text-[#A259FF] transition-all">
                Brand Identity
              </h3>
              <p className="text-xs text-[#555] leading-relaxed mt-1">
                Creating memorable visual identities, logo marks, and expressive typography systems for modern brands.
              </p>
            </div>
          </motion.div>

          {/* Card 6: Contact Me CTA Card (Glowing Wave + Liquid Button Animation) */}
          <motion.div
            whileHover={{ y: -10, scale: 1.03 }}
            transition={{ type: "spring", stiffness: 350, damping: 20 }}
            className="p-5 rounded-2xl text-white border space-y-3 flex flex-col justify-between shadow-lg relative overflow-hidden"
            style={{ backgroundColor: colors.accent, borderColor: colors.accentHover }}
          >
            <div>
              <div className="flex items-center justify-between mb-1">
                <span className="text-[10px] font-mono uppercase tracking-wider text-white/70">Collaboration</span>
                <span className="w-2 h-2 rounded-full bg-white animate-ping" />
              </div>
              <h3 className="text-sm font-bold">Contact Me</h3>
              <p className="text-xs text-white/80 leading-relaxed mt-1">
                Let&apos;s connect to discuss your design needs, explore creative ideas, and plan your project.
              </p>
            </div>

            {/* Unique Button Animation: Liquid Expand + Invert */}
            <motion.div
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.94 }}
              transition={{ type: "spring", stiffness: 450, damping: 20 }}
            >
              <Link
                href="/contact"
                onClick={() => playFigmaClick()}
                className="block w-full py-2.5 px-4 rounded-xl bg-white text-black text-xs font-semibold text-center hover:bg-neutral-100 transition-colors shadow-md hover:shadow-xl"
              >
                Let&apos;s Connect ✦
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 4. ABOUT ME PREVIEW: Bold Interactive Card */}
      {/* ========================================================================= */}
      <motion.section
        whileHover={{ y: -8, scale: 1.01 }}
        transition={{ type: "spring", stiffness: 300, damping: 22 }}
        className="p-6 sm:p-8 rounded-3xl bg-[#f5f2f0] border border-[#e5e2de] hover:border-black/30 hover:shadow-xl transition-all flex flex-col md:flex-row items-center justify-between gap-8"
      >
        <div className="space-y-3 flex-1">
          <span className="text-[10px] font-mono uppercase tracking-wider font-semibold" style={{ color: colors.accent }}>
            About me
          </span>
          <p className="text-xs sm:text-sm text-black/80 leading-relaxed">
            I&apos;m Aditya Kumar, a UI/UX designer focused on crafting thoughtful digital experiences that feel intuitive and purposeful. With a strong emphasis on usability, clarity, and visual balance, I design products that not only look good but solve real user problems.
          </p>
          <p className="text-xs sm:text-sm text-[#757575] leading-relaxed">
            Outside work, I explore design systems and experiment with 3D modeling in Blender to push visual boundaries.
          </p>

          {/* Unique Button: Underline Slider + Arrow Orbit */}
          <div className="pt-2">
            <motion.div
              whileHover={{ x: 4 }}
              className="inline-block"
            >
              <Link
                href="/about"
                onClick={() => playFigmaClick()}
                className="inline-flex items-center gap-2 text-xs font-mono font-bold text-black group relative pb-0.5"
              >
                <span>Read Full Story</span>
                <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-black group-hover:w-full transition-all duration-300" />
              </Link>
            </motion.div>
          </div>
        </div>

        <div className="relative w-full sm:w-64 h-52 rounded-2xl overflow-hidden border border-[#e5e2de] shrink-0 shadow-md bg-[#edeae7] group">
          <img
            src="/media/me.jpg"
            alt="Aditya Kumar"
            className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-500"
          />
        </div>
      </motion.section>

      {/* ========================================================================= */}
      {/* 5. DESIGN PROCESS: 3 Unique Step Animations */}
      {/* ========================================================================= */}
      <section className="space-y-6">
        <div className="space-y-1">
          <span className="text-[10px] font-mono uppercase tracking-widest font-semibold" style={{ color: colors.accent }}>
            Methodology
          </span>
          <h2 className="text-2xl sm:text-3xl font-medium tracking-tight text-black">
            From ideas to impactful creative results.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          {/* Step 01: Radar Sonar Pulse */}
          <motion.div
            whileHover={{ y: -10, rotate: -1.5, scale: 1.02 }}
            transition={{ type: "spring", stiffness: 350, damping: 20 }}
            onClick={() => playPop()}
            className="p-6 rounded-3xl bg-[#f5f2f0] border border-[#e5e2de] hover:border-black/30 hover:shadow-xl transition-all space-y-2 cursor-pointer group relative overflow-hidden"
          >
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono font-bold" style={{ color: colors.accent }}>Creative Discovery /01</span>
              <span className="w-2 h-2 rounded-full bg-emerald-500 group-hover:scale-150 transition-transform" />
            </div>
            <h3 className="text-sm font-bold text-black">Research & Empathy</h3>
            <p className="text-xs text-[#555] leading-relaxed">
              Through research and collaboration, I uncover goals, audience needs, and brand vision to build a solid creative foundation.
            </p>
          </motion.div>

          {/* Step 02: Blueprint Ruler Lines Draw */}
          <motion.div
            whileHover={{ y: -10, scale: 1.02 }}
            transition={{ type: "spring", stiffness: 350, damping: 20 }}
            onClick={() => playPop()}
            className="p-6 rounded-3xl bg-[#f5f2f0] border border-[#e5e2de] hover:border-[#0057FF] hover:shadow-xl transition-all space-y-2 cursor-pointer group relative overflow-hidden"
          >
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono font-bold text-[#0057FF]">Design Blueprint /02</span>
              <span className="text-[10px] font-mono opacity-40 group-hover:opacity-100 transition-opacity">GRID 8px</span>
            </div>
            <h3 className="text-sm font-bold text-black">Wireframes & Flows</h3>
            <p className="text-xs text-[#555] leading-relaxed">
              Transforming insights into structured wireframes and prototypes that guide visuals, user experience, and brand alignment seamlessly.
            </p>
          </motion.div>

          {/* Step 03: High-Fi UI Spark */}
          <motion.div
            whileHover={{ y: -10, rotate: 1.5, scale: 1.02 }}
            transition={{ type: "spring", stiffness: 350, damping: 20 }}
            onClick={() => playPop()}
            className="p-6 rounded-3xl bg-[#f5f2f0] border border-[#e5e2de] hover:border-black/30 hover:shadow-xl transition-all space-y-2 cursor-pointer group relative overflow-hidden"
          >
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono font-bold" style={{ color: colors.accent }}>Flawless Execution /03</span>
              <span className="text-xs group-hover:rotate-90 transition-transform duration-300">✦</span>
            </div>
            <h3 className="text-sm font-bold text-black">High-Fidelity UI</h3>
            <p className="text-xs text-[#555] leading-relaxed">
              Final designs are crafted, developed, and refined to ensure polished, user-centered results with measurable client satisfaction.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 6. REVIEWS: Floating Speech Bubble & Staggering Star Pulsing */}
      {/* ========================================================================= */}
      <section className="space-y-6">
        <div className="space-y-1">
          <span className="text-[10px] font-mono uppercase tracking-widest font-semibold" style={{ color: colors.accent }}>
            Reviews
          </span>
          <h2 className="text-2xl sm:text-3xl font-medium tracking-tight text-black">
            What collaborators say
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          {TESTIMONIALS.map((t, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -10, scale: 1.03 }}
              transition={{ type: "spring", stiffness: 350, damping: 20 }}
              onClick={() => playPop()}
              className="p-5 rounded-2xl bg-[#f5f2f0] border border-[#e5e2de] hover:border-black/30 hover:shadow-xl transition-all flex flex-col justify-between gap-4 cursor-pointer group"
            >
              <p className="text-xs text-black/85 italic leading-relaxed">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div>
                <div className="text-xs font-bold text-black">{t.author}</div>
                <div className="text-[10px] text-[#757575] font-mono">{t.role}</div>
                <div className="flex items-center gap-1 mt-1">
                  {[...Array(5)].map((_, sIdx) => (
                    <motion.span
                      key={sIdx}
                      className="text-amber-500 text-xs inline-block"
                      whileHover={{ scale: 1.4 }}
                    >
                      ★
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Bottom Footer */}
      <Footer />
    </div>
  );
}
