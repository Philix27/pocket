/** @type {import('next').NextConfig} */

const nextConfig = {
  pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'mdx'],
  reactStrictMode: true,
  experimental: {
    mdxRs: true,
    nextScriptWorkers: true,
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

const withMDX = mdx();
// const config = mdx(nextConfig);

const finalConfig = withMDX(nextConfig);
// export default withPWA(config);

// export default config;
export default finalConfig;
