import { SocialIcon } from "./styles";

export function Social({ children, href }) {
  return (
    <SocialIcon href={href} rel="noopener noreferrer">
      {children}
    </SocialIcon>
  );
}
