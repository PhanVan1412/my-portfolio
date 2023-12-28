import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { testimonials } from "../constants";
import FeedbackCard from "./Card/FeedbackCard";

const Feedbacks = () => {
  const { t } = useTranslation();
  return (
    <div className="mt-12 bg-black-100 rounded-[20px]">
      <div className={`${styles.padding} bg-tertiary rounded-2xl min-h[300px]`}>
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>{t("subTitle4")}</p>
          <h2 className={styles.sectionHeadText}>{t("title4")}</h2>
        </motion.div>
      </div>
      <div className={`${styles.paddingX} -mt-12 pb-14 flex flex-wrap gap-7`}>
        {testimonials.map((testimonial, index) => {
          return (
            <FeedbackCard
              index={index}
              key={testimonial.name}
              {...testimonial}
            />
          );
        })}
      </div>
    </div>
  );
};

export default SectionWrapper(Feedbacks, "");
