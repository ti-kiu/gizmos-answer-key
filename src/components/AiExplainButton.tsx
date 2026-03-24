'use client'
import { useState } from 'react'

export default function AiExplainButton({ question, gizmo }: { question: string; gizmo: string }) {
  const [explanation, setExplanation] = useState('')
  const [loading, setLoading] = useState(false)

  const handleExplain = async () => {
    setLoading(true)
    const res = await fetch('/api/explain', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ question, gizmo }),
    })
    const data = await res.json()
    setExplanation(data.explanation)
    setLoading(false)
  }

  return (
    <div>
      <button
        onClick={handleExplain}
        disabled={loading}
        className="text-sm text-blue-600 hover:underline"
      >
        {loading ? 'Loading...' : '🤖 AI Explain'}
      </button>
      {explanation && (
        <div className="mt-2 p-3 bg-blue-50 rounded text-sm">
          {explanation}
        </div>
      )}
    </div>
  )
}
