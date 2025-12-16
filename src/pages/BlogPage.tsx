import { useParams } from "react-router";
import { useEffect, useState } from "react";
import { unified } from "unified";
import "github-markdown-css/github-markdown-light.css";

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

const allPaths = import.meta.glob("../posts/*.md", {
  query: "?raw",
  import: "default",
});

export default function BlogPage() {
  const { blogTitle } = useParams();
  const [content, setContent] = useState("");

  useEffect(() => {
    const path = `../posts/${blogTitle}.md`;

    if (allPaths[path]) {
      allPaths[path]().then(async (content) => {
        const fileHtml = await unified()
          .use(remarkParse)
          .use(remarkMath)
          .use(remarkRehype)
          .use(rehypeSlug) // add ids to headings
          .use(rehypeKatex)
          .use(rehypePrettyCode, {
            grid: false,
            theme: "catppuccin-mocha",
          })
          .use(rehypeAutolinkHeadings, {
            behavior: "wrap",
            properties: { className: "heading-anchor" },
          })
          .use(rehypeStringify)
          .process(content as string);
        setContent(String(fileHtml));
      });
    } else {
      setContent("Not found");
    }
  }, [blogTitle]);

  // remark (parsing markdown)
  // rehype (highlighting)
  return (
    <div
      className="markdown-body prose max-w-none"
      dangerouslySetInnerHTML={{ __html: content }}
    />
  );
}
