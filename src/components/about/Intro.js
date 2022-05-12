import styled from "styled-components";
import { Link } from "react-router-dom";
import PHCafe from "../../assets/img/paulineholmcafe.png";
import SoMe from "../common/SoMe";
import { motion } from "framer-motion";
const IntroStyle = styled.section`
  display: flex;
  width: 100vw;
  height: 90vh;
  article {
    padding: 10vh 10vw;
    line-height: 1.5;
    h1 {
      font-family: "Lora Regular";
      text-transform: uppercase;
      font-weight: 500;
    }
    h2 {
      font-family: "Lora Italic";
      font-weight: 100;
    }
    h3 {
      padding-top: 1.75rem;
      padding-bottom: 0.4rem;
    }
    p {
      padding-top: 1.5rem;
      line-height: 2.15;
      letter-spacing: 0.25px;
    }
    a {
      color: var(--shimmering-blush);
      :hover {
        color: var(--cherry-blossom-pink);
      }
    }
  }
`;
const Intro = () => {
  return (
    <IntroStyle>
      <motion.img
        src={PHCafe}
        alt="Pauline Holm"
        initial={{ opacity: 0.1 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2, type: "ease" }}
      />
      <div>
        <article>
          <h1>Pauline Holm</h1>
          <h2>from a Polish island to Copenhagen, Denmark</h2>
          <p>
            Outgoing, energetic and very ambitious young professional with an
            international background.
            <br />
            I am a T-shaped individual - specialised in web development (React),
            but I can also many other different things. I am very adaptive to
            the new environments, and always open for meeting new people. I am
            very helpful, smiling and supportive. Besides, I thrive being
            challenged and love learning new things and systems.
            <br />
            <br />
            I have a background in the restaurant industry, 8 years - all from
            dishwashing, making drinks and running the floor. Educated Bachelor
            in Innovation and Entrepreneurship with a supplementary vocational
            education in Web development- corona decision, and i love it so much
            now 👩🏻‍💻❤️!
            <br />
            <br />
            Originally from Poland, based in Denmark since 2016.
          </p>
          <h3>Scroll down to get to know me better</h3>
          <Link to="/projects">or see my works</Link>
          <br />
          <br />
          <SoMe pinky />
        </article>
      </div>
    </IntroStyle>
  );
};

export default Intro;
