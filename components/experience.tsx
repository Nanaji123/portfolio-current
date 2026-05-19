"use client"

import React from "react"
import { motion } from "framer-motion"
import { Calendar, MapPin, Briefcase, GraduationCap, Building, Code } from "lucide-react"

const EXPERIENCE_DATA = [
  {
    company: "Sisya EdTech Pvt. Ltd.",
    role: "Mobile Full-Stack Developer",
    location: "Visakhapatnam, India",
    period: "July 2025 – Present",
    skills: ["React Native", "Kotlin", "WebRTC", "Socket.IO", "Redux Toolkit", "Node.js", "Express.js", "PostgreSQL"],
    isCurrent: true,
    icon: Code,
    description: [
      "Architected and executed migration from React Native v0.74.5 to v0.82.0, resolving dependency conflicts and ensuring seamless cross-platform compatibility.",
      "Redesigned core mobile application improving UI consistency and boosting performance by 45%, reducing API latency by 30%.",
      "Designed and implemented real-time video calling and live classroom system using WebRTC + Socket.IO, supporting 1000+ concurrent users.",
      "Developed and scaled Sisya Coin (internal reward system) and Funzone (interactive logic-based gaming platform) using Node.js, significantly improving student engagement, daily active users, and overall platform retention.",
      "Integrated native Android modules using Kotlin for audio management and implemented Foreground Services with call lifecycle handling for reliable background execution.",
      "Implemented centralized state architecture using Redux Toolkit + Persist for real-time multi-app synchronization.",
      "Worked on backend optimization, API integration, and database handling for multiple production applications.",
      "Improved rendering performance by reducing unnecessary re-renders by 20%, enhancing app responsiveness."
    ]
  },
  {
    company: "Nest India",
    role: "React Native Developer — Fintech Applications",
    location: "Bengaluru, India",
    skills: ["React Native", "React.js", "Next.js", "TypeScript", "Node.js", "Express.js"],
    period: "Dec 2024 – Jun 2025",
    icon: Code,
    description: [
      "Architected and developed scalable fintech applications using React Native, React.js, Next.js, Node.js, Express.js, and TypeScript, supporting loan onboarding, EMI tracking, and customer management systems for 1,000+ users.",
      "Engineered secure backend workflows including e-KYC verification, REST API integrations, authentication, and loan processing modules, reducing onboarding and verification time by 40%.",
      "Optimized frontend and backend performance through efficient API handling, database query optimization, lazy loading, and component refactoring, improving application responsiveness by 35%."
    ]
  },
  {
    company: "CodeSel.com",
    role: "Freelance Full-Stack Developer",
    location: "Remote",
    skills: ["React Native", "React.js", "Next.js", "Node.js", "REST API", "SEO"],
    period: "Jun 2024 – Nov 2024",
    icon: Code,
    description: [
      "Delivered 10+ full-stack applications from design to deployment using React Native, React.js, Next.js and Node.js.",
      "Worked on both frontend and backend development including REST APIs, authentication systems, and database integration.",
      "Designed reusable component architecture ensuring scalable and SEO-friendly applications."
    ]
  }
]

