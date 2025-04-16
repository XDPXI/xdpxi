/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  compress: true,
  productionBrowserSourceMaps: false,
  experimental: {
    optimizeCss: true,
    scrollRestoration: true,
  },
  env: {
    STATSIG_SDK_KEY: process.env.STATSIG_SDK_KEY,
  },
};

export default nextConfig;
