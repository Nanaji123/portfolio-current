import React from "react"
import { BatteryFull, Camera, Flashlight, Lock, Signal, Wifi } from "lucide-react"

/**
 * An animated preview of ChronoScape, drawn in SVG and CSS. It follows what the Kotlin wallpaper
 * renders (day and night sky, sun arc, crescent moon, twinkling stars, drifting clouds, a recursive
 * tree moving in the wind) on a lock screen. It is illustrative, not a recording of the app.
 *
 * Rendered on the server, so the seeded tree below never has to hydrate. All sizes are in design
 * units (--u is 1/282 of the screen width), so it stays sharp at any phone size.
 */

const W = 282
const H = 613

const PHASES = [
  {
    name: "Dawn",
    time: "6:42",
    delay: "0s",
    sky: "linear-gradient(180deg,#27306b 0%,#a8638f 45%,#f6a77a 75%,#fcd9a8 100%)",
    hills: ["#6a5a8e", "#4a3b70", "#2b2149"],
  },
  {
    name: "Day",
    time: "12:30",
    delay: "-12s",
    sky: "linear-gradient(180deg,#2f7fd6 0%,#6db4ec 50%,#cfe9fb 100%)",
    hills: ["#6f9fb0", "#3f7f6a", "#23583f"],
  },
  {
    name: "Dusk",
    time: "18:05",
    delay: "-8s",
    sky: "linear-gradient(180deg,#24173f 0%,#7a2f6b 42%,#d8607a 70%,#f59e62 100%)",
    hills: ["#5a2f62", "#3d1f4c", "#1f102e"],
  },
  {
    name: "Night",
    time: "23:18",
    delay: "-4s",
    sky: "linear-gradient(180deg,#03050c 0%,#0b1430 55%,#1a2850 100%)",
    hills: ["#172247", "#101833", "#080c1e"],
  },
] as const

const HILLS = [
  "M0 453L38 411L70 437L112 385L150 429L188 399L228 441L262 413L282 425V613H0Z",
  "M0 493L46 451L84 479L126 437L170 483L214 449L252 479L282 463V613H0Z",
  "M0 539L58 512L104 526L150 497L198 530L246 516L282 528V613H0Z",
]

const round = (n: number) => Math.round(n * 100) / 100

/** Small seeded generator, so the tree is the same on every build. */
function seeded(seed: number) {
  let a = seed
  return () => {
    a = (a + 0x6d2b79f5) | 0
    let t = Math.imul(a ^ (a >>> 15), 1 | a)
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296
  }
}

/** Recursive branching, as in the wallpaper: tapered strokes grouped by depth, leaves at the tips. */
function buildTree() {
  const rand = seeded(11)
  const branches: Record<number, string[]> = {}
  const leaves: string[][] = [[], [], []]

  const leaf = (x: number, y: number, r: number) => {
    const circle = `M${round(x - r)} ${round(y)}a${r} ${r} 0 1 0 ${round(r * 2)} 0a${r} ${r} 0 1 0 ${round(-r * 2)} 0`
    leaves[Math.floor(rand() * 3)].push(circle)
  }

  const grow = (x: number, y: number, angle: number, length: number, depth: number) => {
    const nx = x + Math.cos(angle) * length
    const ny = y + Math.sin(angle) * length
    const cx = (x + nx) / 2 + (rand() - 0.5) * length * 0.3
    const cy = (y + ny) / 2 + (rand() - 0.5) * length * 0.3
    ;(branches[depth] ??= []).push(`M${round(x)} ${round(y)}Q${round(cx)} ${round(cy)} ${round(nx)} ${round(ny)}`)

    if (depth <= 2) {
      const count = depth === 1 ? 3 : 1
      for (let i = 0; i < count; i++) {
        leaf(nx + (rand() - 0.5) * 15, ny + (rand() - 0.5) * 15, round(3.2 + rand() * 3.4))
      }
    }
    if (depth === 1) return

    const kids = depth > 4 ? 2 : rand() > 0.35 ? 2 : 3
    for (let i = 0; i < kids; i++) {
      const spread = (i - (kids - 1) / 2) * (0.62 + rand() * 0.2)
      grow(nx, ny, angle + spread + (rand() - 0.5) * 0.22, length * (0.72 + rand() * 0.1), depth - 1)
    }
  }

  grow(150, 500, -Math.PI / 2 + 0.04, 50, 6)

  return {
    branches: Object.entries(branches).map(([depth, paths]) => ({
      width: round(Math.max(0.7, Number(depth) ** 2 * 0.2)),
      d: paths.join(""),
    })),
    leaves: leaves.map((paths) => paths.join("")),
  }
}

