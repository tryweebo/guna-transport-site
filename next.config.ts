import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  experimental: {
    optimizePackageImports: ['@flaticon/flaticon-uicons'],
  },
  images: {
    remotePatterns: [
      { hostname: 'cdn.hashnode.com' },
      { hostname: 'camo.githubusercontent.com' },
    ],
  },
  skipTrailingSlashRedirect: true,
  transpilePackages: [],
}

export default nextConfig
