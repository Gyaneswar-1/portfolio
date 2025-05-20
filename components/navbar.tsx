"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import ThemeToggle from "@/components/theme-toggle";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "motion/react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [greeting, setGreeting] = useState("");

  useEffect(() => {
    const hour = new Date().getHours();

    if (hour >= 5 && hour < 12) {
      setGreeting("Good Morning ");
    } else if (hour >= 12 && hour < 17) {
      setGreeting("Good Afternoon ");
    } else if (hour >= 17 && hour < 21) {
      setGreeting("Good Evening ");
    } else {
      setGreeting("Good Night ");
    }
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  const navItems: any[] = [
    // { name: "Home", href: "#" },
    // { name: "About", href: "#about" },
    // { name: "Skills", href: "#skills" },
    // { name: "Projects", href: "#projects" },
    // { name: "Certificates", href: "#certificates" },
    // { name: "Timeline", href: "#timeline" },
    // { name: "Contact", href: "#contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setIsOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-background/80 backdrop-blur-md shadow-sm"
          : "bg-transparent"
      )}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <h1
              className="text-[1.5rem] font-bold text-primary"
            >
              {greeting}
            </h1>
          </div>

          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-4">
              {navItems.map((item) => (
                <Button
                  key={item.name}
                  variant="ghost"
                  onClick={() => handleNavClick(item.href)}
                  className="text-sm font-medium"
                >
                  {item.name}
                </Button>
              ))}
              <ThemeToggle />
            </div>
          </div>

          <div className="flex md:hidden ">
            <ThemeToggle />
          </div>
        </div>
      </div>
    </nav>
  );
}
