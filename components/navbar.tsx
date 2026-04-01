"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { AnimatedThemeToggler } from "@/components/ui/animated-theme-toggler"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger
} from "@/components/ui/tooltip"

export function Navbar() {
  const pathname = usePathname()

  return (
    <header className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-full max-w-2xl px-4">
      <nav className="flex items-center justify-between rounded-full border border-neutral-200 bg-white/80 p-2 shadow-sm backdrop-blur-md transition-colors dark:border-white/10 dark:bg-black/50">
        <div className="flex items-center gap-3 pl-2">
          {/* Avatar Placeholder */}
          <div className="h-8 w-8 overflow-hidden rounded-full bg-neutral-100 dark:bg-neutral-800">
            <div className="flex h-full w-full items-center justify-center text-[10px] font-bold text-neutral-400">
              ME
            </div>
          </div>
          <span className="text-sm font-semibold text-black dark:text-white">Nanaji gundapu</span>
        </div>

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
          <Link
            href="#contact"
            className="rounded-full border border-neutral-200 bg-white px-4 py-1.5 text-sm font-medium text-black transition-colors hover:bg-neutral-50 dark:border-white/10 dark:bg-black dark:text-white dark:hover:bg-neutral-900"
          >
            Contact
          </Link>
        </div>
      </nav>
    </header>
  )
}
