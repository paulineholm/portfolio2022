import styled from "styled-components";
import FunFacts from "../components/about/FunFacts";
import Intro from "../components/about/Intro";
import Personality from "../components/about/Personality";
import TimeLine from "../components/about/TimeLine";
import Stack from "../components/home/Stack";
const AboutStyles = styled.main``;
const About = () => {
  return (
    <AboutStyles>
      <Intro />
      <TimeLine />
      <Stack />
      <FunFacts />
      <Personality />
    </AboutStyles>
  );
};

export default About;
