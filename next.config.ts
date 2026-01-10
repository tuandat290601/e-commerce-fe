import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [new URL('https://caulongnamha.vn/image/**')],
}
};

export default nextConfig;
