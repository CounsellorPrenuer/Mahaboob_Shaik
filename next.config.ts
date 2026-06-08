import type { NextConfig } from "next";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || (process.env.NODE_ENV === "production" ? "/Mahaboob_Shaik" : "");

const nextConfig: NextConfig = {
  output: "export",
  basePath,
  assetPrefix: basePath ? `${basePath}/` : undefined,
  trailingSlash: true,
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
      },
    ],
  },
};

export default nextConfig;
