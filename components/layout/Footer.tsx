import { siteConfig } from '@/lib/metadata'
import ExternalLink from '@/components/ui/ExternalLink'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-zinc-800 mt-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8 flex flex-col items-center gap-4">
        <div className="flex flex-col sm:flex-row items-center justify-between w-full gap-4">
          <p className="text-sm text-zinc-500 font-mono">
            <span className="text-emerald-500">©</span> {year} {siteConfig.name}
          </p>
          <p className="text-sm text-zinc-500">
            Built with ❤️ by{' '}
            <ExternalLink
              href={siteConfig.links.github}
              className="text-zinc-400 hover:text-zinc-300 transition-colors"
            >
              theexiile1305
            </ExternalLink>
            . Please report any issues at{' '}
            <ExternalLink
              href="https://github.com/theexiile1305/website/issues"
              className="text-zinc-400 hover:text-zinc-300 transition-colors"
            >
              GitHub
            </ExternalLink>
            .
          </p>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-6">
          <ExternalLink
            href={siteConfig.links.linkedin}
            className="text-sm text-zinc-500 hover:text-zinc-300 transition-colors"
            aria-label="LinkedIn profile"
          >
            LinkedIn
          </ExternalLink>
          <ExternalLink
            href={siteConfig.links.github}
            className="text-sm text-zinc-500 hover:text-zinc-300 transition-colors"
            aria-label="GitHub profile"
          >
            GitHub
          </ExternalLink>
          <a
            href="/sitemap.xml"
            className="text-sm text-zinc-500 hover:text-zinc-300 transition-colors"
          >
            Sitemap
          </a>
          <a
            href="/impressum"
            className="text-sm text-zinc-500 hover:text-zinc-300 transition-colors"
          >
            Impressum
          </a>
          <a
            href="/privacy-policy"
            className="text-sm text-zinc-500 hover:text-zinc-300 transition-colors"
          >
            Privacy Policy
          </a>
        </div>
      </div>
    </footer>
  )
}
