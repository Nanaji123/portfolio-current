"use client"

import React from "react"
import { motion } from "framer-motion"
import { ArrowSquareOut, Sparkle, Layout, GameController, ChatCircleDots, AndroidLogo, GithubLogo } from "@phosphor-icons/react"

const PROJECTS_DATA = [
  {
    title: "SyncFlow",
    subtitle: "Real-Time Chat & AI Platform",
    date: "2026",
    tech: ["React Native", "React.js", "Node.js", "Socket.IO", "Ollama AI"],
    description: "Built a scalable real-time collaboration platform with private/group messaging using Socket.IO and integrated Ollama-based AI workflows for chat assistance and task automation. Implemented secure JWT + 2FA authentication.",
    links: {
      github: "https://github.com/Nanaji123/SyncFlow.git",
    },
    icon: <ChatCircleDots size={24} weight="duotone" className="text-blue-500" />,
    stats: "Real-time Chat • Local AI",
    color: "from-blue-500/20 to-transparent"
  },
  {
    title: "ChronoScape",
    subtitle: "Dynamic Wallpaper Engine",
    date: "2026",
    tech: ["Kotlin", "MVVM Architecture", "Android SDK", "Wallpaper Service"],
    description: "Developed an Android live wallpaper application using Kotlin with MVVM architecture. Implemented time-based environment transitions and dynamic weather rendering with smooth native performance animations.",
    links: {
      github: "https://github.com/Nanaji123/chronoscape1",
    },
    icon: <AndroidLogo size={24} weight="duotone" className="text-emerald-500" />,
    stats: "Android Native • Kotlin MVVM",
    color: "from-emerald-500/20 to-transparent"
  },
  {
    title: "NoteSnap.app",
    subtitle: "AI Study Assistant",
    date: "June 2025",
    tech: ["React.js", "Next.js", "Tailwind CSS", "OpenAI SDK"],
    description: "Built an AI-powered platform that converts PDFs into flashcards, quizzes, summaries, and mind maps with concept extraction and spaced repetition features.",
    links: {
      website: "https://notesnap.app",
    },
    icon: <Sparkle size={24} weight="duotone" className="text-amber-500" />,
    stats: "OpenAI API • PDF Parsing",
    color: "from-amber-500/20 to-transparent"
  },
  {
    title: "AI-Quest Game App",
    subtitle: "AI-Powered Gamified RPG Platform",
    date: "2025",
    tech: ["React Native CLI", "Python FastAPI", "OpenAI SDK"],
    description: "Built a gamified application with AI-generated quests, EXP systems, and a progression system where users track growth through ability points and AI-personalized feedback.",
    links: {
      github: "https://github.com/Nanaji123/AI-Quest-App.git",
    },
    icon: <GameController size={24} weight="duotone" className="text-purple-500" />,
    stats: "AI Quests • RPG System",
    color: "from-purple-500/20 to-transparent"
  },
  {
    title: "Tuni Basket",
    subtitle: "Grocery Web & Mobile App",
    date: "Dec 2024",
    tech: ["Figma", "React", "React Native", "Node.js"],
    description: "Designed UI/UX and built a cross-platform grocery platform with AI-powered product recommendations and personalized features independently.",
    links: {
      github: "https://github.com/Nanaji123/tuniwebsite",
    },
    icon: <Layout size={24} weight="duotone" className="text-pink-500" />,
    stats: "UI/UX Design • Cross-Platform",
    color: "from-pink-500/20 to-transparent"
  }
]

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
}

