/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  // NO output: 'export' - causes issues
  // NO experimental features
}

module.exports = nextConfig
