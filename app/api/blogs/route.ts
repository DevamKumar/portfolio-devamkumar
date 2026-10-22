import { NextResponse } from "next/server";
import fallbackBlogs from "@/data/blogs.json";

export const revalidate = 3600;

interface RawBlogPost {
  title: string;
  link: string;
  pubDate: string;
  thumbnail?: string | null;
  category?: string;
  snippet?: string;
}

export async function GET() {
  try {
    const rssUrl = "https://medium.com/feed/@devamkumar";
    const res = await fetch(rssUrl, {
      headers: {
        "User-Agent":
          "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
        Accept: "application/rss+xml, application/xml, text/xml, */*",
      },
      next: { revalidate: 3600 },
    });

    if (!res.ok) {
      return NextResponse.json({ posts: fallbackBlogs });
    }

    const xml = await res.text();
    const itemRegex = /<item>([\s\S]*?)<\/item>/g;
    let match;
    const posts: RawBlogPost[] = [];

    while ((match = itemRegex.exec(xml)) !== null) {
      const itemContent = match[1];
      const titleMatch =
        itemContent.match(/<title><!\[CDATA\[([\s\S]*?)\]\]><\/title>/) ||
        itemContent.match(/<title>([\s\S]*?)<\/title>/);
      const linkMatch = itemContent.match(/<link>([\s\S]*?)<\/link>/);
      const pubDateMatch = itemContent.match(/<pubDate>([\s\S]*?)<\/pubDate>/);
      const categoryMatches = [
        ...itemContent.matchAll(/<category><!\[CDATA\[([\s\S]*?)\]\]><\/category>/g),
      ].map((m) => m[1]);

      const contentMatch = itemContent.match(
        /<content:encoded><!\[CDATA\[([\s\S]*?)\]\]><\/content:encoded>/
      );
      const content = contentMatch ? contentMatch[1] : "";

      let thumbnail: string | null = null;
      const imgMatches = [
        ...content.matchAll(/<img[^>]+src=["']([^"']+)["']/g),
      ];
      for (const img of imgMatches) {
        const src = img[1];
        if (!src.includes("stat?") && !src.includes("medium.com/_/stat")) {
          thumbnail = src;
          break;
        }
      }

      const textSnippet = content
        .replace(/<figure[\s\S]*?<\/figure>/gi, "")
        .replace(/<[^>]+>/g, " ")
        .replace(/\s+/g, " ")
        .trim()
        .slice(0, 150);

      const rawCategory = categoryMatches[0] || "Architecture";
      const formattedCategory = rawCategory
        .split("-")
        .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
        .join(" ");

      posts.push({
        title: titleMatch ? titleMatch[1].trim() : "",
        link: linkMatch ? linkMatch[1].trim() : "",
        pubDate: pubDateMatch ? pubDateMatch[1].trim() : "",
        thumbnail,
        category: formattedCategory,
        snippet: textSnippet ? `${textSnippet}...` : "",
      });
    }

    if (posts.length > 0) {
      return NextResponse.json({ posts });
    }

    return NextResponse.json({ posts: fallbackBlogs });
  } catch {
    return NextResponse.json({ posts: fallbackBlogs });
  }
}
