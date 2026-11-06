import type { Metadata } from "next"

import { Work } from "@/components/work"
import { Contact } from "@/components/contact"
import { SITE_URL } from "@/lib/data"

export const metadata: Metadata = {
  title: "Work",
  description:
    "Work by Nanaji Gundapu: the BuzinessAI app and its native image editor, Gym Helper, Salary Survival, and Funzone at Sisiya EdTech.",
  alternates: { canonical: `${SITE_URL}/projects` },
  openGraph: {
    title: "Work · Nanaji Gundapu",
    description: "Production mobile apps built with React Native, Skia, Kotlin, Next.js and Convex.",
    url: `${SITE_URL}/projects`,
  },
}

export default function ProjectsPage() {
  return (
    <main id="main" className="pt-8 lg:pt-12">
      <Work />
      <Contact />
    </main>
  )
}
