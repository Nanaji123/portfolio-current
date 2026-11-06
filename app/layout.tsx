import { Geist, Newsreader } from "next/font/google"
import type { Metadata, Viewport } from "next"
import Script from "next/script"
import React from "react"

import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import OnekoCat from "@/components/OnekoCat"
import { cn } from "@/lib/utils"
import { PROFILE, SITE_URL } from "@/lib/data"

const TITLE = `${PROFILE.name}, ${PROFILE.role}`

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: TITLE,
    template: `%s · ${PROFILE.name}`,
  },
  description: PROFILE.description,
  keywords: [
    "Nanaji Gundapu",
    "Senior Mobile Engineer",
    "Senior React Native Engineer",
    "React Native Developer",
    "Kotlin Developer",
    "Android Developer",
    "React Native Skia",
    "Mobile Engineer open to relocation",
    "Remote React Native Developer",
    "Full-Stack Mobile Engineer",
    "Node.js API Developer",
    "Mobile payments integration",
    "RevenueCat",
    "Razorpay",
    "WebRTC developer",
    "Fintech mobile developer",
    "EdTech app developer",
    "BuzinessAI",
  ],
  authors: [{ name: PROFILE.name, url: SITE_URL }],
  creator: PROFILE.name,
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
    locale: "en_US",
    url: SITE_URL,
    siteName: PROFILE.name,
    title: TITLE,
    description: PROFILE.description,
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: PROFILE.description,
    creator: "@GNanaji9",
  },
  alternates: {
    canonical: SITE_URL,
  },
}

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#fbfbf9" },
    { media: "(prefers-color-scheme: dark)", color: "#0c0c0b" },
  ],
}

const fontSans = Geist({ subsets: ["latin"], variable: "--font-sans" })
const fontDisplay = Newsreader({ subsets: ["latin"], variable: "--font-display", axes: ["opsz"] })

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning className={cn("antialiased", fontSans.variable, fontDisplay.variable)}>
      <body className="min-h-screen">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-3 focus:z-[60] focus:rounded-full focus:bg-foreground focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:text-background"
        >
          Skip to content
        </a>
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
