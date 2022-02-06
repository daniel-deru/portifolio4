import { About } from "./styled/about.styles";

const about = () => {
  return (
    <About>
        <section>
            <div className="about-head">Goals</div>
            <div className="about-content">
              I want to become one of the best software engineers on the planet. I love solving problems and want to make a lasting difference in the world. Programming is one of the most powerful and influential tools of our time which is why I chose this profession.
            </div>
        </section>
        <section>
            <div className="about-head">Interests</div>
            <div className="about-content">
            I like working with web technologies since it is the future of software. I am an analytical person but I also like exploring my creative side with video and photo editing as well as web and logo design. I like to have a broad spectrum of knowledge in my field as it will help to make me a better programmer.
            </div>
        </section>
    </About>
  );
};

export default about;
