import React from "react"

import { PROFILE } from "@/lib/data"
import { Container } from "@/components/ui/base"

export function Footer() {
  return (
    <footer>
      <Container>
        <div className="flex flex-wrap items-center justify-between gap-x-6 gap-y-1 border-t border-border py-6 text-sm text-muted-foreground">
          <p>
            © {new Date().getFullYear()} {PROFILE.name}
          </p>
          <p>
            {PROFILE.location} · {PROFILE.timezone}
          </p>
        </div>
      </Container>
    </footer>
  )
}
