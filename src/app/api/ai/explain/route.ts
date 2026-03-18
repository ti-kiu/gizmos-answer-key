import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  const { question } = await req.json()

  if (!question) {
    return NextResponse.json({ error: 'Missing question' }, { status: 400 })
  }

  return NextResponse.json({
    explanation: 'AI explanation is coming soon. Please check back later!'
  })
}
