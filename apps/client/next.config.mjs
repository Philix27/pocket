/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ["js", "jsx", "ts", "tsx", "mdx"],
  reactStrictMode: true,
  experimental: {
    mdxRs: true,
    serverComponentsExternalPackages: ["@xmtp/user-preferences-bindings-wasm"],
  },
  webpack: (config, options) => {
    config.externals.push("pino-pretty", "lokijs", "encoding");
    config.experiments = {
      asyncWebAssembly: true,
      syncWebAssembly: true,
      layers: true,
    };
    return config;
  },
};

import mdx from "@next/mdx";
import withPWAInit from "@ducanh2912/next-pwa";

const withMDX = mdx();
// const config = mdx(nextConfig);

const withPWA = withPWAInit({
  dest: "public",
});
const config = withPWA(nextConfig);

const finalConfig = withMDX(config);
// export default withPWA(config);

// export default config;
export default finalConfig;
