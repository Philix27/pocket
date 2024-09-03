/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'mdx'],
  reactStrictMode: true,
  experimental: {
    mdxRs: true,
    serverComponentsExternalPackages: ['@xmtp/user-preferences-bindings-wasm'],
  },
  webpack: (config) => {
    config.externals.push('pino-pretty', 'lokijs', 'encoding');
    return config;
  },
};

import mdx from '@next/mdx';
// const withMDX = mdx();
const config = mdx(nextConfig);
export default config;
