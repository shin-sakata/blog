import type { NextConfig } from "next";
import nextra from "nextra";

const withNextra = nextra({
  readingTime: true,
});

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

const nextConfig: NextConfig = {
  reactCompiler: true,
  pageExtensions: ["ts", "tsx", "js", "jsx", "md", "mdx"],

  // GitHub Pages向け（静的ホスティング）
  output: "export",
  trailingSlash: true,
  images: { unoptimized: true },

  // プロジェクトページの場合は /<repo> を付ける（Actions側で自動設定）
  basePath,
  assetPrefix: basePath,
};

export default withNextra(nextConfig);
