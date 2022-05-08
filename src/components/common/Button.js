import { Link } from "react-router-dom";
import styled from "styled-components";
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
    width: 50vw;
    text-align: center;
  }
`;
const Button = ({
  text = "text",
  path = "path",
  cherry = false,
  teal = false,
  blue = false,
}) => {
  return (
    <BtnStyle cherry={cherry} teal={teal} blue={blue}>
      <Link to={path}>{text}</Link>
    </BtnStyle>
  );
};

export default Button;
