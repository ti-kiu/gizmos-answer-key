import { Metadata } from 'next'
import HomeworkClient from './HomeworkClient'

export const metadata: Metadata = {
  title: 'Homework Helper - Upload or Paste Your Questions | Gizmos Answer Key',
  description: 'Upload a photo of your homework or paste multiple questions at once. AI answers all questions instantly.',
}

export default function HomeworkPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <div className="text-center mb-10">
        <h1 className="text-3xl font-bold text-gray-900 mb-3">Homework Helper</h1>
        <p className="text-gray-500 text-lg">
          Upload a photo of your worksheet, or paste multiple questions at once — AI answers everything.
        </p>
      </div>
      <HomeworkClient />
    </div>
  )
}
