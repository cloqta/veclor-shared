"use client"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const faqs = [
  {
    question: "What exactly does Veclor do?",
    answer:
      "Veclor connects to your business tools (Notion, Drive, Slack, Salesforce, etc.), extracts and cleans the data, converts it into optimized vector embeddings, and helps you plug that into AI tools like semantic search or assistants — instantly.",
  },
  {
    question: "Do I need coding experience to use Veclor?",
    answer: "Not at all. Veclor is completely no-code. Just connect your data sources and you're good to go.",
  },
  {
    question: "What formats does Veclor support?",
    answer:
      "Text, PDFs, Excel sheets, images, audio transcripts, meeting recordings, code — if your business runs on it, we likely support it.",
  },
  {
    question: "Which vector models and databases do you support?",
    answer:
      "We support models like OpenAI, Cohere, and more. You can use Veclor's built-in vector DB or push embeddings to Pinecone, Weaviate, Chroma, Qdrant, or others.",
  },
  {
    question: "How often does Veclor sync data?",
    answer:
      "You control the sync schedule — real-time, daily, or manual. We keep your AI knowledge base up-to-date without manual reuploads.",
  },
  {
    question: "Is my data secure?",
    answer:
      "Yes. Security is a core focus. Your data is encrypted at rest and in transit. We never use your data to train third-party models.",
  },
  {
    question: "Can I use Veclor with internal tools or custom databases?",
    answer: "Absolutely. We offer webhooks, APIs, and custom integrations to connect your internal stack.",
  },
  {
    question: "Does Veclor work for teams or just individuals?",
    answer: "Veclor is built for teams — roles, permissions, audit logs, and collaboration features included.",
  },
  {
    question: 'What\'s the difference between Veclor and other "AI data platforms"?',
    answer:
      "Others assume your data is ready. We know it's not. Veclor is laser-focused on preparing messy, unstructured business data and making it usable for production AI systems — no manual cleaning, no guesswork.",
  },
  {
    question: "What use-cases does Veclor enable?",
    answer:
      "Semantic search, AI assistants, customer support bots, personalized recommendations, document Q&A, and more. If it needs understanding of business data, Veclor supercharges it.",
  },
]

export function FAQs() {
  return (
    <section className="py-24 px-6 bg-muted/30">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-balance text-primary">Frequently Asked Questions</h2>
        </div>

        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-left text-lg font-semibold">{faq.question}</AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed">{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
