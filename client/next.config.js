/** @type {import('next').NextConfig} */

const nextConfig = {
  images: {
    domains: [
      'images.pexels.com',
      'i.pinimg.com',
      '3state-development.s3.ap-southeast-1.amazonaws.com',
    ],
  },
  env: {
    ENVIRONMENT: 'development',
  },
};

module.exports = nextConfig;
