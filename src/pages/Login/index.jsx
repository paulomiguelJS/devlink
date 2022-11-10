import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../services/firebaseConnection";
import { toast } from "react-toastify";

import { Logo } from "../../components/Logo";
import { Container, FormContainer } from "./styles";

export function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  function handleLogin(event) {
    event.preventDefault();
    if (email === "" || password === "") {
      alert("Please fill the fields");
      return;
    }
    signInWithEmailAndPassword(auth, email, password)
      .then(() => {
        toast.success("Welcome to our plataform");

        navigate("/admin", { replace: true });
      })
      .catch(() => {
        toast.error("Error, try again");
        console.log("Error");
      });
  }
  return (
    <Container>
      <Logo />
      <FormContainer onSubmit={handleLogin}>
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
        <button type="submit">Log In</button>
      </FormContainer>
    </Container>
  );
}
