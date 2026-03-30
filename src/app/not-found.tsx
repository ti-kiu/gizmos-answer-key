import { Suspense } from 'react'
import SearchBox from '@/components/SearchBox'
import { getAllGizmos } from '@/lib/gizmos'
import GizmoCard from '@/components/GizmoCard'

export default function NotFound() {
  const popular = getAllGizmos().slice(0, 3)
  return (
    <div className="max-w-3xl mx-auto px-4 py-20 text-center">
      <div className="text-8xl font-black text-gray-100 mb-2">404</div>
      <h1 className="text-2xl font-bold text-gray-800 mb-2">Gizmo not found</h1>
      <p className="text-gray-500 mb-8">Try searching for the Gizmo you need.</p>
      <Suspense fallback={null}>
        <SearchBox />
      </Suspense>
      <div className="mt-12 text-left">
        <h2 className="text-lg font-semibold text-gray-700 mb-4">Popular Gizmos</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {popular.map(g => <GizmoCard key={g.slug} gizmo={g} />)}
        </div>
      </div>
      <a href="/" className="mt-8 inline-block text-blue-600 hover:underline">← Back to Home</a>
    </div>
  )
}
