import styled from "styled-components";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
const BtnStyle = styled.div`
  cursor: grab;
  padding: 1.5vh 2.5vw;
  margin-right: 2vw;
  border: 2px solid
    ${(props) =>
      props.cherry
        ? "var(--cherry-blossom-pink)"
        : props.teal
        ? "var(--teal)"
        : props.blue
        ? "var(--usafa-blue)"
        : "var(--shimmering-blush)"};
  border-radius: 15px;
  :hover {
    background: ${(props) =>
      props.cherry
        ? "var(--shimmering-blush)"
        : props.teal
        ? "var(--usafa-blue)"
        : props.blue
        ? "var(--teal)"
        : "var(--cherry-blossom-pink)"};
    a {
      color: white;
    }
  }
  a {
    color: black;
  }
  @media only screen and (max-width: 768px) {
    width: 40vw;
    text-align: center;
  }
`;
const Button = ({
  text = "text",
  path = "path",
  cherry = false,
  teal = false,
  blue = false,
  txt = "txt",
  href = "href",
}) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5, type: "ease" }}
    >
      <BtnStyle cherry={cherry} teal={teal} blue={blue}>
        <a href={href}>{text}</a>
        <Link to={path}>{txt}</Link>
      </BtnStyle>
    </motion.div>
  );
};

export default Button;
