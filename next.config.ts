import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      // Existing redirects
      { source: "/pharmacy", destination: "/services/physio-shop", permanent: true },
      { source: "/clinical-services", destination: "/services", permanent: true },
      { source: "/counselling-services", destination: "/services/counselling-services", permanent: true },

      // Old WordPress URLs -> new pages
      { source: "/service-packages", destination: "/packages", permanent: true },
      { source: "/physiotherapy", destination: "/services/physiotherapy", permanent: true },
      { source: "/chiropractor-services", destination: "/services/chiropractor-services", permanent: true },
      { source: "/stellar-laboratory-services", destination: "/services/stellar-laboratory-services", permanent: true },
      { source: "/mental-health-services", destination: "/services/counselling-services", permanent: true },

      // Branches
      { source: "/parklands-sports-club", destination: "/branches/parklands-sports-club", permanent: true },
      { source: "/karen-country-club", destination: "/branches/karen-country-club", permanent: true },
      { source: "/kenital-plaza-ngong-road", destination: "/branches/kenital-plaza", permanent: true },

      // Conditions
      { source: "/lower-back-pain-spine-health", destination: "/conditions/lower-back-pain-spine-health", permanent: true },
      { source: "/lower-back-pain-spine-treatment-stellar-physio-nairobi", destination: "/conditions/lower-back-pain-spine-health", permanent: true },
      { source: "/developmental-milestones-for-autism-cerebral-palsy", destination: "/conditions/developmental-milestones", permanent: true },
    ];
  },
};

export default nextConfig;
