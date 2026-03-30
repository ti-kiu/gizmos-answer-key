'use client'
import { useState, useEffect } from 'react'
import { getSupabaseClient } from '@/lib/supabase'

export default function HomeworkClient() {
  const [isPro, setIsPro] = useState(false)
  const [authLoading, setAuthLoading] = useState(true)
  const [questions, setQuestions] = useState('')
  const [result, setResult] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

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
        // fail open
      } finally {
        setAuthLoading(false)
      }
    }
    checkSub()
  }, [])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!questions.trim()) return
    setLoading(true)
    setResult('')
    setError('')
    try {
      const res = await fetch('/api/ai/batch-answer', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ questions }),
      })
      const data = await res.json()
      setResult(data.answers || 'No result.')
    } catch {
      setError('Something went wrong. Please try again.')
    } finally {
      setLoading(false)
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
    <div className="max-w-2xl mx-auto">
      <form onSubmit={handleSubmit}>
        <div className="border border-gray-300 rounded-xl focus-within:ring-2 focus-within:ring-blue-500 overflow-hidden bg-white shadow-sm">
          <textarea
            value={questions}
            onChange={e => setQuestions(e.target.value)}
            placeholder={"Paste your homework questions here...\n\nExample:\n1. What is the powerhouse of the cell?\n2. Which planet is closest to the sun?"}
            rows={8}
            className="w-full px-4 pt-4 pb-2 text-base text-gray-800 resize-none focus:outline-none"
          />
          <div className="flex items-center justify-between px-3 pb-3 pt-1 border-t border-gray-100">
            <span className="text-xs text-gray-400">Paste one or more questions — AI will answer all of them</span>
            <button
              type="submit"
              disabled={loading || !questions.trim()}
              className="bg-blue-600 text-white px-5 py-2 rounded-lg text-sm font-semibold hover:bg-blue-700 disabled:opacity-40 transition-colors"
            >
              {loading ? 'Answering...' : 'Get Answers'}
            </button>
          </div>
        </div>
      </form>

      {error && <p className="text-red-500 text-sm mt-4">{error}</p>}

      {result && !loading && (
        <div className="mt-6">
          <div className="bg-blue-50 border border-blue-100 rounded-xl p-6">
            <div className="flex items-center justify-between mb-3">
              <span className="text-blue-600 font-semibold text-sm uppercase tracking-wide">AI Answers</span>
              {isPro && <span className="text-xs text-green-700 bg-green-100 px-2 py-0.5 rounded-full">✅ Full Access</span>}
            </div>
            <div className="text-gray-800 leading-relaxed whitespace-pre-wrap text-sm">
              {getVisibleResult(result)}
            </div>
          </div>

          {hasMoreContent(result) && !authLoading && (
            <div className="mt-4 bg-white border border-dashed border-blue-200 rounded-xl p-6 text-center">
              <p className="text-gray-600 font-medium mb-1">🔒 More answers locked</p>
              <p className="text-gray-400 text-sm mb-4">
                Free plan shows Q1 only. Upgrade to see all answers at once.
              </p>
              <a
                href="/pricing"
                className="bg-blue-600 text-white px-6 py-2.5 rounded-lg hover:bg-blue-700 inline-block font-medium"
              >
                Get Full Access — $4.99/mo
              </a>
            </div>
          )}
        </div>
      )}

      {loading && (
        <div className="mt-6 bg-blue-50 border border-blue-100 rounded-xl p-6 space-y-3">
          <div className="h-4 bg-blue-100 rounded animate-pulse w-1/3" />
          <div className="h-4 bg-blue-100 rounded animate-pulse w-full" />
          <div className="h-4 bg-blue-100 rounded animate-pulse w-5/6" />
          <div className="h-4 bg-blue-100 rounded animate-pulse w-3/4" />
        </div>
      )}
    </div>
  )
}
