import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  // output: 'export', // Removed to allow dynamic routes
  trailingSlash: true, // recommandé pour éviter les 404
};

export default nextConfig;
