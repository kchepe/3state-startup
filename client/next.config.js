/** @type {import('next').NextConfig} */

const nextConfig = {
  images: {
    domains: ['images.pexels.com', 'i.pinimg.com'],
  },
  env: {
    GRAPHQL_ENDPOINT_SERVER: 'http://server:3000/graphql',
    GRAPHQL_ENDPOINT_CLIENT: 'http://localhost:3000/graphql',
    ENVIRONMENT: 'development',
  },
};

module.exports = nextConfig;
