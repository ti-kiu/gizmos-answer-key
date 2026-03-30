import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  const { imageBase64, mimeType } = await request.json()

  if (!imageBase64) {
    return NextResponse.json({ error: 'Missing image' }, { status: 400 })
  }

  const apiKey = process.env.DEEPSEEK_API_KEY
  if (!apiKey) {
    return NextResponse.json({ error: 'AI service not configured' }, { status: 500 })
  }

  const mime = mimeType || 'image/jpeg'

  try {
    const res = await fetch('https://api.deepseek.com/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model: 'deepseek-reasoner',
        messages: [
          {
            role: 'user',
            content: [
              {
                type: 'image_url',
                image_url: { url: `data:${mime};base64,${imageBase64}` },
              },
              {
                type: 'text',
                text: `This is a student's homework worksheet or question sheet. 
Find ALL questions in the image and answer each one.

For each question, format like this:
Q1. [question text]
Answer: [direct answer]
Why: [1-2 sentence explanation, simple and natural]

---

Rules:
- Number every question
- Keep each answer under 3 sentences
- Sound like a knowledgeable peer, not a textbook
- If it's multiple choice, state the letter and explain why
- If you can't read part of the image, say so for that question`,
              },
            ],
          },
        ],
        max_tokens: 1200,
        temperature: 0.4,
      }),
    })

    if (!res.ok) {
      const err = await res.text()
      console.error('DeepSeek vision error:', err)
      return NextResponse.json({
        explanation: 'Image analysis unavailable. Please type your questions in the text box below.',
      })
    }

    const data = await res.json()
    const explanation = data.choices?.[0]?.message?.content ?? 'Could not analyze the image.'

    return NextResponse.json({ explanation })
  } catch (e) {
    console.error('Explain-image API error:', e)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
