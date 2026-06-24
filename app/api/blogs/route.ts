import { NextResponse } from "next/server";

export const revalidate = 3600;

export async function GET() {
  try {
    const rssUrl = "https://medium.com/feed/@devamkumar";
    const res = await fetch(
      `https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(rssUrl)}`,
      { next: { revalidate: 3600 } }
    );

    if (!res.ok) {
      return NextResponse.json({ posts: [] });
    }

    const data = await res.json();

    if (data.status !== "ok") {
      return NextResponse.json({ posts: [] });
    }

    const posts = (data.items || []).map((item: { title: string; link: string; pubDate: string; thumbnail?: string }) => ({
      title: item.title,
      link: item.link,
      pubDate: item.pubDate,
      thumbnail: item.thumbnail || null,
    }));

    return NextResponse.json({ posts });
  } catch {
    return NextResponse.json({ posts: [] });
  }
}
