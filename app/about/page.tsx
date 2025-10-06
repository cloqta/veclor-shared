import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const team = [
  {
    name: "Sarah Chen",
    role: "CEO & Co-founder",
    image: "/placeholder.svg?height=300&width=300",
  },
  {
    name: "Michael Rodriguez",
    role: "CTO & Co-founder",
    image: "/placeholder.svg?height=300&width=300",
  },
  {
    name: "Emily Watson",
    role: "Head of Product",
    image: "/placeholder.svg?height=300&width=300",
  },
  {
    name: "David Kim",
    role: "Head of Engineering",
    image: "/placeholder.svg?height=300&width=300",
  },
]

const values = [
  {
    title: "Innovation First",
    description: "We push the boundaries of what's possible with AI and data infrastructure.",
  },
  {
    title: "Customer Success",
    description: "Your success is our success. We're committed to helping you achieve your goals.",
  },
  {
    title: "Transparency",
    description: "We believe in open communication and honest relationships with our customers.",
  },
  {
    title: "Excellence",
    description: "We strive for excellence in everything we do, from product to support.",
  },
]

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <Navbar />

      <section className="pt-32 pb-20 px-6">
        <div className="max-w-6xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-20">
            <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-balance mb-6">About Veclor</h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto text-pretty leading-relaxed">
              We're on a mission to make every business AI-ready by transforming how companies prepare and manage their
              data for artificial intelligence.
            </p>
          </div>

          {/* Story Section */}
          <div className="mb-20">
            <div className="bg-card rounded-3xl p-12 shadow-sm border border-border/50">
              <h2 className="text-3xl font-bold mb-6 text-[#2412dd] ml-0 text-center">Our Story</h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Veclor was founded in 2024 by a team of AI engineers and data scientists who experienced firsthand the
                  challenges of preparing enterprise data for AI applications. We saw companies struggling with
                  fragmented data sources, incompatible formats, and the technical complexity of creating AI-ready
                  embeddings.
                </p>
                <p>
                  We built Veclor to solve this problem once and for all. Our platform automatically transforms any data
                  source into structured, AI-ready vectors that can power intelligent applications. No code required, no
                  data migration headaches, just seamless integration with your existing tools.
                </p>
                <p>
                  Today, we're helping businesses of all sizes unlock the power of AI by making their data truly
                  intelligent and accessible.
                </p>
              </div>
            </div>
          </div>

          {/* Values Section */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold text-center mb-12">Our Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {values.map((value, idx) => (
                <div key={idx} className="bg-card rounded-3xl p-8 shadow-sm border border-border/50">
                  <h3 className="text-xl font-semibold mb-3 text-[#2412dd]">{value.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{value.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Team Section */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold text-center mb-12">Meet Our Team</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {team.map((member, idx) => (
                <div key={idx} className="text-center">
                  <div className="bg-accent/30 rounded-3xl overflow-hidden mb-4 aspect-square">
                    <img
                      src={member.image || "/placeholder.svg"}
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-lg font-semibold mb-1">{member.name}</h3>
                  <p className="text-sm text-muted-foreground">{member.role}</p>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center bg-accent/30 rounded-3xl p-12">
            <h2 className="text-3xl font-bold mb-4">Join Us on Our Journey</h2>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto leading-relaxed">
              Be part of the AI revolution. Join our waitlist and get early access to Veclor.
            </p>
            <Button asChild className="rounded-full bg-foreground text-background hover:bg-foreground/90">
              <Link href="/#waitlist">Join the Waitlist</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
