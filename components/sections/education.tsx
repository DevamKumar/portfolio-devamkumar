"use client";

import { GraduationCap } from "lucide-react";
import { FadeIn } from "@/components/motion";
import profile from "@/data/profile.json";

export function Education() {
  return (
    <section id="education" className="py-28 bg-muted/30">
      <div className="max-w-5xl mx-auto px-8 lg:px-16">
        <FadeIn>
          <h2 className="text-4xl font-bold tracking-tight mb-3">Education</h2>
          <div className="w-14 h-0.5 bg-foreground mb-14" />
        </FadeIn>

        <div className="space-y-10">
          {profile.education.map((edu, i) => (
            <FadeIn key={i} delay={i * 0.1}>
              <div className="flex items-start gap-5">
                <div className="w-12 h-12 rounded-full bg-muted flex items-center justify-center flex-shrink-0">
                  <GraduationCap size={22} className="text-muted-foreground" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold">{edu.degree}</h3>
                  <p className="text-muted-foreground">{edu.field}</p>
                  <p className="text-muted-foreground">{edu.institution}</p>
                  <p className="text-muted-foreground mt-1">
                    {edu.cgpa.includes("%") ? edu.cgpa : `CGPA: ${edu.cgpa}`} &middot; {edu.period}
                  </p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
