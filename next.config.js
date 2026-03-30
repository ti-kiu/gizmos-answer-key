/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/homework',
        destination: '/?mode=homework',
        permanent: false,
      },
    ]
  },
  images: {
    unoptimized: true,
  },
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        process: false,
      }
    }
    return config
  },
}

module.exports = nextConfig
