import { NextResponse } from 'next/server'
import { captureOrder } from '@/lib/paypal'
import { createClient } from '@supabase/supabase-js'

export async function POST(request: Request) {
  const { orderId, userId } = await request.json()
  if (!orderId || !userId) {
    return NextResponse.json({ error: 'Missing orderId or userId' }, { status: 400 })
  }

  try {
    const capture = await captureOrder(orderId)
    console.log('PayPal capture response:', JSON.stringify(capture, null, 2))

    if (capture.status !== 'COMPLETED') {
      return NextResponse.json({ error: 'Payment not completed' }, { status: 402 })
    }

    const plan = capture.purchase_units?.[0]?.reference_id as 'monthly' | 'annual'
    console.log('Extracted plan:', plan)
    
    if (!plan) {
      return NextResponse.json({ error: 'Invalid plan in order' }, { status: 400 })
    }

    const expiresAt = new Date()
    if (plan === 'annual') {
      expiresAt.setFullYear(expiresAt.getFullYear() + 1)
    } else {
      expiresAt.setMonth(expiresAt.getMonth() + 1)
    }

    // write subscription to Supabase
    const supabase = createClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.SUPABASE_SERVICE_ROLE_KEY!
    )

    const { error } = await supabase.from('subscriptions').upsert({
      user_id: userId,
      plan,
      paypal_order_id: orderId,
      status: 'active',
      expires_at: expiresAt.toISOString(),
    }, { onConflict: 'user_id' })

    if (error) {
      console.error('Supabase upsert error:', error)
      return NextResponse.json({ error: 'Failed to save subscription', detail: error.message, code: error.code }, { status: 500 })
    }

    return NextResponse.json({ success: true, plan, expiresAt })
  } catch (e) {
    console.error('Capture order error:', e)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
