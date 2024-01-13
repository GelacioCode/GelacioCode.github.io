import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { motion, AnimatePresence } from "framer-motion";
import { styles } from "../styles";
import { textVariant } from "../utils/motion";

const Tech = () => {
  return (
    <div>
      <motion.div variants={textVariant()}>
        <h2 className={styles.sectionHeadText}>Tech Stack</h2>
        <p className={styles.sectionSubText}>
          Below are my Tech Stack that I am knowledgeable with:
        </p>
      </motion.div>

      <div
        className="mt-10 grid lg:grid-cols-4 md:grid-cols-4 sm:grid-cols-3 xs:grid-cols-3 xxs:grid-cols-2 gap-5 justify-center items-center"
      >
        <AnimatePresence>
          {technologies.map((technology) => (
            <motion.div
              key={technology.name}
              className="flex items-center justify-center"
              style={{
                width: "80px",
                height: "80px",
                margin: "0 auto",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                transition: "all 0.3s ease-in-out",
                boxShadow: "none",
                borderRadius: "50%",
                backgroundColor: "white",
                minWidth: "80px",
                maxWidth: "80px",
              }}
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              whileHover={{ scale: 1.1 }}
            >
              <img src={technology.icon} alt={technology.name} style={{ width: "90%" }} />
              <motion.div 
                style={{ color: "white", display: "none" }} 
                whileHover={{ display: "block" }}
              >
                {technology.name}
              </motion.div>

            </motion.div>
            
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default SectionWrapper(Tech, "tech");
