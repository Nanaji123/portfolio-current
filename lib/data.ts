/**
 * Everything the site says lives here. Numbers come from the résumé or were checked
 * against the code (test counts are from passing runs). **Double asterisks** mark the
 * phrases to emphasise, matching the bold text on the résumé.
 */

export const SITE_URL = "https://nanajigundapu.vercel.app"

export const PROFILE = {
  name: "Nanaji Gundapu",
  role: "Senior Mobile Engineer",
  company: "Galaxy Tech Solutions",
  location: "Hyderabad, India",
  timezone: "UTC+5:30",
  availability: "Open to relocation and remote",
  email: "gundapunanaji123@gmail.com",
  phone: "+91 939 284 4826",
  phoneHref: "tel:+919392844826",
  resume: "https://drive.google.com/file/d/1kyqT2mi8TrtsJyXqxbk7QpKyhUdRswcc/view?usp=sharing",
  photo: "/nanaji.jpg",
  description:
    "Senior Mobile Engineer, open to relocation and remote roles. I build production apps in React Native and Kotlin, along with the Node.js APIs and payment integrations behind them.",
} as const

export const SOCIALS = {
  github: "https://github.com/Nanaji123",
  linkedin: "https://www.linkedin.com/in/nanaji-gundapu-ab5935264/",
  x: "https://x.com/GNanaji9",
  email: `mailto:${PROFILE.email}`,
} as const

export const METRICS = [
  { value: "1,000+", label: "Concurrent users on live video" },
  { value: "5,000+", label: "Users served across products" },
  { value: "30%", label: "Lower API latency" },
  { value: "45%", label: "Better app performance" },
] as const

export type Shot = { src: string; srcDark?: string; alt: string; kind: "phone" | "browser" }
export type Point = { title?: string; text: string }
export type Project = {
  id: string
  name: string
  summary: string
  meta: string
  body: string
  points: Point[]
  stack: string[]
  links: { label: string; href: string }[]
  shots: Shot[]
  note?: string
}

