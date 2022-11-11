import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 1rem 0;

  footer {
    display: flex;
    justify-content: center;
    gap: 1rem;
    margin: 1rem;
  }
`;

export const LinksContainer = styled.main`
  display: flex;
  flex-direction: column;
  max-width: 600px;
  width: 80%;
  text-align: center;

  section {
    background-color: #fff;
    width: 100%;
    margin-bottom: 1rem;
    padding: 8px 0;
    user-select: none;
    border-radius: 4px;
    transition: transform 0.7s;

    &:hover {
      transform: scale(1.05);
    }
    p {
      font-size: 1rem;
      line-height: 150%;
      color: #000;
    }
  }
`;
