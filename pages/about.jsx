import { useState, useEffect } from "react";
import AboutPage from "./styled/about.styles";
import { motion } from "framer-motion";

const About = () => {
  const [polyWidth, setPolyWidth] = useState("40vw")
  const growVariant = {
    hidden: {
      width: 0,
      height: 0
    },
    visible: width => ({
      width: "100%",
      height: "100%",
      transition: {
        duration: 1,
        originY: 1
      }
    })
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

  const calcWidth = () => {
    if(window.innerWidth <= 1000) setPolyWidth("30vw")
    if(window.innerWidth > 1000) setPolyWidth("40vw")
  }

  useEffect(() => {
    calcWidth()
    window.addEventListener("resize", () => calcWidth())
  }, [polyWidth])
  
  return (
    <AboutPage>
      <div className="wrapper">
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
      </div>
      <div className="wrapper">
        <motion.section
            variants={growVariant}
            initial="hidden"
            animate="visible"
            custom={polyWidth}
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
      </div>
        
    </AboutPage>
  );
};

export default About;
