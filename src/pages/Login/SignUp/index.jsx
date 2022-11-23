import { Input } from "../../../components/Input";
import { Logo } from "../../../components/Logo";

import { Container, FormContainer } from "./styles";

import { auth } from "../../../services/firebaseConnection";
import { createUserWithEmailAndPassword } from "firebase/auth";

import { useNavigate } from "react-router-dom";
import { useState } from "react";

export function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  async function handleSignUp(e) {
    e.preventDefault();
    if (email !== "" && password !== "") {
      await createUserWithEmailAndPassword(auth, email, password)
        .then(() => {
          navigate("/admin", { replace: true });
        })
        .catch(() => {
          console.log("Error to create an accoutn");
        });
    } else {
      alert("Failed");
    }
  }

  return (
    <Container>
      <Logo />
      <h2>Sign Up</h2>
      <strong>It's quick and easy.</strong>

      <FormContainer onSubmit={handleSignUp}>
        <Input
          type="email"
          placeholder="joe@email.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          type="password"
          placeholder="*********"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button type="submit">Create new account</button>
      </FormContainer>
    </Container>
  );
}
