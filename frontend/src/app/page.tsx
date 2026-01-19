"use client"

import { useState } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { AnimatedSection } from "@/components/animated-section"
import { EpisodeCard, type Episode } from "@/components/episode-card"
import { PlatformButton } from "@/components/platform-button"
import { PodcastReviews, type Review } from "@/components/podcast-reviews"
import { Headphones, ArrowRight, Mic, Users, Heart, MessageCircle, Radio, Play, Mail, Send, CheckCircle2, Music2, Podcast } from "lucide-react"

// Episode data
const episodes: Episode[] = [
  {
    id: "1",
    title: "Finding Peace in Uncertainty",
    description: "Exploring how to navigate life's uncertainties with grace and resilience.",
    date: "January 15, 2026",
    duration: "45 min",
    episodeLink: "[EPISODE_1_LINK]",
    fullDescription:
      "In our premiere episode, we dive deep into the challenges of living in uncertain times. We discuss practical strategies for maintaining inner peace, the importance of self-compassion, and how to build resilience when facing the unknown. Our conversation touches on mindfulness practices, the role of community support, and finding meaning in difficult moments.",
  },
  {
    id: "2",
    title: "The Art of Setting Boundaries",
    description: "A conversation about protecting your energy and honoring your needs.",
    date: "January 8, 2026",
    duration: "52 min",
    episodeLink: "[EPISODE_2_LINK]",
    fullDescription:
      "Boundaries are essential for healthy relationships and personal well-being. In this episode, we explore different types of boundaries, how to communicate them effectively, and what to do when others don't respect them. We also discuss the guilt that often comes with setting boundaries and how to overcome it.",
  },
  {
    id: "3",
    title: "Embracing Vulnerability",
    description: "Why showing up authentically is both terrifying and transformative.",
    date: "January 1, 2026",
    duration: "48 min",
    episodeLink: "[EPISODE_3_LINK]",
    fullDescription:
      "Vulnerability is often seen as weakness, but it's actually a profound strength. We discuss Brené Brown's research on vulnerability, share personal stories of moments when being vulnerable led to connection and growth, and explore how to create safe spaces for authentic expression.",
  },
  {
    id: "4",
    title: "Redefining Success",
    description: "Moving beyond societal expectations to discover what truly matters.",
    date: "December 25, 2025",
    duration: "50 min",
    episodeLink: "[EPISODE_4_LINK]",
    fullDescription:
      "What does success really mean? In this episode, we challenge conventional definitions of success and explore how to create a life that aligns with your values rather than external expectations. We discuss the pressure to achieve, the fear of failure, and the courage it takes to forge your own path.",
  },
]

// Platform data
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

// Reviews data
const reviews: Review[] = [
  {
    id: "1",
    reviewerName: "[REVIEWER_1_NAME]",
    reviewQuote: "[REVIEW_1_QUOTE - Replace with an authentic testimonial about how the podcast has impacted this listener's life, what they appreciate most about the show, or how it has helped them.]",
    starRating: 5,
    platform: "Spotify",
  },
  {
    id: "2",
    reviewerName: "[REVIEWER_2_NAME]",
    reviewQuote: "[REVIEW_2_QUOTE - Replace with an authentic testimonial about how the podcast has impacted this listener's life, what they appreciate most about the show, or how it has helped them.]",
    starRating: 5,
    platform: "Apple Podcasts",
  },
  {
    id: "3",
    reviewerName: "[REVIEWER_3_NAME]",
    reviewQuote: "[REVIEW_3_QUOTE - Replace with an authentic testimonial about how the podcast has impacted this listener's life, what they appreciate most about the show, or how it has helped them.]",
    starRating: 5,
    platform: "Google Podcasts",
  },
  {
    id: "4",
    reviewerName: "[REVIEWER_4_NAME]",
    reviewQuote: "[REVIEW_4_QUOTE - Replace with an authentic testimonial about how the podcast has impacted this listener's life, what they appreciate most about the show, or how it has helped them.]",
    starRating: 4,
    platform: "Spotify",
  },
  {
    id: "5",
    reviewerName: "[REVIEWER_5_NAME]",
    reviewQuote: "[REVIEW_5_QUOTE - Replace with an authentic testimonial about how the podcast has impacted this listener's life, what they appreciate most about the show, or how it has helped them.]",
    starRating: 5,
  },
  {
    id: "6",
    reviewerName: "[REVIEWER_6_NAME]",
    reviewQuote: "[REVIEW_6_QUOTE - Replace with an authentic testimonial about how the podcast has impacted this listener's life, what they appreciate most about the show, or how it has helped them.]",
    starRating: 5,
    platform: "Apple Podcasts",
  },
]

