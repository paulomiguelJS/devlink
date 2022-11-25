import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  min-height: 100vh;
  padding: 0 0 1rem 0;

  h2 {
    color: ${(props) => props.theme["white-100"]};
    margin: 2rem;
    font-size: 2rem;
  }

  form {
    display: flex;
    align-content: center;
    flex-direction: column;
    width: 100%;
    max-width: 600px;
    label {
      color: ${(props) => props.theme["white-100"]};
      font-weight: medium;
      margin: 1rem 0 0.5rem 0;
    }

    button {
      display: flex;
      align-items: center;
      justify-content: center;
      margin-top: 1rem;

      background-color: ${(props) => props.theme["blue-300"]};
      color: ${(props) => props.theme["white-100"]};

      border-radius: 4px;
      border: ${(props) => props.theme["blue-300"]};
      height: 2.2rem;

      svg {
        margin-left: 1rem;
      }
    }
  }
`;
