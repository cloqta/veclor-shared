"use client"

import { CheckCircle2 } from "lucide-react"

const objections = [
  {
    objection: "We'll just build this in-house. Our engineers are smart.",
    response:
      "Absolutely — they're probably brilliant. But building and maintaining a high-quality vectorization pipeline is a massive time sink. Data formats, retrieval logic, model updates — they evolve constantly. Veclor lets your team stay focused on building what makes your business unique, while we obsess over the boring (but critical) infrastructure.",
  },
  {
    objection: "Isn't vector generation just an API call?",
    response:
      "Technically? Yes. But that's like saying a car is just an engine. Real-world applications — semantic search, AI assistants, RAG systems — demand far more: chunking strategy, deduplication, context optimization, metadata enrichment, and more. Skip those, and you'll end up with weak retrieval and a chatbot that frustrates your users.",
  },
  {
    objection: "So how do you do it better?",
    response:
      "This is all we do. Veclor doesn't just chunk and vectorize — we analyze your content structure and tailor the pipeline accordingly. Whether it's hierarchical, hybrid, or graph-based like GraphRAG, we choose what fits your data best. Then we automate the rest: pruning, filtering, syncing, and optimizing — so your results are always sharp.",
  },
  {
    objection: "Why not just fine-tune a model on our data instead?",
    response:
      "Fine-tuning sounds appealing — until you hit the cost, compute, and rigidity. Most business knowledge changes frequently. Veclor lets you keep your AI in sync with your data in real time without retraining or rebuilding.",
  },
  {
    objection: "Can't my AI platform do this already?",
    response:
      "Most platforms assume your data is already structured and vectorized. That's where Veclor comes in. We're the missing link between raw data and intelligent AI — giving your models context-rich, optimized knowledge to work with.",
  },
]

export function Objections() {
  return (
    <section className="py-24 px-6 bg-background">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-balance text-primary">
            Objections We Hear (And Why They Don't Hold Up)
          </h2>
        </div>

        <div className="space-y-8">
          {objections.map((item, index) => (
            <div
              key={index}
              className="border border-border rounded-lg p-6 bg-card hover:border-primary/50 transition-colors"
            >
              <div className="flex gap-4">
                <div className="flex-shrink-0 mt-1">
                  <CheckCircle2 className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-foreground">"{item.objection}"</h3>
                  <p className="text-muted-foreground leading-relaxed">{item.response}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
