import { styled } from "styled-components";
import React, { useEffect, useState } from "react";

function App() {
  const [advice, setAdvice] = useState("");
  const [load, setLoad] = useState(true);

  const audio = new Audio(`/scanner.mp3`);

  useEffect(() => {
    fetch(`https://api.adviceslip.com/advice`)
      .then((response) => response.json())
      .then((data) => {
        setAdvice(data.slip);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [load]);

  const handleClick = () => {
    audio.play();
    setLoad(!load);
  };
  return (
    <Main>
      <H1>Scan For Advice</H1>
      <Intro>
        Hey there, I understand that times can be tough, and I wanted to remind
        you that brighter days are ahead. It may not be clear when exactly
        things will improve, but they will. Sometimes the road gets bumpy, and
        it feels like there's no end in sight, but trust me, there is.
      </Intro>
      {!advice ? (
        <div>
          <p>Just Breathe</p>
        </div>
      ) : (
        <>
          <P>{advice.advice.replace(/[,;'"!?:]/g, " ")}</P>
          <button onClick={handleClick}>Scan for Advice</button>
        </>
      )}
    </Main>
  );
}

const Main = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-left: 100px;
  padding-right: 100px;
  margin-top: 50px;
`;

const H1 = styled.h1`
  font-size: 100px;
  text-align: center;
  @media (max-width: 768px) {
    font-size: 80px;
  }

  @media (max-width: 480px) {
    font-size: 60px;
  }
`;

const Intro = styled.p`
  font-family: "Open Sans", sans-serif;
  font-size: 20px;
  max-width: 650px;
  line-height: 1.5;
  margin-top: 20px;
  margin-bottom: 20px;
  text-align: center;
  @media (max-width: 480px) {
    font-size: 15px;
  }
`;

const P = styled.p`
  font-size: 3em;
  text-align: center;
  line-height: 150%;
`;
export default App;
