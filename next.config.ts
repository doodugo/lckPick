import type { NextConfig } from "next";
const path = require('path');


const nextConfig: NextConfig = {
  /* config options here */
    webpack: (config) => {
        config.resolve.alias = {
            ...config.resolve.alias,
            '@': path.resolve(__dirname, 'src'),
        };
        return config;
    },
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
                source: '/lol/champion/:path*',
                destination: 'http://158.179.167.60/api/lol/champions/:path*/',
            },
            {
                source: '/lol/team-composition/:path*',
                destination: 'http://158.179.167.60/api/lol/team-compositions/:path*/',
            },
        ]
    },
};

export default nextConfig;
