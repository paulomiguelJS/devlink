import styled from "styled-components";

export const Btn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  letter-spacing: 0.1rem;
  font-size: 0.8rem;

  width: 400px;
  max-width: 100%;
  height: 3rem;

  padding: 0 2rem;
  background-color: transparent;
  color: ${(props) => props.theme["white-100"]};

  border-radius: 4px;
  border-image: linear-gradient(
      to right,
      ${(props) => props.theme["yellow-400"]},
      ${(props) => props.theme["yellow-800"]}
    )
    1;

  transition: border 0.5s;

  &:hover {
    border-image: linear-gradient(
        to right,
        ${(props) => props.theme["red-200"]},
        ${(props) => props.theme["yellow-400"]}
      )
      1;
  }

  svg {
    margin-left: 1rem;
    margin-right: 1rem;
  }
`;