export const PROJECTS: Project[] = [
  {
    id: "buziness",
    name: "BuzinessAI",
    summary: "Ads, posts, design and leads for small businesses, in one app.",
    meta: "Galaxy Tech Solutions · 2026 to present",
    body: "I'm the primary engineer on the mobile app for a marketing platform that runs Meta, Google and LinkedIn campaigns, schedules posts, tracks leads and generates designs. I also build the APIs and billing behind it. The app is bare React Native 0.86 with Redux Toolkit, and it's live on Google Play.",
    points: [
      {
        title: "Native image editor.",
        text: "About 11,000 lines on Skia, with PSD templates, text, shapes, masks, colour grading, undo and snapping, covered by 199 tests. Now in device testing before it replaces the web editor in store builds.",
      },
      {
        title: "Gestures and rendering.",
        text: "Drag, pinch and rotate run on the UI thread, so the canvas answers the finger in the same frame. Colour grading runs the server export's own tables as a GPU shader, so the preview matches the download.",
      },
      {
        title: "API optimisation.",
        text: "Designed mobile-specific APIs across the Fastify services: one bootstrap call at startup, compact responses, server paging and compound indexes. One dashboard went from six reads to one, and the changes are opt-in, so the web app was unaffected.",
      },
      {
        title: "Payments.",
        text: "Razorpay checkout with payment signature verification and credit-wallet top-ups, plus App Store subscriptions through RevenueCat: a secured webhook, event de-duplication and a sync fallback for late webhooks.",
      },
      {
        title: "Push notifications.",
        text: "A delivery outbox on FCM that survives restarts, retries with backoff and uses row locking so workers don't double-send. It records why each failure happened and removes dead device tokens.",
      },
    ],
    stack: ["React Native", "TypeScript", "Skia", "Reanimated", "Redux Toolkit", "Node.js", "Fastify", "PostgreSQL", "Prisma", "Razorpay", "RevenueCat", "FCM", "Sentry"],
    links: [{ label: "Google Play", href: "https://play.google.com/store/apps/details?id=com.buzinessai.app" }],
    shots: [
      {
        src: "/work/buziness-editor.jpg",
        alt: "Native image editor open on a fashion poster, with text, shape, image and logo tools",
        kind: "phone",
      },
      {
        src: "/work/buziness-home.jpg",
        alt: "BuzinessAI home screen with connected accounts and the Ads, Posts, Design, Leads, Calendar and Insights modules",
        kind: "phone",
      },
      {
        src: "/work/buziness-ads.jpg",
        alt: "Ad Expert screen for creating Meta and Google ad campaigns",
        kind: "phone",
      },
    ],
  },
  {
    id: "gym-helper",
    name: "Gym Helper",
    summary: "A member app and a staff CRM on one backend.",
    meta: "Personal project · 2026",
    body: "A product for independent gyms. Members carry their pass, check in and track their progress on their phone, while staff run members, leads, plans and payments from a web dashboard. What staff publish in the CRM appears in the member app.",
    points: [
      {
        title: "Member app.",
        text: "QR pass, check-in, gym traffic, a floor map and a drag-to-compare before and after view, built with Expo and Reanimated.",
      },
      {
        title: "Staff CRM.",
        text: "Revenue and membership dashboards, dues tracking, WhatsApp follow-ups and a command palette, built with Next.js.",
      },
      {
        title: "Backend.",
        text: "Convex, modelled for many gyms and covered by 92 tests. Phone sign-in uses hashed one-time codes, attempt limits and hashed session tokens.",
      },
    ],
    stack: ["Expo", "React Native", "Next.js", "Convex", "TypeScript"],
    links: [{ label: "Member app source", href: "https://github.com/Nanaji123/gym_traineee" }],
    note: "Iron Forge Fitness is demo data.",
    shots: [
      {
        src: "/work/gym-crm.jpg",
        srcDark: "/work/gym-crm-dark.jpg",
        alt: "Staff CRM dashboard with revenue by month, membership health and dues",
        kind: "browser",
      },
      {
        src: "/work/gym-home.jpg",
        alt: "Member app home with the gym's hours, a membership pass with QR code and a check-in button",
        kind: "phone",
      },
      {
        src: "/work/gym-journey.jpg",
        alt: "Member app journey screen with weight progress, streaks and a before and after comparison",
        kind: "phone",
      },
    ],
  },
  {
    id: "salary-survival",
    name: "Salary Survival",
    summary: "A daily spend limit that makes every salary last until payday.",
    meta: "Personal project · 2026 · Store release in preparation",
    body: "You log your salary the day it lands and the app works out what's safe to spend each day until the next one. Every expense updates that number straight away. Accounts are tied to the device, with no email, password, ads or tracking.",
    points: [
      {
        title: "Voice logging.",
        text: "Hold to talk, and speech becomes a structured expense through transcription and a schema-checked interpretation step.",
      },
      {
        title: "AI on request.",
        text: "Spending summaries and salary plans only run when asked, and show what they will read first.",
      },
      {
        title: "A game layer.",
        text: "XP, levels, daily quests and trophies, with daily caps so XP can't be farmed.",
      },
      {
        title: "Subscriptions.",
        text: "RevenueCat on the client, with free-tier limits enforced on the server.",
      },
    ],
    stack: ["Expo", "React Native", "Convex", "OpenAI", "RevenueCat"],
    links: [{ label: "Source", href: "https://github.com/Nanaji123/salary_survaival" }],
    shots: [
      {
        src: "/work/salary-home.jpg",
        alt: "Home screen with money left this cycle, a salary health bar, level and daily quests",
        kind: "phone",
      },
      {
        src: "/work/salary-insights.jpg",
        alt: "Insights screen with salary used, safe daily spend and an AI summary",
        kind: "phone",
      },
      {
        src: "/work/salary-welcome.jpg",
        alt: "Welcome screen reading Make every salary last the month",
        kind: "phone",
      },
    ],
  },
  {
    id: "funzone",
    name: "Funzone and live classes",
    summary: "Games, rewards and real-time video for an EdTech platform.",
    meta: "Sisiya EdTech · 2025 to 2026",
    body: "I built the Funzone game hub and Sisya Coin rewards from the React Native UI through Node.js logic to PostgreSQL, along with real-time video calling on WebRTC and Socket.IO for 1,000+ concurrent users.",
    points: [
      { title: "Migration.", text: "Led the React Native 0.74 to 0.82 migration across production environments." },
      { title: "Redesign.", text: "Improved the core app's performance by 45% and reduced API latency by 30%." },
      {
        title: "Native modules.",
        text: "Kotlin audio modules on Foreground Services, and 20% fewer re-renders with Redux Toolkit and Redux Persist.",
      },
    ],
    stack: ["React Native", "WebRTC", "Socket.IO", "Kotlin", "Node.js", "PostgreSQL"],
    links: [],
    note: "The video call screen is an illustrative recreation with sample data.",
    shots: [
      {
        src: "/work/funzone.jpg",
        alt: "Funzone game hub with rank, coins, XP, a daily streak and game modes",
        kind: "phone",
      },
    ],
  },
  {
    id: "chronoscape",
    name: "ChronoScape",
    summary: "A live wallpaper where a tree grows on your home screen.",
    meta: "Personal project · 2026 · Native Android",
    body: "A native Android wallpaper in Kotlin. A world tree grows over a duration you choose, under a day and night sky with a sun arc, crescent moon, twinkling stars and drifting clouds, while its branches move in the wind.",
    points: [
      {
        title: "Custom renderer.",
        text: "A Canvas renderer inside a WallpaperService draws recursive branches, a tapered trunk, vines and dense vegetation.",
      },
      {
        title: "Built for battery.",
        text: "Drawing stops whenever the wallpaper isn't visible, and rendering is tuned for consistent frame rates on mid-range devices.",
      },
      {
        title: "Growth as state.",
        text: "Growth persists between sessions and drives the scene: rain while the tree is young, vegetation that appears in stages, and seasons that cycle as it grows.",
      },
      {
        title: "Companion app.",
        text: "Jetpack Compose and Material 3 with MVVM.",
      },
    ],
    stack: ["Kotlin", "Jetpack Compose", "MVVM", "Android SDK", "WallpaperService"],
    links: [{ label: "Source", href: "https://github.com/Nanaji123/chronoscape1" }],
    note: "The preview is an illustrative animation, not a screen recording.",
    shots: [],
  },
]

