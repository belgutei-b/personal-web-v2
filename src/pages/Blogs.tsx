import { NavLink } from "react-router";
import { useState, useEffect } from "react";
import matter from "gray-matter";

export default function Blogs() {
  const allPostPaths = import.meta.glob("../posts/*.md", {
    query: "?raw",
    import: "default",
  });

  const blogs = Object.keys(allPostPaths).map((path) => {
    return {
      path: path.slice(3, path.length),
      loadFrontmatter: allPostPaths[path] as () => Promise<string>,
    };
  });

  const [blogList, setBlogList] = useState<
    { title: string; date?: string; path: string }[]
  >([]);

  useEffect(() => {
    async function loadFrontmatters() {
      const list = await Promise.all(
        blogs.map(async (blog) => {
          const raw = await blog.loadFrontmatter();
          const { data } = matter(raw);
          return {
            title: data.title || "NO TITLE",
            date: data.date || "NO DATE",
            path: blog.path,
          };
        })
      );
      console.log(list);
      setBlogList(list);
    }
    loadFrontmatters();
  }, []);

  return (
    <div>
      <p className="text-xl font-semibold text-stone-700 mb-8 mt-5">Blogs</p>
      <div>
        {blogList.map((blog) => {
          return (
            <div
              key={blog.path}
              className="border-t border-stone-300 py-3 flex justify-between"
            >
              <NavLink to={blog.title} end>
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
