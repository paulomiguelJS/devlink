import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-bottom: 10rem;
  height: 100vh;
  width: 100%;
`;

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  width: 80%;
  max-width: 400px;

  input {
    border: 0;
    height: 2rem;
    margin-bottom: 1rem;
    border-radius: 4px;
    padding: 0 8px;
  }

  button {
    height: 36px;
    border-radius: 4px;
    background: linear-gradient(#e18700, #ffd43a);
    font-weight: bold;
    border: 0;
    color: #fff;
  }
`;
