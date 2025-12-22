import { unified } from "unified";
import "github-markdown-css/github-markdown-light.css";
import matter from "gray-matter";
import { Buffer } from "buffer";

// remark
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";

// rehype
import rehypeStringify from "rehype-stringify";
import rehypeKatex from "rehype-katex";
import remarkMath from "remark-math";
import rehypePrettyCode from "rehype-pretty-code";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypeSlug from "rehype-slug";
import "katex/dist/katex.min.css";
import type { LoaderFunctionArgs } from "react-router";

(window as any).Buffer = Buffer;

function timeout(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export async function blogLoader({ params }: LoaderFunctionArgs) {
  try {
    const { blogTitle } = params;
    if (!blogTitle) {
      throw new Error("Not found");
    }

    const path = `../posts/${blogTitle}.md`;
    const allPaths = import.meta.glob("../posts/*.md", {
      query: "?raw",
      import: "default",
    });

    const raw = await allPaths[path](); // raw is string
    const { content } = matter(raw);

    const html = await unified()
      .use(remarkParse)
      .use(remarkMath)
      .use(remarkRehype)
      .use(rehypeSlug)
      .use(rehypeKatex)
      .use(rehypePrettyCode, {
        grid: false,
        theme: "github-light",
      })
      .use(rehypeAutolinkHeadings, {
        behavior: "wrap",
        properties: { className: "heading-anchor" },
      })
      .use(rehypeStringify)
      .process(content);

    await timeout(2000); // waits for 2 seconds
    // remark (parsing markdown)
    // rehype (highlighting)
    return String(html);
  } catch (err) {
    return String("Not found");
  }
}
