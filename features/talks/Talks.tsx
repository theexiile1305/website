import ExternalLink from '@/components/ui/ExternalLink'
import Badge from '@/components/ui/Badge'

interface Talk {
  title: string
  event: string
  date: string
  description: string
  tags: string[]
  slides?: string
  recording?: string
}

const talks: Talk[] = [
  {
    title: 'Zero Trust with KeycloakL: Securely Integrating IAM into Microservice Architectures',
    event: 'heise devSec',
    date: '2024',
    description:
      'Article on securely integrating Identity & Access Management into microservice architectures using Keycloak as the central IAM component within a Zero Trust model.',
    tags: ['Zero Trust', 'Keycloak', 'IAM', 'Microservices'],
  },
  {
    title: 'Zero Trust Architecture & Passkeys: The Duo Against Lateral Movement',
    event: 'UniNow',
    date: '2023',
    description:
      'Talk on combining Zero Trust Architecture with Passkeys as an effective strategy for preventing lateral movement in modern IT environments.',
    tags: ['Zero Trust', 'Passkeys', 'Authentication'],
  },
  {
    title: 'Passkeys: The Future of Authentication in Shibboleth with privacyIDEA',
    event: 'ZKI IAM',
    date: '2023',
    description:
      'Conference contribution on integrating Passkeys as a modern authentication method into Shibboleth-based university infrastructure using privacyIDEA.',
    tags: ['Passkeys', 'Shibboleth', 'privacyIDEA', 'IAM'],
  },
  {
    title: 'Security and Convenience: How Tailscale Reimagines Admin Access',
    event: 'ZKI IAM',
    date: '2023',
    description:
      'Talk on using Tailscale to simplify and secure admin access in university data centers - without compromising on security or usability.',
    tags: ['Tailscale', 'VPN', 'Zero Trust', 'Admin Security'],
  },
  {
    title: 'Beyond OAuth 2.0 and OpenID Connect: Hidden Features in Keycloak',
    event: 'heise devSec',
    date: '2022',
    description:
      'Article exploring lesser-known but powerful Keycloak capabilities beyond the standard OAuth 2.0 and OpenID Connect protocols - from Token Exchange to Fine-Grained Authorization.',
    tags: ['OAuth2', 'OIDC', 'Keycloak'],
  },
  {
    title: 'DevSecOps - Securing Your Web App in Three Simple Steps',
    event: 'Meetup',
    date: '2022',
    description:
      'Practical meetup talk on incrementally embedding security practices into everyday development: from a first SAST scan to a fully integrated DevSecOps pipeline.',
    tags: ['DevSecOps', 'CI/CD', 'SAST', 'Security'],
  },
]

export default function Talks() {
  return (
    <section
      id="talks"
      className="py-24 px-4 sm:px-6 bg-zinc-900/30"
      aria-labelledby="talks-heading"
    >
      <div className="max-w-6xl mx-auto">
        <p className="font-mono text-sm text-emerald-500 mb-3">$ grep -R talks/</p>
        <h2 id="talks-heading" className="text-3xl sm:text-4xl font-bold text-zinc-100 mb-16">
          Talks &amp; Writing
        </h2>

        <div className="relative">
          {/* Timeline line */}
          <div
            className="absolute left-0 top-0 bottom-0 w-px bg-zinc-800 ml-3 hidden sm:block"
            aria-hidden="true"
          />

          <ol className="space-y-10 sm:pl-12">
            {talks.map((talk) => (
              <li key={talk.title} className="relative">
                {/* Timeline dot */}
                <div
                  className="absolute -left-12 top-1 hidden sm:block w-7 h-7 rounded-full border-2 border-zinc-800 bg-zinc-950 flex items-center justify-center"
                  aria-hidden="true"
                >
                  <div className="w-2 h-2 rounded-full bg-emerald-500" />
                </div>

                <article className="bg-zinc-900 border border-zinc-800 rounded-xl p-6 hover:border-zinc-700 transition-colors">
                  <div className="flex flex-wrap items-center gap-3 mb-2">
                    <span className="text-xs font-mono text-zinc-500">{talk.date}</span>
                    <span className="text-xs font-mono text-emerald-600">{talk.event}</span>
                  </div>
                  <h3 className="text-base font-semibold text-zinc-100 mb-3">{talk.title}</h3>
                  <p className="text-sm text-zinc-400 leading-relaxed mb-4">{talk.description}</p>

                  <div className="flex flex-wrap items-center justify-between gap-4">
                    <div className="flex flex-wrap gap-2">
                      {talk.tags.map((tag) => (
                        <Badge key={tag} label={tag} variant="devops" />
                      ))}
                    </div>
                    <div className="flex gap-4">
                      {talk.slides && (
                        <ExternalLink
                          href={talk.slides}
                          className="text-xs text-zinc-500 hover:text-zinc-300 transition-colors underline underline-offset-2"
                        >
                          Slides
                        </ExternalLink>
                      )}
                      {talk.recording && (
                        <ExternalLink
                          href={talk.recording}
                          className="text-xs text-zinc-500 hover:text-zinc-300 transition-colors underline underline-offset-2"
                        >
                          Recording
                        </ExternalLink>
                      )}
                    </div>
                  </div>
                </article>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}
