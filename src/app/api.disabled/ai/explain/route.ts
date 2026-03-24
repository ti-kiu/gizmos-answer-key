import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  const { question, gizmoSlug } = await req.json()

  if (!question) {
    return NextResponse.json({ error: 'Missing question' }, { status: 400 })
  }

  const apiKey = process.env.DEEPSEEK_API_KEY
  if (!apiKey) {
    return NextResponse.json({ explanation: 'AI explanation requires an API key.' })
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
        max_tokens: 512,
        messages: [
          {
            role: 'system',
            content: `You are a K-12 science and math tutor helping students understand ExploreLearning Gizmos.
Provide a clear, concise explanation appropriate for middle/high school students.
Format: 1) Direct answer 2) Brief step-by-step reasoning 3) Key concept in one sentence.
Keep it under 150 words.`
          },
          {
            role: 'user',
            content: `Gizmo: ${gizmoSlug}\nQuestion: ${question}`
          }
        ],
      }),
    })

    const data = await response.json()
    const explanation = data.choices?.[0]?.message?.content || 'Unable to generate explanation.'
    return NextResponse.json({ explanation })
  } catch {
    return NextResponse.json({ explanation: 'AI service temporarily unavailable.' })
  }
}
