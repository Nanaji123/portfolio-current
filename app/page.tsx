import type { Metadata } from "next"

import { Hero } from "@/components/hero"
import { Work } from "@/components/work"
import { Experience } from "@/components/experience"
import { About } from "@/components/about"
import { Contact } from "@/components/contact"
import { EDUCATION, LANGUAGES, PROFILE, SITE_URL, SKILLS, SOCIALS } from "@/lib/data"

export const metadata: Metadata = {
  alternates: { canonical: SITE_URL },
}

const address = {
  "@type": "PostalAddress",
  addressLocality: "Hyderabad",
  addressRegion: "Telangana",
  addressCountry: "IN",
}

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: PROFILE.name,
  givenName: "Nanaji",
  familyName: "Gundapu",
  url: SITE_URL,
  image: `${SITE_URL}${PROFILE.photo}`,
  email: PROFILE.email,
  telephone: "+919392844826",
  jobTitle: PROFILE.role,
  description: PROFILE.description,
  sameAs: [SOCIALS.github, SOCIALS.linkedin, SOCIALS.x],
  worksFor: { "@type": "Organization", name: PROFILE.company, address },
  address,
  alumniOf: { "@type": "CollegeOrUniversity", name: EDUCATION.school, alternateName: "LPU" },
  knowsAbout: SKILLS.flatMap((s) => s.items.split(", ")),
  knowsLanguage: LANGUAGES,
}

export default function Page() {
  return (
    <main id="main">
      <Hero />
      <Work />
      <Experience />
      <About />
      <Contact />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
    </main>
  )
}
