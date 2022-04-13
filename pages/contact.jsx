import ContactPage from "./styled/contact.styled";
import { FaWhatsapp } from "react-icons/fa"
import { SiGmail } from "react-icons/si"

import { motion } from "framer-motion";

// polygon(0 0, 100% 0, 100% 100%, 0% 100%)
// polygon(0 25%, 50% 0, 100% 25%, 100% 75%, 50% 100%, 0 75%)
const Contact = () => {

  const clipVariant = {
    square: {
      clipPath: "polygon(0 0, 100% 0, 100% 50%, 100% 100%, 0 100%, 0 50%)",
      opacity: 0,

      transition: {
        duration: 1
      }
    },
    hexagon: {
      clipPath: "polygon(0 25%, 50% 0, 100% 25%, 100% 75%, 50% 100%, 0 75%)",
      opacity: 1,
      transition: {
        duration: 1,
        clipPath: {
          delay: 1,
          duration: 0.5
        }
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
        delay: 1.5,
        duration: 1,
        ease: "easeOut"
      }
    }
  }

  const slideVariant = {
    hidden: slide => ({
      x: slide,
      opacity: 0
    }),

    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 1,
        ease: "easeOut",
      }
    }
  }
  return (
    <ContactPage>
        <motion.section>
          <motion.div 
            className="small"

            variants={slideVariant}
            initial="hidden"
            animate="visible"
            custom={-20}
            >
              Don&apos;t be shy
            </motion.div>
          <motion.div 
            className="large"

            variants={slideVariant}
            initial="hidden"
            animate="visible"
            custom={20}
          >
            Say Hi!
          </motion.div>
        </motion.section>
        <section className="cta-container">
          <motion.div
            variants={clipVariant}
            initial="square"
            animate="hexagon"
          >
            <motion.div 
              className="content-container"
              
              variants={fadeVariant}
              initial="hidden"
              animate="visible"
              
            >
              <SiGmail  className="icon"/>
              <span>danielderu3@gmail.com</span>
              <button>
                <a href="mailto:danielderu3@gmail.com">
                  Click Me!
                </a>  
              </button>
            </motion.div>

          </motion.div>
          <motion.div
            variants={clipVariant}
            initial="square"
            animate="hexagon"
          >
            <motion.div 
              className="content-container"
              
              variants={fadeVariant}
              initial="hidden"
              animate="visible"
              >
              <FaWhatsapp className="icon"/>
              <span>+27 84 712 2240</span>
              <button>
                <a href="tel:+27847122240">
                  No, Click Me!
                  </a>
              </button>
            </motion.div>

          </motion.div>
        </section>
    </ContactPage>
  );
};

export default Contact;
