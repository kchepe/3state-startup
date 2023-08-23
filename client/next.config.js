/** @type {import('next').NextConfig} */

const nextConfig = {
  images: {
    domains: ['images.pexels.com', 'i.pinimg.com'],
  },
  env: {
    ENVIRONMENT: 'development',
  },
};

module.exports = nextConfig;
