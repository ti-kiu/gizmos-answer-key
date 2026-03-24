import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  const { email, password } = await request.json()
  
  // TODO: 验证用户凭证
  
  return NextResponse.json({ 
    success: true,
    token: 'jwt_token_here' 
  })
}
