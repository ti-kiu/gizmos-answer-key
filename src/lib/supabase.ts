import { createClient } from '@supabase/supabase-js'

let supabaseClient: ReturnType<typeof createClient> | null = null

export function getSupabaseClient() {
  if (typeof window === 'undefined') return null // SSR 时不初始化
  if (supabaseClient) return supabaseClient

  try {
    const url = 'https://tuqaeyebzocghfkyjirz.supabase.co'
    const key = 'sb_publishable_blzES9JruCT-vTrxlRSjyg_3T19G-MO'

    supabaseClient = createClient(url, key)
    return supabaseClient
  } catch (e) {
    console.error('Failed to create Supabase client:', e)
    return null
  }
}
