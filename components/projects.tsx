"use client"

import { useState } from "react"
import { ExternalLink, Github, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"

export default function Projects() {
  const [showAllProjects, setShowAllProjects] = useState(false)

  const projects = [
    {
      title: "Portfolio Website",
      description:
        "A responsive portfolio website template for developers and designers to showcase their work.",
      image: "/project/Portfolio.png",
      tags: ["Next.js", "Shadcn", "Tailwind CSS",],
      demoLink: "https://gyaneswar.me",
      codeLink: "#",
    },
    {
      title: "RapidRoom",
      description: "A drag-and-drop task management application with user authentication and real-time updates.",
      image: "/project/RapidRoom.png",
      tags: ["React", "Express", "Tailwind CSS", "razor pay"],
      demoLink: "https://rapidroom.tech/",
      codeLink: "#",
    },
    {
      title: "Portfolio Website",
      description: "A responsive portfolio website template for developers and designers to showcase their work.",
      image: "/placeholder.svg?height=400&width=600",
      tags: ["Next.js", "Tailwind CSS", "Framer Motion"],
      demoLink: "#",
      codeLink: "#",
    },
    {
      title: "Weather Dashboard",
      description: "Real-time weather application with location-based forecasts and interactive maps.",
      image: "/placeholder.svg?height=400&width=600",
      tags: ["React", "OpenWeather API", "Leaflet", "Chart.js"],
      demoLink: "#",
      codeLink: "#",
    },
    {
      title: "Social Media Dashboard",
      description: "Analytics dashboard for social media accounts with data visualization and reporting features.",
      image: "/placeholder.svg?height=400&width=600",
      tags: ["Next.js", "D3.js", "OAuth", "Prisma"],
      demoLink: "#",
      codeLink: "#",
    },
    {
      title: "Recipe Finder App",
      description:
        "Mobile-first application for finding recipes based on available ingredients and dietary preferences.",
      image: "/placeholder.svg?height=400&width=600",
      tags: ["React", "Spoonacular API", "PWA", "IndexedDB"],
      demoLink: "#",
      codeLink: "#",
    },
  ]

  // Display only the first 3 projects initially
  const displayedProjects = showAllProjects ? projects : projects.slice(0, 3)

  return (
    <section id="projects" className="py-20 px-4 md:px-6 bg-muted/50">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          My <span className="text-primary">Projects</span>
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayedProjects.map((project, index) => (
            <Card key={index} className="overflow-hidden flex flex-col h-full">
              <div className="relative h-48 w-full">
                <Image src={project.image || "/placeholder.svg"} alt={project.title} fill className="object-cover" />
              </div>
              <CardHeader>
                <CardTitle>{project.title}</CardTitle>
                <CardDescription>{project.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex flex-wrap gap-2">
                {project.tags.map((tag, tagIndex) => (
                  <Badge key={tagIndex} variant="secondary">
                    {tag}
                  </Badge>
                ))}
              </CardContent>
              <CardFooter className="mt-auto">
                <div className="flex gap-4 w-full">
                  <Button asChild className="flex-1">
                    <a href={project.demoLink} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Demo
                    </a>
                  </Button>
                  <Button variant="outline" asChild className="flex-1">
                    <a href={project.codeLink} target="_blank" rel="noopener noreferrer">
                      <Github className="mr-2 h-4 w-4" />
                      Code
                    </a>
                  </Button>
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="flex justify-center mt-12">
          <Button onClick={() => setShowAllProjects(true)} className="px-8" variant="outline" size="lg">
            Load More Projects
          </Button>
        </div>

        <Dialog open={showAllProjects} onOpenChange={setShowAllProjects}>
          <DialogContent className="max-w-6xl max-h-[90vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle className="text-2xl font-bold flex items-center justify-between">
                <span>All Projects</span>
                <Button variant="ghost" size="icon" onClick={() => setShowAllProjects(false)}>
                  <X className="h-4 w-4" />
                </Button>
              </DialogTitle>
              <DialogDescription>A comprehensive collection of my development projects</DialogDescription>
            </DialogHeader>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
              {projects.map((project, index) => (
                <Card key={index} className="overflow-hidden flex flex-col h-full">
                  <div className="relative h-40 w-full">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <CardHeader className="py-4">
                    <CardTitle className="text-lg">{project.title}</CardTitle>
                    <CardDescription className="text-sm">{project.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="py-2 flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <Badge key={tagIndex} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </CardContent>
                  <CardFooter className="mt-auto py-4">
                    <div className="flex gap-4 w-full">
                      <Button asChild size="sm" className="flex-1">
                        <a href={project.demoLink} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="mr-2 h-3 w-3" />
                          Demo
                        </a>
                      </Button>
                      <Button variant="outline" asChild size="sm" className="flex-1">
                        <a href={project.codeLink} target="_blank" rel="noopener noreferrer">
                          <Github className="mr-2 h-3 w-3" />
                          Code
                        </a>
                      </Button>
                    </div>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </section>
  )
}
