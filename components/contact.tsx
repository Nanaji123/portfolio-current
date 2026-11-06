import React from "react"

import { PROFILE, SOCIALS } from "@/lib/data"
import { Container, SectionHeading, TextLink } from "@/components/ui/base"

const CHANNELS = [
  { label: "Email", value: PROFILE.email, href: SOCIALS.email },
  { label: "Phone", value: PROFILE.phone, href: PROFILE.phoneHref },
  { label: "LinkedIn", value: "nanaji-gundapu", href: SOCIALS.linkedin },
  { label: "GitHub", value: "Nanaji123", href: SOCIALS.github },
  { label: "X", value: "GNanaji9", href: SOCIALS.x },
  { label: "Résumé", value: "View PDF", href: PROFILE.resume },
]

export function Contact() {
  return (
    <section id="contact" className="scroll-mt-20 pb-20 pt-16 lg:pb-28 lg:pt-24">
      <Container>
        <SectionHeading>Let&apos;s talk</SectionHeading>

        <div className="mt-8 grid gap-x-8 gap-y-8 lg:mt-12 lg:grid-cols-12">
          <p className="text-pretty text-[17px] leading-[1.65] text-muted-foreground lg:col-span-5">
            I&apos;m looking for mobile engineering roles abroad, on site or remote. I&apos;m based in{" "}
            {PROFILE.location} ({PROFILE.timezone}) and open to relocating.
          </p>

          <dl className="border-t border-border lg:col-span-6 lg:col-start-7">
            {CHANNELS.map((c) => (
              <div
                key={c.label}
                className="grid grid-cols-[76px_minmax(0,1fr)] gap-x-3 border-b border-border py-3 text-[15px] leading-[1.5] sm:grid-cols-[110px_minmax(0,1fr)] sm:gap-x-4"
              >
                <dt className="text-muted-foreground">{c.label}</dt>
                <dd className="min-w-0">
                  <TextLink href={c.href} className="[overflow-wrap:anywhere]">
                    {c.value}
                  </TextLink>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </Container>
    </section>
  )
}
