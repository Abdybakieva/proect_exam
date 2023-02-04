import React from 'react'
import styled from 'styled-components';

const Button = ({ children, bgColor, colorButton, onClick }) => {
  return (
    <StyledButton bgColor={bgColor} colorButton={colorButton} onClick={onClick}>
      {children}
    </StyledButton>
  );
};

export default Button

const StyledButton = styled.button`
margin-left: 0 .5rem;
  padding: 10px 25px;
  border: 1px solid black;
  height: 40px;
  border-radius: 16px;
  color: white;
  background-color: ${(props) => props.bgColor};
  color: ${(props) => props.colorButton};
  :hover{
    background-color: #7a7a75;
  }
`;