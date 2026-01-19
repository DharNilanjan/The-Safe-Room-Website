# The Safe Room - Podcast Website

A modern, minimal podcast website built with Next.js (App Router), React, Tailwind CSS, shadcn/ui, and Framer Motion.

## 🎯 Features

- **Modern Design**: Clean, minimal UI with dark mode by default
- **Fully Responsive**: Optimized for mobile, tablet, and desktop
- **Smooth Animations**: Framer Motion animations throughout
- **Accessible**: Keyboard navigable with proper ARIA labels
- **SEO Optimized**: Proper meta tags and semantic HTML

## 🛠️ Tech Stack

- **Framework**: Next.js 16 (App Router)
- **UI Library**: React 19
- **Styling**: Tailwind CSS 4
- **UI Components**: shadcn/ui
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **TypeScript**: Full type safety

## 📁 Project Structure

```
frontend/
├── src/
│   ├── app/
│   │   ├── about/
│   │   │   └── page.tsx         # About page
│   │   ├── contact/
│   │   │   └── page.tsx         # Contact form
│   │   ├── episodes/
│   │   │   └── page.tsx         # Episodes listing
│   │   ├── listen/
│   │   │   └── page.tsx         # Podcast platforms
│   │   ├── layout.tsx           # Root layout with navbar/footer
│   │   ├── page.tsx             # Home page
│   │   └── globals.css          # Global styles
│   ├── components/
│   │   ├── ui/                  # shadcn/ui components
│   │   │   ├── button.tsx
│   │   │   ├── card.tsx
│   │   │   ├── input.tsx
│   │   │   ├── label.tsx
│   │   │   └── textarea.tsx
│   │   ├── animated-section.tsx # Scroll-triggered animations
│   │   ├── audio-player.tsx     # Custom audio player
│   │   ├── episode-card.tsx     # Episode display component
│   │   ├── footer.tsx           # Site footer
│   │   ├── navbar.tsx           # Navigation bar
│   │   └── platform-button.tsx  # Podcast platform buttons
│   └── lib/
│       └── utils.ts             # Utility functions
├── public/                      # Static assets
├── package.json
├── tsconfig.json
└── README.md
```

## 🚀 Getting Started

### Prerequisites

- Node.js 20+ (recommended)
- npm or yarn

### Installation

1. Navigate to the frontend directory:
   ```bash
   cd frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## 📄 Pages

### Home (`/`)
- Hero section with animated gradient background
- Featured latest episode card
- Call-to-action buttons
- About section preview

### Episodes (`/episodes`)
- Grid of episode cards
- Each card includes:
  - Episode title and description
  - Date and duration
  - Embedded audio player
  - Expandable full description

### About (`/about`)
- Mission statement
- Core values with icons
- Host bios and photos
- Community invitation

### Listen (`/listen`)
- Podcast platform buttons (Spotify, Apple Podcasts, Google Podcasts)
- Platform icons with hover animations
- Alternative listening options

### Contact (`/contact`)
- Contact form with validation
- Anonymous submission option
- Success/error feedback
- Privacy information

## 🎨 Customization

### Colors

Edit theme colors in [globals.css](src/app/globals.css). The site uses HSL color values for easy customization.

### Episode Data

Update episode data in [episodes/page.tsx](src/app/episodes/page.tsx):

```typescript
const episodes: Episode[] = [
  {
    id: "1",
    title: "Episode Title",
    description: "Short description",
    date: "Month DD, YYYY",
    duration: "XX min",
    audioUrl: "/path/to/audio.mp3",
    fullDescription: "Full episode description",
  },
  // Add more episodes...
]
```

### Podcast Platforms

Update platform links in [listen/page.tsx](src/app/listen/page.tsx):

```typescript
const platforms = [
  {
    name: "Spotify",
    icon: Music2,
    url: "YOUR_SPOTIFY_URL",
    color: "#1DB954",
  },
  // Update other platforms...
]
```

### Host Information

Customize host details in [about/page.tsx](src/app/about/page.tsx) in the "Meet Your Hosts" section.

## 🎯 Components

### AnimatedSection
Wrapper component for scroll-triggered animations:
```tsx
<AnimatedSection delay={0.2}>
  <YourContent />
</AnimatedSection>
```

### EpisodeCard
Displays episode information with audio player:
```tsx
<EpisodeCard episode={episodeData} />
```

### AudioPlayer
Custom HTML5 audio player with controls:
```tsx
<AudioPlayer src="/path/to/audio.mp3" title="Episode Title" />
```

### PlatformButton
Animated button for podcast platforms:
```tsx
<PlatformButton
  name="Spotify"
  icon={Music2}
  url="https://..."
  color="#1DB954"
/>
```

## ♿ Accessibility

- Semantic HTML throughout
- ARIA labels on interactive elements
- Keyboard navigation support
- High contrast text
- Reduced motion support for accessibility preferences

## 🌐 Deployment

### Build for Production

```bash
npm run build
```

### Start Production Server

```bash
npm start
```

### Deploy to Vercel

The easiest way to deploy is using [Vercel](https://vercel.com):

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

## 📝 TODO / Future Enhancements

- [ ] Connect contact form to email service or CMS
- [ ] Add RSS feed for podcast
- [ ] Implement search functionality for episodes
- [ ] Add episode filtering and sorting
- [ ] Create admin panel for content management
- [ ] Add newsletter signup
- [ ] Implement social sharing buttons
- [ ] Add analytics tracking
- [ ] Create episode transcripts page
- [ ] Add light mode toggle

## 🤝 Contributing

This is a custom project for The Safe Room podcast. If you'd like to suggest improvements, please reach out through the contact form.

## 📄 License

© 2026 The Safe Room. All rights reserved.

## 🙏 Acknowledgments

- Built with [Next.js](https://nextjs.org/)
- UI components from [shadcn/ui](https://ui.shadcn.com/)
- Icons from [Lucide](https://lucide.dev/)
- Animations powered by [Framer Motion](https://www.framer.com/motion/)
