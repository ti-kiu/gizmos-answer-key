import { Metadata } from 'next'
import { getAllGizmos } from '@/lib/gizmos'
import GizmoCard from '@/components/GizmoCard'
import SearchBox from '@/components/SearchBox'

export const metadata: Metadata = {
  title: 'Search Gizmos Answer Key',
  description: 'Search for any ExploreLearning Gizmo answer key.',
}

export default function SearchPage({ searchParams }: { searchParams: { q?: string } }) {
  const q = searchParams.q?.toLowerCase().trim() || ''
  const all = getAllGizmos()
  const results = q
    ? all.filter(g =>
        g.title.toLowerCase().includes(q) ||
        g.subject.toLowerCase().includes(q) ||
        g.description.toLowerCase().includes(q)
      )
    : []

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <div className="mb-8">
        <SearchBox />
      </div>
      {q ? (
        <>
          <h1 className="text-2xl font-bold text-gray-900 mb-2">
            {results.length > 0 ? `${results.length} results for "${searchParams.q}"` : `No results for "${searchParams.q}"`}
          </h1>
          {results.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
              {results.map(g => <GizmoCard key={g.slug} gizmo={g} />)}
            </div>
          ) : (
            <div className="mt-8 text-center py-12 bg-gray-50 rounded-2xl">
              <p className="text-gray-500 mb-4">Try a different keyword, or browse popular Gizmos below.</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-6 text-left">
                {all.slice(0, 6).map(g => <GizmoCard key={g.slug} gizmo={g} />)}
              </div>
            </div>
          )}
        </>
      ) : (
        <div>
          <h1 className="text-2xl font-bold text-gray-900 mb-6">All Gizmos</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {all.map(g => <GizmoCard key={g.slug} gizmo={g} />)}
          </div>
        </div>
      )}
    </div>
  )
}
