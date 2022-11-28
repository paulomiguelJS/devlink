import styled from "styled-components";

export const LogoLink = styled.h1`
  font-size: ${(props) => (props.variant === "smaller" ? "1.5rem" : "3rem")};
  color: ${(props) => (props.variant === "smaller" ? "#000" : "#fff")};

  span {
    background: linear-gradient(
      ${(props) => props.theme["yellow-800"]},
      ${(props) => props.theme["yellow-400"]}
    );
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-size: ${(props) => (props.variant === "smaller" ? "2rem" : "3.5rem")};
    font-weight: bold;
  }
`;
