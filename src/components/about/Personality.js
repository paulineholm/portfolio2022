import styled from "styled-components";
import Traits from "../../assets/img/personalitycloud.png";
const PersonalityStyle = styled.section`
  display: flex;
  flex-direction: column;
  img {
    width: 40vw;
    margin-left: 30vw;
    margin-right: 30vw;
  }
`;
const Personality = () => {
  return (
    <PersonalityStyle>
      <img src={Traits} alt="Personality Traits" />
    </PersonalityStyle>
  );
};

export default Personality;
