"use client";

import Image from "next/image";
import { Mail, FileText } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/icons";
import { Button } from "@/components/ui/button";
import { FadeIn } from "@/components/motion";

import profile from "@/data/profile.json";

export function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center pt-16">
      <div className="max-w-7xl w-full mx-auto px-8 lg:px-16 py-20">
        <div className="flex flex-col-reverse lg:flex-row items-center gap-16 lg:gap-24">
          <FadeIn className="flex-1 text-center lg:text-left">
            <p className="text-base font-medium text-muted-foreground uppercase tracking-widest mb-5">
              {profile.subtitle}
            </p>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight mb-8">
              {profile.name}
            </h1>
            <p className="text-xl lg:text-2xl text-muted-foreground max-w-2xl mx-auto lg:mx-0 leading-relaxed mb-10">
              {profile.introduction}
            </p>
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4">
              <Button size="lg" asChild>
                <a
                  href={profile.links.resume}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FileText size={18} />
                  View Resume
                </a>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a href="#contact">
                  <Mail size={18} />
                  Let&apos;s Talk
                </a>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <a
                  href="https://github.com/DevamKumar"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                >
                  <GithubIcon size={20} />
                </a>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <a
                  href="https://linkedin.com/in/devam-kumar"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                >
                  <LinkedinIcon size={20} />
                </a>
              </Button>
            </div>
          </FadeIn>

          <FadeIn delay={0.2} className="flex-shrink-0">
            <div className="relative w-72 h-72 sm:w-80 sm:h-80 lg:w-96 lg:h-96">
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-neutral-200 to-neutral-100" />
              <Image
                src="/profile.png"
                alt="Devam Kumar"
                fill
                sizes="(max-width: 640px) 288px, (max-width: 1024px) 320px, 384px"
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
