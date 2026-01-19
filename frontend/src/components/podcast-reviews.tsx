"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "./ui/card"
import { Star, Music2, Podcast, Radio } from "lucide-react"

export interface Review {
  id: string
  reviewerName: string
  reviewQuote: string
  starRating: number
  platform?: "Spotify" | "Apple Podcasts" | "Google Podcasts"
}

const platformIcons = {
  "Spotify": Music2,
  "Apple Podcasts": Podcast,
  "Google Podcasts": Radio,
}

interface ReviewCardProps {
  review: Review
}

function ReviewCard({ review }: ReviewCardProps) {
  const PlatformIcon = review.platform ? platformIcons[review.platform] : null

  return (
    <Card className="h-full overflow-hidden border-2 transition-all hover:border-primary/50 hover:shadow-lg">
      <CardContent className="p-6">
        <div className="mb-4 flex items-center gap-1">
          {[...Array(5)].map((_, index) => (
            <Star
              key={index}
              className={`h-5 w-5 ${
                index < review.starRating
                  ? "fill-yellow-400 text-yellow-400"
                  : "text-muted-foreground/30"
              }`}
            />
          ))}
        </div>

        <blockquote className="mb-4 text-lg leading-relaxed text-muted-foreground">
          "{review.reviewQuote}"
        </blockquote>

        <div className="flex items-center justify-between">
          <p className="font-semibold text-foreground">{review.reviewerName}</p>
          {PlatformIcon && (
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <PlatformIcon className="h-4 w-4" />
              <span>{review.platform}</span>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  )
}

interface PodcastReviewsProps {
  reviews: Review[]
}

export function PodcastReviews({ reviews }: PodcastReviewsProps) {
  return (
    <section id="reviews" className="py-24 bg-muted/20">
      <div className="container mx-auto max-w-7xl px-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: false }}
          transition={{ duration: 0.7 }}
          className="mb-16 text-center"
        >
          <h2 className="mb-6 text-4xl font-bold md:text-5xl gradient-title">
            What Our Listeners Say
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Real feedback from our community of thoughtful listeners across the globe.
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {reviews.map((review, index) => (
            <motion.div
              key={review.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <ReviewCard review={review} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
