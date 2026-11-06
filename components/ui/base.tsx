import React from "react"
import Image from "next/image"
import { ArrowUpRight } from "lucide-react"

import { cn } from "@/lib/utils"

export function Container({ className, children }: { className?: string; children: React.ReactNode }) {
  return <div className={cn("mx-auto w-full max-w-[1180px] px-5 sm:px-8", className)}>{children}</div>
}

/** A hairline and a serif title. Every section starts the same way. */
export function SectionHeading({ children, aside }: { children: React.ReactNode; aside?: React.ReactNode }) {
  return (
    <div className="flex flex-wrap items-end justify-between gap-x-6 gap-y-2 border-t border-border pt-6 lg:pt-8">
      <h2 className="font-display text-[2.4rem] font-normal leading-none tracking-[-0.02em] sm:text-[3.1rem]">
        {children}
      </h2>
      {aside && <div className="pb-1 text-sm text-muted-foreground">{aside}</div>}
    </div>
  )
}

export function TextLink({
  href,
  children,
  className,
}: {
  href: string
  children: React.ReactNode
  className?: string
}) {
  const external = href.startsWith("http")
  return (
    <a
      href={href}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      className={cn(
        "group inline-flex items-center gap-1 text-foreground underline decoration-border decoration-1 underline-offset-[5px] transition-colors hover:decoration-foreground",
        className
      )}
    >
      {children}
      {external && (
        <ArrowUpRight
          aria-hidden
          className="size-3.5 text-muted-foreground transition-transform group-hover:-translate-y-px group-hover:translate-x-px"
        />
      )}
    </a>
  )
}

/** Renders **emphasised** phrases from the content file. */
export function Rich({ text }: { text: string }) {
  return (
    <>
      {text.split(/(\*\*[^*]+\*\*)/).map((part, i) =>
        part.startsWith("**") ? (
          <strong key={i} className="font-medium text-foreground">
            {part.slice(2, -2)}
          </strong>
        ) : (
          part
        )
      )}
    </>
  )
}

/** A plain device outline. Radii are percentages, so it holds its shape at any width. */
export function PhoneShell({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <div
      className={cn(
        "relative aspect-[1206/2622] shrink-0 rounded-[14%/6.44%] bg-[#0a0a0a] p-[2.2%] shadow-[inset_0_0_0_1px_rgb(255_255_255/0.14),0_28px_50px_-28px_rgb(0_0_0/0.5)] ring-1 ring-black/10 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1 dark:ring-white/10",
        className
      )}
    >
      <div className="relative h-full w-full overflow-hidden rounded-[12%/5.52%] bg-black">{children}</div>
    </div>
  )
}

export function Phone({
  src,
  alt,
  sizes,
  className,
}: {
  src: string
  alt: string
  sizes: string
  className?: string
}) {
  return (
    <PhoneShell className={className}>
      <Image src={src} alt={alt} fill sizes={sizes} quality={90} className="object-cover object-top" />
    </PhoneShell>
  )
}
