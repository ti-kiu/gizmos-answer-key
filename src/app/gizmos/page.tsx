import { Metadata } from 'next'
import { getAllGizmos } from '@/lib/gizmos'
import GizmoCard from '@/components/GizmoCard'

export const metadata: Metadata = {
  title: 'All Gizmos Answer Keys',
  description: 'Browse all ExploreLearning Gizmos answer keys organized by subject.',
}

export default function GizmosPage() {
  const all = getAllGizmos()
  const bySubject = all.reduce((acc, g) => {
    if (!acc[g.subject]) acc[g.subject] = []
    acc[g.subject].push(g)
    return acc
  }, {} as Record<string, typeof all>)

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold text-gray-900 mb-2">All Gizmos Answer Keys</h1>
      <p className="text-gray-500 mb-10">{all.length} Gizmos across all subjects</p>

      {Object.entries(bySubject).map(([subject, gizmos]) => (
        <section key={subject} className="mb-12">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-bold text-gray-800">{subject}</h2>
            <span className="text-sm text-gray-400">{gizmos.length} Gizmos</span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {gizmos.map(g => <GizmoCard key={g.slug} gizmo={g} />)}
          </div>
        </section>
      ))}
    </div>
  )
}
