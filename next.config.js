/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    // !! WARN !!
    // Dangerously allow production builds to successfully complete even if
    // your project has type errors.
    // !! WARN !!
    ignoreBuildErrors: true,
  },
  experimental: {
    appDir: true,
  },
  basePath: '/foughali', // Replace with your GitHub repository name
  assetPrefix: '/foughali/', // Replace with your GitHub repository name
  trailingSlash: true, // Ensures URLs end with a trailing slash
};

module.exports = nextConfig;

