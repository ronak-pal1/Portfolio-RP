import {
  ArrowLeftRounded,
  ArrowRightRounded,
  Devices,
} from "@mui/icons-material";
import ProjectCard from "./ProjectCard";
import gmailCover from "../assets/projectCovers/gmail.jpg";
import linkedCover from "../assets/projectCovers/linkedin.jpg";
import slackCover from "../assets/projectCovers/slack.jpg";
import netflixCover from "../assets/projectCovers/netflix.jpg";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";

const ProjectSection = () => {
  const navigate = useNavigate();
  const projectContainer = useRef(null);
  let scrollPos = 0;

  const moveRight = () => {
    scrollPos += 384;
    projectContainer.current.scrollTo({ left: scrollPos, behavior: "smooth" });
  };

  const moveLeft = () => {
    scrollPos -= 384;
    projectContainer.current.scrollTo({ left: scrollPos, behavior: "smooth" });
  };

  return (
    <div className="mt-28" id="projects">
      <div className="flex flex-row items-center space-x-3 justify-center w-full">
        <p className="lg:text-3xl text-xl font-poppins font-semibold dark:text-white">
          Projects
        </p>
        <Devices fontSize="large" className="dark:text-white" />
      </div>

      <div className="relative">
        <div
          className="absolute left-10 top-1/2 z-20 rounded-full bg-black text-white dark:bg-white dark:text-black hidden md:block cursor-pointer"
          onClick={moveLeft}
        >
          <ArrowLeftRounded fontSize="large" />
        </div>
        <div
          className="absolute right-10 top-1/2 z-20 rounded-full bg-black text-white dark:bg-white dark:text-black hidden md:block cursor-pointer"
          onClick={moveRight}
        >
          <ArrowRightRounded fontSize="large" />
        </div>
        <div
          className="px-5 py-7 flex overflow-x-scroll no-scrollbar"
          ref={projectContainer}
        >
          <ProjectCard
            imgUrl={gmailCover}
            title="Gmail Clone"
            desp="Gmail Clone is a replica of the real Gmail. Here you can send emails to others and also receive emails from others."
            sourceLink="https://github.com/ronak-pal1/Email-Clone"
            techStacks={["reactjs", "redux", "css3", "firebase", "materialui"]}
          />
          <ProjectCard
            imgUrl={linkedCover}
            title="LinkedIn Clone"
            desp="LinkedIn Clone is a replica of the real LinkedIn. Here you can make posts and you can also see others posts."
            sourceLink="https://github.com/ronak-pal1/LinkedIn-Clone"
            techStacks={["reactjs", "redux", "css3", "firebase", "materialui"]}
          />{" "}
          <ProjectCard
            imgUrl={slackCover}
            title="Slack Clone"
            desp="slack Clone is a replica of the real Slack app. Here you can make different rooms and chat with other members in the room."
            sourceLink="https://github.com/ronak-pal1/Email-Clone"
            techStacks={[
              "reactjs",
              "redux",
              "styled-components",
              "firebase",
              "materialui",
            ]}
          />{" "}
          <ProjectCard
            imgUrl={netflixCover}
            title="Netflix Clone"
            desp="Netflix clone is a replica of the real Netflix. Here you can login via gmail and pass, see the latest movies fetched from TMDB and stripe integration"
            sourceLink=""
            techStacks={[
              "reactjs",
              "redux",
              "stripe",
              "firebase",
              "materialui",
            ]}
          />
        </div>
      </div>

      <div className="flex flex-row justify-center">
        <a
          href="https://github.com/ronak-pal1/All-Projects"
          target="_blank"
          className="bg-blue-500 font-poppins font-bold py-2 px-3 text-white rounded-md"
        >
          All Projects
        </a>
      </div>
    </div>
  );
};

export default ProjectSection;
