import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const CONTENT_DIR = path.join(process.cwd(), 'content', 'blog')

export interface PostFrontmatter {
  title: string
  date: string
  description: string
  tags: string[]
}

export interface Post {
  slug: string
  title: string
  date: string
  description: string
  tags: string[]
  content: string
}

export async function getPostSlugs(): Promise<string[]> {
  if (!fs.existsSync(CONTENT_DIR)) return []
  return fs
    .readdirSync(CONTENT_DIR)
    .filter((f) => f.endsWith('.mdx'))
    .map((f) => f.replace(/\.mdx$/, ''))
}

export async function getPostBySlug(slug: string): Promise<Post | null> {
  const filePath = path.join(CONTENT_DIR, `${slug}.mdx`)
  if (!fs.existsSync(filePath)) return null

  const raw = fs.readFileSync(filePath, 'utf-8')
  const { data, content } = matter(raw)
  const fm = data as Partial<PostFrontmatter>

  return {
    slug,
    title: fm.title ?? slug,
    date: fm.date ?? '',
    description: fm.description ?? '',
    tags: fm.tags ?? [],
    content,
  }
}

export async function getAllPosts(): Promise<Omit<Post, 'content'>[]> {
  const slugs = await getPostSlugs()
  const posts = await Promise.all(
    slugs.map(async (slug) => {
      const post = await getPostBySlug(slug)
      if (!post) return null
      const { content: _, ...meta } = post
      return meta
    })
  )
  return posts
    .filter((p): p is Omit<Post, 'content'> => p !== null)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
}
