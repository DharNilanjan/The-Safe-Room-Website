"use client"

import { AnimatedSection } from "@/components/animated-section"
import { Card, CardContent } from "@/components/ui/card"
import { Heart, Users, MessageCircle } from "lucide-react"

export default function AboutPage() {
  return (
    <main className="min-h-screen py-16">
      <div className="container mx-auto max-w-7xl px-4">
        {/* Header */}
        <AnimatedSection className="mb-16 text-center">
          <h1 className="mb-4 text-4xl font-bold md:text-5xl">About The Safe Room</h1>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            A space where vulnerability is welcomed, authenticity is celebrated,
            and every voice matters.
          </p>
        </AnimatedSection>

        {/* Mission Statement */}
        <AnimatedSection delay={0.1} className="mb-16">
          <div className="mx-auto max-w-3xl">
            <h2 className="mb-6 text-3xl font-bold">Our Mission</h2>
            <div className="space-y-4 text-lg leading-relaxed text-muted-foreground">
              <p>
                The Safe Room was created with a simple yet powerful vision: to provide a judgment-free
                space where people can explore life's challenges, share their experiences, and find
                comfort in knowing they're not alone.
              </p>
              <p>
                In a world that often demands perfection and constant positivity, we believe in the
                power of honest conversations. We talk about the hard stuff—anxiety, uncertainty,
                grief, growth—not to dwell in negativity, but to acknowledge that these experiences
                are part of being human.
              </p>
              <p>
                Through thoughtful dialogue, expert insights, and personal stories, we aim to create
                a community where everyone feels seen, heard, and understood.
              </p>
            </div>
          </div>
        </AnimatedSection>

        {/* Values */}
        <AnimatedSection delay={0.2} className="mb-16">
          <h2 className="mb-8 text-center text-3xl font-bold">Our Values</h2>
          <div className="grid gap-6 md:grid-cols-3">
            <Card className="text-center transition-shadow hover:shadow-lg">
              <CardContent className="pt-6">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                  <Heart className="h-6 w-6 text-primary" />
                </div>
                <h3 className="mb-2 text-xl font-semibold">Compassion</h3>
                <p className="text-muted-foreground">
                  We approach every topic with empathy and understanding, creating a space
                  where everyone feels safe to be themselves.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center transition-shadow hover:shadow-lg">
              <CardContent className="pt-6">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <h3 className="mb-2 text-xl font-semibold">Community</h3>
                <p className="text-muted-foreground">
                  We believe in the power of connection and the healing that comes from
                  knowing you're not alone in your struggles.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center transition-shadow hover:shadow-lg">
              <CardContent className="pt-6">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                  <MessageCircle className="h-6 w-6 text-primary" />
                </div>
                <h3 className="mb-2 text-xl font-semibold">Authenticity</h3>
                <p className="text-muted-foreground">
                  We value real conversations over polished performances, embracing
                  vulnerability as a strength rather than a weakness.
                </p>
              </CardContent>
            </Card>
          </div>
        </AnimatedSection>

        {/* Host Section */}
        <AnimatedSection delay={0.3} className="mb-16">
          <div className="mx-auto max-w-4xl">
            <h2 className="mb-8 text-center text-3xl font-bold">Meet Your Hosts</h2>
            <div className="grid gap-8 md:grid-cols-2">
              {/* Host 1 */}
              <Card>
                <CardContent className="pt-6">
                  <div className="mb-4 h-48 rounded-lg bg-gradient-to-br from-primary/20 to-primary/5" />
                  <h3 className="mb-2 text-2xl font-semibold">Alex Thompson</h3>
                  <p className="mb-4 text-sm text-muted-foreground">Co-Host & Creator</p>
                  <p className="text-muted-foreground">
                    A mental health advocate and storyteller passionate about creating
                    spaces where people feel safe to be vulnerable. Alex believes that
                    sharing our stories is one of the most powerful ways to heal and connect.
                  </p>
                </CardContent>
              </Card>

              {/* Host 2 */}
              <Card>
                <CardContent className="pt-6">
                  <div className="mb-4 h-48 rounded-lg bg-gradient-to-br from-primary/20 to-primary/5" />
                  <h3 className="mb-2 text-2xl font-semibold">Jordan Lee</h3>
                  <p className="mb-4 text-sm text-muted-foreground">Co-Host</p>
                  <p className="text-muted-foreground">
                    With a background in psychology and counseling, Jordan brings both
                    professional insight and personal experience to every conversation.
                    They're dedicated to making mental health resources accessible to all.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </AnimatedSection>

        {/* Call to Action */}
        <AnimatedSection delay={0.4} className="text-center">
          <div className="mx-auto max-w-2xl rounded-lg bg-muted/50 p-8">
            <h2 className="mb-4 text-2xl font-bold">Join Our Community</h2>
            <p className="text-muted-foreground">
              The Safe Room is more than a podcast—it's a movement toward greater
              compassion, understanding, and connection. We'd love to have you be part of it.
            </p>
          </div>
        </AnimatedSection>
      </div>
    </main>
  )
}
