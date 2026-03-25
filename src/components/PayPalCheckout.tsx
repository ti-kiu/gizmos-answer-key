'use client'
import { PayPalScriptProvider, PayPalButtons } from '@paypal/react-paypal-js'
import { useState } from 'react'
import { createClient } from '@supabase/supabase-js'

export default function PayPalCheckout({ plan }: { plan: 'monthly' | 'annual' }) {
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState('')

  const createOrder = async () => {
    const res = await fetch('/api/paypal/create-order', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ plan }),
    })
    const data = await res.json()
    if (!data.id) throw new Error('Failed to create order')
    return data.id
  }

  const onApprove = async (data: { orderID: string }) => {
    const supabase = createClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
    )
    const { data: { user } } = await supabase.auth.getUser()

    const res = await fetch('/api/paypal/capture-order', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ orderId: data.orderID, userId: user?.id }),
    })
    const result = await res.json()
    if (result.success) {
      setSuccess(true)
    } else {
      setError('Payment captured but failed to activate. Please contact support.')
    }
  }

  if (success) {
    return (
      <div className="text-center py-4">
        <p className="text-green-600 font-semibold text-lg">🎉 Payment successful!</p>
        <p className="text-gray-500 text-sm mt-1">Your subscription is now active.</p>
        <a href="/" className="mt-3 inline-block text-blue-600 hover:underline text-sm">Start exploring →</a>
      </div>
    )
  }

  return (
    <PayPalScriptProvider options={{ clientId: process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID!, currency: 'USD' }}>
      {error && <p className="text-red-500 text-sm mb-3">{error}</p>}
      <PayPalButtons
        style={{ layout: 'vertical', shape: 'rect', label: 'pay' }}
        createOrder={createOrder}
        onApprove={onApprove}
        onError={() => setError('Payment failed. Please try again.')}
      />
    </PayPalScriptProvider>
  )
}
