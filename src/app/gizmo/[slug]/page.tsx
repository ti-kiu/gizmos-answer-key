import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getGizmoBySlug, getAllGizmos } from '@/lib/gizmos'
import AiExplainButton from '@/components/AiExplainButton'

export async function generateStaticParams() {
  const gizmos = getAllGizmos()
  return gizmos.map((g) => ({ slug: g.slug }))
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const gizmo = getGizmoBySlug(params.slug)
  if (!gizmo) return {}
  return {
    title: `${gizmo.title} Answer Key`,
    description: `Complete ${gizmo.title} Gizmo answer key. Free answers for all activities and assessment questions.`,
    keywords: [
      `${gizmo.title} answer key`,
      `${gizmo.title} gizmo answers`,
      `${gizmo.title} student exploration answers`,
    ],
  }
}

export default function GizmoPage({ params }: { params: { slug: string } }) {
  const gizmo = getGizmoBySlug(params.slug)
  if (!gizmo) notFound()

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
        <p className="text-gray-600">{gizmo.description}</p>
      </div>

      {/* Answers */}
      {gizmo.sections.map((section, si) => (
        <div key={si} className="mb-10">
          <h2 className="text-xl font-bold text-gray-800 border-b pb-2 mb-4">{section.title}</h2>
          <div className="space-y-6">
            {section.questions.map((q, qi) => {
              const isFree = qi < 3
              return (
                <div key={qi} className="bg-white border rounded-xl p-5">
                  <p className="font-medium text-gray-800 mb-3">
                    <span className="text-blue-600 font-bold mr-2">Q{qi + 1}.</span>
                    {q.question}
                  </p>
                  {isFree ? (
                    <>
                      <div className="bg-green-50 border border-green-200 rounded-lg p-3 mb-3">
                        <span className="text-xs font-semibold text-green-700 uppercase tracking-wide">Answer</span>
                        <p className="text-gray-800 mt-1">{q.answer}</p>
                      </div>
                      <AiExplainButton question={q.question} gizmoSlug={params.slug} />
                    </>
                  ) : (
                    <div className="bg-gray-50 border border-dashed rounded-lg p-4 text-center">
                      <p className="text-gray-500 text-sm mb-3">🔒 Unlock full answers</p>
                      <a href="/pricing" className="bg-blue-600 text-white text-sm px-4 py-2 rounded-lg hover:bg-blue-700">
                        Get Full Access — $4.99/mo
                      </a>
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        </div>
      ))}

      {/* Related */}
      <div className="mt-12 border-t pt-8">
        <h3 className="text-lg font-bold text-gray-800 mb-4">Related Gizmos</h3>
        <p className="text-gray-500 text-sm">More {gizmo.subject} gizmos coming soon.</p>
      </div>

      {/* FAQ Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: gizmo.sections.flatMap(s =>
              s.questions.map(q => ({
                '@type': 'Question',
                name: q.question,
                acceptedAnswer: { '@type': 'Answer', text: q.answer },
              }))
            ),
          }),
        }}
      />
    </div>
  )
}
