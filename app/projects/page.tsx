import type { Metadata } from "next"
import { Projects } from "@/components/projects"

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Explore Nanaji Gundapu's portfolio of real-world projects: SyncFlow (real-time chat & AI platform), ChronoScape (Android wallpaper engine), NoteSnap.app (AI study assistant), and more.",
  alternates: {
    canonical: "https://nanajigundapu.vercel.app/projects",
  },
  openGraph: {
    title: "Projects \u2014 Nanaji Gundapu",
    description:
      "Real-world projects built with React Native, Kotlin, Next.js, Socket.IO, and AI integrations.",
    url: "https://nanajigundapu.vercel.app/projects",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Projects" }],
  },
}

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-[#030303]">
      <div className="pt-24 pb-12">
        <Projects />
      </div>
    </main>
  )
}
