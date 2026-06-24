"use client";

import { FadeIn } from "@/components/motion";

const paragraphs = [
  "I'm a Computer Science Engineer and Associate Solution Architect with experience in Cloud Architecture, AI Agents, Developer Platforms, SDK Development, DevOps, and Backend Engineering.",
  "My expertise spans Java, Python, AWS, Terraform, Docker, Kubernetes, Jenkins, and modern AI-powered systems.",
  "Currently, I design enterprise solutions, build AI agents, develop SDKs, and enable partners through technical training and solution architecture.",
  "I enjoy building scalable systems, sharing technical knowledge through blogs, and contributing to developer communities.",
];

export function About() {
  return (
    <section id="about" className="py-24">
      <div className="max-w-3xl mx-auto px-6">
        <FadeIn>
          <h2 className="text-3xl font-bold tracking-tight mb-2">About</h2>
          <div className="w-12 h-0.5 bg-foreground mb-8" />
        </FadeIn>
        <div className="space-y-4">
          {paragraphs.map((p, i) => (
            <FadeIn key={i} delay={i * 0.1}>
              <p className="text-muted-foreground leading-relaxed">{p}</p>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
