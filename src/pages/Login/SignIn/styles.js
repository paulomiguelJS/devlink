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

export const UserProfile = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;

  color: ${(props) => props.theme["white-100"]};

  margin-bottom: 2rem;

  img {
    width: 140px;
    height: 140px;
    border-radius: 50%;
    margin-bottom: 2rem;
  }
`;

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;

  width: 80%;
  max-width: 400px;

  color: ${(props) => props.theme["white-100"]};

  button {
    display: flex;
    align-items: center;
    justify-content: center;
    letter-spacing: 0.1rem;
    font-size: 0.8rem;

    width: 400px;
    max-width: 100%;
    height: 3rem;

    padding: 0 2rem;
    background-color: transparent;
    color: ${(props) => props.theme["white-100"]};

    border-radius: 4px;
    border-image: linear-gradient(
        to right,
        ${(props) => props.theme["yellow-400"]},
        ${(props) => props.theme["yellow-800"]}
      )
      1;

    transition: border 0.5s;

    &:hover {
      border-image: linear-gradient(
          to right,
          ${(props) => props.theme["red-200"]},
          ${(props) => props.theme["yellow-400"]}
        )
        1;
    }

    svg {
      margin-right: 1rem;
    }
  }

  .logInBtn {
    margin-top: 2rem;
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
