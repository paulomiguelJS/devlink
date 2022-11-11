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
    border-radius: 4px;
    background-color: #fff;

    button {
      border: 0;
      background-color: transparent;
      margin-right: 2rem;
      margin-left: 1rem;
    }

    a {
      margin-right: 1rem;
      color: #21242d;
      transition: color 0.4s;

      &:hover {
        color: #eda617;
      }
    }
  }
`;
