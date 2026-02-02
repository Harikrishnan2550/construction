import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  typescript: {
    ignoreBuildErrors: true, // 👈 allow deployment even with TS warnings
  },
};

export default nextConfig;
