import { LogoLink } from "./styles";
import { Link } from "react-router-dom";

export function Logo() {
  return (
    <>
      <Link to="/home">
        <LogoLink>
          Dev<span>Link</span>
        </LogoLink>
      </Link>
    </>
  );
}
