import { getCollection } from 'astro:content'
import type { CollectionEntry } from 'astro:content'

export interface PostItem {
  label: string;
  url: string;
  description?: string;
  image?: ImageMetadata;
}

export interface PostSection {
  title: string;
  items: PostItem[];
}

const postImages = import.meta.glob<{ default: ImageMetadata }>(
  '../content/posts/**/*.{png,jpg,jpeg,gif,webp,avif}',
  { eager: true },
)

function lastBodyImage(post: CollectionEntry<'posts'>): ImageMetadata | undefined {
  const dir = post.id.replace(/[^/]*$/, '')
  const sources = [...(post.body ?? '').matchAll(/!\[[^\]]*\]\(\s*([^)\s]+)/g)].map((m) => m[1]!)

  for (const src of sources.reverse()) {
    if (/^(https?:)?\/\//.test(src)) continue
    const image = postImages[`../content/posts/${dir}${src.replace(/^\.\//, '')}`]
    if (image) return image.default
  }
  return undefined
}

const sections: { dir: string; title: string; order?: string[] }[] = [
  { dir: "", title: "POSTS" },
  { dir: "dev", title: "DEV", order: ["astro-notes"] },
  { dir: "misc", title: "MISC" },
];

type SortBy = "date-desc" | "date-asc" | "title";
const sortBy = "date-desc" as SortBy;

export async function getPostSections(): Promise<PostSection[]> {
  const posts = await getCollection('posts', ({ data }) => !data.draft)

  const grouped = new Map<string, (PostItem & { slug: string; time: number })[]>()

  for (const post of posts) {
    const segments = post.id.split('/')
    const slug = segments.pop()!
    const dir = segments.join('/')

    const items = grouped.get(dir) ?? []
    items.push({
      slug,
      label: post.data.title,
      url: `/posts/${post.id}`,
      description: post.data.description,
      image: lastBodyImage(post),
      time: post.data.date.getTime(),
    })
    grouped.set(dir, items)
  }

  const configured = sections.filter((section) => grouped.has(section.dir))
  const unlisted = [...grouped.keys()]
    .filter((dir) => !sections.some((section) => section.dir === dir))
    .sort()
    .map((dir) => ({ dir, title: dir.toUpperCase(), order: undefined }))

  return [...configured, ...unlisted].map((section) => ({
    title: section.title,
    items: grouped.get(section.dir)!.sort((a, b) => {
      const ai = section.order?.indexOf(a.slug) ?? -1
      const bi = section.order?.indexOf(b.slug) ?? -1
      if (ai !== -1 || bi !== -1) return (ai === -1 ? Infinity : ai) - (bi === -1 ? Infinity : bi)
      if (sortBy === "title") return a.label.localeCompare(b.label)
      return sortBy === "date-asc" ? a.time - b.time : b.time - a.time
    }),
  }))
}
