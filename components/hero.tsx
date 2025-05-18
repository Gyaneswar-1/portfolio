"use client"

import { useState, useEffect } from "react"
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export default function Hero() {
  const [typedText, setTypedText] = useState("")
  const fullText = "Web Developer"
  const [index, setIndex] = useState(0)

  useEffect(() => {
    if (index < fullText.length) {
      const timeout = setTimeout(() => {
        setTypedText((prev) => prev + fullText[index])
        setIndex(index + 1)
      }, 100)

      return () => clearTimeout(timeout)
    }
  }, [index])

  const scrollToContact = () => {
    const contactSection = document.getElementById("contact")
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section className="relative h-screen flex flex-col items-center justify-center text-center px-4 md:px-6">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/20 via-background to-background"></div>
      <h1 className="text-4xl md:text-6xl font-bold tracking-tighter mb-4">
        Hi, I'm <span className="text-primary">Gyaneswar Rout</span>
      </h1>
      <h2 className="text-2xl md:text-4xl font-medium mb-6">
        <span
          className={cn(
            "text-primary",
            typedText.length === fullText.length ? "border-r-2 border-primary animate-pulse" : "",
          )}
        >
          {typedText}
        </span>
        <span
          className={cn(
            "border-r-2 border-primary animate-blink",
            typedText.length === fullText.length ? "hidden" : "",
          )}
        >
          |
        </span>
      </h2>
      <p className="text-muted-foreground max-w-md mb-8">
        I build responsive, accessible, and performant web applications with modern technologies.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 mb-12">
        <Button onClick={scrollToContact}>Contact Me</Button>
        <Button variant="outline">Download CV</Button>
      </div>
      <div className="flex gap-4">
        <Button variant="ghost" size="icon" className="rounded-full">
          <Github className="h-5 w-5" />
          <span className="sr-only">GitHub</span>
        </Button>
        <Button variant="ghost" size="icon" className="rounded-full">
          <Linkedin className="h-5 w-5" />
          <span className="sr-only">LinkedIn</span>
        </Button>
        <Button variant="ghost" size="icon" className="rounded-full">
          <Mail className="h-5 w-5" />
          <span className="sr-only">Email</span>
        </Button>
      </div>
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <ArrowDown className="h-6 w-6 text-muted-foreground" />
      </div>
    </section>
  )
}