const TREE = buildTree()

const STARS = Array.from({ length: 42 }, (_, i) => ({
  x: (i * 73 + 11) % W,
  y: (i * 47 + 9) % 380,
  r: i % 5 === 0 ? 1 : 0.6,
  delay: `${-(i % 7) * 0.45}s`,
  twinkle: i % 3 === 0,
}))

const CLOUDS = [
  { y: 262, scale: 1, delay: "-6s", duration: "46s" },
  { y: 318, scale: 0.72, delay: "-30s", duration: "62s" },
  { y: 228, scale: 0.55, delay: "-18s", duration: "74s" },
]

const u = (n: number) => `calc(var(--u) * ${n})`

export function ChronoScapePreview() {
  return (
    <div className="cs-scene absolute inset-0 overflow-hidden bg-[#0b1430] text-white [container-type:inline-size]">
      <div aria-hidden className="absolute inset-0 [--u:calc(100cqw/282)]">
        {/* Sky */}
        {PHASES.map((p) => (
          <div
            key={p.name}
            className="cs-phase absolute inset-0"
            style={{ background: p.sky, animationDelay: p.delay, opacity: p.name === "Dusk" ? 1 : 0 }}
          />
        ))}

        <svg
          viewBox={`0 0 ${W} ${H}`}
          preserveAspectRatio="xMidYMax slice"
          className="absolute inset-0 h-full w-full"
          fill="none"
        >
          <defs>
            <radialGradient id="cs-sun-glow">
              <stop offset="0" stopColor="#ffd98a" stopOpacity="0.85" />
              <stop offset="0.35" stopColor="#ffc46e" stopOpacity="0.35" />
              <stop offset="1" stopColor="#ffb45e" stopOpacity="0" />
            </radialGradient>
            <g id="cs-cloud">
              <path d="M18 34a14 14 0 0 1 3-27 19 19 0 0 1 35-3 15 15 0 0 1 21 9 12 12 0 0 1 4 21Z" />
            </g>
            <g id="cs-tree-wood" stroke="currentColor" strokeLinecap="round">
              {TREE.branches.map((b) => (
                <path key={b.width} d={b.d} strokeWidth={b.width} />
              ))}
            </g>
            <path id="cs-leaf-0" d={TREE.leaves[0]} />
            <path id="cs-leaf-1" d={TREE.leaves[1]} />
            <path id="cs-leaf-2" d={TREE.leaves[2]} />
          </defs>

          {/* Stars, visible with the night phase */}
          <g className="cs-phase" style={{ animationDelay: "-4s", opacity: 0 }}>
            {STARS.map((s, i) => (
              <circle
                key={i}
                cx={s.x}
                cy={s.y}
                r={s.r}
                fill="#fff"
                className={s.twinkle ? "cs-twinkle" : undefined}
                style={s.twinkle ? { animationDelay: s.delay } : undefined}
              />
            ))}
          </g>

          {/* Sun and crescent moon orbit a point hidden behind the hills */}
          <g className="cs-sun-arm" style={{ transform: "rotate(62deg)" }}>
            <circle cx="141" cy="285" r="60" fill="url(#cs-sun-glow)" />
            <circle cx="141" cy="285" r="16" fill="#ffe9ad" />
          </g>
          <g className="cs-moon-arm" style={{ transform: "rotate(242deg)" }}>
            <path d="M138 271a14 14 0 1 0 15 21a11.5 11.5 0 0 1-15-21Z" fill="#e8ecff" />
          </g>

          {/* Clouds */}
          <g className="cs-clouds" fill="#fff" style={{ opacity: 0.3 }}>
            {CLOUDS.map((c) => (
              <g key={c.y} className="cs-drift" style={{ animationDelay: c.delay, animationDuration: c.duration }}>
                <use href="#cs-cloud" transform={`translate(0 ${c.y}) scale(${c.scale})`} />
              </g>
            ))}
          </g>

          {/* Hills: a solid base, with each phase's colours fading over it */}
          <g fill="#10142c">
            {HILLS.map((d) => (
              <path key={d} d={d} />
            ))}
          </g>
          {PHASES.map((p) => (
            <g
              key={p.name}
              className="cs-phase"
              style={{ animationDelay: p.delay, opacity: p.name === "Dusk" ? 1 : 0 }}
            >
              {HILLS.map((d, i) => (
                <path key={d} d={d} fill={p.hills[i]} />
              ))}
            </g>
          ))}

          {/* The world tree */}
          <g className="cs-grow">
            <g className="cs-sway">
              <use href="#cs-tree-wood" color="#4a2a14" />
              <use href="#cs-leaf-0" fill="#2f8a4c" />
              <use href="#cs-leaf-1" fill="#4ba561" />
              <use href="#cs-leaf-2" fill="#7cc576" />
              {/* The same shapes as a silhouette, faded in through dusk and night */}
              <g className="cs-dim" style={{ opacity: 0.7 }}>
                <use href="#cs-tree-wood" color="#070a18" />
                <use href="#cs-leaf-0" fill="#070a18" />
                <use href="#cs-leaf-1" fill="#070a18" />
                <use href="#cs-leaf-2" fill="#070a18" />
              </g>
            </g>
          </g>
        </svg>

        {/* Status bar and camera */}
        <div
          className="absolute left-1/2 z-10 -translate-x-1/2 rounded-full bg-black ring-1 ring-white/10"
          style={{ top: u(13), width: u(11), height: u(11) }}
        />
        <div
          className="absolute right-0 top-0 z-10 flex items-center text-white/90"
          style={{ gap: u(4), padding: `${u(13)} ${u(22)} 0 0` }}
        >
          <Signal style={{ width: u(12), height: u(12) }} />
          <Wifi style={{ width: u(12), height: u(12) }} />
          <BatteryFull style={{ width: u(15), height: u(15) }} />
        </div>

        {/* Lock screen */}
        <div
          className="absolute inset-x-0 flex flex-col items-center [text-shadow:0_1px_12px_rgb(0_0_0/0.3)]"
          style={{ top: u(58) }}
        >
          <Lock className="opacity-85" style={{ width: u(13), height: u(13) }} />
          <p className="font-medium text-white/90" style={{ marginTop: u(8), fontSize: u(11.5) }}>
            Thursday, 6 November
          </p>
          <div className="relative w-full" style={{ height: u(70) }}>
            {PHASES.map((p) => (
              <p
                key={p.name}
                className="cs-phase absolute inset-0 text-center font-semibold tracking-[-0.04em]"
                style={{
                  fontSize: u(66),
                  lineHeight: u(70),
                  animationDelay: p.delay,
                  opacity: p.name === "Dusk" ? 1 : 0,
                }}
              >
                {p.time}
              </p>
            ))}
          </div>
          <div
            className="flex items-center rounded-full bg-black/25 font-medium text-white/90 backdrop-blur-md [text-shadow:none]"
            style={{ marginTop: u(8), gap: u(4), padding: `${u(4)} ${u(10)}`, fontSize: u(9.5), lineHeight: u(12) }}
          >
            <span>ChronoScape ·</span>
            <span className="relative inline-block" style={{ width: u(24), height: u(12) }}>
              {PHASES.map((p) => (
                <span
                  key={p.name}
                  className="cs-phase absolute inset-0"
                  style={{ animationDelay: p.delay, opacity: p.name === "Dusk" ? 1 : 0 }}
                >
                  {p.name}
                </span>
              ))}
            </span>
          </div>
        </div>

        <div className="absolute inset-x-0 flex items-center justify-between" style={{ bottom: u(30), padding: `0 ${u(30)}` }}>
          {[Flashlight, Camera].map((Icon, i) => (
            <span
              key={i}
              className="grid place-items-center rounded-full bg-black/30 backdrop-blur-md"
              style={{ width: u(42), height: u(42) }}
            >
              <Icon style={{ width: u(16), height: u(16) }} />
            </span>
          ))}
        </div>
        <div
          className="absolute left-1/2 -translate-x-1/2 rounded-full bg-white/80"
          style={{ bottom: u(8), width: u(104), height: u(4) }}
        />
      </div>
    </div>
  )
}
