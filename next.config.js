/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: { ignoreDuringBuilds: true },
  typescript: { ignoreBuildErrors: true },
  async redirects() {
    return [
      { source: '/pricing',     destination: '/membership', permanent: true },
      { source: '/contact',     destination: '/membership', permanent: true },
      { source: '/book-a-tour', destination: 'https://conviviawork.coworksapp.com/tour-request/716', permanent: true },
    ]
  },
}

module.exports = nextConfig
