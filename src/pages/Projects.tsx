import { NavLink } from "react-router";
import ExternalLinkSvg from "/src/js-public/external-link.svg?react";
import GithubSvg from "/src/js-public/github.svg?react";

type Project = {
  title: string;
  description: string;
  techs: string[];
  github?: string;
  live?: string;
};

const projects: Project[] = [
  {
    title: "Dvine Experiences",
    description:
      "A full-stack web application for Dvine Experiences to manage partner applications and host a directory of local businesses in Port Macquire. I worked in a team of 6, leading back-end development. I implemented authentication/autheroziation layers, form submission workflow, and cloud infrastructure setup (S3 for image/video storage and retrieval, and SES for email notification to admins and partners).",
    techs: ["Node.js", "TypeScript", "PostgreSQL", "Auth", "AWS"],
  },
  {
    title: "CPTracker",
    description: "A time focused LeetCode tracker website.",
    techs: ["React", "Next.js", "Prisma"],
    github: "https://github.com/belgutei-b/cptracker",
    live: "https://www.cptracker.org/",
  },
  {
    title: "CPTracker Chrome Extension",
    description: "",
    techs: ["Typescript"],
    github: "https://github.com/belgutei-b/cptracker-extension",
    live: "https://chromewebstore.google.com/detail/ojpjlobnleonmgehlhoibaicokoadcnm?utm_source=item-share-cb",
  },
  {
    title: "Safety Website for a construction company",
    description:
      "A full-stack web application for a construction company to manage pre-start safety talks. This platform enabled managers to assign workers to job sites, while workers could review safety guidelines and digitally sign acknowledgements.",
    techs: ["Next.js", "TypeScript", "MongoDB", "AWS"],
    github: "https://github.com/belgutei-b/2safety",
  },
];

function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="flex flex-col h-full p-4 border border-stone-200 dark:border-stone-700 bg-white dark:bg-stone-900 hover:border-blue-700 dark:hover:border-emerald-400 transition-colors duration-200">
      <div>
        <div className="mb-1 text-black dark:text-stone-200">
          {project.title}
        </div>
        <p className="leading-relaxed text-xs dark:text-stone-200 mt-4">
          {project.description}
        </p>
      </div>
      <div className="flex flex-wrap gap-x-1 mt-4">
        {project.techs.map((tech, i) => (
          <span
            key={tech}
            className="text-xs font-medium text-blue-700 dark:text-emerald-400"
          >
            {tech}
            {i < project.techs.length - 1 && (
              <span className="mx-1 text-blue-700 dark:text-emerald-400">
                ·
              </span>
            )}
          </span>
        ))}
      </div>
      {(project.github || project.live) && (
        <div className="flex gap-3 mt-4 pt-3 border-t border-stone-100 dark:border-stone-800">
          {project.github && (
            <NavLink
              to={project.github}
              target="_blank"
              className="group flex items-center gap-1.5 p-2 text-sm border border-stone-200 dark:border-stone-700 bg-white dark:bg-stone-900 hover:border-blue-700 dark:hover:border-emerald-400 transition-colors duration-150"
            >
              <GithubSvg className="w-4 h-4 fill-current text-stone-500 dark:text-stone-400 group-hover:text-blue-700 dark:group-hover:text-emerald-400" />
            </NavLink>
          )}
          {project.live && (
            <NavLink
              to={project.live}
              target="_blank"
              className="group flex items-center gap-1.5 p-2 text-sm border border-stone-200 dark:border-stone-700 bg-white dark:bg-stone-900 hover:border-blue-700 dark:hover:border-emerald-400 transition-colors duration-150"
            >
              <ExternalLinkSvg className="w-4 h-4 text-stone-900 dark:text-white group-hover:text-blue-700 dark:group-hover:text-emerald-400" />
            </NavLink>
          )}
        </div>
      )}
    </div>
  );
}

export default function Projects() {
  return (
    <div
      className="px-2 md:px-0"
      style={{ fontFamily: "'JetBrains Mono', monospace" }}
    >
      <p className="mb-4">Projects</p>
      <div className="flex flex-col gap-4">
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </div>
  );
}
