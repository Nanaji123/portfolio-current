import type { Metadata } from "next"

import { Experience } from "@/components/experience"
import { Contact } from "@/components/contact"
import { SITE_URL } from "@/lib/data"

export const metadata: Metadata = {
  title: "Experience",
  description:
    "Nanaji Gundapu's experience: Senior Mobile Engineer at Galaxy Tech Solutions, Mobile Full-Stack Developer at Sisiya EdTech, and React Native Developer at Nest India.",
  alternates: { canonical: `${SITE_URL}/work` },
  openGraph: {
    title: "Experience · Nanaji Gundapu",
    description: "3 years building production mobile apps across fintech, EdTech and real-time platforms.",
    url: `${SITE_URL}/work`,
  },
}

export default function WorkPage() {
  return (
    <main>
      <Experience />
      <Contact />
    </main>
  )
}
