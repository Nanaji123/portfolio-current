import type { Metadata } from "next"
import { Experience } from "@/components/experience"

export const metadata: Metadata = {
  title: "Work Experience",
  description:
    "Nanaji Gundapu's professional work experience: Mobile Full-Stack Developer at Sisya EdTech, Fintech App Developer at Nest India, and Freelance Full-Stack Developer at CodeSel.com.",
  alternates: {
    canonical: "https://nanajigundapu.dev/work",
  },
  openGraph: {
    title: "Work Experience \u2014 Nanaji Gundapu",
    description:
      "2+ years of professional experience across EdTech, Fintech, and freelance full-stack development.",
    url: "https://nanajigundapu.dev/work",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Work Experience" }],
  },
}

export default function WorkPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-[#030303]">
      <div className="pt-24 pb-12">
        <Experience />
      </div>
    </main>
  )
}
