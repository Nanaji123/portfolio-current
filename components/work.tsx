import React from "react"
import Image from "next/image"
import { ArrowUpRight } from "lucide-react"

import { OTHER_PROJECTS, PROJECTS, type Project, type Shot } from "@/lib/data"
import { cn } from "@/lib/utils"
import { Container, Phone, PhoneShell, SectionHeading, TextLink } from "@/components/ui/base"
import { ChronoScapePreview } from "@/components/chronoscape-preview"
import { LiveCallPreview } from "@/components/live-call-preview"

const byId = (id: string) => PROJECTS.find((p) => p.id === id)!

export function Work() {
  return (
    <section id="work" className="scroll-mt-20 pb-16">
      <Container>
        <SectionHeading aside="2024 to present">Selected work</SectionHeading>

        <div className="mt-10 space-y-24 lg:mt-14 lg:space-y-32">
          <ProjectBlock project={byId("buziness")}>
            <PhoneRow shots={byId("buziness").shots} />
          </ProjectBlock>

          <ProjectBlock project={byId("gym-helper")}>
            <GymPanel shots={byId("gym-helper").shots} />
          </ProjectBlock>

          <ProjectBlock project={byId("salary-survival")}>
            <PhoneRow shots={byId("salary-survival").shots} />
          </ProjectBlock>

          <SplitProject project={byId("funzone")}>
            <div className="flex justify-center gap-[6%]">
              {byId("funzone").shots.map((shot) => (
                <div key={shot.src} className="settle w-[46%] max-w-[250px]">
                  <Phone src={shot.src} alt={shot.alt} sizes="(min-width: 1024px) 250px, 46vw" className="w-full" />
                </div>
              ))}
              <div className="settle w-[46%] max-w-[250px]">
                <PhoneShell className="w-full">
                  <div
                    role="img"
                    aria-label="Live class video call: a lesson board, the teacher speaking, students' tiles, chat and call controls"
                    className="absolute inset-0"
                  >
                    <LiveCallPreview />
                  </div>
                </PhoneShell>
              </div>
            </div>
          </SplitProject>

          <SplitProject project={byId("chronoscape")} flip>
            <div className="settle flex justify-center">
              <PhoneShell className="w-[62%] max-w-[290px]">
                <div
                  role="img"
                  aria-label="Animated lock screen: a tree on a hillside moves in the wind while the sky cycles from dawn to night"
                  className="absolute inset-0"
                >
                  <ChronoScapePreview />
                </div>
              </PhoneShell>
            </div>
          </SplitProject>

          <OtherProjects />
        </div>
      </Container>
    </section>
  )
}

/** Three phones in a row. On small screens the row swipes, so no screen is lost. */
function PhoneRow({ shots }: { shots: Shot[] }) {
  return (
    <div className="no-scrollbar flex snap-x snap-mandatory gap-4 overflow-x-auto px-[9%] py-10 sm:justify-center sm:gap-[5%] sm:overflow-visible sm:px-[5%] sm:py-14 lg:gap-10 lg:py-16">
      {shots.map((shot) => (
        <div key={shot.src} className="settle w-[64%] shrink-0 snap-center sm:w-[28%] sm:max-w-[280px]">
          <Phone src={shot.src} alt={shot.alt} sizes="(min-width: 1024px) 280px, (min-width: 640px) 28vw, 64vw" className="w-full" />
        </div>
      ))}
    </div>
  )
}

function GymPanel({ shots }: { shots: Shot[] }) {
  const browser = shots.find((s) => s.kind === "browser")!
  const phones = shots.filter((s) => s.kind === "phone")
  return (
    <div className="grid items-center gap-8 px-[5%] py-8 sm:py-14 lg:grid-cols-[minmax(0,1fr)_auto] lg:gap-10 lg:px-12 lg:py-16">
      <div className="settle relative aspect-[1440/900] overflow-hidden rounded-[10px] shadow-[0_24px_50px_-28px_rgb(0_0_0/0.4)] ring-1 ring-black/10 dark:ring-white/10">
        <Image
          src={browser.src}
          alt={browser.alt}
          fill
          quality={90}
          sizes="(min-width: 1024px) 660px, 90vw"
          className="object-cover object-top dark:hidden"
        />
        {/* The CRM has its own dark theme, so the screenshot follows the site's */}
        {browser.srcDark && (
          <Image
            src={browser.srcDark}
            alt={browser.alt}
            fill
            quality={90}
            sizes="(min-width: 1024px) 660px, 90vw"
            className="hidden object-cover object-top dark:block"
          />
        )}
      </div>
      <div className="flex justify-center gap-[6%] lg:gap-7">
        {phones.map((shot) => (
          <div key={shot.src} className="settle w-[44%] max-w-[260px] lg:w-[178px]">
            <Phone src={shot.src} alt={shot.alt} sizes="(min-width: 1024px) 178px, 44vw" className="w-full" />
          </div>
        ))}
      </div>
    </div>
  )
}

