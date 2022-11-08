import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Poppins", sans-serif;
    font-weight: 400;
    font-size: 1rem;
  }
  
  html {
    @media (max-width:1080px) {
    font-size: 93.75%;
    }
    @media (max-width: 720px) {
      font-size: 87.5%;
    }
  } 

  body {
    font-family: sans-serif;
    background: linear-gradient(#232630, #050507);
    min-height: 100vh;
  }

  button {
    cursor: pointer;
  }

  a{
    text-decoration: none;
  }
`;
