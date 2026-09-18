"use client";

import * as React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { PROJECTS } from "@/data/portfolio";

export default function WorkPage() {
  return (
    <div className="pt-28 pb-16 px-4 sm:px-6 max-w-4xl mx-auto space-y-16">
      {/* Header */}
      <section className="space-y-4 pt-4">
        <span className="text-xs uppercase font-mono tracking-widest text-[#4a5d4e] font-semibold">
          Portfolio
        </span>
        <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-black leading-tight">
          Every project built to inspire users
        </h1>
        <p className="text-sm sm:text-base text-[#757575] max-w-xl leading-relaxed">
          A showcase of creative UI/UX case studies, product systems, and mobile prototypes crafted with precision.
        </p>
      </section>

      {/* Projects Grid */}
      <section className="grid grid-cols-1 gap-8">
        {PROJECTS.map((proj, idx) => (
          <motion.div
            key={proj.id}
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: idx * 0.1 }}
          >
            <Link
              href={proj.link}
              className="group block rounded-3xl bg-[#f5f2f0] border border-[#e5e2de] overflow-hidden hover:border-black/30 hover:shadow-xl transition-all duration-500"
            >
              {/* Image Container */}
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

              {/* Meta */}
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
      </section>
    </div>
  );
}
