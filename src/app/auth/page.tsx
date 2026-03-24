'use client'
import GoogleLoginButton from '@/components/GoogleLoginButton'

export default function AuthPage() {
  return (
    <div className="max-w-md mx-auto px-4 py-20">
      <div className="bg-white rounded-2xl shadow-lg p-8 text-center">
        <h1 className="text-2xl font-bold text-gray-900 mb-2">Sign in to Gizmos Answer Key</h1>
        <p className="text-gray-500 mb-8">Access full answer keys and AI explanations</p>
        <GoogleLoginButton />
        <p className="text-xs text-gray-400 mt-6">
          By signing in, you agree to our Terms of Service and Privacy Policy.
        </p>
      </div>
    </div>
  )
}
