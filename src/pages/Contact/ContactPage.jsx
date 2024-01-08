import { Fragment } from "react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

import ContactForm from "./Components/ContactForm";
import { SectionWrapper } from "../../hoc";
import { styles } from "../../styles";
import { textVariant } from "../../utils/motion";

const ContactPage = () => {
  const { t } = useTranslation();
  return (
    <Fragment>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>{t("contact.sub_title")}</p>
        <h2 className={styles.sectionHeadText}>{t("contact.title")}</h2>
      </motion.div>
      <div className="flex flex-1"></div>
      <ContactForm />
    </Fragment>
  );
};

export default SectionWrapper(ContactPage);
