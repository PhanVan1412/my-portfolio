import { VerticalTimelineElement } from "react-vertical-timeline-component";
import { useTranslation } from "react-i18next";
import "react-vertical-timeline-component/style.min.css";

const ExperienceCard = ({ experience, index }) => {
  const { t } = useTranslation();
  return (
    <VerticalTimelineElement
      contentStyle={{ background: "#1d1836", color: "#fff" }}
      contentArrowStyle={{ borderRight: "7px solid #232631" }}
      date={t(`experiences.experience${index}.date`)}
      iconStyle={{ background: experience.iconBg }}
      icon={
        <div className="flex justify-center items-center w-full h-full">
          <img
            src={experience.icon}
            alt={experience.company_name}
            className="w-[60px] h-[60px] object-contain"
          />
        </div>
      }
    >
      <div>
        <h3 className="text-white text-[24px] font-bold">
          {t(`experiences.experience${index}.title`)}
        </h3>
        <p className="text-secondary text-[16px] font-semibold">
          {t(`experiences.experience${index}.company_name`)}
        </p>
        <ul className="mt-5 list-disc ml-5 space-y-2">
          {experience.points.map((point, pointIndex) => {
            return (
              <li
                key={`experience-point-${pointIndex}`}
                className="text-white-100 text-[14px] pl-1 tracking-wider"
              >
                {t(`experiences.experience${index}.points.${pointIndex}`)}
              </li>
            );
          })}
        </ul>
      </div>
    </VerticalTimelineElement>
  );
};

export default ExperienceCard;
