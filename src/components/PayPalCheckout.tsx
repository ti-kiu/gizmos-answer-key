'use client'
import { PayPalScriptProvider, PayPalButtons } from '@paypal/react-paypal-js'
import { useState } from 'react'
import { getSupabaseClient } from '@/lib/supabase'

export default function PayPalCheckout({ plan }: { plan: 'monthly' | 'annual' }) {
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState('')

  const createOrder = async () => {
    try {
      const res = await fetch('/api/paypal/create-order', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ plan }),
      })
      const data = await res.json()
      console.log('Create order response:', data)
      if (!data.id) {
        setError(`Failed to create order: ${data.error || 'Unknown error'}`)
        throw new Error('Failed to create order')
      }
      return data.id
    } catch (err) {
      console.error('Create order error:', err)
      setError('Failed to create PayPal order. Please try again.')
      throw err
    }
  }

  const onApprove = async (data: { orderID: string }) => {
    const supabase = getSupabaseClient()
    if (!supabase) {
      setError('Service unavailable. Please try again later.')
      return
    }

    const { data: { user } } = await supabase.auth.getUser()

    if (!user?.id) {
      setError('Please sign in first to complete your purchase.')
      return
    }

    const res = await fetch('/api/paypal/capture-order', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ orderId: data.orderID, userId: user.id }),
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

  const clientId = process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID || 'AadK8lXmCMefljaos7lNRfv1v-XSIAlgAqM7pTICfHE3TKr76U00zztGNyX05WiITejJWnaBWE9yl7_R'

  return (
    <PayPalScriptProvider options={{ clientId, currency: 'USD' }}>
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
