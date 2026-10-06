"use client";

import Script from "next/script";

export default function GoogleReviews() {
  return (
    <>
      <Script
        src="https://elfsightcdn.com/platform.js"
        strategy="lazyOnload"
      />
      <div
        className="elfsight-app-d8060bbd-9bae-40a8-b9de-fb2fb440559b"
        data-elfsight-app-lazy
      />
    </>
  );
}