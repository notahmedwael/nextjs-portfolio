import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.corner.inc',
      },
      {
        protocol: 'https',
        hostname: 'static01.nyt.com'
      },
      {
        protocol: 'https',
        hostname: 'cdn.prod.website-files.com'
      },
      {
        protocol: 'https',
        hostname: 'images.intellipaat.com'
      },
      {
        protocol: 'https',
        hostname: 'familytreemagazine.com'
      },
      {
        protocol: 'https',
        hostname: 'cdn.searchenginejournal.com'
      },
      {
        protocol: 'https',
        hostname: 'play-lh.googleusercontent.com'
      },
      
    ],
  },
};

export default nextConfig;