import { Tilt } from "react-tilt";
import { useTranslation } from "react-i18next";

import { github } from "../../assets";

const ProjectCard = ({ index, name, tags, image, source_code_link }) => {
  const { t } = useTranslation();
  return (
    <div>
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full"
      >
        <div className="relative w-full h-[230px]">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover rounded-2xl"
          />
          <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
            <div
              onClick={() => window.open(source_code_link, "_blank")}
              className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
            >
              <img
                src={github}
                alt="github"
                className="w-1/2 h-1/2 object-contain"
              />
            </div>
          </div>
        </div>
        <div className="mt-5">
          <h3 className="text-white font-bold text-[24px]">
            {t(`allProjects.project${index}.name`)}
          </h3>
          <p className="mt-2 text-secondary text-[14px]">
            {t(`allProjects.project${index}.description`)}
          </p>
        </div>
        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => {
            return (
              <p key={tag.name} className={`text-[14px] ${tag.color}`}>
                #{tag.name}
              </p>
            );
          })}
        </div>
      </Tilt>
    </div>
  );
};
export default ProjectCard;
