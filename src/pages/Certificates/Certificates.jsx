import { Fragment, useEffect } from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

import { SectionWrapper } from "../../hoc";
import { styles } from "../../styles";
import CertificateCard from "./Components/CertificateCard";
import { certificates } from "../../constants";
import { fadeIn, textVariant } from "../../utils/motion";

const Certificates = () => {
  const { t } = useTranslation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Fragment>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>{t("certificate.sub_title")}</p>
        <h2 className={styles.sectionHeadText}>{t("certificate.title")}</h2>
      </motion.div>
      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[20px] leading-[30px] text-justify"
      >
        {t("certificate.desc")}
      </motion.p>
      <div className="mt-10 flex flex-wrap gap-10 py-10">
        {certificates.map((certificate, index) => {
          return <CertificateCard key={index} index={index} {...certificate} />;
        })}
      </div>
    </Fragment>
  );
};

export default SectionWrapper(Certificates);
