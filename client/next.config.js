/** @type {import('next').NextConfig} */

const nextConfig = {
  images: {
    domains: ['images.pexels.com', 'i.pinimg.com'],
  },
  env: {
    GRAPHQL_ENDPOINT_DOCKER: 'http://server:3000/graphql',
    ENVIRONMENT: 'development',
    GRAPHQL_ENDPOINT: 'http://localhost:3000/graphql',
  },
};

module.exports = nextConfig;
