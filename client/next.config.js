/** @type {import('next').NextConfig} */

const nextConfig = {
  images: {
    domains: ['images.pexels.com', 'i.pinimg.com'],
  },
  env: {
    GRAPHQL_ENDPOINT: 'http://server:3000/graphql',
    ENVIRONMENT: 'development',
  },
  modularizeImports: {
    'react-icons': {
      transform: 'react-icons/{{member}}',
    },
  },
};

module.exports = nextConfig;
