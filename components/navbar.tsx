"use client"

import React, { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { ContactModal } from "./contact-modal"
import { AnimatedThemeToggler } from "@/components/ui/animated-theme-toggler"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger
} from "@/components/ui/tooltip"

export function Navbar() {
  const pathname = usePathname()
  const [isContactOpen, setIsContactOpen] = useState(false)

  return (
    <header className="fixed top-6 left-0 right-0 z-50 mx-auto w-[95%] max-w-2xl">
      <nav className="flex items-center justify-between rounded-full border border-neutral-200 bg-white/80 p-2 shadow-sm backdrop-blur-md transition-colors dark:border-white/10 dark:bg-black/50">
        <a href="/" className="flex items-center gap-3 pl-2 group cursor-pointer relative z-10">
          {/* Avatar Placeholder */}
          <div className="h-8 w-8 overflow-hidden rounded-full bg-neutral-100 dark:bg-neutral-800">
            <div className="flex h-full w-full items-center justify-center text-[10px] font-bold text-neutral-400">
              ME
            </div>
          </div>
          <span className="text-sm font-semibold text-black dark:text-white group-hover:opacity-80 transition-opacity">Nanaji gundapu</span>
        </a>

        <div className="hidden items-center gap-6 md:flex">
          {[
            { name: "Home", href: "/" },
            { name: "Blogs", href: "/blogs" },
            { name: "Projects", href: "/projects" },
            { name: "Work", href: "/work" },
          ].map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={cn(
                "text-xs font-semibold uppercase tracking-wider transition-colors hover:text-black dark:hover:text-white",
                pathname === item.href ? "text-black dark:text-white" : "text-neutral-400 dark:text-neutral-500"
              )}
            >
              {item.name}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <AnimatedThemeToggler />
          <button
            onClick={() => setIsContactOpen(true)}
            className="rounded-full border border-neutral-200 bg-white px-4 py-1.5 text-sm font-medium text-black transition-colors hover:bg-neutral-50 dark:border-white/10 dark:bg-black dark:text-white dark:hover:bg-neutral-900 cursor-pointer"
          >
            Contact
          </button>
        </div>
      </nav>

      <ContactModal isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />
    </header>
  )
}
