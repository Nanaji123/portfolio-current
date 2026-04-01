import { Navbar } from "@/components/navbar"

import { Experience } from "@/components/experience"

export default function WorkPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-[#030303]">
      <Navbar />
      <div className="pt-24 pb-12">
        <Experience />
      </div>

    </main>
  )
}
