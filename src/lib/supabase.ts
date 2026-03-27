import { createBrowserClient } from '@supabase/ssr'

let supabaseClient: ReturnType<typeof createBrowserClient> | null = null

export function getSupabaseClient() {
  if (typeof window === 'undefined') return null
  if (supabaseClient) return supabaseClient

  supabaseClient = createBrowserClient(
    'https://tuqaeyebzocghfkyjirz.supabase.co',
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InR1cWFleWViem9jZ2hma3lqaXJ6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzQzNDExMDYsImV4cCI6MjA4OTkxNzEwNn0.blzES9JruCT-vTrxlRSjyg_3T19G-MO'
  )

  return supabaseClient
}
