import type { Metadata } from "next"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { TechStack } from "@/components/tech-stack"
import { Experience } from "@/components/experience"
import { Projects } from "@/components/projects"

export const metadata: Metadata = {
  title: "Nanaji Gundapu \u2014 Mobile App & Full-Stack Developer",
  description:
    "Portfolio of Nanaji Gundapu \u2014 Mobile App Developer & Full-Stack Engineer. Specializing in React Native, Kotlin, Next.js, WebRTC real-time systems, and scalable backend APIs.",
  alternates: {
    canonical: "https://nanajigundapu.dev",
  },
}

const structuredData = [
  // Person schema — who you are, where you work, your skills
  {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Nanaji Gundapu",
    givenName: "Nanaji",
    familyName: "Gundapu",
    url: "https://nanajigundapu.dev",
    image: "https://nanajigundapu.dev/pic.jpeg",
    sameAs: [
      "https://github.com/Nanaji123",
      "https://www.linkedin.com/in/nanaji-gundapu-ab5935264/",
      "https://x.com/GNanaji9",
    ],
    jobTitle: "Mobile App Developer & Full-Stack Engineer",
    description:
      "Nanaji Gundapu is a Mobile App Developer and Full-Stack Engineer at Sisya EdTech Pvt. Ltd., specializing in React Native, Kotlin, Jetpack Compose, Next.js, Node.js, WebRTC, and real-time applications. Available for freelance gigs, collaborative projects, and developer roles.",
    worksFor: {
      "@type": "Organization",
      name: "Sisya EdTech Pvt. Ltd.",
      alternateName: "Sisya class",
      url: "https://sisiya.com",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Visakhapatnam",
        addressRegion: "Andhra Pradesh",
        addressCountry: "IN",
      },
    },
    alumniOf: {
      "@type": "CollegeOrUniversity",
      name: "Lovely Professional University",
      alternateName: "LPU",
    },
    knowsAbout: [
      "React Native", "Kotlin", "Jetpack Compose", "Android SDK",
      "Next.js", "React.js", "TypeScript", "Tailwind CSS",
      "Node.js", "Express.js", "FastAPI", "PostgreSQL", "Prisma",
      "WebRTC", "Socket.IO", "AWS", "Splunk", "Figma",
      "Mobile App Development", "Full-Stack Development",
      "Real-time Systems", "EdTech Applications", "Fintech Applications",
    ],
    email: "gundapunanaji123@gmail.com",
    telephone: "+919392844826",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Visakhapatnam",
      addressRegion: "Andhra Pradesh",
      addressCountry: "IN",
    },
    hasOccupation: {
      "@type": "Occupation",
      name: "Mobile App Developer & Full-Stack Engineer",
      occupationLocation: { "@type": "City", name: "Visakhapatnam" },
      skills: "React Native, Kotlin, Next.js, Node.js, WebRTC, Socket.IO",
    },
  },
  // ProfessionalService schema — signals freelance availability to Google
  {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "Nanaji Gundapu — Freelance Mobile & Web Development",
    description:
      "Freelance mobile and web development services by Nanaji Gundapu. Available for React Native apps, Kotlin Android apps, Next.js web apps, real-time WebRTC systems, and Node.js backend APIs.",
    url: "https://nanajigundapu.dev",
    provider: { "@type": "Person", name: "Nanaji Gundapu" },
    areaServed: "Worldwide",
    availableLanguage: ["English", "Telugu", "Hindi"],
    serviceType: [
      "Mobile App Development",
      "Android App Development",
      "React Native Development",
      "Full-Stack Web Development",
      "Real-time App Development",
      "API Development",
      "Freelance Software Development",
    ],
    contactPoint: {
      "@type": "ContactPoint",
      email: "gundapunanaji123@gmail.com",
      contactType: "freelance inquiry",
    },
  },
]

export default function Page() {
  return (
    <main className="min-h-screen bg-white font-sans text-black selection:bg-neutral-100 selection:text-black dark:bg-black dark:text-white dark:selection:bg-neutral-900 overflow-hidden relative">
      <Hero />
      <About />
      <TechStack />
      <Experience />
      <Projects />



      {/* Quote Section (matching reference) */}
      <section className="mx-auto max-w-5xl px-6 py-24 text-center pb-40">
        <div className="h-[1px] w-full bg-neutral-100 dark:bg-white/5 mb-16" />
        <p className="text-xl font-medium tracking-tight text-neutral-400 sm:text-2xl italic leading-relaxed">
          &quot; Clean code isn&apos;t just about solving a problem; it&apos;s about crafting <br className="hidden sm:inline" /> invisible, high-performance engines that empower everyday experiences. &quot;
        </p>
        <p className="mt-6 text-xs text-neutral-300 dark:text-neutral-600 uppercase tracking-widest">— Nanaji Gundapu</p>
      </section>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
    </main>
  )
}
