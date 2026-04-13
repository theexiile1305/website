import type { Metadata } from 'next'
import Link from 'next/link'
import { getAllPosts } from '@/lib/mdx'
import Badge from '@/components/ui/Badge'

export const metadata: Metadata = {
  title: 'Blog',
  description: 'Thoughts on security engineering, DevSecOps, and distributed systems.',
}

function formatDate(dateStr: string): string {
  return new Date(dateStr).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}

export default async function BlogPage() {
  const posts = await getAllPosts()

  return (
    <div className="min-h-screen pt-28 pb-24 px-4 sm:px-6">
      <div className="max-w-3xl mx-auto">
        <p className="font-mono text-sm text-emerald-500 mb-3">$ grep -R blog/</p>
        <h1 className="text-3xl sm:text-4xl font-bold text-zinc-100 mb-4">Writing</h1>
        <p className="text-zinc-400 mb-16">
          Thoughts on security engineering, DevSecOps, and building resilient systems.
        </p>

        {posts.length === 0 ? (
          <p className="text-zinc-500 font-mono text-sm">
            <span className="text-emerald-500">❯</span> No posts yet - check back soon.
          </p>
        ) : (
          <ol className="space-y-8" reversed>
            {posts.map((post) => (
              <li key={post.slug}>
                <article className="group">
                  <Link href={`/blog/${post.slug}`} className="block">
                    <time
                      dateTime={post.date}
                      className="text-xs font-mono text-zinc-500 mb-2 block"
                    >
                      {formatDate(post.date)}
                    </time>
                    <h2 className="text-xl font-semibold text-zinc-100 group-hover:text-emerald-400 transition-colors mb-2">
                      {post.title}
                    </h2>
                    <p className="text-zinc-400 text-sm leading-relaxed mb-3">{post.description}</p>
                  </Link>
                  <div className="flex flex-wrap gap-2">
                    {post.tags.map((tag) => (
                      <Badge key={tag} label={tag} variant="security" />
                    ))}
                  </div>
                </article>
              </li>
            ))}
          </ol>
        )}
      </div>
    </div>
  )
}
