"use client";

import Script from "next/script";

export default function GoogleReviews() {
  return (
    <>
      <div className="blootrue-widget-UEoQui54YpA-">
        <noscript>
          <a
            href="https://www.blootrue.com/widgets/google?utm_source=widget&utm_medium=embed&utm_campaign=powered_by"
            rel="nofollow noopener"
            target="_blank"
          >
            BlooTrue
          </a>
        </noscript>
      </div>
      <Script
        src="https://api.blootrue.com/api/widgets/platform.js"
        strategy="afterInteractive"
      />
    </>
  );
}
