import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  const { question, gizmo } = await request.json()

  if (!question) {
    return NextResponse.json({ error: 'Missing question' }, { status: 400 })
  }

  const apiKey = process.env.DEEPSEEK_API_KEY
  if (!apiKey) {
    return NextResponse.json({ error: 'AI service not configured' }, { status: 500 })
  }

  const prompt = `You are a helpful science and math tutor for K-12 students. 
A student is working on an ExploreLearning Gizmo called "${gizmo}" and needs help with this question:

"${question}"

Please provide a clear explanation in this exact format:
✅ Answer: [direct answer]

📝 Step-by-step:
1. [step one]
2. [step two]
(add more steps as needed)

💡 Key Concept: [brief explanation of the underlying concept]

Keep the language simple and appropriate for middle/high school students.`

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
        max_tokens: 500,
        temperature: 0.3,
      }),
    })

    if (!res.ok) {
      const err = await res.text()
      console.error('DeepSeek error:', err)
      return NextResponse.json({ error: 'AI service error' }, { status: 502 })
    }

    const data = await res.json()
    const explanation = data.choices?.[0]?.message?.content ?? 'No explanation available.'

    return NextResponse.json({ explanation })
  } catch (e) {
    console.error('Explain API error:', e)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
