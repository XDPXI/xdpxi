/** @type {import('next').NextConfig} */

export default {
  reactStrictMode: true,
  poweredByHeader: false,
  compress: true,
  productionBrowserSourceMaps: false,
  experimental: {
    optimizeCss: true,
    scrollRestoration: true,
  },
};
