/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'purple-monkey.mypinata.cloud', // literal string required
        port: '',
        pathname: '/ipfs/**',
      },
    ],
  },
};

export default nextConfig;
