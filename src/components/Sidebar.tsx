"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Volume2, VolumeX, Palette, Menu, X, Home, User, Briefcase, Mail, Download, Sparkles } from "lucide-react";
import { usePortfolioTheme, THEME_CONFIGS, ThemePreset } from "@/context/ThemeContext";
import { playFigmaClick, playPop, toggleSound } from "@/utils/soundEffects";
import { WashiTape, RealisticPaperClip, TapeSticker } from "./SketchDoodles";

const NAV_ITEMS = [
  { label: "Home", href: "/", icon: Home, color: "#E65100", tag: "01" },
  { label: "About", href: "/about", icon: User, color: "#0057FF", tag: "02" },
  { label: "Case Studies", href: "/work", icon: Briefcase, color: "#10B981", tag: "03" },
  { label: "Contact", href: "/contact", icon: Mail, color: "#6864F6", tag: "04" }
];

const SOCIAL_LINKS = [
  { label: "LinkedIn", href: "https://www.linkedin.com/in/adityakumar0973/" },
  { label: "Behance", href: "https://www.behance.net/1c5da35f" },
  { label: "GitHub", href: "https://github.com/Aditya0973" }
];

export function Sidebar() {
  const pathname = usePathname();
  const { theme, setTheme, soundEnabled, toggleSound: toggleAudio } = usePortfolioTheme();
  const [paletteOpen, setPaletteOpen] = React.useState(false);
  const [mobileDrawerOpen, setMobileDrawerOpen] = React.useState(false);

  const handleNavClick = () => {
    playFigmaClick();
    setMobileDrawerOpen(false);
  };

  const handleSoundToggle = () => {
    toggleAudio();
    toggleSound(!soundEnabled);
  };

  return (
    <>
      {/* MOBILE TOP SCRAPBOOK BAR */}
      <div className="lg:hidden fixed top-0 left-0 right-0 z-40 bg-[#FAF8F5]/95 backdrop-blur-md border-b border-neutral-300 px-4 py-3 flex items-center justify-between shadow-xs">
        <Link href="/" className="flex items-center gap-2.5">
          <div className="relative w-8 h-8 rounded-full overflow-hidden border border-neutral-300 shrink-0 shadow-2xs">
            <img
              src="/media/me.jpeg"
              alt="Aditya Kumar"
              className="w-full h-full object-cover object-top"
            />
          </div>
          <div>
            <div className="text-xs font-bold text-black leading-tight font-sans">Aditya Kumar</div>
            <div className="text-[10px] font-mono text-neutral-500 uppercase">Product &amp; UI/UX</div>
          </div>
        </Link>

        <div className="flex items-center gap-2">
          <a
            href="/resume.pdf"
            download="Resume_Aditya_Kumar_2026.pdf"
            className="p-1.5 px-2.5 rounded-xl bg-white border border-neutral-300 text-black text-xs font-mono font-bold flex items-center gap-1 hover:bg-neutral-50 shadow-2xs transition-colors"
            title="Download Resume PDF"
          >
            <Download className="w-3.5 h-3.5" />
            <span className="text-[11px]">Resume</span>
          </a>

          <button
            onClick={() => setMobileDrawerOpen(!mobileDrawerOpen)}
            className="p-2 rounded-xl bg-white border border-neutral-300 text-black cursor-pointer shadow-2xs"
            aria-label="Toggle menu"
          >
            {mobileDrawerOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {/* Mobile Scrapbook Drawer */}
      <AnimatePresence>
        {mobileDrawerOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="lg:hidden fixed inset-x-0 top-[57px] bg-[#FAF8F5] border-b border-neutral-300 z-30 p-6 space-y-4 shadow-xl"
          >
            <nav className="flex flex-col gap-1.5">
              {NAV_ITEMS.map((item) => {
                const isActive = item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={handleNavClick}
                    className={`px-4 py-3 rounded-2xl text-xs font-mono font-bold flex items-center justify-between transition-all ${
                      isActive
                        ? "bg-white text-black shadow-sm border border-neutral-300"
                        : "text-neutral-600 hover:text-black hover:bg-white/60"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <span className="w-2 h-2 rounded-full" style={{ backgroundColor: item.color }} />
                      <span>{item.label}</span>
                    </div>
                    <span className="text-[10px] text-neutral-400">{item.tag}</span>
                  </Link>
                );
              })}
            </nav>

            <div className="pt-4 border-t border-neutral-300 flex items-center justify-between">
              <a
                href="/resume.pdf"
                download="Resume_Aditya_Kumar_2026.pdf"
                className="text-xs font-mono text-black font-bold flex items-center gap-1.5"
              >
                <Download className="w-4 h-4" />
                <span>Resume_Aditya_Kumar_2026.pdf</span>
              </a>

              <button
                onClick={handleSoundToggle}
                className="p-2 rounded-xl bg-white border border-neutral-300 text-black cursor-pointer shadow-2xs"
                title={soundEnabled ? "Mute sounds" : "Enable sounds"}
              >
                {soundEnabled ? <Volume2 className="w-4 h-4 text-black" /> : <VolumeX className="w-4 h-4 text-neutral-400" />}
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* DESKTOP TACTILE SCRAPBOOK SIDEBAR */}
      <aside className="hidden lg:flex fixed left-0 top-0 bottom-0 w-64 bg-[#FAF8F5] border-r border-neutral-300/80 p-5 flex-col justify-between select-none z-30 overflow-y-auto">
        {/* Notebook Binder Ring Holes on Left Edge */}
        <div className="absolute left-2 top-8 bottom-8 flex flex-col justify-around pointer-events-none opacity-40">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="w-2.5 h-2.5 rounded-full bg-neutral-400/60 shadow-inner border border-black/10" />
          ))}
        </div>

        {/* Top Profile Polaroid Tag */}
        <div className="space-y-6 pl-3">
          <div className="relative">
            <WashiTape color="#FFF4CC" angle="-2deg" className="-top-3 -right-2" />
            
            <Link href="/" onClick={handleNavClick} className="block p-3 rounded-2xl bg-white border border-neutral-300/90 shadow-2xs hover:shadow-xs transition-all group">
              <div className="flex items-center gap-3">
                <div className="relative w-11 h-11 rounded-xl overflow-hidden border border-neutral-200 shrink-0 group-hover:scale-105 transition-transform bg-neutral-100">
                  <img
                    src="/media/me.jpeg"
                    alt="Aditya Kumar"
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                <div className="flex flex-col">
                  <span className="text-sm font-bold tracking-tight text-black font-sans group-hover:text-[#E65100] transition-colors">
                    Aditya Kumar
                  </span>
                  <span className="text-[10px] font-mono uppercase tracking-wider text-neutral-500 font-semibold">
                    Product Designer
                  </span>
                </div>
              </div>
            </Link>
          </div>

          {/* Scrapbook Bookmark Navigation Tabs */}
          <nav className="space-y-1.5 pt-1">
            <div className="text-[9px] font-mono font-bold uppercase tracking-widest text-neutral-400 px-3 pb-1">
              Notebook Index
            </div>

            {NAV_ITEMS.map((item) => {
              const isActive =
                item.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(item.href);

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={handleNavClick}
                  className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-2xl text-xs font-mono font-bold transition-all duration-200 group ${
                    isActive
                      ? "bg-white text-black shadow-xs border border-neutral-300 -translate-r-1"
                      : "text-neutral-600 hover:text-black hover:bg-white/60 border border-transparent"
                  }`}
                >
                  <div className="flex items-center gap-2.5">
                    <span
                      className="w-2 h-2 rounded-full transition-transform group-hover:scale-125"
                      style={{ backgroundColor: item.color }}
                    />
                    <span>{item.label}</span>
                  </div>

                  <span className={`text-[10px] font-mono ${isActive ? "text-black font-bold" : "text-neutral-400"}`}>
                    /{item.tag}
                  </span>
                </Link>
              );
            })}
          </nav>

          {/* Quick Paper Note */}
          <div className="p-3 rounded-2xl bg-[#FFFDF9] border border-amber-200/80 shadow-2xs space-y-1 text-xs font-mono">
            <div className="flex items-center justify-between text-[10px] text-amber-800 font-bold uppercase">
              <span>Status Log</span>
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            </div>
            <p className="text-[11px] text-neutral-700 leading-relaxed">
              Open for full-time product design roles &amp; select freelance commissions.
            </p>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="space-y-4 pt-4 border-t border-neutral-300/80 pl-3">
          <div className="flex items-center justify-between gap-1.5">
            {/* Theme Picker */}
            <div className="relative">
              <button
                type="button"
                onClick={() => setPaletteOpen(!paletteOpen)}
                className="p-2 px-2.5 rounded-xl bg-white border border-neutral-300 text-black hover:bg-neutral-50 transition-colors flex items-center gap-1.5 text-xs font-mono cursor-pointer shadow-2xs"
                title="Change Color Theme"
              >
                <Palette className="w-3.5 h-3.5 text-[#E65100]" />
                <span className="capitalize text-[10px] font-bold">{theme}</span>
              </button>

              <AnimatePresence>
                {paletteOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute bottom-12 left-0 w-44 rounded-2xl bg-white border border-neutral-300 p-2 shadow-xl z-50 space-y-1 text-xs font-mono"
                  >
                    <div className="px-2 py-1 text-[10px] text-neutral-400 uppercase font-bold">Accent Palette</div>
                    {(Object.keys(THEME_CONFIGS) as ThemePreset[]).map((p) => (
                      <button
                        key={p}
                        onClick={() => {
                          setTheme(p);
                          playPop();
                          setPaletteOpen(false);
                        }}
                        className={`w-full flex items-center justify-between px-2.5 py-1.5 rounded-lg text-left transition-colors cursor-pointer ${
                          theme === p ? "bg-[#E65100] text-white font-bold" : "hover:bg-neutral-100 text-black"
                        }`}
                      >
                        <span>{THEME_CONFIGS[p].name}</span>
                        <span className="w-2.5 h-2.5 rounded-full border border-black/20" style={{ backgroundColor: THEME_CONFIGS[p].accent }} />
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Sound Toggle */}
            <button
              onClick={handleSoundToggle}
              className="p-2 rounded-xl bg-white border border-neutral-300 text-black hover:bg-neutral-50 transition-colors cursor-pointer shadow-2xs"
              title={soundEnabled ? "Mute interactive audio" : "Enable interactive audio"}
            >
              {soundEnabled ? <Volume2 className="w-3.5 h-3.5 text-black" /> : <VolumeX className="w-3.5 h-3.5 text-neutral-400" />}
            </button>

            {/* Resume Button */}
            <a
              href="/resume.pdf"
              download="Resume_Aditya_Kumar_2026.pdf"
              onClick={() => playPop()}
              className="px-2.5 py-2 rounded-xl bg-white text-black border border-neutral-300 text-xs font-mono font-bold hover:bg-neutral-50 transition-colors flex items-center gap-1 shadow-2xs shrink-0"
              title="Download Resume (PDF)"
            >
              <Download className="w-3 h-3 text-[#E65100]" />
              <span className="text-[10px]">Resume</span>
            </a>
          </div>

          {/* Social Links */}
          <div className="space-y-1 text-xs">
            <span className="text-[10px] font-mono text-neutral-400 uppercase tracking-wider block mb-0.5 font-bold">
              Links
            </span>
            <div className="flex flex-col gap-0.5">
              {SOCIAL_LINKS.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  className="text-xs text-neutral-600 font-medium hover:text-black transition-colors flex items-center justify-between py-0.5 group"
                >
                  <span>{social.label}</span>
                  <ArrowUpRight className="w-3 h-3 text-neutral-400 group-hover:text-black transition-transform group-hover:translate-x-0.5" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </aside>
    </>
  );
}
