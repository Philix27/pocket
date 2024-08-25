// @ts-check
import withSerwistInit from '@serwist/next';

// You may want to use a more robust revision to cache
// files more efficiently.
// A viable option is `git rev-parse HEAD`.
const revision = crypto.randomUUID();

const withSerwist = withSerwistInit({
  cacheOnNavigation: true,
  swSrc: 'app/sw.ts',
  swDest: 'public/sw.js',
  additionalPrecacheEntries: [{ url: '/~offline', revision }],
});

const rulesToProcess = [/\.m?js/, /\.(js|cjs|mjs)$/].map(String);
const dirToIgnore = /server/;
/** @type {import("next").NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'md', 'mdx'],
  webpack: (config) => {
    config.module.rules = config.module.rules.map((rule) => {
      if (rule !== '...' && rulesToProcess.indexOf(String(rule.test)) > -1) {
        rule.exclude = [dirToIgnore];
      }
      return rule;
    });
    return config;
  },
};

export default withSerwist(nextConfig);
