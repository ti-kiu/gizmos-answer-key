import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  const { imageBase64 } = await request.json()

  if (!imageBase64) {
    return NextResponse.json({ error: 'Missing image' }, { status: 400 })
  }

  const apiKey = process.env.DEEPSEEK_API_KEY
  if (!apiKey) {
    return NextResponse.json({ error: 'AI service not configured' }, { status: 500 })
  }

  try {
    const res = await fetch('https://api.deepseek.com/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model: 'deepseek-chat',
        messages: [
          {
            role: 'user',
            content: [
              {
                type: 'image_url',
                image_url: { url: `data:image/jpeg;base64,${imageBase64}` },
              },
              {
                type: 'text',
                text: `This is a student's Gizmo worksheet or question. Please:
1. Identify the question(s) in the image
2. Provide clear answers with step-by-step explanations
3. Highlight the key concepts

Format your response clearly with ✅ Answer, 📝 Steps, and 💡 Key Concept sections for each question found.
Keep language appropriate for middle/high school students.`,
              },
            ],
          },
        ],
        max_tokens: 800,
        temperature: 0.3,
      }),
    })

    if (!res.ok) {
      const err = await res.text()
      console.error('DeepSeek vision error:', err)
      // DeepSeek vision may not be available on all plans — fallback message
      return NextResponse.json({
        explanation: 'Image analysis is not available on the current plan. Please type your question directly for AI help.',
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
