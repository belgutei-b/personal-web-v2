import { unified } from "unified";
import "github-markdown-css/github-markdown-light.css";
import "github-markdown-css/github-markdown-dark.css";
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
import type { BlogType } from "../types/blog.types";

(window as any).Buffer = Buffer;

// function timeout(ms: number) {
//   return new Promise((resolve) => setTimeout(resolve, ms));
// }

export async function blogLoader(
  blogTitle: string | undefined,
  isDarkTheme: boolean
) {
  try {
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
        theme: isDarkTheme ? "github-dark" : "github-light",
      })
      .use(rehypeAutolinkHeadings, {
        behavior: "wrap",
        properties: { className: "heading-anchor" },
      })
      .use(rehypeStringify)
      .process(content);

    // await timeout(2000);
    // remark (parsing markdown)
    // rehype (highlighting)
    return String(html);
  } catch (err) {
    return String("Not found");
  }
}

export async function getBlogs() {
  const allPostPaths = import.meta.glob("../posts/*.md", {
    query: "?raw",
    import: "default",
  });

  const rawBlogs = Object.keys(allPostPaths).map((path) => {
    return {
      path: path.slice(9, path.length - 3),
      loadFrontmatter: allPostPaths[path] as () => Promise<string>,
    };
  });

  const blogs: BlogType[] = [];
  for (const blog of rawBlogs) {
    const raw = await blog.loadFrontmatter();
    const { data } = matter(raw);
    blogs.push({
      title: data.title || "NO TITLE",
      date: data.date || "NO DATE",
      path: blog.path,
    });
  }

  // await timeout(3000);
  return blogs;
}
