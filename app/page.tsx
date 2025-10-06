import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import LogoMarquee from "@/components/logo-marquee"
import { HowItWorks } from "@/components/how-it-works"
import { WhyVector } from "@/components/why-vector"
import { Objections } from "@/components/objections"
import { FAQs } from "@/components/faqs"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <HeroSection />
      <LogoMarquee />
      <HowItWorks />
      <WhyVector />
      <Objections />
      <FAQs />
      <Footer />
    </main>
  )
}
