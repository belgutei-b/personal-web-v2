export default function Project() {
  return (
    <div className="w-3/4 lg:w-7/8 justify-self-center border-neutral-400 dark:border-stone-500 border-2">
      <img src="/projects/wrapper.png" className="aspect-video" />
      <ul className="flex flex-wrap text-sm md:text-base space-x-1.5 p-1.5 border-b-2 dark:border-stone-600">
        <li>Next.js</li>
        <li>TypeScript</li>
        <li>PostgreSQL</li>
        <li>Auth</li>
      </ul>
      <div className="p-2 md:p-2">
        <p className="text-lg md:text-xl">Year-Wrapped</p>
        <p className="pt-2 md:pt-4 text-sm md:text-base">
          Description Lorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem Ipsum
        </p>
        <div className="flex flex-wrap gap-2 mt-4 mb-1">
          <div className="project-link">Live</div>
          <div className="project-link">Github</div>
          <div className="project-link">Blog</div>
        </div>
      </div>
    </div>
  );
}
