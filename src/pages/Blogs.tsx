export default function Blogs() {
  const allPostPaths = import.meta.glob("../posts/*.md");
  const blogPaths = Object.keys(allPostPaths);
  const blogTitles = Object.keys(allPostPaths).map((blogPath) => {
    return blogPath.slice(9, blogPath.length - 3);
  });
  return (
    <div>
      <p className="text-xl text-stone-700 mb-8">Blogs</p>
      <div>
        {blogTitles.map((title) => {
          return (
            <div className="border-t border-stone-300 py-3 flex justify-between">
              <p>{title}</p>
              <p className="text-stone-700">Dec 15, 2025</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
