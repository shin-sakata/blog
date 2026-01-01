import type { Metadata } from "next";
import type { PageMapItem } from "nextra";
import { getPageMap } from "nextra/page-map";
import "nextra-theme-blog/style.css";
import { BlogShell } from "@/components/BlogShell";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Shin Blog",
    template: "%s | Shin Blog",
  },
  description: "Shinの個人ブログ",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pageMap = (await getPageMap()) as PageMapItem[];

  return (
    <html lang="ja">
      <body>
        <BlogShell pageMap={pageMap}>{children}</BlogShell>
      </body>
    </html>
  );
}
