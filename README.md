# Devam Kumar — Portfolio

A minimal, production-ready portfolio website built with Next.js 16, TypeScript, Tailwind CSS, and Framer Motion.

## Tech Stack

- **Framework:** Next.js 16 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS 4
- **Animations:** Framer Motion
- **Icons:** Lucide React + Custom SVGs
- **Email:** Resend API
- **Deployment:** Vercel

## Features

- Minimal black-and-white design with premium typography
- Smooth scroll-triggered animations
- AI Career Assistant chatbot (knowledge-base powered)
- Contact form with email delivery via Resend
- Medium blog integration via RSS
- Full SEO (Open Graph, Twitter Cards, JSON-LD, sitemap, robots.txt)
- Fully responsive (320px to ultrawide)
- Lighthouse optimized (95+ all categories)

## Getting Started

```bash
# Install dependencies
npm install

# Create environment file
cp .env.example .env.local

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Environment Variables

| Variable | Description |
|----------|-------------|
| `RESEND_API_KEY` | Resend API key for contact form emails |
| `OPENAI_API_KEY` | (Optional) OpenAI key for enhanced chatbot |

## Deployment

Deploy to Vercel with one click:

```bash
npx vercel
```

Or connect the GitHub repository to Vercel for automatic deployments.

## Project Structure

```
├── app/
│   ├── api/          # API routes (chat, contact, blogs)
│   ├── layout.tsx    # Root layout with SEO
│   ├── page.tsx      # Homepage
│   ├── sitemap.ts    # Dynamic sitemap
│   └── robots.ts     # Robots.txt
├── components/
│   ├── sections/     # Page sections (Hero, About, etc.)
│   ├── ui/           # Reusable UI components
│   ├── chatbot.tsx   # AI assistant
│   ├── navbar.tsx    # Navigation
│   └── footer.tsx    # Footer
├── data/
│   └── profile.json  # Knowledge base for chatbot
├── lib/
│   └── utils.ts      # Utility functions
└── public/
    └── profile.png   # Profile image
```

## License

MIT
