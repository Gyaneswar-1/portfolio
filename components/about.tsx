import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"

export default function About() {
  return (
    <section id="about" className="py-20 px-4 md:px-6 bg-muted/50">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          About <span className="text-primary">Me</span>
        </h2>
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="flex justify-center">
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-primary/20">
              <Image src="/me.jpg" alt="Profile" fill className="object-cover" />
            </div>
          </div>
          <div>
            <Card>
              <CardContent className="p-6">
                <h3 className="text-2xl font-semibold mb-4">Web Developer & UI/UX Enthusiast</h3>
                <p className="text-muted-foreground mb-4">
                  I'm a passionate web developer with 5 years of experience creating modern web applications. I
                  specialize in React.js, Next.js, and Tailwind CSS to build responsive and user-friendly interfaces.
                </p>
                <p className="text-muted-foreground mb-6">
                  My journey in web development started when I built my first website in college. Since then, I've
                  worked with startups and established companies to bring their ideas to life.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="font-medium">Name:</p>
                    <p className="text-muted-foreground">Gyaneswar Rout</p>
                  </div>
                  <div>
                    <p className="font-medium">Email:</p>
                    <p className="text-muted-foreground break-words">gyaneswarrout12345@gmail.com</p>
                  </div>
                  <div>
                    <p className="font-medium">Location:</p>
                    <p className="text-muted-foreground">Odisha, cuttack</p>
                  </div>
                  <div>
                    <p className="font-medium">Availability:</p>
                    <p className="text-muted-foreground">Freelance/Full-time</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
