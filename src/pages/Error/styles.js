import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  min-height: 100vh;
  width: 100%;

  color: ${(props) => props.theme["white-100"]};

  h1 {
    margin-bottom: 1rem;
  }

  p {
    font-style: italic;
  }
`;

export const BackLink = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;

  margin-top: 2rem;

  letter-spacing: 0.1rem;
  font-size: 0.8rem;

  width: 400px;
  max-width: 100%;
  height: 3rem;

  padding: 0 2rem;
  background-color: transparent;
  color: ${(props) => props.theme["white-100"]};

  border-radius: 4px;

  border: 1px solid ${(props) => props.theme["yellow-400"]};

  transition: border 0.5s;

  &:hover {
    border-image: linear-gradient(
        to right,
        ${(props) => props.theme["red-200"]},
        ${(props) => props.theme["yellow-400"]}
      )
      1;
  }
`;
