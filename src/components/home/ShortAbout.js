import styled from "styled-components";
import { Link } from "react-router-dom";
const ShortAboutStyle = styled.section`
  background: var(--cherry-blossom-pink);
  width: 100vw;
  padding: 6.5vh 5.5vw;
  text-align: center;
  color: var(--baby-powder);
  font-family: "Lora Regular";
  font-size: 1.3rem;
  a {
    color: var(--shimmering-blush);
  }
`;
const ShortAbout = () => {
  return (
    <ShortAboutStyle>
      Passionate, brisk, detail-oriented and curious is how I would describe
      myself in one sentence...
      <br />
      <br />
      <Link to="about">Get to know me better!</Link>
    </ShortAboutStyle>
  );
};

export default ShortAbout;
