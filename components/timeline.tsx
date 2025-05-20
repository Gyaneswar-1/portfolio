"use client";
import { Briefcase, GraduationCap } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useEffect, useState } from "react";
import { motion } from "motion/react";

export default function Timeline() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 768px)");
    setIsMobile(mediaQuery.matches);

    const handleResize = () => setIsMobile(mediaQuery.matches);
    mediaQuery.addEventListener("change", handleResize);

    return () => mediaQuery.removeEventListener("change", handleResize);
  }, []);

  const timelineItems = [
    {
      id: 1,
      type: "education",
      title: "10th ",
      organization: "University of Technology",
      duration: "2016 - 2020",
      description:
        "Graduated with honors. Specialized in web development and user interface design.",
      icon: <GraduationCap className="h-6 w-6" />,
      year: 2020,
    },
    {
      id: 2,
      type: "experience",
      title: "Junior Web Developer",
      organization: "Tech Startup Inc.",
      duration: "2020 - 2021",
      description:
        "Developed responsive websites and implemented UI components using React.js and CSS frameworks.",
      icon: <Briefcase className="h-6 w-6" />,
      year: 2020,
    },
    {
      id: 3,
      type: "education",
      title: "Master's in User Experience Design",
      organization: "Design Institute",
      duration: "2021 - 2022",
      description:
        "Focused on creating intuitive and accessible user interfaces for web applications.",
      icon: <GraduationCap className="h-6 w-6" />,
      year: 2022,
    },
    {
      id: 4,
      type: "experience",
      title: "Frontend Developer",
      organization: "Digital Solutions Ltd.",
      duration: "2022 - 2023",
      description:
        "Led the frontend development team in creating modern web applications using Next.js and Tailwind CSS.",
      icon: <Briefcase className="h-6 w-6" />,
      year: 2022,
    },
    {
      id: 5,
      type: "experience",
      title: "Senior Web Developer",
      organization: "Innovation Labs",
      duration: "2023 - Present",
      description:
        "Architecting scalable frontend solutions and mentoring junior developers in modern web technologies.",
      icon: <Briefcase className="h-6 w-6" />,
      year: 2023,
    },
  ];

  return (
    <section id="timeline" className="py-20 px-4 md:px-6 bg-muted/50">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Education & <span className="text-primary">Experience</span>
        </h2>

        {isMobile ? (
          // Mobile view - vertical timeline
          <motion.div
            className="space-y-6"
            initial={{ scale: 1, opacity: 0.5, translateX: 12 }}
            whileInView={{ scale: 1, opacity: 1, translateX: 0 }}
            whileHover={{ scale: 1.05 }}
          >
            {timelineItems.map((item) => (
              <div
                key={item.id}
                className="relative pl-8 border-l-2 border-primary/30"
              >
                <div className="absolute left-0 top-0 transform -translate-x-1/2 mt-1">
                  <div className="w-8 h-8 rounded-full bg-primary/10 border-2 border-primary flex items-center justify-center">
                    {item.type === "education" ? (
                      <GraduationCap className="h-4 w-4 text-primary" />
                    ) : (
                      <Briefcase className="h-4 w-4 text-primary" />
                    )}
                  </div>
                </div>
                <div className="mb-1 font-medium text-sm text-primary">
                  {item.year}
                </div>
                <Card className="border border-border hover:border-primary/50 transition-all">
                  <CardHeader className="pb-2">
                    <div className="flex justify-between items-start">
                      <CardTitle className="text-lg">{item.title}</CardTitle>
                      <Badge
                        variant={
                          item.type === "education" ? "secondary" : "outline"
                        }
                      >
                        {item.type === "education" ? "Education" : "Experience"}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="text-sm font-medium mb-2">
                      {item.organization}
                    </div>
                    <div className="text-sm text-muted-foreground mb-2">
                      {item.duration}
                    </div>
                    <p className="text-sm">{item.description}</p>
                  </CardContent>
                </Card>
              </div>
            ))}
          </motion.div>
        ) : (
          // Desktop view - centered timeline
          <div className="relative">
            {/* Center line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-border dark:bg-border"></div>

            <div className="space-y-12">
              {timelineItems.map((item, index) => (
                <div key={item.id} className="relative">
                  {/* Year marker */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 -mt-4 z-10">
                    <div className="bg-primary text-primary-foreground text-sm font-medium py-1 px-3 rounded-full">
                      {item.year}
                    </div>
                  </div>

                  {/* Content */}
                  <div
                    className={`flex ${
                      index % 2 === 0 ? "flex-row" : "flex-row-reverse"
                    } items-center`}
                  >
                    <div className="w-5/12"></div>

                    {/* Center dot */}
                    <div className="w-2/12 flex justify-center">
                      <div className="w-10 h-10 rounded-full bg-primary/10 border-4 border-background flex items-center justify-center z-10">
                        {item.type === "education" ? (
                          <GraduationCap className="h-5 w-5 text-primary" />
                        ) : (
                          <Briefcase className="h-5 w-5 text-primary" />
                        )}
                      </div>
                    </div>

                    <motion.div
                      className="w-5/12"
                      initial={{ scale: 1, opacity: 0.5, translateX: 12 }}
                      whileInView={{ scale: 1, opacity: 1, translateX: 0 }}
                      whileHover={{ scale: 1.05 }}
                    >
                      <Card className="border border-border hover:border-primary/50 transition-all">
                        <CardHeader className="pb-2">
                          <div className="flex justify-between items-start">
                            <CardTitle className="text-lg">
                              {item.title}
                            </CardTitle>
                            <Badge
                              variant={
                                item.type === "education"
                                  ? "secondary"
                                  : "outline"
                              }
                            >
                              {item.type === "education"
                                ? "Education"
                                : "Experience"}
                            </Badge>
                          </div>
                        </CardHeader>
                        <CardContent>
                          <div className="text-sm font-medium mb-2">
                            {item.organization}
                          </div>
                          <div className="text-sm text-muted-foreground mb-2">
                            {item.duration}
                          </div>
                          <p className="text-sm">{item.description}</p>
                        </CardContent>
                      </Card>
                    </motion.div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
