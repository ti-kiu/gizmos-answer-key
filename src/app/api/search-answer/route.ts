import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  const { question } = await request.json()

  if (!question?.trim()) {
    return NextResponse.json({ error: 'Missing question' }, { status: 400 })
  }

  const apiKey = process.env.DEEPSEEK_API_KEY
  if (!apiKey) {
    return NextResponse.json({ error: 'AI service not configured' }, { status: 500 })
  }

  const prompt = `A student asked: "${question}"

Reply in this exact JSON format (no markdown, no extra text):
{
  "free": "One sentence with just the direct answer, no explanation.",
  "full": "2-4 sentences. Start with the answer, then explain why in simple terms a middle/high school student would understand. Sound natural, not like a textbook."
}

Rules for "free": one sentence, state the answer only.
Rules for "full": start with the same answer, then explain the reasoning. Natural tone, specific if possible. Under 80 words.`

  try {
    const res = await fetch('https://api.deepseek.com/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model: 'deepseek-chat',
        messages: [{ role: 'user', content: prompt }],
        max_tokens: 300,
        temperature: 0.4,
        response_format: { type: 'json_object' },
      }),
    })

    if (!res.ok) {
      const err = await res.text()
      console.error('DeepSeek error:', err)
      return NextResponse.json({ error: 'AI service error' }, { status: 502 })
    }

    const data = await res.json()
    const raw = data.choices?.[0]?.message?.content ?? '{}'

    let parsed: { free?: string; full?: string } = {}
    try {
      parsed = JSON.parse(raw)
    } catch {
      // fallback: treat whole response as full answer
      parsed = { free: raw.slice(0, 100) + '...', full: raw }
    }

    return NextResponse.json({
      free: parsed.free ?? '',
      full: parsed.full ?? '',
    })
  } catch (e) {
    console.error('Search answer API error:', e)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
