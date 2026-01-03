import { NavLink } from "react-router";
import { useState, useEffect } from "react";
import { getBlogs } from "../utils/blog-utils";
import type { BlogType } from "../types/blog.types";

export default function Blogs() {
  const [blogs, setBlogs] = useState<BlogType[] | null>(null);

  useEffect(() => {
    let mounted = true;
    getBlogs().then((receivedBlogs) => {
      if (mounted) setBlogs(receivedBlogs);
    });
    return () => {
      mounted = false;
    };
  }, []);

  if (!blogs) return <p className="pl-2 md:pl-0">Loading...</p>;

  return (
    <div>
      <p className="text-xl font-semibold text-stone-700 mb-5 pt-0 md:pt-5 px-2 md:px-0">
        Blogs
      </p>
      <div>
        {blogs.map((blog) => {
          return (
            <div
              key={blog.path}
              className="border-t border-stone-300 py-3 flex justify-between px-3 md:px-0"
            >
              <NavLink
                to={blog.path}
                className={({ isActive, isPending }) =>
                  isActive ? "text-blue-700" : isPending ? "disabled" : ""
                }
                end
              >
                {blog.title}
              </NavLink>
              <p className="text-stone-700">{blog.date}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
