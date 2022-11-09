import { SocialIcon } from "./styles";

export function Social({ children, url }) {
  return (
    <SocialIcon href={url} rel="noopener noreferrer" target="_blank">
      {children}
    </SocialIcon>
  );
}
