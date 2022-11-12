import { useState } from "react";
import { Header } from "../../components/Header";
import { Logo } from "../../components/Logo";
import { Input } from "../../components/Input";

import { MdAddLink } from "react-icons/md";
import { FiTrash2 } from "react-icons/fi";

import { Container, FormContainer, Preview } from "./styles";

export function Admin() {
  const [nameInput, setNameInput] = useState("");
  const [urlInput, setUrlInput] = useState("");
  const [backgroundColorInput, setBackgroundColorInput] = useState("#f1f1f1");
  const [textColorInput, setTextColorInput] = useState("#121212");

  return (
    <Container>
      <Header />
      <Logo />
      <FormContainer>
        <label>Link Name</label>
        <Input
          placeholder="Link Name"
          value={nameInput}
          onChange={(e) => setNameInput(e.target.value)}
        />
        <label>URL link</label>
        <Input
          placeholder="URL link"
          value={urlInput}
          onChange={(e) => setUrlInput(e.target.value)}
        />

        <section>
          <div>
            <label>Background link</label>
            <input
              type="color"
              value={backgroundColorInput}
              onChange={(e) => setBackgroundColorInput(e.target.value)}
            />
          </div>
          <div>
            <label>Color link</label>
            <input
              type="color"
              value={textColorInput}
              onChange={(e) => setTextColorInput(e.target.value)}
            />
          </div>
        </section>

        {nameInput !== "" && (
          <Preview>
            <label> See how it looks like </label>
            <article style={{ backgroundColor: backgroundColorInput }}>
              <p style={{ color: textColorInput }}>{nameInput}</p>
            </article>
          </Preview>
        )}
        <button type="submit">
          Add new link <MdAddLink size={24} color="#fff" />
        </button>
      </FormContainer>

      <h2>My Links</h2>

      <article
        className="animate-pop"
        style={{ backgroundColor: "#000", color: "#fff" }}
      >
        <p>Telegram</p>
        <div>
          <button>
            <FiTrash2 size={18} color="#fff" />
          </button>
        </div>
      </article>
    </Container>
  );
}
