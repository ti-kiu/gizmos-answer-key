import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import AuthButton from '@/components/AuthButton'
import GoogleAnalytics from '@/components/GoogleAnalytics'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    default: '✅ Free Gizmos Answer Key - All Student Exploration Sheets',
    template: '%s | Gizmos Answer Key',
  },
  description: '🎓 Get instant free answers for 80+ ExploreLearning Gizmos. Complete answer keys with step-by-step explanations for all student exploration sheets.',
  keywords: ['gizmos answer key', 'explorelearning gizmos answers', 'student exploration answers', 'free gizmo answers', 'gizmos homework help', 'gizmo answer sheet'],
  openGraph: {
    type: 'website',
    siteName: 'Gizmos Answer Key',
    title: 'Free Gizmos Answer Key - All Student Exploration Sheets',
    description: 'Get instant free answers for 80+ ExploreLearning Gizmos with step-by-step explanations.',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        {process.env.NEXT_PUBLIC_GA_ID && (
          <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID} />
        )}
      </head>
      <body className={inter.className}>
        <header className="border-b bg-white sticky top-0 z-50">
          <div className="max-w-6xl mx-auto px-4 h-14 flex items-center justify-between">
            <a href="/" className="font-bold text-xl text-blue-600">GizmosAnswerKey</a>
            <nav className="hidden md:flex gap-6 text-sm text-gray-600">
              <a href="/homework" className="hover:text-blue-600 font-medium">📸 Homework Helper</a>
              <a href="/subjects/life-science" className="hover:text-blue-600">Life Science</a>
              <a href="/subjects/physical-science" className="hover:text-blue-600">Physical Science</a>
              <a href="/subjects/math" className="hover:text-blue-600">Math</a>
              <a href="/gizmos" className="hover:text-blue-600">All Gizmos</a>
              <a href="/faq" className="hover:text-blue-600">FAQ</a>
              <a href="/pricing" className="hover:text-blue-600">Pricing</a>
            </nav>
            <AuthButton />
          </div>
        </header>
        <main>{children}</main>
        <footer className="border-t mt-16 py-8 text-center text-sm text-gray-500">
          <p>© 2026 GizmosAnswerKey.shop — Not affiliated with ExploreLearning</p>
        </footer>
      </body>
    </html>
  )
}
