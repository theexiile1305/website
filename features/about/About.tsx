import { personJsonLd } from '@/lib/metadata'

const stats = [
  { label: 'Focus Areas', value: 'Security · Cloud' },
  { label: 'Primary Stack', value: 'Go · Kotlin · Java' },
  { label: 'Expertise', value: 'Zero Trust · IAM · K8s' },
  { label: 'Background', value: 'SRE · Software Eng.' },
]

export default function About() {
  return (
    <section id="about" className="py-24 px-4 sm:px-6" aria-labelledby="about-heading">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
      />

      <div className="max-w-6xl mx-auto">
        {/* Section label */}
        <p className="font-mono text-sm text-emerald-500 mb-3">$ cat about.md</p>
        <h2 id="about-heading" className="text-3xl sm:text-4xl font-bold text-zinc-100 mb-16">
          About Me
        </h2>

        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Bio */}
          <div className="space-y-5 text-zinc-400 text-lg leading-relaxed">
            <p>
              I&apos;m a Software Security Engineer with roots in SRE and software engineering. My
              work sits at the intersection of distributed systems and security where reliability,
              trust, and resilience aren&apos;t trade-offs but design goals.
            </p>
            <p>
              I&apos;ve architected Zero Trust network models, hardened Kubernetes clusters, and
              built developer-facing security tooling that doesn&apos;t slow teams down. I&apos;ve
              led IAM and OAuth2/OIDC integrations at scale, using Keycloak and custom authorization
              policies to enforce least-privilege access across microservice meshes.
            </p>
            <p>
              I believe security belongs in the delivery pipeline not bolted on at the end. That
              means threat modeling early, shifting left with SAST/DAST, and treating every
              deployment as an opportunity to reduce attack surface. I enjoy helping engineering
              teams build that instinct from the ground up.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-4">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="bg-zinc-900 border border-zinc-800 rounded-xl p-5 hover:border-zinc-700 transition-colors"
              >
                <p className="text-xs font-mono text-zinc-500 mb-2 uppercase tracking-widest">
                  {stat.label}
                </p>
                <p className="text-sm font-medium text-zinc-200">{stat.value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
