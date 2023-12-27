import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

import { styles } from "../styles";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";
import ServiceCard from "./Card/ServiceCard";

const About = () => {
  const { t } = useTranslation();
  return (
    <>
      <motion.div variants={textVariant}>
        <p className={styles.sectionSubText}>{t("subTitle1")}</p>
        <h2 className={styles.sectionHeadText}>{t("title1")}</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        {t("desco1")}
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-10 py-10">
        {services.map((service, index) => {
          return <ServiceCard key={service.title} index={index} {...service} />;
        })}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
