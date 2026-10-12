"use client";

import type { VideoPlatform } from "@/lib/videos";

type Video = {
  url: string;
  title?: string;
};

type EmbedInfo = {
  platform: VideoPlatform;
  src: string;
  aspect: "video" | "portrait";
};

function getEmbedInfo(url: string): EmbedInfo | null {
  // YouTube — watch, embed, shorts, youtu.be
  const yt = url.match(
    /(?:youtube\.com\/(?:watch\?v=|embed\/|shorts\/)|youtu\.be\/)([a-zA-Z0-9_-]{11})/
  );
  if (yt) {
    return {
      platform: "youtube",
      src: `https://www.youtube.com/embed/${yt[1]}`,
      aspect: "video",
    };
  }

  // Instagram — p, reel, tv
  const ig = url.match(/instagram\.com\/(?:p|reel|tv)\/([a-zA-Z0-9_-]+)/);
  if (ig) {
    return {
      platform: "instagram",
      src: `https://www.instagram.com/p/${ig[1]}/embed`,
      aspect: "portrait",
    };
  }

  // TikTok — /@user/video/ID or /@user/photo/ID
  const tt = url.match(/tiktok\.com\/@[^/]+\/(?:video|photo)\/(\d+)/);
  if (tt) {
    return {
      platform: "tiktok",
      src: `https://www.tiktok.com/embed/v2/${tt[1]}`,
      aspect: "portrait",
    };
  }

  // Facebook — anything on facebook.com or fb.watch
  if (/facebook\.com|fb\.watch/i.test(url)) {
    return {
      platform: "facebook",
      src: `https://www.facebook.com/plugins/video.php?href=${encodeURIComponent(
        url
      )}&show_text=false&width=560`,
      aspect: "video",
    };
  }

  return null;
}

export default function VideoEmbed({ video }: { video: Video }) {
  const info = getEmbedInfo(video.url);

  if (!info) {
    return (
      <div className="w-full aspect-video rounded-xl border border-dashed border-gray-300 bg-gray-50 flex items-center justify-center text-xs text-gray-500 px-4 text-center">
        Unsupported video URL. Supported: YouTube, Instagram, TikTok,
        Facebook.
      </div>
    );
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

  // Portrait — Instagram, TikTok
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