import { createClient } from '@supabase/supabase-js'

let supabaseClient: ReturnType<typeof createClient> | null = null

export function getSupabaseClient() {
  if (supabaseClient) return supabaseClient

  const url = 'https://tuqaeyebzocghfkyjirz.supabase.co'
  const key = 'sb_publishable_blzES9JruCT-vTrxlRSjyg_3T19G-MO'

  supabaseClient = createClient(url, key)
  return supabaseClient
}
