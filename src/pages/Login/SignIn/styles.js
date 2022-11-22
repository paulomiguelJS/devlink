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
    color: #fff;
    text-align: center;
  }
`;

export const UserProfile = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;

  color: #fff;

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

  color: #fff;

  button {
    display: flex;
    align-items: center;
    justify-content: center;

    width: 400px;
    max-width: 100%;
    height: 3rem;

    padding: 0 2rem;
    background-color: transparent;
    color: #fff;

    border-radius: 4px;
    border-image: linear-gradient(to right, #ffd43a, #e18700) 1;

    font-size: 1.2rem;
    transition: border 0.5s;

    &:hover {
      border-image: linear-gradient(to right, #d10000, #ffd43a) 1;
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
    margin-top: 1rem;
    text-align: end;

    a {
      color: #ffd43a;
      transition: color 0.5s;

      &:visited {
        text-decoration: none;
      }

      &:hover {
        color: #e18700;
      }
    }
  }
`;
