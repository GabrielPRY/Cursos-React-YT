import React from "react";
import styled, {
  css,
  keyframes,
  ThemeProvider,
  createGlobalStyle,
} from "styled-components";

export default function ComponentesEstilizados() {
  let mainColor = "#db7093",
    mainAlphaColor80 = "#db709380";

  const setTransitionTime = (time) => {
    return `all ${time} ease-in-out`;
  };

  const fadeIn = keyframes`
  0%{
    opacity: 0;
  }

  100%{
    opacity;1
  }
  `;

  const MyH3 = styled.h3`
    padding: 2rem;
    text-align: center;
    color: ${(props) => props.color || "#000f "};
    background-color: ${mainColor};
    transition: ${setTransitionTime("1s")};
    animation: ${fadeIn} 5s ease-out;

    ${({ isButton }) =>
      isButton &&
      css`
        margin: auto;
        max-width: 50%;
        border-radius: 0.25rem;
        cursor: poinrer;
        background-color: blue;
      `}

    &:hover {
      background-color: ${mainAlphaColor80};
    }
  `;

  const ligh = {
    color: "#222",
    bgColor: "#DDD",
  };

  const dark = {
    color: "#DDD",
    bgColor: "#222",
  };

  const Box = styled.div`
    padding: 0.5em;
    margin: 0.5em;
    color: ${({ theme }) => theme.color};
    background-color: ${({ theme }) => theme.bgColor};
  `;

  const BoxRounded = styled(Box)`
    border-radius: 1rem;
  `;

  const GlobalStyle = createGlobalStyle`
  h2{
    padding: 2rem;
    background-color: #fff;
    color: #61dafb;
    text-transform: uppercase;
  }
  `;

  return (
    <>
      <GlobalStyle></GlobalStyle>
      <h2>CLASE 24 - STYLED COMPONENTS</h2>
      <MyH3>Hola estoy estilizado con styled-components</MyH3>
      <MyH3 color="#61dafb">Hola estoy estilizado con styled-components</MyH3>
      <MyH3 isButton={true}>Soy un h3 estilizado como botón</MyH3>
      <ThemeProvider theme={ligh}>
        <Box>Caja con tema light</Box>
      </ThemeProvider>
      <ThemeProvider theme={dark}>
        <Box>Caja con tema dark</Box>
      </ThemeProvider>
      <ThemeProvider theme={ligh}>
        <BoxRounded>Caja redondeada con tema light</BoxRounded>
      </ThemeProvider>
      <ThemeProvider theme={dark}>
        <BoxRounded>Caja redondeada con tema dark</BoxRounded>
      </ThemeProvider>
    </>
  );
}
