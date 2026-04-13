import type { ButtonHTMLAttributes, ReactNode } from 'react'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost'
  children: ReactNode
}

const variantClasses: Record<NonNullable<ButtonProps['variant']>, string> = {
  primary:
    'bg-emerald-500 text-zinc-950 hover:bg-emerald-400 focus-visible:ring-emerald-500 font-semibold',
  secondary:
    'bg-transparent border border-zinc-600 text-zinc-300 hover:border-zinc-400 hover:text-zinc-100 focus-visible:ring-zinc-400',
  ghost: 'bg-transparent text-zinc-400 hover:text-zinc-100 focus-visible:ring-zinc-400',
}

export default function Button({
  variant = 'primary',
  children,
  className = '',
  ...props
}: ButtonProps) {
  return (
    <button
      className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-950 ${variantClasses[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  )
}
