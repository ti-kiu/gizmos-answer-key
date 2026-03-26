'use client'
import { useEffect, useState } from 'react'
import { getSupabaseClient } from '@/lib/supabase'
import AiExplainButton from './AiExplainButton'
import AiChatBox from './AiChatBox'
import GizmoCard from './GizmoCard'
import type { Gizmo } from '@/lib/gizmos'

export default function GizmoAnswers({ gizmo, related }: { gizmo: Gizmo; related: Gizmo[] }) {
  const [isPro, setIsPro] = useState(false)
  const [loading, setLoading] = useState(false) // 改为 false，直接显示内容

  // 暂时禁用 Supabase 检查
  // useEffect(() => {
  //   const check = async () => {
  //     try {
  //       const supabase = getSupabaseClient()
  //       if (!supabase) {
  //         setLoading(false)
  //         return
  //       }
  //       const { data: { user } } = await supabase.auth.getUser()
  //       if (!user) { setLoading(false); return }
  //       const res = await fetch(`/api/subscription?userId=${user.id}`)
  //       const data = await res.json()
  //       setIsPro(data.active === true)
  //     } catch {
  //     } finally {
  //       setLoading(false)
  //     }
  //   }
  //   check()
  // }, [])

  let globalIndex = 0

  return (
    <>
      {/* Answers */}
      <div id="answers">
        {gizmo.sections.map((section, si) => (
          <div key={si} className="mb-10">
            <h2 className="text-xl font-bold text-gray-800 border-b pb-2 mb-4">{section.title}</h2>
            <div className="space-y-6">
              {section.questions.map((q) => {
                const isFree = globalIndex < 3
                const qNum = globalIndex + 1
                globalIndex++
                const unlocked = isFree || isPro

                return (
                  <div key={qNum} className="bg-white border rounded-xl p-5 shadow-sm">
                    <p className="font-medium text-gray-800 mb-3">
                      <span className="text-blue-600 font-bold mr-2">Q{qNum}.</span>
                      {q.question}
                    </p>
                    {unlocked ? (
                      <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                        <span className="text-xs font-semibold text-green-700 uppercase tracking-wide">Answer</span>
                        <p className="text-gray-800 mt-1 mb-3">{q.answer}</p>
                        <AiExplainButton question={q.question} gizmoSlug={gizmo.slug} />
                      </div>
                    ) : loading ? (
                      <div className="bg-gray-50 border rounded-lg p-4 text-center">
                        <div className="h-4 bg-gray-200 rounded animate-pulse w-3/4 mx-auto" />
                      </div>
                    ) : (
                      <div className="bg-gray-50 border border-dashed rounded-lg p-4 text-center">
                        <p className="text-gray-500 text-sm mb-3">🔒 Unlock full answers with AI explanations</p>
                        <a
                          href="/pricing"
                          className="bg-blue-600 text-white text-sm px-5 py-2 rounded-lg hover:bg-blue-700 inline-block"
                        >
                          Get Full Access — $4.99/mo
                        </a>
                      </div>
                    )}
                  </div>
                )
              })}
            </div>
          </div>
        ))}
      </div>

      {/* Pro badge */}
      {isPro && (
        <div className="mb-6 flex items-center gap-2 text-sm text-green-700 bg-green-50 border border-green-200 rounded-lg px-4 py-2 w-fit">
          <span>✅</span> Full access unlocked
        </div>
      )}

      {/* AI Chat */}
      <div className="mt-4 mb-12">
        <AiChatBox gizmoSlug={gizmo.slug} gizmoTitle={gizmo.title} />
      </div>

      {/* Related */}
      <div className="border-t pt-8 mb-8">
        <h3 className="text-lg font-bold text-gray-800 mb-4">Related {gizmo.subject} Gizmos</h3>
        {related.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {related.map(g => <GizmoCard key={g.slug} gizmo={g} />)}
          </div>
        ) : (
          <p className="text-gray-500 text-sm">More {gizmo.subject} gizmos coming soon.</p>
        )}
      </div>
    </>
  )
}
