import styled from "styled-components";
import Pauline from "../../assets/img/paulineholm485x485.png";
import Button from "../common/Button";
const WelcomeStyle = styled.section`
  display: flex;
  width: 100vw;
  padding: 8vh 4vw;
  .welcomeLeft {
    width: 53vw;
    padding: 4vh 9vw;
    img {
      border: 5px solid var(--teal);
      border-radius: 50%;
      box-shadow: -10px -10px var(--cherry-blossom-pink),
        10px 10px var(--shimmering-blush);
    }
  }
  .welcomeRight {
    width: 50vw;
    padding: 15vh 1vw;
    .btnflex {
      display: flex;
      padding-top: 5vh;
    }
  }
  @media only screen and (max-width: 768px) {
    display: inline-block;
    .welcomeLeft {
      width: 100vw;
    }
    .welcomeRight {
      width: 100vw;
      padding: 1vh 2vw;
      article {
        text-align: center;
        h1,
        h2 {
          padding-bottom: 1.5vh;
        }
      }
    }
  }
`;
const Welcome = () => {
  return (
    <WelcomeStyle>
      <div className="welcomeLeft">
        <div>
          <img src={Pauline} alt="Pauline Holm profile" />
        </div>
      </div>
      <div className="welcomeRight">
        <article>
          <h1>Hej, my name is Pauline 🙋🏻‍♀️</h1>
          <h2>I am freshly baked Frontend Web Developer</h2>
          <h3>and it is really nice to see you on my website!</h3>
        </article>
        <div className="btnflex">
          <Button text="resume" />
          <Button text="projects" path="/projects" cherry />
        </div>
      </div>
    </WelcomeStyle>
  );
};

export default Welcome;
