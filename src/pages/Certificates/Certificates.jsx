import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../../styles";
import { certificates } from "../../constants";
import { fadeIn, textVariant } from "../../utils/motion";
import { SectionWrapper } from "../../hoc";

const CertificateCard = ({ id, name, image }) => {
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
const Certificates = () => {
  return (
    <div className={`${styles.padding} max-w-7xl max-auto relative z-0 m-auto`}>
      <motion.div variants={textVariant}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[20px] max-w-3xl leading-[30px]"
      >
        I'm a skilled software developer with experience in TypeScript and
        JavaScript, and expertise in frameworks like React, Node.js, and
        Three.js. I'm a quick learner and collaborate closely with clients to
        create efficient, scalable, and user-friendly solutions that solve
        real-world problems. Let's work together to bring your ideas to life!
      </motion.p>

      <div className="mt-10 flex flex-wrap gap-10 py-10">
        {certificates.map((certificate, index) => {
          return <CertificateCard key={index} index={index} {...certificate} />;
        })}
      </div>
    </div>
  );
};

export default SectionWrapper(Certificates);
