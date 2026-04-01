"use client"

import React from "react"
import { motion } from "framer-motion"
import { Calendar, MapPin, Briefcase, GraduationCap, Building, Code } from "lucide-react"

const EXPERIENCE_DATA = [
  {
    company: "SISIYA EDTECH PVT LTD",
    role: "React Native & Next.js Developer",
    location: "Visakhapatnam, India",
    period: "July 2025 – Present",
    skills: ["React Native", "Next.js", "Socket.IO", "Framer Motion", "TypeScript"],
    isCurrent: true,
    icon: Code,
    description: [
      "Redesigned and developed the entire Sisyaclass mobile app, improving UI/UX consistency and performance by 45%, integrating frontend with backend APIs to achieve 30% lower latency.",
      "Contributed to the development of three production applications — the main Student App, Teacher App, and a School-specific SIP App, ensuring consistent architecture and feature parity.",
      "Built the Parent Dashboard and Student Performance modules with real-time analytics and data visualization, boosting user engagement by 40% and enhancing student tracking efficiency.",
      "Developed a Live Classroom feature with Socket.IO for real-time collaboration, supporting 1,000+ concurrent users, and integrated Video Calling, improving stability by 35% and reducing crashes by 20%.",
      "Upgraded React Native from v0.74.5 → v0.82.0, resolving 60+ dependency issues and optimizing build stability and runtime performance across Android and iOS platforms.",
      "Developed Sisya.com using Next.js and Framer Motion, achieving 100% design accuracy and creating SEO-optimized landing pages that increased organic traffic by 65% and improved Lighthouse score from 30 → 80."
    ]
  },
  {
    company: "Nest India",
    role: "React Native Developer",
    location: "Bengaluru, India",
    skills: ["React Native", "React.js", "Figma", "Redux", "Node.js"],
    period: "Dec 2024 – Jun 2025",
    icon: Code,
    description: [
      "Developed cross-platform fintech applications using React Native (mobile) and React.js (web), improving performance and responsiveness across devices by 35%.",
      "Led the UI/UX design workflow in Figma, creating modern interfaces that increased onboarding flow completion by 25% and enhanced overall user navigation.",
      "Built core fintech modules including Onboarding, Loan Application, KYC, EMI Dashboard, and Notifications, optimizing API integrations and reducing user journey time by 40%.",
      "Collaborated in agile sprints, improving delivery efficiency by 30%, reducing UI re-renders by 20%, and delivering stable production builds with over 90% crash-free sessions."
    ]
  },
  {
    company: "CodeSel.com",
    role: "Freelance Frontend Developer",
    location: "Remote",
    skills: ["Next.js", "React Native", "Razorpay", "Stripe", "Tailwind CSS"],
    period: "Freelance",
    icon: Code,
    description: [
      "Delivered 10+ web projects including eCommerce platforms and custom business websites using Next.js, JavaScript, and React Native.",
      "Designed clean, responsive, and user-friendly UIs with strong mobile-first principles, ensuring seamless performance across all screen sizes.",
      "Integrated secure payment gateways such as Razorpay and Stripe for online stores, ensuring smooth and reliable transactions.",
      "Developed scalable, SEO-friendly architectures and reusable components to speed up development cycles and improve maintainability."
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
      </div>
    </section>
  )
}

function cn(...inputs: any[]) {
  return twMerge(clsx(inputs))
}

import { twMerge } from "tailwind-merge"
import { clsx } from "clsx"

