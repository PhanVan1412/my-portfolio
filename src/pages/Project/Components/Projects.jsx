import React from "react";
import { projects } from "../../../constants";
import ProjectCard from "../../../components/Card/ProjectCard";

const Projects = () => {
  return (
    <div className="w-full">
      <div className="mt-5 flex flex-wrap gap-7">
        {projects.map((project, index) => {
          return (
            <ProjectCard key={`project-${index}`} index={index} {...project} />
          );
        })}
      </div>
      <div className="mt-10 flex justify-center align-center">
        <button className="bg-tertiary hover:bg-tertiary-dark text-white font-medium py-2 px-8 w-300  rounded-[5px]">
          More
        </button>
      </div>
    </div>
  );
};

export default Projects;
