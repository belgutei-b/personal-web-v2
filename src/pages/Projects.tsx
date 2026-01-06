type ProjectType = {
  title: string;
  img_src: string;
  techs: string[];
  description: string;
  links: {
    link: string;
    name: string;
  }[];
};

export default function Projects() {
  const projects: ProjectType[] = [
    {
      title: "Dvine-Experience",
      img_src: "/projects/dvine.png",
      techs: ["Node.js", "TypeScript", "PostgreSQL", "Auth", "AWS"],
      description: `A full-stack web application for Dvine to manage partner applications
                    and host a directory of local businesses in Port Macquire.
                    I worked in a team of 6, leading a back-end development. I implemented authentication, form submission workflow, and cloud infrastuctures setup.`,
      links: [
        { link: "https://github.com/", name: "Github" },
        { link: "https://github.com/", name: "Blog" },
      ],
    },
    {
      title: "Year-Wrapped",
      img_src: "/projects/wrapper.png",
      techs: ["Next.js", "TypeScript", "PostgreSQL", "Auth"],
      description:
        "Year-Wrapped is a small full-stack web app for friends to reveal their best movies/songs/places of the past year.",
      links: [
        { link: "https://year-wrapped-six.vercel.app/", name: "Live" },
        { link: "https://github.com/belgutei-b/year-wrapped", name: "Github" },
        { link: "https://github.com/", name: "Blog" },
      ],
    },
    {
      title: "Safety-Website",
      img_src: "/projects/wrapper.png",
      techs: ["Next.js", "TypeScript", "MongoDB", "AWS"],
      description: `A full-stack web application for a construction company to manage pre-start safety talks.
                    This platform enabled managers to assign workers to job sites,
                    while workers can review safety guidelines and digitally sign acknowledgements`,
      links: [
        { link: "https://github.com/belgutei-b/iscm-1.1", name: "Github" },
        { link: "https://github.com/", name: "Blog" },
      ],
    },
    // {
    //   title: "Fuzzer",
    //   img_src: "/projects/wrapper.png",
    //   techs: ["Next.js", "TypeScript", "PostgreSQL", "Auth"],
    //   description:
    //     "Description Lorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem Ipsum",
    //   links: [
    //     { link: "https://github.com/", name: "Live" },
    //     { link: "https://github.com/", name: "Github" },
    //     { link: "https://github.com/", name: "Blog" },
    //   ],
    // },
  ];
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
    <div className="mt-4 grid grid-cols-1 lg:grid-cols-2 justify-items-stretch space-y-8">
      {projects.map((project) => {
        return (
          <div className="w-3/4 lg:w-7/8 justify-self-center border-neutral-400 dark:border-stone-500 border-2">
            <img src={project.img_src} className="aspect-video" />

            <ul className="flex flex-wrap text-sm md:text-base space-x-1.5 p-1.5 border-b-2 dark:border-stone-600">
              {project.techs.map((tech) => {
                return <li>{tech}</li>;
              })}
            </ul>
            <div className="p-2 md:p-2">
              <p className="text-lg md:text-xl">{project.title}</p>
              <p className="pt-2 md:pt-4 text-sm md:text-base">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mt-4 mb-1">
                {project.links.map((link) => {
                  return (
                    <a href={link.link} className="project-link">
                      {link.name}
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
