/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "images.unsplash.com",
      "firebasestorage.googleapis.com",
      "speedhunters-wp-production.s3.amazonaws.com",
    ],
  },
};

module.exports = nextConfig;
