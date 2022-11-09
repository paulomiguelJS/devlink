import { Logo } from "../../components/Logo";
import { Container, BackLink } from "./styles";

export function Error() {
  return (
    <Container>
      <Logo />
      <h1>Page not found!</h1>
      <p>This page you're looking for, doesn't exist.</p>
      <BackLink to="/">Back to Homepage</BackLink>
    </Container>
  );
}
