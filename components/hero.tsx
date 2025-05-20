"use client";

import { useState, useEffect } from "react";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { AnimatePresence, motion } from "motion/react";

export default function Hero() {
  const [typedText, setTypedText] = useState("");
  const fullText = "Web Developer";
  const [index, setIndex] = useState(0);
  const [textindex, settextIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      settextIndex((prev) => (prev + 1) % helloText.length);
    }, 1000); 
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (index < fullText.length) {
      const timeout = setTimeout(() => {
        setTypedText((prev) => prev + fullText[index]);
        setIndex(index + 1);
      }, 100);

      return () => clearTimeout(timeout);
    }
  }, [index]);

  const scrollToContact = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const helloText = [
    "Hello", // English
    "नमस्ते", // Hindi
    "ନମସ୍କାର", // Odia
    "নমস্কাৰ", // Assamese
    "வணக்கம்", // Tamil
    "नमस्कार", // Marathi
    "ഹലോ", // Malayalam
    "नमस्कार", // Konkani
    "హలో", // Telugu
    "હેલ્લો", // Gujarati
    "ಹಲೋ", // Kannada
    "ਹੈਲੋ", // Punjabi
    "হ্যালো", // Bengali
    "ਨਮਸਤੇ", // Dogri
    "ہیلو", // Urdu
  ];

  return (
    <section className="relative h-screen flex flex-col items-center justify-center text-center px-4 md:px-6">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/20 via-background to-background"></div>
      <h1 className="text-4xl md:text-6xl font-bold tracking-tighter mb-4">
        <AnimatePresence mode="wait">
          <motion.div
            key={textindex}
            initial={{ opacity: 0 }}
            animate={{  opacity: 1 }}
            exit={{  opacity: 0 }}
            transition={{ duration: 1.6 }}
          >
            {helloText[textindex]}
          </motion.div>
        </AnimatePresence>
        I'm{" "}
        <motion.span initial={{ scale: 1.0 }} drag className="text-primary">
          Gyaneswar Rout
        </motion.span>
      </h1>
      <h2 className="text-2xl md:text-4xl font-medium mb-6">
        <span
          className={cn(
            "text-primary",
            typedText.length === fullText.length
              ? "border-r-2 border-primary animate-pulse"
              : ""
          )}
        >
          {typedText}
        </span>
        <span
          className={cn(
            "border-r-2 border-primary animate-blink",
            typedText.length === fullText.length ? "hidden" : ""
          )}
        >
          |
        </span>
      </h2>
      <p className="text-muted-foreground max-w-md mb-8">
        I build responsive, accessible, and performant web applications with
        modern technologies.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 mb-12">
        <motion.div
          initial={{ scale: 1.0 }}
          whileHover={{ scale: 1.1, rotate: 5 }}
        >
          <Button onClick={scrollToContact}>Contact Me</Button>
        </motion.div>
        <motion.div
          initial={{ scale: 1.0 }}
          whileHover={{ scale: 1.1, rotate: 5 }}
        >
          <Button variant="outline">Download CV</Button>
        </motion.div>
      </div>
      <div className="flex gap-4">
        <motion.div
          initial={{ scale: 1.0 }}
          whileHover={{ scale: 1.2, translateY: -8 }}
        >
          <Button variant="ghost" size="icon" className="rounded-full">
            <Link href={"https://github.com/Gyaneswar-1"}>
              <Github className="h-5 w-5" />
              <span className="sr-only">GitHub</span>
            </Link>
          </Button>
        </motion.div>
        <motion.div
          initial={{ scale: 1.0 }}
          whileHover={{ scale: 1.2, translateY: -8 }}
        >
          <Button variant="ghost" size="icon" className="rounded-full">
            <Link href={"https://www.linkedin.com/in/gyaneswar-rout-93u/"}>
              <Linkedin className="h-5 w-5" />
              <span className="sr-only">LinkedIn</span>
            </Link>
          </Button>
        </motion.div>
        <motion.div
          initial={{ scale: 1.0 }}
          whileHover={{ scale: 1.2, translateY: -8 }}
        >
          <Button variant="ghost" size="icon" className="rounded-full">
            <Link
              href={
                "https://mail.google.com/mail/?view=cm&fs=1&to=gyaneswarrout12345@gmail.com&su=Project%20Inquiry&body=Hi%20Gyaneswar%2C%0A%0AI%27m%20interested%20in%20connecting%20with%20you%20regarding%20a%20project.%20Please%20let%20me%20know%20a%20good%20time%20to%20talk."
              }
            >
              <Mail className="h-5 w-5" />
              <span className="sr-only">Email</span>
            </Link>
          </Button>
        </motion.div>
      </div>
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <ArrowDown className="h-6 w-6 text-muted-foreground" />
      </div>
    </section>
  );
}
