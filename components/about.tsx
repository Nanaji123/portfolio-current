"use client"

import React from "react"
import { motion } from "framer-motion"

export function About() {
  return (
    <section className="relative w-full py-24 sm:py-32 overflow-hidden">
      {/* Vertical Dashed Lines (Matching Hero) */}
      <div className="absolute top-0 left-1/2 -translate-x-[600px] h-full w-[1px] border-l border-dashed border-neutral-300 dark:border-white/30 hidden lg:block [mask-image:linear-gradient(to_bottom,transparent,black_50%,transparent)]" />
      <div className="absolute top-0 right-1/2 translate-x-[600px] h-full w-[1px] border-r border-dashed border-neutral-300 dark:border-white/30 hidden lg:block [mask-image:linear-gradient(to_bottom,transparent,black_50%,transparent)]" />

      <div className="mx-auto max-w-4xl px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="flex flex-col gap-12"
        >
          <div className="flex flex-col items-start gap-4">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-black dark:text-white uppercase">
              About Me
            </h2>
            <div className="h-[2px] w-20 bg-neutral-900 dark:bg-white" />
          </div>

          <div className="flex flex-col gap-8">
            <p className="text-2xl sm:text-3xl font-medium leading-tight text-neutral-800 dark:text-neutral-200">
              I&apos;m a <span className="text-black dark:text-white font-semibold underline-offset-4 decoration-neutral-300 dark:decoration-neutral-700">Mobile Application Developer</span> and <span className="text-black dark:text-white font-semibold underline-offset-4 decoration-neutral-300 dark:decoration-neutral-700">Full-Stack Engineer</span> with 2+ years of experience building real-time, scalable applications.
            </p>

            <div className="space-y-6 text-neutral-600 dark:text-neutral-400 text-lg sm:text-xl leading-relaxed">
              <p>
                I specialize in high-performance cross-platform development using <span className="text-black dark:text-white font-medium">React Native</span> and <span className="text-black dark:text-white font-medium">Kotlin</span> alongside modern web frameworks like <span className="text-black dark:text-white font-medium">React.js</span> and <span className="text-black dark:text-white font-medium">Next.js</span>. On the backend, I build robust, scalable architectures with <span className="text-black dark:text-white font-medium">Node.js (Express)</span>, <span className="text-black dark:text-white font-medium">FastAPI</span>, and relational databases.
              </p>
              <p>
                From architecting real-time video calling features using <span className="text-black dark:text-white font-medium">WebRTC + Socket.IO</span> to engineering secure fintech workflows, I focus on performance optimization, clean MVVM/Redux state architecture, and delivering polished, intuitive UI/UX experiences.
              </p>
            </div>  

            <div className="grid grid-cols-2 gap-8 pt-8 border-t border-neutral-100 dark:border-white/5">
              <div>
                <p className="text-xs text-neutral-400 dark:text-neutral-600 uppercase tracking-widest mb-2 font-bold">Focus</p>
                <p className="text-base font-medium text-neutral-800 dark:text-neutral-200">Web/Mobile Architecture, System Design</p>
              </div>
              <div>
                <p className="text-xs text-neutral-400 dark:text-neutral-600 uppercase tracking-widest mb-2 font-bold">Location</p>
                <p className="text-base font-medium text-neutral-800 dark:text-neutral-200">Visakapatnam, Andhra Pradesh</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
