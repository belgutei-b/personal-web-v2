import { useParams } from "react-router";
import { useEffect, useState } from "react";
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

(window as any).Buffer = Buffer;

const allPaths = import.meta.glob("../posts/*.md", {
  query: "?raw",
  import: "default",
});

export default function BlogPage() {
  const { blogTitle } = useParams();
  const [content, setContent] = useState("");
  const [isFetched, setIsFetched] = useState(false);

  useEffect(() => {
    const path = `../posts/${blogTitle}.md`;

    if (allPaths[path]) {
      allPaths[path]().then(async (content) => {
        const { content: mdContent, data: frontmatter } = matter(
          content as string
        );

        const fileHtml = await unified()
          .use(remarkParse)
          .use(remarkMath)
          .use(remarkRehype)
          .use(rehypeSlug) // add ids to headings
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
          .process(mdContent);
        setContent(String(fileHtml));
      });
    } else {
      setContent("Not found");
    }
    setIsFetched(true);
  }, [blogTitle]);

  if (!isFetched) {
    return <div className="ml-2">Loading...</div>;
  }
  // remark (parsing markdown)
  // rehype (highlighting)
  return (
    <div
      className="markdown-body md-body prose max-w-none px-4 md:px-0"
      dangerouslySetInnerHTML={{ __html: content }}
    />
  );
}
