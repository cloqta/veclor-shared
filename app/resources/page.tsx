import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const resources = [
  {
    category: "Documentation",
    items: [
      {
        title: "Getting Started Guide",
        description: "Learn how to set up Veclor and connect your first data source in minutes.",
        link: "#",
      },
      {
        title: "API Reference",
        description: "Complete API documentation for integrating Veclor into your applications.",
        link: "#",
      },
      {
        title: "Best Practices",
        description: "Tips and strategies for optimizing your AI-ready data pipelines.",
        link: "#",
      },
    ],
  },
  {
    category: "Tutorials",
    items: [
      {
        title: "Building Your First AI Agent",
        description: "Step-by-step tutorial on creating an AI agent with Veclor embeddings.",
        link: "#",
      },
      {
        title: "Data Source Integration",
        description: "Learn how to connect multiple data sources and manage them effectively.",
        link: "#",
      },
      {
        title: "Vector Database Setup",
        description: "Configure and optimize your vector database for maximum performance.",
        link: "#",
      },
    ],
  },
  {
    category: "Case Studies",
    items: [
      {
        title: "Enterprise AI Transformation",
        description: "How Fortune 500 companies use Veclor to modernize their data infrastructure.",
        link: "#",
      },
      {
        title: "Startup Success Stories",
        description: "Real-world examples of startups scaling AI applications with Veclor.",
        link: "#",
      },
      {
        title: "Industry Solutions",
        description: "Discover how different industries leverage Veclor for AI innovation.",
        link: "#",
      },
    ],
  },
]

export default function ResourcesPage() {
  return (
    <main className="min-h-screen">
      <Navbar />

      <section className="pt-32 pb-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-balance mb-6">Resources</h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto text-pretty leading-relaxed">
              Everything you need to get started with Veclor and build AI-ready data pipelines.
            </p>
          </div>

          <div className="space-y-16">
            {resources.map((section, idx) => (
              <div key={idx}>
                <h2 className="text-3xl font-bold mb-8 text-[#2412dd]">{section.category}</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {section.items.map((item, itemIdx) => (
                    <div
                      key={itemIdx}
                      className="bg-card rounded-3xl p-8 shadow-sm border border-border/50 hover:shadow-md transition-all hover:border-[#2412dd]/30"
                    >
                      <h3 className="text-xl font-semibold mb-3 text-balance">{item.title}</h3>
                      <p className="text-muted-foreground leading-relaxed text-pretty mb-6">{item.description}</p>
                      <Button
                        asChild
                        variant="outline"
                        className="rounded-full border-[#2412dd] text-[#2412dd] hover:bg-[#2412dd] hover:text-white bg-transparent"
                      >
                        <Link href={item.link}>Learn More</Link>
                      </Button>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-20 text-center bg-accent/30 rounded-3xl p-12">
            <h2 className="text-3xl font-bold mb-4">Need Help?</h2>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto leading-relaxed">
              Our team is here to support you. Join our community or reach out directly.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild className="rounded-full bg-foreground text-background hover:bg-foreground/90">
                <Link href="/#waitlist">Join Community</Link>
              </Button>
              <Button asChild variant="outline" className="rounded-full bg-transparent">
                <Link href="/about">Contact Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
