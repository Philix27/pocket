/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'mdx'],
  reactStrictMode: true,
  experimental: {
    mdxRs: true,
    serverComponentsExternalPackages: ['@xmtp/user-preferences-bindings-wasm'],
    optimizePackageImports: ['react-icons'],
  },
  webpack: (config, options) => {
    config.externals.push('pino-pretty', 'lokijs', 'encoding');
    config.experiments = {
      asyncWebAssembly: true,
      syncWebAssembly: true,
      layers: true,
    };
    return config;
  },
};

import mdx from '@next/mdx';
import withPWAInit from '@ducanh2912/next-pwa';
import analyzer from '@next/bundle-analyzer';

const withMDX = mdx();
// const config = mdx(nextConfig);

const withPWA = withPWAInit({
  dest: 'public',
});
const pwaConfig = withPWA(nextConfig);

const mdxConfig = withMDX(pwaConfig);
// export default withPWA(config);

// export default config;

const withBundleAnalyzer = analyzer({
  enabled: process.env.ANALYZE === 'true',
});

export default withBundleAnalyzer(mdxConfig);

// "fhenixjs": "^0.2.1",
