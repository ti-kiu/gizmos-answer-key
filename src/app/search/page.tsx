'use client'
import { useState } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import { getAllGizmos } from '@/lib/gizmos'
import GizmoCard from '@/components/GizmoCard'

export default function SearchPage() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const initialQuery = searchParams.get('q') || ''
  const [query, setQuery] = useState(initialQuery)
  
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
    if (query.trim()) {
      router.push(`/search?q=${encodeURIComponent(query)}`)
    }
  }

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <form onSubmit={handleSearch} className="mb-8">
        <input
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search for a Gizmo..."
          className="w-full p-4 border rounded-lg text-lg"
        />
      </form>

      {q && (
        <h1 className="text-2xl font-bold text-gray-900 mb-6">
          {results.length} results for "{query}"
        </h1>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {results.map(g => <GizmoCard key={g.slug} gizmo={g} />)}
      </div>
    </div>
  )
}
