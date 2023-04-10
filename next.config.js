/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  env: {
    API_URL: "http://localhost:3000",
    DB_URI:
      "mongodb+srv://terryTimeline:terry.TimelineOne000@cluster0.osdxp.mongodb.net/timeline?retryWrites=true&w=majority",
    NEXTAUTH_SECRET: "terryLovesDuda",
  },
  images: {
    domains: [
      "dribbble.com",
      "cdn.dribbble.com",
      "lh3.googleusercontent.com",
      "unsplash.com",
      "images.unsplash.com",
      "platform-lookaside.fbsbx.com",
      "res.cloudinary.com",
    ],
  },
};

module.exports = nextConfig;
