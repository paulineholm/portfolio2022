import styled from "styled-components";
import { Chrono } from "react-chrono";
import { useState, useEffect } from "react";
const TimeLineStyle = styled.section`
  background: var(--shimmering-blush);
  width: 100vw;
  padding-left: 4vw;
  padding-right:4vw;
  text-align: center;
  color: white;
  line-height: 1.5;
  .horizontal{
    bottom:none;
    left:none;
    top:0;
  }
  #timeline-main-wrapper{
    height:25vh;
  }
  .timeline-controls{
    display:none ;
  }
  #react-chrono-timeline{
    display:none;
  }
  .timeline-horizontal-container{
    width:90vw;
    justify-content:space-evenly;
  }
  .timeline-item-title{
    margin-top:4rem;
    font-weight:300;
    font-size:1rem;
    font-family:"Lora";
  }
  }
  p{
    font-weight: 700;
    padding-bottom:1.5rem;
    a{
      color:var(--usafa-blue);
      :hover{
        color:var(--cherry-blossom-pink);
      }
    }
  }
`;
const TimeLine = () => {
  const items = [
    {
      title: "May 2016: High-school graduation",
    },
    {
      title: "June 2016: Moving to Denmark",
    },
    {
      title: "January 2020: PBA in Innovation and Entrepreneurship",
    },
    {
      title: "March 2022: Educated as Web developer",
    },
    {
      title: "2022: * exciting to see what comes here next *",
    },
  ];
  const [mobileViewport, setMobileViewport] = useState(window.innerWidth < 768);
  //console.log(mobileViewport);
  const updateViewport = () => {
    setMobileViewport(window.innerWidth < 768);
  };
  useEffect(() => {
    window.addEventListener("resize", updateViewport);
    return () => window.removeEventListener("resize", updateViewport);
  }, []);
  return (
    <TimeLineStyle>
      {mobileViewport ? (
        <Chrono
          items={items}
          theme={{
            primary: "var(--cherry-blossom-pink)",
            secondary: "none",
            titleColor: "none",
          }}
          mode="VERTICAL"
        />
      ) : (
        <Chrono
          items={items}
          theme={{
            primary: "var(--cherry-blossom-pink)",
            secondary: "none",
            titleColor: "none",
          }}
          mode="HORIZONTAL"
        />
      )}

      <p>
        Curious? see my{" "}
        <a href="https://www.linkedin.com/in/paulineholm/">LinkedIn</a> for more
        details
      </p>
    </TimeLineStyle>
  );
};

export default TimeLine;
