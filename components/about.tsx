"use client"

import React from "react"
import { motion } from "framer-motion"

export function About() {
  return (
    <section className="mx-auto max-w-5xl px-6 py-24 sm:py-32">
      <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-12 sm:gap-24">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="flex flex-col gap-4"
        >
          <h2 className="text-xl font-semibold tracking-tight text-black dark:text-white uppercase">
            About Me
          </h2>
          <div className="h-[2px] w-12 bg-neutral-900 dark:bg-white" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-col gap-8"
        >
          <p className="text-xl sm:text-2xl font-medium leading-relaxed text-neutral-800 dark:text-neutral-200">
            I&apos;m a <span className="text-black dark:text-white">Mobile App Developer</span> and <span className="text-black dark:text-white">Web Developer</span> experienced in building cross-platform applications for Android, iOS, and the web.
          </p>

          <div className="space-y-6 text-neutral-600 dark:text-neutral-400 text-lg leading-relaxed">
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
              <p className="text-base font-medium text-neutral-800 dark:text-neutral-200">Kakinada, Andhra Pradesh</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
