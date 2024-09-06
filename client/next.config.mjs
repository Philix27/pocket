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
import withPWAInit from '@ducanh2912/next-pwa';

const withMDX = mdx();
// const config = mdx(nextConfig);

const withPWA = withPWAInit({
  dest: 'public',
});
const config = withPWA(nextConfig);

const finalConfig = mdx(config);
// export default withPWA(config);

// export default config;
export default finalConfig;
