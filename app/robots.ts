import { MetadataRoute } from "next"
import { SITE_URL } from "@/lib/data"

export default function robots(): MetadataRoute.Robots {
  return {
    // Crawlers need /_next/ to render the page and read its images, so it stays allowed
    rules: [{ userAgent: "*", allow: "/" }],
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  }
}
