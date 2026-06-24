"use client";

import { Briefcase } from "lucide-react";
import { FadeIn, FadeInStagger, FadeInStaggerItem } from "@/components/motion";
import profile from "@/data/profile.json";

export function Experience() {
  return (
    <section id="experience" className="py-28 bg-muted/30">
      <div className="max-w-5xl mx-auto px-8 lg:px-16">
        <FadeIn>
          <h2 className="text-4xl font-bold tracking-tight mb-3">Where I&apos;ve Built</h2>
          <div className="w-14 h-0.5 bg-foreground mb-14" />
        </FadeIn>

        <FadeInStagger className="relative">
          <div className="absolute left-[7px] top-0 bottom-0 w-px bg-border" />

          {profile.experience.map((exp, i) => (
            <FadeInStaggerItem key={i} className="relative pl-10 pb-14 last:pb-0">
              <div className="absolute left-0 top-1.5 w-3.5 h-3.5 rounded-full bg-foreground border-2 border-background" />
              <div className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-3 mb-2">
                <h3 className="text-xl font-semibold">{exp.title}</h3>
                <span className="text-muted-foreground">
                  — {exp.company}
                </span>
              </div>
              <p className="text-sm text-muted-foreground mb-4 flex items-center gap-2">
                <Briefcase size={14} />
                {exp.period}
                {"location" in exp && exp.location && (
                  <span className="before:content-['·'] before:mx-1">{exp.location}</span>
                )}
              </p>
              <ul className="space-y-2">
                {exp.responsibilities.map((resp, j) => (
                  <li
                    key={j}
                    className="text-base text-muted-foreground flex items-start gap-3"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-muted-foreground mt-2.5 flex-shrink-0" />
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
