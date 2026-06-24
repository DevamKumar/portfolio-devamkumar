"use client";

import Image from "next/image";
import { Mail, FileText } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/icons";
import { Button } from "@/components/ui/button";
import { FadeIn } from "@/components/motion";

export function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center pt-16">
      <div className="max-w-6xl mx-auto px-6 py-20">
        <div className="flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-20">
          <FadeIn className="flex-1 text-center lg:text-left">
            <p className="text-sm font-medium text-muted-foreground uppercase tracking-widest mb-4">
              Associate Solution Architect & AI Engineer
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
              Devam Kumar
            </h1>
            <p className="text-lg text-muted-foreground max-w-xl mx-auto lg:mx-0 leading-relaxed mb-8">
              I build cloud-native applications, AI-powered solutions, developer
              platforms, and enterprise-scale architectures that help
              organizations move faster and innovate efficiently.
            </p>
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3">
              <Button asChild>
                <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
                  <FileText size={16} />
                  View Resume
                </a>
              </Button>
              <Button variant="outline" asChild>
                <a href="#contact">
                  <Mail size={16} />
                  Contact Me
                </a>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <a
                  href="https://github.com/DevamKumar"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                >
                  <GithubIcon size={18} />
                </a>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <a
                  href="https://linkedin.com/in/devam-kumar"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                >
                  <LinkedinIcon size={18} />
                </a>
              </Button>
            </div>
          </FadeIn>

          <FadeIn delay={0.2} className="flex-shrink-0">
            <div className="relative w-64 h-64 sm:w-72 sm:h-72 lg:w-80 lg:h-80">
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-neutral-200 to-neutral-100" />
              <Image
                src="/profile.png"
                alt="Devam Kumar"
                fill
                className="rounded-full object-cover p-1"
                priority
              />
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
