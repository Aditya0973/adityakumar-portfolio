"use client";

import * as React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { CASE_STUDIES } from "@/data/case-studies";

export default function CaseStudyPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = React.use(params);
  const study = CASE_STUDIES[resolvedParams.slug];

  if (!study) {
    notFound();
  }

  return (
    <div className="pt-28 pb-20 px-4 sm:px-6 max-w-4xl mx-auto space-y-12">
      {/* Back Button */}
      <div>
        <Link
          href="/work"
          className="inline-flex items-center gap-2 text-xs font-mono text-[#757575] hover:text-black transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Go Back</span>
        </Link>
      </div>

      {/* Header Info */}
      <section className="space-y-6">
        <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-black leading-tight">
          {study.title}
        </h1>

        <p className="text-sm sm:text-base text-[#000000]/80 leading-relaxed max-w-2xl">
          {study.description}
        </p>

        {/* Project Meta Details Bar */}
        <div className="grid grid-cols-3 gap-4 pt-4 border-y border-[#e5e2de] py-4 text-xs font-mono">
          <div>
            <span className="text-[#757575] uppercase block text-[10px]">Client</span>
            <span className="font-semibold text-black mt-0.5 block">{study.client}</span>
          </div>
          <div>
            <span className="text-[#757575] uppercase block text-[10px]">Service</span>
            <span className="font-semibold text-black mt-0.5 block">{study.service}</span>
          </div>
          <div>
            <span className="text-[#757575] uppercase block text-[10px]">Year</span>
            <span className="font-semibold text-black mt-0.5 block">{study.year}</span>
          </div>
        </div>
      </section>

      {/* Case Study Images Stream */}
      <section className="space-y-6 pt-4">
        <div className="flex items-center gap-2 text-xs font-mono text-[#757575]">
          <span>Case Study Below</span>
          <span>👇</span>
        </div>

        <div className="space-y-6">
          {study.images.map((imgUrl, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5 }}
              className="rounded-3xl overflow-hidden border border-[#e5e2de] bg-[#edeae7] shadow-sm"
            >
              <img
                src={imgUrl}
                alt={`${study.title} design capture ${idx + 1}`}
                className="w-full h-auto object-cover"
                loading="lazy"
              />
            </motion.div>
          ))}
        </div>
      </section>

      {/* Footer Return Link */}
      <div className="pt-8 border-t border-[#e5e2de] flex justify-between items-center text-xs font-mono">
        <Link
          href="/work"
          className="hover:text-[#4a5d4e] transition-colors inline-flex items-center gap-1 text-black font-semibold"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to All Projects</span>
        </Link>
        <Link
          href="/contact"
          className="hover:text-[#4a5d4e] transition-colors inline-flex items-center gap-1 text-black font-semibold"
        >
          <span>Start a Project</span>
          <ArrowUpRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  );
}
