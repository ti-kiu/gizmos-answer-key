'use client'
import { useState, useEffect } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import { getAllGizmos } from '@/lib/gizmos'
import GizmoCard from '@/components/GizmoCard'

export default function SearchClient() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const initialQuery = searchParams.get('q') || ''
  const [query, setQuery] = useState(initialQuery)

  const [aiAnswer, setAiAnswer] = useState('')
  const [aiLoading, setAiLoading] = useState(false)
  const [aiError, setAiError] = useState('')

  const all = getAllGizmos()
  const q = query.toLowerCase().trim()
  const results = q
    ? all.filter(g =>
        g.title.toLowerCase().includes(q) ||
        g.subject.toLowerCase().includes(q) ||
        g.description.toLowerCase().includes(q)
      )
    : all

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    router.push(`/search?q=${encodeURIComponent(query)}`)
  }

  // When there are no results and we have a query, auto-fetch AI answer
  useEffect(() => {
    const currentQ = searchParams.get('q') || ''
    if (!currentQ.trim() || results.length > 0) {
      setAiAnswer('')
      setAiError('')
      return
    }

    setAiAnswer('')
    setAiError('')
    setAiLoading(true)

    fetch('/api/search-answer', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ question: currentQ }),
    })
      .then(r => r.json())
      .then(data => {
        if (data.answer) setAiAnswer(data.answer)
        else setAiError('Could not generate an answer. Please try again.')
      })
      .catch(() => setAiError('Something went wrong. Please try again.'))
      .finally(() => setAiLoading(false))
  }, [searchParams])

  const showAiFallback = q && results.length === 0

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <form onSubmit={handleSearch} className="mb-8">
        <input
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search for a Gizmo or ask any question..."
          className="w-full p-4 border rounded-lg text-lg"
        />
      </form>

      {q && !showAiFallback && (
        <h1 className="text-2xl font-bold text-gray-900 mb-6">
          {results.length} results for &quot;{query}&quot;
        </h1>
      )}

      {/* Normal Gizmo results */}
      {!showAiFallback && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {results.map(g => <GizmoCard key={g.slug} gizmo={g} />)}
        </div>
      )}

      {/* AI Fallback when no Gizmo found */}
      {showAiFallback && (
        <div className="max-w-2xl mx-auto">
          <p className="text-gray-500 mb-6">
            No Gizmo found for &quot;{query}&quot; — here&apos;s an AI-generated answer:
          </p>

          <div className="bg-blue-50 border border-blue-100 rounded-xl p-6">
            <div className="flex items-center gap-2 mb-3">
              <span className="text-blue-600 font-semibold text-sm uppercase tracking-wide">AI Answer</span>
            </div>

            {aiLoading && (
              <div className="flex items-center gap-2 text-gray-500">
                <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24" fill="none">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
                </svg>
                Generating answer...
              </div>
            )}

            {aiError && (
              <p className="text-red-500 text-sm">{aiError}</p>
            )}

            {aiAnswer && !aiLoading && (
              <p className="text-gray-800 leading-relaxed">{aiAnswer}</p>
            )}
          </div>
        </div>
      )}
    </div>
  )
}
