import { Header } from "../../components/Header";
import { Logo } from "../../components/Logo";
import { Input } from "../../components/Input";

import { MdAddLink } from "react-icons/md";

import { Container, FormContainer } from "./styles";

export function Admin() {
  return (
    <Container>
      <Header />
      <Logo />
      <FormContainer>
        <label>Link Name</label>
        <Input placeholder="Link Name" />
        <label>URL link</label>
        <Input placeholder="URL link" />
        <label>Link Name</label>
        <Input placeholder="Link Name" />
        <section>
          <div>
            <label>Background link</label>
            <input type="color" />
          </div>
          <div>
            <label>Color link</label>
            <input type="color" />
          </div>
        </section>
        <button type="submit">
          Add new link <MdAddLink size={24} color="#fff" />
        </button>
      </FormContainer>
    </Container>
  );
}
