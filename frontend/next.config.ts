import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  devIndicators: false,

  // Enable React strict mode (good for catching bugs)
  reactStrictMode: true,

  // Allow images from external backend if needed
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "django-backend-production-5bc6.up.railway.app",
      },
    ],
  },


};

export default nextConfig;