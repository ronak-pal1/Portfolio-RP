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

      <ProjectSection />

      <SkillSection />

      {/* <WhatCanIDo /> */}

      <YoutubeSection />
    </>
  );
};

export default HomePage;
