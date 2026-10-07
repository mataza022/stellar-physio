"use client";

type Video = {
  url: string;
  title?: string;
};

function parseVideoUrl(url: string) {
  // YouTube: youtu.be/ID, youtube.com/watch?v=ID, youtube.com/embed/ID, youtube.com/shorts/ID
  const yt = url.match(
    /(?:youtube\.com\/(?:watch\?v=|embed\/|shorts\/)|youtu\.be\/)([a-zA-Z0-9_-]{11})/
  );
  if (yt) {
    return {
      platform: "youtube" as const,
      src: `https://www.youtube.com/embed/${yt[1]}`,
    };
  }

  // Instagram: /p/SHORTCODE, /reel/SHORTCODE, /tv/SHORTCODE
  const ig = url.match(/instagram\.com\/(?:p|reel|tv)\/([a-zA-Z0-9_-]+)/);
  if (ig) {
    return {
      platform: "instagram" as const,
      src: `https://www.instagram.com/p/${ig[1]}/embed`,
    };
  }

  return null;
}

export default function VideoEmbed({ video }: { video: Video }) {
  const info = parseVideoUrl(video.url);
  if (!info) return null;

  if (info.platform === "youtube") {
    return (
      <div className="w-full aspect-video rounded-xl overflow-hidden shadow-sm bg-black">
        <iframe
          src={info.src}
          title={video.title || "YouTube video"}
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
        title={video.title || "Instagram post"}
        allowFullScreen
        loading="lazy"
        scrolling="no"
        className="w-full max-w-[420px] h-[600px] rounded-xl border-0 shadow-sm bg-white"
      />
    </div>
  );
}