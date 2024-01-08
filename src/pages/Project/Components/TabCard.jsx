import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { fadeIn } from "../../../utils/motion";

const TabCard = ({ name, index, onTab, isTab }) => {
  return (
    <Tilt>
      <motion.div
        variants={fadeIn("right", "spring", 0.1 * index, 0.75)}
        key={`tab-item-${index}`}
      >
        <div
          options={{
            max: 45,
            scale: 1,
            speed: 100,
          }}
          className={`font-medium text-[17px]  lg:pr-10 pr-5 cursor-pointer py-2 ${
            isTab === name ? "text-white" : "text-secondary"
          } `}
          onClick={() => onTab(name)}
        >
          {name}
        </div>
      </motion.div>
    </Tilt>
  );
};

export default TabCard;
