/** @type {import('next').NextConfig} */
const { withPlausibleProxy } = require("next-plausible");

const nextConfig = {
  experimental: {
    appDir: true,
  },
};

const withPlausible = withPlausibleProxy();

module.exports = withPlausible(nextConfig);
