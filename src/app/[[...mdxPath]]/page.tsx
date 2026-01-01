import type { Metadata } from "next";
import { generateStaticParamsFor, importPage } from "nextra/pages";
import { useMDXComponents } from "@/mdx-components";

export const generateStaticParams = generateStaticParamsFor("mdxPath");

// nextra-theme-blog は wrapper を追加するが、型定義が追いついていないため any で扱う
const Wrapper = (useMDXComponents() as any).wrapper;

export async function generateMetadata({
  params,
}: {
  params: { mdxPath?: string[] };
}): Promise<Metadata> {
  const { metadata } = await importPage(params.mdxPath ?? []);
  return {
    title: metadata.title,
    description: metadata.description,
  };
}

export default async function Page({
  params,
}: {
  params: { mdxPath?: string[] };
}) {
  const result = await importPage(params.mdxPath ?? []);
  const { default: MDXContent, toc, metadata } = result;

  return (
    <Wrapper toc={toc} metadata={metadata}>
      <MDXContent params={params} />
    </Wrapper>
  );
}


