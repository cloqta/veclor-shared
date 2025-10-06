"use client"

const features = [
  {
    image: "/placeholder.svg?height=240&width=400",
    title: "Search by Meaning",
    description:
      "Find answers based on meaning, not exact words, even if you don't know the right terms.",
  },
  {
    image: "/placeholder.svg?height=240&width=400",
    title: "Connect Any Data",
    description:
      "Text, PDFs, spreadsheets, images, audio, and video all in one place, ready for AI.",
  },
  {
    image: "/placeholder.svg?height=240&width=400",
    title: "Power Smarter AI",
    description:
      "Enable semantic search, AI assistants, recommendations, and RAG pipelines instantly.",
  },
]

export function WhyVector() {
  return (
    <section className="py-20 px-6 bg-accent/30 relative">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-primary">
          Why Vector?
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="
                rounded-3xl overflow-hidden 
                border border-white/5 
                bg-[color-mix(in_srgb,theme(colors.accent)_90%,white_10%)]
                shadow-sm hover:shadow-md 
                transition-all duration-300
                flex flex-col h-full
              "
            >
              {/* Image */}
              <div className="w-full h-56 overflow-hidden flex-shrink-0">
                <img
                  src={feature.image || '/placeholder.svg'}
                  alt={feature.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-semibold mb-2 text-primary">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
