"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Copy, Check, Send } from "lucide-react";

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
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  return (
    <div className="pt-28 pb-16 px-4 sm:px-6 max-w-4xl mx-auto space-y-16">
      {/* Header */}
      <section className="space-y-4 pt-4">
        <span className="text-xs uppercase font-mono tracking-widest text-[#4a5d4e] font-semibold">
          Get in touch
        </span>
        <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-black leading-tight">
          Have a Project in Mind? Let&apos;s Talk
        </h1>
        <p className="text-sm sm:text-base text-[#757575] max-w-xl leading-relaxed">
          Let&apos;s collaborate today! Whether it&apos;s a web platform, mobile app, design system, or brand identity, I&apos;m ready to turn your ideas into intuitive digital experiences.
        </p>
      </section>

      {/* Main Grid: Form & Info */}
      <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="md:col-span-3 p-8 rounded-3xl bg-[#f5f2f0] border border-[#e5e2de] shadow-sm space-y-6"
        >
          {formSubmitted ? (
            <div className="py-12 text-center space-y-3">
              <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                <Check className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-black">Message Sent!</h3>
              <p className="text-xs sm:text-sm text-[#757575] max-w-sm mx-auto">
                Thank you for reaching out. I&apos;ll get back to your email ({formData.email || "inbox"}) promptly.
              </p>
              <button
                type="button"
                onClick={() => setFormSubmitted(false)}
                className="mt-4 px-4 py-2 rounded-full bg-black text-white text-xs font-semibold"
              >
                Send Another Message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-1.5">
                <label className="text-xs font-mono text-[#757575] uppercase block">
                  Name
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Your name or company"
                  className="w-full px-4 py-3 rounded-2xl bg-[#edeae7] border border-[#e5e2de] text-sm text-black placeholder:text-[#757575]/60 focus:outline-none focus:border-black/50 transition-colors"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-mono text-[#757575] uppercase block">
                  Email
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="your.email@domain.com"
                  className="w-full px-4 py-3 rounded-2xl bg-[#edeae7] border border-[#e5e2de] text-sm text-black placeholder:text-[#757575]/60 focus:outline-none focus:border-black/50 transition-colors"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-mono text-[#757575] uppercase block">
                  Message
                </label>
                <textarea
                  rows={4}
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Tell me about your project, goals, and timeline..."
                  className="w-full px-4 py-3 rounded-2xl bg-[#edeae7] border border-[#e5e2de] text-sm text-black placeholder:text-[#757575]/60 focus:outline-none focus:border-black/50 transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3.5 rounded-full bg-black text-white text-xs font-semibold hover:bg-black/85 transition-all shadow-md flex items-center justify-center gap-2 active:scale-[0.99]"
              >
                <span>Submit Message</span>
                <Send className="w-3.5 h-3.5" />
              </button>
            </form>
          )}
        </motion.div>

        {/* Quick Contact & Info Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="md:col-span-2 space-y-6 flex flex-col justify-between"
        >
          <div className="p-6 rounded-3xl bg-[#f5f2f0] border border-[#e5e2de] space-y-4">
            <h3 className="text-base font-bold text-black">Direct Contact</h3>
            <p className="text-xs text-[#757575] leading-relaxed">
              Prefer direct email or quick phone call? Feel free to reach out anytime.
            </p>

            <button
              type="button"
              onClick={copyEmail}
              className="w-full inline-flex items-center justify-between p-3.5 rounded-2xl bg-[#edeae7] border border-[#e5e2de] text-xs font-mono text-black hover:border-black/20 transition-all"
            >
              <span className="truncate">adityakumar4727@gmail.com</span>
              {copied ? <Check className="w-4 h-4 text-emerald-600 shrink-0 ml-2" /> : <Copy className="w-4 h-4 text-[#757575] shrink-0 ml-2" />}
            </button>

            <div className="p-3.5 rounded-2xl bg-[#edeae7] border border-[#e5e2de] text-xs font-mono text-black">
              <span>+91 7291065019</span>
            </div>
          </div>

          <div className="p-6 rounded-3xl bg-[#4a5d4e] text-white space-y-2">
            <span className="text-[10px] font-mono uppercase tracking-wider text-white/70">
              Availability
            </span>
            <div className="text-sm font-bold">Open for Q3/Q4 Projects</div>
            <p className="text-xs text-white/80 leading-relaxed">
              Accepting UI/UX design contracts, full-stack product consultations, and design system audits.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