export function Projects() {
  return (
    <section className="relative w-full overflow-hidden py-24 sm:py-32">
      {/* Vertical Dashed Lines (Matching Hero/Footer) */}
      <div className="absolute top-0 left-1/2 -translate-x-[600px] h-full w-[1px] border-l border-dashed border-neutral-300 dark:border-white/30 hidden lg:block [mask-image:linear-gradient(to_bottom,transparent,black_50%,transparent)]" />
      <div className="absolute top-0 right-1/2 translate-x-[600px] h-full w-[1px] border-r border-dashed border-neutral-300 dark:border-white/30 hidden lg:block [mask-image:linear-gradient(to_bottom,transparent,black_50%,transparent)]" />

      <div className="mx-auto max-w-[1200px] px-6 relative z-10">
        <div className="flex flex-col gap-6 mb-24 max-w-2xl">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-3"
          >
            <span className="h-[2px] w-12 bg-black dark:bg-white" />
            <span className="text-sm font-bold tracking-[0.2em] uppercase text-black dark:text-white">
              Creative Works
            </span>
          </motion.div>
          <h2 className="text-4xl sm:text-6xl font-black tracking-tighter text-black dark:text-white uppercase transition-colors">
            Projects
          </h2>
          <p className="text-neutral-600 dark:text-neutral-400 text-lg sm:text-xl leading-relaxed">
            Highlighted works spanning AI-driven applications, real-time platforms, and mobile products.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6">
          {PROJECTS_DATA.map((project, index) => (
            <motion.div
              key={project.title}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              whileHover={{ scale: 1.015, y: -4 }}
              transition={{ type: "spring", stiffness: 300, damping: 22 }}
              viewport={{ once: true, margin: "-50px" }}
              className={`group relative flex flex-col p-8 rounded-3xl border border-neutral-200/60 dark:border-white/5 bg-neutral-50/40 dark:bg-white/[0.01] hover:bg-neutral-50/80 dark:hover:bg-white/[0.03] transition-all overflow-hidden cursor-pointer ${index < 3 ? "lg:col-span-2" : "lg:col-span-3"
                }`}
            >
              {/* Background Glow */}
              <div className={`absolute -top-32 -right-32 w-64 h-64 bg-gradient-to-br ${project.color} blur-[120px] opacity-0 group-hover:opacity-100 transition-opacity duration-1000`} />

              <div className="flex flex-col h-full relative z-10">
                <div className="flex items-center justify-between mb-8">
                  <div className="p-3.5 rounded-2xl bg-white dark:bg-white/5 shadow-sm border border-neutral-100 dark:border-white/5 group-hover:rotate-6 group-hover:scale-105 transition-transform duration-500">
                    {project.icon}
                  </div>
                  <div className="flex items-center gap-2">
                    {project.links.github && (
                      <a href={project.links.github} target="_blank" rel="noopener noreferrer" className="p-2.5 rounded-xl bg-white dark:bg-white/5 hover:bg-neutral-100 dark:hover:bg-white/10 text-neutral-500 dark:text-neutral-400 hover:text-black dark:hover:text-white transition-all border border-neutral-100 dark:border-white/5">
                        <GithubLogo size={20} weight="bold" />
                      </a>
                    )}
                    {project.links.website && (
                      <a href={project.links.website} target="_blank" rel="noopener noreferrer" className="p-2.5 rounded-xl bg-white dark:bg-white/5 hover:bg-neutral-100 dark:hover:bg-white/10 text-neutral-500 dark:text-neutral-400 hover:text-black dark:hover:text-white transition-all border border-neutral-100 dark:border-white/5">
                        <ArrowSquareOut size={20} weight="bold" />
                      </a>
                    )}
                  </div>
                </div>

                <div className="mb-4">
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="text-2xl font-bold text-neutral-900 dark:text-white tracking-tight">
                      {project.title}
                    </h3>
                  </div>
                  <p className="text-[10px] font-bold text-neutral-400 dark:text-neutral-500 uppercase tracking-[0.2em]">
                    {project.subtitle}
                  </p>
                </div>

                <p className="text-neutral-500 dark:text-neutral-400 text-[14px] leading-relaxed mb-8">
                  {project.description}
                </p>

                <div className="mt-auto">
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((t) => (
                      <span key={t} className="text-[10px] font-semibold uppercase tracking-wider px-3 py-1.5 rounded-xl bg-white dark:bg-white/5 text-neutral-600 dark:text-neutral-400 border border-neutral-200/50 dark:border-white/5 hover:border-black dark:hover:border-white transition-all cursor-default shadow-sm">
                        {t}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center justify-between pt-4 border-t border-neutral-200/50 dark:border-white/5">
                    <span className="text-[11px] font-bold text-neutral-400 dark:text-neutral-500 uppercase tracking-wider">{project.stats}</span>
                    <span className="text-xs font-semibold text-neutral-400 dark:text-neutral-500">{project.date}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
