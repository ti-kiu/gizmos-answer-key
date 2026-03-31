import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'FAQ - Frequently Asked Questions',
  description: 'Common questions about using Gizmos Answer Key, ExploreLearning Gizmos answers, and student exploration sheets.',
}

export default function FAQPage() {
  const faqs = [
    {
      question: "Is Gizmos Answer Key really free?",
      answer: "Yes, completely free. No registration, no credit card, no hidden fees. We believe every student should have access to learning resources."
    },
    {
      question: "Are these official ExploreLearning answers?",
      answer: "No, we are not affiliated with ExploreLearning. Our answers are created by educators and verified for accuracy, but they are independent reference materials."
    },
    {
      question: "How do I find answers for my Gizmo?",
      answer: "Use the search bar on our homepage. Type the name of your Gizmo (e.g., 'Cell Division') and you'll see the answer key with step-by-step explanations."
    },
    {
      question: "Can I use this for homework?",
      answer: "Our site is designed as a learning tool. We recommend trying the Gizmo yourself first, then using our answers to check your work and understand concepts you missed."
    },
    {
      question: "Do you have answers for all Gizmos?",
      answer: "We currently have 80+ Gizmos across Life Science, Physical Science, Math, and Earth & Space Science. We're adding more every week."
    },
    {
      question: "Will my teacher know if I use this?",
      answer: "We don't track or report usage. However, we encourage using this as a study aid, not for copying. Understanding the material is what matters for tests and future learning."
    },
    {
      question: "Are the explanations accurate?",
      answer: "Yes. Our answers are created by experienced educators and cross-checked for accuracy. If you find an error, please let us know."
    },
    {
      question: "Can teachers use this site?",
      answer: "Absolutely! Many teachers use our answer keys for lesson planning, creating discussion questions, and understanding common student difficulties."
    },
    {
      question: "Do I need to create an account?",
      answer: "No account needed. All answers are freely accessible without registration."
    },
    {
      question: "What's the Homework Helper feature?",
      answer: "Upload a photo of any homework problem and get AI-powered explanations. It works for math, science, and other subjects beyond just Gizmos."
    },
    {
      question: "How often do you add new Gizmos?",
      answer: "We add new answer keys regularly based on user requests. If you need a specific Gizmo, let us know!"
    },
    {
      question: "Is this site safe to use?",
      answer: "Yes. We don't collect personal information, require downloads, or show intrusive ads. Your privacy is protected."
    }
  ]

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-4">Frequently Asked Questions</h1>
      <p className="text-gray-600 mb-8">Everything you need to know about using Gizmos Answer Key</p>
      
      <div className="space-y-6">
        {faqs.map((faq, index) => (
          <div key={index} className="border rounded-lg p-6 bg-white shadow-sm">
            <h2 className="text-xl font-semibold mb-3 text-gray-900">{faq.question}</h2>
            <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
          </div>
        ))}
      </div>

      <div className="mt-12 p-6 bg-blue-50 rounded-lg">
        <h2 className="text-2xl font-bold mb-3">Still have questions?</h2>
        <p className="text-gray-700 mb-4">Can't find what you're looking for? We're here to help.</p>
        <a href="/" className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition">
          Search Gizmos
        </a>
      </div>
    </div>
  )
}

