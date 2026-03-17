'use client'
import { useState, useRef } from 'react'

export default function ImageUploadExplain() {
  const [loading, setLoading] = useState(false)
  const [result, setResult] = useState('')
  const [preview, setPreview] = useState('')
  const inputRef = useRef<HTMLInputElement>(null)

  const handleFile = async (file: File) => {
    const reader = new FileReader()
    reader.onload = async (e) => {
      const dataUrl = e.target?.result as string
      setPreview(dataUrl)
      const base64 = dataUrl.split(',')[1]
      setLoading(true)
      setResult('')
      try {
        const res = await fetch('/api/ai/explain-image', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ imageBase64: base64 }),
        })
        const data = await res.json()
        setResult(data.explanation || 'No result.')
      } catch {
        setResult('Something went wrong. Please try again.')
      } finally {
        setLoading(false)
      }
    }
    reader.readAsDataURL(file)
  }

  return (
    <div className="border-2 border-dashed border-gray-300 rounded-xl p-6 text-center">
      <input
        ref={inputRef}
        type="file"
        accept="image/*"
        className="hidden"
        onChange={e => e.target.files?.[0] && handleFile(e.target.files[0])}
      />
      {!preview ? (
        <div
          onClick={() => inputRef.current?.click()}
          className="cursor-pointer py-8"
          onDragOver={e => e.preventDefault()}
          onDrop={e => { e.preventDefault(); e.dataTransfer.files[0] && handleFile(e.dataTransfer.files[0]) }}
        >
          <div className="text-4xl mb-3">📷</div>
          <p className="text-gray-600 font-medium">Upload your Gizmo worksheet</p>
          <p className="text-sm text-gray-400 mt-1">Click or drag & drop an image</p>
        </div>
      ) : (
        <div>
          <img src={preview} alt="Uploaded worksheet" className="max-h-48 mx-auto rounded-lg mb-4 object-contain" />
          <button onClick={() => { setPreview(''); setResult('') }} className="text-sm text-gray-400 hover:text-gray-600 mb-4">
            Remove image
          </button>
        </div>
      )}
      {loading && <p className="text-blue-500 animate-pulse mt-2">Analyzing worksheet...</p>}
      {result && (
        <div className="mt-4 bg-blue-50 border border-blue-100 rounded-lg p-4 text-left text-sm text-gray-700 whitespace-pre-wrap">
          {result}
        </div>
      )}
    </div>
  )
}
