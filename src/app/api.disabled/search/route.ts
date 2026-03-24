import { NextRequest, NextResponse } from 'next/server'
import { getAllGizmos } from '@/lib/gizmos'

export async function GET(req: NextRequest) {
  const q = req.nextUrl.searchParams.get('q')?.toLowerCase().trim() || ''
  if (!q) return NextResponse.json([])

  const localResults = getAllGizmos()
    .filter(g =>
      g.title.toLowerCase().includes(q) ||
      g.subject.toLowerCase().includes(q) ||
      g.description.toLowerCase().includes(q)
    )
    .slice(0, 8)
    .map(g => ({ slug: g.slug, title: g.title, subject: g.subject, grade: g.grade, dynamic: false }))

  // If fewer than 3 local results, add a dynamic AI-generated option
  if (localResults.length < 3) {
    const dynamicSlug = q.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '')
    const alreadyExists = localResults.some(r => r.slug === dynamicSlug)
    if (dynamicSlug.length > 2 && !alreadyExists) {
      localResults.push({
        slug: `ai/${dynamicSlug}`,
        title: q.split(' ').map((w: string) => w.charAt(0).toUpperCase() + w.slice(1)).join(' '),
        subject: 'AI Generated',
        grade: 'All',
        dynamic: true,
      })
    }
  }

  return NextResponse.json(localResults)
}
