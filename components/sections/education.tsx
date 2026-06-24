"use client";

import { GraduationCap } from "lucide-react";
import { FadeIn } from "@/components/motion";
import profile from "@/data/profile.json";

export function Education() {
  return (
    <section id="education" className="py-24 bg-muted/30">
      <div className="max-w-3xl mx-auto px-6">
        <FadeIn>
          <h2 className="text-3xl font-bold tracking-tight mb-2">Education</h2>
          <div className="w-12 h-0.5 bg-foreground mb-12" />
        </FadeIn>

        {profile.education.map((edu, i) => (
          <FadeIn key={i} delay={0.1}>
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center flex-shrink-0">
                <GraduationCap size={18} className="text-muted-foreground" />
              </div>
              <div>
                <h3 className="font-semibold">{edu.degree}</h3>
                <p className="text-muted-foreground text-sm">{edu.field}</p>
                <p className="text-muted-foreground text-sm">{edu.institution}</p>
                <p className="text-muted-foreground text-sm mt-1">
                  CGPA: {edu.cgpa} &middot; {edu.period}
                </p>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
