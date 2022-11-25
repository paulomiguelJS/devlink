import styled from "styled-components";

export const InputContainer = styled.input`
  height: 3rem;
  margin-bottom: 1rem;
  padding: 0 8px;
  border: transparent;
  border-radius: 4px;

  &::placeholder {
    font-size: 0.8rem;
  }

  &:focus {
    outline: ${(props) => props.theme["yellow-400"]} solid 3px;
  }
`;
