"use client";

import * as React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, Star, Sparkles, Layers } from "lucide-react";
import { SERVICES, TESTIMONIALS } from "@/data/portfolio";
import { Footer } from "@/components/Footer";
import { playPop, playFigmaClick } from "@/utils/soundEffects";
import { usePortfolioTheme } from "@/context/ThemeContext";

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
      {/* 2. HERO SECTION (Exact user image badges: Donuts, Low Poly Tower, Planet) */}
      {/* ========================================================================= */}
      <section className="space-y-6 text-center max-w-2xl mx-auto pt-2">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#f5f2f0] border border-[#e5e2de] text-xs font-mono text-[#757575]">
          <span>Welcome here ✦</span>
        </div>

        {/* Hero headline with user's exact 3 work images floating between text */}
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-medium tracking-tight text-black leading-[1.12]">
          Hey, Aditya here{" "}
          <span className="inline-flex items-center gap-1 align-middle px-2 py-1 rounded-2xl bg-[#edeae7] border border-[#e5e2de] mx-1">
            <span className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl overflow-hidden border border-white/60 shrink-0 shadow-xs inline-block">
              <img src="/media/donut-badge.png" alt="Donuts" className="w-full h-full object-cover" />
            </span>
            <span className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl overflow-hidden border border-white/60 shrink-0 shadow-xs inline-block">
              <img src="/media/tower-badge.png" alt="Tower" className="w-full h-full object-cover" />
            </span>
            <span className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl overflow-hidden border border-white/60 shrink-0 shadow-xs inline-block">
              <img src="/media/planet-badge.png" alt="Planet" className="w-full h-full object-cover" />
            </span>
          </span>{" "}
          I design <span className="italic font-serif font-normal">Interfaces</span>, experiences, & brands.
        </h1>

        <p className="text-xs sm:text-sm text-[#757575] max-w-md mx-auto leading-relaxed">
          I&apos;m a UI/UX Designer crafting intuitive digital products with a focus on simplicity, usability, and engaging user experiences.
        </p>

        {/* CTA Button + 4.9/5 Rating */}
        <div className="flex flex-wrap items-center justify-center gap-4 pt-1">
          <Link
            href="/contact"
            onClick={() => playFigmaClick()}
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full text-white text-xs font-medium transition-all shadow-sm active:scale-[0.98]"
            style={{ backgroundColor: colors.accent }}
          >
            <span>Get In Touch</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </Link>

          <div className="flex items-center gap-2 text-xs font-mono text-black">
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
      {/* 3. SERVICES: "Turning ideas into digital experiences" */}
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
          {SERVICES.map((srv, idx) => (
            <motion.div
              key={srv.id}
              whileHover={{ y: -3, transition: { duration: 0.2 } }}
              className="p-5 rounded-2xl bg-[#f5f2f0] border border-[#e5e2de] hover:border-black/30 transition-all space-y-2 group cursor-default"
            >
              <h3 className="text-sm font-semibold text-black group-hover:text-[#4a5d4e] transition-colors">
                {srv.title}
              </h3>
              <p className="text-xs text-[#757575] leading-relaxed">
                {srv.description}
              </p>
            </motion.div>
          ))}

          {/* 6th Card: Contact Me prompt */}
          <div
            className="p-5 rounded-2xl text-white border space-y-2 flex flex-col justify-between"
            style={{ backgroundColor: colors.accent, borderColor: colors.accentHover }}
          >
            <div>
              <h3 className="text-sm font-semibold">Contact Me</h3>
              <p className="text-xs text-white/80 leading-relaxed mt-1">
                Let&apos;s connect to discuss your design needs, explore creative ideas, and plan your project.
              </p>
            </div>
            <Link
              href="/contact"
              className="w-full py-2 rounded-xl bg-white text-black text-xs font-medium text-center hover:bg-neutral-100 transition-colors"
            >
              Let&apos;s Connect
            </Link>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 4. ABOUT ME PREVIEW: Text on Left + User's actual photo on Right */}
      {/* ========================================================================= */}
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
              className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold text-black hover:opacity-75 transition-opacity"
            >
              <span>Read Full Story</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>

        <div className="relative w-full sm:w-64 h-52 rounded-2xl overflow-hidden border border-[#e5e2de] shrink-0 shadow-md bg-[#edeae7]">
          <img
            src="/media/me.jpg"
            alt="Aditya Kumar"
            className="w-full h-full object-cover"
          />
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 5. DESIGN PROCESS */}
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
          <motion.div whileHover={{ y: -3 }} className="p-6 rounded-3xl bg-[#f5f2f0] border border-[#e5e2de] space-y-2">
            <span className="text-xs font-mono font-semibold" style={{ color: colors.accent }}>Creative Discovery /01</span>
            <h3 className="text-sm font-semibold text-black">Research & Empathy</h3>
            <p className="text-xs text-[#757575] leading-relaxed">
              Through research and collaboration, I uncover goals, audience needs, and brand vision to build a solid creative foundation.
            </p>
          </motion.div>

          <motion.div whileHover={{ y: -3 }} className="p-6 rounded-3xl bg-[#f5f2f0] border border-[#e5e2de] space-y-2">
            <span className="text-xs font-mono font-semibold" style={{ color: colors.accent }}>Design Blueprint /02</span>
            <h3 className="text-sm font-semibold text-black">Wireframes & Flows</h3>
            <p className="text-xs text-[#757575] leading-relaxed">
              Transforming insights into structured wireframes and prototypes that guide visuals, user experience, and brand alignment seamlessly.
            </p>
          </motion.div>

          <motion.div whileHover={{ y: -3 }} className="p-6 rounded-3xl bg-[#f5f2f0] border border-[#e5e2de] space-y-2">
            <span className="text-xs font-mono font-semibold" style={{ color: colors.accent }}>Flawless Execution /03</span>
            <h3 className="text-sm font-semibold text-black">High-Fidelity UI</h3>
            <p className="text-xs text-[#757575] leading-relaxed">
              Final designs are crafted, developed, and refined to ensure polished, user-centered results with measurable client satisfaction.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 6. REVIEWS: "What collaborators say" */}
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
              whileHover={{ y: -3 }}
              className="p-5 rounded-2xl bg-[#f5f2f0] border border-[#e5e2de] flex flex-col justify-between gap-4"
            >
              <p className="text-xs text-[#000000]/80 italic leading-relaxed">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div>
                <div className="text-xs font-semibold text-black">{t.author}</div>
                <div className="text-[10px] text-[#757575] font-mono">{t.role}</div>
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
