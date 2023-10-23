/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    GOOGLE_API_KEY: "AIzaSyDJSb_pP17DaiaqPkKygWaseijpuwq9qVM",
    TOM_TOM: "rKQOvSWb5WRcI826HMCl5W82PMDxhDqM",
    P24_ID: "27407",
    P24_API: "1b647ca2cb4ddb4fafcd7683fc40fba6",
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "static.przelewy24.pl",
      },
    ],
  },
  experimental: {
    serverActions: true,
  },
};

module.exports = nextConfig;
