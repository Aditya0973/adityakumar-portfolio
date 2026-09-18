"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Volume2, VolumeX, Palette, FileText, Menu, X, Home, User, Briefcase, Mail, Download } from "lucide-react";
import { usePortfolioTheme, THEME_CONFIGS, ThemePreset, FONT_CONFIGS, FontPreset } from "@/context/ThemeContext";
import { playFigmaClick, playPop, toggleSound } from "@/utils/soundEffects";
import { DonutShowcase } from "./DonutShowcase";

const NAV_ITEMS = [
  { label: "Home", href: "/", icon: Home },
  { label: "About", href: "/about", icon: User },
  { label: "Case Studies", href: "/work", icon: Briefcase },
  { label: "Contact", href: "/contact", icon: Mail }
];

// USER'S EXACT LIVE SOCIAL LINKS
const SOCIAL_LINKS = [
  { label: "LinkedIn", href: "https://www.linkedin.com/in/adityakumar0973/" },
  { label: "Behance", href: "https://www.behance.net/1c5da35f" },
  { label: "GitHub", href: "https://github.com/Aditya0973" }
];

export function Sidebar() {
  const pathname = usePathname();
  const { theme, setTheme, font, setFont, soundEnabled, toggleSound: toggleAudio, colors } = usePortfolioTheme();
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
      {/* ========================================================================= */}
      {/* MOBILE TOP BAR (Only on mobile viewports < lg) */}
      {/* ========================================================================= */}
      <div className="lg:hidden fixed top-0 left-0 right-0 z-40 bg-[#f5f2f0]/90 backdrop-blur-md border-b border-[#e5e2de] px-4 py-3 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2.5">
          <div className="relative w-8 h-8 rounded-full overflow-hidden border border-[#e5e2de] shrink-0">
            <img
              src="/media/me.jpg"
              alt="Aditya Kumar"
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <div className="text-xs font-semibold text-black leading-tight">Aditya Kumar</div>
            <div className="text-[10px] font-mono text-[#757575] uppercase">UI/UX Designer</div>
          </div>
        </Link>

        <div className="flex items-center gap-2">
          {/* Mobile Download Resume */}
          <a
            href="/resume.pdf"
            download="Resume_Aditya_Kumar_2026.pdf"
            className="p-2 rounded-xl bg-[#edeae7] text-black text-xs font-mono font-semibold flex items-center gap-1 hover:bg-[#e5e2de] transition-colors"
            title="Download Resume PDF"
          >
            <Download className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Resume</span>
          </a>

          <button
            onClick={() => setMobileDrawerOpen(!mobileDrawerOpen)}
            className="p-2 rounded-xl bg-[#edeae7] text-black"
            aria-label="Toggle menu"
          >
            {mobileDrawerOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileDrawerOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="lg:hidden fixed inset-x-0 top-[57px] bg-[#f5f2f0] border-b border-[#e5e2de] z-30 p-6 space-y-4 shadow-xl"
          >
            <nav className="flex flex-col gap-1">
              {NAV_ITEMS.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={handleNavClick}
                  className={`px-4 py-3 rounded-2xl text-sm font-medium flex items-center gap-3 transition-colors ${
                    pathname === item.href
                      ? "bg-white text-black font-semibold shadow-sm"
                      : "text-[#757575] hover:text-black hover:bg-[#edeae7]"
                  }`}
                >
                  <item.icon className="w-4 h-4" />
                  <span>{item.label}</span>
                </Link>
              ))}
            </nav>

            <div className="pt-4 border-t border-[#e5e2de] flex items-center justify-between">
              <a
                href="/resume.pdf"
                download="Resume_Aditya_Kumar_2026.pdf"
                className="text-xs font-mono text-black font-semibold flex items-center gap-1.5"
              >
                <Download className="w-4 h-4" />
                <span>Download Resume (PDF)</span>
              </a>

              <button
                onClick={handleSoundToggle}
                className="p-2 rounded-xl bg-[#edeae7] text-black"
                title={soundEnabled ? "Mute sounds" : "Enable sounds"}
              >
                {soundEnabled ? <Volume2 className="w-4 h-4" /> : <VolumeX className="w-4 h-4 text-[#757575]" />}
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ========================================================================= */}
      {/* DESKTOP FIXED SIDEBAR */}
      {/* ========================================================================= */}
      <aside className="hidden lg:flex fixed left-0 top-0 bottom-0 w-64 bg-[#edeae7]/60 border-r border-[#e5e2de] p-6 flex-col justify-between select-none z-30 overflow-y-auto">
        {/* Top Profile Header */}
        <div className="space-y-6">
          <Link href="/" onClick={handleNavClick} className="flex items-center gap-3 group">
            <div className="relative w-10 h-10 rounded-full overflow-hidden border border-[#e5e2de] shrink-0 group-hover:scale-105 transition-transform">
              <img
                src="/media/me.jpg"
                alt="Aditya Kumar"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex flex-col">
              <span
                className="text-sm font-semibold tracking-tight text-black transition-colors"
                style={{ "--hover-color": colors.accent } as React.CSSProperties}
              >
                Aditya Kumar
              </span>
              <span className="text-[10px] font-mono uppercase tracking-wider text-[#757575]">
                UI/UX Designer
              </span>
            </div>
          </Link>

          {/* Navigation Items (Subtle medium weight pill active state) */}
          <nav className="space-y-1">
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
                  className={`w-full flex items-center gap-3 px-4 py-2.5 rounded-xl text-xs font-medium transition-all duration-200 ${
                    isActive
                      ? "bg-white text-black font-semibold shadow-sm border border-[#e5e2de]/80"
                      : "text-[#757575] hover:text-black hover:bg-[#f5f2f0]/80"
                  }`}
                >
                  <item.icon className={`w-3.5 h-3.5 ${isActive ? "text-black" : "text-[#757575]"}`} />
                  <span>{item.label}</span>
                </Link>
              );
            })}
          </nav>

          {/* Embedded 3D Donut Video Widget */}
          <DonutShowcase />
        </div>

        {/* Bottom Section: Theme Controls, Resume PDF Download, and Socials */}
        <div className="space-y-5 pt-5 border-t border-[#e5e2de]">
          {/* Controls Row: Palette Picker, Sound Toggle, and Resume Download */}
          <div className="flex items-center justify-between gap-1.5">
            {/* Theme Picker Dropup */}
            <div className="relative">
              <button
                type="button"
                onClick={() => setPaletteOpen(!paletteOpen)}
                className="p-2 rounded-xl bg-[#f5f2f0] border border-[#e5e2de] text-black hover:border-black/30 transition-colors flex items-center gap-1 text-xs font-mono"
                title="Change Color Theme & Accent"
              >
                <Palette className="w-3.5 h-3.5" style={{ color: colors.accent }} />
                <span className="capitalize text-[11px]">{theme}</span>
              </button>

              <AnimatePresence>
                {paletteOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute bottom-11 left-0 w-44 rounded-2xl bg-[#f5f2f0] border border-[#e5e2de] p-2 shadow-xl z-50 space-y-1 text-xs font-mono"
                  >
                    <div className="px-2 py-1 text-[10px] text-[#757575] uppercase">Accent Theme</div>
                    {(Object.keys(THEME_CONFIGS) as ThemePreset[]).map((p) => (
                      <button
                        key={p}
                        onClick={() => {
                          setTheme(p);
                          playPop();
                          setPaletteOpen(false);
                        }}
                        className={`w-full flex items-center justify-between px-2.5 py-1.5 rounded-lg text-left transition-colors ${
                          theme === p ? "bg-black text-white font-semibold" : "hover:bg-[#edeae7] text-black"
                        }`}
                      >
                        <span>{THEME_CONFIGS[p].name}</span>
                        <span className="w-2.5 h-2.5 rounded-full border border-black/20" style={{ backgroundColor: THEME_CONFIGS[p].accent }} />
                      </button>
                    ))}

                    <div className="pt-1 border-t border-[#e5e2de] px-2 py-1 text-[10px] text-[#757575] uppercase">Font Scale</div>
                    {(Object.keys(FONT_CONFIGS) as FontPreset[]).map((f) => (
                      <button
                        key={f}
                        onClick={() => {
                          setFont(f);
                          playPop();
                        }}
                        className={`w-full flex items-center justify-between px-2.5 py-1.5 rounded-lg text-left transition-colors ${
                          font === f ? "bg-black text-white font-semibold" : "hover:bg-[#edeae7] text-black"
                        }`}
                      >
                        <span>{FONT_CONFIGS[f].name}</span>
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Sound Toggle */}
            <button
              onClick={handleSoundToggle}
              className="p-2 rounded-xl bg-[#f5f2f0] border border-[#e5e2de] text-black hover:border-black/30 transition-colors"
              title={soundEnabled ? "Mute interactive audio" : "Enable interactive audio"}
            >
              {soundEnabled ? <Volume2 className="w-3.5 h-3.5 text-black" /> : <VolumeX className="w-3.5 h-3.5 text-[#757575]" />}
            </button>

            {/* PC Resume View & Download Button */}
            <a
              href="/resume.pdf"
              download="Resume_Aditya_Kumar_2026.pdf"
              className="px-3 py-2 rounded-xl bg-black text-white text-xs font-mono font-medium hover:bg-black/80 transition-colors flex items-center gap-1 shadow-sm shrink-0"
              title="Download Resume (PDF)"
            >
              <Download className="w-3 h-3" />
              <span>Resume</span>
            </a>
          </div>

          {/* Social Links Stack: LinkedIn, Behance, GitHub */}
          <div className="space-y-1 text-xs">
            <span className="text-[10px] font-mono text-[#757575] uppercase tracking-wider block mb-1">
              Follow me
            </span>
            <div className="flex flex-col gap-1">
              {SOCIAL_LINKS.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  className="text-xs text-[#000000]/80 hover:text-black transition-colors flex items-center justify-between py-0.5 group"
                >
                  <span>{social.label}</span>
                  <ArrowUpRight className="w-3 h-3 text-[#757575] group-hover:text-black opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </aside>
    </>
  );
}
