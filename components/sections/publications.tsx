"use client";

import { FileText } from "lucide-react";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { FadeIn, FadeInStagger, FadeInStaggerItem } from "@/components/motion";
import profile from "@/data/profile.json";

export function Publications() {
  return (
    <section id="publications" className="py-28 bg-muted/30">
      <div className="max-w-5xl mx-auto px-8 lg:px-16">
        <FadeIn>
          <h2 className="text-4xl font-bold tracking-tight mb-3">
            Research & Publications
          </h2>
          <div className="w-14 h-0.5 bg-foreground mb-14" />
        </FadeIn>

        <FadeInStagger className="space-y-6">
          {profile.publications.map((pub, i) => (
            <FadeInStaggerItem key={i}>
              <Card className="hover:shadow-sm transition-shadow">
                <CardHeader className="p-8">
                  <div className="flex items-start gap-4">
                    <FileText size={22} className="mt-0.5 text-muted-foreground flex-shrink-0" />
                    <div className="flex-1">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-2">
                        <CardTitle className="text-lg">{pub.title}</CardTitle>
                        {"venue" in pub && pub.venue && (
                          <span className="text-xs px-2.5 py-1 rounded-md bg-muted text-muted-foreground font-medium self-start sm:self-auto flex-shrink-0">
                            {pub.venue}
                          </span>
                        )}
                      </div>
                      <CardDescription className="text-base leading-relaxed">
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
