"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card"
import { Button } from "./ui/button"
import { ChevronDown, ChevronUp, Calendar, Clock, Play } from "lucide-react"

export interface Episode {
  id: string
  title: string
  description: string
  date: string
  duration: string
  episodeLink: string
  fullDescription?: string
}

interface EpisodeCardProps {
  episode: Episode
}

export function EpisodeCard({ episode }: EpisodeCardProps) {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Card className="overflow-hidden transition-shadow hover:shadow-lg">
        <CardHeader>
          <CardTitle className="text-xl">{episode.title}</CardTitle>
          <CardDescription className="flex items-center gap-4 text-sm">
            <span className="flex items-center gap-1">
              <Calendar className="h-3 w-3" />
              {episode.date}
            </span>
            <span className="flex items-center gap-1">
              <Clock className="h-3 w-3" />
              {episode.duration}
            </span>
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-sm text-muted-foreground">{episode.description}</p>

          <a href={episode.episodeLink} target="_blank" rel="noopener noreferrer" className="block">
            <Button className="w-full gap-2">
              <Play className="h-4 w-4" />
              Listen to Episode
            </Button>
          </a>

          {episode.fullDescription && (
            <div className="space-y-2">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsExpanded(!isExpanded)}
                className="w-full justify-between"
                aria-expanded={isExpanded}
              >
                <span>{isExpanded ? "Show Less" : "Show More"}</span>
                {isExpanded ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
              </Button>

              <AnimatePresence>
                {isExpanded && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="pt-2 text-sm text-muted-foreground">
                      {episode.fullDescription}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          )}
        </CardContent>
      </Card>
    </motion.div>
  )
}
