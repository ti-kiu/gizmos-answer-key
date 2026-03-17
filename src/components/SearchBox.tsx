'use client'
import { useState } from 'react'

export default function SearchBox() {
  const [query, setQuery] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (query.trim()) {
      window.location.href = `/search?q=${encodeURIComponent(query.trim())}`
    }
  }

  return (
    <form onSubmit={handleSubmit} className="flex gap-2 max-w-xl mx-auto">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search Gizmo name... (e.g. Photosynthesis Lab)"
        className="flex-1 border border-gray-300 rounded-xl px-4 py-3 text-base focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <button
        type="submit"
        className="bg-blue-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-blue-700 transition-colors"
      >
        Search
      </button>
    </form>
  )
}
