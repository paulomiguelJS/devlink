import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  min-height: 100vh;

  h2 {
    color: #fff;
    margin: 2rem 0 1rem 0F;
  }

  article {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 80%;
    max-width: 600px;
    background-color: #423423;
    border-radius: 4px;
    padding: 0.5rem 0.5rem;
  }

  button {
    border: 1.5px dashed #fff;
    color: #fff;
    background-color: #000;
    padding: 4px 8px;
    border-radius: 4px;
  }

  .animate-pop {
    animation-duration: 0.5s;
    animation-name: animate-pop;
  }

  @keyframes animate-pop {
    0% {
      opacity: 0;
      transform: scale(0.7, 0.7);
    }
    100% {
      opacity: 1;
      transform: scale(1, 1);
    }
  }
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

export const Preview = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  border: 1.5px solid rgba(255, 255, 255, 0.5);
  padding-bottom: 1rem;
  border-radius: 4px;

  label {
    color: #fff;
    font-weight: medium;
    margin-bottom: 1rem;
  }
`;
