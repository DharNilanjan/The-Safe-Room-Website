import Link from "next/link"
import { Music } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t border-border/40 bg-background">
      <div className="container mx-auto max-w-7xl px-4 py-12">
        <div className="grid gap-8 md:grid-cols-3">
          {/* Brand Section */}
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <Music className="h-6 w-6" />
              <span className="text-lg font-bold">The Safe Room</span>
            </div>
            <p className="text-sm text-muted-foreground">
              A safe space for honest conversations and thoughtful discussions.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h3 className="text-sm font-semibold">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/episodes" className="text-muted-foreground transition-colors hover:text-foreground">
                  Episodes
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-muted-foreground transition-colors hover:text-foreground">
                  About
                </Link>
              </li>
              <li>
                <Link href="/listen" className="text-muted-foreground transition-colors hover:text-foreground">
                  Listen
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-muted-foreground transition-colors hover:text-foreground">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-3">
            <h3 className="text-sm font-semibold">Connect</h3>
            <p className="text-sm text-muted-foreground">
              Have a topic suggestion or feedback? We'd love to hear from you.
            </p>
            <Link
              href="/contact"
              className="inline-block text-sm font-medium text-foreground underline-offset-4 hover:underline"
            >
              Get in Touch
            </Link>
          </div>
        </div>

        <div className="mt-8 border-t border-border/40 pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} The Safe Room. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
