"use client";

import * as React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, ArrowDownRight, Sparkles, Star, CheckCircle2, MessageSquare } from "lucide-react";
import { PROJECTS, SERVICES, TESTIMONIALS, STATS } from "@/data/portfolio";

export default function HomePage() {
  return (
    <div className="pt-28 pb-16 px-4 sm:px-6 max-w-4xl mx-auto space-y-24">
      {/* ========================================================================= */}
      {/* 1. HERO SECTION: Exact Framer Typography & Status Pills */}
      {/* ========================================================================= */}
      <section className="space-y-8 pt-4">
        {/* Status badges */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-wrap items-center gap-3 text-xs font-mono"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#f5f2f0] border border-[#e5e2de] text-black shadow-sm">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="font-medium">Available for work</span>
          </div>

          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#f5f2f0] border border-[#e5e2de] text-[#757575]">
            <span>📍 Based in UP, India</span>
          </div>

          <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#f5f2f0] border border-[#e5e2de] text-[#757575]">
            <span>Welcome here ✦</span>
          </div>
        </motion.div>

        {/* Big Impact Headline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="space-y-4"
        >
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-black leading-[1.08]">
            Hey, <span className="text-[#757575] font-normal">Aditya here.</span>
            <br />
            I design <span className="italic font-serif font-normal">Interfaces</span>, experiences, & brands.
          </h1>

          <p className="text-base sm:text-lg text-[#757575] max-w-2xl leading-relaxed">
            I&apos;m a UI/UX Designer crafting intuitive digital products with a focus on simplicity, usability, and engaging user experiences.
          </p>
        </motion.div>

        {/* CTA Actions & Rating */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap items-center gap-5 pt-2"
        >
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-black text-white text-xs font-semibold hover:bg-black/85 transition-all shadow-md active:scale-[0.98]"
          >
            <span>Get In Touch</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>

          <Link
            href="/work"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#f5f2f0] border border-[#e5e2de] text-black text-xs font-semibold hover:bg-[#edeae7] transition-all"
          >
            <span>View All Work</span>
          </Link>

          {/* Social Proof Star Rating */}
          <div className="flex items-center gap-2 pl-2 text-xs font-mono text-black">
            <div className="flex items-center text-amber-500">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3.5 h-3.5 fill-amber-500" />
              ))}
            </div>
            <span className="font-bold">4.9 / 5</span>
          </div>
        </motion.div>
      </section>

      {/* ========================================================================= */}
      {/* 2. SERVICES & WHAT I DO */}
      {/* ========================================================================= */}
      <section className="space-y-6">
        <div className="flex items-center justify-between border-b border-[#e5e2de] pb-4">
          <div className="space-y-1">
            <span className="text-xs uppercase font-mono tracking-widest text-[#4a5d4e] font-semibold">
              Expertise
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-black">
              What I Do
            </h2>
          </div>
          <span className="text-xs font-mono text-[#757575]">01 / SERVICES</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {SERVICES.map((srv, idx) => (
            <motion.div
              key={srv.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              className="p-6 rounded-3xl bg-[#f5f2f0] border border-[#e5e2de] hover:border-black/20 hover:shadow-md transition-all space-y-2 group"
            >
              <div className="flex items-center justify-between">
                <h3 className="text-base font-bold text-black group-hover:text-[#4a5d4e] transition-colors">
                  {srv.title}
                </h3>
                <span className="text-xs font-mono text-[#757575]">0{idx + 1}</span>
              </div>
              <p className="text-xs sm:text-sm text-[#757575] leading-relaxed">
                {srv.description}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 3. FEATURED WORK & CASE STUDIES */}
      {/* ========================================================================= */}
      <section className="space-y-6">
        <div className="flex items-center justify-between border-b border-[#e5e2de] pb-4">
          <div className="space-y-1">
            <span className="text-xs uppercase font-mono tracking-widest text-[#4a5d4e] font-semibold">
              Selected Work
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-black">
              Every project built to inspire users
            </h2>
          </div>
          <Link
            href="/work"
            className="text-xs font-mono text-black hover:text-[#4a5d4e] transition-colors inline-flex items-center gap-1"
          >
            <span>Explore All</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-6">
          {PROJECTS.map((proj, idx) => (
            <motion.div
              key={proj.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              <Link
                href={proj.link}
                className="group block rounded-3xl bg-[#f5f2f0] border border-[#e5e2de] overflow-hidden hover:border-black/30 hover:shadow-xl transition-all duration-500"
              >
                {/* Project Image Container with Subtle Framer Zoom */}
                <div className="relative aspect-[16/10] sm:aspect-[16/9] w-full overflow-hidden bg-[#edeae7]">
                  <img
                    src={proj.image}
                    alt={proj.title}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute top-4 right-4 p-2.5 rounded-full bg-white/80 backdrop-blur-md border border-white/40 text-black opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </div>

                {/* Project Card Meta Info */}
                <div className="p-6 sm:p-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="text-[11px] font-mono text-[#757575] uppercase tracking-wider">
                        {proj.category}
                      </span>
                      <span className="text-[#757575] text-xs">•</span>
                      <span className="text-[11px] font-mono text-[#757575]">
                        {proj.year}
                      </span>
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold text-black group-hover:text-[#4a5d4e] transition-colors">
                      {proj.title}
                    </h3>
                  </div>

                  <span className="text-xs font-mono px-3 py-1.5 rounded-full bg-[#edeae7] text-black self-start sm:self-auto font-medium">
                    View Case Study →
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 4. DESIGN PROCESS */}
      {/* ========================================================================= */}
      <section className="space-y-6">
        <div className="flex items-center justify-between border-b border-[#e5e2de] pb-4">
          <div className="space-y-1">
            <span className="text-xs uppercase font-mono tracking-widest text-[#4a5d4e] font-semibold">
              Methodology
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-black">
              From ideas to impactful creative results
            </h2>
          </div>
          <span className="text-xs font-mono text-[#757575]">02 / PROCESS</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="p-6 rounded-3xl bg-[#f5f2f0] border border-[#e5e2de] space-y-3">
            <div className="text-xs font-mono text-[#4a5d4e] font-bold">/01</div>
            <h3 className="text-lg font-bold text-black">Creative Discovery</h3>
            <p className="text-xs sm:text-sm text-[#757575] leading-relaxed">
              Through research and collaboration, I uncover goals, audience needs, and brand vision to build a solid creative foundation.
            </p>
          </div>

          <div className="p-6 rounded-3xl bg-[#f5f2f0] border border-[#e5e2de] space-y-3">
            <div className="text-xs font-mono text-[#4a5d4e] font-bold">/02</div>
            <h3 className="text-lg font-bold text-black">Design Blueprint</h3>
            <p className="text-xs sm:text-sm text-[#757575] leading-relaxed">
              Transforming insights into structured wireframes and prototypes that guide visuals, user experience, and brand alignment seamlessly.
            </p>
          </div>

          <div className="p-6 rounded-3xl bg-[#f5f2f0] border border-[#e5e2de] space-y-3">
            <div className="text-xs font-mono text-[#4a5d4e] font-bold">/03</div>
            <h3 className="text-lg font-bold text-black">Flawless Execution</h3>
            <p className="text-xs sm:text-sm text-[#757575] leading-relaxed">
              Final designs are crafted, developed, and refined to ensure polished, user-centered results with measurable client satisfaction.
            </p>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 5. REVIEWS & TESTIMONIALS */}
      {/* ========================================================================= */}
      <section className="space-y-6">
        <div className="flex items-center justify-between border-b border-[#e5e2de] pb-4">
          <div className="space-y-1">
            <span className="text-xs uppercase font-mono tracking-widest text-[#4a5d4e] font-semibold">
              Feedback
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-black">
              What collaborators say
            </h2>
          </div>
          <span className="text-xs font-mono text-[#757575]">03 / REVIEWS</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {TESTIMONIALS.map((t, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="p-6 rounded-3xl bg-[#f5f2f0] border border-[#e5e2de] flex flex-col justify-between gap-6"
            >
              <p className="text-xs sm:text-sm text-[#000000]/80 italic leading-relaxed">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div>
                <div className="text-xs font-bold text-black">{t.author}</div>
                <div className="text-[11px] text-[#757575] font-mono">{t.role}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
