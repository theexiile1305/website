export interface BadgeProps {
  label: string
  variant?: 'default' | 'security' | 'cloud' | 'devops' | 'arch'
}

const variantClasses: Record<NonNullable<BadgeProps['variant']>, string> = {
  default: 'bg-zinc-800 text-zinc-300 border-zinc-700',
  security: 'bg-emerald-950 text-emerald-400 border-emerald-800',
  cloud: 'bg-blue-950 text-blue-400 border-blue-800',
  devops: 'bg-amber-950 text-amber-400 border-amber-800',
  arch: 'bg-purple-950 text-purple-400 border-purple-800',
}

export default function Badge({ label, variant = 'default' }: BadgeProps) {
  return (
    <span
      className={`inline-flex items-center px-2.5 py-0.5 rounded-md text-xs font-mono border ${variantClasses[variant]}`}
    >
      {label}
    </span>
  )
}
