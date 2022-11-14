import { useState } from "react";
import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { Container } from "./styles";
import { MdAddLink } from "react-icons/md";

export function Network() {
  const [facebook, setFacebook] = useState("");
  const [instagram, setInstagram] = useState("");
  const [youtube, setYoutube] = useState("");

  async function handleSalve(e) {
    alert("Teste")
  }

  return (
    <Container>
      <Header />
      <h1>Your social medias</h1>
      <form onSubmit={handleSalve}>
        <label>Facebook link</label>
        <Input
          placeholder="Type your facebook url"
          value={facebook}
          onChange={(e) => setFacebook(e.target.value)}
        />
        <label>Instagram link</label>
        <Input
          placeholder="Type your Instagram url"
          valye={instagram}
          onChange={(e) => setInstagram(e.target.value)}
        />
        <label>Youtube link</label>
        <Input
          placeholder="Type your Youtube url"
          value={youtube}
          onChange={(e) => setYoutube(e.target.value)}
        />

        <button type="submit">
          Save links <MdAddLink size={24} color="#fff" />
        </button>
      </form>
    </Container>
  );
}
