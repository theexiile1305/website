import Badge from '@/components/ui/Badge'
import ExternalLink from '@/components/ui/ExternalLink'

interface Project {
  title: string
  description: string
  tech: string[]
  github?: string
  url?: string
  highlights: string[]
}

const projects: Project[] = [
  {
    title: 'Stock distribution at international e-commerce platform',
    description:
      'Development and operation of different applications for advertising campaign and stock data management across an international e-commerce build on GCP and StackIT.',
    tech: [
      'Kotlin',
      'Java',
      'Spring Boot',
      'Ktor',
      'GCP',
      'StackIT',
      'Terraform',
      'Angular',
      'Vue',
      'TypeScript',
    ],
    highlights: [
      'Renovate-driven dependency management',
      'Threat-Modeling & CI/CD security gates',
      'Automated core business processes',
    ],
  },
  {
    title: 'IT Platform & IAM at an university',
    description:
      'Operation, scaling, and automation of central university IT platforms with full DevSecOps focus and cloud-native IAM integration. Enforced Privacy & Secure by Design principles mandated by university policy.',
    tech: [
      'Keycloak',
      'Shibboleth',
      'Kubernetes',
      'Terraform',
      'Ansible',
      'GitLab',
      'AWS',
      'Kotlin',
      'Go',
    ],
    highlights: [
      'Keycloak & Shibboleth IAM integration',
      'Cloud-native migration of legacy systems',
      'GitLab CI/CD with IaC (Terraform + Ansible)',
    ],
  },
  {
    title: 'Several fullstack Client Projects',
    description:
      'Fullstack development across multiple clients: legally-admissible incident log for DRK, SPAs for a major automotive OEM, cloud migrations, and a shareholder identification platform.',
    tech: ['Spring Boot', 'React', 'TypeScript', 'Keycloak', 'Docker', 'k8s', 'GCP', 'AWS'],
    highlights: [
      'OAuth2/OIDC with Keycloak',
      'On-premise to GCP cloud migration',
      'Secure coding per internal guidelines',
    ],
  },
  {
    title: 'Zero Trust Research at University',
    description:
      'Security research on identity and authentication in academic environments within the scientific group SecLab. Evaluated Zero Trust approaches and built proof-of-concept secure software architectures.',
    tech: ['Keycloak', 'Shibboleth', 'Zero Trust', 'Identity Management', 'Python'],
    highlights: [
      'Zero Trust evaluation framework',
      'PoC secure software architectures',
      'Scientific publications & conference talks',
    ],
  },
  {
    title: 'B&K Arbeitsschutz',
    description:
      'Corporate website for a DEKRA-certified workplace safety consulting firm based near Munich. Covers occupational safety supervision, a training academy, equipment testing services, fire safety consulting, and personal protective equipment.',
    tech: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Resend', 'Vercel'],
    github: 'https://github.com/theexiile1305/b-k-arbeitsschutz',
    url: 'https://b-k-arbeitsschutz.de',
    highlights: [
      'Full service & academy overview',
      'DEKRA-certified partner presence',
      'Deployed on custom domain',
    ],
  },
  {
    title: 'Rescue Smart',
    description:
      "Website for a first aid training provider offering DGUV-compliant occupational first aid courses, refresher training, driver's license first aid, and AED/emergency scenario instruction across Germany.",
    tech: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Resend', 'Vercel'],
    github: 'https://github.com/theexiile1305/rescue-smart',
    url: 'https://rescue-smart.de',
    highlights: [
      'DGUV & FeV regulatory compliance',
      'Course catalogue with flexible scheduling',
      'Same-day certification workflow',
    ],
  },
  {
    title: 'Kreisjugendfeuerwehr Starnberg',
    description:
      "Regional platform for the Youth Fire Department of Starnberg district, coordinating 43 youth brigades and 9 children's brigades with over 600 members. Features a password-protected member area, secure PDF downloads, a contact form, and event management.",
    tech: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Resend', 'Vercel'],
    github: 'https://github.com/theexiile1305/kjfw-sta',
    url: 'https://kjfw-sta.de',
    highlights: [
      'HMAC-based password-protected member area',
      'Secure private PDF downloads',
      'Contact form with email integration (Resend)',
    ],
  },
]

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-4 sm:px-6" aria-labelledby="projects-heading">
      <div className="max-w-6xl mx-auto">
        <p className="font-mono text-sm text-emerald-500 mb-3">$ grep -R projects/</p>
        <h2 id="projects-heading" className="text-3xl sm:text-4xl font-bold text-zinc-100 mb-16">
          Selected Work
        </h2>

        <div className="grid sm:grid-cols-2 gap-6">
          {projects.map((project) => (
            <article
              key={project.title}
              className="bg-zinc-900 border border-zinc-800 rounded-xl p-6 flex flex-col gap-4 hover:border-zinc-700 transition-colors"
            >
              <div className="flex items-start justify-between gap-4">
                <h3 className="text-lg font-semibold text-zinc-100 leading-snug">
                  {project.title}
                </h3>
                <div className="flex items-center gap-3 shrink-0">
                  {project.github && (
                    <ExternalLink
                      href={project.github}
                      className="text-zinc-500 hover:text-zinc-300 transition-colors"
                      aria-label={`View ${project.title} on GitHub`}
                    >
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2Z" />
                      </svg>
                    </ExternalLink>
                  )}
                  {project.url && (
                    <ExternalLink
                      href={project.url}
                      className="text-zinc-500 hover:text-zinc-300 transition-colors"
                      aria-label={`Visit ${project.title} live site`}
                    >
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        aria-hidden="true"
                      >
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                        <polyline points="15 3 21 3 21 9" />
                        <line x1="10" y1="14" x2="21" y2="3" />
                      </svg>
                    </ExternalLink>
                  )}
                </div>
              </div>

              <p className="text-sm text-zinc-400 leading-relaxed">{project.description}</p>

              <ul className="space-y-1">
                {project.highlights.map((h) => (
                  <li key={h} className="text-xs text-zinc-500 flex items-center gap-2">
                    <span className="text-emerald-500" aria-hidden="true">
                      ▸
                    </span>
                    {h}
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2 mt-auto pt-2">
                {project.tech.map((t) => (
                  <Badge key={t} label={t} />
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
