import styled from "styled-components";

export const LogoLink = styled.h1`
  margin-top: 44px;

  font-size: 3rem;
  color: #fff;

  span {
    background: linear-gradient(
      ${(props) => props.theme["yellow-800"]},
      ${(props) => props.theme["yellow-400"]}
    );
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-size: 54px;
    font-weight: bold;
  }
`;
