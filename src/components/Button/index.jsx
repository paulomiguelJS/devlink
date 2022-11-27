import { Btn } from "./styles";

export function Button({ onClick, title, children, className }) {
  return (
    <>
      <Btn onClick={onClick} className={className}>
        {title}
        {children}
      </Btn>
    </>
  );
}
