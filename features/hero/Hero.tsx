'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

const taglines = ['Zero Trust Architecture', 'DevSecOps', 'Cloud Security', 'Secure by Default']

export default function Hero() {
  const [taglineIndex, setTaglineIndex] = useState(0)
  const [displayed, setDisplayed] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const current = taglines[taglineIndex] ?? ''
    let timeout: ReturnType<typeof setTimeout>

    if (!isDeleting && displayed.length < current.length) {
      timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 80)
    } else if (!isDeleting && displayed.length === current.length) {
      timeout = setTimeout(() => setIsDeleting(true), 2000)
    } else if (isDeleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 40)
    } else if (isDeleting && displayed.length === 0) {
      timeout = setTimeout(() => {
        setIsDeleting(false)
        setTaglineIndex((prev) => (prev + 1) % taglines.length)
      }, 200)
    }

    return () => clearTimeout(timeout)
  }, [displayed, isDeleting, taglineIndex])

  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col justify-center px-4 sm:px-6 pt-16"
      aria-label="Hero"
    >
      <div className="max-w-6xl mx-auto w-full py-20">
        {/* Terminal prompt */}
        <p className="font-mono text-sm text-zinc-500 mb-6">
          <span className="text-emerald-500"></span>$ whoami
        </p>

        {/* Name */}
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold text-zinc-100 mb-4 tracking-tight">
          Michael Fuchs
        </h1>

        {/* Role */}
        <p className="text-xl sm:text-2xl text-zinc-400 mb-8 font-light">
          Software Security Engineer
        </p>

        {/* Animated tagline */}
        <div className="h-10 mb-12 flex items-center">
          <span className="font-mono text-lg sm:text-xl text-emerald-400">
            {displayed}
            <span className="animate-blink">▌</span>
          </span>
        </div>

        <p className="max-w-2xl text-zinc-400 text-lg leading-relaxed mb-12">
          I design and build secure distributed systems from Zero Trust architectures and k8s
          hardening to developer-facing security tooling. I care deeply about making security a
          first-class engineering concern, not an afterthought.
        </p>

        {/* CTAs */}
        <div className="flex flex-wrap gap-4">
          <Link
            href="#projects"
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-emerald-500 text-zinc-950 rounded-lg text-sm font-semibold hover:bg-emerald-400 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-950"
          >
            View Projects
            <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
              <path
                fillRule="evenodd"
                d="M8.22 2.97a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06l2.97-2.97H3.75a.75.75 0 0 1 0-1.5h7.44L8.22 4.03a.75.75 0 0 1 0-1.06Z"
                clipRule="evenodd"
              />
            </svg>
          </Link>
          <Link
            href="#contact"
            className="inline-flex items-center gap-2 px-5 py-2.5 border border-zinc-700 text-zinc-300 rounded-lg text-sm font-medium hover:border-zinc-500 hover:text-zinc-100 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-400 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-950"
          >
            Get in Touch
          </Link>
        </div>

        {/* Scroll indicator */}
        <div className="mt-20 flex items-center gap-2 text-zinc-600 text-sm font-mono animate-bounce">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
            <path
              fillRule="evenodd"
              d="M8 1a.75.75 0 0 1 .75.75v10.19l3.22-3.22a.75.75 0 1 1 1.06 1.06l-4.5 4.5a.75.75 0 0 1-1.06 0l-4.5-4.5a.75.75 0 1 1 1.06-1.06l3.22 3.22V1.75A.75.75 0 0 1 8 1Z"
              clipRule="evenodd"
            />
          </svg>
          scroll
        </div>
      </div>
    </section>
  )
}
