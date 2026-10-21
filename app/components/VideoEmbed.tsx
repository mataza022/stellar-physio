"use client";

import { useEffect, useState } from "react";
import type { VideoPlatform } from "@/lib/videos";

type Video = {
  url: string;
  title?: string;
};

type EmbedInfo = {
  platform: VideoPlatform;
  src: string;
  aspect: "video" | "portrait";
  isTiktok?: boolean;
};

function getEmbedInfo(url: string): EmbedInfo | null {
  const yt = url.match(
    /(?:youtube\.com\/(?:watch\?v=|embed\/|shorts\/)|youtu\.be\/)([a-zA-Z0-9_-]{11})/
  );
  if (yt) {
    return { platform: "youtube", src: `https://www.youtube.com/embed/${yt[1]}`, aspect: "video" };
  }

  const ig = url.match(/instagram\.com\/(?:p|reel|tv)\/([a-zA-Z0-9_-]+)/);
  if (ig) {
    return { platform: "instagram", src: `https://www.instagram.com/p/${ig[1]}/embed`, aspect: "portrait" };
  }

  if (/tiktok\.com/i.test(url)) {
    return { platform: "tiktok", src: "", aspect: "portrait", isTiktok: true };
  }

  if (/facebook\.com|fb\.watch/i.test(url)) {
    return {
      platform: "facebook",
      src: `https://www.facebook.com/plugins/video.php?href=${encodeURIComponent(url)}&show_text=false&width=560`,
      aspect: "video",
    };
  }

  return null;
}

function TiktokEmbed({ url }: { url: string }) {
  const [videoId, setVideoId] = useState<string | null>(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function resolveUrl() {
      try {
        const res = await fetch(`/api/tiktok-oembed?url=${encodeURIComponent(url)}`);
        const data = await res.json();
        if (data.videoId) {
          setVideoId(data.videoId);
        } else {
          setError(true);
        }
      } catch (err) {
        setError(true);
      }
    }
    resolveUrl();
  }, [url]);

  if (error) {
    return (
      <div className="w-full flex justify-center">
        <div className="w-full max-w-[325px] aspect-[9/16] rounded-xl border border-dashed border-gray-300 bg-gray-50 flex items-center justify-center text-xs text-gray-500 p-4 text-center">
          Could not load TikTok video.
        </div>
      </div>
    );
  }

  if (!videoId) {
    return (
      <div className="w-full flex justify-center">
        <div className="w-full max-w-[325px] aspect-[9/16] rounded-xl border border-dashed border-gray-300 bg-gray-50 flex items-center justify-center text-xs text-gray-500">
          Loading TikTok video...
        </div>
      </div>
    );
  }

  return (
    <div className="w-full flex justify-center">
      <iframe
        src={`https://www.tiktok.com/embed/v2/${videoId}`}
        className="w-full max-w-[325px] h-[575px] rounded-xl border-0 shadow-sm bg-white"
        allow="fullscreen"
      />
    </div>
  );
}

export default function VideoEmbed({ video }: { video: Video }) {
  const info = getEmbedInfo(video.url);

  if (!info) {
    return (
      <div className="w-full aspect-video rounded-xl border border-dashed border-gray-300 bg-gray-50 flex items-center justify-center text-xs text-gray-500 px-4 text-center">
        Unsupported video URL.
      </div>
    );
  }

  if (info.isTiktok) {
    return <TiktokEmbed url={video.url} />;
  }

  if (info.aspect === "video") {
    return (
      <div className="w-full aspect-video rounded-xl overflow-hidden shadow-sm bg-black">
        <iframe
          src={info.src}
          title={video.title || `${info.platform} video`}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          loading="lazy"
          className="w-full h-full border-0"
        />
      </div>
    );
  }

  return (
    <div className="w-full flex justify-center">
      <iframe
        src={info.src}
        title={video.title || `${info.platform} post`}
        allowFullScreen
        loading="lazy"
        scrolling="no"
        className="w-full max-w-[420px] h-[600px] rounded-xl border-0 shadow-sm bg-white"
      />
    </div>
  );
}
