import os from "os";
import type { NextConfig } from "next";

const isWindows = os.platform() === "win32";

const nextConfig: NextConfig = {
  compress: true,
  reactStrictMode: true,
  productionBrowserSourceMaps: true,
  output: isWindows ? undefined : "standalone",

  experimental: {
    routerBFCache: true,
  },

  images: {
    unoptimized: false,
    formats: ["image/avif", "image/webp"],
    minimumCacheTTL: 60,
  },
};

export default nextConfig;
