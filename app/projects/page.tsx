import { Navbar } from "@/components/navbar"

import { Projects } from "@/components/projects"

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-[#030303]">
      <Navbar />
      <div className="pt-24 pb-12">
        <Projects />
      </div>

    </main>
  )
}
