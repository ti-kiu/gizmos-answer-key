const BASE = process.env.PAYPAL_BASE_URL || 'https://api-m.sandbox.paypal.com'

async function getAccessToken(): Promise<string> {
  const clientId = process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID!
  const secret = process.env.PAYPAL_CLIENT_SECRET!
  const credentials = Buffer.from(`${clientId}:${secret}`).toString('base64')

  const res = await fetch(`${BASE}/v1/oauth2/token`, {
    method: 'POST',
    headers: {
      Authorization: `Basic ${credentials}`,
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: 'grant_type=client_credentials',
  })
  const data = await res.json()
  return data.access_token
}

export async function createOrder(plan: 'monthly' | 'annual') {
  const token = await getAccessToken()
  const amount = plan === 'monthly' ? '4.99' : '29.99'
  const description = plan === 'monthly' ? 'Gizmos Answer Key Monthly Plan' : 'Gizmos Answer Key Annual Plan'

  const res = await fetch(`${BASE}/v2/checkout/orders`, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      intent: 'CAPTURE',
      purchase_units: [
        {
          description,
          custom_id: plan,
          amount: { currency_code: 'USD', value: amount },
        },
      ],
    }),
  })
  return res.json()
}

export async function captureOrder(orderId: string) {
  const token = await getAccessToken()
  const res = await fetch(`${BASE}/v2/checkout/orders/${orderId}/capture`, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
  })
  return res.json()
}
