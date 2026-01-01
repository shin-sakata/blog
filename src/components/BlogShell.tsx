"use client";

import type { PageMapItem } from "nextra";
import { Footer, Layout, Navbar, ThemeSwitch } from "nextra-theme-blog";

export function BlogShell({
  children,
  pageMap,
  year,
}: {
  children: React.ReactNode;
  pageMap: PageMapItem[];
  year: number;
}) {
  return (
    <Layout
      nextThemes={{ defaultTheme: "system", enableSystem: true }}
      banner={
        <Navbar pageMap={pageMap}>
          <ThemeSwitch />
        </Navbar>
      }
    >
      {children}
      <Footer>© {year} Shin</Footer>
    </Layout>
  );
}
