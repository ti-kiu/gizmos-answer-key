'use client'
import { useState, useEffect, useRef } from 'react'
import { useRouter } from 'next/navigation'
import { getSupabaseClient } from '@/lib/supabase'

interface Result { slug: string; title: string; subject: string; grade: string }

export default function SearchBox() {
  const [mode, setMode] = useState<'search' | 'homework'>('search')
  const [query, setQuery] = useState('')
  const [results, setResults] = useState<Result[]>([])
  const [open, setOpen] = useState(false)
  const [aiResult, setAiResult] = useState('')
  const [loading, setLoading] = useState(false)
  const [isPro, setIsPro] = useState(false)
  const timer = useRef<NodeJS.Timeout>()
  const ref = useRef<HTMLDivElement>(null)
  const router = useRouter()

  useEffect(() => {
    const checkSub = async () => {
      try {
        const supabase = getSupabaseClient()
        if (!supabase) return
        const { data: { user } } = await supabase.auth.getUser()
        if (!user) return
        const res = await fetch(`/api/subscription?userId=${user.id}`)
        const data = await res.json()
        setIsPro(data.active === true)
      } catch {}
    }
    checkSub()
  }, [])

  useEffect(() => {
    if (mode !== 'search') return
    clearTimeout(timer.current)
    if (!query.trim()) { setResults([]); setOpen(false); return }
    timer.current = setTimeout(async () => {
      const res = await fetch(`/api/search?q=${encodeURIComponent(query)}`)
      const data = await res.json()
      setResults(data)
      setOpen(data.length > 0)
    }, 300)
  }, [query, mode])

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false)
    }
    document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!query.trim()) return
    
    if (mode === 'search') {
      router.push(`/search?q=${encodeURIComponent(query.trim())}`)
      setOpen(false)
    } else {
      setLoading(true)
      setAiResult('')
      try {
        const res = await fetch('/api/ai/batch-answer', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ questions: query }),
        })
        const data = await res.json()
        setAiResult(data.answers || 'No result.')
      } catch {
        setAiResult('Error: Please try again.')
      } finally {
        setLoading(false)
      }
    }
  }

  const getVisibleResult = (text: string) => {
    if (isPro) return text
    const parts = text.split(/\n(?=Q[2-9]\d*\.)/m)
    return parts[0] || text
  }

  const hasMoreContent = (text: string) => {
    if (isPro) return false
    const parts = text.split(/\n(?=Q[2-9]\d*\.)/m)
    return parts.length > 1
  }

  return (
    <div ref={ref} className="relative max-w-xl mx-auto">
      {/* Mode Toggle */}
      <div className="flex gap-2 mb-3 bg-gray-100 p-1 rounded-xl w-fit mx-auto">
        <button
          onClick={() => { setMode('search'); setQuery(''); setAiResult(''); setOpen(false) }}
          className={`px-4 py-1.5 rounded-lg text-sm font-medium transition-all ${
            mode === 'search' ? 'bg-white shadow text-blue-600' : 'text-gray-500'
          }`}
        >
          🔍 Search Gizmos
        </button>
        <button
          onClick={() => { setMode('homework'); setQuery(''); setResults([]); setOpen(false) }}
          className={`px-4 py-1.5 rounded-lg text-sm font-medium transition-all ${
            mode === 'homework' ? 'bg-white shadow text-blue-600' : 'text-gray-500'
          }`}
        >
          📝 Homework Helper
        </button>
      </div>

      <form onSubmit={handleSubmit} className="flex gap-2">
        {mode === 'search' ? (
          <input
            type="text"
            value={query}
            onChange={e => setQuery(e.target.value)}
            onFocus={() => results.length > 0 && setOpen(true)}
            placeholder="Search Gizmo name... (e.g. Photosynthesis Lab)"
            className="flex-1 border border-gray-300 rounded-xl px-4 py-3 text-base focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        ) : (
          <textarea
            value={query}
            onChange={e => setQuery(e.target.value)}
            placeholder={"Paste your homework questions...\n\n1. What is the powerhouse of the cell?\n2. Which planet is closest to the sun?"}
            rows={4}
            className="flex-1 border border-gray-300 rounded-xl px-4 py-3 text-base resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        )}
        <button 
          type="submit" 
          disabled={loading}
          className="bg-blue-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-blue-700 transition-colors disabled:opacity-50 self-start"
        >
          {loading ? '...' : mode === 'search' ? 'Search' : 'Answer'}
        </button>
      </form>

      {/* Search dropdown */}
      {mode === 'search' && open && (
        <div className="absolute top-full left-0 right-0 mt-1 bg-white border rounded-xl shadow-lg z-50 overflow-hidden">
          {results.slice(0, 8).map(r => (
            <button
              key={r.slug}
              onClick={() => { router.push(`/gizmo/${r.slug}`); setOpen(false); setQuery('') }}
              className="w-full text-left px-4 py-3 hover:bg-blue-50 flex items-center justify-between border-b last:border-0"
            >
              <span className="font-medium text-gray-800">{r.title}</span>
              <span className="text-xs bg-blue-100 text-blue-600 px-2 py-0.5 rounded ml-2 shrink-0">{r.subject}</span>
            </button>
          ))}
        </div>
      )}

      {/* AI Answer */}
      {mode === 'homework' && aiResult && !loading && (
        <div className="mt-4">
          <div className="bg-blue-50 border border-blue-100 rounded-xl p-5">
            <div className="flex items-center justify-between mb-2">
              <span className="text-blue-600 font-semibold text-xs uppercase tracking-wide">AI Answers</span>
              {isPro && <span className="text-xs text-green-700 bg-green-100 px-2 py-0.5 rounded-full">✅ Pro</span>}
            </div>
            <div className="text-gray-800 leading-relaxed whitespace-pre-wrap text-sm">
              {getVisibleResult(aiResult)}
            </div>
          </div>

          {hasMoreContent(aiResult) && (
            <div className="mt-3 bg-white border border-dashed border-blue-200 rounded-xl p-4 text-center">
              <p className="text-gray-600 text-sm mb-2">🔒 More answers locked</p>
              <a href="/pricing" className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 inline-block text-sm font-medium">
                Upgrade — $4.99/mo
              </a>
            </div>
          )}
        </div>
      )}

      {mode === 'homework' && loading && (
        <div className="mt-4 bg-blue-50 border border-blue-100 rounded-xl p-5 space-y-2">
          <div className="h-3 bg-blue-100 rounded animate-pulse w-1/4" />
          <div className="h-3 bg-blue-100 rounded animate-pulse w-full" />
          <div className="h-3 bg-blue-100 rounded animate-pulse w-4/5" />
        </div>
      )}
    </div>
  )
}
