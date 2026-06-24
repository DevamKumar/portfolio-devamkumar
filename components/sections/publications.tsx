"use client";

import { FileText } from "lucide-react";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { FadeIn, FadeInStagger, FadeInStaggerItem } from "@/components/motion";
import profile from "@/data/profile.json";

export function Publications() {
  return (
    <section id="publications" className="py-24 bg-muted/30">
      <div className="max-w-3xl mx-auto px-6">
        <FadeIn>
          <h2 className="text-3xl font-bold tracking-tight mb-2">
            Publications
          </h2>
          <div className="w-12 h-0.5 bg-foreground mb-12" />
        </FadeIn>

        <FadeInStagger className="space-y-4">
          {profile.publications.map((pub, i) => (
            <FadeInStaggerItem key={i}>
              <Card className="hover:shadow-sm transition-shadow">
                <CardHeader>
                  <div className="flex items-start gap-3">
                    <FileText size={18} className="mt-0.5 text-muted-foreground flex-shrink-0" />
                    <div>
                      <CardTitle className="text-base">{pub.title}</CardTitle>
                      <CardDescription className="mt-1">
                        {pub.description}
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
