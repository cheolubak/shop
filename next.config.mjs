/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: 'placeimg.com',
        protocol: 'https',
      },
    ],
  },
};

export default nextConfig;
