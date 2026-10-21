import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const url = req.nextUrl.searchParams.get("url");
  if (!url) {
    return NextResponse.json({ error: "url required" }, { status: 400 });
  }

  try {
    // Follow the redirect of the short link to get the canonical URL
    const res = await fetch(url, {
      redirect: "follow",
      headers: {
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"
      },
      cache: "no-store",
    });
    
    const finalUrl = res.url;
    // Extract the video ID from the final URL (e.g., .../video/7291234567890123456)
    const match = finalUrl.match(/\/video\/(\d+)/);
    
    if (match && match[1]) {
      return NextResponse.json({ videoId: match[1] });
    }
    
    return NextResponse.json({ error: "Could not extract video ID" }, { status: 400 });
  } catch (error) {
    console.error("TikTok resolve error:", error);
    return NextResponse.json({ error: "Failed to resolve URL" }, { status: 500 });
  }
}
