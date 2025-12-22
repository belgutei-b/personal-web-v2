import { useParams } from "react-router";
import { useEffect, useState } from "react";
import { blogLoader } from "../utils/blog-utils";

export default function BlogPage() {
  const { blogTitle } = useParams();
  const [content, setContent] = useState<string | null>(null);

  useEffect(() => {
    let mounted = true;
    blogLoader(blogTitle).then((html) => {
      if (mounted) setContent(html);
    });
    return () => {
      mounted = false;
    };
  }, [blogTitle]);

  if (!content) return <div className="ml-2 md:ml-0">Loading...</div>;

  return (
    <div
      className="markdown-body md-body prose max-w-none px-2 md:px-0"
      dangerouslySetInnerHTML={{ __html: content }}
    />
  );
}
