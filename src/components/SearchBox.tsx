'use client'
import { useState, useEffect, useRef } from 'react'
import { useRouter } from 'next/navigation'

interface Result { slug: string; title: string; subject: string; grade: string }

export default function SearchBox() {
  const [query, setQuery] = useState('')
  const [results, setResults] = useState<Result[]>([])
  const [open, setOpen] = useState(false)
  const timer = useRef<NodeJS.Timeout>()
  const ref = useRef<HTMLDivElement>(null)
  const router = useRouter()

  useEffect(() => {
    clearTimeout(timer.current)
    if (!query.trim()) { setResults([]); setOpen(false); return }
    timer.current = setTimeout(async () => {
      const res = await fetch(`/api/search?q=${encodeURIComponent(query)}`)
      const data = await res.json()
      setResults(data)
      setOpen(data.length > 0)
    }, 300)
  }, [query])

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false)
    }
    document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (query.trim()) router.push(`/search?q=${encodeURIComponent(query.trim())}`)
    setOpen(false)
  }

  return (
    <div ref={ref} className="relative max-w-xl mx-auto">
      <form onSubmit={handleSubmit} className="flex gap-2">
        <input
          type="text"
          value={query}
          onChange={e => setQuery(e.target.value)}
          onFocus={() => results.length > 0 && setOpen(true)}
          placeholder="Search Gizmo name... (e.g. Photosynthesis Lab)"
          className="flex-1 border border-gray-300 rounded-xl px-4 py-3 text-base focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button type="submit" className="bg-blue-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-blue-700 transition-colors">
          Search
        </button>
      </form>
      {open && (
        <div className="absolute top-full left-0 right-0 mt-1 bg-white border rounded-xl shadow-lg z-50 overflow-hidden">
          {results.slice(0, 8).map(r => (
            <button
              key={r.slug}
              onClick={() => { router.push(r.slug.startsWith('ai/') ? `/gizmo/${r.slug}` : `/gizmo/${r.slug}`); setOpen(false); setQuery('') }}
              className="w-full text-left px-4 py-3 hover:bg-blue-50 flex items-center justify-between border-b last:border-0"
            >
              <span className="font-medium text-gray-800">{r.title}</span>
              <span className="text-xs bg-blue-100 text-blue-600 px-2 py-0.5 rounded ml-2 shrink-0">{r.subject}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  )
}
