import React from "react";
import HomePage from "../section/HomePage";
import Services from "../section/Services";
import SkillsSection from "../section/SkillsSection";
import ProjectsSection from "../section/ProjectsSection";
import OpinionSection from "../section/OpinionSection";
import ConnectMe from "../section/ConnectMe";

const MainPage = () => {
  return (
    <div>
      <HomePage />
      <Services />
      <SkillsSection />
      <ProjectsSection />
      <OpinionSection />
      <ConnectMe />
    </div>
  );
};

export default MainPage;
