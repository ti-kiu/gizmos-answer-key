import { NextResponse } from 'next/server'
import { createOrder } from '@/lib/paypal'

export async function POST(request: Request) {
  const { plan } = await request.json()
  if (plan !== 'monthly' && plan !== 'annual') {
    return NextResponse.json({ error: 'Invalid plan' }, { status: 400 })
  }
  try {
    const order = await createOrder(plan)
    return NextResponse.json({ id: order.id })
  } catch (e) {
    console.error('Create order error:', e)
    return NextResponse.json({ error: 'Failed to create order' }, { status: 500 })
  }
}
