'use client'

import { useState } from 'react'
import ExternalLink from '@/components/ui/ExternalLink'
import { siteConfig } from '@/lib/metadata'

/**
 * Email is split across two variables and assembled client-side to avoid
 * plaintext exposure to email-harvesting scrapers in HTML source.
 */
const emailParts = ['hello', '@', 'mfuchs.dev']

export default function Contact() {
  const [revealed, setReveal] = useState(false)
  const email = emailParts.join('')

  return (
    <section id="contact" className="py-24 px-4 sm:px-6" aria-labelledby="contact-heading">
      <div className="max-w-6xl mx-auto">
        <p className="font-mono text-sm text-emerald-500 mb-3">
          $ chmod +x contact.sh && ./contact.sh
        </p>
        <h2 id="contact-heading" className="text-3xl sm:text-4xl font-bold text-zinc-100 mb-6">
          Get in Touch
        </h2>

        <p className="max-w-xl text-zinc-400 text-lg leading-relaxed mb-12">
          Whether you want to talk security architecture, explore collaboration, or just have a
          technical conversation. I&apos;m happy to connect.
        </p>

        <div className="flex flex-col sm:flex-row gap-6">
          {/* Email */}
          <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6 flex-1 hover:border-zinc-700 transition-colors">
            <p className="text-xs font-mono text-zinc-500 mb-3 uppercase tracking-widest">Email</p>
            {revealed ? (
              <a
                href={`mailto:${email}`}
                className="text-emerald-400 hover:text-emerald-300 transition-colors font-mono text-sm"
              >
                {email}
              </a>
            ) : (
              <button
                onClick={() => setReveal(true)}
                className="text-sm text-zinc-400 hover:text-zinc-100 transition-colors underline underline-offset-2 font-mono cursor-pointer"
                aria-label="Reveal email address"
              >
                Click to reveal
              </button>
            )}
          </div>

          {/* LinkedIn */}
          <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6 flex-1 hover:border-zinc-700 transition-colors">
            <p className="text-xs font-mono text-zinc-500 mb-3 uppercase tracking-widest">
              LinkedIn
            </p>
            <ExternalLink
              href={siteConfig.links.linkedin}
              className="text-emerald-400 hover:text-emerald-300 transition-colors font-mono text-sm"
              aria-label="View LinkedIn profile"
            >
              {siteConfig.links.linkedin.replace('https://', '')}
            </ExternalLink>
          </div>

          {/* GitHub */}
          <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6 flex-1 hover:border-zinc-700 transition-colors">
            <p className="text-xs font-mono text-zinc-500 mb-3 uppercase tracking-widest">GitHub</p>
            <ExternalLink
              href={siteConfig.links.github}
              className="text-emerald-400 hover:text-emerald-300 transition-colors font-mono text-sm"
              aria-label="View GitHub profile"
            >
              {siteConfig.links.github.replace('https://', '')}
            </ExternalLink>
          </div>
        </div>
      </div>
    </section>
  )
}
