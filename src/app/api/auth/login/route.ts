import { NextResponse } from 'next/server'
import { getSupabase } from '@/lib/supabase'

export async function POST(request: Request) {
  const { email, password } = await request.json()
  const supabase = getSupabase()
  
  const { data, error } = await supabase.auth.signInWithPassword({ email, password })

  if (error) {
    return NextResponse.json({ success: false, error: error.message }, { status: 400 })
  }
  
  return NextResponse.json({ success: true, session: data.session, user: data.user })
}
