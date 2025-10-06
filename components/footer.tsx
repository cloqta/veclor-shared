"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"

export function Footer() {
  return (
    <footer className="relative py-24 px-6 bg-[color-mix(in_srgb,theme(colors.accent)_90%,white_10%)] border-t border-white/10">
      <div className="max-w-5xl mx-auto text-center">
        {/* CTA Section */}
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance text-primary">
          Ready to make your data AI-ready?
        </h2>
        <p className="text-muted-foreground text-lg mb-10 max-w-2xl mx-auto leading-relaxed">
          Join the waitlist and be the first to transform your business data into AI-ready knowledge.
        </p>

        <div className="mb-16">
          <Button asChild className="rounded-full h-12 px-8 bg-foreground text-background hover:bg-foreground/90">
            <Link href="/waitlist">Join Waitlist</Link>
          </Button>
        </div>

        {/* Footer Links / Copyright */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-3 text-sm text-muted-foreground">
          <p>
            © 2025 <span className="font-[family-name:var(--font-jersey)]">Veclor</span>. All rights reserved.
          </p>
          <span className="hidden sm:inline text-muted-foreground/40">•</span>
          <div className="flex gap-4">
            <a href="#" className="hover:text-primary transition-colors">
              Privacy
            </a>
            <a href="#" className="hover:text-primary transition-colors">
              Terms
            </a>
            <a href="#" className="hover:text-primary transition-colors">
              Contact
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
