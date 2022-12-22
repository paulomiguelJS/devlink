import { Logo } from "../../../components/Logo";
import { Button } from "../../../components/Button";

import { Container, FormContainer } from "./styles";

import { FcGoogle } from "react-icons/fc";

import { auth } from "../../../services/firebaseConnection";
import {
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";

import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

import { toast } from "react-toastify";

import { Input } from "../../../components/Input";

export function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState({})

  const navigate = useNavigate();

  function handleLogin(event) {
    event.preventDefault();

    if (email === "" || password === "") {
      toast.warning("Please fill the fields");
      return;
    }

    signInWithEmailAndPassword(auth, email, password)
      .then((result) => {
        navigate("/admin", { replace: true });
        setUser(result);
        toast.success("Welcome to our plataform");
      })
      .catch(() => {
        toast.error("Error, try again");
      });
  }

  function handleGoogleSignIn() {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        setUser(result.user);
        navigate("/admin", { replace: true });
        toast.success("Welcome to our plataform");
      })
      .catch(() => {
        toast.error("Error, try again");
      });
  }

  return (
    <Container>
      <Logo />
      <h2>Access your account</h2>
      {user.photoURL && (
        <img
          src={user.photoURL}
          alt="Profile Photo"
          referrerpolicy="no-referrer"
        />
      )}
      <strong>{user.displayName}</strong>
      <small>{user.email}</small>
      <FormContainer onSubmit={handleLogin}>
        <Input
          type="email"
          placeholder="joe@email.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          type="password"
          placeholder="********"
          autoComplete="on"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button className="googleLogIn" type="submit" title="Log In" />

        <strong>OR</strong>

        <Button
          type="button"
          onClick={handleGoogleSignIn}
          title="Log in with google"
        >
          <FcGoogle size={24} color="#fff" />
        </Button>

        <span>
          Don't have an account? <Link to="/signup">Sign Up</Link>
        </span>
      </FormContainer>
    </Container>
  );
}
