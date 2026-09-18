"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react";

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Projects", href: "/work" },
  { label: "Contact", href: "/contact" }
];

export function Navbar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-4 sm:pt-6 px-4 pointer-events-none">
      <motion.nav
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className="pointer-events-auto flex items-center justify-between gap-6 px-5 py-2.5 rounded-full bg-[#f5f2f0]/90 backdrop-blur-md border border-[#e5e2de] shadow-sm hover:border-[#d469a4a3]/60 transition-all max-w-xl w-full"
      >
        {/* Profile Avatar & Name */}
        <Link href="/" className="flex items-center gap-2.5 group shrink-0">
          <div className="relative w-8 h-8 rounded-full overflow-hidden border border-[#e5e2de] shrink-0 group-hover:scale-105 transition-transform duration-300">
            <img
              src="https://framerusercontent.com/images/ufOc2IY8vYV9YEQuVbYGIRBmtpA.jpg"
              alt="Aditya Kumar"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex flex-col">
            <span className="text-xs font-semibold tracking-tight text-black group-hover:text-[#4a5d4e] transition-colors leading-tight">
              Aditya Kumar
            </span>
            <span className="text-[10px] text-[#757575] uppercase tracking-wider font-mono">
              UI/UX Designer
            </span>
          </div>
        </Link>

        {/* Desktop Links */}
        <div className="hidden sm:flex items-center gap-1 text-xs font-medium">
          {NAV_LINKS.map((link) => {
            const isActive =
              link.href === "/"
                ? pathname === "/"
                : pathname.startsWith(link.href);

            return (
              <Link
                key={link.href}
                href={link.href}
                className={`relative px-3 py-1.5 rounded-full transition-colors ${
                  isActive
                    ? "text-black font-semibold"
                    : "text-[#757575] hover:text-black"
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeNavPill"
                    className="absolute inset-0 bg-[#edeae7] rounded-full -z-10"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                {link.label}
              </Link>
            );
          })}
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="sm:hidden p-1.5 rounded-full text-black hover:bg-[#edeae7] transition-colors"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </motion.nav>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -10 }}
            transition={{ duration: 0.2 }}
            className="pointer-events-auto absolute top-20 left-4 right-4 bg-[#f5f2f0] border border-[#e5e2de] rounded-3xl p-5 shadow-xl flex flex-col gap-2 sm:hidden z-50"
          >
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`px-4 py-3 rounded-2xl text-sm font-medium transition-colors ${
                  pathname === link.href
                    ? "bg-[#edeae7] text-black font-semibold"
                    : "text-[#757575] hover:bg-[#edeae7]/60 hover:text-black"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
