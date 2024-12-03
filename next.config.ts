import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  experimental: {
    optimizePackageImports: ['@flaticon/flaticon-uicons'],
  },
  images: {
    remotePatterns: [
      { hostname: 'cdn.hashnode.com' },
      { hostname: 'images.unsplash.com' },
    ],
  },
  skipTrailingSlashRedirect: true,
  transpilePackages: [],
}

export default nextConfig
