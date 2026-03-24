import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  const { gizmoTitle } = await req.json()
  if (!gizmoTitle) return NextResponse.json({ error: 'Missing gizmoTitle' }, { status: 400 })

  const apiKey = process.env.DEEPSEEK_API_KEY
  if (!apiKey) return NextResponse.json({ error: 'Missing API key' }, { status: 500 })

  try {
    const response = await fetch('https://api.deepseek.com/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'deepseek-chat',
        max_tokens: 2048,
        messages: [
          {
            role: 'system',
            content: `You are a K-12 science and math tutor. Generate a complete answer key for an ExploreLearning Gizmo student exploration worksheet.
Return ONLY valid JSON in this exact format, no extra text:
{
  "title": "Gizmo Title",
  "subject": "Subject Name",
  "grade": "6-8",
  "description": "Brief description of the gizmo",
  "sections": [
    {
      "title": "Section Title",
      "questions": [
        { "question": "Question text?", "answer": "Answer text." }
      ]
    }
  ]
}`
          },
          {
            role: 'user',
            content: `Generate a complete answer key for the ExploreLearning Gizmo: "${gizmoTitle}". Include Prior Knowledge Questions and at least 2 activity sections with 3-5 questions each.`
          }
        ],
      }),
    })

    const data = await response.json()
    const content = data.choices?.[0]?.message?.content || ''

    // Extract JSON from response
    const jsonMatch = content.match(/\{[\s\S]*\}/)
    if (!jsonMatch) return NextResponse.json({ error: 'Failed to parse AI response' }, { status: 500 })

    const gizmoData = JSON.parse(jsonMatch[0])
    return NextResponse.json(gizmoData)
  } catch (e) {
    return NextResponse.json({ error: 'AI service unavailable' }, { status: 500 })
  }
}
