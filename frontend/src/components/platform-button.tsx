"use client"

import { motion } from "framer-motion"
import { Button } from "./ui/button"
import { LucideIcon } from "lucide-react"

interface PlatformButtonProps {
  name: string
  icon: LucideIcon
  url: string
  color: string
}

export function PlatformButton({ name, icon: Icon, url, color }: PlatformButtonProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.05, y: -5 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: "spring", stiffness: 400, damping: 10 }}
    >
      <a href={url} target="_blank" rel="noopener noreferrer">
        <Button
          variant="outline"
          size="lg"
          className="h-auto w-full flex-col gap-3 p-6 transition-colors"
          style={{ borderColor: color }}
        >
          <Icon className="h-8 w-8" style={{ color }} />
          <span className="text-base font-semibold">{name}</span>
        </Button>
      </a>
    </motion.div>
  )
}
