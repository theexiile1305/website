import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { MDXRemote } from 'next-mdx-remote/rsc'
import { getPostBySlug, getPostSlugs } from '@/lib/mdx'
import { siteConfig } from '@/lib/metadata'
import Badge from '@/components/ui/Badge'
import Link from 'next/link'

interface PageProps {
  params: Promise<{ slug: string }>
}

function formatDate(dateStr: string): string {
  return new Date(dateStr).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}

function estimateReadingTime(content: string): number {
  const words = content.trim().split(/\s+/).length
  return Math.max(1, Math.round(words / 200))
}

export async function generateStaticParams() {
  const slugs = await getPostSlugs()
  return slugs.map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const post = await getPostBySlug(slug)
  if (!post) return { title: 'Not Found' }

  return {
    title: post.title,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      type: 'article',
      url: `${siteConfig.url}/blog/${slug}`,
      publishedTime: post.date,
    },
  }
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params
  const post = await getPostBySlug(slug)
  if (!post) notFound()

  const readingTime = estimateReadingTime(post.content)

  return (
    <div className="min-h-screen pt-28 pb-24 px-4 sm:px-6">
      <article className="max-w-3xl mx-auto">
        <Link
          href="/blog"
          className="inline-flex items-center gap-1 text-sm text-zinc-500 hover:text-zinc-300 transition-colors mb-10 font-mono"
        >
          <span aria-hidden="true">←</span> Back to writing
        </Link>

        <header className="mb-12">
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <time dateTime={post.date} className="text-xs font-mono text-zinc-500">
              {formatDate(post.date)}
            </time>
            <span className="text-zinc-700" aria-hidden="true">
              ·
            </span>
            <span className="text-xs font-mono text-zinc-500">{readingTime} min read</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-zinc-100 mb-4 leading-tight">
            {post.title}
          </h1>
          <p className="text-zinc-400 text-lg mb-6 leading-relaxed">{post.description}</p>
          <div className="flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <Badge key={tag} label={tag} variant="security" />
            ))}
          </div>
        </header>

        <hr className="border-zinc-800 mb-12" />

        <div className="prose prose-invert prose-zinc prose-emerald max-w-none prose-headings:font-semibold prose-headings:text-zinc-100 prose-p:text-zinc-400 prose-p:leading-relaxed prose-li:text-zinc-400 prose-strong:text-zinc-200 prose-a:text-emerald-400 prose-a:no-underline hover:prose-a:underline prose-code:text-emerald-300 prose-code:bg-zinc-900 prose-code:px-1 prose-code:py-0.5 prose-code:rounded prose-code:text-sm prose-pre:bg-zinc-900 prose-pre:border prose-pre:border-zinc-800 prose-blockquote:border-emerald-500 prose-blockquote:text-zinc-400">
          <MDXRemote source={post.content} />
        </div>

        <hr className="border-zinc-800 mt-16 mb-10" />

        <footer className="flex items-center justify-between gap-4">
          <Link
            href="/blog"
            className="inline-flex items-center gap-1 text-sm text-zinc-500 hover:text-zinc-300 transition-colors font-mono"
          >
            <span aria-hidden="true">←</span> Back to writing
          </Link>
          <time dateTime={post.date} className="text-xs font-mono text-zinc-600">
            {formatDate(post.date)}
          </time>
        </footer>
      </article>
    </div>
  )
}
