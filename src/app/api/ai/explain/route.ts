import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  const { question, gizmoSlug } = await req.json()

  if (!question) {
    return NextResponse.json({ error: 'Missing question' }, { status: 400 })
  }

  const apiKey = process.env.ANTHROPIC_API_KEY
  if (!apiKey) {
    return NextResponse.json({ explanation: 'AI explanation requires an API key. Please configure ANTHROPIC_API_KEY.' })
  }

  try {
    const response = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'x-api-key': apiKey,
        'anthropic-version': '2023-06-01',
        'content-type': 'application/json',
      },
      body: JSON.stringify({
        model: 'claude-3-5-haiku-20241022',
        max_tokens: 512,
        system: `You are a K-12 science and math tutor helping students understand ExploreLearning Gizmos.
Provide a clear, concise explanation appropriate for middle/high school students.
Format: 1) Direct answer 2) Brief step-by-step reasoning 3) Key concept in one sentence.
Keep it under 150 words.`,
        messages: [{ role: 'user', content: `Gizmo: ${gizmoSlug}\nQuestion: ${question}` }],
      }),
    })

    const data = await response.json()
    const explanation = data.content?.[0]?.text || 'Unable to generate explanation.'
    return NextResponse.json({ explanation })
  } catch {
    return NextResponse.json({ explanation: 'AI service temporarily unavailable.' })
  }
}