export const OTHER_PROJECTS = [
  {
    name: "SyncFlow",
    text: "Full-stack real-time collaboration platform with Ollama AI for task automation, JWT and 2FA authentication, and a backend designed for low-latency, high-concurrency communication.",
    stack: "React Native, Node.js, PostgreSQL, Socket.IO, Ollama",
    href: "https://github.com/Nanaji123/SyncFlow",
  },
  {
    name: "Vibely",
    text: "AI conversation assistant for iOS and Android.",
    stack: "React Native, Expo, Convex",
    href: "https://github.com/Nanaji123/vibely",
  },
  {
    name: "NoteSnap",
    text: "Turns PDFs into flashcards, quizzes, summaries and mind maps, with spaced repetition.",
    stack: "Next.js, OpenAI",
    href: "https://notesnap.app",
  },
] as const

export const EXPERIENCE = [
  {
    period: "Jun 2026 – Present",
    current: true,
    role: "Senior Mobile Engineer",
    company: "Galaxy Tech Solutions",
    about: "Builds BuzinessAI, a marketing platform for small businesses.",
    location: "Hyderabad, India",
    highlights: [
      "Designed **scalable mobile application architecture**, reusable modules and clean architecture patterns to improve maintainability, code reuse and long-term application scalability.",
      "Built and optimised **backend APIs** on Node.js and Fastify: a one-call startup bootstrap, compact mobile responses, server paging and compound indexes across the design, posts, leads, ads and agency services.",
      "Integrated **payments**: Razorpay checkout with signature verification and wallet top-ups, and App Store subscriptions through RevenueCat with a secured webhook, event de-duplication and a sync fallback.",
      "Built a **push notification pipeline** on FCM with a restart-safe outbox, retries with backoff, row locking and per-failure reason codes.",
      "Optimised application performance across **rendering, API calls, memory usage and responsiveness**, reducing performance bottlenecks across production features.",
      "Implemented **REST API integrations, routing, authentication, data handling and error management** for production mobile features, ensuring reliable communication between mobile clients and backend services.",
      "Owned features end-to-end, from **requirement analysis and technical implementation to testing, deployment and production support**, collaborating with product, design, backend and QA teams.",
    ],
    stack: "React Native, TypeScript, Kotlin, Skia, Redux Toolkit, Node.js, Fastify, PostgreSQL, Razorpay, RevenueCat",
    related: { label: "See BuzinessAI", href: "/#buziness" },
  },
  {
    period: "Jul 2025 – Jun 2026",
    current: false,
    role: "Mobile Full-Stack Developer",
    company: "Sisiya EdTech Pvt. Ltd.",
    about: "Online learning platform with live classes for school students.",
    location: "Visakhapatnam, India",
    highlights: [
      "Architected and shipped full-stack features across mobile and backend, including **real-time video calling** using WebRTC and Socket.IO supporting **1,000+ concurrent users**.",
      "Built the **Sisya Coin** reward system and **Funzone** gamification features, spanning React Native UI, Node.js business logic and PostgreSQL persistence.",
      "Led the **React Native 0.74.5 → 0.82.0** migration, improving platform stability and maintaining compatibility across production environments.",
      "Redesigned the core application UI/UX, improving application performance by **45%** and reducing API latency by **30%**.",
      "Integrated native **Kotlin** Android modules for audio management using Foreground Services, and reduced frontend re-renders by **20%** using Redux Toolkit and Redux Persist.",
    ],
    stack: "React Native, WebRTC, Socket.IO, Kotlin, Node.js, PostgreSQL, Redux Toolkit",
    related: { label: "See Funzone", href: "/#funzone" },
  },
  {
    period: "Jan 2024 – Jun 2025",
    current: false,
    role: "React Native Developer, Fintech Applications",
    company: "Nest India",
    about: "Fintech company building digital lending products.",
    location: "Bengaluru, India",
    highlights: [
      "Designed and built full-stack fintech applications using **React Native, Next.js, Node.js, Express.js and TypeScript**, covering loan onboarding, repayment (EMI) tracking and CRM workflows for **1,000+ users**.",
      "Developed secure backend workflows including **identity verification (e-KYC)**, REST API integrations, JWT authentication and loan processing modules, reducing onboarding time by **40%**.",
      "Improved end-to-end application performance by **35%** through database query optimisation, lazy loading and component refactoring.",
    ],
    stack: "React Native, Next.js, Node.js, Express.js, TypeScript, JWT, e-KYC",
    related: null,
  },
] as const

