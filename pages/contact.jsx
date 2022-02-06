import { Contact } from "./styled/contact.styled";
import { FaWhatsapp } from "react-icons/fa"
import { MdEmail } from "react-icons/md"
import { SiGmail } from "react-icons/si"

const contact = () => {
  return (
    <Contact>
        <section>
          <div className="small">Don't be shy</div>
          <div className="large">Say Hi!</div>
        </section>
        <section className="cta-container">
          <div>
            <SiGmail  className="icon"/>
            <span>danielderu3@gmail.com</span>
            <button>Click Me!</button>
          </div>
          <div>
            <FaWhatsapp className="icon"/>
            <span>+27 84 712 2240</span>
            <button>No, Click Me!</button>
          </div>
        </section>
    </Contact>
  );
};

export default contact;
