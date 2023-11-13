/** @type {import('next').NextConfig} */
const { i18n } = require('./next-i18next.config')

const nextConfig = {
  i18n,
  reactStrictMode: true,
  swcMinify: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "i.pinimg.com",
        port: "",
        pathname: "/564x/f2/43/2e/f2432e0cccca7e6909e3d626eef45c89.jpg",
      },
    ],
  },
}

module.exports = nextConfig
