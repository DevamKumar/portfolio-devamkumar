"use client";

import { Award } from "lucide-react";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { FadeIn, FadeInStagger, FadeInStaggerItem } from "@/components/motion";
import profile from "@/data/profile.json";

export function Certifications() {
  return (
    <section id="certifications" className="py-28 bg-muted/30">
      <div className="max-w-6xl mx-auto px-8 lg:px-16">
        <FadeIn>
          <h2 className="text-4xl font-bold tracking-tight mb-3">
            Credentials
          </h2>
          <div className="w-14 h-0.5 bg-foreground mb-14" />
        </FadeIn>

        <FadeInStagger className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {profile.certifications.map((cert, i) => (
            <FadeInStaggerItem key={i}>
              <Card className="hover:shadow-sm transition-shadow">
                <CardHeader className="p-6">
                  <div className="flex items-start gap-4">
                    <Award size={20} className="mt-0.5 text-muted-foreground flex-shrink-0" />
                    <div>
                      <CardTitle className="text-base font-medium">
                        {cert.name}
                      </CardTitle>
                      <CardDescription className="text-sm mt-1.5">
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
