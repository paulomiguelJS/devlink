import styled from "styled-components";

export const Container = styled.header`
  width: 100%;
  max-width: 720px;

  margin-top: 1rem;
  padding: 0 1rem;

  nav {
    display: flex;
    align-items: center;

    width: 100%;
    height: 48px;

    background-color: ${(props) => props.theme["white-100"]};
    border-radius: 4px;

    button {
      margin-right: 2rem;
      margin-left: 1rem;

      background-color: transparent;
      border: 0;
    }

    a {
      margin-right: 1rem;
      color: ${(props) => props.theme["black-600"]};
      transition: color 0.4s;

      &:hover {
        color: ${(props) => props.theme["yellow-700"]};
      }
    }
  }
`;
