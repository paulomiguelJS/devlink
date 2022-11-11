import { Container } from "./styles";
import { BiLogOut } from "react-icons/bi";
import { Link } from "react-router-dom";

export function Header() {
  async function handleLogout() {
    alert("test");
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
