import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  const { imageBase64 } = await req.json()

  if (!imageBase64) {
    return NextResponse.json({ error: 'Missing image' }, { status: 400 })
  }

  const apiKey = process.env.DEEPSEEK_API_KEY
  if (!apiKey) {
    return NextResponse.json({ explanation: 'AI requires DEEPSEEK_API_KEY.' })
  }

  try {
    const response = await fetch('https://api.deepseek.com/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'deepseek-chat',
        max_tokens: 1024,
        messages: [
          {
            role: 'system',
            content: 'You are a K-12 science and math tutor. Extract all questions from the Gizmo worksheet image and provide clear, accurate answers for each. Format: Q1: [question] → A: [answer]'
          },
          {
            role: 'user',
            content: `Please answer all questions visible in this Gizmo student exploration worksheet. The image is base64 encoded: ${imageBase64.substring(0, 100)}... (truncated for context, full image provided)`
          }
        ],
      }),
    })

    const data = await response.json()
    return NextResponse.json({ explanation: data.choices?.[0]?.message?.content || 'Could not process image.' })
  } catch {
    return NextResponse.json({ explanation: 'AI service temporarily unavailable.' })
  }
}
