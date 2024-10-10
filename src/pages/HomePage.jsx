import BlogSection from "../components/BlogSection";
import EventSection from "../components/EventSection";
import ExperianceSection from "../components/ExperianceSection";
import HeroSection from "../components/HeroSection";
import ProjectSection from "../components/ProjectSection";
import SkillSection from "../components/SkillSection";
import TransportationRow from "../components/TransportationRow";
import YoutubeSection from "../components/YoutubeSection";

const HomePage = () => {
  return (
    <>
      <HeroSection />

      <TransportationRow />

      <ExperianceSection />

      <ProjectSection />

      <SkillSection />

      {/* <WhatCanIDo /> */}
      <BlogSection />

      <YoutubeSection />

      <EventSection />
    </>
  );
};

export default HomePage;
