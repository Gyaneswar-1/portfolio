"use client";

import { useState } from "react";
import Image from "next/image";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Card } from "@/components/ui/card";
import { Award, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Certificates() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [showAllCertificates, setShowAllCertificates] = useState(false);

  const certificates = [
    {
      id: 1,
      title: "Next.js Fundamentals",
      issuer: "Frontend Masters",
      date: "2025",
      image: "/certificate/Nextjs.png",
    },
    {
      id: 2,
      title: "Client side GraphQL",
      issuer: "Frontend Masters",
      date: "2025",
      image: "/certificate/ClientSideGraphQL.png",
    },
    {
      id: 3,
      title: "UI/UX Design Fundamentals",
      issuer: "Scrimba",
      date: "2025",
      image: "/certificate/UIDesign.png",
    },
    {
      id: 4,
      title: "Full-Stack Web Development",
      issuer: "Udemy",
      date: "2024",
      image: "/certificate/CompleteWebDevelopement.jpg",
    },
    {
      id: 5,
      title: "Data structure and Algorithms using Java",
      issuer: "NPTEL",
      date: "2024",
      image: "/certificate/DSANPTEL.png",
    },
    {
      id: 6,
      title: "Python",
      issuer: "NPTEL",
      date: "2024",
      image: "/certificate/PythonNPTEL.png",
    },
    {
      id: 7,
      title: "Advance React",
      issuer: "Scrimba",
      date: "2025",
      image: "/certificate/ReactAdvance.png",
    },
    {
      id: 8,
      title: "Typescript",
      issuer: "Scrimba",
      date: "2024",
      image: "/certificate/Typescript.png",
    },
    {
      id: 9,
      title: "JAVA programming",
      issuer: "Udemy",
      date: "2024",
      image: "/certificate/JAVA.png",
    },
    {
      id: 10,
      title: "Techkriti AI Workshop",
      issuer: "IIT Kanpur",
      date: "2024",
      image: "/certificate/IITWorkshop.jpg",
    },
  ];

  // Display only the first 6 certificates initially
  const displayedCertificates = showAllCertificates
    ? certificates
    : certificates.slice(0, 6);

  return (
    <section id="certificates" className="py-20 px-4 md:px-6">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          My <span className="text-primary">Certificates</span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayedCertificates.map((cert) => (
            <Card
              key={cert.id}
              className="group overflow-hidden cursor-pointer hover:shadow-lg transition-all duration-300 border border-border hover:border-primary/50"
              onClick={() => setSelectedImage(cert.image)}
            >
              <div className="relative h-48 w-full overflow-hidden">
                <Image
                  src={cert.image || "/placeholder.svg"}
                  alt={cert.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Award className="h-12 w-12 text-white" />
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-lg">{cert.title}</h3>
                <div className="flex justify-between text-sm text-muted-foreground mt-1">
                  <span>{cert.issuer}</span>
                  <span>{cert.date}</span>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="flex justify-center mt-12">
          <Button
            onClick={() => setShowAllCertificates(true)}
            className="px-8"
            variant="outline"
            size="lg"
          >
            Load More Certificates
          </Button>
        </div>
      </div>

      {/* Certificate image preview dialog */}
      <Dialog
        open={!!selectedImage}
        onOpenChange={(open) => !open && setSelectedImage(null)}
      >
        <DialogContent className="max-w-3xl p-0 overflow-hidden">
          {selectedImage && (
            <div className="relative h-[80vh] w-full">
              <Image
                src={selectedImage || "/placeholder.svg"}
                alt="Certificate"
                fill
                className="object-contain"
              />
            </div>
          )}
        </DialogContent>
      </Dialog>

      {/* All certificates dialog */}
      <Dialog open={showAllCertificates} onOpenChange={setShowAllCertificates}>
        <DialogContent className="max-w-6xl max-h-[90vh] overflow-y-auto">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold">All Certificates</h2>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setShowAllCertificates(false)}
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {certificates.map((cert) => (
              <Card
                key={cert.id}
                className="group overflow-hidden cursor-pointer hover:shadow-lg transition-all duration-300 border border-border hover:border-primary/50"
                onClick={() => {
                  setSelectedImage(cert.image);
                  setShowAllCertificates(false);
                }}
              >
                <div className="relative h-40 w-full overflow-hidden">
                  <Image
                    src={cert.image || "/placeholder.svg"}
                    alt={cert.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Award className="h-10 w-10 text-white" />
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-lg">{cert.title}</h3>
                  <div className="flex justify-between text-sm text-muted-foreground mt-1">
                    <span>{cert.issuer}</span>
                    <span>{cert.date}</span>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
}
