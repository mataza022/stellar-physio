"use client";

import { useEffect } from "react";

export default function GoogleReviews() {
  useEffect(() => {
    const existingScript = document.querySelector(
      'script[src="https://api.blootrue.com/api/widgets/platform.js"]'
    );
    if (!existingScript) {
      const script = document.createElement("script");
      script.src = "https://api.blootrue.com/api/widgets/platform.js";
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  return (
    <div className="w-full">
      <div className="blootrue-widget-UEoQui54YpA- w-full">
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
    </div>
  );
}
