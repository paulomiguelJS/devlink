import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  height: 100vh;
  width: 100%;

  padding-bottom: 10rem;

  h1,
  p {
    color: #fff;
  }

  button {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 600px;

    margin-top: 2rem;
    padding: 0 2rem;

    background-color: #3267ff;
    color: #fff;

    border-radius: 4px;
    border-image: linear-gradient(to right, red, blue) 1;
    height: 3rem;
    font-size: 1.2rem;

    &:hover {
    }

    svg {
      margin-right: 1rem;
    }
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
