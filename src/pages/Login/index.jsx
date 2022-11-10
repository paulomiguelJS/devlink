import { useState } from "react";

import { Logo } from "../../components/Logo";
import { Container, FormContainer } from "./styles";

export function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  console.log(email);
  return (
    <Container>
      <Logo />
      <FormContainer action="">
        <input
          type="email"
          placeholder="Type your best e-mail..."
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="********"
          autoComplete="on"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit"></button>
      </FormContainer>
    </Container>
  );
}
