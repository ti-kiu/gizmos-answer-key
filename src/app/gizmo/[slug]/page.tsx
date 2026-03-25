import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getGizmoBySlug, getAllGizmos, getRelatedGizmos } from '@/lib/gizmos'
import GizmoAnswers from '@/components/GizmoAnswers'

const BASE = 'https://www.gizmosanswerkey.com'

export async function generateStaticParams() {
  return getAllGizmos().map((g) => ({ slug: g.slug }))
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const gizmo = getGizmoBySlug(params.slug)
  if (!gizmo) return {}
  return {
    title: `${gizmo.title} Answer Key`,
    description: `Complete ${gizmo.title} Gizmo answer key with AI explanations. Free answers for all activities and assessment questions.`,
    keywords: [
      `${gizmo.title} answer key`,
      `${gizmo.title} gizmo answers`,
      `${gizmo.title} student exploration answers`,
      `${gizmo.title} gizmo answer key`,
    ],
    alternates: { canonical: `${BASE}/gizmo/${gizmo.slug}` },
  }
}

export default function GizmoPage({ params }: { params: { slug: string } }) {
  const gizmo = getGizmoBySlug(params.slug)
  if (!gizmo) notFound()

  const related = getRelatedGizmos(params.slug)

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: BASE },
      { '@type': 'ListItem', position: 2, name: gizmo.subject, item: `${BASE}/subjects/${gizmo.subject_slug}` },
      { '@type': 'ListItem', position: 3, name: `${gizmo.title} Answer Key`, item: `${BASE}/gizmo/${gizmo.slug}` },
    ],
  }

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: gizmo.sections.flatMap(s =>
      s.questions.map(q => ({
        '@type': 'Question',
        name: q.question,
        acceptedAnswer: { '@type': 'Answer', text: q.answer },
      }))
    ),
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      {/* Breadcrumb */}
      <nav className="text-sm text-gray-500 mb-6">
        <a href="/" className="hover:text-blue-600">Home</a>
        {' / '}
        <a href={`/subjects/${gizmo.subject_slug}`} className="hover:text-blue-600">{gizmo.subject}</a>
        {' / '}
        <span>{gizmo.title}</span>
      </nav>

      {/* Header */}
      <div className="mb-8">
        <div className="flex gap-2 mb-3">
          <span className="bg-blue-100 text-blue-700 text-xs px-2 py-1 rounded">{gizmo.subject}</span>
          <span className="bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded">Grade {gizmo.grade}</span>
        </div>
        <h1 className="text-3xl font-bold text-gray-900 mb-3">{gizmo.title} Answer Key</h1>
        <p className="text-gray-600 mb-4">{gizmo.description}</p>
        <a href="#answers" className="inline-block bg-blue-600 text-white text-sm px-4 py-2 rounded-lg hover:bg-blue-700">
          Jump to Answers ↓
        </a>
      </div>

      {/* Answers + AI + Related (client component handles auth check) */}
      <GizmoAnswers gizmo={gizmo} related={related} />

      {/* Structured Data */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
    </div>
  )
}
