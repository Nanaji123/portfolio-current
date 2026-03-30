"use client"

import React from "react"
import { motion } from "framer-motion"
import { GithubLogo, LinkedinLogo, InstagramLogo, TwitterLogo, ArrowUpRight, EnvelopeSimple } from "@phosphor-icons/react"
import Link from "next/link"

const SOCIAL_LINKS = [
  {
    name: "GitHub",
    url: "https://github.com/Nanaji123",
    icon: <GithubLogo size={20} weight="duotone" />
  },
  {
    name: "LinkedIn",
    url: "https://linkedin.com/in/nanaji-gundapu",
    icon: <LinkedinLogo size={20} weight="duotone" />
  },
  {
    name: "Instagram",
    url: "https://instagram.com/nanaji_gundapu",
    icon: <InstagramLogo size={20} weight="duotone" />
  },
  {
    name: "Email",
    url: "mailto:gundapunanaji123@gmail.com",
    icon: <EnvelopeSimple size={20} weight="duotone" />
  }
]

const NAV_LINKS = [
  { name: "Home", url: "/" },
  { name: "Experience", url: "#experience" },
  { name: "Projects", url: "#projects" },
  { name: "Contact", url: "mailto:nanajigundapu@gmail.com" }
]

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative w-full bg-white dark:bg-black overflow-hidden pt-24 pb-12">
      {/* Top Border - High Visibility Dashed */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-neutral-400 dark:via-white/40 to-transparent border-t border-dashed border-neutral-300 dark:border-white/30" />

      {/* Vertical High-Visibility Dashed Lines */}
      <div className="absolute top-0 left-1/2 -translate-x-[512px] h-full w-[1px] border-l border-dashed border-neutral-300 dark:border-white/30 hidden lg:block [mask-image:linear-gradient(to_bottom,transparent,black_50%,transparent)]" />
      <div className="absolute top-0 right-1/2 translate-x-[512px] h-full w-[1px] border-r border-dashed border-neutral-300 dark:border-white/30 hidden lg:block [mask-image:linear-gradient(to_bottom,transparent,black_50%,transparent)]" />

      {/* Background Decorative Element */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[1000px] h-[300px] bg-neutral-500/5 dark:bg-white/5 blur-[120px] -z-10 rounded-full" />

      <div className="mx-auto max-w-5xl px-6 relative">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Column */}
          <div className="lg:col-span-2 flex flex-col gap-6">
            <Link href="/" className="group flex items-center gap-2">
              <div className="h-8 w-8 rounded-lg bg-black dark:bg-white flex items-center justify-center transition-transform duration-500">
                <span className="text-white dark:text-black font-bold text-lg">N</span>
              </div>
              <span className="text-xl font-bold tracking-tight text-black dark:text-white">Nanaji Gundapu</span>
            </Link>
            <p className="text-neutral-500 dark:text-neutral-400 text-base leading-relaxed max-w-sm pr-4">
              Building digital products with a focus on scalability, performance, and user-centric design.
            </p>
            <div className="flex items-center gap-3">
              {SOCIAL_LINKS.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -2 }}
                  className="p-2.5 rounded-xl bg-neutral-50 dark:bg-white/5 border border-neutral-100 dark:border-white/5 text-neutral-600 dark:text-neutral-400 hover:text-black dark:hover:text-white transition-colors"
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Navigation Column */}
          <div className="flex flex-col gap-6">
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-neutral-400 dark:text-neutral-500">Navigation</h4>
            <div className="flex flex-col gap-4">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.name}
                  href={link.url}
                  className="text-sm font-medium text-neutral-600 dark:text-neutral-400 hover:text-black dark:hover:text-white transition-colors flex items-center gap-1 group"
                >
                  {link.name}
                  {link.url.startsWith("http") || link.url.startsWith("mailto") ? (
                    <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                  ) : null}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact Column */}
          <div className="flex flex-col gap-6">
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-neutral-400 dark:text-neutral-500">Get in touch</h4>
            <div className="flex flex-col gap-4">
              <a
                href="mailto:gundapunanaji123@gmail.com"
                className="group flex items-center justify-between px-5 py-4 rounded-full bg-black dark:bg-white text-white dark:text-black transition-all hover:scale-105 active:scale-95"
              >
                <span className="text-sm font-bold uppercase tracking-widest">Tap to connect</span>
                <ArrowUpRight size={18} weight="bold" className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
              <p className="text-xs text-neutral-500 dark:text-neutral-400 leading-relaxed font-medium">
                Available for interesting opportunities and collaboration worldwide.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="pt-8 border-t border-neutral-100 dark:border-white/5 flex flex-col sm:flex-row items-center justify-between gap-6">
          <p className="text-xs text-neutral-400 dark:text-neutral-600 font-medium font-mono lowercase tracking-tighter">
            &copy; {currentYear} • built with high-fidelity & precision
          </p>
          <div className="flex items-center gap-4 text-xs text-neutral-400 dark:text-neutral-600 font-medium">
            <span className="flex items-center gap-2">
              <div className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
              Available for Freelance
            </span>
            <span className="hidden sm:inline opacity-30">|</span>
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="hover:text-black dark:hover:text-white transition-colors cursor-pointer"
            >
              Back to Top
            </button>
          </div>
        </div>
      </div>
    </footer>
  )
}
