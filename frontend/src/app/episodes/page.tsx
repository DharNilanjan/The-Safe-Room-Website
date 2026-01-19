"use client"

import { AnimatedSection } from "@/components/animated-section"
import { EpisodeCard, type Episode } from "@/components/episode-card"

// Sample episode data - replace with actual data from your CMS or API
const episodes: Episode[] = [
  {
    id: "1",
    title: "Finding Peace in Uncertainty",
    description: "Exploring how to navigate life's uncertainties with grace and resilience.",
    date: "January 15, 2026",
    duration: "45 min",
    audioUrl: "/audio/episode-1.mp3", // Replace with actual audio URL
    fullDescription:
      "In our premiere episode, we dive deep into the challenges of living in uncertain times. We discuss practical strategies for maintaining inner peace, the importance of self-compassion, and how to build resilience when facing the unknown. Our conversation touches on mindfulness practices, the role of community support, and finding meaning in difficult moments.",
  },
  {
    id: "2",
    title: "The Art of Setting Boundaries",
    description: "A conversation about protecting your energy and honoring your needs.",
    date: "January 8, 2026",
    duration: "52 min",
    audioUrl: "/audio/episode-2.mp3", // Replace with actual audio URL
    fullDescription:
      "Boundaries are essential for healthy relationships and personal well-being. In this episode, we explore different types of boundaries, how to communicate them effectively, and what to do when others don't respect them. We also discuss the guilt that often comes with setting boundaries and how to overcome it.",
  },
  {
    id: "3",
    title: "Embracing Vulnerability",
    description: "Why showing up authentically is both terrifying and transformative.",
    date: "January 1, 2026",
    duration: "48 min",
    audioUrl: "/audio/episode-3.mp3", // Replace with actual audio URL
    fullDescription:
      "Vulnerability is often seen as weakness, but it's actually a profound strength. We discuss Brené Brown's research on vulnerability, share personal stories of moments when being vulnerable led to connection and growth, and explore how to create safe spaces for authentic expression.",
  },
  {
    id: "4",
    title: "Redefining Success",
    description: "Moving beyond societal expectations to discover what truly matters.",
    date: "December 25, 2025",
    duration: "50 min",
    audioUrl: "/audio/episode-4.mp3", // Replace with actual audio URL
    fullDescription:
      "What does success really mean? In this episode, we challenge conventional definitions of success and explore how to create a life that aligns with your values rather than external expectations. We discuss the pressure to achieve, the fear of failure, and the courage it takes to forge your own path.",
  },
]

export default function EpisodesPage() {
  return (
    <main className="min-h-screen py-16">
      <div className="container mx-auto max-w-7xl px-4">
        <AnimatedSection className="mb-12 text-center">
          <h1 className="mb-4 text-4xl font-bold md:text-5xl">All Episodes</h1>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Explore our collection of thoughtful conversations. Each episode is designed
            to provide insight, comfort, and inspiration.
          </p>
        </AnimatedSection>

        <div className="grid gap-8 md:grid-cols-2">
          {episodes.map((episode, index) => (
            <AnimatedSection key={episode.id} delay={index * 0.1}>
              <EpisodeCard episode={episode} />
            </AnimatedSection>
          ))}
        </div>

        {/* Empty state for when there are no episodes */}
        {episodes.length === 0 && (
          <div className="py-16 text-center">
            <p className="text-lg text-muted-foreground">
              No episodes available yet. Check back soon!
            </p>
          </div>
        )}
      </div>
    </main>
  )
}
