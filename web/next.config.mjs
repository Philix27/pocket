/** @type {import('next').NextConfig} */

const securityHeaders = [
  {
    key: 'X-XSS-Protection',
    value: '1; mode=block',
  },
  {
    key: 'X-Frame-Options',
    value: 'DENY',
  },
  {
    key: 'X-Content-Type-Options',
    value: 'nosniff',
  },
  {
    key: 'Referrer-Policy',
    value: 'strict-origin-when-cross-origin',
  },
  // // TODO remove imgsrc githubcontent when use-ck updated with celo terminal icon
  // {
  //   key: 'Content-Security-Policy',
  //   value: `default-src 'self'; script-src 'self'${
  //     isDev ? " 'unsafe-eval'" : ''
  //   }; connect-src 'self' https://*.celo.org https://*.celo-testnet.org https://*.walletconnect.com wss://walletconnect.celo.org wss://*.walletconnect.com wss://*.walletconnect.org https://raw.githubusercontent.com; img-src 'self' data: https://raw.githubusercontent.com https://*.walletconnect.com; style-src 'self' 'unsafe-inline'; font-src 'self' data:; base-uri 'self'; form-action 'self'; frame-src 'self' https://*.walletconnect.com`,
  // },
];

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
  async rewrites() {
    return [
      {
        source: '/:any*',
        destination: '/',
      },
    ];
  },

  async headers() {
    return [
      {
        source: '/(.*)',
        headers: securityHeaders,
      },
    ];
  },
};

import mdx from '@next/mdx';

const withMDX = mdx();
// const config = mdx(nextConfig);

const finalConfig = withMDX(nextConfig);
// export default withPWA(config);

// export default config;
export default finalConfig;
