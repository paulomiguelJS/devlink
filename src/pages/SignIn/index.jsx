import { Logo } from "../../components/Logo";
import { Container, UserProfile } from "./styles";
import { FcGoogle } from "react-icons/fc";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../../services/firebaseConnection";
import { useState } from "react";

export function SignIn() {
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

  return (
    <>
      <Container>
        <Logo />
        <UserProfile>
          {user.photoURL && <img src={user.photoURL} alt="Profile Photo"  referrerpolicy="no-referrer" />}
          <strong>{user.displayName}</strong>
          <small>{user.email}</small>
        </UserProfile>
        <h1>Access your account</h1>
        <p>You can use your google account to log in to our plataform</p>

        <button type="button" onClick={handleGoogleSignIn}>
          <FcGoogle size={24} color="#fff" /> Login in with google
        </button>
      </Container>
    </>
  );
}
