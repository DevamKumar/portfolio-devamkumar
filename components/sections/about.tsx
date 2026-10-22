"use client";

import { FadeIn } from "@/components/motion";
import profile from "@/data/profile.json";

export function About() {
  return (
    <section id="about" className="py-28">
      <div className="max-w-5xl mx-auto px-8 lg:px-16">
        <FadeIn>
          <h2 className="text-4xl font-bold tracking-tight mb-3">What I Do</h2>
          <div className="w-14 h-0.5 bg-foreground mb-10" />
        </FadeIn>
        <div className="space-y-6">
          {profile.about.map((p, i) => (
            <FadeIn key={i} delay={i * 0.1}>
              <p className="text-lg text-muted-foreground leading-relaxed">{p}</p>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