export function Experience() {
  const containerRef = React.useRef<HTMLDivElement>(null)

  return (
    <section className="relative w-full py-24 sm:py-48 overflow-hidden transition-colors duration-500">
      {/* Vertical Dashed Lines (Matching Hero/About/Projects) */}
      <div className="absolute top-0 left-1/2 -translate-x-[600px] h-full w-[1px] border-l border-dashed border-neutral-300 dark:border-white/30 hidden lg:block [mask-image:linear-gradient(to_bottom,transparent,black_50%,transparent)]" />
      <div className="absolute top-0 right-1/2 translate-x-[600px] h-full w-[1px] border-r border-dashed border-neutral-300 dark:border-white/30 hidden lg:block [mask-image:linear-gradient(to_bottom,transparent,black_50%,transparent)]" />

      <div className="mx-auto max-w-6xl px-6 relative z-10 transition-all">
        <div className="flex flex-col gap-6 mb-24 max-w-2xl">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-3"
          >
            <span className="h-[2px] w-12 bg-black dark:bg-white" />
            <span className="text-sm font-bold tracking-[0.2em] uppercase text-black dark:text-white">
              Professional Journey
            </span>
          </motion.div>
          <h2 className="text-4xl sm:text-6xl font-black tracking-tighter text-black dark:text-white uppercase transition-colors">
            Experience
          </h2>
          <p className="text-neutral-600 dark:text-neutral-400 text-lg sm:text-xl leading-relaxed">
            Leading the charge in creating high-performance, high-accuracy digital solutions. Here&apos;s where I&apos;ve made an impact.
          </p>
        </div>

        <div className="relative" ref={containerRef}>
          {/* Enhanced Vertical Line */}
          <div className="absolute left-4 md:left-1/2 -translate-x-1/2 h-full w-[1px] bg-neutral-200 dark:bg-white/10" />

          <div className="space-y-16 md:space-y-24">
            {EXPERIENCE_DATA.map((exp, index) => (
              <motion.div
                key={exp.company + index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative"
              >
                {/* Mobile Design: Simple Vertical Stack */}
                <div className="flex flex-col gap-6 md:hidden">
                  <div className="flex flex-col gap-1">
                    <span className="text-sm font-bold text-neutral-400 dark:text-neutral-500 uppercase tracking-widest leading-none">
                      {exp.period}
                    </span>
                    <h3 className="text-2xl font-black text-black dark:text-white leading-tight uppercase transition-colors">
                      {exp.company}
                    </h3>
                    <p className="text-lg font-bold text-neutral-800 dark:text-neutral-200 uppercase tracking-wide opacity-80">
                      {exp.role}
                    </p>
                    <div className="flex items-center gap-2 text-sm text-neutral-500 font-medium">
                      <MapPin size={14} className="opacity-60" />
                      {exp.location}
                    </div>
                  </div>

                  <div className="flex flex-col gap-4 px-6 py-8 rounded-2xl border border-neutral-100 dark:border-white/5 backdrop-blur-3xl bg-neutral-50/5 dark:bg-white/[0.01]">
                    <ul className="space-y-4">
                      {exp.description.map((point, i) => (
                        <li key={i} className="text-sm font-medium text-neutral-600 dark:text-neutral-400 leading-relaxed flex gap-4">
                          <span className="shrink-0 w-1.5 h-1.5 rounded-full bg-neutral-900/10 dark:bg-white/10 mt-2" />
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-wrap gap-2 mt-2">
                    {exp.skills.map((skill) => (
                      <span key={skill} className="px-3 py-1 text-[10px] font-black uppercase tracking-wider border border-neutral-200 dark:border-white/10 rounded-full text-neutral-600 dark:text-neutral-400">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Desktop Design: Premium Alternating Grid */}
                <div className="hidden md:grid md:grid-cols-2 md:gap-x-12 md:items-center">
                  {/* Dot / Indicator / Icon */}
                  <div className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 z-20">
                    <div className={cn(
                      "flex items-center justify-center w-10 h-10 rounded-full border bg-white dark:bg-[#030303] shadow-xl transition-all duration-500",
                      exp.isCurrent
                        ? "border-black dark:border-white shadow-[0_0_20px_rgba(0,0,0,0.15)] dark:shadow-[0_0_20px_rgba(255,255,255,0.1)]"
                        : "border-neutral-200 dark:border-white/10"
                    )}>
                      <exp.icon size={16} className={cn(
                        "transition-colors duration-300",
                        exp.isCurrent ? "text-black dark:text-white" : "text-neutral-400 dark:text-neutral-600"
                      )} />
                    </div>
                  </div>

                  {index % 2 === 0 ? (
                    <>
                      {/* Left Side: Header Details */}
                      <div className="flex flex-col gap-2 md:text-right md:items-end">
                        <div className="flex flex-col gap-1">
                          <span className="text-sm font-bold text-neutral-400 dark:text-neutral-500 uppercase tracking-widest leading-none">
                            {exp.period}
                          </span>
                          <h3 className="text-2xl sm:text-3xl font-black text-black dark:text-white leading-tight uppercase transition-colors">
                            {exp.company}
                          </h3>
                          <p className="text-lg font-bold text-neutral-800 dark:text-neutral-200 uppercase tracking-wide opacity-80">
                            {exp.role}
                          </p>
                          <div className="flex items-center gap-2 text-sm text-neutral-500 font-medium md:flex-row-reverse">
                            <MapPin size={14} className="opacity-60" />
                            {exp.location}
                          </div>
                        </div>

                        <div className="flex flex-wrap gap-2 mt-4 md:justify-end">
                          {exp.skills.map((skill) => (
                            <span key={skill} className="px-3 py-1 text-[10px] font-black uppercase tracking-wider border border-neutral-200 dark:border-white/10 rounded-full bg-neutral-50/50 dark:bg-white/[0.02] text-neutral-600 dark:text-neutral-400 hover:border-black dark:hover:border-white transition-all cursor-default">
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Right Side: Content Details Card */}
                      <div className="flex flex-col gap-4 px-8 py-10 rounded-3xl border border-neutral-100 dark:border-white/5 backdrop-blur-3xl hover:bg-white/[0.03] dark:hover:bg-white/[0.03] transition-all duration-500 group">
                        <ul className="space-y-4">
                          {exp.description.map((point, i) => (
                            <li key={i} className="text-sm font-medium text-neutral-600 dark:text-neutral-400 leading-relaxed flex gap-4 group-hover:text-black dark:group-hover:text-white transition-colors">
                              <span className="shrink-0 w-1.5 h-1.5 rounded-full bg-neutral-900/10 dark:bg-white/10 mt-2 group-hover:bg-black dark:group-hover:bg-white transition-all" />
                              {point}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </>
                  ) : (
                    <>
                      {/* Left Side: Content Details Card */}
                      <div className="flex flex-col gap-4 px-8 py-10 rounded-3xl border border-neutral-100 dark:border-white/5 backdrop-blur-3xl hover:bg-white/[0.03] dark:hover:bg-white/[0.03] transition-all duration-500 group">
                        <ul className="space-y-4">
                          {exp.description.map((point, i) => (
                            <li key={i} className="text-sm font-medium text-neutral-600 dark:text-neutral-400 leading-relaxed flex gap-4 group-hover:text-black dark:group-hover:text-white transition-colors">
                              <span className="shrink-0 w-1.5 h-1.5 rounded-full bg-neutral-900/10 dark:bg-white/10 mt-2 group-hover:bg-black dark:group-hover:bg-white transition-all" />
                              {point}
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Right Side: Header Details */}
                      <div className="flex flex-col gap-2 md:text-left md:items-start md:col-start-2">
                        <div className="flex flex-col gap-1">
                          <span className="text-sm font-bold text-neutral-400 dark:text-neutral-500 uppercase tracking-widest leading-none">
                            {exp.period}
                          </span>
                          <h3 className="text-2xl sm:text-3xl font-black text-black dark:text-white leading-tight uppercase transition-colors">
                            {exp.company}
                          </h3>
                          <p className="text-lg font-bold text-neutral-800 dark:text-neutral-200 uppercase tracking-wide opacity-80">
                            {exp.role}
                          </p>
                          <div className="flex items-center gap-2 text-sm text-neutral-500 font-medium">
                            <MapPin size={14} className="opacity-60" />
                            {exp.location}
                          </div>
                        </div>

                        <div className="flex flex-wrap gap-2 mt-4 md:justify-start">
                          {exp.skills.map((skill) => (
                            <span key={skill} className="px-3 py-1 text-[10px] font-black uppercase tracking-wider border border-neutral-200 dark:border-white/10 rounded-full bg-neutral-50/50 dark:bg-white/[0.02] text-neutral-600 dark:text-neutral-400 hover:border-black dark:hover:border-white transition-all cursor-default">
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                    </>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Education Section */}
        <div className="flex flex-col gap-6 mt-32 mb-16 max-w-2xl">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-3"
          >
            <span className="h-[2px] w-12 bg-black dark:bg-white" />
            <span className="text-sm font-bold tracking-[0.2em] uppercase text-black dark:text-white">
              Academic Background
            </span>
          </motion.div>
          <h2 className="text-4xl sm:text-6xl font-black tracking-tighter text-black dark:text-white uppercase transition-colors">
            Education
          </h2>
        </div>

        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative flex flex-col md:flex-row gap-6 justify-between p-8 rounded-3xl border border-neutral-100 dark:border-white/5 backdrop-blur-3xl hover:bg-white/[0.03] dark:hover:bg-white/[0.03] transition-all duration-500 group"
          >
            <div className="flex gap-4">
              <div className="flex items-center justify-center w-12 h-12 rounded-2xl bg-neutral-100 dark:bg-white/10 text-neutral-800 dark:text-neutral-200">
                <GraduationCap size={24} />
              </div>
              <div>
                <h3 className="text-xl sm:text-2xl font-black text-black dark:text-white leading-tight uppercase transition-colors group-hover:text-black dark:group-hover:text-white">
                  Lovely Professional University
                </h3>
                <p className="text-base font-bold text-neutral-800 dark:text-neutral-200 uppercase tracking-wide opacity-80 mt-1">
                  Bachelor of Technology in Computer Science & Engineering
                </p>
                <div className="flex items-center gap-2 text-sm text-neutral-500 font-medium mt-2">
                  <MapPin size={14} className="opacity-60" />
                  Punjab, India
                </div>
              </div>
            </div>
            <div className="flex flex-col items-start md:items-end justify-center">
              <span className="text-sm font-black text-neutral-400 dark:text-neutral-500 uppercase tracking-widest leading-none">
                Aug 2021 – June 2025
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

function cn(...inputs: any[]) {
  return twMerge(clsx(inputs))
}

import { twMerge } from "tailwind-merge"
import { clsx } from "clsx"

