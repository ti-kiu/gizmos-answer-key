'use client'
import { useState, useRef, useEffect } from 'react'
import { getSupabaseClient } from '@/lib/supabase'

type Mode = 'image' | 'text'

export default function HomeworkClient() {
  const [mode, setMode] = useState<Mode>('image')
  const [isPro, setIsPro] = useState(false)
  const [authLoading, setAuthLoading] = useState(true)

  // Image mode
  const [preview, setPreview] = useState('')
  const [imageMime, setImageMime] = useState('image/jpeg')
  const inputRef = useRef<HTMLInputElement>(null)

  // Text mode
  const [questions, setQuestions] = useState('')

  // Results
  const [result, setResult] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  // Check subscription
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

  const handleFile = (file: File) => {
    setImageMime(file.type || 'image/jpeg')
    const reader = new FileReader()
    reader.onload = (e) => {
      setPreview(e.target?.result as string)
      setResult('')
      setError('')
    }
    reader.readAsDataURL(file)
  }

  const handleImageSubmit = async () => {
    if (!preview) return
    setLoading(true)
    setResult('')
    setError('')
    try {
      const base64 = preview.split(',')[1]
      const res = await fetch('/api/ai/explain-image', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ imageBase64: base64, mimeType: imageMime }),
      })
      const data = await res.json()
      setResult(data.explanation || 'No result.')
    } catch {
      setError('Something went wrong. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  const handleTextSubmit = async () => {
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

  // For free users: show first answer block only, lock the rest
  const getVisibleResult = (text: string) => {
    if (isPro) return text
    // Split by question separator (Q2. Q3. etc.)
    const parts = text.split(/\n(?=Q[2-9]\d*\.)/m)
    return parts[0] || text
  }

  const hasMoreContent = (text: string) => {
    if (isPro) return false
    const parts = text.split(/\n(?=Q[2-9]\d*\.)/m)
    return parts.length > 1
  }

  return (
    <div>
      {/* Mode Toggle */}
      <div className="flex gap-2 mb-6 bg-gray-100 p-1 rounded-xl w-fit mx-auto">
        <button
          onClick={() => { setMode('image'); setResult(''); setError('') }}
          className={`px-5 py-2 rounded-lg text-sm font-medium transition-all ${
            mode === 'image' ? 'bg-white shadow text-blue-600' : 'text-gray-500 hover:text-gray-700'
          }`}
        >
          📷 Upload Photo
        </button>
        <button
          onClick={() => { setMode('text'); setResult(''); setError('') }}
          className={`px-5 py-2 rounded-lg text-sm font-medium transition-all ${
            mode === 'text' ? 'bg-white shadow text-blue-600' : 'text-gray-500 hover:text-gray-700'
          }`}
        >
          📝 Paste Questions
        </button>
      </div>

      {/* Image Mode */}
      {mode === 'image' && (
        <div>
          <div
            className="border-2 border-dashed border-gray-300 rounded-xl p-8 text-center cursor-pointer hover:border-blue-400 transition-colors"
            onClick={() => !preview && inputRef.current?.click()}
            onDragOver={e => e.preventDefault()}
            onDrop={e => { e.preventDefault(); e.dataTransfer.files[0] && handleFile(e.dataTransfer.files[0]) }}
          >
            <input
              ref={inputRef}
              type="file"
              accept="image/*"
              className="hidden"
              onChange={e => e.target.files?.[0] && handleFile(e.target.files[0])}
            />
            {!preview ? (
              <>
                <div className="text-5xl mb-3">📷</div>
                <p className="text-gray-600 font-medium text-lg">Upload your homework worksheet</p>
                <p className="text-sm text-gray-400 mt-1">Click or drag & drop — JPG, PNG, etc.</p>
              </>
            ) : (
              <div>
                <img src={preview} alt="Worksheet" className="max-h-56 mx-auto rounded-lg object-contain mb-3" />
                <button
                  onClick={(e) => { e.stopPropagation(); setPreview(''); setResult(''); setError('') }}
                  className="text-sm text-gray-400 hover:text-red-500"
                >
                  Remove image
                </button>
              </div>
            )}
          </div>
          {preview && (
            <button
              onClick={handleImageSubmit}
              disabled={loading}
              className="mt-4 w-full bg-blue-600 text-white py-3 rounded-xl font-medium hover:bg-blue-700 disabled:opacity-50 transition-colors"
            >
              {loading ? 'Analyzing...' : 'Get Answers'}
            </button>
          )}
        </div>
      )}

      {/* Text Mode */}
      {mode === 'text' && (
        <div>
          <textarea
            value={questions}
            onChange={e => setQuestions(e.target.value)}
            placeholder={`Paste your questions here, one per line. Example:\n\n1. What is the powerhouse of the cell?\n2. Which planet is closest to the sun?\n3. What is 2 + 2?`}
            rows={10}
            className="w-full border rounded-xl p-4 text-gray-800 resize-none focus:outline-none focus:ring-2 focus:ring-blue-300"
          />
          <button
            onClick={handleTextSubmit}
            disabled={loading || !questions.trim()}
            className="mt-3 w-full bg-blue-600 text-white py-3 rounded-xl font-medium hover:bg-blue-700 disabled:opacity-50 transition-colors"
          >
            {loading ? 'Generating answers...' : 'Get All Answers'}
          </button>
        </div>
      )}

      {/* Error */}
      {error && <p className="text-red-500 text-sm mt-4">{error}</p>}

      {/* Results */}
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

          {/* Lock banner for free users */}
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

      {/* Loading skeleton */}
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
