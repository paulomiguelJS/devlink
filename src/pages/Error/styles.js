import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;

min-height: 100vh;
width: 100%;

color: #fff;

h1 {
    margin-bottom: 1rem;
}

p{
    font-style: italic;
}
}
`;

export const BackLink = styled(Link)`
  margin-top: 1rem;
  padding: 4px 16px;

  color: #000;
  background-color: rgba(255, 255, 255, 0.6);

  transition: background-color, transform 0.5s;

  border-radius: 4px;
  &:hover {
    background-color: #fff;
    transform: scale(1.05);
  }
`;
