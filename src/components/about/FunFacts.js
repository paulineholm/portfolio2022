import styled from "styled-components";
const FunFactsStyle = styled.section`
  background: var(--cherry-blossom-pink);
  width: 100vw;
  padding: 5.5vh 4vw;
  text-align: center;
  line-height: 2.3;
  letter-spacing: 1px;
`;
const FunFacts = () => {
  return (
    <FunFactsStyle>
      <article>
        <p>
          • I love making food, and I am quite good at it! At some point of my
          life I applied to chef-school 👩🏻‍🍳
        </p>
        <p>
          • Love learning new languages, and I have a talent for that! Would
          love to learn Swedish and Hebrew or Arabic in the future ✍️
        </p>
        <p>
          • I have an interest for UI/UX and digital marketing, that I am
          developing and working on 🖥
        </p>
        <p>
          • Have an interest in sustainability (many aspects, "small steps" is
          my motto, that I follow in life) 🌿
        </p>
      </article>
    </FunFactsStyle>
  );
};

export default FunFacts;
