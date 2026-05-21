import { Geist, Geist_Mono, JetBrains_Mono } from "next/font/google"
import type { Metadata } from "next"
import Script from "next/script"

import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { cn } from "@/lib/utils";
import OnekoCat from "@/components/OnekoCat"
import React from 'react'

const SITE_URL = "https://nanajigundapu.vercel.app"

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Nanaji Gundapu — Mobile App & Full-Stack Developer | Freelancer",
    template: "%s | Nanaji Gundapu",
  },
  description:
    "Nanaji Gundapu — Mobile App Developer & Full-Stack Engineer at Sisya EdTech. 2+ years building React Native, Kotlin, Next.js, and Node.js apps. Available for freelance projects, developer roles, and collaborations worldwide.",
  keywords: [
    // Personal identity
    "Nanaji Gundapu",
    "Nanaji Gundapu developer",
    "Nanaji Gundapu portfolio",
    "gundapunanaji",
    // Company & employer searches
    "Sisya EdTech developer",
    "Sisya class developer",
    "Sisya app developer",
    "Sisya mobile developer",
    "Sisya EdTech Visakhapatnam",
    "Sisya EdTech React Native",
    // Freelance & gig signals
    "hire React Native developer",
    "hire mobile app developer India",
    "hire full-stack developer India",
    "hire Next.js developer freelance",
    "hire Kotlin developer",
    "hire Android developer freelance",
    "freelance React Native developer",
    "freelance full-stack developer India",
    "freelance mobile app developer Visakhapatnam",
    "React Native freelancer India",
    "mobile app development for hire",
    "contract mobile developer",
    "remote mobile developer India",
    "remote full-stack developer India",
    // Collaboration signals
    "open source collaborator",
    "mobile app collaboration",
    "React Native collaboration",
    "full-stack collaboration project",
    // Core technical skills
    "React Native Developer",
    "Kotlin Developer",
    "Android Developer",
    "Next.js Developer",
    "Node.js Developer",
    "Full-Stack Developer",
    "Mobile App Developer",
    "WebRTC developer",
    "Socket.IO developer",
    "FastAPI developer",
    "Jetpack Compose developer",
    "real-time app developer",
    "EdTech app developer",
    "fintech mobile developer",
    // Location
    "developer Visakhapatnam",
    "developer Andhra Pradesh",
    "developer India",
    "LPU developer",
    "Lovely Professional University",
    // Job role searches
    "React Native engineer",
    "Android engineer",
    "full-stack engineer India",
    "mobile engineer India",
    "software developer India portfolio",
  ],
  authors: [{ name: "Nanaji Gundapu", url: SITE_URL }],
  creator: "Nanaji Gundapu",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: SITE_URL,
    siteName: "Nanaji Gundapu — Portfolio",
    title: "Nanaji Gundapu — Mobile App & Full-Stack Developer | Available for Freelance",
    description:
      "Mobile App Developer at Sisya EdTech. Expert in React Native, Kotlin, Next.js, Node.js & WebRTC. Available for freelance gigs, developer roles & open-source collaborations.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Nanaji Gundapu — Mobile App & Full-Stack Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Nanaji Gundapu — Mobile App & Full-Stack Developer | Freelancer",
    description:
      "Mobile App Developer at Sisya EdTech. Building React Native, Kotlin & Next.js apps. Open to freelance, collabs & developer opportunities.",
    images: ["/og-image.png"],
    creator: "@GNanaji9",
  },
  alternates: {
    canonical: SITE_URL,
  },
}

const fontSans = Geist({
  subsets: ["latin"],
  variable: "--font-sans",
})

const jetbrainsMono = JetBrains_Mono({ subsets: ['latin'], variable: '--font-mono' })

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn("antialiased", fontSans.variable, "font-mono", jetbrainsMono.variable)}
    >
      <body>
        <ThemeProvider>
          <Navbar />
          {children}
          <OnekoCat />
          <Footer />
        </ThemeProvider>
        <Script
          src="https://cloud.umami.is/script.js"
          data-website-id="fcbd0aac-557b-4a5b-8ee0-8437ac59beea"
          strategy="lazyOnload"
        />
      </body>
    </html>
  )
}
