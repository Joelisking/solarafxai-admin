import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'drive.google.com',
      },
      {
        protocol: 'https',
        hostname: 'cdn.sanity.io',
      },
    ],
  },
  // async headers() {
  //   return [
  //     {
  //       source: '/api/:path*',
  //       headers: [
  //         { key: 'Access-Control-Allow-Origin', value: '*' },
  //         {
  //           key: 'Access-Control-Allow-Methods',
  //           value: 'GET, POST, PUT, DELETE, OPTIONS',
  //         },
  //         {
  //           key: 'Access-Control-Allow-Headers',
  //           value: 'Content-Type',
  //         },
  //       ],
  //     },
  //   ];
  // },
};

export default nextConfig;
