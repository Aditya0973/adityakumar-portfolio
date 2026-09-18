"use client";

import * as React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { PROJECTS } from "@/data/portfolio";
import { Footer } from "@/components/Footer";

export default function WorkPage() {
  return (
    <div className="pt-20 lg:pt-12 pb-16 px-4 sm:px-8 max-w-4xl mx-auto space-y-16">
      {/* ========================================================================= */}
      {/* HEADER: Matching user's Screenshot 3 ("My Portfolio - Every project built...") */}
      {/* ========================================================================= */}
      <section className="text-center space-y-2 pt-4">
        <span className="text-[10px] font-mono uppercase tracking-widest text-[#4a5d4e] font-bold">
          My Portfolio
        </span>
        <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-black leading-tight">
          Every project built to inspire users
        </h1>
      </section>

      {/* ========================================================================= */}
      {/* 2x2 PROJECT GRID: Bali, Admin Dashboard, Commit, WIP (Exact Screenshot) */}
      {/* ========================================================================= */}
      <section className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {PROJECTS.map((proj, idx) => (
          <motion.div
            key={proj.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: idx * 0.06 }}
          >
            <Link
              href={proj.link}
              className="group relative block rounded-3xl overflow-hidden border border-[#e5e2de] bg-[#edeae7] aspect-[16/10] shadow-sm hover:border-black/40 hover:shadow-xl transition-all duration-300"
            >
              <img
                src={proj.image}
                alt={proj.title}
                className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                loading="lazy"
              />

              {/* Bottom Dark Gradient Info Tag (Matching screenshot) */}
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent p-5 flex items-center justify-between text-white">
                <span className="text-base font-bold tracking-tight">{proj.title}</span>
                <span className="text-[11px] font-mono opacity-80">{proj.category} / {proj.year}</span>
              </div>
            </Link>
          </motion.div>
        ))}
      </section>

      {/* Giant Connect Banner & Bottom Footer */}
      <Footer />
    </div>
  );
}
