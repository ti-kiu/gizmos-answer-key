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

  const prompt = `A student asked this question: "${question}"

Answer it clearly and naturally. Rules:
- Give the direct answer first
- Explain why in 2-4 sentences
- Use simple language for middle/high school students
- Sound like a knowledgeable peer, not a textbook
- No bullet points or headers, just natural paragraphs
- If it's a multiple choice question, state the correct option and explain
- Keep it under 100 words`

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
        temperature: 0.5,
      }),
    })

    if (!res.ok) {
      const err = await res.text()
      console.error('DeepSeek error:', err)
      return NextResponse.json({ error: 'AI service error' }, { status: 502 })
    }

    const data = await res.json()
    const answer = data.choices?.[0]?.message?.content ?? 'No answer available.'

    return NextResponse.json({ answer })
  } catch (e) {
    console.error('Search answer API error:', e)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
