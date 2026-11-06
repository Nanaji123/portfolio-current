import React from "react"
import Image from "next/image"

import { METRICS, PROFILE, SOCIALS } from "@/lib/data"
import { cn } from "@/lib/utils"
import { Container, TextLink } from "@/components/ui/base"

const delay = (ms: number) => ({ "--enter-delay": `${ms}ms` }) as React.CSSProperties

export function Hero() {
  return (
    <section id="top" className="pb-16 pt-10 sm:pt-16 lg:pb-24 lg:pt-14">
      <Container>
        {/* The portrait stretches to the text column, so its top and bottom line up with the copy */}
        <div className="grid gap-x-16 gap-y-7 lg:grid-cols-[minmax(0,1fr)_320px] xl:grid-cols-[minmax(0,1fr)_390px]">
          <div
            className="enter relative order-first size-[88px] overflow-hidden rounded-full bg-muted lg:order-last lg:size-auto lg:min-h-[440px] lg:rounded-2xl"
            style={delay(120)}
          >
            <Image
              src={PROFILE.photo}
              alt={`Portrait of ${PROFILE.name}`}
              fill
              priority
              quality={90}
              sizes="(min-width: 1280px) 390px, (min-width: 1024px) 320px, 88px"
              className="object-cover object-[50%_20%]"
            />
          </div>

          <div className="min-w-0">
            <p className="enter text-[15px] text-muted-foreground">
              {PROFILE.role}, Hyderabad · <span className="text-foreground">{PROFILE.availability}</span>
            </p>

            <h1
              className="enter mt-5 max-w-[15ch] text-balance font-display text-[clamp(2.75rem,6.1vw,5.1rem)] font-normal leading-[1.02] tracking-[-0.022em] lg:mt-6"
              style={delay(60)}
            >
              I build mobile apps that feel native and hold up in production.
            </h1>

            <p
              className="enter mt-7 max-w-[58ch] text-pretty text-[17px] leading-[1.65] text-muted-foreground lg:mt-8"
              style={delay(140)}
            >
              I&apos;m <span className="text-foreground">{PROFILE.name}</span>, the primary engineer on the BuzinessAI
              app at {PROFILE.company}, where I build the app, the APIs behind it and its payment integrations. In 3
              years I&apos;ve shipped fintech, EdTech and real-time products with React Native, Kotlin, Node.js and
              PostgreSQL.
            </p>

            <div
              className="enter mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 text-[15px] lg:mt-9"
              style={delay(200)}
            >
              <TextLink href={SOCIALS.email}>Email</TextLink>
              <TextLink href={PROFILE.resume}>Résumé</TextLink>
              <TextLink href={SOCIALS.linkedin}>LinkedIn</TextLink>
              <TextLink href={SOCIALS.github}>GitHub</TextLink>
            </div>
          </div>
        </div>

        <dl
          className="enter mt-12 grid grid-cols-2 border-t border-border lg:mt-14 lg:grid-cols-4"
          style={delay(260)}
        >
          {METRICS.map((m, i) => (
            <div
              key={m.label}
              className={cn(
                "flex flex-col gap-1 py-5 lg:py-6",
                i % 2 === 1 && "border-l border-border pl-5",
                i >= 2 && "border-t border-border lg:border-t-0",
                i >= 1 && "lg:border-l lg:pl-6"
              )}
            >
              <dt className="order-2 pr-3 text-sm leading-snug text-muted-foreground">{m.label}</dt>
              <dd className="order-1 font-display text-[2.1rem] leading-none tracking-[-0.02em] tabular-nums lg:text-[2.5rem]">
                {m.value}
              </dd>
            </div>
          ))}
        </dl>
      </Container>
    </section>
  )
}
