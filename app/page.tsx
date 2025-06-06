'use client'
import Hero from "@/components/hero"
import About from "@/components/about"
import Skills from "@/components/skills"
import Projects from "@/components/projects"
import Contact from "@/components/contact"
import Footer from "@/components/footer"
import Certificates from "@/components/certificates"
import Timeline from "@/components/timeline"
import Navbar from "@/components/navbar"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar/>
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Certificates />
      <Timeline />
      <Contact />
      <Footer />
    </main>
  )
}
