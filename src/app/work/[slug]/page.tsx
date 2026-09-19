"use client";

import * as React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { CASE_STUDIES } from "@/data/case-studies";
import { Footer } from "@/components/Footer";
import {
  WashiTape,
  PushPin,
  RealisticPaperClip,
  PostageCancellationStamp,
  AutonomousSpiral,
  AutonomousSpring,
  AutonomousAsterisk
} from "@/components/SketchDoodles";

export default function CaseStudyPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = React.use(params);
  const study = CASE_STUDIES[resolvedParams.slug];

  if (!study) {
    notFound();
  }

  return (
    <div className="relative pt-12 sm:pt-16 pb-20 px-4 sm:px-8 max-w-4xl mx-auto space-y-12 overflow-x-hidden">
      {/* Background Scrapbook Doodles */}
      <div className="absolute top-20 right-6 pointer-events-none hidden lg:block opacity-75">
        <AutonomousSpiral color="#E65100" size={48} speed={12} />
      </div>

      {/* Back Button */}
      <div className="pt-4">
        <Link
          href="/work"
          className="inline-flex items-center gap-2 text-xs font-mono text-neutral-600 hover:text-black transition-colors px-3 py-1.5 rounded-full bg-white border border-neutral-300 shadow-2xs"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to All Projects</span>
        </Link>
      </div>

      {/* Header Info */}
      <section className="space-y-6 relative">
        <RealisticPaperClip color="#E65100" size={32} className="absolute -left-8 -top-3 hidden sm:block" />

        <div className="flex items-center gap-2">
          <span className="text-xs font-mono font-bold text-[#E65100] bg-orange-100 px-2.5 py-0.5 rounded-md border border-orange-200">
            CASE STUDY
          </span>
          <span className="text-xs font-mono text-neutral-500 uppercase">
            {study.year} ARCHIVE
          </span>
        </div>

        <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-black leading-tight font-sans">
          {study.title}
        </h1>

        <p className="text-sm sm:text-base text-neutral-700 leading-relaxed max-w-2xl font-sans">
          {study.description}
        </p>

        {/* Project Meta Details Bar */}
        <div className="grid grid-cols-3 gap-4 pt-4 border-y border-neutral-300 py-4 text-xs font-mono">
          <div>
            <span className="text-neutral-400 uppercase block text-[10px]">Client</span>
            <span className="font-semibold text-black mt-0.5 block">{study.client}</span>
          </div>
          <div>
            <span className="text-neutral-400 uppercase block text-[10px]">Service</span>
            <span className="font-semibold text-black mt-0.5 block">{study.service}</span>
          </div>
          <div>
            <span className="text-neutral-400 uppercase block text-[10px]">Year</span>
            <span className="font-semibold text-black mt-0.5 block">{study.year}</span>
          </div>
        </div>
      </section>

      {/* Case Study Images Stream */}
      <section className="space-y-8 pt-2">
        <div className="flex items-center justify-between text-xs font-mono text-neutral-500">
          <div className="flex items-center gap-2">
            <span>Visual Exploration</span>
            <span>👇</span>
          </div>
          <PostageCancellationStamp text="CASE STUDY ARCHIVE" date="2026" color="#E65100" />
        </div>

        <div className="space-y-8">
          {study.images.map((imgUrl, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4 }}
              className="relative rounded-3xl overflow-hidden border border-neutral-300 bg-white p-3 shadow-xs"
            >
              {idx === 0 && <WashiTape color="#FFF4CC" angle="-2deg" className="-top-3 right-8" />}
              {idx === 1 && <PushPin color="#10B981" className="absolute -top-2 left-8 z-30" />}

              <div className="rounded-2xl overflow-hidden bg-neutral-900 border border-neutral-200">
                <img
                  src={imgUrl}
                  alt={`${study.title} design capture ${idx + 1}`}
                  className="w-full h-auto object-cover"
                  loading="lazy"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Footer Return Link */}
      <div className="pt-8 border-t border-neutral-300 flex justify-between items-center text-xs font-mono">
        <Link
          href="/work"
          className="hover:text-[#E65100] transition-colors inline-flex items-center gap-1 text-black font-semibold"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to All Projects</span>
        </Link>
        <Link
          href="/contact"
          className="hover:text-[#E65100] transition-colors inline-flex items-center gap-1 text-black font-semibold"
        >
          <span>Start a Project</span>
          <ArrowUpRight className="w-4 h-4" />
        </Link>
      </div>

      <Footer />
    </div>
  );
}
