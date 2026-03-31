"use client"

import React from "react"
import { motion } from "framer-motion"
import { Calendar, MapPin, Briefcase } from "lucide-react"

const EXPERIENCE_DATA = [
  {
    company: "SISIYA EDTECH PVT LTD",
    role: "React Native & Next.js Developer",
    location: "Visakhapatnam, India",
    period: "July 2025 – Present",
    description: [
      "Redesigned and developed the entire Sisyaclass mobile app, improving UI/UX consistency and performance by 45%, integrating frontend with backend APIs to achieve 30% lower latency.",
      "Built Parent Dashboard and Student Performance modules with real-time analytics and data visualization, boosting user engagement by 40%.",
      "Developed a Live Classroom feature with Socket.IO for real-time collaboration, supporting 1,000+ concurrent users and integrated native Video Calling modules.",
      "Upgraded React Native from v0.74.5 → v0.82.0, resolving 120+ dependency issues and optimizing build stability across Android and iOS.",
      "Developed Sisya.com using Next.js and Framer Motion, achieving 100% design accuracy and creating SEO-optimized landing pages that increased organic traffic by 65%."
    ]
  },
  {
    company: "Nest India",
    role: "React Native Developer — Fintech Apps & Web Platform",
    location: "Bengaluru, India",
    period: "Dec 2024 – Jun 2025",
    description: [
      "Developed cross-platform fintech applications using React Native and React.js, improving performance and responsiveness by 35%.",
      "Led UI/UX design workflow in Figma, creating modern interfaces that increased onboarding flow completion by 25%.",
      "Built core fintech modules including Loan Application, KYC, EMI Dashboard, and Notifications, optimizing API integrations and reducing journey time by 40%.",
      "Delivered stable production builds with over 90% crash-free sessions through agile collaboration with backend and QA teams."
    ]
  },
  {
    company: "CodeSel.com",
    role: "Freelance Frontend Developer",
    location: "Remote",
    period: "Freelance",
    description: [
      "Delivered 10+ web projects including eCommerce platforms and custom business websites using Next.js and React Native.",
      "Designed clean, responsive, and user-friendly UIs with strong mobile-first principles.",
      "Integrated secure payment gateways such as Razorpay and Stripe for online stores and service-based platforms.",
      "Developed scalable, SEO-friendly architectures and reusable UI components to speed up development cycles."
    ]
  }
]

export function Experience() {
  return (
    <section className="relative w-full py-24 sm:py-32 overflow-hidden">
      {/* Vertical Dashed Lines (Matching Hero) */}
      <div className="absolute top-0 left-1/2 -translate-x-[600px] h-full w-[1px] border-l border-dashed border-neutral-300 dark:border-white/30 hidden lg:block [mask-image:linear-gradient(to_bottom,transparent,black_50%,transparent)]" />
      <div className="absolute top-0 right-1/2 translate-x-[600px] h-full w-[1px] border-r border-dashed border-neutral-300 dark:border-white/30 hidden lg:block [mask-image:linear-gradient(to_bottom,transparent,black_50%,transparent)]" />

      <div className="mx-auto max-w-5xl px-6 relative z-10">
        <div className="flex flex-col gap-4 mb-20">
          <h2 className="text-xl font-semibold tracking-tight text-black dark:text-white uppercase px-1 border-l-4 border-neutral-900 dark:border-white">
            Experience
          </h2>
          <p className="text-neutral-500 dark:text-neutral-400 text-lg max-w-2xl">
            My professional journey and key contributions across different roles and technologies.
          </p>
        </div>

        <div className="relative space-y-12 before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-neutral-200 before:to-transparent dark:before:via-neutral-800">
          {EXPERIENCE_DATA.map((exp, index) => (
            <motion.div
              key={exp.company + index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group"
            >
              {/* Dot */}
              <div className="flex items-center justify-center w-10 h-10 rounded-full border border-neutral-100 bg-white dark:bg-black dark:border-neutral-800 text-neutral-400 group-hover:text-neutral-900 dark:group-hover:text-white shadow-sm md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 transition-colors z-10">
                <Briefcase size={16} />
              </div>

              {/* Card */}
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 rounded-2xl border border-neutral-100 bg-neutral-50/50 dark:border-white/5 dark:bg-white/[0.02] hover:border-neutral-200 dark:hover:border-white/10 transition-all">
                <div className="flex flex-col gap-1 mb-4">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <h3 className="text-lg font-bold text-neutral-900 dark:text-white">
                      {exp.company}
                    </h3>
                    <div className="flex items-center gap-1.5 text-xs font-medium text-neutral-500 dark:text-neutral-400 bg-white dark:bg-white/5 px-2.5 py-1 rounded-full border border-neutral-100 dark:border-white/5">
                      <Calendar size={12} />
                      {exp.period}
                    </div>
                  </div>
                  <p className="text-sm font-semibold text-neutral-700 dark:text-neutral-300">
                    {exp.role}
                  </p>
                  <div className="flex items-center gap-1.5 text-xs text-neutral-500 dark:text-neutral-500 mt-1">
                    <MapPin size={12} />
                    {exp.location}
                  </div>
                </div>

                <ul className="space-y-2">
                  {exp.description.map((point, i) => (
                    <li key={i} className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed flex gap-2">
                      <span className="shrink-0 w-1.5 h-1.5 rounded-full bg-neutral-300 dark:bg-neutral-700 mt-2" />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
