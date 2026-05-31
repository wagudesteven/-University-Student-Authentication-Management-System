import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  devIndicators: false,

  allowedDevOrigins: [
    "192.168.181.145",
    "192.168.180.80",
    "localhost",
  ],
};

export default nextConfig;