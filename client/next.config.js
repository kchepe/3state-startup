/** @type {import('next').NextConfig} */

const nextConfig = {
  images: {
    domains: ['images.pexels.com', 'i.pinimg.com'],
  },
  env: {
    GRAPHQL_ENDPOINT: 'http://server:3000/graphql',
    ENVIRONMENT: 'development',
  },
};

module.exports = nextConfig;
