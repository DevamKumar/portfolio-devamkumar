"use client";

import { useEffect, useState, useRef } from "react";
import { ChevronLeft, ChevronRight, ExternalLink, BookOpen } from "lucide-react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FadeIn } from "@/components/motion";
import fallbackBlogs from "@/data/blogs.json";

interface BlogPost {
  title: string;
  link: string;
  pubDate: string;
  thumbnail?: string | null;
  category?: string;
  snippet?: string;
}

export function Blogs() {
  const [posts, setPosts] = useState<BlogPost[]>(fallbackBlogs);
  const [loading, setLoading] = useState(false);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [activeIndex, setActiveIndex] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    async function fetchBlogs() {
      try {
        const res = await fetch("/api/blogs");
        if (res.ok) {
          const data = await res.json();
          if (data.posts && data.posts.length > 0) {
            setPosts(data.posts);
          }
        }
      } catch {
        // Keeps fallbackBlogs
      }
    }
    fetchBlogs();
  }, []);

  function checkScrollability() {
    const el = carouselRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 10);
    setCanScrollRight(el.scrollLeft + el.clientWidth < el.scrollWidth - 10);

    const cardWidth = el.firstElementChild
      ? (el.firstElementChild as HTMLElement).clientWidth + 24
      : 340;
    const index = Math.round(el.scrollLeft / cardWidth);
    setActiveIndex(Math.min(index, posts.length - 1));
  }

  useEffect(() => {
    const el = carouselRef.current;
    if (!el) return;
    checkScrollability();
    el.addEventListener("scroll", checkScrollability, { passive: true });
    window.addEventListener("resize", checkScrollability);
    return () => {
      el.removeEventListener("scroll", checkScrollability);
      window.removeEventListener("resize", checkScrollability);
    };
  }, [posts]);

  function scroll(direction: "left" | "right") {
    const el = carouselRef.current;
    if (!el) return;
    const cardWidth = el.firstElementChild
      ? (el.firstElementChild as HTMLElement).clientWidth + 24
      : 360;
    const scrollAmount = direction === "left" ? -cardWidth : cardWidth;
    el.scrollBy({ left: scrollAmount, behavior: "smooth" });
  }

  function scrollToIndex(idx: number) {
    const el = carouselRef.current;
    if (!el) return;
    const cardWidth = el.firstElementChild
      ? (el.firstElementChild as HTMLElement).clientWidth + 24
      : 360;
    el.scrollTo({ left: idx * cardWidth, behavior: "smooth" });
  }

  return (
    <section id="blogs" className="py-28 bg-muted/20">
      <div className="max-w-6xl mx-auto px-8 lg:px-16">
        <FadeIn>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
            <div>
              <p className="text-xs uppercase tracking-widest text-muted-foreground font-semibold mb-2">
                Writing & Insights
              </p>
              <h2 className="text-4xl font-bold tracking-tight mb-3">
                Medium Articles
              </h2>
              <div className="w-14 h-0.5 bg-foreground" />
            </div>

            <div className="flex items-center gap-3">
              <Button
                variant="outline"
                size="sm"
                asChild
                className="hidden sm:inline-flex gap-2"
              >
                <a
                  href="https://medium.com/@devamkumar"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <BookOpen size={14} />
                  All Articles
                  <ExternalLink size={12} className="opacity-70" />
                </a>
              </Button>

              <div className="flex items-center gap-2">
                <Button
                  variant="outline"
                  size="icon"
                  className="h-10 w-10 rounded-full"
                  onClick={() => scroll("left")}
                  disabled={!canScrollLeft}
                  aria-label="Previous article"
                >
                  <ChevronLeft size={18} />
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  className="h-10 w-10 rounded-full"
                  onClick={() => scroll("right")}
                  disabled={!canScrollRight}
                  aria-label="Next article"
                >
                  <ChevronRight size={18} />
                </Button>
              </div>
            </div>
          </div>
        </FadeIn>

        {/* Carousel Container */}
        <div className="relative -mx-8 px-8 lg:-mx-16 lg:px-16">
          <div
            ref={carouselRef}
            className="flex gap-6 overflow-x-auto scroll-smooth snap-x snap-mandatory pb-6 pt-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            {posts.map((post, i) => (
              <div
                key={i}
                className="snap-start shrink-0 w-[85vw] sm:w-[380px] md:w-[400px] flex"
              >
                <Card className="w-full flex flex-col justify-between hover:shadow-lg transition-all duration-300 border border-border/80 hover:border-foreground/40 group overflow-hidden bg-card">
                  {/* Card Thumbnail / Header Image */}
                  <div className="relative w-full h-44 bg-muted/60 overflow-hidden border-b border-border/60">
                    {post.thumbnail ? (
                      /* eslint-disable-next-line @next/next/no-img-element */
                      <img
                        src={post.thumbnail}
                        alt={post.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                      />
                    ) : (
                      <div className="w-full h-full bg-gradient-to-br from-neutral-800 to-neutral-900 flex items-center justify-center p-6 text-center">
                        <div className="flex flex-col items-center gap-2 text-neutral-400">
                          <BookOpen size={28} className="text-neutral-300" />
                          <span className="text-xs uppercase tracking-wider font-semibold text-neutral-300">
                            {post.category || "Engineering"}
                          </span>
                        </div>
                      </div>
                    )}
                    {post.category && (
                      <span className="absolute top-3 left-3 text-[11px] font-semibold tracking-wide uppercase px-2.5 py-1 rounded-md bg-background/90 backdrop-blur-md border border-border shadow-sm">
                        {post.category}
                      </span>
                    )}
                  </div>

                  <CardHeader className="p-6 pb-3">
                    <CardDescription className="text-xs font-mono text-muted-foreground mb-1">
                      {new Date(post.pubDate).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "short",
                        day: "numeric",
                      })}
                    </CardDescription>
                    <CardTitle className="text-lg font-semibold leading-snug line-clamp-2 group-hover:text-primary transition-colors">
                      <a
                        href={post.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:underline"
                      >
                        {post.title}
                      </a>
                    </CardTitle>
                    {post.snippet && (
                      <p className="text-sm text-muted-foreground mt-2 line-clamp-3 leading-relaxed">
                        {post.snippet}
                      </p>
                    )}
                  </CardHeader>

                  <CardContent className="p-6 pt-0 mt-auto">
                    <Button
                      variant="ghost"
                      size="sm"
                      className="px-0 hover:bg-transparent text-primary hover:text-primary/80 group/btn font-medium text-sm flex items-center gap-1.5"
                      asChild
                    >
                      <a
                        href={post.link}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Read Article
                        <ExternalLink
                          size={13}
                          className="transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5"
                        />
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>

          {/* Pagination Indicators / Dots */}
          <div className="flex items-center justify-center gap-1.5 mt-4">
            {posts.map((_, idx) => (
              <button
                key={idx}
                onClick={() => scrollToIndex(idx)}
                aria-label={`Go to slide ${idx + 1}`}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  activeIndex === idx
                    ? "w-6 bg-foreground"
                    : "w-1.5 bg-muted-foreground/30 hover:bg-muted-foreground/60"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Mobile View all link */}
        <div className="mt-8 text-center sm:hidden">
          <Button variant="outline" size="sm" asChild className="gap-2">
            <a
              href="https://medium.com/@devamkumar"
              target="_blank"
              rel="noopener noreferrer"
            >
              <BookOpen size={14} />
              View all on Medium
              <ExternalLink size={12} />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
