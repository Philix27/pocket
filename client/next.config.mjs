import { withSentryConfig } from '@sentry/nextjs';
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
    serverComponentsExternalPackages: ['@xmtp/user-preferences-bindings-wasm'],
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
import withPWAInit from '@ducanh2912/next-pwa';

const withMDX = mdx();
// const config = mdx(nextConfig);

const withPWA = withPWAInit({
  dest: 'public',
});
const config = withPWA(nextConfig);

const finalConfig = withMDX(config);
// export default withPWA(config);

// export default config;
export default withSentryConfig(finalConfig, {
  // For all available options, see:
  // https://github.com/getsentry/sentry-webpack-plugin#options

  org: 'xpensa',
  project: 'javascript-nextjs',
  sentryUrl: 'https://sentry.io/',

  // Only print logs for uploading source maps in CI
  silent: !process.env.CI,

  // For all available options, see:
  // https://docs.sentry.io/platforms/javascript/guides/nextjs/manual-setup/

  // Upload a larger set of source maps for prettier stack traces (increases build time)
  widenClientFileUpload: true,

  // Automatically annotate React components to show their full name in breadcrumbs and session replay
  reactComponentAnnotation: {
    enabled: true,
  },

  // Route browser requests to Sentry through a Next.js rewrite to circumvent ad-blockers.
  // This can increase your server load as well as your hosting bill.
  // Note: Check that the configured route will not match with your Next.js middleware, otherwise reporting of client-
  // side errors will fail.
  tunnelRoute: '/monitoring',

  // Hides source maps from generated client bundles
  hideSourceMaps: true,

  // Automatically tree-shake Sentry logger statements to reduce bundle size
  disableLogger: true,

  // Enables automatic instrumentation of Vercel Cron Monitors. (Does not yet work with App Router route handlers.)
  // See the following for more information:
  // https://docs.sentry.io/product/crons/
  // https://vercel.com/docs/cron-jobs
  automaticVercelMonitors: true,
});
