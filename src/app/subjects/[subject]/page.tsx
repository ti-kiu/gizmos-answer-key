import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getAllGizmos } from '@/lib/gizmos'
import GizmoCard from '@/components/GizmoCard'

const SUBJECTS: Record<string, string> = {
  'life-science': 'Life Science',
  'physical-science': 'Physical Science',
  'earth-space': 'Earth & Space Science',
  'math': 'Math',
  'engineering': 'Engineering',
}

const BASE = 'https://www.gizmosanswerkey.com'

export async function generateStaticParams() {
  return Object.keys(SUBJECTS).map(s => ({ subject: s }))
}

export async function generateMetadata({ params }: { params: { subject: string } }): Promise<Metadata> {
  const name = SUBJECTS[params.subject]
  if (!name) return {}
  return {
    title: `${name} Gizmos Answer Key`,
    description: `Free answer keys for all ${name} ExploreLearning Gizmos. Browse and find answers instantly.`,
  }
}

export default function SubjectPage({ params }: { params: { subject: string } }) {
  const name = SUBJECTS[params.subject]
  if (!name) notFound()

  const gizmos = getAllGizmos().filter(g => g.subject_slug === params.subject)

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: BASE },
      { '@type': 'ListItem', position: 2, name: `${name} Gizmos`, item: `${BASE}/subjects/${params.subject}` },
    ],
  }

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <nav className="text-sm text-gray-500 mb-6">
        <a href="/" className="hover:text-blue-600">Home</a> / <span>{name}</span>
      </nav>
      <h1 className="text-3xl font-bold text-gray-900 mb-2">{name} Gizmos Answer Key</h1>
      <p className="text-gray-500 mb-8">{gizmos.length} Gizmos available</p>

      {gizmos.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {gizmos.map(g => <GizmoCard key={g.slug} gizmo={g} />)}
        </div>
      ) : (
        <div className="text-center py-16 bg-gray-50 rounded-2xl">
          <p className="text-gray-500">No Gizmos yet for this subject. Check back soon!</p>
          <a href="/gizmos" className="mt-4 inline-block text-blue-600 hover:underline">Browse all Gizmos →</a>
        </div>
      )}

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
    </div>
  )
}
