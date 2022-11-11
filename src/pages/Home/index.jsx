import { Container, LinksContainer } from "./styles";
import { Social } from "../../components/Social";
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";
import { Logo } from "../../components/Logo";

export function Home() {
  return (
    <Container>
      <Logo />
      <span>See my links</span>

      <LinksContainer>
        <section>
          <a href="#">
            <p>Youtube Channel</p>
          </a>
        </section>
      </LinksContainer>
      <LinksContainer>
        <section>
          <a href="#">
            <p>Only fans</p>
          </a>
        </section>
      </LinksContainer>
      <LinksContainer>
        <section>
          <a href="#">
            <p>Twitch</p>
          </a>
        </section>
      </LinksContainer>
      <LinksContainer>
        <section>
          <a href="#">
            <p>Instagram</p>
          </a>
        </section>
      </LinksContainer>
      <footer>
        <Social url="https://www.google.com">
          <FaFacebook size={35} color="#FFF" />
        </Social>
        <Social url="https://www.google.com">
          <FaYoutube size={35} color="#FFF" />
        </Social>
        <Social url="https://www.google.com">
          <FaInstagram size={35} color="#FFF" />
        </Social>
      </footer>
    </Container>
  );
}
