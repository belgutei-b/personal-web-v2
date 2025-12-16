import { NavLink } from "react-router";

export default function Blogs() {
  const allPostPaths = import.meta.glob("../posts/*.md");
  const blogs = Object.keys(allPostPaths).map((path) => {
    return {
      path: path.slice(3, path.length),
      title: path.slice(9, path.length - 3),
    };
  });
  return (
    <div>
      <p className="text-xl text-stone-700 mb-8">Blogs</p>
      <div>
        {blogs.map((blog) => {
          return (
            <div
              key={blog.path}
              className="border-t border-stone-300 py-3 flex justify-between"
            >
              <NavLink to={blog.title} end>
                {blog.title}
              </NavLink>
              <p className="text-stone-700">Dec 15, 2025</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
