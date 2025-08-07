import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true, // recommandé pour éviter les 404
};

export default nextConfig;
