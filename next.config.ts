import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  output: 'export', // Enable static export for deployment
  trailingSlash: true, // recommandé pour éviter les 404
};

export default nextConfig;
