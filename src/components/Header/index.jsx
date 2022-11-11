import { Container } from "./styles";
import { BiLogOut } from "react-icons/bi";
import { Link } from "react-router-dom";

import { auth } from "../../services/firebaseConnection";
import { signOut } from "firebase/auth";

export function Header() {
  async function handleLogout() {
    await signOut(auth);
  }

  return (
    <Container>
      <nav>
        <button onClick={handleLogout}>
          <BiLogOut size={28} color="#DB2629" />
        </button>
        <Link to="/admin">Admin</Link>
        <Link to="/admin/social">Social</Link>
      </nav>
    </Container>
  );
}
