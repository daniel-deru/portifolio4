import { About } from "./styled/about.styles";
import { motion } from "framer-motion";

const about = () => {

  const growVariant = {
    hidden: {
      width: 0,
      height: 0
    },
    visible: {
      width: "40vw",
      height: "100%",
      transition: {
        duration: 1,
        originY: 1
      }
    }
  }

  const fadeVariant = {
    hidden: {
      opacity: 0,
      y: -20,
    },
    visible: { 
      opacity: 1,
      y: 0,
      transition: {
        delay: 1,
        duration: 1,
      }
    }
  }
  return (
    <About>
        <motion.section
          variants={growVariant}
          initial="hidden"
          animate="visible"
        >
            <motion.div 
              className="about-head"
              variants={fadeVariant}
              initial="hidden"
              animate="visible"
            >
              Goals
            </motion.div>
            <motion.div 
              className="about-content"

              variants={fadeVariant}
              initial="hidden"
              animate="visible"
              >
              I want to become one of the best software engineers on the planet. I love solving problems and want to make a lasting difference in the world. Programming is one of the most powerful and influential tools of our time which is why I chose this profession.
            </motion.div>
        </motion.section>
        <motion.section
          variants={growVariant}
          initial="hidden"
          animate="visible"
        >
            <motion.div 
              className="about-head"
              
              variants={fadeVariant}
              initial="hidden"
              animate="visible"
              >
                Interests
              </motion.div>
            <motion.div 
              className="about-content"
              
              variants={fadeVariant}
              initial="hidden"
              animate="visible"
              >
            I like working with web technologies since it is the future of software. I am an analytical person but I also like exploring my creative side with video and photo editing as well as web and logo design. I like to have a broad spectrum of knowledge in my field as it will help to make me a better programmer.
            </motion.div>
        </motion.section>
    </About>
  );
};

export default about;
