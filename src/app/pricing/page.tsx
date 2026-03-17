import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Pricing - Gizmos Answer Key',
  description: 'Get full access to all Gizmos answer keys and unlimited AI explanations.',
}

const plans = [
  {
    name: 'Free',
    price: '$0',
    period: 'forever',
    highlight: false,
    features: [
      'First 3 answers per Gizmo',
      '5 AI explanations per day',
      'Search all Gizmos',
      'Browse by subject',
    ],
    cta: 'Get Started',
    href: '/',
  },
  {
    name: 'Monthly',
    price: '$4.99',
    period: 'per month',
    highlight: true,
    features: [
      'All answers unlocked',
      'Unlimited AI explanations',
      'Image upload & recognition',
      'Priority support',
    ],
    cta: 'Start Monthly',
    href: '/signup?plan=monthly',
  },
  {
    name: 'Annual',
    price: '$29.99',
    period: 'per year',
    highlight: false,
    badge: 'Save 50%',
    features: [
      'Everything in Monthly',
      'Best value — 2 months free',
      'Early access to new features',
      'Priority support',
    ],
    cta: 'Start Annual',
    href: '/signup?plan=annual',
  },
]

export default function PricingPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Simple, Transparent Pricing</h1>
        <p className="text-lg text-gray-500">Unlock all Gizmos answers and AI explanations</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {plans.map(plan => (
          <div
            key={plan.name}
            className={`relative rounded-2xl p-8 border-2 flex flex-col ${
              plan.highlight
                ? 'border-blue-500 bg-blue-600 text-white shadow-xl scale-105'
                : 'border-gray-200 bg-white text-gray-900'
            }`}
          >
            {plan.highlight && (
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-yellow-400 text-yellow-900 text-xs font-bold px-3 py-1 rounded-full">
                MOST POPULAR
              </div>
            )}
            {'badge' in plan && plan.badge && (
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-green-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                {plan.badge}
              </div>
            )}
            <div className="mb-6">
              <h2 className={`text-xl font-bold mb-2 ${plan.highlight ? 'text-white' : 'text-gray-900'}`}>{plan.name}</h2>
              <div className="flex items-end gap-1">
                <span className="text-4xl font-bold">{plan.price}</span>
                <span className={`text-sm mb-1 ${plan.highlight ? 'text-blue-200' : 'text-gray-400'}`}>/{plan.period}</span>
              </div>
            </div>
            <ul className="space-y-3 flex-1 mb-8">
              {plan.features.map(f => (
                <li key={f} className="flex items-start gap-2 text-sm">
                  <span className={plan.highlight ? 'text-blue-200' : 'text-green-500'}>✓</span>
                  <span className={plan.highlight ? 'text-blue-100' : 'text-gray-600'}>{f}</span>
                </li>
              ))}
            </ul>
            <a
              href={plan.href}
              className={`block text-center py-3 rounded-xl font-semibold transition-colors ${
                plan.highlight
                  ? 'bg-white text-blue-600 hover:bg-blue-50'
                  : 'bg-blue-600 text-white hover:bg-blue-700'
              }`}
            >
              {plan.cta}
            </a>
          </div>
        ))}
      </div>

      <p className="text-center text-sm text-gray-400 mt-10">
        No credit card required for free plan. Cancel anytime.
      </p>
    </div>
  )
}
