import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { Fragment } from "react";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import ProjectCard from "./Card/ProjectCard";

const Works = () => {
  const { t } = useTranslation();
  return (
    <Fragment>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>{t("subTitle3")}</p>
        <h2 className={styles.sectionHeadText}>{t("title3")}</h2>
      </motion.div>
      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          {t("descw1")}
        </motion.p>
      </div>
      <div className="mt-20 flex flex-wrap gap-7">
        {projects.map((project, index) => {
          return (
            <ProjectCard key={`project-${index}`} index={index} {...project} />
          );
        })}
      </div>
    </Fragment>
  );
};

export default SectionWrapper(Works, "works");
