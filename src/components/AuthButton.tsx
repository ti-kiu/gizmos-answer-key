'use client'

import { useEffect, useState } from 'react'
import { createClient } from '@supabase/supabase-js'

export default function AuthButton() {
  const [user, setUser] = useState<any>(null)

  useEffect(() => {
    const supabase = createClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
    )

    supabase.auth.getUser().then(({ data }) => {
      setUser(data.user)
    })

    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null)
    })

    return () => subscription.unsubscribe()
  }, [])

  const handleSignOut = async () => {
    const supabase = createClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
    )
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
