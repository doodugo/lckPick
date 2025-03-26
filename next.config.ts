import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
    async redirects() {
        return [
            {
                source: "/",
                destination: "/pick",
                permanent: true
            }
        ]
    },
    async rewrites() {
        return [
            {
                source: '/api/lol/:path*',
                destination: 'http://158.179.167.60/lol/:path*'
            }
        ]
    }
};

export default nextConfig;
