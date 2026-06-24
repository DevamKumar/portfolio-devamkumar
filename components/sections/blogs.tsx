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
      <section id="blogs" className="py-28">
        <div className="max-w-6xl mx-auto px-8 lg:px-16">
          <h2 className="text-4xl font-bold tracking-tight mb-3">Blog</h2>
          <div className="w-14 h-0.5 bg-foreground mb-14" />
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="h-48 rounded-lg bg-muted animate-pulse"
              />
            ))}
          </div>
        </div>
      </section>
    );
  }

  if (posts.length === 0) {
    return (
      <section id="blogs" className="py-28">
        <div className="max-w-6xl mx-auto px-8 lg:px-16">
          <FadeIn>
            <h2 className="text-4xl font-bold tracking-tight mb-3">Blog</h2>
            <div className="w-14 h-0.5 bg-foreground mb-10" />
            <p className="text-lg text-muted-foreground">
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
    <section id="blogs" className="py-28">
      <div className="max-w-6xl mx-auto px-8 lg:px-16">
        <FadeIn>
          <h2 className="text-4xl font-bold tracking-tight mb-3">Blog</h2>
          <div className="w-14 h-0.5 bg-foreground mb-14" />
        </FadeIn>

        <FadeInStagger className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {posts.slice(0, 6).map((post, i) => (
            <FadeInStaggerItem key={i}>
              <Card className="h-full flex flex-col hover:shadow-md transition-shadow">
                <CardHeader className="p-8">
                  <CardTitle className="text-lg line-clamp-2">
                    {post.title}
                  </CardTitle>
                  <CardDescription className="text-sm mt-2">
                    {new Date(post.pubDate).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </CardDescription>
                </CardHeader>
                <CardContent className="mt-auto px-8 pb-8 pt-0">
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
