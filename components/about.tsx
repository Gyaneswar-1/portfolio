import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { motion } from "motion/react";

export default function About() {
  return (
    <section id="about" className="py-20 px-4 md:px-6 bg-muted/50">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          About <span className="text-primary">Me</span>
        </h2>
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="flex justify-center">
            <motion.div
              className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-primary/20"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
            >
              <Image
                src="/me.jpg"
                alt="Profile"
                fill
                className="object-cover"
              />
            </motion.div>
          </div>
          <div>
            <Card>
              <CardContent className="p-6">
                <h3 className="text-2xl font-semibold mb-4">
                  Web Developer & UI/UX Enthusiast
                </h3>
                <motion.p className="text-muted-foreground mb-4">
                  I'm Gyaneswar Rout, a dedicated and creative web developer
                  with a strong focus on building fast, accessible, and visually
                  appealing web applications. I love translating ideas into
                  functional and clean digital experiences.
                </motion.p>
                <p className="text-muted-foreground mb-6">
                  My journey began in college, where I created my first website
                  and instantly fell in love with web development. Over the
                  years, I've honed my skills in React.js, Next.js, and Tailwind
                  CSS, I’m always excited to learn new
                  technologies and push the boundaries of what’s possible on the
                  web.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                  >
                    <p className="font-medium">Name:</p>
                    <p className="text-muted-foreground">Gyaneswar Rout</p>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                  >
                    <p className="font-medium">Email:</p>
                    <p className="text-muted-foreground break-words">
                      gyaneswarrout12345@gmail.com
                    </p>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                  >
                    <p className="font-medium">Location:</p>
                    <p className="text-muted-foreground">Odisha, cuttack</p>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                  >
                    <p className="font-medium">Availability:</p>
                    <p className="text-muted-foreground">Freelance/Full-time</p>
                  </motion.div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
