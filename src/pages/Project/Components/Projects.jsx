import ProjectCard from "../../../components/Card/ProjectCard";

const Projects = ({ projects }) => {
  console.log("check project components: ", projects);
  return (
    <div className="w-full">
      <div className="mt-5 flex flex-wrap gap-7">
        {projects.map((project) => {
          return (
            <ProjectCard
              key={`project-${project.id}`}
              index={project.id}
              {...project}
            />
          );
        })}
      </div>
      {projects.length > 5 && (
        <div className="mt-12 flex justify-center align-center">
          <button className="bg-tertiary hover:bg-tertiary-dark text-white font-medium py-2 px-8 w-300  rounded-[5px] w-[160px]">
            More
          </button>
        </div>
      )}
    </div>
  );
};

export default Projects;
