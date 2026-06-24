"use client";

import { FadeIn, FadeInStagger, FadeInStaggerItem } from "@/components/motion";
import profile from "@/data/profile.json";

export function Skills() {
  return (
    <section id="skills" className="py-28">
      <div className="max-w-6xl mx-auto px-8 lg:px-16">
        <FadeIn>
          <h2 className="text-4xl font-bold tracking-tight mb-3">Technical Toolkit</h2>
          <div className="w-14 h-0.5 bg-foreground mb-14" />
        </FadeIn>

        <FadeInStagger className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {Object.entries(profile.skills).map(([category, skills]) => (
            <FadeInStaggerItem key={category}>
              <div>
                <h3 className="text-base font-semibold uppercase tracking-wider mb-5">
                  {category}
                </h3>
                <div className="flex flex-wrap gap-2.5">
                  {skills.map((skill) => (
                    <span
                      key={skill}
                      className="text-sm px-4 py-2 rounded-full border border-border bg-background text-muted-foreground hover:text-foreground hover:border-foreground transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </FadeInStaggerItem>
          ))}
        </FadeInStagger>
      </div>
    </section>
  );
}
