/** @type {import('next').NextConfig} */
const nextConfig = {
  // Removed static export to support API routes for admin panel
  // For production, run: npm run build && npm start
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  // Allow server actions
  experimental: {
    serverActions: {
      allowedOrigins: ['localhost:3005', 'vanesasellingcomics.online'],
    },
  },
};

export default nextConfig;
