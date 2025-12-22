import { useLoaderData, Await } from "react-router";
import { Suspense } from "react";

export default function BlogPage() {
  const content = useLoaderData();
  return (
    <div
      className="markdown-body md-body prose max-w-none px-2 md:px-0"
      dangerouslySetInnerHTML={{ __html: content }}
    />
  );
}
