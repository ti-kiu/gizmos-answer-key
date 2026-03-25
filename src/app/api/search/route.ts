import { NextResponse } from 'next/server'
import { getAllGizmos } from '@/lib/gizmos'

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const q = searchParams.get('q')?.toLowerCase().trim() ?? ''

  if (!q) return NextResponse.json([])

  const results = getAllGizmos()
    .filter(g =>
      g.title.toLowerCase().includes(q) ||
      g.subject.toLowerCase().includes(q) ||
      g.description.toLowerCase().includes(q) ||
      g.slug.toLowerCase().includes(q)
    )
    .slice(0, 8)
    .map(g => ({
      slug: g.slug,
      title: g.title,
      subject: g.subject,
      grade: g.grade,
    }))

  return NextResponse.json(results)
}
