import styled from "styled-components";
import { Link } from "react-router-dom";
import PHCafe from "../../assets/img/paulineholmcafe.png";
import SoMe from "../common/SoMe";
const IntroStyle = styled.section`
  display: flex;
  width: 100vw;
  height: 90vh;
  article {
    padding: 15vh 10vw;
    line-height: 1.5;
    h1,
    h2 {
      font-family: "Lora Regular";
      text-transform: uppercase;
    }
    h3 {
      padding-top: 1.5rem;
    }
    p {
      padding-top: 1.5rem;
      line-height: 2.15;
    }
    a {
      color: var(--shimmering-blush);
    }
  }
`;
const Intro = () => {
  return (
    <IntroStyle>
      <img src={PHCafe} alt="Pauline Holm" />
      <div>
        <article>
          <h1>Pauline Holm</h1>
          <h2>from a Polish island to Copenhagen, Denmark</h2>
          <p>
            Outgoing, energetic, very ambitious and hard working young
            professional with an international background. In my professional
            life, I focus and pursue the digital path. I am a T-shaped
            individual - specialised in web development (React), but I can also
            many other different things. I am very adaptive to the new
            environments, and always open for meeting new people. Besides, I
            love learning new things and systems, and I am always very open for
            that. As a colleague, I am very helpful, smiling and supportive. I
            have a background in the restaurant industry, 8 years, since I was
            15. Educated Bachelor in Innovation and Entrepreneurship (Business
            Academy Aarhus), educated Webdeveloper (frontend) - corona decision,
            and i love it so much now 👩🏻‍💻❤️! Originally from Poland, based in
            Denmark since 2016. Fluent in Danish, English and Polish.
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
