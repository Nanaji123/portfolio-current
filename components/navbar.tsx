"use client"

import React, { useEffect, useState } from "react"
import Link from "next/link"

import { PROFILE } from "@/lib/data"
import { cn } from "@/lib/utils"
import { AnimatedThemeToggler } from "@/components/ui/animated-theme-toggler"
import { Container } from "@/components/ui/base"

const NAV = [
  { name: "Work", id: "work" },
  { name: "Experience", id: "experience" },
  { name: "About", id: "about" },
  { name: "Contact", id: "contact" },
]

const RESUME_LINK = { target: "_blank", rel: "noopener noreferrer", href: PROFILE.resume }

export function Navbar() {
  const [active, setActive] = useState<string | null>(null)
  const [menuOpen, setMenuOpen] = useState(false)

  // Marks the section currently in the middle of the screen
  useEffect(() => {
    const sections = NAV.flatMap(({ id }) => document.getElementById(id) ?? [])
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(entry.target.id)
          else setActive((current) => (current === entry.target.id ? null : current))
        }
      },
      { rootMargin: "-45% 0px -50% 0px" }
    )
    sections.forEach((s) => observer.observe(s))
    return () => observer.disconnect()
  }, [])

  return (
    <header className="sticky top-0 z-50 bg-background/90 backdrop-blur-lg">
      <Container className="flex h-16 items-center justify-between gap-4">
        <Link href="/" className="whitespace-nowrap text-[15px] font-medium tracking-tight">
          {PROFILE.name}
        </Link>

        <div className="flex items-center gap-3 text-sm text-muted-foreground sm:gap-7">
          <nav aria-label="Main" className="hidden items-center gap-7 sm:flex">
            {NAV.map(({ name, id }) => (
              <Link
                key={id}
                href={`/#${id}`}
                aria-current={active === id ? "true" : undefined}
                className={cn("transition-colors hover:text-foreground", active === id && "text-foreground")}
              >
                {name}
              </Link>
            ))}
            <a {...RESUME_LINK} className="transition-colors hover:text-foreground">
              Résumé
            </a>
          </nav>

          <AnimatedThemeToggler
            aria-label="Toggle theme"
            className="grid size-8 place-items-center rounded-full transition-colors hover:text-foreground sm:-mr-2 [&_svg]:size-[15px]"
          />

          <button
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            className="text-foreground sm:hidden"
          >
            {menuOpen ? "Close" : "Menu"}
          </button>
        </div>
      </Container>

      {menuOpen && (
        <nav id="mobile-menu" aria-label="Mobile" className="sm:hidden">
          <Container className="pb-4">
            <ul className="border-t border-border text-[17px]">
              {NAV.map(({ name, id }) => (
                <li key={id} className="border-b border-border">
                  <Link href={`/#${id}`} onClick={() => setMenuOpen(false)} className="block py-3.5">
                    {name}
                  </Link>
                </li>
              ))}
              <li className="border-b border-border">
                <a {...RESUME_LINK} onClick={() => setMenuOpen(false)} className="block py-3.5">
                  Résumé
                </a>
              </li>
            </ul>
          </Container>
        </nav>
      )}
    </header>
  )
}
