import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  min-height: 100vh;
  padding: 0 0 1rem 0;

  h1 {
    color: #fff;
    margin: 2rem;
    font-size: 3rem;
  }

  form {
    display: flex;
    align-content: center;
    flex-direction: column;


    label {
      color: #fff;
      font-weight: medium;
      margin: 1rem 0 0.5rem 0;
    }

    button {
      display: flex;
      align-items: center;
      justify-content: center;
      margin-top: 1rem;

      background-color: #3267ff;
      color: #fff;

      border-radius: 4px;
      border: #3267ff;
      height: 2rem;

      svg {
      margin-left: 1rem;
    }
    }
  }
`;
