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
      {/* 3. SERVICES: 3D TiltCards with Cursor Glare Sheen */}
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
          {SERVICES.map((srv) => (
            <TiltCard
              key={srv.id}
              tiltStrength={12}
              className="rounded-2xl"
              onClick={() => playPop()}
            >
              <div className="p-5 h-full rounded-2xl bg-[#f5f2f0] border border-[#e5e2de] hover:border-black/30 transition-all space-y-2 group">
                <h3 className="text-sm font-semibold text-black group-hover:text-[#4a5d4e] transition-colors">
                  {srv.title}
                </h3>
                <p className="text-xs text-[#757575] leading-relaxed">
                  {srv.description}
                </p>
              </div>
            </TiltCard>
          ))}

          {/* 6th Card: Contact Me prompt */}
          <TiltCard tiltStrength={10} className="rounded-2xl">
            <div
              className="p-5 h-full rounded-2xl text-white border space-y-2 flex flex-col justify-between"
              style={{ backgroundColor: colors.accent, borderColor: colors.accentHover }}
            >
              <div>
                <h3 className="text-sm font-semibold">Contact Me</h3>
                <p className="text-xs text-white/80 leading-relaxed mt-1">
                  Let&apos;s connect to discuss your design needs, explore creative ideas, and plan your project.
                </p>
              </div>
              <MagneticButton pullStrength={0.25}>
                <Link
                  href="/contact"
                  className="block w-full py-2 px-4 rounded-xl bg-white text-black text-xs font-medium text-center hover:bg-neutral-100 transition-colors shadow-xs"
                >
                  Let&apos;s Connect
                </Link>
              </MagneticButton>
            </div>
          </TiltCard>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 4. ABOUT ME PREVIEW: 3D Tilt Card */}
      {/* ========================================================================= */}
      <TiltCard tiltStrength={8} className="rounded-3xl">
        <section className="p-6 sm:p-8 rounded-3xl bg-[#f5f2f0] border border-[#e5e2de] flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-3 flex-1">
            <span className="text-[10px] font-mono uppercase tracking-wider font-semibold" style={{ color: colors.accent }}>
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
                className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold text-black hover:opacity-75 transition-opacity group"
              >
                <span>Read Full Story</span>
                <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </Link>
            </div>
          </div>

          <div className="relative w-full sm:w-64 h-52 rounded-2xl overflow-hidden border border-[#e5e2de] shrink-0 shadow-md bg-[#edeae7] group">
            <img
              src="/media/me.jpg"
              alt="Aditya Kumar"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
          </div>
        </section>
      </TiltCard>

      {/* ========================================================================= */}
      {/* 5. DESIGN PROCESS: 3D TiltCards */}
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
          <TiltCard tiltStrength={12} className="rounded-3xl">
            <div className="p-6 h-full rounded-3xl bg-[#f5f2f0] border border-[#e5e2de] space-y-2 hover:border-black/20 transition-colors">
              <span className="text-xs font-mono font-semibold" style={{ color: colors.accent }}>Creative Discovery /01</span>
              <h3 className="text-sm font-semibold text-black">Research & Empathy</h3>
              <p className="text-xs text-[#757575] leading-relaxed">
                Through research and collaboration, I uncover goals, audience needs, and brand vision to build a solid creative foundation.
              </p>
            </div>
          </TiltCard>

          <TiltCard tiltStrength={12} className="rounded-3xl">
            <div className="p-6 h-full rounded-3xl bg-[#f5f2f0] border border-[#e5e2de] space-y-2 hover:border-black/20 transition-colors">
              <span className="text-xs font-mono font-semibold" style={{ color: colors.accent }}>Design Blueprint /02</span>
              <h3 className="text-sm font-semibold text-black">Wireframes & Flows</h3>
              <p className="text-xs text-[#757575] leading-relaxed">
                Transforming insights into structured wireframes and prototypes that guide visuals, user experience, and brand alignment seamlessly.
              </p>
            </div>
          </TiltCard>

          <TiltCard tiltStrength={12} className="rounded-3xl">
            <div className="p-6 h-full rounded-3xl bg-[#f5f2f0] border border-[#e5e2de] space-y-2 hover:border-black/20 transition-colors">
              <span className="text-xs font-mono font-semibold" style={{ color: colors.accent }}>Flawless Execution /03</span>
              <h3 className="text-sm font-semibold text-black">High-Fidelity UI</h3>
              <p className="text-xs text-[#757575] leading-relaxed">
                Final designs are crafted, developed, and refined to ensure polished, user-centered results with measurable client satisfaction.
              </p>
            </div>
          </TiltCard>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 6. REVIEWS: 3D TiltCards */}
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
            <TiltCard key={idx} tiltStrength={10} className="rounded-2xl">
              <div className="p-5 h-full rounded-2xl bg-[#f5f2f0] border border-[#e5e2de] flex flex-col justify-between gap-4 hover:border-black/20 transition-colors">
                <p className="text-xs text-[#000000]/80 italic leading-relaxed">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div>
                  <div className="text-xs font-semibold text-black">{t.author}</div>
                  <div className="text-[10px] text-[#757575] font-mono">{t.role}</div>
                </div>
              </div>
            </TiltCard>
          ))}
        </div>
      </section>

      {/* Bottom Footer */}
      <Footer />
    </div>
  );
}
