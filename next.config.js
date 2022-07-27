/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "images.unsplash.com",
      "firebasestorage.googleapis.com",
      "speedhunters-wp-production.s3.amazonaws.com",
      "lh3.googleusercontent.com",
    ],
  },
};

module.exports = nextConfig;
