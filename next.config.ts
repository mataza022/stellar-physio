import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      { source: "/pharmacy", destination: "/services/physio-shop", permanent: true },
      { source: "/clinical-services", destination: "/services", permanent: true },
      { source: "/counselling-services", destination: "/services/counselling-services", permanent: true },
    ];
  },
};

export default nextConfig;