function ProjectBlock({ project, children }: { project: Project; children: React.ReactNode }) {
  return (
    <article id={project.id} className="scroll-mt-24">
      <div className="overflow-hidden rounded-[20px] bg-panel">{children}</div>
      <div className="mt-8 grid gap-x-8 gap-y-6 lg:mt-10 lg:grid-cols-12">
        {/* Stays in view while the details on the right are read */}
        <ProjectHeader project={project} className="lg:sticky lg:top-24 lg:col-span-5 lg:self-start" />
        <ProjectDetail project={project} className="lg:col-span-7" />
      </div>
    </article>
  )
}

/** Panel on one side, the write-up on the other. */
function SplitProject({
  project,
  children,
  flip,
}: {
  project: Project
  children: React.ReactNode
  flip?: boolean
}) {
  return (
    <article id={project.id} className="grid scroll-mt-24 items-center gap-x-12 gap-y-8 lg:grid-cols-2">
      <div className={cn("overflow-hidden rounded-[20px] bg-panel px-[6%] py-10 sm:py-14", flip && "lg:order-last")}>
        {children}
      </div>
      <div>
        <ProjectHeader project={project} />
        <ProjectDetail project={project} className="mt-6 lg:mt-8" />
      </div>
    </article>
  )
}

function ProjectHeader({ project, className }: { project: Project; className?: string }) {
  return (
    <header className={className}>
      <h3 className="text-balance font-display text-[1.95rem] font-normal leading-[1.1] tracking-[-0.015em] sm:text-[2.2rem]">
        {project.name}
      </h3>
      <p className="mt-3 max-w-[34ch] text-pretty text-[17px] leading-snug">{project.summary}</p>
      <p className="mt-3 text-sm text-muted-foreground">{project.meta}</p>
      {project.links.length > 0 && (
        <p className="mt-4 flex flex-wrap gap-x-5 gap-y-1 text-sm">
          {project.links.map((l) => (
            <TextLink key={l.href} href={l.href}>
              {l.label}
            </TextLink>
          ))}
        </p>
      )}
    </header>
  )
}

function ProjectDetail({ project, className }: { project: Project; className?: string }) {
  return (
    <div className={className}>
      <p className="max-w-[62ch] text-pretty text-[17px] leading-[1.6]">{project.body}</p>
      <ul className="mt-7 border-t border-border">
        {project.points.map((p) => (
          <li key={p.text} className="border-b border-border py-3.5 text-[15px] leading-[1.55] text-muted-foreground">
            {p.title && <span className="font-medium text-foreground">{p.title} </span>}
            {p.text}
          </li>
        ))}
      </ul>
      <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
        {project.stack.join(", ")}
        {project.note && <span className="block">{project.note}</span>}
      </p>
    </div>
  )
}

function OtherProjects() {
  return (
    <div>
      <h3 className="border-b border-border pb-4 font-display text-[1.95rem] font-normal leading-none tracking-[-0.015em] sm:text-[2.2rem]">
        Also built
      </h3>
      <ul>
        {OTHER_PROJECTS.map((p) => (
          <li key={p.name} className="border-b border-border">
            <a
              href={p.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group grid gap-x-8 gap-y-1 py-5 sm:grid-cols-[170px_minmax(0,1fr)_auto]"
            >
              <span className="font-medium underline decoration-transparent underline-offset-4 transition-colors group-hover:decoration-foreground">
                {p.name}
              </span>
              <span className="max-w-[72ch] text-[15px] leading-[1.55] text-muted-foreground">
                {p.text}
                <span className="mt-1 block text-sm text-muted-foreground/80">{p.stack}</span>
              </span>
              <ArrowUpRight
                aria-hidden
                className="mt-1 hidden size-4 text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-foreground sm:block"
              />
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}
