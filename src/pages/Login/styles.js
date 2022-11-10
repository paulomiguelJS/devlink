import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100%;
`;

export const FormContainer = styled.form`
  display: flexl;
  flex-direction: column;
  width: 100%;
  max-width: 600px;

  input {
    border: 0;
    height: 2rem;
    margin-bottom: 1rem;
    border: 4px;
    padding: 0 8px;
  }

  button {
    height: 36px;
    border-radius: 4px;
    background-color: #3366ff;
    border: 0;
    color: #fff;
  }
`;
