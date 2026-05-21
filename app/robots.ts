import { MetadataRoute } from "next"

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/_next/", "/private/"],
      },
    ],
    sitemap: "https://nanajigundapu.vercel.app/sitemap.xml",
    host: "https://nanajigundapu.vercel.app",
  }
}
