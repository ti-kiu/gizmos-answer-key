'use client'
import { useState } from 'react'

export default function AiExplainButton({
  question,
  gizmoSlug,
}: {
  question: string
  gizmoSlug: string
}) {
  const [open, setOpen] = useState(false)
  const [loading, setLoading] = useState(false)
  const [explanation, setExplanation] = useState('')

  const handleExplain = async () => {
    if (explanation) { setOpen(!open); return }
    setOpen(true)
    setLoading(true)
    try {
      const res = await fetch('/api/ai/explain', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ question, gizmoSlug }),
      })
      const data = await res.json()
      setExplanation(data.explanation || 'Unable to generate explanation.')
    } catch {
      setExplanation('Something went wrong. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div>
      <button
        onClick={handleExplain}
        className="text-sm text-blue-600 hover:underline flex items-center gap-1"
      >
        💡 {open ? 'Hide' : 'AI Explain'}
      </button>
      {open && (
        <div className="mt-3 bg-blue-50 border border-blue-100 rounded-lg p-4 text-sm text-gray-700">
          {loading ? (
            <span className="text-gray-400 animate-pulse">Generating explanation...</span>
          ) : (
            <p className="whitespace-pre-wrap">{explanation}</p>
          )}
        </div>
      )}
    </div>
  )
}
