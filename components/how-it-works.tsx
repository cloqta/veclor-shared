"use client"

const steps = [
  {
    image:
      "https://res.cloudinary.com/dkbk3kjc7/image/upload/v1759558441/20251004_1136_Floating_Files_Database_simple_compose_01k6px7tpfetybeqseb3f3q8z8_dbspwf.png?height=240&width=400",
    title: "Connect Your Data",
    description:
      "Upload your files or link your data sources and Veclor automatically syncs everything for you.",
  },
  {
    image:
      "https://res.cloudinary.com/dkbk3kjc7/image/upload/v1759558605/20251004_1143_Vector_Embedding_Icon_simple_compose_01k6pxmcy3f50bkykg7ep2t4qa_kfgwaq.png?height=240&width=400",
    title: "Generate Vector Embeddings",
    description:
      "Veclor transforms your synced data into clean, organized embeddings, using models from OpenAI and Cohere, ready for AI.",
  },
  {
    image: "/placeholder.svg?height=240&width=400",
    title: "Store Anywhere",
    description:
      "Push embeddings to your preferred vector database or use Veclor’s built-in DB for fast, scalable AI.",
  },
  {
    image: "/placeholder.svg?height=240&width=400",
    title: "Integrate AI Instantly",
    description:
      "Connect your AI agents or prebuilt models and start generating insights immediately.",
  },
]

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-primary">
          How does it work?
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <div
              key={index}
              className="
                rounded-3xl overflow-hidden border border-white/5 
                bg-[color-mix(in_srgb,theme(colors.background)_90%,white_10%)]
                shadow-sm hover:shadow-md 
                transition-all duration-300
                flex flex-col h-full
              "
            >
              {/* Image */}
              <div className="w-full h-56 overflow-hidden flex-shrink-0">
                <img
                  src={step.image || '/placeholder.svg'}
                  alt={step.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-semibold mb-2 text-primary">
                  {step.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
