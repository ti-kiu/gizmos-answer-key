'use client'

import { useEffect, useState } from 'react'
import { getSupabaseClient } from '@/lib/supabase'

export default function AuthButton() {
  const [user, setUser] = useState<any>(null)

  useEffect(() => {
    const supabase = getSupabaseClient()
    if (!supabase) return

    supabase.auth.getUser().then(({ data }: any) => {
      setUser(data.user)
    })

    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event: any, session: any) => {
      setUser(session?.user ?? null)
    })

    return () => subscription.unsubscribe()
  }, [])

  const handleSignOut = async () => {
    const supabase = getSupabaseClient()
    if (!supabase) return
    await supabase.auth.signOut()
    setUser(null)
  }

  if (user) {
    return (
      <div className="flex items-center gap-3">
        <span className="text-sm text-gray-600">{user.email}</span>
        <button
          onClick={handleSignOut}
          className="text-sm text-gray-500 hover:text-red-500"
        >
          Sign out
        </button>
      </div>
    )
  }

  return (
    <a href="/auth" className="text-sm bg-blue-600 text-white px-4 py-1.5 rounded-lg hover:bg-blue-700">
      Sign in
    </a>
  )
}
