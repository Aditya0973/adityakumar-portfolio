"use client";

import * as React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { STATS, EXPERIENCES } from "@/data/portfolio";

export default function AboutPage() {
  return (
    <div className="pt-28 pb-16 px-4 sm:px-6 max-w-4xl mx-auto space-y-20">
      {/* Header Bio */}
      <section className="space-y-6 pt-4">
        <span className="text-xs uppercase font-mono tracking-widest text-[#4a5d4e] font-semibold">
          Who Am I
        </span>
        <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-black leading-tight">
          Hey, I&apos;m Aditya Kumar
        </h1>
        <h2 className="text-xl sm:text-2xl font-medium text-[#757575] leading-relaxed">
          Designing Real World Products for Real Users
        </h2>

        <div className="pt-4 space-y-4 text-sm sm:text-base text-[#000000]/80 leading-relaxed">
          <p>
            I&apos;m a UI/UX designer with a strong focus on creating intuitive, user-centered digital experiences. I enjoy breaking down complex problems and shaping them into clear, functional interfaces that feel effortless to use.
          </p>
          <p>
            My work spans web and mobile products, where I combine research, design thinking, and visual clarity to build experiences that balance usability with aesthetics. I care deeply about how users interact with products — from first impression to the smallest interaction.
          </p>
          <p>
            I believe good design is thoughtful, purposeful, and constantly evolving. With every project, I aim to learn, refine my approach, and create digital solutions that are not just visually appealing, but genuinely useful and meaningful.
          </p>
        </div>
      </section>

      {/* Metrics / Stats Grid */}
      <section className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        {STATS.map((stat, idx) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: idx * 0.08 }}
            className="p-6 rounded-3xl bg-[#f5f2f0] border border-[#e5e2de] text-center space-y-1"
          >
            <div className="text-3xl sm:text-4xl font-bold text-black font-serif">
              {stat.value}
            </div>
            <div className="text-xs text-[#757575] font-mono">
              {stat.label}
            </div>
          </motion.div>
        ))}
      </section>

      {/* Experience Timeline */}
      <section className="space-y-6">
        <div className="flex items-center justify-between border-b border-[#e5e2de] pb-4">
          <div className="space-y-1">
            <span className="text-xs uppercase font-mono tracking-widest text-[#4a5d4e] font-semibold">
              Career Journey
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-black">
              My Experience
            </h2>
          </div>
          <span className="text-xs font-mono text-[#757575]">TIMELINE</span>
        </div>

        <div className="space-y-3">
          {EXPERIENCES.map((exp, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: idx * 0.05 }}
              className="p-5 sm:p-6 rounded-2xl bg-[#f5f2f0] border border-[#e5e2de] flex flex-col sm:flex-row sm:items-center justify-between gap-2 hover:border-black/20 transition-colors"
            >
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="text-base font-bold text-black">{exp.company}</h3>
                  {exp.badge && (
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-emerald-100 border border-emerald-300 text-emerald-800 font-semibold">
                      {exp.badge}
                    </span>
                  )}
                </div>
                <p className="text-xs text-[#757575] font-mono mt-0.5">({exp.role})</p>
              </div>

              <div className="text-xs font-mono text-[#757575] shrink-0">
                {exp.period}
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
