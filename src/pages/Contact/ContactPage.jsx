import { Fragment, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

import ContactForm from "./Components/ContactForm";
import { SectionWrapper } from "../../hoc";
import { styles } from "../../styles";
import { textVariant } from "../../utils/motion";
import { bot } from "../../assets/index";

const ContactPage = () => {
  const { t } = useTranslation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const handleCallBot = () => {
    console.log("Call chatbot success!");
  };
  return (
    <Fragment>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>{t("contact.sub_title")}</p>
        <h2 className={styles.sectionHeadText}>{t("contact.title")}</h2>
      </motion.div>
      <div className="relative z-0">
        <div
          className="fixed bottom-[500px] right-0 sm:right-20 z-50 w-[200px] mr-[-100px] h-[200px] lg:block sm:hidden"
          onClick={handleCallBot}
        >
          <img src={bot} />
        </div>
        <ContactForm />
      </div>
    </Fragment>
  );
};

export default SectionWrapper(ContactPage);
