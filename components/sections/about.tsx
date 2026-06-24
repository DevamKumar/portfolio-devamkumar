"use client";

import { FadeIn } from "@/components/motion";

const paragraphs = [
  "I'm a Solution Architect who sits at the intersection of enterprise platforms, AI systems, and backend engineering — designing architectures that solve real business problems at scale.",
  "At Iron Mountain, I architect DXP solutions, build AI agents that automate complex workflows, develop MCP servers for intelligent content interactions, and ship scalable SDKs that enable partners to integrate seamlessly.",
  "My engineering foundation is 3+ years of shipping production backend systems — Spring Boot microservices, REST APIs, database architectures, and SDK layers that other developers build on top of.",
  "I write about what I build. My technical articles break down architecture patterns, AI agent design, and backend engineering decisions for the developer community. I believe the best architects are the ones who can explain their decisions clearly.",
];

export function About() {
  return (
    <section id="about" className="py-28">
      <div className="max-w-5xl mx-auto px-8 lg:px-16">
        <FadeIn>
          <h2 className="text-4xl font-bold tracking-tight mb-3">What I Do</h2>
          <div className="w-14 h-0.5 bg-foreground mb-10" />
        </FadeIn>
        <div className="space-y-6">
          {paragraphs.map((p, i) => (
            <FadeIn key={i} delay={i * 0.1}>
              <p className="text-lg text-muted-foreground leading-relaxed">{p}</p>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
