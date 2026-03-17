# Gizmos Answer Key

Free answer keys and AI explanations for ExploreLearning Gizmos student exploration sheets.

## Tech Stack

- **Frontend**: Next.js 14 (App Router) + TypeScript + Tailwind CSS
- **AI**: Claude API (claude-3-5-haiku)
- **Deploy**: Vercel

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## Environment Variables

Create `.env.local`:

```
ANTHROPIC_API_KEY=your_claude_api_key_here
```

## Project Structure

```
src/
├── app/              # Next.js App Router pages
│   ├── page.tsx      # Homepage
│   ├── gizmo/[slug]  # Gizmo answer pages
│   └── api/ai/       # AI explain endpoint
├── components/       # Reusable UI components
├── lib/              # Data access layer
└── data/             # Static data exports
```

## Deploy to Vercel

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/ti-kiu/gizmos-answer-key)
