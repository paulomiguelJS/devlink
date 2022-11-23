import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  height: 100vh;
  width: 100%;

  padding-bottom: 10rem;

  color: #fff;

  h2{
    font-size: 2.5rem;
  }
  strong {
    margin-bottom: 2.5rem;
    font-size: 0.9rem;

  }
`;
export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;

  width: 80%;
  max-width: 400px;

  color: #fff;

  button {
    display: flex;
    align-items: center;
    justify-content: center;
    letter-spacing: 0.1rem;
    font-size: 0.8rem;

    width: 400px;
    max-width: 100%;
    height: 3rem;

    margin-top: 1rem;
    padding: 0 2rem;
    background-color: transparent;
    color: #fff;

    border-radius: 4px;
    border-image: linear-gradient(to right, #ffd43a, #e18700) 1;

    transition: border 0.5s;

    &:hover {
      border-image: linear-gradient(to right, #d10000, #ffd43a) 1;
    }

    svg {
      margin-right: 1rem;
    }
  }` 