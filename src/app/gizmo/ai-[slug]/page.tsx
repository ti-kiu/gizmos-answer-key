'use client'
import { useEffect, useState } from 'react'
import { useParams } from 'next/navigation'
import AiExplainButton from '@/components/AiExplainButton'

interface Question { question: string; answer: string }
interface Section { title: string; questions: Question[] }
interface GizmoData {
  title: string
  subject: string
  grade: string
  description: string
  sections: Section[]
}

export default function AiGizmoPage() {
  const params = useParams()
  const slug = (params?.slug as string) || ''
  const cleanSlug = slug.replace(/^ai-/, '')
  const title = cleanSlug ? cleanSlug.replace(/-/g, ' ').replace(/\b\w/g, (c: string) => c.toUpperCase()) : ''

  const [data, setData] = useState<GizmoData | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    if (!title) { setError('Invalid page.'); setLoading(false); return; }
    fetch('/api/ai/generate-answers', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ gizmoTitle: title }),
    })
      .then(r => r.json())
      .then(d => {
        if (d.error) setError(d.error)
        else setData(d)
      })
      .catch(() => setError('Failed to load answers.'))
      .finally(() => setLoading(false))
  }, [title])

  if (loading) return (
    <div className="max-w-4xl mx-auto px-4 py-20 text-center">
      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4" />
      <p className="text-gray-500">Generating answer key for <strong>{title}</strong>...</p>
    </div>
  )

  if (error || !data) return (
    <div className="max-w-4xl mx-auto px-4 py-20 text-center">
      <p className="text-red-500">Could not generate answers. Please try again later.</p>
      <a href="/" className="mt-4 inline-block text-blue-600 hover:underline">← Back to Home</a>
    </div>
  )

  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      <nav className="text-sm text-gray-500 mb-6">
        <a href="/" className="hover:text-blue-600">Home</a>
        {' / '}
        <span>{data.title}</span>
      </nav>

      <div className="mb-8">
        <div className="flex gap-2 mb-3">
          <span className="bg-blue-100 text-blue-700 text-xs px-2 py-1 rounded">{data.subject}</span>
          <span className="bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded">Grade {data.grade}</span>
          <span className="bg-purple-100 text-purple-700 text-xs px-2 py-1 rounded">AI Generated</span>
        </div>
        <h1 className="text-3xl font-bold text-gray-900 mb-3">{data.title} Answer Key</h1>
        <p className="text-gray-600">{data.description}</p>
      </div>

      {data.sections.map((section, si) => (
        <div key={si} className="mb-10">
          <h2 className="text-xl font-bold text-gray-800 border-b pb-2 mb-4">{section.title}</h2>
          <div className="space-y-6">
            {section.questions.map((q, qi) => (
              <div key={qi} className="bg-white border rounded-xl p-5">
                <p className="font-medium text-gray-800 mb-3">
                  <span className="text-blue-600 font-bold mr-2">Q{qi + 1}.</span>
                  {q.question}
                </p>
                <div className="bg-green-50 border border-green-200 rounded-lg p-3 mb-3">
                  <span className="text-xs font-semibold text-green-700 uppercase tracking-wide">Answer</span>
                  <p className="text-gray-800 mt-1">{q.answer}</p>
                </div>
                <AiExplainButton question={q.question} gizmoSlug={slug} />
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}
