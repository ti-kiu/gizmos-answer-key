import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  const { email, password } = await request.json()
  
  // TODO: 接入数据库（Supabase、Firebase 等）
  // 示例：创建用户
  
  return NextResponse.json({ 
    success: true,
    message: 'Account created' 
  })
}
