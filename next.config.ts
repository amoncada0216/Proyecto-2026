import createNextIntlPlugin from "next-intl/plugin";
import type { NextConfig } from "next";

const withNextIntl = createNextIntlPlugin();
const basePath = process.env.PAGES_BASE_PATH ?? "";

const nextConfig: NextConfig = {
  basePath,
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
  images: {
    unoptimized: true,
  },
  output: "export",
  trailingSlash: true,
  typedRoutes: true,
};

export default withNextIntl(nextConfig);
