import type { AnchorHTMLAttributes, ReactNode } from 'react'

interface ExternalLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string
  children: ReactNode
}

/**
 * Safe external link - always sets rel="noopener noreferrer" and target="_blank".
 * Use this for ALL links that leave the site.
 */
export default function ExternalLink({ href, children, className, ...props }: ExternalLinkProps) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className={className} {...props}>
      {children}
    </a>
  )
}
