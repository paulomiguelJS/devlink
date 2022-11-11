import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  min-height: 100vh;
`;

export const FormContainer = styled.form`
  display: flex;
  align-content: center;
  flex-direction: column;

  width: 80%;
  max-width: 600px;

  label {
    color: #fff;
    font-weight: medium;
    margin: 1rem 0 0.5rem 0;
  }

  section {
    display: flex;
    margin: 1rem 0;
    gap: 2rem;

    div > input {
      margin-left: 1rem;
    }
  }

  button {
    margin-top: 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #3267ff;
    color: #fff;
    border-radius: 4px;
    border: #3267ff;
    height: 2rem;
    
    svg {
      margin-left: 1rem;
    }
  }
`;
