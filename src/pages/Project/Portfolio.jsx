import { Fragment, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

import { textVariant, fadeIn } from "../../utils/motion";
import { BallCanvas } from "../../components/canvas";
import { SectionWrapper } from "../../hoc";
import { styles } from "../../styles";
import Projects from "./Components/Projects";
import TabCard from "./Components/TabCard";
import { technologies, tabs, allProjects } from "../../constants";

const Portfolio = () => {
  const [tabActive, setTabActive] = useState("All");
  const [projects, setProjects] = useState(allProjects);
  const { t } = useTranslation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const onActiveTab = (name) => {
    if (name === "All") {
      setProjects(allProjects);
    } else {
      const projectsFilter = allProjects.filter(
        (project) => project.type === name
      );
      setProjects(projectsFilter);
    }

    setTabActive(name);
  };
  return (
    <Fragment>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>{t("subTitle3")}</p>
        <h2 className={styles.sectionHeadText}>{t("title3")}</h2>
      </motion.div>
      <div className="w-full flex flex-col">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-secondary text-[17px] leading-[30px]"
        >
          {t("descw1")}
        </motion.p>
        <div className="mt-5 flex flex-wrap pt-8 pb-1">
          {tabs.map((tab) => {
            return (
              <TabCard
                name={tab.name}
                index={tab.id}
                onTab={onActiveTab}
                isTab={tabActive}
                key={`tab-${tab.id}`}
              />
            );
          })}
        </div>
        <Projects projects={projects} />
      </div>
      <div className="flex flex-row flex-wrap lg:justify-start justify-center gap-10 mt-16">
        {technologies.map((technology) => {
          return (
            <div className="w-28 h-28" key={technology.name}>
              <BallCanvas icon={technology.icon} />
            </div>
          );
        })}
      </div>
    </Fragment>
  );
};

export default SectionWrapper(Portfolio);
