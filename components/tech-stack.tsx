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
    description: "Building high-performance cross-platform mobile applications.",
    skills: [
      { name: "React Native", icon: "react" },
      { name: "Expo", icon: "expo" },
      { name: "Android", icon: "android" },
      { name: "iOS", icon: "apple" }
    ]
  },
  {
    title: "Web Development",
    icon: Globe,
    description: "Crafting responsive, high-speed web applications with modern frameworks.",
    skills: [
      { name: "Next.js", icon: "nextdotjs" },
      { name: "React", icon: "react" },
      { name: "TypeScript", icon: "typescript" },
      { name: "Tailwind CSS", icon: "tailwindcss" }
    ]
  },
  {
    title: "Backend & Systems",
    icon: Database,
    description: "Architecting scalable server-side solutions and robust databases.",
    skills: [
      { name: "Node.js", icon: "nodedotjs" },
      { name: "Python", icon: "python" },
      { name: "MongoDB", icon: "mongodb" },
      { name: "PostgreSQL", icon: "postgresql" }
    ]
  },
  {
    title: "Design & UX",
    icon: FigmaLogo,
    description: "Designing intuitive interfaces and seamless user journeys.",
    skills: [
      { name: "Figma", icon: "figma" },
      { name: "UI/UX Design", icon: "adobe" },
      { name: "Wireframing", icon: "framer" },
      { name: "Prototyping", icon: "sketch" }
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
    <section className="mx-auto max-w-5xl px-6 py-24 sm:py-32 overflow-hidden">
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
          <CardContainer key={item.title} className="inter-var" containerClassName="py-4 md:py-8">
            <CardBody className="bg-neutral-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-neutral-500/[0.1] dark:bg-black dark:border-white/[0.1] border-black/[0.1] w-full sm:w-[30rem] h-auto rounded-2xl p-7 border hover:bg-neutral-100 dark:hover:bg-neutral-900/50 transition-colors">
              <CardItem
                translateZ="50"
                className="flex items-center gap-3 text-xl font-bold text-neutral-900 dark:text-white"
              >
                <div className="p-2.5 rounded-xl bg-white dark:bg-white/10 shadow-sm border border-neutral-100 dark:border-white/10">
                  <item.icon size={24} weight="duotone" className="text-neutral-900 dark:text-white" />
                </div>
                {item.title}
              </CardItem>

              <CardItem
                as="p"
                translateZ="60"
                className="text-neutral-600 dark:text-neutral-400 text-sm leading-relaxed mt-4"
              >
                {item.description}
              </CardItem>

              <div className="grid grid-cols-2 gap-2.5 mt-8">
                {item.skills.map((skill, idx) => (
                  <CardItem
                    key={skill.name}
                    translateZ={30 + idx * 5}
                    className="flex items-center gap-2 px-3.5 py-2.5 rounded-lg bg-white border border-neutral-100 text-[13px] font-medium text-neutral-800 dark:bg-white/5 dark:border-white/5 dark:text-neutral-300 hover:border-neutral-300 dark:hover:border-white/20 transition-all shadow-sm"
                  >
                    <img
                      src={`https://cdn.simpleicons.org/${skill.icon}`}
                      alt={skill.name}
                      className="w-4 h-4 dark:filter dark:invert dark:brightness-200"
                    />
                    {skill.name}
                  </CardItem>
                ))}
              </div>
            </CardBody>
          </CardContainer>
        ))}
      </motion.div>
    </section>
  )
}
