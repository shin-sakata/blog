"use client";

import type { PageMapItem } from "nextra";
import { Footer, Layout, Navbar, ThemeSwitch } from "nextra-theme-blog";

export function BlogShell({
  children,
  pageMap,
}: {
  children: React.ReactNode;
  pageMap: PageMapItem[];
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
      <Footer>© {new Date().getFullYear()} Shin</Footer>
    </Layout>
  );
}


