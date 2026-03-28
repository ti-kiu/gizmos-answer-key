import { Metadata } from 'next'
import SearchBox from '@/components/SearchBox'
import GizmoCard from '@/components/GizmoCard'
import { hotGizmos } from '@/data/gizmos'

export const metadata: Metadata = {
  title: 'Gizmos Answer Key - Free Student Exploration Answers',
  description: 'Find free answer keys for all ExploreLearning Gizmos. AI-powered explanations for every question.',
  alternates: { canonical: 'https://www.gizmosanswerkey.shop' },
}

export default function HomePage() {
  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Gizmos Answer Key',
    url: 'https://www.gizmosanswerkey.shop',
    description: 'Free answers and AI explanations for every ExploreLearning Gizmo student exploration sheet.',
    potentialAction: {
      '@type': 'SearchAction',
      target: 'https://www.gizmosanswerkey.shop/search?q={search_term_string}',
      'query-input': 'required name=search_term_string',
    },
  }

  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'EducationalOrganization',
    name: 'Gizmos Answer Key',
    url: 'https://www.gizmosanswerkey.shop',
    logo: 'https://www.gizmosanswerkey.shop/logo.png',
    description: 'Free educational resource providing answer keys for ExploreLearning Gizmos.',
  }

  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-b from-blue-50 to-white py-16 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Gizmos Answer Key
          </h1>
          <p className="text-lg text-gray-600 mb-8">
            Free answers and AI explanations for every ExploreLearning Gizmo student exploration sheet.
          </p>
          <SearchBox />
        </div>
      </section>

      {/* Homework Helper Banner */}
      <section className="max-w-6xl mx-auto px-4 pt-10 pb-2">
        <a
          href="/homework"
          className="flex items-center justify-between bg-gradient-to-r from-blue-600 to-blue-500 text-white rounded-2xl px-8 py-5 hover:from-blue-700 hover:to-blue-600 transition-all shadow-md"
        >
          <div>
            <p className="font-bold text-lg">📷 Homework Helper</p>
            <p className="text-blue-100 text-sm mt-0.5">
              Upload a worksheet photo or paste multiple questions — AI answers everything at once
            </p>
          </div>
          <span className="text-2xl ml-4">→</span>
        </a>
      </section>

      {/* Popular Gizmos */}
      <section className="max-w-6xl mx-auto px-4 py-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Popular Gizmos</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {hotGizmos.map((gizmo) => (
            <GizmoCard key={gizmo.slug} gizmo={gizmo} />
          ))}
        </div>
      </section>

      {/* Subjects */}
      <section className="bg-gray-50 py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Browse by Subject</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { name: 'Life Science', slug: 'life-science', emoji: '🧬', count: 120 },
              { name: 'Physical Science', slug: 'physical-science', emoji: '⚗️', count: 95 },
              { name: 'Earth & Space', slug: 'earth-space', emoji: '🌍', count: 80 },
              { name: 'Math', slug: 'math', emoji: '📐', count: 110 },
            ].map((s) => (
              <a
                key={s.slug}
                href={`/subjects/${s.slug}`}
                className="bg-white rounded-xl p-6 text-center border hover:border-blue-400 hover:shadow-md transition-all"
              >
                <div className="text-3xl mb-2">{s.emoji}</div>
                <div className="font-semibold text-gray-800">{s.name}</div>
                <div className="text-sm text-gray-500 mt-1">{s.count}+ Gizmos</div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Structured Data */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
    </div>
  )
}
