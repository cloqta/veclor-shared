"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"

export function HeroSection() {
  return (
    <section id="hero" className="relative pt-32 pb-20 px-6 overflow-hidden">
      <div className="max-w-5xl mx-auto text-center relative z-10">
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-balance mb-6">
          Your business data is not AI ready. <span className="text-muted-foreground">Neither is your business.</span>
        </h1>

        <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-10 text-pretty leading-relaxed">
          Turn your documents, spreadsheets, recordings into AI ready knowledge base instantly. No code required.
        </p>

        {/* Early Beta Notice */}
        <div className="flex flex-col items-center gap-4">
          <div className="flex items-center gap-2 font-semibold text-green-500">
            {/* Slower pulse */}
            <span className="w-3 h-3 rounded-full bg-green-500 inline-block animate-pulse-slow"></span>
            Early beta is live
          </div>

          <Button
            asChild
            className="rounded-full h-12 px-8 bg-foreground text-background transition-transform transform hover:scale-105 hover:bg-foreground/90"
          >
            <Link href="/waitlist">Join Waitlist</Link>
          </Button>
        </div>
      </div>

      {/* Tailwind Custom Pulse Animation */}
      <style jsx>{`
        @keyframes pulse-slow {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
        }
        .animate-pulse-slow {
          animation: pulse-slow 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
      `}</style>
    </section>
  )
}
