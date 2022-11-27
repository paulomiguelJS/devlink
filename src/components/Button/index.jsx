import { Btn } from "./styles";

export function Button({ onClick, title, children, className, type }) {
  return (
    <>
      <Btn onClick={onClick} className={className} type={type}>
        {title}
        {children}
      </Btn>
    </>
  );
}
