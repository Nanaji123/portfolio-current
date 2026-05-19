"use client"

import React, { useEffect, useState } from "react"
import { createPortal } from "react-dom"
import { motion, AnimatePresence } from "framer-motion"
import { Mail, Phone, X } from "lucide-react"

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ContactModal({ isOpen, onClose }: ContactModalProps) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return createPortal(
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-[9999] bg-black/40 backdrop-blur-sm"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: "-50%", x: "-50%" }}
            animate={{ opacity: 1, scale: 1, y: "-50%", x: "-50%" }}
            exit={{ opacity: 0, scale: 0.95, y: "-50%", x: "-50%" }}
            className="fixed top-1/2 left-1/2 z-[10000] w-[90%] max-w-sm rounded-2xl border border-neutral-200 bg-white p-6 shadow-xl dark:border-white/10 dark:bg-neutral-900"
          >
            <div className="mb-6 flex items-center justify-between">
              <h2 className="text-xl font-bold text-black dark:text-white">Let's Connect</h2>
              <button
                onClick={onClose}
                className="rounded-full p-2 text-neutral-500 hover:bg-neutral-100 dark:hover:bg-neutral-800 dark:text-neutral-400 transition-colors cursor-pointer"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="grid gap-4">
              <a
                href="https://www.linkedin.com/in/nanaji-gundapu-ab5935264/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 rounded-xl border border-neutral-200 p-4 transition-colors hover:bg-neutral-50 dark:border-white/10 dark:hover:bg-white/5"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#0A66C2]/10 text-[#0A66C2]">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </div>
                <div>
                  <div className="font-semibold text-black dark:text-white">LinkedIn</div>
                  <div className="text-sm text-neutral-500 dark:text-neutral-400">@nanaji-gundapu-ab5935264</div>
                </div>
              </a>

              <a
                href="https://github.com/Nanaji123"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 rounded-xl border border-neutral-200 p-4 transition-colors hover:bg-neutral-50 dark:border-white/10 dark:hover:bg-white/5"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-neutral-100 text-neutral-700 dark:bg-neutral-800 dark:text-neutral-300">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.161 22 16.416 22 12c0-5.523-4.477-10-10-10z" />
                  </svg>
                </div>
                <div>
                  <div className="font-semibold text-black dark:text-white">GitHub</div>
                  <div className="text-sm text-neutral-500 dark:text-neutral-400">@Nanaji123</div>
                </div>
              </a>

              <a
                href="mailto:gundapunanaji123@gmail.com"
                className="flex items-center gap-4 rounded-xl border border-neutral-200 p-4 transition-colors hover:bg-neutral-50 dark:border-white/10 dark:hover:bg-white/5"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-red-500/10 text-red-500">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <div className="font-semibold text-black dark:text-white">Email</div>
                  <div className="text-sm text-neutral-500 dark:text-neutral-400">gundapunanaji123@gmail.com</div>
                </div>
              </a>

              <a
                href="tel:+919392844826"
                className="flex items-center gap-4 rounded-xl border border-neutral-200 p-4 transition-colors hover:bg-neutral-50 dark:border-white/10 dark:hover:bg-white/5"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-500/10 text-green-500">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <div className="font-semibold text-black dark:text-white">Phone</div>
                  <div className="text-sm text-neutral-500 dark:text-neutral-400">9392844826</div>
                </div>
              </a>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>,
    document.body
  )
}
