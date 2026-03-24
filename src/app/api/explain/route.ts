import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  const { question, gizmo } = await request.json()
  
  // 这里接入你的 AI API（OpenAI、Claude 等）
  // 示例使用模拟响应
  const explanation = `This question asks about ${question}. The key concept is understanding the fundamental principles involved.`
  
  return NextResponse.json({ explanation })
}