export const EDUCATION = {
  period: "Aug 2021 – Jun 2025",
  degree: "Bachelor of Technology in Information Technology",
  school: "Lovely Professional University",
  location: "Punjab, India",
} as const

export const SKILLS: { group: string; proof?: string; items: string }[] = [
  {
    group: "Mobile",
    proof: "Production apps in React Native and native Kotlin, from a Skia image editor to Foreground Services and store releases.",
    items: "React Native, Kotlin, Swift (iOS), Jetpack Compose, Android SDK, MVVM, Foreground Services, Skia, Reanimated, Expo",
  },
  {
    group: "Backend & APIs",
    proof: "REST APIs and services shaped for mobile clients: fewer calls, smaller responses and faster screens.",
    items: "Node.js, Express.js, Fastify, FastAPI, Convex, REST API design, JWT authentication, e-KYC integration",
  },
  {
    group: "Payments",
    proof: "Checkout, subscriptions, webhooks and entitlement sync across Android and iOS.",
    items: "Razorpay, RevenueCat, App Store subscriptions, webhooks, credit wallets",
  },
  {
    group: "Real-time",
    proof: "Video calling for 1,000+ concurrent users, live updates and push delivery.",
    items: "WebRTC, Socket.IO, Mediasoup, Firebase Cloud Messaging",
  },
  { group: "Database", items: "PostgreSQL, Prisma ORM, query optimisation, indexing" },
  { group: "Frontend", items: "React.js, Next.js, TypeScript, JavaScript, Tailwind CSS, Framer Motion" },
  { group: "State", items: "Redux Toolkit, RTK Query, Redux Persist, Context API" },
  { group: "Testing & tools", items: "Jest, Vitest, Sentry, AWS, GitHub, Figma, Splunk" },
]

export const LANGUAGES = ["English", "Hindi", "Telugu"]
