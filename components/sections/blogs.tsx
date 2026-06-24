"use client";

import { useEffect, useState } from "react";
import { ExternalLink } from "lucide-react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FadeIn, FadeInStagger, FadeInStaggerItem } from "@/components/motion";

interface BlogPost {
  title: string;
  link: string;
  pubDate: string;
  thumbnail?: string;
}

export function Blogs() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchBlogs() {
      try {
        const res = await fetch("/api/blogs");
        if (res.ok) {
          const data = await res.json();
          setPosts(data.posts || []);
        }
      } catch {
        // silently fail
      } finally {
        setLoading(false);
      }
    }
    fetchBlogs();
  }, []);

  if (loading) {
    return (
      <section id="blogs" className="py-24">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold tracking-tight mb-2">Blog</h2>
          <div className="w-12 h-0.5 bg-foreground mb-12" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className="h-40 rounded-lg bg-muted animate-pulse"
              />
            ))}
          </div>
        </div>
      </section>
    );
  }

  if (posts.length === 0) {
    return (
      <section id="blogs" className="py-24">
        <div className="max-w-4xl mx-auto px-6">
          <FadeIn>
            <h2 className="text-3xl font-bold tracking-tight mb-2">Blog</h2>
            <div className="w-12 h-0.5 bg-foreground mb-8" />
            <p className="text-muted-foreground">
              Check out my latest articles on{" "}
              <a
                href="https://medium.com/@devamkumar"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-foreground transition-colors"
              >
                Medium
              </a>
              .
            </p>
          </FadeIn>
        </div>
      </section>
    );
  }

  return (
    <section id="blogs" className="py-24">
      <div className="max-w-4xl mx-auto px-6">
        <FadeIn>
          <h2 className="text-3xl font-bold tracking-tight mb-2">Blog</h2>
          <div className="w-12 h-0.5 bg-foreground mb-12" />
        </FadeIn>

        <FadeInStagger className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {posts.slice(0, 6).map((post, i) => (
            <FadeInStaggerItem key={i}>
              <Card className="h-full flex flex-col hover:shadow-md transition-shadow">
                <CardHeader>
                  <CardTitle className="text-base line-clamp-2">
                    {post.title}
                  </CardTitle>
                  <CardDescription className="text-xs mt-1">
                    {new Date(post.pubDate).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </CardDescription>
                </CardHeader>
                <CardContent className="mt-auto">
                  <Button variant="ghost" size="sm" asChild>
                    <a
                      href={post.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink size={14} />
                      Read More
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </FadeInStaggerItem>
          ))}
        </FadeInStagger>
      </div>
    </section>
  );
}
