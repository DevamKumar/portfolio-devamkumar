"use client";

import { Award } from "lucide-react";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { FadeIn, FadeInStagger, FadeInStaggerItem } from "@/components/motion";
import profile from "@/data/profile.json";

export function Certifications() {
  return (
    <section id="certifications" className="py-24 bg-muted/30">
      <div className="max-w-4xl mx-auto px-6">
        <FadeIn>
          <h2 className="text-3xl font-bold tracking-tight mb-2">
            Certifications
          </h2>
          <div className="w-12 h-0.5 bg-foreground mb-12" />
        </FadeIn>

        <FadeInStagger className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {profile.certifications.map((cert, i) => (
            <FadeInStaggerItem key={i}>
              <Card className="hover:shadow-sm transition-shadow">
                <CardHeader className="pb-4">
                  <div className="flex items-start gap-3">
                    <Award size={18} className="mt-0.5 text-muted-foreground flex-shrink-0" />
                    <div>
                      <CardTitle className="text-sm font-medium">
                        {cert.name}
                      </CardTitle>
                      <CardDescription className="text-xs mt-1">
                        {cert.issuer}
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
              </Card>
            </FadeInStaggerItem>
          ))}
        </FadeInStagger>
      </div>
    </section>
  );
}
