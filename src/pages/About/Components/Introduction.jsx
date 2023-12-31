import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { Fragment } from "react";

import { Tech } from "../../../components";
import { SectionWrapper } from "../../../hoc";
import { fadeIn, textVariant } from "../../../utils/motion";
import { styles } from "../../../styles";
import { mwg01, mwg02, mwg03 } from "../../../assets";

const Introduction = () => {
  const { t } = useTranslation();
  return (
    <Fragment>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>{t("about_page.sub_title")}</p>
        <h2 className={styles.sectionHeadText}>{t("about_page.title")}</h2>
      </motion.div>
      <div className="w-full flex flex-col">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-secondary text-[17px] max-w leading-[30px]"
        >
          {t("about_page.desc_1")}
        </motion.p>
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-secondary text-[17px] max-w leading-[30px]"
        >
          {t("about_page.desc_2")}
        </motion.p>
        <Tech />
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-secondary text-[17px] max-w leading-[30px]"
        >
          {t("about_page.desc_3")}
        </motion.p>
      </div>
      <div className="w-full flex  flex-col">
        <motion.div
          variants={fadeIn("up", "spring", 1 * 0.5, 0.75)}
          className="flex items-center justify-center flex-col"
        >
          <img src={mwg01} alt="mwg certificate" />
          <motion.p
            variants={fadeIn("", "", 0.1, 1)}
            className="mt-3 text-secondary text-[17px] max-w leading-[30px]"
          >
            {t("about_page.desc_3")}
          </motion.p>
          <img src={mwg02} alt="mwg certificate" />
          <motion.p
            variants={fadeIn("", "", 0.1, 1)}
            className="mt-3 text-secondary text-[17px] max-w leading-[30px]"
          >
            {t("about_page.desc_3")}
          </motion.p>
          <motion.p
            variants={fadeIn("", "", 0.1, 1)}
            className="mt-3 text-secondary text-[17px] max-w leading-[30px]"
          >
            {t("about_page.desc_3")}
          </motion.p>
        </motion.div>
      </div>
    </Fragment>
  );
};

export default SectionWrapper(Introduction);
