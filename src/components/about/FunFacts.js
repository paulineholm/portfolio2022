import styled from "styled-components";
const FunFactsStyle = styled.section`
  background: var(--cherry-blossom-pink);
  width: 100vw;
  padding: 5.5vh 4vw;
  text-align: center;
  line-height: 2.3;
  letter-spacing: 1px;
  @media only screen and (max-width: 768px) {
    //mobile
    line-height: 2;
    p {
      padding-bottom: 1rem;
    }
  }
  @media only screen and (min-width: 768px) {
    //tablet
    padding: 3.5vh 2vw;
    line-height: 2.5;
  }
`;
const FunFacts = () => {
  return (
    <FunFactsStyle>
      <article>
        <p>
          • I am a huge foodie, who also loves to make food! At some point of my
          life I applied to chef-school 👩🏻‍🍳
        </p>
        <p>
          • Love and talent for learning new languages! Swedish, Hebrew or
          Arabic are on the list ✍️
        </p>
        <p>• I have an interest for UI/UX and digital marketing 🖥</p>
        <p>
          • Have an interest in sustainability and I implement it on everyday
          basis as "small steps" 🌿
        </p>
      </article>
    </FunFactsStyle>
  );
};

export default FunFacts;
