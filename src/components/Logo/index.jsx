import { LogoLink } from "./styles";
import { Link } from "react-router-dom";

export function Logo({variant}) {
  return (
    <>
      <Link to="/home">
        <LogoLink variant={variant}>
          Dev<span>Link</span>
        </LogoLink>
      </Link>
    </>
  );
}
