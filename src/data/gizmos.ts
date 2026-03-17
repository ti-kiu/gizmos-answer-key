import { getAllGizmos, Gizmo } from '@/lib/gizmos'

export const hotGizmos: Gizmo[] = getAllGizmos().slice(0, 6)
