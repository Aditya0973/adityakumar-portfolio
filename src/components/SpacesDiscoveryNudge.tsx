"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, Palette, Code2, Compass, X } from "lucide-react";
import { PushPin, WashiTape } from "@/components/SketchDoodles";
import { playPop, playFigmaClick } from "@/utils/soundEffects";

export function SpacesDiscoveryNudge() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = React.useState(false);

  // Check if current route is one of the specialized sub-spaces
  const isSpacePage =
    pathname.startsWith("/behance") ||
    pathname.startsWith("/github") ||
    pathname.startsWith("/crafted");

  React.useEffect(() => {
    // If the visitor is already exploring a sub-space, do not show the nudge
    if (isSpacePage) {
      setIsOpen(false);
      return;
    }

    // Fresh 15-second timer on page visit or refresh
    const timer = setTimeout(() => {
      setIsOpen(true);
      try {
        playPop();
      } catch {
        // audio play fallback
      }
    }, 15000);

    return () => clearTimeout(timer);
  }, [pathname, isSpacePage]);

  const handleDismiss = () => {
    try {
      playFigmaClick();
    } catch {
      // audio fallback
    }
    setIsOpen(false);
  };

  // If in space, do not render modal at all
  if (isSpacePage) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 select-none">
          {/* Backdrop Blur */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleDismiss}
            className="fixed inset-0 bg-black/50 backdrop-blur-xs cursor-pointer"
          />

          {/* Quirky Neobrutalist Dialog Card */}
          <motion.div
            initial={{ scale: 0.85, opacity: 0, y: 30, rotate: -2 }}
            animate={{ scale: 1, opacity: 1, y: 0, rotate: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20, rotate: 2 }}
            transition={{ type: "spring", stiffness: 400, damping: 25 }}
            className="relative w-full max-w-md bg-[#FAF8F5] rounded-3xl border-3 border-black p-6 sm:p-7 shadow-[8px_8px_0px_0px_#000] space-y-5 text-[#121212] z-10"
          >
            {/* Top Accents */}
            <PushPin color="#E65100" className="absolute -top-3.5 left-8 z-20" />
            <WashiTape color="rgba(255, 138, 101, 0.45)" angle="2deg" className="-top-3 right-12 z-20" />

            {/* Close Cross */}
            <button
              onClick={handleDismiss}
              aria-label="Close"
              className="absolute top-4 right-4 p-1.5 rounded-full bg-neutral-200/80 hover:bg-neutral-300 text-neutral-700 hover:text-black transition-colors"
            >
              <X className="w-4 h-4" />
            </button>

            {/* Header Badge & Title */}
            <div className="space-y-1.5 pt-1">
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#CCFF00] border-2 border-black text-black text-[11px] font-mono font-black tracking-wider uppercase shadow-2xs">
                <Sparkles className="w-3.5 h-3.5 text-black" />
                <span>PSST... HEY YOU! ðŸ‘€</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-black font-sans tracking-tight text-black leading-snug">
                Don&apos;t Forget to Explore My Spaces!
              </h3>
            </div>

            {/* Dialog Body Message */}
            <p className="text-xs sm:text-sm text-neutral-700 font-sans leading-relaxed">
              You&apos;re only seeing the surface! Check out the <span className="font-bold text-black bg-orange-100 px-1.5 py-0.5 rounded border border-orange-200">bottom dock ðŸ‘‡</span> to jump into 3 dedicated sub-universes:
            </p>

            {/* Spaces Quick Jump Chips */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 pt-1 text-xs font-mono font-bold">
              <Link
                href="/behance"
                onClick={handleDismiss}
                className="flex items-center justify-between sm:flex-col sm:items-start p-2.5 rounded-xl bg-white border-2 border-neutral-300 hover:border-[#0057FF] hover:bg-blue-50/50 hover:shadow-2xs transition-all group"
              >
                <div className="flex items-center gap-1.5 text-[#0057FF]">
                  <Palette className="w-3.5 h-3.5" />
                  <span>Behance</span>
                </div>
                <span className="text-[10px] text-neutral-400 font-normal sm:mt-1">
                  Art & 3D
                </span>
              </Link>

              <Link
                href="/github"
                onClick={handleDismiss}
                className="flex items-center justify-between sm:flex-col sm:items-start p-2.5 rounded-xl bg-white border-2 border-neutral-300 hover:border-[#10B981] hover:bg-emerald-50/50 hover:shadow-2xs transition-all group"
              >
                <div className="flex items-center gap-1.5 text-[#10B981]">
                  <Code2 className="w-3.5 h-3.5" />
                  <span>GitHub</span>
                </div>
                <span className="text-[10px] text-neutral-400 font-normal sm:mt-1">
                  Code Lab
                </span>
              </Link>

              <Link
                href="/crafted"
                onClick={handleDismiss}
                className="flex items-center justify-between sm:flex-col sm:items-start p-2.5 rounded-xl bg-white border-2 border-neutral-300 hover:border-[#E65100] hover:bg-orange-50/50 hover:shadow-2xs transition-all group"
              >
                <div className="flex items-center gap-1.5 text-[#E65100]">
                  <Compass className="w-3.5 h-3.5" />
                  <span>Crafted Co.</span>
                </div>
                <span className="text-[10px] text-neutral-400 font-normal sm:mt-1">
                  Products
                </span>
              </Link>
            </div>

            {/* Funny Dismiss Button */}
            <div className="pt-2">
              <button
                onClick={handleDismiss}
                className="w-full py-3 px-4 rounded-2xl bg-black text-white font-mono font-bold text-xs hover:bg-[#E65100] hover:scale-[1.01] active:scale-[0.98] transition-all flex items-center justify-center gap-2 shadow-[4px_4px_0px_0px_#E65100]"
              >
                <span>Okay okay! I&apos;ll check them out ðŸ‘</span>
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}