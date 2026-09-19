"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  ExternalLink,
  Download,
  Layers,
  LayoutTemplate,
  Maximize2,
  Sparkles,
  ChevronLeft,
  ChevronRight,
  Eye,
  CheckCircle2,
  Clock,
  Compass,
  Briefcase,
  Wrench,
  X,
  FileText
} from "lucide-react";
import { CASE_STUDIES } from "@/data/case-studies";
import { Footer } from "@/components/Footer";
import {
  WashiTape,
  PushPin,
  RealisticPaperClip,
  PostageCancellationStamp,
  AutonomousSpiral,
  AutonomousSpring
} from "@/components/SketchDoodles";

const SLUG_ORDER = ["commit", "bali", "dashboard"];

export default function CaseStudyPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = React.use(params);
  const study = CASE_STUDIES[resolvedParams.slug];

  if (!study) {
    notFound();
  }

  // View mode: "scrapbook" (interactive breakdown) or "deck" (presentation slides)
  const [viewMode, setViewMode] = React.useState<"scrapbook" | "deck">("scrapbook");
  
  // Selected screen tab for the Interactive Device Showcase
  const [activeScreenIdx, setActiveScreenIdx] = React.useState(0);

  // Active slide index for Deck View
  const [activeSlideIdx, setActiveSlideIdx] = React.useState(0);

  // Lightbox modal state
  const [lightboxImg, setLightboxImg] = React.useState<string | null>(null);
  const [lightboxTitle, setLightboxTitle] = React.useState<string | null>(null);

  // Next / Previous projects
  const currentIndex = SLUG_ORDER.indexOf(resolvedParams.slug);
  const nextSlug = SLUG_ORDER[(currentIndex + 1) % SLUG_ORDER.length];
  const prevSlug = SLUG_ORDER[(currentIndex - 1 + SLUG_ORDER.length) % SLUG_ORDER.length];
  const nextStudy = CASE_STUDIES[nextSlug];
  const prevStudy = CASE_STUDIES[prevSlug];

  const activeScreen = study.screens[activeScreenIdx] || study.screens[0];

  return (
    <div className="min-h-screen bg-[#FAF8F5] text-[#121212] selection:bg-[#E65100] selection:text-white relative pb-24 overflow-x-hidden">
      {/* Background Decorative Sketch Elements */}
      <div className="absolute top-24 right-8 pointer-events-none hidden xl:block opacity-60">
        <AutonomousSpiral color="#E65100" size={54} speed={14} />
      </div>
      <div className="absolute top-[600px] left-6 pointer-events-none hidden xl:block opacity-50">
        <AutonomousSpring color="#2E7D32" width={60} height={30} />
      </div>

      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 sm:pt-12 space-y-10">
        {/* Top Navigation Bar */}
        <div className="flex items-center justify-between border-b border-neutral-300 pb-4">
          <Link
            href="/work"
            className="inline-flex items-center gap-2 text-xs font-mono font-bold text-neutral-700 hover:text-black transition-colors px-3 py-1.5 rounded-md bg-white border border-neutral-300 shadow-2xs group"
          >
            <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-1 transition-transform" />
            <span>Back to All Works</span>
          </Link>

          <span className="text-xs font-mono text-neutral-500 hidden sm:inline-block">
            {study.year} Design Archive
          </span>
        </div>

        {/* Hero Section */}
        <header className="relative space-y-6 pt-2">
          <RealisticPaperClip color="#E65100" size={34} className="absolute -left-3 sm:-left-6 -top-3 hidden sm:block" />

          {/* Badges */}
          <div className="flex flex-wrap items-center gap-2 text-xs font-mono pl-0 sm:pl-2">
            <span className="font-bold text-[#E65100] bg-orange-100 px-2.5 py-0.5 rounded-md border border-orange-200">
              UX CASE STUDY
            </span>
            <span className="text-neutral-500 uppercase bg-white px-2 py-0.5 rounded-md border border-neutral-200">
              {study.year} ARCHIVE
            </span>
            <span className="text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-md border border-emerald-200 flex items-center gap-1">
              <Sparkles className="w-3 h-3 text-emerald-600" />
              Interactive Prototype Live
            </span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-black leading-tight font-sans">
            {study.title}
          </h1>

          <p className="text-base sm:text-lg text-neutral-700 leading-relaxed max-w-3xl font-sans">
            {study.description}
          </p>

          {/* Metadata Specs Strip */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-4 rounded-xl bg-white border border-neutral-300 shadow-2xs text-xs font-mono">
            <div>
              <span className="text-neutral-400 uppercase text-[10px] flex items-center gap-1">
                <Briefcase className="w-3 h-3" /> Client
              </span>
              <span className="font-bold text-black mt-1 block">{study.client}</span>
            </div>
            <div>
              <span className="text-neutral-400 uppercase text-[10px] flex items-center gap-1">
                <Compass className="w-3 h-3" /> Service
              </span>
              <span className="font-bold text-black mt-1 block">{study.service}</span>
            </div>
            <div>
              <span className="text-neutral-400 uppercase text-[10px] flex items-center gap-1">
                <Clock className="w-3 h-3" /> Timeline
              </span>
              <span className="font-bold text-black mt-1 block">{study.duration}</span>
            </div>
            <div>
              <span className="text-neutral-400 uppercase text-[10px] flex items-center gap-1">
                <Wrench className="w-3 h-3" /> Tools
              </span>
              <span className="font-bold text-black mt-1 block">{study.tools.join(", ")}</span>
            </div>
          </div>
        </header>

        {/* Figma Prototype & PDF Hub Callout Card */}
        <section className="relative p-6 sm:p-8 rounded-2xl bg-[#121212] text-white border-2 border-black shadow-[6px_6px_0px_0px_#000] overflow-hidden">
          <div className="absolute -right-8 -top-8 w-48 h-48 bg-gradient-to-br from-[#E65100]/20 to-[#0057FF]/20 rounded-full blur-3xl pointer-events-none" />
          
          <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="space-y-2 max-w-xl">
              <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-full bg-orange-500/20 text-[#FF8A65] text-xs font-mono border border-orange-500/30">
                <Sparkles className="w-3 h-3" /> Live Design Artifact
              </div>
              <h3 className="text-xl sm:text-2xl font-bold font-sans tracking-tight text-white">
                Experience the Live Interactive Prototype
              </h3>
              <p className="text-xs sm:text-sm text-neutral-300 font-sans leading-relaxed">
                Test the end-to-end user flows, micro-interactions, responsive states, and transitions directly on Figma, or inspect the full design document.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3 w-full md:w-auto">
              <a
                href={study.prototypeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 md:flex-initial inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-[#E65100] text-white font-mono font-bold text-xs hover:bg-[#D84315] hover:scale-102 transition-all shadow-md active:scale-98"
              >
                <span>Launch Figma Prototype</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
              <a
                href={study.pdfUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 md:flex-initial inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-neutral-800 text-neutral-200 hover:text-white font-mono font-bold text-xs border border-neutral-700 hover:bg-neutral-700 transition-all active:scale-98"
              >
                <Eye className="w-3.5 h-3.5 text-[#0057FF]" />
                <span>View PDF (New Tab)</span>
              </a>
            </div>
          </div>
        </section>

        {/* ---------------------------------------------------------------- */}
        {/* PROMINENT VIEW MODE SWITCHER (BELOW LIVE DESIGN ARTIFACT CARD)    */}
        {/* ---------------------------------------------------------------- */}
        <section className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 p-3 sm:p-4 rounded-2xl bg-white border-2 border-neutral-300 shadow-[4px_4px_0px_0px_#000]">
          <div className="space-y-0.5">
            <span className="text-[10px] font-mono uppercase tracking-wider font-bold text-neutral-400">
              Case Study Navigation Mode
            </span>
            <p className="text-xs font-mono text-neutral-700 font-semibold">
              {viewMode === "scrapbook" ? "Browsing Curated Editorial Story & Screen Specs" : `Browsing Presentation Deck (${study.deckSlides.length} Curated Slides)`}
            </p>
          </div>

          <div className="inline-flex items-center p-1.5 bg-neutral-100 rounded-xl border border-neutral-300 gap-1.5">
            <button
              onClick={() => setViewMode("scrapbook")}
              className={`inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg text-xs font-mono font-bold transition-all ${
                viewMode === "scrapbook"
                  ? "bg-black text-white shadow-sm border border-black scale-102"
                  : "bg-transparent text-neutral-600 hover:text-black hover:bg-neutral-200/60"
              }`}
            >
              <LayoutTemplate className={`w-4 h-4 ${viewMode === "scrapbook" ? "text-[#FF8A65]" : "text-neutral-500"}`} />
              <span>Scrapbook Story</span>
            </button>
            <button
              onClick={() => setViewMode("deck")}
              className={`inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg text-xs font-mono font-bold transition-all ${
                viewMode === "deck"
                  ? "bg-black text-white shadow-sm border border-black scale-102"
                  : "bg-transparent text-neutral-600 hover:text-black hover:bg-neutral-200/60"
              }`}
            >
              <Layers className={`w-4 h-4 ${viewMode === "deck" ? "text-[#60A5FA]" : "text-neutral-500"}`} />
              <span>Full Deck ({study.deckSlides.length} Slides)</span>
            </button>
          </div>
        </section>

        {/* ---------------------------------------------------------------- */}
        {/* VIEW MODE 1: SCRAPBOOK STORY VIEW                                */}
        {/* ---------------------------------------------------------------- */}
        {viewMode === "scrapbook" ? (
          <div className="space-y-16">
            {/* Problem & Solution Sticky Notes */}
            <section className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
              {/* Problem Note */}
              <div className="relative p-6 sm:p-8 rounded-2xl bg-[#FFF9C4] border-2 border-[#FBC02D] shadow-[4px_4px_0px_0px_#FBC02D] space-y-3 rotate-[-0.5deg]">
                <PushPin color="#E65100" className="absolute -top-3 left-6" />
                <span className="text-[10px] font-mono uppercase tracking-wider font-bold text-[#E65100] bg-white/80 px-2 py-0.5 rounded border border-orange-200 inline-block">
                  01 // The Problem Space
                </span>
                <h3 className="text-lg sm:text-xl font-bold font-sans text-neutral-900">
                  User Friction & Key Challenges
                </h3>
                <p className="text-sm text-neutral-800 leading-relaxed font-sans">
                  {study.problem}
                </p>
              </div>

              {/* Solution Note */}
              <div className="relative p-6 sm:p-8 rounded-2xl bg-[#E8F5E9] border-2 border-[#81C784] shadow-[4px_4px_0px_0px_#81C784] space-y-3 rotate-[0.5deg]">
                <WashiTape color="rgba(46, 125, 50, 0.4)" angle="2deg" className="-top-2.5 right-6" />
                <span className="text-[10px] font-mono uppercase tracking-wider font-bold text-[#2E7D32] bg-white/80 px-2 py-0.5 rounded border border-green-200 inline-block">
                  02 // The Design Solution
                </span>
                <h3 className="text-lg sm:text-xl font-bold font-sans text-neutral-900">
                  Tactile, Human-First Architecture
                </h3>
                <p className="text-sm text-neutral-800 leading-relaxed font-sans">
                  {study.solution}
                </p>
              </div>
            </section>

            {/* Hero Mockup Showcase */}
            <section className="space-y-4">
              <div className="flex items-center justify-between text-xs font-mono text-neutral-500">
                <span className="font-bold text-black uppercase tracking-wide flex items-center gap-1.5">
                  <Eye className="w-3.5 h-3.5 text-[#E65100]" /> Design Overview & Hero Mockup
                </span>
                <PostageCancellationStamp text="FIGMA VERIFIED" date="2026" color="#E65100" />
              </div>

              <div
                onClick={() => {
                  setLightboxImg(study.heroImage);
                  setLightboxTitle(`${study.title} â€” Overview Mockup`);
                }}
                className="relative rounded-2xl overflow-hidden border-2 border-neutral-300 bg-white shadow-md cursor-zoom-in group"
              >
                <div className="relative aspect-[16/9] w-full bg-neutral-100">
                  <Image
                    src={study.heroImage}
                    alt={study.title}
                    fill
                    className="object-contain p-4 group-hover:scale-101 transition-transform duration-300"
                    sizes="(max-width: 1200px) 100vw, 1200px"
                    priority
                  />
                </div>
                <div className="absolute bottom-3 right-3 px-3 py-1 rounded-full bg-black/75 backdrop-blur text-white text-[11px] font-mono flex items-center gap-1.5 opacity-0 group-hover:opacity-100 transition-opacity">
                  <Maximize2 className="w-3 h-3" /> Click to Zoom
                </div>
              </div>
            </section>

            {/* Interactive Screen Showcase Component */}
            <section className="space-y-6 pt-4">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-neutral-300 pb-3">
                <div>
                  <h2 className="text-xl sm:text-2xl font-bold font-sans text-black">
                    Interactive Screen Inspector
                  </h2>
                  <p className="text-xs font-mono text-neutral-500 mt-0.5">
                    Select individual screens below to examine UI components, typography, and micro-layouts
                  </p>
                </div>
                <span className="text-xs font-mono text-[#E65100] font-bold bg-orange-50 px-2.5 py-1 rounded border border-orange-200">
                  {study.screens.length} Production Screens
                </span>
              </div>

              {/* Screen Category Tabs */}
              <div className="flex flex-wrap gap-2">
                {study.screens.map((screen, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveScreenIdx(idx)}
                    className={`px-3 py-2 rounded-xl text-xs font-mono font-bold transition-all text-left flex items-center gap-2 border ${
                      activeScreenIdx === idx
                        ? "bg-black text-white border-black shadow-[3px_3px_0px_0px_#E65100]"
                        : "bg-white text-neutral-700 border-neutral-300 hover:border-black hover:bg-neutral-50"
                    }`}
                  >
                    <span className="w-4 h-4 rounded-full bg-neutral-200 text-neutral-800 text-[10px] flex items-center justify-center font-bold">
                      {idx + 1}
                    </span>
                    <span>{screen.name}</span>
                  </button>
                ))}
              </div>

              {/* Active Screen Display Device Bezel */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-white p-6 sm:p-8 rounded-2xl border-2 border-neutral-300 shadow-sm">
                {/* Device Frame (Left/Main) */}
                <div className="lg:col-span-8 flex justify-center">
                  <div
                    onClick={() => {
                      setLightboxImg(activeScreen.image);
                      setLightboxTitle(`${study.title} â€” ${activeScreen.title}`);
                    }}
                    className="relative w-full max-w-2xl bg-neutral-100 rounded-xl overflow-hidden border border-neutral-300 shadow-inner group cursor-zoom-in"
                  >
                    {/* Frame Top Bar */}
                    <div className="flex items-center justify-between px-3 py-2 bg-neutral-200 border-b border-neutral-300 text-[11px] font-mono text-neutral-600">
                      <div className="flex items-center gap-1.5">
                        <span className="w-2.5 h-2.5 rounded-full bg-red-400 inline-block" />
                        <span className="w-2.5 h-2.5 rounded-full bg-yellow-400 inline-block" />
                        <span className="w-2.5 h-2.5 rounded-full bg-green-400 inline-block" />
                      </div>
                      <span className="truncate max-w-[200px]">{activeScreen.title}</span>
                      <Maximize2 className="w-3.5 h-3.5 text-neutral-500" />
                    </div>

                    <div className="relative aspect-[4/3] sm:aspect-[16/10] w-full bg-[#FAF8F5]">
                      <Image
                        src={activeScreen.image}
                        alt={activeScreen.title}
                        fill
                        className="object-contain p-2 group-hover:scale-102 transition-transform duration-300"
                        sizes="(max-width: 900px) 100vw, 800px"
                      />
                    </div>
                  </div>
                </div>

                {/* Screen Information Card (Right) */}
                <div className="lg:col-span-4 space-y-4">
                  <span className="text-[10px] font-mono uppercase tracking-wider font-bold text-[#E65100] bg-orange-100 px-2 py-0.5 rounded border border-orange-200 inline-block">
                    {activeScreen.category}
                  </span>
                  <h3 className="text-xl font-bold font-sans text-black">
                    {activeScreen.title}
                  </h3>
                  <p className="text-sm text-neutral-700 leading-relaxed font-sans">
                    {activeScreen.description}
                  </p>
                  <div className="pt-2">
                    <button
                      onClick={() => {
                        setLightboxImg(activeScreen.image);
                        setLightboxTitle(`${study.title} â€” ${activeScreen.title}`);
                      }}
                      className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-neutral-100 hover:bg-neutral-200 text-xs font-mono font-bold text-neutral-800 transition-colors border border-neutral-300"
                    >
                      <Maximize2 className="w-3.5 h-3.5 text-[#E65100]" />
                      <span>Inspect Full Resolution</span>
                    </button>
                  </div>
                </div>
              </div>
            </section>

            {/* Wireframe Evolution Section */}
            {study.wireframes && study.wireframes.length > 0 && (
              <section className="space-y-6 pt-4">
                <div className="border-b border-neutral-300 pb-3">
                  <span className="text-[10px] font-mono uppercase tracking-wider font-bold text-[#2E7D32] bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200 inline-block">
                    03 // Iteration & Architecture
                  </span>
                  <h2 className="text-xl sm:text-2xl font-bold font-sans text-black mt-1">
                    Early Wireframes & Structural Blueprints
                  </h2>
                  <p className="text-xs font-mono text-neutral-500 mt-0.5">
                    Tracing low-fidelity layout concepts, information hierarchy, and user decision paths
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {study.wireframes.map((wire, idx) => (
                    <div
                      key={idx}
                      onClick={() => {
                        setLightboxImg(wire.image);
                        setLightboxTitle(wire.title);
                      }}
                      className="relative p-4 rounded-2xl bg-white border-2 border-dashed border-neutral-300 hover:border-black shadow-xs space-y-3 cursor-zoom-in group transition-all"
                    >
                      <div className="relative aspect-[16/10] w-full bg-neutral-50 rounded-lg overflow-hidden border border-neutral-200">
                        <Image
                          src={wire.image}
                          alt={wire.title}
                          fill
                          className="object-contain p-2 group-hover:scale-102 transition-transform duration-300"
                          sizes="(max-width: 768px) 100vw, 500px"
                        />
                      </div>
                      <div>
                        <h4 className="text-sm font-bold font-sans text-black">{wire.title}</h4>
                        <p className="text-xs text-neutral-600 mt-1 font-sans leading-relaxed">
                          {wire.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Key Deliverables & Outcomes */}
            <section className="p-6 sm:p-8 rounded-2xl bg-white border-2 border-black shadow-[5px_5px_0px_0px_#000] space-y-4">
              <span className="text-[10px] font-mono uppercase tracking-wider font-bold text-[#0057FF] bg-blue-50 px-2 py-0.5 rounded border border-blue-200 inline-block">
                04 // Impact & Key Learnings
              </span>
              <h2 className="text-xl sm:text-2xl font-bold font-sans text-black">
                Design Takeaways & Deliverables
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
                {study.keyTakeaways.map((takeaway, idx) => (
                  <div key={idx} className="p-4 rounded-xl bg-neutral-50 border border-neutral-200 flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-[#2E7D32] shrink-0 mt-0.5" />
                    <p className="text-xs font-mono text-neutral-800 leading-relaxed font-semibold">
                      {takeaway}
                    </p>
                  </div>
                ))}
              </div>
            </section>
          </div>
        ) : (
          /* ---------------------------------------------------------------- */
          /* VIEW MODE 2: PRESENTATION DECK VIEWER                             */
          /* ---------------------------------------------------------------- */
          <div className="space-y-8">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-4 rounded-xl bg-white border border-neutral-300 shadow-2xs">
              <div className="flex items-center gap-3">
                <span className="text-xs font-mono font-bold text-[#0057FF] bg-blue-50 px-2.5 py-1 rounded border border-blue-200">
                  SLIDE {activeSlideIdx + 1} OF {study.deckSlides.length}
                </span>
                <span className="text-xs font-mono text-neutral-500">
                  Presentation Deck Archive
                </span>
              </div>

              {/* Slide Controls */}
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setActiveSlideIdx(prev => Math.max(0, prev - 1))}
                  disabled={activeSlideIdx === 0}
                  className="p-2 rounded-lg bg-neutral-100 hover:bg-neutral-200 disabled:opacity-30 disabled:cursor-not-allowed border border-neutral-300 transition-colors"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setActiveSlideIdx(prev => Math.min(study.deckSlides.length - 1, prev + 1))}
                  disabled={activeSlideIdx === study.deckSlides.length - 1}
                  className="p-2 rounded-lg bg-neutral-100 hover:bg-neutral-200 disabled:opacity-30 disabled:cursor-not-allowed border border-neutral-300 transition-colors"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
                <a
                  href={study.pdfUrl}
                  download
                  className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg bg-[#E65100] text-white text-xs font-mono font-bold hover:bg-[#D84315] transition-all ml-2"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Download PDF</span>
                </a>
              </div>
            </div>

            {/* Active Presentation Slide */}
            <div
              onClick={() => {
                setLightboxImg(study.deckSlides[activeSlideIdx]);
                setLightboxTitle(`${study.title} â€” Slide ${activeSlideIdx + 1}`);
              }}
              className="relative aspect-[16/9] w-full bg-white rounded-2xl overflow-hidden border-2 border-black shadow-[6px_6px_0px_0px_#000] cursor-zoom-in group"
            >
              <Image
                src={study.deckSlides[activeSlideIdx]}
                alt={`Slide ${activeSlideIdx + 1}`}
                fill
                className="object-contain p-2"
                sizes="(max-width: 1200px) 100vw, 1200px"
                priority
              />
              <div className="absolute bottom-3 right-3 px-3 py-1.5 rounded-full bg-black/80 backdrop-blur text-white text-xs font-mono flex items-center gap-1.5 opacity-0 group-hover:opacity-100 transition-opacity">
                <Maximize2 className="w-3.5 h-3.5" /> Click to Zoom Slide
              </div>
            </div>

            {/* Slide Strip Thumbnails */}
            <div className="space-y-2">
              <span className="text-xs font-mono text-neutral-500 block">
                Slide Navigator:
              </span>
              <div className="flex gap-3 overflow-x-auto pb-4 pt-1 snap-x scrollbar-thin">
                {study.deckSlides.map((slide, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveSlideIdx(idx)}
                    className={`relative shrink-0 w-32 sm:w-44 aspect-[16/9] rounded-lg overflow-hidden border-2 transition-all snap-start ${
                      activeSlideIdx === idx
                        ? "border-[#0057FF] ring-2 ring-[#0057FF]/30 scale-102"
                        : "border-neutral-300 opacity-70 hover:opacity-100 hover:border-neutral-500"
                    }`}
                  >
                    <Image
                      src={slide}
                      alt={`Thumbnail ${idx + 1}`}
                      fill
                      className="object-contain bg-white"
                      sizes="200px"
                    />
                    <span className="absolute bottom-1 right-1 px-1.5 py-0.5 rounded bg-black/75 text-white text-[9px] font-mono">
                      {idx + 1}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* ---------------------------------------------------------------- */}
        {/* FOOTER NAVIGATION & NEXT PROJECT CARD                            */}
        {/* ---------------------------------------------------------------- */}
        <section className="pt-12 border-t-2 border-neutral-300">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Previous Project */}
            <Link
              href={`/work/${prevStudy.slug}`}
              className="p-5 rounded-2xl bg-white border-2 border-neutral-300 hover:border-black shadow-2xs hover:shadow-md transition-all group flex flex-col justify-between"
            >
              <div>
                <span className="text-[10px] font-mono text-neutral-400 uppercase flex items-center gap-1">
                  <ArrowLeft className="w-3 h-3 group-hover:-translate-x-1 transition-transform" /> Previous Case Study
                </span>
                <h4 className="text-base font-bold font-sans text-black mt-1 group-hover:text-[#E65100] transition-colors">
                  {prevStudy.title}
                </h4>
              </div>
              <span className="text-xs font-mono text-neutral-500 mt-3 block">{prevStudy.client}</span>
            </Link>

            {/* Next Project */}
            <Link
              href={`/work/${nextStudy.slug}`}
              className="p-5 rounded-2xl bg-white border-2 border-neutral-300 hover:border-black shadow-2xs hover:shadow-md transition-all group flex flex-col justify-between text-right"
            >
              <div>
                <span className="text-[10px] font-mono text-neutral-400 uppercase flex items-center justify-end gap-1">
                  Next Case Study <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                </span>
                <h4 className="text-base font-bold font-sans text-black mt-1 group-hover:text-[#E65100] transition-colors">
                  {nextStudy.title}
                </h4>
              </div>
              <span className="text-xs font-mono text-neutral-500 mt-3 block">{nextStudy.client}</span>
            </Link>
          </div>
        </section>
      </main>

      {/* ---------------------------------------------------------------- */}
      {/* LIGHTBOX ZOOM MODAL                                               */}
      {/* ---------------------------------------------------------------- */}
      <AnimatePresence>
        {lightboxImg && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex flex-col items-center justify-center p-4 sm:p-8"
            onClick={() => setLightboxImg(null)}
          >
            {/* Top Bar */}
            <div
              className="w-full max-w-5xl flex items-center justify-between pb-3 text-white text-xs font-mono"
              onClick={e => e.stopPropagation()}
            >
              <span className="truncate max-w-md font-bold">{lightboxTitle || "Image View"}</span>
              <button
                onClick={() => setLightboxImg(null)}
                className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Zoomed Image */}
            <motion.div
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.95 }}
              className="relative w-full max-w-5xl h-[80vh] bg-[#121212] rounded-2xl overflow-hidden border border-white/20 shadow-2xl"
              onClick={e => e.stopPropagation()}
            >
              <Image
                src={lightboxImg}
                alt={lightboxTitle || "Zoomed Image"}
                fill
                className="object-contain p-2"
                sizes="1200px"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="mt-16">
        <Footer />
      </div>
    </div>
  );
}