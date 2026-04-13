'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { siteConfig } from '@/lib/metadata'

const navLinks = [
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#talks', label: 'Talks' },
  { href: '#contact', label: 'Contact' },
  { href: '/blog', label: 'Blog' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const pathname = usePathname()
  const isHome = pathname === '/'

  const resolveHref = (href: string) => {
    if (!href.startsWith('#')) return href
    return isHome ? href : `/${href}`
  }

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-zinc-950/90 backdrop-blur-sm border-b border-zinc-800' : 'bg-transparent'
      }`}
    >
      <nav
        className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between"
        aria-label="Main navigation"
      >
        <Link
          href="/"
          className="font-mono text-sm text-emerald-400 hover:text-emerald-300 transition-colors"
          aria-label={`${siteConfig.name} - home`}
        >
          <span className="text-zinc-500">~/</span>
          <span>mfuchs</span>
        </Link>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-6" role="list">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={resolveHref(link.href)}
                className="text-sm text-zinc-400 hover:text-zinc-100 transition-colors"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile menu button */}
        <button
          className="md:hidden text-zinc-400 hover:text-zinc-100 transition-colors p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          aria-label="Toggle navigation menu"
        >
          <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
            {menuOpen ? (
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              />
            ) : (
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              />
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div
          id="mobile-menu"
          className="md:hidden bg-zinc-950/95 border-b border-zinc-800 px-4 py-4"
        >
          <ul className="flex flex-col gap-4" role="list">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={resolveHref(link.href)}
                  className="text-sm text-zinc-400 hover:text-zinc-100 transition-colors block py-1"
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  )
}
