import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  height: 100vh;
  width: 100%;

  padding: 0 2rem 10rem;

  h1 {
    color: ${(props) => props.theme["white-100"]};
    text-align: center;
  }
`;

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;

  width: 80%;
  max-width: 400px;

  color: ${(props) => props.theme["white-100"]};

  .googleLogIn {
    margin-top: 2rem;
  }

  Button {
    svg {
      margin-left: 1rem;
      order: -1;
    }
  }

  strong {
    text-align: center;
    margin: 1rem 0;
    font-size: 0.8rem;
  }

  span {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: 0.1rem;

    margin-top: 1rem;

    font-size: 0.8rem;

    a {
      color: ${(props) => props.theme["yellow-400"]};
      transition: color 0.5s;
      font-size: 0.9rem;

      &:visited {
        text-decoration: none;
      }

      &:hover {
        color: ${(props) => props.theme["yellow-800"]};
      }
    }
  }
`;
