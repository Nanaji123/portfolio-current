"use client"

import React from "react"
import { motion, Variants } from "framer-motion"
import {
  DeviceMobile,
  Globe,
  Database,
  FigmaLogo
} from "@phosphor-icons/react"
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card"

const TECH_DATA = [
  {
    title: "App Development",
    icon: DeviceMobile,
    description: "Building high-performance native and cross-platform mobile applications.",
    skills: [
      { name: "React Native", icon: "react" },
      { name: "Kotlin", icon: "kotlin" },
      { name: "Jetpack Compose", icon: "android" },
      { name: "Expo", icon: "expo" },
      { name: "Redux Toolkit", icon: "redux" },
      { name: "Android SDK", icon: "android" }
    ]
  },
  {
    title: "Web & Frontend",
    icon: Globe,
    description: "Crafting modern, fast, and interactive user interfaces.",
    skills: [
      { name: "Next.js", icon: "nextdotjs" },
      { name: "React.js", icon: "react" },
      { name: "TypeScript", icon: "typescript" },
      { name: "Tailwind CSS", icon: "tailwindcss" },
      { name: "Framer Motion", icon: "framer" },
      { name: "JavaScript", icon: "javascript" }
    ]
  },
  {
    title: "Backend & Systems",
    icon: Database,
    description: "Designing robust, scalable backend architectures and APIs.",
    skills: [
      { name: "Node.js", icon: "nodedotjs" },
      { name: "Express.js", icon: "express" },
      { name: "FastAPI", icon: "fastapi" },
      { name: "PostgreSQL", icon: "postgresql" },
      { name: "Prisma", icon: "prisma" },
      { name: "Python", icon: "python" }
    ]
  },
  {
    title: "Real-time & Tools",
    icon: FigmaLogo,
    description: "Handling real-time communication, cloud deployment, and monitoring.",
    skills: [
      { name: "AWS", icon: "amazonwebservices" },
      { name: "Socket.IO", icon: "socketdotio" },
      { name: "WebRTC", icon: "webrtc" },
      { name: "Splunk", icon: "splunk" },
      { name: "Figma", icon: "figma" },
      { name: "GitHub", icon: "github" }
    ]
  }
]

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

export function TechStack() {
  return (
    <section className="relative w-full py-24 sm:py-32 overflow-hidden">
      {/* Vertical Dashed Lines (Matching Hero) */}
      <div className="absolute top-0 left-1/2 -translate-x-[600px] h-full w-[1px] border-l border-dashed border-neutral-300 dark:border-white/30 hidden lg:block [mask-image:linear-gradient(to_bottom,transparent,black_50%,transparent)]" />
      <div className="absolute top-0 right-1/2 translate-x-[600px] h-full w-[1px] border-r border-dashed border-neutral-300 dark:border-white/30 hidden lg:block [mask-image:linear-gradient(to_bottom,transparent,black_50%,transparent)]" />

      <div className="mx-auto max-w-5xl px-6 relative z-10">
        <div className="flex flex-col gap-4 mb-8 text-center items-center">
          <h2 className="text-xl font-semibold tracking-tight text-black dark:text-white uppercase px-4 py-1 border-y-2 border-neutral-900 dark:border-white w-fit">
            Expertise & Tech Stack
          </h2>
          <p className="text-neutral-500 dark:text-neutral-400 text-lg max-w-2xl">
            A comprehensive toolkit curated to build scalable, high-impact digital products.
          </p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-0"
        >
          {TECH_DATA.map((item) => (
            <CardContainer key={item.title} className="inter-var w-full" containerClassName="py-4 md:py-8 w-full">
              <CardBody className="bg-neutral-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-neutral-500/[0.05] dark:bg-[#050505] dark:border-white/5 border-neutral-200/80 w-full h-full rounded-3xl p-8 border hover:bg-neutral-100/50 dark:hover:bg-white/[0.02] transition-all duration-300">
                <CardItem
                  translateZ="50"
                  className="flex items-center gap-3 text-xl font-bold text-neutral-900 dark:text-white"
                >
                  <div className="p-2.5 rounded-xl bg-white dark:bg-white/5 shadow-sm border border-neutral-100 dark:border-white/5 group-hover/card:scale-105 transition-transform duration-300">
                    <item.icon size={24} weight="duotone" className="text-neutral-900 dark:text-white" />
                  </div>
                  {item.title}
                </CardItem>

                <CardItem
                  as="p"
                  translateZ="60"
                  className="text-neutral-500 dark:text-neutral-400 text-sm leading-relaxed mt-4"
                >
                  {item.description}
                </CardItem>

                <div className="grid grid-cols-2 gap-3 mt-8">
                  {item.skills.map((skill, idx) => (
                    <CardItem
                      key={skill.name}
                      translateZ={30 + idx * 5}
                      className="flex items-center gap-2.5 px-4 py-3 rounded-xl bg-white border border-neutral-100 text-[13px] font-semibold text-neutral-800 dark:bg-white/[0.02] dark:border-white/5 dark:text-neutral-300 hover:border-neutral-300 dark:hover:border-white/20 transition-all shadow-sm hover:shadow-md group/skill"
                    >
                      <img
                        src={`https://cdn.simpleicons.org/${skill.icon}`}
                        alt={skill.name}
                        className="w-4 h-4 opacity-60 dark:opacity-80 transition-all group-hover/skill:opacity-100 grayscale brightness-0 dark:invert"
                      />
                      {skill.name}
                    </CardItem>
                  ))}
                </div>
              </CardBody>
            </CardContainer>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
