import Badge from '@/components/ui/Badge'
import type { BadgeProps } from '@/components/ui/Badge'

interface SkillCategory {
  title: string
  description: string
  icon: string
  variant: NonNullable<BadgeProps['variant']>
  skills: string[]
}

const skillCategories: SkillCategory[] = [
  {
    title: 'Security',
    description:
      'Threat modeling, Secure Development Lifecycle, Secure Coding, Security Awareness.',
    icon: '🔐',
    variant: 'security',
    skills: [
      'Zero Trust',
      'OAuth2 / OIDC',
      'Keycloak',
      'SAST / DAST',
      'Threat Modeling',
      'mTLS',
      'WAF',
      'OWASP Top 10',
      'Secrets Management',
    ],
  },
  {
    title: 'Cloud & Infrastructure',
    description: 'Kubernetes-native security, cloud hardening, IaC, observability.',
    icon: '☁️',
    variant: 'cloud',
    skills: [
      'k8s',
      'Helm',
      'Terraform',
      'AWS',
      'GCP',
      'OPA / Rego',
      'Istio',
      'Prometheus',
      'OpenTelemetry',
    ],
  },
  {
    title: 'DevSecOps',
    description: 'Shift-left security, CI/CD hardening, policy-as-code.',
    icon: '⚙️',
    variant: 'devops',
    skills: [
      'GitHub Actions',
      'Trivy',
      'Snyk',
      'Cosign',
      'SBOM',
      'Supply Chain Security',
      'Policy as Code',
      'GitOps',
      'ArgoCD',
    ],
  },
  {
    title: 'Architecture',
    description: 'Distributed systems design, microservices, resilience patterns.',
    icon: '🏗️',
    variant: 'arch',
    skills: [
      'Microservices',
      'Event-Driven',
      'Go',
      'Kotlin',
      'Quarkus',
      'Java',
      'Spring Boot',
      'Gin',
      'Keycloak',
      'Shibboleth',
      'API Gateway',
      'Service Mesh',
    ],
  },
]

export default function Skills() {
  return (
    <section
      id="skills"
      className="py-24 px-4 sm:px-6 bg-zinc-900/30"
      aria-labelledby="skills-heading"
    >
      <div className="max-w-6xl mx-auto">
        <p className="font-mono text-sm text-emerald-500 mb-3">$ cat skills.json | jq</p>
        <h2 id="skills-heading" className="text-3xl sm:text-4xl font-bold text-zinc-100 mb-16">
          Expertise
        </h2>

        <div className="grid sm:grid-cols-2 gap-6">
          {skillCategories.map((category) => (
            <div
              key={category.title}
              className="bg-zinc-900 border border-zinc-800 rounded-xl p-6 hover:border-zinc-700 transition-colors"
            >
              <div className="flex items-center gap-3 mb-3">
                <span className="text-2xl" role="img" aria-label={category.title}>
                  {category.icon}
                </span>
                <h3 className="text-lg font-semibold text-zinc-100">{category.title}</h3>
              </div>
              <p className="text-sm text-zinc-500 mb-5 leading-relaxed">{category.description}</p>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <Badge key={skill} label={skill} variant={category.variant} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
