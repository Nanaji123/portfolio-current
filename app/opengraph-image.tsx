import { readFile } from "node:fs/promises"
import { join } from "node:path"
import { ImageResponse } from "next/og"

export const alt = "Nanaji Gundapu, Senior Mobile Engineer"
export const size = { width: 1200, height: 630 }
export const contentType = "image/png"

export default async function OpengraphImage() {
  const photo = await readFile(join(process.cwd(), "public/nanaji.jpg"))
  const src = `data:image/jpeg;base64,${photo.toString("base64")}`

  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", background: "#fbfbf9", color: "#161614" }}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            flex: 1,
            padding: "72px 64px 72px 80px",
          }}
        >
          <div style={{ fontSize: 26, color: "#6c6b66" }}>Open to relocation and remote</div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div style={{ fontSize: 80, fontWeight: 600, letterSpacing: -3, lineHeight: 1.05 }}>Nanaji Gundapu</div>
            <div style={{ marginTop: 18, fontSize: 38, color: "#6c6b66" }}>Senior Mobile Engineer</div>
          </div>
          <div style={{ fontSize: 26, color: "#6c6b66" }}>React Native, Kotlin, Node.js, APIs, Payments</div>
        </div>
        {/* eslint-disable-next-line jsx-a11y/alt-text */}
        <img src={src} width={472} height={630} style={{ objectFit: "cover" }} />
      </div>
    ),
    size
  )
}
