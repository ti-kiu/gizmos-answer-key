import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  const { imageBase64 } = await req.json()
  if (!imageBase64) return NextResponse.json({ error: 'Missing image' }, { status: 400 })

  const apiKey = process.env.ANTHROPIC_API_KEY
  if (!apiKey) return NextResponse.json({ explanation: 'AI requires ANTHROPIC_API_KEY.' })

  try {
    const response = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'x-api-key': apiKey,
        'anthropic-version': '2023-06-01',
        'content-type': 'application/json',
      },
      body: JSON.stringify({
        model: 'claude-3-5-sonnet-20241022',
        max_tokens: 1024,
        system: 'You are a K-12 science and math tutor. Extract all questions from the Gizmo worksheet image and provide clear, accurate answers for each. Format: Q1: [question] → A: [answer]',
        messages: [{
          role: 'user',
          content: [
            { type: 'image', source: { type: 'base64', media_type: 'image/jpeg', data: imageBase64 } },
            { type: 'text', text: 'Please answer all questions visible in this Gizmo student exploration worksheet.' }
          ]
        }],
      }),
    })
    const data = await response.json()
    return NextResponse.json({ explanation: data.content?.[0]?.text || 'Could not process image.' })
  } catch {
    return NextResponse.json({ explanation: 'AI service temporarily unavailable.' })
  }
}
