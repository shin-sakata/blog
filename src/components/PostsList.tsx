import type { MdxFile, PageMapItem } from "nextra";
import { getPageMap } from "nextra/page-map";
import { PostCard } from "nextra-theme-blog";

function collectMdxFiles(items: PageMapItem[]): MdxFile[] {
  const out: MdxFile[] = [];
  for (const item of items) {
    if ("children" in item) {
      out.push(...collectMdxFiles(item.children));
      continue;
    }
    if ("data" in item) continue; // _meta.json
    out.push(item);
  }
  return out;
}

export async function PostsList() {
  const pageMap = await getPageMap();
  const mdxFiles = collectMdxFiles(pageMap);

  const posts = mdxFiles
    .filter((p) => p.route.startsWith("/posts/"))
    .map((p) => ({ route: p.route, frontMatter: p.frontMatter ?? {} }))
    .sort((a, b) => {
      const aDate = Date.parse(String(a.frontMatter.date ?? ""));
      const bDate = Date.parse(String(b.frontMatter.date ?? ""));
      return (Number.isFinite(bDate) ? bDate : 0) - (Number.isFinite(aDate) ? aDate : 0);
    });

  return (
    <div className="x:not-prose x:mt-10 x:flex x:flex-col x:gap-6">
      {posts.map((post) => (
        <PostCard key={post.route} post={post as any} />
      ))}
    </div>
  );
}


