import { motion } from "framer-motion";
import { fadeIn } from "../../utils/motion";
import { useTranslation } from "react-i18next";

const FeedbackCard = ({
  index,
  testimonial,
  name,
  designation,
  image,
  company,
}) => {
  const { t } = useTranslation();
  return (
    <motion.div
      variants={fadeIn("", "spring", index * 0.5, 0.75)}
      className="bg-black-200 p-10 rounded-3xl xs:w-[320px] w-full"
    >
      <p className="text-white font-black text-[48px]">"</p>
      <div className="mt-1">
        <p className="text-white trackin-wider text-[18px]">
          {t(`testimonials.testimonial${index}.testimonial`)}
        </p>
        <div className="mt-7 flex justify-between items-center gap-1">
          <div className="flex-1 flex flex-col">
            <p>
              <span className="blue-text-gradient">@</span> {name}
            </p>
            <p className="mt-1 text-secondary text-[12px]">
              {designation} of {company}
            </p>
          </div>
          <img
            src={image}
            alt={name}
            className="w-10 h-10 rounded-full object-contain"
          />
        </div>
      </div>
    </motion.div>
  );
};

export default FeedbackCard;
