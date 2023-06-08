import { styled } from "styled-components";
import React, { useEffect, useState } from "react";

function App() {
  const [advice, setAdvice] = useState();
  useEffect(() => {
    fetch(`https://api.adviceslip.com/advice`)
      .then((response) => response.json())
      .then((data) => {
        setAdvice(data.slip);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <Main>
      {!advice ? (
        <div>
          <p>Just Breath</p>
        </div>
      ) : (
        <p>{advice.advice}</p>
      )}
    </Main>
  );
}

const Main = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
export default App;
