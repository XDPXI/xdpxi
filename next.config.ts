import type {NextConfig} from "next";

const nextConfig: NextConfig = {
    reactStrictMode: true,
    poweredByHeader: false,
    compress: true,
    productionBrowserSourceMaps: false,
    experimental: {
        optimizeCss: true,
        scrollRestoration: true,
    },
    async headers() {
        return [
            {
                source: "/imgs/:file*",
                headers: [
                    {
                        key: "Cache-Control",
                        value: "public, max-age=31536000, immutable"
                    }
                ]
            },
            {
                source: "/webfonts/:file*",
                headers: [
                    {
                        key: "Cache-Control",
                        value: "public, max-age=31536000, immutable"
                    }
                ]
            }
        ];
    }
};

export default nextConfig;
