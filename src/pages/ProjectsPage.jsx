import { GitHub, LinkedIn, Twitter } from "@mui/icons-material";
import banner from "../assets/projects-page-banner.png";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

import { useState } from "react";

const Accordion = ({ title, projects }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="space-y-2 py-4 border-b border-gray-200">
      <div
        className="w-full flex items-center cursor-pointer select-none"
        onClick={toggleAccordion}
      >
        <ArrowDropDownIcon
          fontSize="large"
          color="primary"
          className={`transition-transform duration-200 ${
            isOpen ? "-rotate-90" : ""
          }`}
        />
        <h2 className="text-3xl font-medium text-blue-600 flex items-center">
          <p>{title}</p>
          <span className="text-xl ml-5 text-neutral-800 font-normal">
            ({projects.length})
          </span>
        </h2>
      </div>

      <div
        className={`pl-14 overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-[1000px] py-5" : "max-h-0 py-0"
        }`}
      >
        <ul className="list-disc marker:text-blue-600 marker:text-xl space-y-12 py-2">
          {projects.map((project, index) => (
            <li className="font-light">
              <div className="flex flex-col space-y-3">
                <div className="flex flex-row items-center space-x-5 text-xl [&>a]:text-blue-500 [&>a]:text-sm">
                  <p>{project.title}</p>
                  <a href={project.link} className="hover:underline">
                    View
                  </a>
                  <a href={project.source} className="hover:underline">
                    Source code
                  </a>
                </div>

                <div>
                  <p className="text-sm">
                    <span className="font-semibold mr-2">Tech Stack:</span>{" "}
                    {project.stack.join(", ")}
                  </p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

const projectsData = [
  {
    domain: "Web Development",
    projects: [
      {
        title: "Project 1",
        link: "https://project1.com",
        source: "https://github.com/project1",
        stack: ["React.js", "Node.js"],
      },
      {
        title: "Project 2",
        link: "https://project2.com",
        source: "https://github.com/project2",
        stack: [],
      },
      {
        title: "Project 3",
        link: "https://project3.com",
        source: "https://github.com/project3",
        stack: [],
      },
    ],
  },
  {
    domain: "App Development",
    projects: [
      {
        title: "Project 1",
        link: "https://project1.com",
        source: "https://github.com/project1",
        stack: ["React Native", "Node.js"],
      },
      {
        title: "Project 2",
        link: "https://project2.com",
        source: "https://github.com/project2",
        stack: [],
      },
      {
        title: "Project 3",
        link: "https://project3.com",
        source: "https://github.com/project3",
        stack: [],
      },
    ],
  },
  {
    domain: "AI/ML",
    projects: [
      {
        title: "Project 1",
        link: "https://project1.com",
        source: "https://github.com/project1",
        stack: ["React.js", "Node.js"],
      },
      {
        title: "Project 2",
        link: "https://project2.com",
        source: "https://github.com/project2",
        stack: [],
      },
      {
        title: "Project 3",
        link: "https://project3.com",
        source: "https://github.com/project3",
        stack: [],
      },
    ],
  },
  {
    domain: "Web 3.0",
    projects: [
      {
        title: "Project 1",
        link: "https://project1.com",
        source: "https://github.com/project1",
        stack: ["React.js", "Node.js"],
      },
      {
        title: "Project 2",
        link: "https://project2.com",
        source: "https://github.com/project2",
        stack: [],
      },
      {
        title: "Project 3",
        link: "https://project3.com",
        source: "https://github.com/project3",
        stack: [],
      },
    ],
  },
  {
    domain: "Other",
    projects: [
      {
        title: "Project 1",
        link: "https://project1.com",
        source: "https://github.com/project1",
        stack: ["React.js", "Node.js"],
      },
      {
        title: "Project 2",
        link: "https://project2.com",
        source: "https://github.com/project2",
        stack: [],
      },
      {
        title: "Project 3",
        link: "https://project3.com",
        source: "https://github.com/project3",
        stack: [],
      },
    ],
  },
];

const ProjectsPage = () => {
  return (
    <div>
      <img
        src={banner}
        alt="projects page banner"
        className="w-full h-[200px] lg:h-[400px] object-cover object-center"
      />

      <div className="flex justify-center items-center">
        <div className="w-full -mt-14 max-w-5xl">
          <p className="text-8xl">🛠️</p>

          <div className="mt-12">
            <div className="w-full border-b-2 border-gray-600 dark:border-gray-700 pb-5 space-y-5">
              <div className="flex items-center justify-between">
                <h1 className="text-5xl font-bold flex items-center">
                  <span>Projects</span>{" "}
                  <span className="text-xl ml-5 font-normal">(100)</span>
                </h1>

                <div className="lg:pt-5 pt-7 [&>*]:m-3 flex flex-wrap items-center">
                  <a
                    href="https://github.com/ronak-pal1"
                    target="_blank"
                    title="Github"
                  >
                    <GitHub fontSize="medium" className="bg-white rounded-full" />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/ronak-pal1/"
                    target="_blank"
                    title="Linkedin"
                  >
                    <LinkedIn fontSize="medium" className="text-blue-600" />
                  </a>
                  <a
                    href="https://twitter.com/ronak_pal1"
                    target="_blank"
                    title="Twitter or X"
                  >
                    <Twitter fontSize="medium" className="text-blue-400" />
                  </a>
                </div>
              </div>

              <p className="text-lg font-extralight">
                Love building projects. Breaking and building things ✌️
              </p>
            </div>

            <div className="my-20 space-y-9">
              {projectsData.map((project, index) => (
                <Accordion
                  key={index}
                  title={project.domain}
                  projects={project.projects}
                />
              ))}
            </div>

            <div className="w-full text-center">
              <p className="text-xl font-extralight">More to come 🚀</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectsPage;
