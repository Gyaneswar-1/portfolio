import { Github, Linkedin, Mail, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-card py-12 px-4 md:px-6 border-t">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h3 className="text-xl font-bold">Gyaneswar Rout</h3>
            <p className="text-muted-foreground">Web Developer</p>
          </div>
          <div className="flex gap-4">
            <Button variant="ghost" size="icon" className="rounded-full">
              <Link href={"https://github.com/Gyaneswar-1"}>
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </Link>
            </Button>
            <Button variant="ghost" size="icon" className="rounded-full">
              <Link href={"https://www.linkedin.com/in/gyaneswar-rout-93u/"}>
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </Button>
            <Button variant="ghost" size="icon" className="rounded-full">
            <Link href={"https://x.com/GyaneswarRout69"}>
              <Twitter className="h-5 w-5" />
              <span className="sr-only">Twitter</span>
            </Link>
            </Button>
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
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-border text-center">
          <p className="text-muted-foreground">
            © {new Date().getFullYear()} Gyaneswar Rout. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
