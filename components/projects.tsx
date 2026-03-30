"use client"

import React from "react"
import { motion } from "framer-motion"
import { ArrowSquareOut, Sparkle, Layout, GameController, ChatCircleDots, Users } from "@phosphor-icons/react"
import { GithubLogo } from "@phosphor-icons/react"
import { Android } from "@/components/ui/android"

const PROJECTS_DATA = [
  {
    title: "NoteSnap.app",
    subtitle: "AI Study Assistant",
    date: "June 2025",
    tech: ["React.js", "Next.js", "Tailwind CSS", "OpenAI API"],
    description: "Built an AI-powered platform that converts PDFs into flashcards, quizzes, summaries, and mind maps with concept extraction and spaced repetition features.",
    links: {
      website: "https://notesnap.app",
    },
    icon: <Sparkle size={24} weight="duotone" className="text-amber-500" />,
    stats: "OpenAI API • PDF Parsing",
    color: "from-amber-500/20 to-transparent"
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
    icon: <Layout size={24} weight="duotone" className="text-emerald-500" />,
    stats: "UI/UX Design • Cross-Platform",
    color: "from-emerald-500/20 to-transparent"
  },
  {
    title: "Customer Portal",
    subtitle: "Enterprise Client Dashboard",
    date: "2024",
    tech: ["Next.js", "TypeScript", "PostgreSQL", "Prisma"],
    description: "Architected a high-performance customer portal for business management, featuring real-time analytics, automated reporting, and secure document sharing.",
    links: {},
    icon: <Users size={24} weight="duotone" className="text-blue-600" />,
    stats: "Enterprise • CRM System",
    color: "from-blue-600/20 to-transparent"
  },
  {
    title: "System Game App",
    subtitle: "AI-Powered Gamified RPG Platform",
    date: "2025",
    tech: ["React Native CLI", "Python FastAPI", "OpenAI API"],
    description: "Built a gamified application with AI-generated quests, EXP systems, and a progression system where users track growth through ability points and AI-personalized feedback.",
    links: {},
    icon: <GameController size={24} weight="duotone" className="text-purple-500" />,
    stats: "AI Quests • RPG System",
    color: "from-purple-500/20 to-transparent"
  },
  {
    title: "Multi-Task App",
    subtitle: "Chat + Tasks + AI Platform",
    date: "2025",
    tech: ["React Native", "React", "Node.js", "Express", "AI APIs"],
    description: "Full-stack platform featuring real-time private/group chat, 2FA security, task management, and an AI interface for flashcard generation and persona-based conversations.",
    links: {},
    icon: <ChatCircleDots size={24} weight="duotone" className="text-blue-500" />,
    stats: "Real-time Chat • AI Flashcards",
    color: "from-blue-500/20 to-transparent"
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
      <div className="absolute top-0 left-1/2 -translate-x-[512px] h-full w-[1px] border-l border-dashed border-neutral-300 dark:border-white/30 hidden lg:block [mask-image:linear-gradient(to_bottom,transparent,black_50%,transparent)]" />
      <div className="absolute top-0 right-1/2 translate-x-[512px] h-full w-[1px] border-r border-dashed border-neutral-300 dark:border-white/30 hidden lg:block [mask-image:linear-gradient(to_bottom,transparent,black_50%,transparent)]" />

      <div className="mx-auto max-w-5xl px-6 lg:pl-12 relative z-10">
        <div className="flex flex-col gap-4 mb-16 items-start text-left">
          <h2 className="text-xl font-bold tracking-tight text-black dark:text-white uppercase px-1 border-l-4 border-neutral-900 dark:border-white">
            Projects
          </h2>
          <p className="text-neutral-500 dark:text-neutral-400 text-lg max-w-2xl">
            Highlighted works spanning AI-driven applications, real-time platforms, and enterprise solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6">
          {PROJECTS_DATA.map((project, index) => (
            <motion.div
              key={project.title}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.1 }}
              className={`group relative flex flex-col p-8 rounded-2xl border border-neutral-100 bg-neutral-50/50 dark:border-white/5 dark:bg-white/[0.02] hover:border-neutral-200 dark:hover:border-white/10 transition-all overflow-hidden ${index < 3 ? "lg:col-span-2" : "lg:col-span-3"
                }`}
            >
              {/* Background Glow */}
              <div className={`absolute -top-32 -right-32 w-64 h-64 bg-gradient-to-br ${project.color} blur-[120px] opacity-0 group-hover:opacity-100 transition-opacity duration-1000`} />

              <div className="flex flex-col h-full relative z-10">
                <div className="flex items-center justify-between mb-8">
                  <div className="p-3 rounded-2xl bg-white dark:bg-white/10 shadow-sm border border-neutral-100 dark:border-white/10 group-hover:rotate-12 transition-transform duration-500">
                    {project.icon}
                  </div>
                  <div className="flex items-center gap-2">
                    {project.links.github && (
                      <a href={project.links.github} target="_blank" rel="noopener noreferrer" className="p-2.5 rounded-xl bg-white dark:bg-white/10 hover:bg-neutral-100 dark:hover:bg-white/20 text-neutral-500 dark:text-neutral-400 hover:text-black dark:hover:text-white transition-all border border-neutral-100 dark:border-white/10">
                        <GithubLogo size={20} weight="bold" />
                      </a>
                    )}
                    {project.links.website && (
                      <a href={project.links.website} target="_blank" rel="noopener noreferrer" className="p-2.5 rounded-xl bg-white dark:bg-white/10 hover:bg-neutral-100 dark:hover:bg-white/20 text-neutral-500 dark:text-neutral-400 hover:text-black dark:hover:text-white transition-all border border-neutral-100 dark:border-white/10">
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
                  <p className="text-xs font-bold text-neutral-400 dark:text-neutral-500 uppercase tracking-[0.2em]">
                    {project.subtitle}
                  </p>
                </div>

                <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed mb-8">
                  {project.description}
                </p>

                <div className="mt-auto">
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((t) => (
                      <span key={t} className="text-[11px] font-bold px-3 py-1 rounded-full bg-neutral-100 dark:bg-white/5 text-neutral-500 dark:text-neutral-400 border border-neutral-200/50 dark:border-white/5">
                        {t}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center justify-between pt-4 border-t border-neutral-200/50 dark:border-white/5">
                    <span className="text-xs font-bold text-neutral-400 dark:text-neutral-500 uppercase tracking-wider">{project.stats}</span>
                    <span className="text-xs font-medium text-neutral-400 dark:text-neutral-500">{project.date}</span>
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
