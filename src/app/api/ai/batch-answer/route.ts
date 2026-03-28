import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  const { questions } = await request.json()

  if (!questions?.trim()) {
    return NextResponse.json({ error: 'Missing questions' }, { status: 400 })
  }

  const apiKey = process.env.DEEPSEEK_API_KEY
  if (!apiKey) {
    return NextResponse.json({ error: 'AI service not configured' }, { status: 500 })
  }

  const prompt = `A student submitted these homework questions:

${questions}

Answer ALL of them. For each question use this format:

Q1. [repeat the question]
Answer: [direct answer]
Why: [1-2 sentence explanation, simple language]

---

Rules:
- Number every question in order
- Keep each answer concise (under 3 sentences for "Why")
- Sound natural, not like a textbook
- For multiple choice, state the correct option letter and explain
- Don't skip any questions`

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
        max_tokens: 1500,
        temperature: 0.4,
      }),
    })

    if (!res.ok) {
      const err = await res.text()
      console.error('DeepSeek batch error:', err)
      return NextResponse.json({ error: 'AI service error' }, { status: 502 })
    }

    const data = await res.json()
    const answers = data.choices?.[0]?.message?.content ?? 'No answers available.'

    return NextResponse.json({ answers })
  } catch (e) {
    console.error('Batch answer API error:', e)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
