import React from "react"

import { EDUCATION, EXPERIENCE, PROFILE } from "@/lib/data"
import { Container, Rich, SectionHeading, TextLink } from "@/components/ui/base"

const ROW = "grid gap-x-10 gap-y-3 border-b border-border py-9 md:grid-cols-[190px_minmax(0,1fr)] lg:py-12"
const META = "text-sm leading-relaxed text-muted-foreground md:sticky md:top-24 md:self-start"
const TITLE = "font-display text-[1.65rem] font-normal leading-[1.15] tracking-[-0.012em] sm:text-[1.85rem]"

export function Experience() {
  return (
    <section id="experience" className="scroll-mt-20 py-16 lg:py-24">
      <Container>
        <SectionHeading aside={<TextLink href={PROFILE.resume}>Full résumé</TextLink>}>Experience</SectionHeading>

        <ol className="mt-3 lg:mt-4">
          {EXPERIENCE.map((job) => (
            <li key={job.company} className={ROW}>
              <div className={META}>
                <p className="tabular-nums text-foreground">{job.period}</p>
                <p>{job.location}</p>
                {job.current && (
                  <p className="mt-2 inline-flex items-center gap-1.5 text-foreground">
                    <span aria-hidden className="size-1.5 rounded-full bg-foreground" />
                    Current role
                  </p>
                )}
              </div>

              <div className="min-w-0 max-w-[74ch]">
                <h3 className={TITLE}>{job.role}</h3>
                <p className="mt-1.5 text-[17px]">{job.company}</p>
                <p className="mt-1 text-sm text-muted-foreground">{job.about}</p>

                <ul className="mt-5 space-y-3">
                  {job.highlights.map((h) => (
                    <li key={h} className="relative pl-5 text-[15.5px] leading-[1.6] text-muted-foreground">
                      <span aria-hidden className="absolute left-0 top-[0.8em] h-px w-2.5 bg-muted-foreground/60" />
                      <Rich text={h} />
                    </li>
                  ))}
                </ul>

                <p className="mt-5 text-sm leading-relaxed text-muted-foreground">{job.stack}</p>
                {job.related && (
                  <p className="mt-3 text-sm">
                    <TextLink href={job.related.href}>{job.related.label}</TextLink>
                  </p>
                )}
              </div>
            </li>
          ))}

          <li className={ROW}>
            <div className={META}>
              <p className="tabular-nums text-foreground">{EDUCATION.period}</p>
              <p>{EDUCATION.location}</p>
            </div>
            <div className="min-w-0">
              <h3 className={TITLE}>{EDUCATION.degree}</h3>
              <p className="mt-1.5 text-[17px]">{EDUCATION.school}</p>
            </div>
          </li>
        </ol>
      </Container>
    </section>
  )
}
