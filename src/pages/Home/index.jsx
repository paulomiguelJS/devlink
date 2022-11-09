import { Container, LinksContainer } from "./styles";

export function Home() {
  return (
    <Container>
      <h1>Dev Links</h1>
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
    </Container>
  );
}
