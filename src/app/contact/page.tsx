"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { Copy, CheckCircle2, Send, MapPin, Mail, Phone, ArrowUpRight } from "lucide-react";
import { playPop, playSuccess } from "@/utils/soundEffects";
import {
  WashiTape,
  PushPin,
  RealisticPaperClip,
  PostageCancellationStamp,
  AutonomousSpiral,
  AutonomousSpring,
  AutonomousAsterisk,
  SparkleStar,
  DoodleSmile,
  WavyUnderline
} from "@/components/SketchDoodles";
import { Footer } from "@/components/Footer";

export default function ContactPage() {
  const [copied, setCopied] = React.useState(false);
  const [formSubmitted, setFormSubmitted] = React.useState(false);
  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    message: ""
  });

  const copyEmail = () => {
    navigator.clipboard.writeText("adityakumar4727@gmail.com");
    setCopied(true);
    playSuccess();
    setTimeout(() => setCopied(false), 2200);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    playSuccess();
    setFormSubmitted(true);
  };

  return (
    <div className="pt-16 sm:pt-20 pb-28 px-4 sm:px-8 max-w-5xl mx-auto space-y-16 relative">
      {/* Decorative Autonomous Floating Doodles */}
      <div className="absolute top-12 right-6 hidden lg:block pointer-events-none">
        <AutonomousSpiral color="#E65100" size={48} speed={12} />
      </div>
      <div className="absolute top-44 left-2 hidden lg:block pointer-events-none">
        <AutonomousSpring color="#10B981" width={70} height={35} />
      </div>

      {/* Header */}
      <section className="space-y-4 pt-4 relative">
        <div className="flex items-center gap-2">
          <span className="text-xs font-mono font-bold text-[#E65100] bg-[#FFF7ED] px-2.5 py-0.5 rounded-md border border-[#E65100]/20 shadow-2xs">
            LET&apos;S CONNECT
          </span>
          <span className="text-xs font-mono text-neutral-500 uppercase">
            POSTAL &amp; DIGITAL CORRESPONDENCE
          </span>
        </div>

        <div className="relative inline-block">
          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-[#121212] leading-[1.1] font-sans">
            Have a Project in Mind? <br />
            <span className="font-serif italic font-normal text-[#E65100]">Let&apos;s craft something memorable.</span>
          </h1>
          <div className="w-48 mt-2">
            <WavyUnderline color="#6864F6" />
          </div>
        </div>

        <p className="text-sm sm:text-base text-neutral-600 max-w-xl leading-relaxed font-sans">
          Whether you need a full product design cycle, mobile interface, design system tokens, or high-impact 3D assets, I&apos;m ready to collaborate.
        </p>
      </section>

      {/* Main Grid: Postal Letter Form & Direct Info */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start relative">
        {/* Contact Form Styled as Airmail Postal Envelope / Stationary */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:col-span-7 p-6 sm:p-8 rounded-3xl bg-[#FAF8F5] border border-neutral-300/80 shadow-xs hover:shadow-md transition-shadow relative overflow-visible"
        >
          {/* Top Washi Tape and Paper Clip */}
          <WashiTape color="#FFF4CC" angle="-2deg" className="-top-3 left-10" />
          <div className="absolute -top-4 right-14 z-30">
            <RealisticPaperClip color="#E65100" size={32} />
          </div>

          {/* Airmail / Postal Cancellation Stamp Header */}
          <div className="flex items-start justify-between border-b border-dashed border-neutral-300 pb-4 mb-6">
            <div>
              <span className="text-[10px] font-mono tracking-widest uppercase text-neutral-500">
                LETTER NO. 04 / DISPATCH
              </span>
              <h2 className="text-lg font-bold text-black font-sans">Send a Message</h2>
            </div>
            <PostageCancellationStamp
              text="STUDIO POST"
              date="2026"
              color="#E65100"
              className="scale-90 origin-right"
            />
          </div>

          {formSubmitted ? (
            <div className="py-12 text-center space-y-4">
              <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto border border-emerald-300 shadow-xs">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-black font-sans">Message Dispatched!</h3>
              <p className="text-xs sm:text-sm text-neutral-600 max-w-sm mx-auto">
                Thank you for reaching out. I&apos;ll reply to your inbox ({formData.email || "email"}) promptly.
              </p>
              <button
                type="button"
                onClick={() => setFormSubmitted(false)}
                className="mt-4 px-6 py-2.5 rounded-full bg-[#E65100] text-white text-xs font-mono font-bold hover:bg-[#C2410C] transition-all shadow-xs cursor-pointer"
              >
                SEND ANOTHER LETTER
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-1.5">
                <label className="text-xs font-mono font-bold text-neutral-700 uppercase block">
                  Your Name
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="e.g. Maya Lin or Studio Lewis"
                  className="w-full px-4 py-3 rounded-2xl bg-white border border-neutral-300 text-sm text-black placeholder:text-neutral-400 focus:outline-none focus:border-[#E65100] transition-colors shadow-2xs"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-mono font-bold text-neutral-700 uppercase block">
                  Your Email
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="name@company.com"
                  className="w-full px-4 py-3 rounded-2xl bg-white border border-neutral-300 text-sm text-black placeholder:text-neutral-400 focus:outline-none focus:border-[#E65100] transition-colors shadow-2xs"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-mono font-bold text-neutral-700 uppercase block">
                  Project Details
                </label>
                <textarea
                  rows={4}
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Tell me about your product, timeline, and deliverables..."
                  className="w-full px-4 py-3 rounded-2xl bg-white border border-neutral-300 text-sm text-black placeholder:text-neutral-400 focus:outline-none focus:border-[#E65100] transition-colors resize-none shadow-2xs"
                />
              </div>

              <button
                type="submit"
                onClick={() => playPop()}
                className="w-full py-3.5 rounded-full bg-[#E65100] text-white text-xs font-mono font-bold hover:bg-[#C2410C] transition-all shadow-xs flex items-center justify-center gap-2 active:scale-[0.99] cursor-pointer"
              >
                <span>DISPATCH MESSAGE</span>
                <Send className="w-3.5 h-3.5" />
              </button>
            </form>
          )}
        </motion.div>

        {/* Quick Contact & Info Column */}
        <div className="md:col-span-5 space-y-4 relative">
          {/* PushPin on Top */}
          <div className="absolute -top-3 right-6 z-20">
            <PushPin color="#6864F6" />
          </div>

          <div className="p-6 rounded-3xl bg-white border border-neutral-300 shadow-xs space-y-4 relative">
            <WashiTape color="#EADDFE" angle="2deg" className="-top-3 left-6" />

            <div className="flex items-center justify-between pt-2">
              <h3 className="text-base font-bold text-black font-sans">Direct Channels</h3>
              <span className="text-[10px] font-mono bg-[#FFF7ED] text-[#E65100] font-bold px-2 py-0.5 rounded-md border border-[#E65100]/20">
                FAST DISPATCH
              </span>
            </div>

            <p className="text-xs text-neutral-600 leading-relaxed">
              Reach out directly to start a conversation or inquire about availability.
            </p>

            <button
              type="button"
              onClick={copyEmail}
              className="w-full flex items-center justify-between p-3.5 rounded-2xl bg-[#FAF8F5] border border-neutral-200 hover:border-[#E65100] text-xs font-mono text-black transition-all cursor-pointer group"
            >
              <span className="truncate flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#E65100]" />
                <span className="truncate">adityakumar4727@gmail.com</span>
              </span>
              {copied ? (
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 ml-2" />
              ) : (
                <Copy className="w-4 h-4 text-neutral-400 group-hover:text-black shrink-0 ml-2" />
              )}
            </button>

            <div className="p-3.5 rounded-2xl bg-[#FAF8F5] border border-neutral-200 text-xs font-mono text-black flex items-center gap-2">
              <Phone className="w-4 h-4 text-[#E65100]" />
              <span>+91 7291065019</span>
            </div>

            <div className="p-3.5 rounded-2xl bg-[#FAF8F5] border border-neutral-200 text-xs font-mono text-black flex items-center gap-2">
              <MapPin className="w-4 h-4 text-[#E65100]" />
              <span>UP, India (UTC+5:30)</span>
            </div>
          </div>

          {/* Status Note Styled as Notebook Card */}
          <div className="p-6 rounded-3xl bg-[#FFF7ED] text-black border border-[#E65100]/30 shadow-xs space-y-2 relative">
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-mono uppercase tracking-wider text-[#E65100] font-bold">
                STATUS
              </span>
              <span className="inline-flex items-center gap-1 text-[10px] font-mono text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded-full border border-emerald-300">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                AVAILABLE
              </span>
            </div>
            <div className="text-base font-bold font-sans">READY TO WORK</div>
            <p className="text-xs text-neutral-700 leading-relaxed">
              Open for full-time product designer roles, contract UI/UX design, design system builds, and 3D visual campaigns.
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
