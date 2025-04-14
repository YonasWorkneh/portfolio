import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: ["e7.pngegg.com"],
  },
  devIndicators: {
    appIsrStatus: false,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
