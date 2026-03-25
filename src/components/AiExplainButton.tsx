'use client'
import { useState } from 'react'

export default function AiExplainButton({ question, gizmoSlug }: { question: string; gizmoSlug: string }) {
  const [explanation, setExplanation] = useState('')
  const [loading, setLoading] = useState(false)
  const [open, setOpen] = useState(false)

  const handleExplain = async () => {
    if (open) { setOpen(false); return }
    if (explanation) { setOpen(true); return }

    setLoading(true)
    try {
      const res = await fetch('/api/explain', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ question, gizmo: gizmoSlug }),
      })
      const data = await res.json()
      setExplanation(data.explanation || 'No explanation available.')
      setOpen(true)
    } catch {
      setExplanation('Something went wrong. Please try again.')
      setOpen(true)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="mt-2">
      <button
        onClick={handleExplain}
        disabled={loading}
        className="text-sm text-blue-600 hover:text-blue-800 font-medium flex items-center gap-1 disabled:opacity-50"
      >
        {loading ? (
          <><span className="animate-spin">⏳</span> Analyzing...</>
        ) : open ? (
          '▲ Hide explanation'
        ) : (
          '🤖 AI Explain'
        )}
      </button>
      {open && explanation && (
        <div className="mt-3 p-4 bg-blue-50 border border-blue-100 rounded-lg text-sm text-gray-700 whitespace-pre-wrap leading-relaxed">
          {explanation}
        </div>
      )}
    </div>
  )
}
