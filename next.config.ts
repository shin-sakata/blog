import type { NextConfig } from "next";
import nextra from "nextra";

const withNextra = nextra({
  readingTime: true,
});

const nextConfig: NextConfig = {
  reactCompiler: true,
  pageExtensions: ["ts", "tsx", "js", "jsx", "md", "mdx"],
};

export default withNextra(nextConfig);
