import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '404 - Page Not Found',
}

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 text-center">
      <p className="font-mono text-sm text-emerald-500 mb-4">error.sh</p>
      <h1 className="text-6xl font-bold text-zinc-100 mb-4">404</h1>
      <p className="text-zinc-400 mb-8">
        This page doesn&apos;t exist - or was redacted for security reasons.
      </p>
      <Link
        href="/"
        className="inline-flex items-center gap-2 px-5 py-2.5 bg-emerald-500 text-zinc-950 rounded-lg text-sm font-semibold hover:bg-emerald-400 transition-colors"
      >
        Return Home
      </Link>
    </div>
  )
}
