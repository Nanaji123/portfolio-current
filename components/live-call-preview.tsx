import React from "react"
import {
  BatteryFull,
  ChevronLeft,
  Hand,
  MessageSquare,
  Mic,
  MicOff,
  MonitorUp,
  PhoneOff,
  Signal,
  Users,
  Video,
  Wifi,
} from "lucide-react"

/**
 * An illustrative live-class video call, showing the kind of screen the WebRTC work powered.
 * Names and numbers are sample data. All sizes are in design units (--u is 1/282 of the
 * screen width), so it stays sharp at any phone size.
 */

const u = (n: number) => `calc(var(--u) * ${n})`
const icon = (n: number) => ({ width: u(n), height: u(n) })

const TILES = [
  { initials: "RS", name: "Rahul", tone: "from-sky-400 to-indigo-500" },
  { initials: "SP", name: "Sneha", tone: "from-emerald-400 to-teal-600", muted: true },
  { initials: "+1,021", name: "others", tone: "from-slate-600 to-slate-800", small: true },
]

const CHAT = [
  { name: "Rahul", text: "Can you repeat the last formula?" },
  { name: "Sneha", text: "Got it, thank you!" },
]

export function LiveCallPreview() {
  return (
    <div className="absolute inset-0 overflow-hidden bg-[#0a0c11] text-white [container-type:inline-size]">
      <div aria-hidden className="absolute inset-0 flex flex-col [--u:calc(100cqw/282)]" style={{ paddingTop: u(42) }}>
        {/* Status bar and camera */}
        <div
          className="absolute left-1/2 top-0 z-10 -translate-x-1/2 rounded-full bg-black ring-1 ring-white/10"
          style={{ marginTop: u(13), ...icon(11) }}
        />
        <div
          className="absolute inset-x-0 top-0 flex items-center justify-between font-semibold"
          style={{ padding: `${u(12)} ${u(24)} 0`, fontSize: u(11.5) }}
        >
          <span>9:41</span>
          <span className="flex items-center text-white/90" style={{ gap: u(4) }}>
            <Signal style={icon(12)} />
            <Wifi style={icon(12)} />
            <BatteryFull style={icon(15)} />
          </span>
        </div>

        {/* Header */}
        <div className="flex items-center" style={{ gap: u(8), padding: `0 ${u(14)}` }}>
          <span className="grid place-items-center rounded-full bg-white/10" style={icon(28)}>
            <ChevronLeft style={icon(14)} />
          </span>
          <div className="min-w-0 flex-1 leading-tight">
            <p className="truncate font-semibold" style={{ fontSize: u(12) }}>
              Physics · Class 10
            </p>
            <p className="text-white/50" style={{ fontSize: u(9.5), marginTop: u(2) }}>
              Live class · 42:18
            </p>
          </div>
          <span
            className="flex items-center rounded-full bg-red-500/15 font-semibold tracking-wide text-red-400"
            style={{ gap: u(4), padding: `${u(3)} ${u(8)}`, fontSize: u(9) }}
          >
            <span className="vc-live rounded-full bg-red-500" style={icon(6)} />
            LIVE
          </span>
        </div>

        {/* Shared lesson board with the host on top */}
        <div
          className="relative overflow-hidden bg-[linear-gradient(155deg,#1a4a40_0%,#0f2d29_70%,#0b2320_100%)]"
          style={{ margin: `${u(10)} ${u(12)} 0`, height: u(236), borderRadius: u(18) }}
        >
          <div
            className="absolute flex items-center rounded-full bg-black/35 font-medium text-white/85"
            style={{ left: u(10), top: u(10), gap: u(4), padding: `${u(3)} ${u(8)}`, fontSize: u(8.5) }}
          >
            <span className="flex items-end" style={{ gap: u(1.5) }}>
              {[4, 6, 8].map((h) => (
                <span key={h} className="rounded-sm bg-emerald-400" style={{ width: u(2), height: u(h) }} />
              ))}
            </span>
            HD · 38 ms
          </div>
          <div
            className="absolute flex items-center rounded-full bg-black/35 font-medium text-white/85"
            style={{ right: u(10), top: u(10), gap: u(4), padding: `${u(3)} ${u(8)}`, fontSize: u(8.5) }}
          >
            <Users style={icon(10)} />
            1,024
          </div>

          <div className="absolute inset-x-0 text-center" style={{ top: u(52) }}>
            <p className="text-white/60" style={{ fontSize: u(9.5) }}>
              Newton&apos;s second law
            </p>
            <p
              className="font-display tracking-[-0.01em] text-[#f4f1e4]"
              style={{ fontSize: u(40), lineHeight: u(48), marginTop: u(4) }}
            >
              F = m × a
            </p>
            <svg
              viewBox="0 0 180 14"
              fill="none"
              className="mx-auto"
              style={{ width: u(150), height: u(12), marginTop: u(2) }}
            >
              <path
                className="vc-draw"
                d="M6 9C46 2 104 12 174 5"
                stroke="#f2c14e"
                strokeWidth="2.5"
                strokeLinecap="round"
                pathLength={100}
              />
            </svg>
          </div>

          {/* Host, currently speaking */}
          <div
            className="vc-speaking absolute grid place-items-center bg-[linear-gradient(150deg,#fcd9a8,#e88a9a)] text-[#3b1d2a]"
            style={{ right: u(10), bottom: u(10), width: u(70), height: u(88), borderRadius: u(12) }}
          >
            <span className="font-semibold" style={{ fontSize: u(20) }}>
              AK
            </span>
          </div>
          <div
            className="absolute flex items-center rounded-full bg-black/45 font-medium"
            style={{ left: u(10), bottom: u(10), gap: u(6), padding: `${u(4)} ${u(10)} ${u(4)} ${u(6)}`, fontSize: u(9.5) }}
          >
            <span className="flex items-end" style={{ gap: u(1.5), height: u(11) }}>
              {[0, 0.2, 0.4].map((delay) => (
                <span
                  key={delay}
                  className="vc-bar h-full rounded-sm bg-emerald-400"
                  style={{ width: u(2.5), animationDelay: `${delay}s` }}
                />
              ))}
            </span>
            Ms. Anjali · Host
          </div>
        </div>

        {/* Participants */}
        <div className="grid grid-cols-3" style={{ gap: u(8), margin: `${u(8)} ${u(12)} 0` }}>
          {TILES.map((t) => (
            <div
              key={t.name}
              className={`relative grid place-items-center bg-gradient-to-br ${t.tone}`}
              style={{ height: u(74), borderRadius: u(14) }}
            >
              <span className="font-semibold" style={{ fontSize: u(t.small ? 12 : 14) }}>
                {t.initials}
              </span>
              <span
                className="absolute flex items-center font-medium text-white/90"
                style={{ left: u(8), bottom: u(6), gap: u(3), fontSize: u(8.5) }}
              >
                {t.muted && <MicOff style={icon(8)} />}
                {t.name}
              </span>
            </div>
          ))}
        </div>

        {/* Chat */}
        <div className="flex flex-col items-start" style={{ gap: u(5), margin: `${u(10)} ${u(12)} 0` }}>
          {CHAT.map((m) => (
            <p
              key={m.name}
              className="bg-white/[0.06] text-white/80"
              style={{ padding: `${u(5)} ${u(10)}`, borderRadius: u(10), fontSize: u(9.5) }}
            >
              <span className="font-semibold text-white">{m.name}</span> {m.text}
            </p>
          ))}
          <p
            className="flex items-center bg-amber-400/10 font-medium text-amber-300"
            style={{ gap: u(4), padding: `${u(5)} ${u(10)}`, borderRadius: u(10), fontSize: u(9.5) }}
          >
            <Hand style={icon(10)} />3 hands raised
          </p>
        </div>

        {/* Call controls */}
        <div
          className="mt-auto flex items-center justify-between bg-white/[0.06] ring-1 ring-white/10"
          style={{ margin: `auto ${u(12)} ${u(22)}`, padding: u(8), borderRadius: u(22) }}
        >
          {[Mic, Video, MonitorUp, MessageSquare].map((Icon, i) => (
            <span key={i} className="grid place-items-center rounded-full bg-white/10" style={icon(38)}>
              <Icon style={icon(15)} />
            </span>
          ))}
          <span className="grid place-items-center rounded-full bg-red-500" style={{ width: u(54), height: u(38) }}>
            <PhoneOff style={icon(15)} />
          </span>
        </div>
        <div
          className="absolute left-1/2 -translate-x-1/2 rounded-full bg-white/80"
          style={{ bottom: u(8), width: u(104), height: u(4) }}
        />
      </div>
    </div>
  )
}
