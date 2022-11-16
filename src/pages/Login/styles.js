import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  height: 100vh;
  width: 100%;

  padding-bottom: 10rem;
`;

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;

  width: 80%;
  max-width: 400px;

  button {
    height: 36px;

    background: linear-gradient(#e18700, #ffd43a);
    color: #fff;
    font-weight: bold;

    border: 0;
    border-radius: 4px;
  }
`;
