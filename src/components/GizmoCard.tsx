import { Gizmo } from '@/lib/gizmos'

export default function GizmoCard({ gizmo }: { gizmo: Gizmo }) {
  return (
    <a
      href={`/gizmo/${gizmo.slug}`}
      className="block bg-white border rounded-xl p-5 hover:border-blue-400 hover:shadow-md transition-all"
    >
      <div className="flex gap-2 mb-2">
        <span className="bg-blue-50 text-blue-600 text-xs px-2 py-0.5 rounded">{gizmo.subject}</span>
        <span className="bg-gray-50 text-gray-500 text-xs px-2 py-0.5 rounded">Gr. {gizmo.grade}</span>
      </div>
      <h3 className="font-semibold text-gray-900 mb-1">{gizmo.title}</h3>
      <p className="text-sm text-gray-500 line-clamp-2">{gizmo.description}</p>
      <div className="mt-3 text-blue-600 text-sm font-medium">View Answer Key →</div>
    </a>
  )
}
