# 🌿 PlastiTrack

> **Track your plastic. Reduce your footprint. Earn your place on the planet.**

PlastiTrack is an open-source web application that helps individuals and communities take meaningful action against plastic pollution — one log at a time. Users can record what plastic they collect, visualize their environmental impact, discover nearby eco-friendly locations, and earn badges for their efforts.

**[🚀 Live Demo](https://plasti-track.vercel.app/)**

---

## Why PlastiTrack?

Plastic pollution is one of the most visible and solvable environmental crises of our time. Yet most people have no easy way to measure or celebrate the small actions they're already taking — picking up a bottle on a walk, swapping a bag, choosing a refill station.

PlastiTrack gives those actions a home. It turns everyday eco-habits into trackable data, community motivation, and real environmental metrics.

---

## Features

### 🗂️ Plastic Logging
Log every piece you collect or avoid. Capture the type (PET, HDPE, LDPE, etc.), quantity, and weight. Attach a proof photo to keep it honest and shareable.

### 📍 Location Tracking
Find and pin eco-friendly spots on an interactive Leaflet map — refill stations, eco shops, and recycling points. Every visited pin reinforces better habits in the real world.

### 🌍 Global Impact Dashboard
See the aggregated effect of the entire PlastiTrack community: total plastic saved, CO₂ reduced, water conserved, and users joined. Individual actions, collective numbers.

### 📊 Personal Stats & Weekly Overview
Charts powered by Recharts show your weekly plastic-reduction trend. Compare your personal totals against the global picture and watch your contribution grow over time.

### 🤖 AI-Powered Weekly Tips
Google Gemini (via Firebase Genkit) generates fresh, personalised tips each week for reducing plastic consumption — including a zero-waste recipe recommendation that minimises packaging.

### 🏅 Rewards & Badges
A points system rewards every log submission (10 eco points per entry). Unlock milestone badges — Plastic Saver, Water Warrior, Eco Hero, and Planet Protector — as your impact grows.

### ♿ Accessible & Responsive
Clean, mobile-first layout with dark mode support (next-themes), keyboard-navigable components (Radix UI), and ARIA-friendly markup throughout.

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | [Next.js 16](https://nextjs.org/) (App Router, React 19) |
| Language | TypeScript 5 |
| Styling | Tailwind CSS 3 + shadcn/ui + Radix UI |
| Charts | Recharts |
| Maps | Leaflet + React-Leaflet |
| AI | Google Gemini 2.5 Flash via [Firebase Genkit](https://firebase.google.com/docs/genkit) |
| Forms | React Hook Form + Zod validation |
| Animations | Framer Motion |
| Deployment | Vercel / Firebase App Hosting |

---

## Project Structure

```
PlastiTrack/
├── src/
│   ├── ai/
│   │   ├── genkit.ts                        # Genkit + Google AI initialisation
│   │   └── flows/
│   │       └── weekly-plastic-reduction-tips.ts  # AI tips flow (Gemini)
│   ├── app/
│   │   ├── dashboard/page.tsx               # Main dashboard route
│   │   ├── challenges/page.tsx              # Challenges route
│   │   └── rewards/page.tsx                 # Rewards route
│   ├── components/
│   │   ├── dashboard/                       # Dashboard widgets
│   │   │   ├── plastic-log-form.tsx         # Log submission form
│   │   │   ├── location-tracker.tsx         # Map + nearby eco-spots panel
│   │   │   ├── global-impact.tsx            # Community-wide stats
│   │   │   ├── personal-impact.tsx          # Per-user stats
│   │   │   ├── rewards.tsx                  # Points + badge display
│   │   │   ├── tips-carousel.tsx            # AI tips carousel
│   │   │   └── weekly-overview.tsx          # Weekly chart + skeleton
│   │   ├── challenges/                      # Challenges list + header
│   │   ├── map/                             # Leaflet map component
│   │   ├── ui/                              # shadcn/ui primitives
│   │   ├── app-header.tsx
│   │   ├── app-sidebar.tsx
│   │   └── bottom-nav.tsx
│   ├── data/
│   │   └── users.json                       # Seed / mock user data
│   ├── hooks/
│   │   ├── use-mobile.tsx
│   │   └── use-toast.ts
│   └── lib/
│       ├── utils.ts
│       └── placeholder-images.ts
├── public/                                  # Static assets & challenge images
├── docs/
│   └── blueprint.md                         # Original product brief
├── next.config.ts
├── tailwind.config.ts
└── apphosting.yaml                          # Firebase App Hosting config
```

---

## Getting Started

### Prerequisites

- Node.js 18+ and npm
- A **Google AI API key** (for Gemini-powered tips) — get one at [aistudio.google.com](https://aistudio.google.com/)

### 1. Clone the repository

```bash
git clone https://github.com/your-username/PlastiTrack.git
cd PlastiTrack
```

### 2. Install dependencies

```bash
npm install
```

### 3. Set up environment variables

Create a `.env.local` file in the project root:

```env
GOOGLE_GENAI_API_KEY=your_google_ai_api_key_here
```

### 4. Run the development server

```bash
npm run dev
```

Open [http://localhost:9003](http://localhost:9003) in your browser.

### 5. (Optional) Run the Genkit AI dev server

To develop or inspect AI flows locally:

```bash
npm run genkit:dev
```

---

## Available Scripts

| Script | Description |
|---|---|
| `npm run dev` | Start the Next.js dev server on port 9003 (Turbopack) |
| `npm run build` | Build for production |
| `npm run start` | Start the production server |
| `npm run lint` | Run ESLint |
| `npm run typecheck` | Type-check without emitting |
| `npm run genkit:dev` | Start the Genkit AI developer UI |
| `npm run genkit:watch` | Start Genkit in watch mode |

---

## Deployment

### Vercel

1. Push your fork to GitHub.
2. Import the repo in [Vercel](https://vercel.com/).
3. Add `GOOGLE_GENAI_API_KEY` as an environment variable.
4. Deploy — Vercel auto-detects Next.js and handles everything else.

---

## Contributing

We'd love your help making PlastiTrack better. Here's how to get involved:

### Reporting Bugs

Found something broken? [Open an issue](https://github.com/your-username/PlastiTrack/issues) and include:
- What you expected to happen
- What actually happened
- Steps to reproduce
- Your browser and OS

### Suggesting Features

Have an idea? Open a feature request issue with as much context as you can — screenshots, mockups, and use cases are all welcome.

### Submitting a Pull Request

1. Fork the repo and create a new branch from `main`:
   ```bash
   git checkout -b feature/your-feature-name
   ```
2. Make your changes, keeping commits focused and descriptive.
3. Run lint and type-check before pushing:
   ```bash
   npm run lint && npm run typecheck
   ```
4. Open a pull request against `main` with a clear description of what changed and why.

### Good First Issues

Looking for a place to start? Check issues tagged `good first issue`. Some ideas to get you going:

- Connect the plastic log form to a real database (Firebase Firestore is a natural fit)
- Add user authentication so logs persist between sessions
- Expand the AI tips flow to accept user-specific data as input
- Add more badge tiers to the reward system
- Write unit tests for form validation and utility functions
- Improve accessibility audit scores

---

## Roadmap

- [ ] Persistent storage (Firestore integration)
- [ ] User authentication (Firebase Auth)
- [ ] Community leaderboard
- [ ] Photo upload for log proof
- [ ] Push notifications for weekly tips
- [ ] Multilingual support (i18n)
- [ ] PWA / offline support

---

## Design Tokens

PlastiTrack uses a consistent nature-inspired palette:

| Token | Hex | Usage |
|---|---|---|
| Primary (Forest Green) | `#386641` | Buttons, headings, icons |
| Background (Sage) | `#E3E8E4` | Page background |
| Accent (Mustard Yellow) | `#D4AC0D` | Badges, highlights, CTAs |
| Font | PT Sans | All body and heading text |

---

## License

This project is open source. See the [LICENSE](./LICENSE) file for details.

---

## Acknowledgements

Built with a lot of love for the planet, and powered by the open-source community behind Next.js, Tailwind CSS, shadcn/ui, Leaflet, Recharts, and Firebase Genkit.

> *"We don't need a handful of people doing sustainability perfectly. We need millions of people doing it imperfectly."*