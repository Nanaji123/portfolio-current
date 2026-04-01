"use client"

import React, { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { ArrowUpRight, Calendar, Tag, User } from "lucide-react"
import { Navbar } from "@/components/navbar"

interface BlogItem {
  title: string
  pubDate: string
  link: string
  guid: string
  author: string
  thumbnail: string
  description: string
  content: string
  categories: string[]
}

interface ApiResponse {
  status: string
  feed: any
  items: BlogItem[]
}

export default function BlogsPage() {
  const [blogs, setBlogs] = useState<BlogItem[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await fetch("https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@engrmuhammadusman108")
        const data: ApiResponse = await response.json()
        if (data.status === "ok") {
          // Process blogs to ensure thumbnails are extracted from content if missing
          const processed = data.items.map(item => {
            let thumbnail = item.thumbnail
            if (!thumbnail || thumbnail === "") {
              const combined = item.content + " " + item.description
              const imgMatch = combined.match(/<img[^>]+src="([^">]+)"/)
              if (imgMatch) {
                thumbnail = imgMatch[1]
              }
            }
            // Clean description for snippet (remove HTML)
            const cleanDesc = (item.description || "").replace(/<[^>]*>?/gm, "").substring(0, 150) + "..."
            return { ...item, thumbnail, cleanDesc }
          })
          setBlogs(processed as any)
        }
      } catch (error) {
        console.error("Error fetching blogs:", error)
      } finally {
        setLoading(false)
      }
    }

    fetchBlogs()
  }, [])

  return (
    <main className="min-h-screen bg-white dark:bg-[#030303] overflow-x-hidden">
      <Navbar />

      <section className="pt-32 md:pt-40 pb-24 px-4 sm:px-6 relative">
        {/* Background Gradients */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-neutral-100/50 dark:bg-white/[0.02] blur-[120px] -z-10 rounded-full" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-neutral-100/50 dark:bg-white/[0.02] blur-[120px] -z-10 rounded-full" />

        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="flex flex-col gap-4 mb-12 md:mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-neutral-100 dark:border-white/5 bg-neutral-50 dark:bg-white/5 w-fit"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-black dark:bg-white animate-pulse" />
              <span className="text-[10px] font-bold uppercase tracking-widest text-neutral-500 dark:text-neutral-400">Journal & Thoughts</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl md:text-6xl font-black text-black dark:text-white uppercase tracking-tighter"
            >
              Latest <span className="opacity-40">Blogs</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-base sm:text-lg text-neutral-500 dark:text-neutral-400 max-w-xl font-medium leading-relaxed"
            >
              Sharing insights about cloud architecture, development best practices, and the evolving tech landscape.
            </motion.p>
          </div>

          {/* Blogs Grid */}
          {loading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <div key={i} className="h-[400px] md:h-[450px] rounded-3xl bg-neutral-50 dark:bg-white/[0.02] border border-neutral-100 dark:border-white/5 animate-pulse" />
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {blogs.map((blog: any, index: number) => (
                <motion.a
                  key={blog.guid}
                  href={blog.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="group flex flex-col h-full rounded-2xl md:rounded-3xl border border-neutral-100 dark:border-white/5 overflow-hidden bg-white/50 dark:bg-white/[0.01] backdrop-blur-xl transition-all duration-500 hover:md:translate-y-[-8px] hover:shadow-2xl hover:shadow-black/5 dark:hover:shadow-white/[0.02]"
                >
                  {/* Thumbnail */}
                  <div className="relative aspect-[16/10] overflow-hidden bg-neutral-100 dark:bg-white/5">
                    <img
                      src={blog.thumbnail || "https://images.unsplash.com/photo-1499750310107-5fef28a66643?q=80&w=1000"}
                      alt={blog.title}
                      className="w-full h-full object-cover transition-all duration-700 md:group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-30 group-hover:opacity-10 transition-opacity duration-500" />
                  </div>

                  {/* Content */}
                  <div className="flex flex-col flex-1 p-6 md:p-8 gap-3 md:gap-4">
                    <div className="flex items-center gap-4 text-[9px] md:text-[10px] font-black uppercase tracking-widest text-neutral-400 dark:text-neutral-500">
                      <div className="flex items-center gap-1.5 font-bold">
                        <Calendar size={12} />
                        {new Date(blog.pubDate).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                      </div>
                      <div className="flex items-center gap-1.5 font-bold">
                        <User size={12} />
                        {blog.author.split(' ').slice(0, 2).join(' ')}
                      </div>
                    </div>

                    <h3 className="text-lg md:text-xl font-bold text-black dark:text-white leading-tight transition-colors line-clamp-2 uppercase tracking-tight">
                      {blog.title}
                    </h3>

                    <p className="text-xs md:text-sm text-neutral-500 dark:text-neutral-400 line-clamp-2 leading-relaxed">
                      {blog.cleanDesc}
                    </p>

                    {/* Categories */}
                    <div className="flex flex-wrap gap-2 mt-2 md:mt-auto">
                      {blog.categories.slice(0, 3).map((cat: any) => (
                        <span key={cat} className="px-2 py-0.5 text-[7px] md:text-[8px] font-black uppercase tracking-widest border border-neutral-100 dark:border-white/10 rounded-full text-neutral-500 dark:text-neutral-500">
                          {cat}
                        </span>
                      ))}
                    </div>

                    <div className="pt-4 md:pt-6 border-t border-neutral-100 dark:border-white/5 flex items-center justify-between mt-2">
                      <span className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-black dark:text-white group-hover:translate-x-1 transition-transform inline-flex items-center gap-2">
                        Read Story <ArrowUpRight size={14} />
                      </span>
                    </div>
                  </div>
                </motion.a>
              ))}
            </div>
          )}
        </div>
      </section>

    </main>
  )
}
