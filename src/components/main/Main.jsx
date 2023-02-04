import React, { useReducer, useState } from "react";
import styled from "styled-components";
import Button from "../IU/Button";
import { reducer } from "../reducer";

const Main = () => {
  const [state, dispatch] = useReducer(reducer, 0);
  const [inputValue, setInputValue] = useState();

  const InputChange = (e) => {
    setInputValue(e.target.value);
  };

  const addButtton = () => {
    dispatch({ type: "add", payload: +inputValue });
  };

  const subtractButton = () => {
    dispatch({ type: "subtract", payload: +inputValue });
  };

  const multiplyButton = () => {
    dispatch({ type: "multiply", payload: +inputValue });
  };
  const divideButton = () => {
    dispatch({ type: "divide", payload: +inputValue });
  };

  return (
    <Container>
      <StyledInputContainer>
        <StyledInput type="number" value={state.input} onChange={InputChange} />
      </StyledInputContainer>

      <Button colorButton={"black"} onClick={addButtton}>
        +
      </Button>
      <Button colorButton={"black"} onClick={subtractButton}>
        -
      </Button>
      <Button colorButton={"black"} onClick={multiplyButton}>
        *
      </Button>
      <Button colorButton={"black"} onClick={divideButton}>
        /
      </Button>

      <StyledP>{state}</StyledP>
    </Container>
  );
};

export default Main;
const Container = styled.div`
  padding: 5rem;
  text-align: center;
`;

const StyledInput = styled.input`
  width: 60px;
  height: 25px;
  margin: 0 0.8rem;
  border: 1px black solid;
  border-radius: 20px;
  text-align: center;
`;
const StyledP = styled.p`
  font-weight: 700;
  font-size: 2rem;
`;

const StyledInputContainer=styled.div`
  text-align: center;
  padding-bottom: 1rem;
`