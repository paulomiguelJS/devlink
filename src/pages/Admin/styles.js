import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;

  min-height: 100vh;

  padding: 0 0 1rem 0;

  h2 {
    color: #fff;
    margin: 2rem 0 1rem 0;
  }

  article {
    display: flex;
    align-items: center;
    justify-content: space-between;

    padding: 0.5rem 0.5rem;
    margin-bottom: 0.5rem;

    width: 80%;
    max-width: 600px;

    background-color: ${(props) => props.theme["brown-800"]};
    border-radius: 4px;
  }

  button {
    padding: 4px 8px;

    background-color: ${(props) => props.theme["black-900"]};
    color: #fff;

    border-radius: 4px;
    border: 1.5px dashed ${(props) => props.theme["white-100"]};
  }

  .animate-pop {
    animation-duration: 0.5s;
    animation-name: animate-pop;
  }

  @keyframes animate-pop {
    0% {
      opacity: 0;
      transform: scale(0.7, 0.7);
    }
    100% {
      opacity: 1;
      transform: scale(1, 1);
    }
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

    width: 500px;
    max-width: 100%;
    height: 3rem;

    margin-top: 1rem;
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
          ${(props) => props.theme["red-200"]} 0,
          ${(props) => props.theme["yellow-400"]}
        )
        1;
    }

    svg {
      margin-left: 1rem;
    }
  }

  label {
    color: ${(props) => props.theme["white-100"]};
    font-weight: medium;

    margin: 1rem 0 0.5rem 0;
  }

  section {
    display: flex;
    margin: 1rem 0;
    justify-content: space-between;

    div > input {
      margin-left: 1rem;
    }
  }
`;

export const Preview = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  padding-bottom: 1rem;
  border-radius: 4px;
  border: 1.5px solid rgba(255, 255, 255, 0.5);

  label {
    color: ${(props) => props.theme["white-100"]};
    font-weight: medium;

    margin-bottom: 1rem;
  }
`;
