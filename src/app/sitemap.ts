import { MetadataRoute } from 'next'
import { getAllGizmos } from '@/lib/gizmos'

export default function sitemap(): MetadataRoute.Sitemap {
  const gizmos = getAllGizmos()
  const base = 'https://www.gizmosanswerkey.shop'

  const subjects = ['life-science', 'physical-science', 'earth-space', 'math', 'engineering']

  return [
    { url: base, lastModified: new Date(), changeFrequency: 'weekly', priority: 1 },
    { url: `${base}/gizmos`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.9 },
    { url: `${base}/pricing`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    ...subjects.map(s => ({
      url: `${base}/subjects/${s}`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    })),
    ...gizmos.map(g => ({
      url: `${base}/gizmo/${g.slug}`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    })),
  ]
}
