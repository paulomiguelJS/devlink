import { useState, useEffect } from "react";
import { Header } from "../../components/Header";
import { Logo } from "../../components/Logo";
import { Input } from "../../components/Input";

import { db } from "../../services/firebaseConnection";
import {
  addDoc,
  collection,
  onSnapshot,
  query,
  orderBy,
  doc,
  deleteDoc,
} from "firebase/firestore";

import { MdAddLink } from "react-icons/md";
import { FiTrash2 } from "react-icons/fi";
import { toast } from "react-toastify";

import { Container, FormContainer, Preview } from "./styles";

export function Admin() {
  const [nameInput, setNameInput] = useState("");
  const [urlInput, setUrlInput] = useState("");
  const [backgroundColorInput, setBackgroundColorInput] = useState("#f1f1f1");
  const [textColorInput, setTextColorInput] = useState("#121212");

  const [links, setLinks] = useState([]);

  useEffect(() => {
    const linksRef = collection(db, "links");
    const queryRef = query(linksRef, orderBy("created", "asc"));

    const unsub = onSnapshot(queryRef, (snapshot) => {
      let list = [];
      snapshot.forEach((doc) => {
        list.push({
          id: doc.id,
          name: doc.data().name,
          url: doc.data().url,
          bg: doc.data().bg,
          color: doc.data().color,
        });
      });
      setLinks(list);
    });
  }, []);

  async function handleRegister(e) {
    e.preventDefault();
    if (nameInput === "" || urlInput === "") {
      toast.warn("Please, fill all the fields");
      return;
    }

    addDoc(collection(db, "links"), {
      name: nameInput,
      url: urlInput,
      bg: backgroundColorInput,
      color: textColorInput,
      created: new Date(),
    })
      .then(() => {
        setNameInput("");
        setUrlInput("");
        toast.success("The link has been registred");

        console.log("The link has been registred");
      })
      .catch((error) => {
        toast.error("Ops, error to save the link");
      });
  }

  async function handleDeleteLink(id) {
    const docRef = doc(db, "links", id);
    await deleteDoc(docRef);
  }

  return (
    <Container>
      <Header />
      <Logo />
      <FormContainer onSubmit={handleRegister}>
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

      {links.map((item, id) => (
        <article
          key={id}
          className="animate-pop"
          style={{ backgroundColor: item.bg, color: item.color }}
        >
          <p>{item.name}</p>
          <div>
            <button onClick={() => handleDeleteLink(item.id)}>
              <FiTrash2 size={18} color="#fff" />
            </button>
          </div>
        </article>
      ))}
    </Container>
  );
}