export default function Home() {
  const { scrollYProgress } = useScroll()
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [1, 1, 1, 0.3])
  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.95])

  // Contact form state
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    anonymous: false,
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    await new Promise((resolve) => setTimeout(resolve, 1500))
    setIsSubmitting(false)
    setIsSubmitted(true)
    setTimeout(() => {
      setFormData({ name: "", email: "", message: "", anonymous: false })
      setIsSubmitted(false)
    }, 3000)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleAnonymousToggle = () => {
    setFormData((prev) => ({ ...prev, anonymous: !prev.anonymous }))
  }

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <motion.section 
        id="home"
        style={{ opacity, scale }}
        className="relative overflow-hidden min-h-screen flex items-center"
      >
        <div className="absolute inset-0 -z-10">
          <motion.div
            className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-primary/10"
            animate={{ backgroundPosition: ["0% 0%", "100% 100%"] }}
            transition={{ duration: 20, repeat: Infinity, repeatType: "reverse" }}
          />
        </div>

        <div className="container mx-auto max-w-7xl px-4 py-32 md:py-48">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mx-auto max-w-4xl text-center"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
              className="mb-8 inline-flex items-center justify-center"
            >
              <Headphones className="h-16 w-16 text-primary" />
            </motion.div>

            <h1 className="mb-6 text-5xl font-bold tracking-tight md:text-7xl gradient-title">
              The Safe Room
            </h1>

            <p className="mb-12 text-xl text-muted-foreground md:text-2xl">
              A safe space for honest conversations, thoughtful discussions, and meaningful connections.
            </p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="flex flex-col justify-center gap-4 sm:flex-row"
            >
              <a href="#episodes">
                <Button size="lg" className="group gap-2">
                  View Episodes
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </a>
              <a href="#listen">
                <Button size="lg" variant="outline" className="gap-2">
                  <Headphones className="h-4 w-4" />
                  Listen Now
                </Button>
              </a>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* About Section */}
      <section id="about" className="py-24 bg-muted/20">
        <div className="container mx-auto max-w-7xl px-4">
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.8 }}
            className="mx-auto max-w-4xl text-center"
          >
            <h2 className="mb-8 text-4xl font-bold md:text-5xl gradient-title">Welcome to The Safe Room</h2>
            <p className="mb-6 text-xl leading-relaxed text-muted-foreground">
              A podcast dedicated to creating a judgment-free space where we can explore life's challenges,
              celebrate its joys, and support each other through honest, meaningful dialogue.
            </p>
            <p className="mb-8 text-lg leading-relaxed text-muted-foreground">
              Whether you're seeking comfort, inspiration, or simply a place to feel understood,
              you'll find it here. Every episode is crafted with care, designed to make you feel
              less alone in your journey.
            </p>
          </motion.div>

          <div className="mt-16 grid gap-8 md:grid-cols-3">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: false }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-center"
            >
              <div className="mb-4 text-5xl font-bold text-primary">50+</div>
              <div className="text-xl font-semibold">Episodes</div>
              <div className="mt-2 text-muted-foreground">Hours of thoughtful conversations</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: false }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-center"
            >
              <div className="mb-4 text-5xl font-bold text-primary">10k+</div>
              <div className="text-xl font-semibold">Listeners</div>
              <div className="mt-2 text-muted-foreground">Community members worldwide</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: false }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-center"
            >
              <div className="mb-4 text-5xl font-bold text-primary">Weekly</div>
              <div className="text-xl font-semibold">New Episodes</div>
              <div className="mt-2 text-muted-foreground">Fresh content every week</div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* What We Talk About Section */}
      <section className="py-24">
        <div className="container mx-auto max-w-7xl px-4">
          <motion.div
            initial={{ opacity: 0, rotateX: -90 }}
            whileInView={{ opacity: 1, rotateX: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.8, type: "spring" }}
            className="mb-16 text-center"
          >
            <h2 className="mb-6 text-4xl font-bold gradient-title">What We Talk About</h2>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
              Real conversations about the things that matter most
            </p>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-3">
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <Card className="h-full border-2 transition-all hover:border-primary/50 hover:shadow-lg">
                <CardContent className="pt-6">
                  <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                    <Heart className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="mb-3 text-2xl font-semibold">Mental Wellness</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Exploring anxiety, stress, self-care, and finding balance in an overwhelming world.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Card className="h-full border-2 transition-all hover:border-primary/50 hover:shadow-lg">
                <CardContent className="pt-6">
                  <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                    <Users className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="mb-3 text-2xl font-semibold">Relationships</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Navigating connections, boundaries, communication, and building meaningful bonds.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <Card className="h-full border-2 transition-all hover:border-primary/50 hover:shadow-lg">
                <CardContent className="pt-6">
                  <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                    <MessageCircle className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="mb-3 text-2xl font-semibold">Personal Growth</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Self-discovery, overcoming challenges, and becoming the person you want to be.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Episodes Section */}
      <section id="episodes" className="py-32 bg-muted/20">
        <div className="container mx-auto max-w-7xl px-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.5, filter: "blur(10px)" }}
            whileInView={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
            viewport={{ once: false }}
            transition={{ duration: 0.7 }}
            className="mb-16 text-center"
          >
            <h2 className="mb-6 text-4xl font-bold md:text-5xl gradient-title">All Episodes</h2>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
              Explore our collection of thoughtful conversations. Each episode is designed
              to provide insight, comfort, and inspiration.
            </p>
          </motion.div>

          <div className="grid gap-12 md:grid-cols-2">
            {episodes.map((episode, index) => (
              <motion.div
                key={episode.id}
                initial={{ opacity: 0, x: index % 2 === 0 ? -80 : 80, rotate: index % 2 === 0 ? -5 : 5 }}
                whileInView={{ opacity: 1, x: 0, rotate: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 0.6, delay: index * 0.15, type: "spring", bounce: 0.4 }}
              >
                <EpisodeCard episode={episode} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Founders Section */}
      <section id="founders" className="py-24">
        <div className="container mx-auto max-w-7xl px-4">
          <motion.div
            initial={{ opacity: 0, y: -50, scale: 0.8 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: false }}
            transition={{ duration: 0.9, type: "spring", stiffness: 100 }}
            className="mb-16 text-center"
          >
            <h2 className="mb-4 text-4xl font-bold md:text-5xl gradient-title">Meet the Founder</h2>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
              The voices behind The Safe Room, sharing their journey and passion for creating meaningful conversations.
            </p>
          </motion.div>

          <div className="mx-auto flex max-w-md justify-center">
            {/* Founder 1 */}
            <motion.div
              initial={{ opacity: 0, rotateY: -90, x: -100 }}
              whileInView={{ opacity: 1, rotateY: 0, x: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="w-full"
            >
              <Card className="h-full overflow-hidden">
                <div className="aspect-square w-full overflow-hidden bg-muted">
                  <img
                    src="/images/founder-1.jpg"
                    alt="[FOUNDER 1 NAME]"
                    className="h-full w-full object-cover"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-2xl">[FOUNDER 1 NAME]</CardTitle>
                  <CardDescription className="text-base">
                    From [FOUNDER 1 LOCATION]
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    [FOUNDER 1 BACKSTORY - Replace this with their story, what inspired them to create The Safe Room, their background, passions, and what they bring to the podcast.]
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Listen Section */}
      <section id="listen" className="py-24">
        <div className="container mx-auto max-w-7xl px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: false }}
            transition={{ duration: 0.8 }}
            className="mb-16 text-center mx-auto"
          >
            <h2 className="mb-4 text-4xl font-bold md:text-5xl gradient-title">Listen to The Safe Room</h2>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
              Choose your preferred podcast platform and start listening.
              New episodes release every week.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: false }}
            transition={{ duration: 0.6, delay: 0.1, type: "spring", stiffness: 200 }}
            className="mb-16"
          >
            <div className="mx-auto grid max-w-4xl gap-6 md:grid-cols-3">
              {platforms.map((platform, index) => (
                <motion.div
                  key={platform.name}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false }}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                >
                  <PlatformButton
                    name={platform.name}
                    icon={platform.icon}
                    url={platform.url}
                    color={platform.color}
                  />
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mx-auto max-w-3xl"
          >
            <div className="rounded-lg bg-muted/50 p-8">
              <h3 className="mb-4 text-2xl font-bold">Can't Find Your Platform?</h3>
              <p className="mb-4 text-muted-foreground">
                We're working on expanding to more platforms. In the meantime, you can listen to
                all our episodes directly on our website by visiting the Episodes section above.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Reviews Section */}
      <PodcastReviews reviews={reviews} />

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-muted/20">
        <div className="container mx-auto max-w-7xl px-4">
          <motion.div
            initial={{ opacity: 0, y: 80, rotateX: 45 }}
            whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.8 }}
            className="mb-16 text-center"
          >
            <h2 className="mb-4 text-4xl font-bold md:text-5xl gradient-title">Get in Touch</h2>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
              We'd love to hear from you. Share your thoughts, suggest a topic,
              or just say hello.
            </p>
          </motion.div>

          <div className="mx-auto grid max-w-5xl gap-8 md:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, x: -150, scale: 0.9 }}
              whileInView={{ opacity: 1, x: 0, scale: 1 }}
              viewport={{ once: false }}
              transition={{ duration: 0.7, delay: 0.1 }}
            >
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <MessageCircle className="h-5 w-5" />
                    Send Us a Message
                  </CardTitle>
                  <CardDescription>
                    Fill out the form below and we'll get back to you as soon as possible.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  {!isSubmitted ? (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="space-y-2">
                        <Label htmlFor="name">
                          Name {formData.anonymous && "(Optional)"}
                        </Label>
                        <Input
                          id="name"
                          name="name"
                          type="text"
                          placeholder="Your name"
                          value={formData.name}
                          onChange={handleChange}
                          required={!formData.anonymous}
                          disabled={isSubmitting}
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="email">
                          Email {formData.anonymous && "(Optional)"}
                        </Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          placeholder="your@email.com"
                          value={formData.email}
                          onChange={handleChange}
                          required={!formData.anonymous}
                          disabled={isSubmitting}
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="message">Message</Label>
                        <Textarea
                          id="message"
                          name="message"
                          placeholder="Share your thoughts, topic suggestions, or questions..."
                          rows={6}
                          value={formData.message}
                          onChange={handleChange}
                          required
                          disabled={isSubmitting}
                        />
                      </div>

                      <div className="flex items-center space-x-2">
                        <input
                          type="checkbox"
                          id="anonymous"
                          checked={formData.anonymous}
                          onChange={handleAnonymousToggle}
                          disabled={isSubmitting}
                          className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-2 focus:ring-primary focus:ring-offset-2"
                        />
                        <Label htmlFor="anonymous" className="cursor-pointer font-normal">
                          Submit anonymously (name and email optional)
                        </Label>
                      </div>

                      <Button type="submit" className="w-full gap-2" disabled={isSubmitting}>
                        {isSubmitting ? (
                          <>Sending...</>
                        ) : (
                          <>
                            <Send className="h-4 w-4" />
                            Send Message
                          </>
                        )}
                      </Button>
                    </form>
                  ) : (
                    <div className="flex flex-col items-center justify-center py-12 text-center">
                      <CheckCircle2 className="mb-4 h-16 w-16 text-green-500" />
                      <h3 className="mb-2 text-xl font-semibold">Message Sent!</h3>
                      <p className="text-muted-foreground">
                        Thank you for reaching out. We'll get back to you soon.
                      </p>
                    </div>
                  )}
                </CardContent>
              </Card>
            </motion.div>

            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, rotate: -10, y: 30 }}
                whileInView={{ opacity: 1, rotate: 0, y: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-xl">
                      <Mail className="h-5 w-5" />
                      Topic Suggestions
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Have an idea for an episode? We're always looking for meaningful
                      topics to explore. Share your suggestions and help shape the
                      conversation.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.7, rotate: 10 }}
                whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 0.6, delay: 0.35 }}
              >
                <Card>
                  <CardHeader>
                    <CardTitle className="text-xl">Your Privacy Matters</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      We respect your privacy. Your contact information will never be
                      shared, and you have the option to submit anonymously if you prefer.
                      All submissions are treated with confidentiality.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 60, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: false }}
                transition={{ duration: 0.6, delay: 0.5, type: "spring" }}
              >
                <Card className="bg-muted/50">
                  <CardHeader>
                    <CardTitle className="text-xl">Response Time</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      We typically respond within 48 hours. While we read every message,
                      please understand that we may not be able to reply to all submissions
                      individually.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
