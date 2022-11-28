import { Container } from "./styles";
import { BiLogOut } from "react-icons/bi";
import { Link } from "react-router-dom";

import { auth } from "../../services/firebaseConnection";
import { signOut } from "firebase/auth";
import { Logo } from "../Logo";

export function Header() {
  async function handleLogout() {
    await signOut(auth);
  }

  return (
    <Container>
      <nav>
        <div>
          <button onClick={handleLogout}>
            <Link to="/">
              <BiLogOut size={28} color="#DB2629" />
            </Link>
          </button>
          <Link to="/admin">Admin</Link>
          <Link to="/admin/social">Social</Link>
          <Link target="_blank" rel="noopener noreferrer" to="/home">
            My Links
          </Link>
        </div>
        <Logo variant="smaller" />
      </nav>
    </Container>
  );
}
