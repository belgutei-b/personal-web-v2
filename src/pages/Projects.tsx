import Project from "../components/Project";

export default function Projects() {
  return (
    /*
    Projects
    1. year-wrapped
    2. personal-web-v2
    3. 3900 project
    4. 6447 fuzzer
    5. iscm project
    
    - short blog for each project
    */
    <div className="mt-4 grid grid-cols-1 lg:grid-cols-2 justify-items-stretch space-y-8 pb-10">
      <Project />
      <Project />
      <Project />
      <Project />
      <Project />
    </div>
  );
}
