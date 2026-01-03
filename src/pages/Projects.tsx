export default function Projects() {
  return (
    <div>
      <div className="w-80 border-black border-solid border-2">
        <img src="/projects/wrapper.png" className="h-50 aspect-video" />
        <ul className="flex space-x-1.5 text-base p-1.5 border-b-2">
          <li>Next.js</li>
          <li>TypeScript</li>
          <li>PostgreSQL</li>
          <li>Auth</li>
        </ul>
        <div className="p-2">
          <div className="text-xl">Year-Wrapped</div>
          <div className="pt-4">
            Description Lorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem Ipsum
          </div>
          <div className="flex gap-2 mt-4">
            <div className="project-link">Live</div>
            <div className="project-link">Github</div>
          </div>
        </div>
      </div>
    </div>
  );
}
