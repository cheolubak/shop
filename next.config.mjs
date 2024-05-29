/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: 'placeimg.com',
        protocol: 'https',
      },
      {
        hostname: '"i.imgur.com',
        protocol: 'https',
      },
    ],
  },
};

export default nextConfig;
