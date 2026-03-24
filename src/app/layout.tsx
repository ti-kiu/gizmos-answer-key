import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import AuthButton from '@/components/AuthButton'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    default: 'Gizmos Answer Key - Free Student Exploration Answers',
    template: '%s | Gizmos Answer Key',
  },
  description: 'Find free answer keys for ExploreLearning Gizmos. Step-by-step answers and AI explanations for all Gizmo student exploration sheets.',
  keywords: ['gizmos answer key', 'explorelearning gizmos answers', 'student exploration answers'],
  openGraph: {
    type: 'website',
    siteName: 'Gizmos Answer Key',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header className="border-b bg-white sticky top-0 z-50">
          <div className="max-w-6xl mx-auto px-4 h-14 flex items-center justify-between">
            <a href="/" className="font-bold text-xl text-blue-600">GizmosAnswerKey</a>
            <nav className="hidden md:flex gap-6 text-sm text-gray-600">
              <a href="/subjects/life-science" className="hover:text-blue-600">Life Science</a>
              <a href="/subjects/physical-science" className="hover:text-blue-600">Physical Science</a>
              <a href="/subjects/math" className="hover:text-blue-600">Math</a>
              <a href="/gizmos" className="hover:text-blue-600">All Gizmos</a>
              <a href="/pricing" className="hover:text-blue-600">Pricing</a>
            </nav>
            <AuthButton />
          </div>
        </header>
        <main>{children}</main>
        <footer className="border-t mt-16 py-8 text-center text-sm text-gray-500">
          <p>© 2026 GizmosAnswerKey.com — Not affiliated with ExploreLearning</p>
        </footer>
      </body>
    </html>
  )
}
