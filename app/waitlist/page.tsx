"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import Link from "next/link"
import { CheckCircle2, ArrowRight, Zap, Shield, Users } from "lucide-react"
import clsx from "clsx"

export default function WaitlistPage() {
  const [formData, setFormData] = useState({
    name: "",
    industry: "",
    role: "",
    email: "",
    companySize: "",
  })
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [invalidFields, setInvalidFields] = useState<string[]>([])

  // Helper: Check if form is valid
  const isFormValid = () => {
    const requiredFields = ["name", "email", "industry", "role", "companySize"]
    return requiredFields.every((field) => {
      if (field === "email") return isEmailValid(formData.email)
      return !!formData[field as keyof typeof formData]
    })
  }

  // Email validation
  const isEmailValid = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
  }

  // Handle field changes
  const handleChange = (field: string, value: string) => {
    setFormData({ ...formData, [field]: value })

    // Remove from invalidFields if corrected
    if (invalidFields.includes(field) && value) {
      if (field === "email") {
        if (isEmailValid(value)) setInvalidFields(invalidFields.filter((f) => f !== "email"))
      } else {
        setInvalidFields(invalidFields.filter((f) => f !== field))
      }
    }
  }

  const handleSubmit = async () => {
    const requiredFields = ["name", "email", "industry", "role", "companySize"]
    const missingFields = requiredFields.filter((field) => {
      if (field === "email") return !isEmailValid(formData.email)
      return !formData[field as keyof typeof formData]
    })

    if (missingFields.length > 0) {
      setInvalidFields(missingFields)
      return
    }

    const checkbox = document.getElementById("terms") as HTMLInputElement
    if (!checkbox?.checked) {
      alert("Please agree to the Terms & Privacy")
      return
    }

    setInvalidFields([])
    setIsLoading(true)
    await new Promise((resolve) => setTimeout(resolve, 1500))
    setIsLoading(false)
    setIsSubmitted(true)
  }

  if (isSubmitted) {
    return (
      <div className="min-h-screen flex items-center justify-center px-6 py-20 bg-gradient-to-br from-background via-background to-muted/20">
        <div className="max-w-md w-full text-center space-y-6 animate-in fade-in-0 slide-in-from-bottom-4 duration-500">
          <div className="flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 bg-green-500/20 rounded-full blur-xl animate-pulse" />
              <CheckCircle2 className="w-16 h-16 text-green-500 relative animate-in zoom-in-50 duration-500" />
            </div>
          </div>
          <h1 className="text-3xl font-bold animate-in fade-in-0 slide-in-from-bottom-2 duration-500 delay-100">
            You're on the list!
          </h1>
          <p className="text-muted-foreground text-lg leading-relaxed animate-in fade-in-0 slide-in-from-bottom-2 duration-500 delay-200">
            We'll notify you via email when your beta access is ready.
          </p>
          <Button
            asChild
            className="rounded-full bg-foreground text-background hover:bg-foreground/90 transition-all hover:scale-105 animate-in fade-in-0 slide-in-from-bottom-2 duration-500 delay-300"
          >
            <Link href="/">Back to Home</Link>
          </Button>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen flex">
      {/* Left Side */}
      <div className="hidden lg:flex lg:w-1/2 bg-gradient-to-br from-foreground via-foreground/95 to-foreground/90 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.1)_0%,transparent_50%)]" />
        <div className="absolute top-20 left-10 w-64 h-64 bg-white/5 rounded-full blur-3xl animate-pulse" />
        <div
          className="absolute bottom-20 right-10 w-96 h-96 bg-white/5 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        />
        <div className="relative z-10 flex flex-col justify-between p-12 text-background">
          <div>
            <Link href="/" className="inline-block group">
              <span className="tracking-tight font-[family-name:var(--font-jersey)] font-normal text-5xl hover:opacity-80 transition-opacity duration-300">
                Veclor
              </span>
            </Link>
            <p className="mt-2 text-background/70 text-sm">Exclusive Beta Access</p>
          </div>
          <div className="space-y-8">
            <h1 className="text-5xl font-bold leading-tight">
              Transform your data
              <br />
              <span className="text-background/80">into actionable AI insights</span>
            </h1>
            <div className="space-y-4">
              {[
                { icon: Zap, text: "Free early access to Veclor Beta" },
                { icon: Shield, text: "Enterprise-grade security for your data" },
                { icon: Users, text: "Test with your team and share feedback" },
              ].map((feature, index) => (
                <div key={index} className="flex items-center gap-3 text-background/80">
                  <div className="p-2 bg-background/10 rounded-lg backdrop-blur-sm hover:bg-background/20 transition-colors">
                    <feature.icon className="w-5 h-5" />
                  </div>
                  <span className="text-sm">{feature.text}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="h-8" />
        </div>
      </div>

      {/* Right Side - Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center px-6 py-20 bg-gradient-to-br from-background via-background to-muted/10">
        <div className="max-w-md w-full">
          {/* Mobile Logo */}
          <div className="lg:hidden text-center mb-8">
            <Link href="/" className="inline-block">
              <span className="tracking-tight font-[family-name:var(--font-jersey)] font-normal text-4xl hover:opacity-80 transition-opacity">
                Veclor
              </span>
            </Link>
          </div>

          {/* Header */}
          <div className="mb-6">
            <h2 className="text-3xl font-bold mb-2">Join the Beta</h2>
            <p className="text-muted-foreground leading-relaxed">
              Free access, test with your team, share feedback, and keep your data secure.
            </p>
          </div>

          {/* Form */}
          <div className="space-y-6">
            {/* Name */}
            <div className="space-y-2">
              <Label htmlFor="name" className="text-sm font-medium">Name</Label>
              <Input
                value={formData.name}
                onChange={(e) => handleChange("name", e.target.value)}
                className={clsx(
                  "h-12 rounded-xl transition-colors hover:border-foreground/50",
                  invalidFields.includes("name") && "border-red-500 animate-shake"
                )}
              />
            </div>

            {/* Email */}
            <div className="space-y-2">
              <Label htmlFor="email" className="text-sm font-medium">Email address</Label>
              <Input
                type="email"
                value={formData.email}
                onChange={(e) => handleChange("email", e.target.value)}
                className={clsx(
                  "h-12 rounded-xl transition-colors hover:border-foreground/50",
                  invalidFields.includes("email") && "border-red-500 animate-shake"
                )}
              />
              {formData.email && !isEmailValid(formData.email) && (
                <p className="text-xs text-red-500 mt-1">Please enter a valid email address</p>
              )}
            </div>

            {/* Industry */}
            <div className="space-y-2">
              <Label htmlFor="industry" className="text-sm font-medium">Industry</Label>
              <Select
                value={formData.industry}
                onValueChange={(value) => handleChange("industry", value)}
              >
                <SelectTrigger
                  className={clsx(
                    "h-12 rounded-xl hover:border-foreground/50 transition-colors",
                    invalidFields.includes("industry") && "border-red-500 animate-shake"
                  )}
                >
                  <SelectValue placeholder="Select your industry" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="technology">Technology</SelectItem>
                  <SelectItem value="finance">Finance</SelectItem>
                  <SelectItem value="healthcare">Healthcare</SelectItem>
                  <SelectItem value="education">Education</SelectItem>
                  <SelectItem value="retail">Retail</SelectItem>
                  <SelectItem value="manufacturing">Manufacturing</SelectItem>
                  <SelectItem value="consulting">Consulting</SelectItem>
                  <SelectItem value="ecommerce">Ecommerce</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Role */}
            <div className="space-y-2">
              <Label htmlFor="role" className="text-sm font-medium">Role</Label>
              <Select
                value={formData.role}
                onValueChange={(value) => handleChange("role", value)}
              >
                <SelectTrigger
                  className={clsx(
                    "h-12 rounded-xl hover:border-foreground/50 transition-colors",
                    invalidFields.includes("role") && "border-red-500 animate-shake"
                  )}
                >
                  <SelectValue placeholder="Select your role" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="founder">Founder / CEO</SelectItem>
                  <SelectItem value="executive">Executive</SelectItem>
                  <SelectItem value="manager">Manager</SelectItem>
                  <SelectItem value="developer">Developer</SelectItem>
                  <SelectItem value="data-scientist">Data Scientist</SelectItem>
                  <SelectItem value="analyst">Analyst</SelectItem>
                  <SelectItem value="consultant">Consultant</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Company Size */}
            <div className="space-y-2">
              <Label htmlFor="companySize" className="text-sm font-medium">Company Size</Label>
              <Select
                value={formData.companySize}
                onValueChange={(value) => handleChange("companySize", value)}
              >
                <SelectTrigger
                  className={clsx(
                    "h-12 rounded-xl hover:border-foreground/50 transition-colors",
                    invalidFields.includes("companySize") && "border-red-500 animate-shake"
                  )}
                >
                  <SelectValue placeholder="Select your company size" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="solo">Solo</SelectItem>
                  <SelectItem value="0-10">0-10</SelectItem>
                  <SelectItem value="11-50">11-50</SelectItem>
                  <SelectItem value="50+">50+</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Terms */}
            <div className="flex items-center space-x-2">
              <input
                type="checkbox"
                id="terms"
                required
                className="rounded border-muted-foreground/30 text-foreground focus:ring-foreground"
              />
              <Label htmlFor="terms" className="text-sm text-muted-foreground">
                I agree to the Terms & Privacy
              </Label>
            </div>

            {/* Submit Button */}
            <Button
              onClick={handleSubmit}
              disabled={isLoading}
              className={clsx(
                "w-full h-12 rounded-full bg-foreground text-background hover:bg-foreground/90 transition-all duration-300 hover:scale-[1.02] hover:shadow-xl group relative overflow-hidden",
                isFormValid() ? "cursor-pointer" : "cursor-not-allowed"
              )}
            >
              <span
                className={clsx(
                  "flex items-center justify-center gap-2 transition-opacity duration-300",
                  isLoading ? "opacity-0" : "opacity-100"
                )}
              >
                Join Waitlist
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </span>
              {isLoading && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-5 h-5 border-2 border-background/30 border-t-background rounded-full animate-spin" />
                </div>
              )}
            </Button>
          </div>

          {/* Back Link */}
          <div className="text-center mt-6">
            <Link
              href="/"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors inline-flex items-center gap-1 group"
            >
              <span className="group-hover:-translate-x-1 transition-transform">←</span>
              Back to home
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
