import type { Metadata } from 'next'

export const siteConfig = {
  name: 'Michael Fuchs',
  title: 'Michael Fuchs - Software Security Engineer',
  description:
    'Software Security Engineer specializing in DevSecOps, Zero Trust architecture, Cloud Security, and Kubernetes. Building secure, resilient distributed systems.',
  url: 'https://mfuchs.dev',
  ogImage: '/og-image.png',
  links: {
    linkedin: 'https://linkedin.com/in/michifuchs',
    github: 'https://github.com/theexiile1305',
    email: 'hello@mfuchs.dev',
  },
  keywords: [
    'Software Security Engineer',
    'DevSecOps',
    'Zero Trust',
    'Cloud Security',
    'Kubernetes',
    'IAM',
    'OAuth2',
    'OIDC',
    'Go',
    'Kotlin',
    'Spring Boot',
    'Platform Engineering',
    'SRE',
  ],
} as const

export const defaultMetadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.title,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [...siteConfig.keywords],
  authors: [{ name: siteConfig.name, url: siteConfig.url }],
  creator: siteConfig.name,
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteConfig.url,
    title: siteConfig.title,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: siteConfig.title,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.title,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
    creator: '@mfuchs',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export const personJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: siteConfig.name,
  url: siteConfig.url,
  sameAs: [siteConfig.links.linkedin, siteConfig.links.github],
  jobTitle: 'Software Security Engineer',
  description: siteConfig.description,
  knowsAbout: [...siteConfig.keywords],
}

export const websiteJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: siteConfig.name,
  url: siteConfig.url,
  description: siteConfig.description,
  author: {
    '@type': 'Person',
    name: siteConfig.name,
  },
}
