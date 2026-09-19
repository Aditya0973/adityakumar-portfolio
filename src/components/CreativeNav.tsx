"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
  Sparkles,
  Menu,
  X,
  ArrowUpRight,
  Layers,
  Palette,
  Terminal,
  Compass
} from "lucide-react";
import { playPop, playFigmaClick } from "@/utils/soundEffects";
import { SquigglyLink } from "@/components/SquigglyLink";
import { WashiTape, PushPin, SparkleStar } from "@/components/SketchDoodles";

export function CreativeNav() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
  const [spacesOpen, setSpacesOpen] = React.useState(false);

  const navLinks = [
    { href: "/", label: "Index", number: "01" },
    { href: "/about", label: "About", number: "02" },
    { href: "/work", label: "Selected Works", number: "03" },
    { href: "/contact", label: "Contact", number: "04" }
  ];

  const spaces = [
    { name: "Portfolio", href: "/", color: "#E65100", label: "Sketch Canvas" },
    { name: "Behance", href: "/behance", color: "#0057FF", label: "3D & Design" },
    { name: "GitHub", href: "/github", color: "#10B981", label: "Code & Logic" },
    { name: "Crafted Co.", href: "/crafted", color: "#6864F6", label: "Digital Studio" }
  ];

  return (
    <>
      <header className="fixed top-4 left-0 right-0 z-40 px-4 sm:px-8 max-w-6xl mx-auto pointer-events-none flex justify-center">
        <div className="flex items-center justify-between md:justify-center w-full max-w-xl pointer-events-auto">
          {/* Desktop Navigation Pill with Squiggly Underlines (Centered) */}
          <nav className="hidden md:flex items-center justify-center gap-7 px-8 py-2.5 rounded-full bg-[#FAF8F5]/90 backdrop-blur-md border border-neutral-300/80 shadow-xs mx-auto">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <SquigglyLink
                  key={link.href}
                  href={link.href}
                  isActive={isActive}
                  color="#E65100"
                  onClick={() => playPop()}
                  className="text-xs font-mono font-medium text-neutral-600 hover:text-black transition-colors"
                  activeClassName="font-bold text-black"
                >
                  <span className="flex items-center gap-1.5">
                    <span className="text-[10px] text-neutral-400">{link.number}</span>
                    <span>{link.label}</span>
                  </span>
                </SquigglyLink>
              );
            })}
          </nav>

          {/* Mobile View: Clean Bar with Mobile Hamburger (No overlapping Folio text) */}
          <div className="flex md:hidden items-center justify-end w-full px-2">
            <button
              type="button"
              onClick={() => {
                playPop();
                setMobileMenuOpen(!mobileMenuOpen);
              }}
              className="flex items-center justify-center w-10 h-10 rounded-full bg-[#FAF8F5]/90 backdrop-blur-md border border-neutral-300 text-black shadow-xs cursor-pointer ml-auto"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Fullscreen Animated Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-50 bg-[#FAF8F5] p-6 pt-24 flex flex-col justify-between overflow-y-auto md:hidden"
          >
            <div className="flex items-center justify-between absolute top-4 left-6 right-6">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#E65100]" />
                <span className="text-xs font-mono font-bold uppercase tracking-wider">Navigation</span>
              </div>
              <button
                type="button"
                onClick={() => {
                  playPop();
                  setMobileMenuOpen(false);
                }}
                className="w-10 h-10 rounded-full bg-white border border-neutral-300 flex items-center justify-center text-black shadow-xs cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-6 my-auto">
              <span className="text-[10px] font-mono tracking-widest uppercase text-neutral-400 block">
                PAGES &amp; SECTIONS
              </span>
              <div className="space-y-4">
                {navLinks.map((link) => {
                  const isActive = pathname === link.href;
                  return (
                    <div key={link.href}>
                      <SquigglyLink
                        href={link.href}
                        isActive={isActive}
                        color="#E65100"
                        onClick={() => {
                          playPop();
                          setMobileMenuOpen(false);
                        }}
                        className="text-3xl font-extrabold font-sans text-black"
                      >
                        <span className="flex items-baseline gap-3">
                          <span className="text-sm font-mono font-normal text-neutral-400">
                            {link.number}
                          </span>
                          <span>{link.label}</span>
                        </span>
                      </SquigglyLink>
                    </div>
                  );
                })}
              </div>

              <div className="pt-6 border-t border-neutral-200 space-y-3">
                <span className="text-[10px] font-mono tracking-widest uppercase text-neutral-400 block">
                  SPACES
                </span>
                <div className="grid grid-cols-2 gap-2">
                  {spaces.map((sp) => (
                    <Link
                      key={sp.name}
                      href={sp.href}
                      onClick={() => {
                        playPop();
                        setMobileMenuOpen(false);
                      }}
                      className="p-3 rounded-2xl bg-white border border-neutral-200 text-xs font-mono flex items-center gap-2"
                    >
                      <span
                        className="w-2.5 h-2.5 rounded-full"
                        style={{ backgroundColor: sp.color }}
                      />
                      <span className="font-bold">{sp.name}</span>
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <div className="pt-6 text-center text-xs font-mono text-neutral-500">
              Aditya Kumar © 2026 • Product Designer
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}