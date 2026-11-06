import React from "react"

import { LANGUAGES, SKILLS } from "@/lib/data"
import { Container, SectionHeading } from "@/components/ui/base"

const ROW =
  "grid grid-cols-[92px_minmax(0,1fr)] gap-x-3 border-b border-border py-3.5 text-[15px] leading-[1.5] sm:grid-cols-[120px_minmax(0,1fr)] sm:gap-x-4"

export function About() {
  return (
    <section id="about" className="scroll-mt-20 py-16 lg:py-24">
      <Container>
        <SectionHeading>About</SectionHeading>

        <div className="mt-8 grid gap-x-8 gap-y-10 lg:mt-12 lg:grid-cols-12">
          <div className="space-y-5 text-pretty text-[17px] leading-[1.65] lg:sticky lg:top-24 lg:col-span-5 lg:self-start">
            <p>
              I&apos;ve spent 3 years on production apps across fintech, EdTech and real-time platforms, serving 5,000+
              users.
            </p>
            <p className="text-muted-foreground">
              I&apos;m most useful when a feature crosses the stack: a Kotlin module, a WebRTC session, a payment webhook,
              a PostgreSQL schema or a Skia renderer. I care about frame rate, clean module boundaries and what happens
              after release.
            </p>
          </div>

          <dl className="border-t border-border lg:col-span-7">
            {SKILLS.map((s) => (
              <div key={s.group} className={ROW}>
                <dt className="text-muted-foreground">{s.group}</dt>
                <dd>
                  {s.proof && <p className="mb-1 text-pretty">{s.proof}</p>}
                  <p className={s.proof ? "text-sm text-muted-foreground" : undefined}>{s.items}</p>
                </dd>
              </div>
            ))}
            <div className={ROW}>
              <dt className="text-muted-foreground">Languages</dt>
              <dd>{LANGUAGES.join(", ")}</dd>
            </div>
          </dl>
        </div>
      </Container>
    </section>
  )
}
