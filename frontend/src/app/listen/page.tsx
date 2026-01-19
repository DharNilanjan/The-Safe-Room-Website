"use client"

import { AnimatedSection } from "@/components/animated-section"
import { PlatformButton } from "@/components/platform-button"
import { Music2, Radio, Podcast } from "lucide-react"

// Platform data - update URLs with your actual podcast links
const platforms = [
  {
    name: "Spotify",
    icon: Music2,
    url: "https://open.spotify.com/show/your-show-id",
    color: "#1DB954",
  },
  {
    name: "Apple Podcasts",
    icon: Podcast,
    url: "https://podcasts.apple.com/podcast/your-podcast-id",
    color: "#A461D8",
  },
  {
    name: "Google Podcasts",
    icon: Radio,
    url: "https://podcasts.google.com/feed/your-feed-id",
    color: "#4285F4",
  },
]

export default function ListenPage() {
  return (
    <main className="min-h-screen py-16">
      <div className="container mx-auto max-w-7xl px-4">
        {/* Header */}
        <AnimatedSection className="mb-16 text-center">
          <h1 className="mb-4 text-4xl font-bold md:text-5xl">Listen to The Safe Room</h1>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Choose your preferred podcast platform and start listening.
            New episodes release every week.
          </p>
        </AnimatedSection>

        {/* Platform Buttons */}
        <AnimatedSection delay={0.1} className="mb-16">
          <div className="mx-auto grid max-w-4xl gap-6 md:grid-cols-3">
            {platforms.map((platform) => (
              <PlatformButton
                key={platform.name}
                name={platform.name}
                icon={platform.icon}
                url={platform.url}
                color={platform.color}
              />
            ))}
          </div>
        </AnimatedSection>

        {/* Additional Info */}
        <AnimatedSection delay={0.2} className="mx-auto max-w-3xl">
          <div className="rounded-lg bg-muted/50 p-8">
            <h2 className="mb-4 text-2xl font-bold">Can't Find Your Platform?</h2>
            <p className="mb-4 text-muted-foreground">
              We're working on expanding to more platforms. In the meantime, you can listen to
              all our episodes directly on our website by visiting the{" "}
              <a href="/episodes" className="font-medium text-foreground underline-offset-4 hover:underline">
                Episodes page
              </a>
              .
            </p>
            <p className="text-sm text-muted-foreground">
              Want us on a specific platform? Let us know through our{" "}
              <a href="/contact" className="font-medium text-foreground underline-offset-4 hover:underline">
                contact form
              </a>
              .
            </p>
          </div>
        </AnimatedSection>

        {/* Subscribe Section */}
        <AnimatedSection delay={0.3} className="mt-16 text-center">
          <div className="mx-auto max-w-2xl">
            <h2 className="mb-4 text-3xl font-bold">Never Miss an Episode</h2>
            <p className="text-lg text-muted-foreground">
              Subscribe on your favorite platform to get notified when new episodes drop.
              We release fresh content every week, bringing you thoughtful conversations
              when you need them most.
            </p>
          </div>
        </AnimatedSection>
      </div>
    </main>
  )
}
