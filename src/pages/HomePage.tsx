import { Helmet } from "react-helmet";
import HeroSection from "./components/home/HeroSection";
import ExperienceSection from "./components/home/ExperienceSection";
import SkillsSection from "./components/home/SkillsSection";
import ProjectsSection from "./components/home/ProjectsSection";
import BlogsSection from "./components/home/BlogsSection";
import ImagesSection from "./components/home/ImagesSection";
import FeedbacksSection from "./components/home/FeedbacksSection";
import StatsSection from "./components/home/StatsSection";

const HomePage = () => {
  return (
    <>
      <Helmet>
        <title>Ronak Paul</title>
        <meta
          name="description"
          content="The portfolio of ronak paul. Where I showed my all relevent skills, experiances, blogs, videos and all the other stuffs of me as a developer"
        />
      </Helmet>

      <HeroSection />
      <ExperienceSection />
      <SkillsSection />
      <ProjectsSection />
      <BlogsSection />
      <ImagesSection />
      <FeedbacksSection />
      <StatsSection />
      
    </>
  );
};

export default HomePage;
