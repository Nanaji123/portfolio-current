import type { Metadata } from "next"

import { Container, TextLink } from "@/components/ui/base"

export const metadata: Metadata = {
  title: "Page not found",
  robots: { index: false },
}

export default function NotFound() {
  return (
    <main id="main" className="py-24 sm:py-32 lg:py-40">
      <Container>
        <p className="text-[15px] text-muted-foreground">404</p>
        <h1 className="mt-4 max-w-[16ch] text-balance font-display text-[clamp(2.75rem,6.1vw,5.1rem)] font-normal leading-[1.02] tracking-[-0.022em]">
          This page doesn&apos;t exist.
        </h1>
        <p className="mt-6 max-w-[48ch] text-pretty text-[17px] leading-[1.65] text-muted-foreground">
          The link may be out of date. My work, experience and contact details are all on the homepage.
        </p>
        <p className="mt-8 text-[15px]">
          <TextLink href="/">Back to the homepage</TextLink>
        </p>
      </Container>
    </main>
  )
}
