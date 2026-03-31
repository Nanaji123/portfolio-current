import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { ProgressiveBlur } from "@/components/ui/progressive-blur"
import { TechStack } from "@/components/tech-stack"
import { Experience } from "@/components/experience"
import { Projects } from "@/components/projects"

export default function Page() {
  return (
    <main className="min-h-screen bg-white font-sans text-black selection:bg-neutral-100 selection:text-black dark:bg-black dark:text-white dark:selection:bg-neutral-900 overflow-hidden relative">
      <Hero />
      <About />
      <TechStack />
      <Experience />
      <Projects />

      {/* Global Scroll Transitions */}
      <ProgressiveBlur height="15svh" position="bottom" className="fixed bottom-0 z-[100] opacity-80 dark:opacity-50 pointer-events-none" />

      {/* Quote Section (matching reference) */}
      <section className="mx-auto max-w-5xl px-6 py-24 text-center pb-40">
        <div className="h-[1px] w-full bg-neutral-100 dark:bg-white/5 mb-16" />
        <p className="text-xl font-medium tracking-tight text-neutral-400 sm:text-2xl italic">
          &quot; Every pixel tells a story, every line <br /> of code builds a world. &quot;
        </p>
        <p className="mt-6 text-xs text-neutral-300 dark:text-neutral-600 uppercase tracking-widest">— Nanaji gundapu</p>
        <div className="h-[1px] w-full bg-neutral-100 dark:bg-white/5 mt-16" />
      </section>
    </main>
  )
}
