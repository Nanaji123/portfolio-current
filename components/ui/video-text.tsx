"use client"

import React, { ElementType, ReactNode, useEffect, useState } from "react"

import { cn } from "@/lib/utils"

export interface VideoTextProps {
  /**
   * The background source URL (video or image/gif)
   */
  src: string
  /**
   * Additional className for the container
   */
  className?: string
  /**
   * Whether the text should be vertical
   */
  vertical?: boolean
  /**
   * Whether to autoplay the video (if applicable)
   */
  autoPlay?: boolean
  /**
   * Whether to mute the video (if applicable)
   */
  muted?: boolean
  /**
   * Whether to loop the video (if applicable)
   */
  loop?: boolean
  /**
   * Whether to preload the video (if applicable)
   */
  preload?: "auto" | "metadata" | "none"
  /**
   * The content to display (will have the video "inside" it)
   */
  children: ReactNode
  /**
   * Font size for the text mask
   * @default 20
   */
  fontSize?: string | number
  /**
   * Font weight for the text mask
   * @default "bold"
   */
  fontWeight?: string | number
  /**
   * Text anchor for the text mask
   * @default "middle"
   */
  textAnchor?: string
  /**
   * Dominant baseline for the text mask
   * @default "middle"
   */
  dominantBaseline?: string
  /**
   * Font family for the text mask
   * @default "sans-serif"
   */
  fontFamily?: string
  /**
   * Vertical position of the text (0-100)
   * @default 50
   */
  textY?: number | string
  /**
   * The element type to render for the text
   * @default "div"
   */
  as?: ElementType
}

export function VideoText({
  src,
  children,
  className = "",
  vertical = false,
  autoPlay = true,
  muted = true,
  loop = true,
  preload = "auto",
  fontSize = 20,
  fontWeight = "bold",
  textAnchor = "middle",
  dominantBaseline = "middle",
  fontFamily = "sans-serif",
  textY = 50,
  as: Component = "div",
}: VideoTextProps) {
  const [svgMask, setSvgMask] = useState("")
  const content = React.Children.toArray(children).join("")
  const isImage = src.match(/\.(jpg|jpeg|png|gif|webp)$/i)

  useEffect(() => {
    const updateSvgMask = () => {
      const responsiveFontSize =
        typeof fontSize === "number" ? `${fontSize}vw` : fontSize

      const textStyle = vertical ? "writing-mode: vertical-rl; text-orientation: upright;" : ""
      const yPos = typeof textY === "number" ? `${textY}%` : textY

      const newSvgMask = `<svg xmlns='http://www.w3.org/2000/svg' width='100%' height='100%'><text x='50%' y='${yPos}' font-size='${responsiveFontSize}' font-weight='${fontWeight}' text-anchor='${textAnchor}' dominant-baseline='${dominantBaseline}' font-family='${fontFamily}' style='${textStyle}'>${content}</text></svg>`
      setSvgMask(newSvgMask)
    }

    updateSvgMask()
    window.addEventListener("resize", updateSvgMask)
    return () => window.removeEventListener("resize", updateSvgMask)
  }, [content, fontSize, fontWeight, textAnchor, dominantBaseline, fontFamily, vertical, textY])

  const dataUrlMask = `url("data:image/svg+xml,${encodeURIComponent(svgMask)}")`

  return (
    <Component className={cn(`relative size-full`, className)}>
      <div
        className={cn(
          "absolute inset-0 flex items-center justify-center overflow-hidden",
          "invert hue-rotate-180 brightness-110 dark:invert-0 dark:hue-rotate-0 dark:brightness-100"
        )}
        style={{
          maskImage: dataUrlMask,
          WebkitMaskImage: dataUrlMask,
          maskSize: "contain",
          WebkitMaskSize: "contain",
          maskRepeat: "no-repeat",
          WebkitMaskRepeat: "no-repeat",
          maskPosition: "center",
          WebkitMaskPosition: "center",
        }}
      >
        {isImage ? (
          <img
            src={src}
            alt=""
            className="h-full w-full object-cover"
          />
        ) : (
          <video
            className="h-full w-full object-cover"
            autoPlay={autoPlay}
            muted={muted}
            loop={loop}
            preload={preload}
            playsInline
          >
            <source src={src} />
            Your browser does not support the video tag.
          </video>
        )}
      </div>

      <span className="sr-only">{content}</span>
    </Component>
  )
}
