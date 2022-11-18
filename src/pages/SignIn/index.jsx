import { Logo } from "../../components/Logo";
import { Container } from "./styles";
import { FcGoogle } from "react-icons/fc";

export function SignIn() {
  return (
    <>
      <Container>
        <Logo />

        <h1>Access your account</h1>
        <p>You can use your google account to log in to our plataform</p>

        <button type="button">
        <FcGoogle size={24} color="#fff" /> Login in with google 
        </button>
      </Container>
    </>
  );
}
