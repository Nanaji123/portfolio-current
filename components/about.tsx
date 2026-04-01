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
              I&apos;m a <span className="text-black dark:text-white font-semibold underline underline-offset-4 decoration-neutral-300 dark:decoration-neutral-700">Mobile App Developer</span> and <span className="text-black dark:text-white font-semibold underline underline-offset-4 decoration-neutral-300 dark:decoration-neutral-700">Web Developer</span> experienced in building cross-platform applications for Android, iOS, and the web.
            </p>

            <div className="space-y-6 text-neutral-600 dark:text-neutral-400 text-lg sm:text-xl leading-relaxed">
              <p>
                I specialize in creating scalable and user-focused solutions using modern technologies. I develop mobile apps with <span className="text-black dark:text-white font-medium">React Native</span> and build web applications alongside backend services using <span className="text-black dark:text-white font-medium">Node.js (Express)</span> and <span className="text-black dark:text-white font-medium">Python FastAPI</span>.
              </p>
              <p>
                I also handle the design side of my projects, creating interfaces from initial sketches to Figma designs, ensuring both functionality and user experience go hand in hand. I enjoy working across the full stack and bringing ideas to life through real-world applications.
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
