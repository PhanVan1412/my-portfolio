import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { fadeIn } from "../../../utils/motion";

const CertificateCard = ({ id, name, image }) => {
  const t = useTranslation();
  return (
    <Tilt className="xs:w-[310px] w-full">
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * id, 0.75)}
        className="w-full green-pink-gradient p-[1px] rounded-[5px] shadow-card"
      >
        <div
          option={{
            max: 45,
            scale: 1,
            speed: 450,
          }}
          className="bg-tertiary rounded-[5px] py-2 px-2 min-h-[220px] flex justify-evenly items-center flex-col"
        >
          <img
            src={image}
            alt={name}
            className="w-full h-full object-contain rounded-[5px]"
          />
        </div>
      </motion.div>
    </Tilt>
  );
};

export default CertificateCard;
