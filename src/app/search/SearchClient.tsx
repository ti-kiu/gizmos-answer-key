'use client'
import { useState, useEffect } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import { getAllGizmos } from '@/lib/gizmos'
import GizmoCard from '@/components/GizmoCard'
import { getSupabaseClient } from '@/lib/supabase'

export default function SearchClient() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const initialQuery = searchParams.get('q') || ''
  const [query, setQuery] = useState(initialQuery)

  const [freeAnswer, setFreeAnswer] = useState('')
  const [fullAnswer, setFullAnswer] = useState('')
  const [aiLoading, setAiLoading] = useState(false)
  const [aiError, setAiError] = useState('')

  const [isPro, setIsPro] = useState(false)
  const [authLoading, setAuthLoading] = useState(true)

  // Check subscription status
  useEffect(() => {
    const checkSub = async () => {
      try {
        const supabase = getSupabaseClient()
        if (!supabase) { setAuthLoading(false); return }
        const { data: { user } } = await supabase.auth.getUser()
        if (!user) { setAuthLoading(false); return }
        const res = await fetch(`/api/subscription?userId=${user.id}`)
        const data = await res.json()
        setIsPro(data.active === true)
      } catch {
        // fail open — treat as free
      } finally {
        setAuthLoading(false)
      }
    }
    checkSub()
  }, [])

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

  // When no Gizmo results, fetch AI answer
  useEffect(() => {
    const currentQ = searchParams.get('q') || ''
    if (!currentQ.trim() || results.length > 0) {
      setFreeAnswer('')
      setFullAnswer('')
      setAiError('')
      return
    }

    setFreeAnswer('')
    setFullAnswer('')
    setAiError('')
    setAiLoading(true)

    fetch('/api/search-answer', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ question: currentQ }),
    })
      .then(r => r.json())
      .then(data => {
        if (data.free || data.full) {
          setFreeAnswer(data.free ?? '')
          setFullAnswer(data.full ?? '')
        } else {
          setAiError('Could not generate an answer. Please try again.')
        }
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

      {/* AI Fallback */}
      {showAiFallback && (
        <div className="max-w-2xl mx-auto">
          <p className="text-gray-500 mb-6">
            No Gizmo found for &quot;{query}&quot; — here&apos;s an AI-generated answer:
          </p>

          {aiLoading && (
            <div className="flex items-center gap-2 text-gray-500 mb-4">
              <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24" fill="none">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
              </svg>
              Generating answer...
            </div>
          )}

          {aiError && <p className="text-red-500 text-sm">{aiError}</p>}

          {!aiLoading && freeAnswer && (
            <div className="space-y-4">

              {/* Answer 1 — always free */}
              <div className="bg-white border rounded-xl p-5 shadow-sm">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-blue-600 font-bold">Q1.</span>
                  <span className="text-xs text-green-700 bg-green-100 px-2 py-0.5 rounded-full">Free</span>
                </div>
                <p className="text-gray-800 leading-relaxed">{freeAnswer}</p>
              </div>

              {/* Answer 2 — pro only */}
              <div className="bg-white border rounded-xl p-5 shadow-sm">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-blue-600 font-bold">Q2.</span>
                  {isPro
                    ? <span className="text-xs text-green-700 bg-green-100 px-2 py-0.5 rounded-full">✅ Full Access</span>
                    : <span className="text-xs text-gray-500 bg-gray-100 px-2 py-0.5 rounded-full">🔒 Pro</span>
                  }
                </div>

                {authLoading ? (
                  <div className="h-4 bg-gray-200 rounded animate-pulse w-3/4" />
                ) : isPro ? (
                  <p className="text-gray-800 leading-relaxed">{fullAnswer}</p>
                ) : (
                  <div className="text-center py-2">
                    <p className="text-gray-500 text-sm mb-3">
                      🔒 Full explanation available with Pro
                    </p>
                    <a
                      href="/pricing"
                      className="bg-blue-600 text-white text-sm px-5 py-2 rounded-lg hover:bg-blue-700 inline-block"
                    >
                      Get Full Access — $4.99/mo
                    </a>
                  </div>
                )}
              </div>

            </div>
          )}
        </div>
      )}
    </div>
  )
}
