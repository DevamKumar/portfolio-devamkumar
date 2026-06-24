"use client";

import { Briefcase } from "lucide-react";
import { FadeIn, FadeInStagger, FadeInStaggerItem } from "@/components/motion";
import profile from "@/data/profile.json";

export function Experience() {
  return (
    <section id="experience" className="py-24 bg-muted/30">
      <div className="max-w-3xl mx-auto px-6">
        <FadeIn>
          <h2 className="text-3xl font-bold tracking-tight mb-2">Experience</h2>
          <div className="w-12 h-0.5 bg-foreground mb-12" />
        </FadeIn>

        <FadeInStagger className="relative">
          <div className="absolute left-4 top-0 bottom-0 w-px bg-border" />

          {profile.experience.map((exp, i) => (
            <FadeInStaggerItem key={i} className="relative pl-12 pb-12 last:pb-0">
              <div className="absolute left-2.5 top-1 w-3 h-3 rounded-full bg-foreground border-2 border-background" />
              <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3 mb-2">
                <h3 className="font-semibold">{exp.title}</h3>
                <span className="text-muted-foreground text-sm">
                  — {exp.company}
                </span>
              </div>
              <p className="text-sm text-muted-foreground mb-3 flex items-center gap-2">
                <Briefcase size={14} />
                {exp.period}
              </p>
              <ul className="space-y-1.5">
                {exp.responsibilities.map((resp, j) => (
                  <li
                    key={j}
                    className="text-sm text-muted-foreground flex items-start gap-2"
                  >
                    <span className="w-1 h-1 rounded-full bg-muted-foreground mt-2 flex-shrink-0" />
                    {resp}
                  </li>
                ))}
              </ul>
            </FadeInStaggerItem>
          ))}
        </FadeInStagger>
      </div>
    </section>
  );
}
