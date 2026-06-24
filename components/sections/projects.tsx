"use client";

import { ExternalLink } from "lucide-react";
import { GithubIcon } from "@/components/icons";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FadeIn, FadeInStagger, FadeInStaggerItem } from "@/components/motion";
import profile from "@/data/profile.json";

export function Projects() {
  return (
    <section id="projects" className="py-28">
      <div className="max-w-6xl mx-auto px-8 lg:px-16">
        <FadeIn>
          <h2 className="text-4xl font-bold tracking-tight mb-3">What I&apos;ve Shipped</h2>
          <div className="w-14 h-0.5 bg-foreground mb-14" />
        </FadeIn>

        <FadeInStagger className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {profile.projects.map((project, i) => (
            <FadeInStaggerItem key={i}>
              <Card className="h-full flex flex-col hover:shadow-md transition-shadow">
                <CardHeader className="p-8">
                  <CardTitle className="text-lg">{project.title}</CardTitle>
                  <CardDescription className="mt-3 text-base leading-relaxed">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="mt-auto px-8 pb-8 pt-0">
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="text-sm px-3 py-1 rounded bg-muted text-muted-foreground"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-3">
                    <Button variant="outline" size="sm" asChild>
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <GithubIcon size={14} />
                        Code
                      </a>
                    </Button>
                    <Button variant="ghost" size="sm" asChild>
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink size={14} />
                        Learn More
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </FadeInStaggerItem>
          ))}
        </FadeInStagger>
      </div>
    </section>
  );
}
