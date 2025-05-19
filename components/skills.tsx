import { Code, Database, Figma, FileJson, Globe, Layers, LayoutGrid, Palette, Server, Smartphone } from "lucide-react"
import { motion } from "motion/react";
import { useState } from "react";
export default function Skills() {
  const [text,setText] = useState(false)
  const skills = [
    { name: "Java", link: "/tools/Java.png" },
    { name: "JavaScript", link: "/tools/Javascript.png" },
    { name: "React.js", link: "/tools/React.png" },
    { name: "Next.js", link: "/tools/Nextjs.png" },
    { name: "Tailwind CSS", link: "/tools/Tailwind.png" },
    { name: "Git/Github", link: "/tools/Github.png" },
    { name: "Express js", link: "/tools/express-js.png" },
    { name: "Primsa ORM", link: "/tools/prisma.png" },
    { name: "TypeScript", link: "/tools/Typescript.png" },
    { name: "Python", link: "/tools/Python.png" },
    { name: "Postman", link: "/tools/Postman.png" },
    { name: "Postgres", link: "/tools/Postgres.png" },
    { name: "NodeJS", link: "/tools/Nodejs.png" },
    { name: "MongoDB", link: "/tools/Mongodb.png" },
    { name: "Linux", link: "/tools/Linux.png" },
  ]

  return (
    <section id="skills" className="py-20 px-4 md:px-6 ">
      <div className="container mx-auto ">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          My <span className="text-primary">Skills</span>
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 ">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="flex  flex-col items-center justify-center p-6 bg-card rounded-lg border border-border hover:border-primary/50 hover:shadow-md transition-all cursor-crosshair"
            >
              <motion.img  initial={{scale:1}} whileHover={{scale:1.9}} src={skill.link} alt="" className="h-8  mb-2"/>
              <motion.h3  className="font-medium text-center"  >{skill.name}</motion.h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
