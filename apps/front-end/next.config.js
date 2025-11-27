/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',

        hostname: process.env.NEXT_PUBLIC_GATEWAY_URL, // e.g., 'purple-monkey.mypinata.cloud'
        port: '',
        pathname: '/ipfs/**',
      },
    ],
  },
};

export default nextConfig;
