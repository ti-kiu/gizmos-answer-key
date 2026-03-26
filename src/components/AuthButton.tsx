'use client'

export default function AuthButton() {
  // 暂时简化，避免 Supabase 客户端报错
  return (
    <a href="/auth" className="text-sm bg-blue-600 text-white px-4 py-1.5 rounded-lg hover:bg-blue-700">
      Sign in
    </a>
  )
}
