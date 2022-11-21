import { Logo } from "../../../components/Logo";
import { Container, UserProfile, FormContainer } from "./styles";
import { FcGoogle } from "react-icons/fc";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../../../services/firebaseConnection";
import { useState } from "react";
import { Input } from "../../../components/Input";


export function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState({});
  function handleGoogleSignIn() {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        setUser(result.user);
        console.log(result);
      })
      .catch((error) => {
        console.log(error);
      });
  }

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
    <>
      <Container>
        <Logo />
        <UserProfile>
          {user.photoURL && (
            <img
              src={user.photoURL}
              alt="Profile Photo"
              referrerpolicy="no-referrer"
            />
          )}
          <strong>{user.displayName}</strong>
          <small>{user.email}</small>
        </UserProfile>
        <h1>Access your account</h1>
        <p>You can use your google account to log in to our plataform</p>
        <Container>
          <Logo />
          <FormContainer onSubmit={handleLogin}>
            <Input
              type="email"
              placeholder="Type your best e-mail..."
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

            <button type="submit">Log In</button>
          </FormContainer>
        </Container>

        <button type="button" onClick={handleGoogleSignIn}>
          <FcGoogle size={24} color="#fff" /> Login in with google
        </button>
      </Container>
    </>
  );
}
