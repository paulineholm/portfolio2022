import styled from "styled-components";
import {
  FaReact,
  FaCss3Alt,
  FaHtml5,
  FaJsSquare,
  FaNpm,
  FaNode,
  FaFigma,
  FaWordpress,
} from "react-icons/fa";
import { SiAdobephotoshop } from "react-icons/si";
const StackStyle = styled.section`
  text-align: center;
  font-size: 3.5rem;
  width: 100vw;
  padding: 4.5vh 4vw;
  svg {
    margin: 0 1.5rem;
  }
`;
const Stack = () => {
  return (
    <StackStyle>
      <FaReact />
      <FaCss3Alt />
      <FaHtml5 />
      <FaJsSquare />
      <FaNpm />
      <FaNode />
      <FaFigma />
      <FaWordpress />
      <SiAdobephotoshop />
    </StackStyle>
  );
};

export default Stack;
