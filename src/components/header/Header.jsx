import React, { useContext } from "react";
import styled from "styled-components";
import Button from "../IU/Button";
import { ThemeContext } from "../../store/ThemeContext";

const Header = () => {
  const { ThemeLight, ThemeDark } = useContext(ThemeContext);
  return (
    <>
      <StyledHeader>
        <div> Calculator</div>
        <Button bgColor={"white"} colorButton={"black"} onClick={ThemeLight}>
          дневная Tема
        </Button>
        <Button bgColor={"black"} colorButton={"white"} onClick={ThemeDark}>
          ночная Тема
        </Button>
      </StyledHeader>
    </>
  );
};

export default Header;

const StyledHeader = styled.div`
  width: 100vw;
  height: 10vh;
  background-color: antiquewhite;
  display: flex;
  justify-content: space-around;
  text-align: center;
  padding-top: 1rem;
  color: #222;
`;
