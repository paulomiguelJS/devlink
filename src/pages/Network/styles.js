import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;

  min-height: 100vh;

  padding: 0 0 1rem 0;

  h2 {
    color: ${(props) => props.theme["white-100"]};
    margin: 5rem 0 2rem 0;
    font-size: 2rem;
  }

  form {
    display: flex;
    align-content: center;
    flex-direction: column;
    width: 90%;
    max-width: 400px;

    label {
      color: ${(props) => props.theme["white-100"]};
      font-weight: medium;
      margin: 1rem 0 0.5rem 0;
    }

    Button {
      margin-top: 2rem;
    }
  }
`;
