import { Btn } from "./styles";

export function Button({ onClick, title, children }) {
  return (
    <>
      <Btn onClick={onClick}>
        {title}
        {children}
      </Btn>
    </>
  );
}
